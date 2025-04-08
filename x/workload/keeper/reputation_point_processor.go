package keeper

import (
	"context"
	edgenodetypes "enreach/x/edgenode/types"
	"enreach/x/workload/types"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
)

func (k Keeper) ProcessEraReputationPoint(goCtx context.Context) error {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, found := k.GetPendingNextEra(ctx)
	if found {
		// during era change, skip this block to avoid any unknown boundary issue
		return nil
	}

	currentEraInfo, _ := k.GetCurrentEra(ctx)
	currentEra := currentEraInfo.Number
	blockHeight := uint64(ctx.BlockHeight())

	// Only start to process ReputationPointChangeData when the current era is >= 3
	// because the manager starts to calculate and submit era_1's ReputationPointChangeData at era_2
	// so all era_1's ReputationPointChangeData data are ready at the end of era_2
	// then we can start to process era#1's ReputationPointChangeData at era_3
	if currentEra >= 3 {
		// Get the last processed era
		lastEraProcessData, found := k.GetLastEraProcessData(ctx)
		if !found {
			// This is the first time to run, start to process from era_1
			toProcessEra := uint64(1)
			totalNodesCount := k.GetReputationPointChangeDataCountByEra(ctx, toProcessEra)

			lastEraProcessData = createNewEraProcessData(ctx, k, toProcessEra, totalNodesCount)
		}

		if lastEraProcessData.Status != string(types.EPS_DONE) {
			// Get the process batch size
			// TODO: Get it from param setting store
			batchSize := k.GetWorkreportProcessBatchSize(ctx)

			// Build the PageRequest
			var pageReq query.PageRequest
			if lastEraProcessData.Pagination == nil {
				// The first request of this era
				pageReq = query.PageRequest{
					Offset:     0,
					Limit:      batchSize,
					CountTotal: false,
					Reverse:    false,
				}
			} else {
				pageReq = query.PageRequest{
					Key:        lastEraProcessData.Pagination.NextKey,
					Limit:      batchSize,
					CountTotal: false,
					Reverse:    false,
				}
			}

			// Retrieve the ReputationPointChangeDatas to process
			reputationPointChangeDatas, pageResp, err := k.GetReputationPointChangeDatasPaginated(ctx, lastEraProcessData.Era, &pageReq)
			if err != nil {
				return err
			}

			// Process ReputationPointChangeDatas
			processReputationPointChangeDatas(ctx, k, lastEraProcessData.Era, &reputationPointChangeDatas)

			// Update processed era data
			lastEraProcessData.ProcessedNodesCount += uint64(len(reputationPointChangeDatas))
			lastEraProcessData.UpdateAt = blockHeight

			if pageResp.NextKey != nil {
				lastEraProcessData.Status = string(types.EPS_PROCESSING)
				lastEraProcessData.Pagination = pageResp
			} else {
				// Already process all the ReputationPointChangeDatas of the specific era
				lastEraProcessData.Status = string(types.EPS_DONE)
				lastEraProcessData.Pagination = nil

				// Emit era workload process done event
				ctx.EventManager().EmitEvent(
					sdk.NewEvent(types.EventTypeEraReputationPointProcessEnded,
						sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
						sdk.NewAttribute(types.AttributeKeyEra, strconv.FormatUint(lastEraProcessData.Era, 10)),
						sdk.NewAttribute(types.AttributeKeyTotalNodesCount, strconv.FormatUint(lastEraProcessData.TotalNodesCount, 10)),
						sdk.NewAttribute(types.AttributeKeyProcessedNodesCount, strconv.FormatUint(lastEraProcessData.ProcessedNodesCount, 10)),
						sdk.NewAttribute(types.AttributeKeyStartAt, strconv.FormatUint(lastEraProcessData.StartAt, 10)),
						sdk.NewAttribute(types.AttributeKeyEndAt, strconv.FormatUint(lastEraProcessData.UpdateAt, 10)),
					),
				)
			}

			// Save the lastEraProcessData to store
			k.SetLastEraProcessData(ctx, &lastEraProcessData)
			k.SetEraProcessData(ctx, &lastEraProcessData)
		}

		// If finish processing for the specific era, check whether there're new era to process
		// When at era_N, can only process data up to era_N-2
		if lastEraProcessData.Status == string(types.EPS_DONE) {
			if currentEra-lastEraProcessData.Era <= 2 {
				// Nothing to process
			} else {
				// Create next era process data
				nextProcessEra := lastEraProcessData.Era + 1
				totalNodesCount := k.GetReputationPointChangeDataCountByEra(ctx, nextProcessEra)

				newEraProcessData := createNewEraProcessData(ctx, k, nextProcessEra, totalNodesCount)

				k.SetLastEraProcessData(ctx, &newEraProcessData)
				k.AppendEraProcessData(ctx, &newEraProcessData)
			}
		}
	}

	return nil
}

func createNewEraProcessData(ctx sdk.Context, k Keeper, era uint64, totalNodesCount uint64) types.EraProcessData {
	blockHeight := uint64(ctx.BlockHeight())
	newEraProcessData := types.EraProcessData{
		Era:                 era,
		TotalNodesCount:     totalNodesCount,
		ProcessedNodesCount: 0,
		StartAt:             blockHeight,
		UpdateAt:            blockHeight,
		Status:              string(types.EPS_INIT),
		Pagination:          nil,
	}

	k.SetLastEraProcessData(ctx, &newEraProcessData)
	k.AppendEraProcessData(ctx, &newEraProcessData)

	// Emit era workload process start event
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeEraReputationPointProcessStarted,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyEra, strconv.FormatUint(era, 10)),
			sdk.NewAttribute(types.AttributeKeyTotalNodesCount, strconv.FormatUint(totalNodesCount, 10)),
			sdk.NewAttribute(types.AttributeKeyStartAt, strconv.FormatUint(blockHeight, 10)),
		),
	)

	return newEraProcessData
}

func processReputationPointChangeDatas(ctx sdk.Context, k Keeper, era uint64, reputationPointChangeDatas *[]types.ReputationPointChangeData) error {

	aggregatedManagerRPWorkloadMap := make(map[string]types.ManagerRPWorkload)
	blockHeight := uint64(ctx.BlockHeight())

	for _, pointChangeData := range *reputationPointChangeDatas {
		nodeID := pointChangeData.NodeID
		deltaPoint, managerRPWorkloadMap := processReputationPointChangeData(&pointChangeData)

		// Append the ReputationDeltaPoint to the store
		nodeDeltaPoint := types.ReputationDeltaPoint{
			Era:        era,
			NodeID:     nodeID,
			DeltaPoint: deltaPoint,
			CreateAt:   blockHeight,
		}
		// Every ReputationDeltaPoint for a dedicated era should have unique nodeID, so just simply append here
		k.AppendReputationDeltaPoint(ctx, &nodeDeltaPoint)

		// Update the final ReputationPoint to the node and save to the store
		resp, err := k.edgenodeKeeper.Node(ctx, &edgenodetypes.QueryGetNodeRequest{NodeID: nodeID})
		if err != nil {
			continue
		}
		node := resp.Node

		node.ReputationPoint += deltaPoint
		node.UpdateAt = blockHeight
		k.edgenodeKeeper.SetNode(ctx, node)

		// Aggregate the ManagerRPWorkload
		for managerAccount, managerWorkload := range managerRPWorkloadMap {
			if aggregatedWorkload, ok := aggregatedManagerRPWorkloadMap[managerAccount]; !ok {
				aggregatedManagerRPWorkloadMap[managerAccount] = managerWorkload
			} else {
				aggregatedWorkload.ReportedNodesCount += managerWorkload.ReportedNodesCount
				aggregatedWorkload.Score += managerWorkload.Score
				aggregatedManagerRPWorkloadMap[managerAccount] = aggregatedWorkload
			}
		}
	}

	for managerAccount, aggregatedWorkload := range aggregatedManagerRPWorkloadMap {

		managerWorkloadDB, found := k.GetManagerRPWorkload(ctx, era, managerAccount)
		if !found {
			// Create a new ManagerRPWorkload to store
			managerWorkloadDB = types.ManagerRPWorkload{
				Era:                era,
				ManagerAccount:     managerAccount,
				ReportedNodesCount: aggregatedWorkload.ReportedNodesCount,
				Score:              aggregatedWorkload.Score,
				CreateAt:           blockHeight,
				UpdateAt:           blockHeight,
			}
			k.AppendManagerRPWorkload(ctx, &managerWorkloadDB)
		} else {
			// Aggregate and update the existing ManagerRPWorkload
			managerWorkloadDB.ReportedNodesCount += aggregatedWorkload.ReportedNodesCount
			managerWorkloadDB.Score += aggregatedWorkload.Score
			k.SetManagerRPWorkload(ctx, &managerWorkloadDB)
		}

	}

	return nil
}

func processReputationPointChangeData(pointChangeData *types.ReputationPointChangeData) (int64, map[string]types.ManagerRPWorkload) {

	/// PS: Right now we simply calculate the average point among all managers
	/// 	After we have a detail design for the keeper workload/reputation system design,
	///     we will re-implement this logic

	managerWorkloadMap := make(map[string]types.ManagerRPWorkload, len(pointChangeData.Data))

	var totalDeltaPoints int64 = 0
	for manager, nodePoint := range pointChangeData.Data {
		totalDeltaPoints += nodePoint.DeltaPoint

		managerWorkloadMap[manager] = types.ManagerRPWorkload{
			ReportedNodesCount: 1,
			Score:              1, // Simply earn 1 point for 1 node reported
		}
	}

	averageDeltaPoint := totalDeltaPoints / int64(len(pointChangeData.Data))

	return averageDeltaPoint, managerWorkloadMap
}
