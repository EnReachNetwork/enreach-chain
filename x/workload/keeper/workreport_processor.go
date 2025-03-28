package keeper

import (
	"context"
	"enreach/x/workload/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
)

func (k Keeper) ProcessEpochWorkreports(goCtx context.Context) error {
	ctx := sdk.UnwrapSDKContext(goCtx)

	currentEpoch := types.GetCurrentEpoch(ctx)
	blockHeight := uint64(ctx.BlockHeight())

	// Only start to process workreports data when the current epoch is >= 3
	// because the manager starts to calculate and submit epoch_1's workreports at epoch_2
	// so all epoch_1's workreports data are ready at the end of epoch_2
	// then we can start to process epoch#1's workreports at epoch_3
	if currentEpoch >= 3 {
		// Get the last processed epoch
		lastEpochProcessData, found := k.GetLastEpochProcessData(ctx)
		if !found {
			// This is the first time to run, the epoch data to process should be epoch-1
			toProcessEpoch := uint64(1)
			totalNodesCount := k.GetWorkreportCountByEpoch(ctx, toProcessEpoch)

			lastEpochProcessData = types.EpochProcessData{
				Epoch:               1,
				TotalNodesCount:     totalNodesCount,
				ProcessedNodesCount: 0,
				StartAt:             blockHeight,
				UpdateAt:            blockHeight,
				Status:              string(types.EPS_INIT),
				Pagination:          nil,
			}

			k.SetLastEpochProcessData(ctx, &lastEpochProcessData)
			k.AppendEpochProcessData(ctx, &lastEpochProcessData)
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

				newLastEpochProcessData := types.EpochProcessData{
					Epoch:               nextProcessEpoch,
					TotalNodesCount:     totalNodesCount,
					ProcessedNodesCount: 0,
					StartAt:             blockHeight,
					UpdateAt:            blockHeight,
					Status:              string(types.EPS_INIT),
					Pagination:          nil,
				}

				k.SetLastEpochProcessData(ctx, &newLastEpochProcessData)
				k.AppendEpochProcessData(ctx, &newLastEpochProcessData)
			}
		}
	}

	return nil
}

func processWorkReportBatch(ctx sdk.Context, k Keeper, epoch uint64, workreports *[]types.Workreport) error {

	aggregatedManagerWorkloadMap := make(map[string]types.ManagerWorkload)
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
			if aggregatedWorkload, ok := aggregatedManagerWorkloadMap[managerAccount]; !ok {
				aggregatedManagerWorkloadMap[managerAccount] = managerWorkload
			} else {
				aggregatedWorkload.ReportedNodesCount += managerWorkload.ReportedNodesCount
				aggregatedWorkload.Score += managerWorkload.Score
				aggregatedManagerWorkloadMap[managerAccount] = aggregatedWorkload
			}
		}
	}

	for managerAccount, aggregatedWorkload := range aggregatedManagerWorkloadMap {

		managerWorkloadDB, found := k.GetManagerWorkload(ctx, epoch, managerAccount)
		if !found {
			// Create a new ManagerWorkload to store
			managerWorkloadDB = types.ManagerWorkload{
				Epoch:              epoch,
				ManagerAccount:     managerAccount,
				ReportedNodesCount: aggregatedWorkload.ReportedNodesCount,
				Score:              aggregatedWorkload.Score,
				CreateAt:           blockHeight,
				UpdateAt:           blockHeight,
			}
			k.AppendManagerWorkload(ctx, &managerWorkloadDB)
		} else {
			// Aggregate and update the existing ManagerWorkload
			managerWorkloadDB.ReportedNodesCount += aggregatedWorkload.ReportedNodesCount
			managerWorkloadDB.Score += aggregatedWorkload.Score
			k.SetManagerWorkload(ctx, &managerWorkloadDB)
		}

	}

	return nil
}

func processWorkReport(workreport *types.Workreport) (uint64, map[string]types.ManagerWorkload) {

	/// PS: Right now we simply calculate the average score among all managers
	/// 	After we have a detail design for the keeper workload/reputation system design,
	///     we will re-implement this logic

	managerWorkloadMap := make(map[string]types.ManagerWorkload, len(workreport.ManagerScoreMap))

	var totalNodeScore uint64 = 0
	for manager, nodeScore := range workreport.ManagerScoreMap {
		totalNodeScore += nodeScore.Score

		managerWorkloadMap[manager] = types.ManagerWorkload{
			ReportedNodesCount: 1,
			Score:              1, // Simply earn 1 point for 1 node reported
		}
	}

	averageNodeScore := totalNodeScore / uint64(len(workreport.ManagerScoreMap))

	return averageNodeScore, managerWorkloadMap
}
