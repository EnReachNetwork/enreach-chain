package keeper

import (
	"context"
	"enreach/x/workload/types"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
)

func (k Keeper) ProcessEpochWorkload(goCtx context.Context) error {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, found := k.GetPendingNextEpoch(ctx)
	if found {
		// during epoch change, skip this block to avoid any unknown boundary issue
		return nil
	}

	currentEpochInfo, _ := k.GetCurrentEpoch(ctx)
	currentEpoch := currentEpochInfo.Number
	blockHeight := uint64(ctx.BlockHeight())

	// Only start to process workreports data when the current epoch is >= 3
	// because the manager starts to calculate and submit epoch_1's workreports at epoch_2
	// so all epoch_1's workreports data are ready at the end of epoch_2
	// then we can start to process epoch#1's workreports at epoch_3
	if currentEpoch >= 3 {
		// Get the last processed epoch
		lastEpochProcessData, found := k.GetLastEpochProcessData(ctx)
		if !found {
			// This is the first time to run, start to process from epoch_1
			toProcessEpoch := uint64(1)
			totalNodesCount := k.GetWorkreportCountByEpoch(ctx, toProcessEpoch)

			lastEpochProcessData = createNewEpochProcessData(ctx, k, toProcessEpoch, totalNodesCount)
		}

		if lastEpochProcessData.Status != string(types.EPS_DONE) {
			// Get the workreport process batch size
			batchSize := k.GetWorkreportProcessBatchSize(ctx)

			// Build the PageRequest
			var pageReq query.PageRequest
			if lastEpochProcessData.Pagination == nil {
				// The first request of this epoch
				pageReq = query.PageRequest{
					Offset:     0,
					Limit:      batchSize,
					CountTotal: false,
					Reverse:    false,
				}
			} else {
				pageReq = query.PageRequest{
					Key:        lastEpochProcessData.Pagination.NextKey,
					Limit:      batchSize,
					CountTotal: false,
					Reverse:    false,
				}
			}

			// Retrieve the work reports to process
			workreports, pageResp, err := k.GetNodeWorkreportsPaginated(ctx, lastEpochProcessData.Epoch, &pageReq)
			if err != nil {
				return err
			}

			// Process work reports
			processWorkReportBatch(ctx, k, lastEpochProcessData.Epoch, &workreports)

			// Update processed epoch data
			lastEpochProcessData.ProcessedNodesCount += uint64(len(workreports))
			lastEpochProcessData.UpdateAt = blockHeight

			if pageResp.NextKey != nil {
				lastEpochProcessData.Status = string(types.EPS_PROCESSING)
				lastEpochProcessData.Pagination = pageResp
			} else {
				// Already process all the workreports data of the specific epoch
				lastEpochProcessData.Status = string(types.EPS_DONE)
				lastEpochProcessData.Pagination = nil

				// Emit epoch workload process done event
				ctx.EventManager().EmitEvent(
					sdk.NewEvent(types.EventTypeEpochWorkloadProcessEnded,
						sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
						sdk.NewAttribute(types.AttributeKeyEpoch, strconv.FormatUint(lastEpochProcessData.Epoch, 10)),
						sdk.NewAttribute(types.AttributeKeyTotalNodesCount, strconv.FormatUint(lastEpochProcessData.TotalNodesCount, 10)),
						sdk.NewAttribute(types.AttributeKeyProcessedNodesCount, strconv.FormatUint(lastEpochProcessData.ProcessedNodesCount, 10)),
						sdk.NewAttribute(types.AttributeKeyStartAt, strconv.FormatUint(lastEpochProcessData.StartAt, 10)),
						sdk.NewAttribute(types.AttributeKeyEndAt, strconv.FormatUint(lastEpochProcessData.UpdateAt, 10)),
					),
				)
			}

			// Save the lastEpochProcessData to store
			k.SetLastEpochProcessData(ctx, &lastEpochProcessData)
			k.SetEpochProcessData(ctx, &lastEpochProcessData)
		}

		// If finish processing for the specific epoch, check whether there're new epoch to process
		// When at epoch_N, can only process data up to epoch_N-2
		if lastEpochProcessData.Status == string(types.EPS_DONE) {
			if currentEpoch-lastEpochProcessData.Epoch <= 2 {
				// Nothing to process
			} else {
				// Create next epoch process data
				nextProcessEpoch := lastEpochProcessData.Epoch + 1
				totalNodesCount := k.GetWorkreportCountByEpoch(ctx, nextProcessEpoch)

				newEpochProcessData := createNewEpochProcessData(ctx, k, nextProcessEpoch, totalNodesCount)

				k.SetLastEpochProcessData(ctx, &newEpochProcessData)
				k.AppendEpochProcessData(ctx, &newEpochProcessData)
			}
		}
	}

	return nil
}

func createNewEpochProcessData(ctx sdk.Context, k Keeper, epoch uint64, totalNodesCount uint64) types.EpochProcessData {
	blockHeight := uint64(ctx.BlockHeight())
	newEpochProcessData := types.EpochProcessData{
		Epoch:               epoch,
		TotalNodesCount:     totalNodesCount,
		ProcessedNodesCount: 0,
		StartAt:             blockHeight,
		UpdateAt:            blockHeight,
		Status:              string(types.EPS_INIT),
		Pagination:          nil,
	}

	k.SetLastEpochProcessData(ctx, &newEpochProcessData)
	k.AppendEpochProcessData(ctx, &newEpochProcessData)

	// Emit epoch workload process start event
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeEpochWorkloadProcessStarted,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyEpoch, strconv.FormatUint(epoch, 10)),
			sdk.NewAttribute(types.AttributeKeyTotalNodesCount, strconv.FormatUint(totalNodesCount, 10)),
			sdk.NewAttribute(types.AttributeKeyStartAt, strconv.FormatUint(blockHeight, 10)),
		),
	)

	return newEpochProcessData
}

func processWorkReportBatch(ctx sdk.Context, k Keeper, epoch uint64, workreports *[]types.Workreport) error {

	aggregatedManagerWRWorkloadMap := make(map[string]types.ManagerWRWorkload)
	blockHeight := uint64(ctx.BlockHeight())

	for _, workreport := range *workreports {
		nodeScore, managerWorkloadMap := processWorkReport(&workreport)

		nodeWorkload := types.NodeWorkload{
			Epoch:    workreport.Epoch,
			NodeID:   workreport.NodeID,
			Score:    nodeScore,
			CreateAt: blockHeight,
		}
		// Append to the store for every node workload
		// every workreport for a dedicated epoch should have unique nodeID, so just simply append here
		k.AppendNodeWorkload(ctx, &nodeWorkload)

		for managerAccount, managerWorkload := range managerWorkloadMap {
			if aggregatedWorkload, ok := aggregatedManagerWRWorkloadMap[managerAccount]; !ok {
				aggregatedManagerWRWorkloadMap[managerAccount] = managerWorkload
			} else {
				aggregatedWorkload.ReportedNodesCount += managerWorkload.ReportedNodesCount
				aggregatedWorkload.Score += managerWorkload.Score
				aggregatedManagerWRWorkloadMap[managerAccount] = aggregatedWorkload
			}
		}
	}

	for managerAccount, aggregatedWorkload := range aggregatedManagerWRWorkloadMap {

		managerWorkloadDB, found := k.GetManagerWRWorkload(ctx, epoch, managerAccount)
		if !found {
			// Create a new ManagerWRWorkload to store
			managerWorkloadDB = types.ManagerWRWorkload{
				Epoch:              epoch,
				ManagerAccount:     managerAccount,
				ReportedNodesCount: aggregatedWorkload.ReportedNodesCount,
				Score:              aggregatedWorkload.Score,
				CreateAt:           blockHeight,
				UpdateAt:           blockHeight,
			}
			k.AppendManagerWRWorkload(ctx, &managerWorkloadDB)
		} else {
			// Aggregate and update the existing ManagerWRWorkload
			managerWorkloadDB.ReportedNodesCount += aggregatedWorkload.ReportedNodesCount
			managerWorkloadDB.Score += aggregatedWorkload.Score
			k.SetManagerWRWorkload(ctx, &managerWorkloadDB)
		}

	}

	return nil
}

func processWorkReport(workreport *types.Workreport) (uint64, map[string]types.ManagerWRWorkload) {

	/// PS: Right now we simply calculate the average score among all managers
	/// 	After we have a detail design for the keeper workload/reputation system design,
	///     we will re-implement this logic

	managerWorkloadMap := make(map[string]types.ManagerWRWorkload, len(workreport.ManagerScoreMap))

	var totalNodeScore uint64 = 0
	for manager, nodeScore := range workreport.ManagerScoreMap {
		totalNodeScore += nodeScore.Score

		managerWorkloadMap[manager] = types.ManagerWRWorkload{
			ReportedNodesCount: 1,
			Score:              1, // Simply earn 1 point for 1 node reported
		}
	}

	averageNodeScore := totalNodeScore / uint64(len(workreport.ManagerScoreMap))

	return averageNodeScore, managerWorkloadMap
}
