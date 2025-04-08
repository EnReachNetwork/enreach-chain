package keeper

import (
	"context"
	edgenodetypes "enreach/x/edgenode/types"
	managertypes "enreach/x/manager/types"
	"enreach/x/workload/types"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
)

func (k Keeper) ProcessEraCheatStatus(goCtx context.Context) error {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, found := k.GetPendingNextEra(ctx)
	if found {
		// during era change, skip this block to avoid any unknown boundary issue
		return nil
	}

	currentEraInfo, _ := k.GetCurrentEra(ctx)
	currentEra := currentEraInfo.Number
	blockHeight := uint64(ctx.BlockHeight())

	// Only start to process CheatStatusCRData when the current era is >= 3
	// because the manager starts to calculate and submit era_1's CheatStatusCRData at era_2
	// so all era_1's CheatStatusCRData data are ready at the end of era_2
	// then we can start to process era#1's CheatStatusCRData at era_3
	if currentEra >= 3 {
		// Get the last processed era
		lastEraCheatStatusProcessData, found := k.GetLastEraCheatStatusProcessData(ctx)
		if !found {
			// This is the first time to run, start to process from era_1
			toProcessEra := uint64(1)
			totalNodesCount := k.GetCheatStatusCRDataCountByEra(ctx, toProcessEra)

			lastEraCheatStatusProcessData = createNewEraCheatStatusProcessData(ctx, k, toProcessEra, totalNodesCount)
		}

		if lastEraCheatStatusProcessData.Status != string(types.EPS_DONE) {
			// Get the process batch size
			// TODO: Get it from param setting store
			batchSize := k.GetWorkreportProcessBatchSize(ctx)

			// Build the PageRequest
			var pageReq query.PageRequest
			if lastEraCheatStatusProcessData.Pagination == nil {
				// The first request of this era
				pageReq = query.PageRequest{
					Offset:     0,
					Limit:      batchSize,
					CountTotal: false,
					Reverse:    false,
				}
			} else {
				pageReq = query.PageRequest{
					Key:        lastEraCheatStatusProcessData.Pagination.NextKey,
					Limit:      batchSize,
					CountTotal: false,
					Reverse:    false,
				}
			}

			// Retrieve the CheatStatusCRDatas to process
			cheatStatusCRDatas, pageResp, err := k.GetCheatStatusCRDatasPaginated(ctx, lastEraCheatStatusProcessData.Era, &pageReq)
			if err != nil {
				return err
			}

			// Process CheatStatusCRDatas
			processCheatStatusCRDatas(ctx, k, lastEraCheatStatusProcessData.Era, &cheatStatusCRDatas)

			// Update processed era data
			lastEraCheatStatusProcessData.ProcessedNodesCount += uint64(len(cheatStatusCRDatas))
			lastEraCheatStatusProcessData.UpdateAt = blockHeight

			if pageResp.NextKey != nil {
				lastEraCheatStatusProcessData.Status = string(types.EPS_PROCESSING)
				lastEraCheatStatusProcessData.Pagination = pageResp
			} else {
				// Already process all the CheatStatusCRDatas of the specific era
				lastEraCheatStatusProcessData.Status = string(types.EPS_DONE)
				lastEraCheatStatusProcessData.Pagination = nil

				// Emit era workload process done event
				ctx.EventManager().EmitEvent(
					sdk.NewEvent(types.EventTypeEraCheatStatusProcessEnded,
						sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
						sdk.NewAttribute(types.AttributeKeyEra, strconv.FormatUint(lastEraCheatStatusProcessData.Era, 10)),
						sdk.NewAttribute(types.AttributeKeyTotalNodesCount, strconv.FormatUint(lastEraCheatStatusProcessData.TotalNodesCount, 10)),
						sdk.NewAttribute(types.AttributeKeyProcessedNodesCount, strconv.FormatUint(lastEraCheatStatusProcessData.ProcessedNodesCount, 10)),
						sdk.NewAttribute(types.AttributeKeyStartAt, strconv.FormatUint(lastEraCheatStatusProcessData.StartAt, 10)),
						sdk.NewAttribute(types.AttributeKeyEndAt, strconv.FormatUint(lastEraCheatStatusProcessData.UpdateAt, 10)),
					),
				)
			}

			// Save the lastEraCheatStatusProcessData to store
			k.SetLastEraCheatStatusProcessData(ctx, &lastEraCheatStatusProcessData)
			k.SetEraCheatStatusProcessData(ctx, &lastEraCheatStatusProcessData)
		}

		// If finish processing for the specific era, check whether there're new era to process
		// When at era_N, can only process data up to era_N-2
		if lastEraCheatStatusProcessData.Status == string(types.EPS_DONE) {
			if currentEra-lastEraCheatStatusProcessData.Era <= 2 {
				// Nothing to process
			} else {
				// Create next era process data
				nextProcessEra := lastEraCheatStatusProcessData.Era + 1
				totalNodesCount := k.GetCheatStatusCRDataCountByEra(ctx, nextProcessEra)

				newEraCheatStatusProcessData := createNewEraCheatStatusProcessData(ctx, k, nextProcessEra, totalNodesCount)

				k.SetLastEraCheatStatusProcessData(ctx, &newEraCheatStatusProcessData)
				k.AppendEraCheatStatusProcessData(ctx, &newEraCheatStatusProcessData)
			}
		}
	}

	return nil
}

func createNewEraCheatStatusProcessData(ctx sdk.Context, k Keeper, era uint64, totalNodesCount uint64) types.EraCheatStatusProcessData {
	blockHeight := uint64(ctx.BlockHeight())
	newEraCheatStatusProcessData := types.EraCheatStatusProcessData{
		Era:                 era,
		TotalNodesCount:     totalNodesCount,
		ProcessedNodesCount: 0,
		StartAt:             blockHeight,
		UpdateAt:            blockHeight,
		Status:              string(types.EPS_INIT),
		Pagination:          nil,
	}

	k.SetLastEraCheatStatusProcessData(ctx, &newEraCheatStatusProcessData)
	k.AppendEraCheatStatusProcessData(ctx, &newEraCheatStatusProcessData)

	// Emit era workload process start event
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeEraCheatStatusProcessStarted,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyEra, strconv.FormatUint(era, 10)),
			sdk.NewAttribute(types.AttributeKeyTotalNodesCount, strconv.FormatUint(totalNodesCount, 10)),
			sdk.NewAttribute(types.AttributeKeyStartAt, strconv.FormatUint(blockHeight, 10)),
		),
	)

	return newEraCheatStatusProcessData
}

func processCheatStatusCRDatas(ctx sdk.Context, k Keeper, era uint64, cheatStatusCRDatas *[]types.CheatStatusCRData) error {

	aggregatedManagerCSWorkloadMap := make(map[string]types.ManagerCSWorkload)
	blockHeight := uint64(ctx.BlockHeight())

	for _, cheatStatusCRData := range *cheatStatusCRDatas {
		nodeID := cheatStatusCRData.NodeID
		cheatStatus, managerCSWorkloadMap, err := processCheatStatusCRData(ctx, k, &cheatStatusCRData)
		if err != nil {
			continue
		}

		// Set the cheat status to the node and save to the store
		resp, err := k.edgenodeKeeper.Node(ctx, &edgenodetypes.QueryGetNodeRequest{NodeID: nodeID})
		if err != nil {
			continue
		}
		node := resp.Node

		node.CheatStatus = cheatStatus
		node.UpdateAt = blockHeight
		k.edgenodeKeeper.SetNode(ctx, node)

		// Aggregate the ManagerCSWorkload
		for managerAccount, managerWorkload := range managerCSWorkloadMap {
			if aggregatedWorkload, ok := aggregatedManagerCSWorkloadMap[managerAccount]; !ok {
				aggregatedManagerCSWorkloadMap[managerAccount] = managerWorkload
			} else {
				aggregatedWorkload.ReportedNodesCount += managerWorkload.ReportedNodesCount
				aggregatedWorkload.Score += managerWorkload.Score
				aggregatedManagerCSWorkloadMap[managerAccount] = aggregatedWorkload
			}
		}
	}

	for managerAccount, aggregatedWorkload := range aggregatedManagerCSWorkloadMap {

		managerWorkloadDB, found := k.GetManagerCSWorkload(ctx, era, managerAccount)
		if !found {
			// Create a new ManagerCSWorkload to store
			managerWorkloadDB = types.ManagerCSWorkload{
				Era:                era,
				ManagerAccount:     managerAccount,
				ReportedNodesCount: aggregatedWorkload.ReportedNodesCount,
				Score:              aggregatedWorkload.Score,
				CreateAt:           blockHeight,
				UpdateAt:           blockHeight,
			}
			k.AppendManagerCSWorkload(ctx, &managerWorkloadDB)
		} else {
			// Aggregate and update the existing ManagerCSWorkload
			managerWorkloadDB.ReportedNodesCount += aggregatedWorkload.ReportedNodesCount
			managerWorkloadDB.Score += aggregatedWorkload.Score
			k.SetManagerCSWorkload(ctx, &managerWorkloadDB)
		}

	}

	return nil
}

func processCheatStatusCRData(ctx sdk.Context, k Keeper, cheatStatusCRData *types.CheatStatusCRData) (string, map[string]types.ManagerCSWorkload, error) {

	/// PS: Right now we simply count the status occurrence among all managers, if one specific status
	///		has occurred more than 1/2 of the total managers in this region, we will mark the node as this cheating status
	/// 	After we have a detail design for the keeper workload/reputation/cheating system design,
	///     we will re-implement this logic

	managerWorkloadMap := make(map[string]types.ManagerCSWorkload, len(cheatStatusCRData.Data))
	cheatStatusMap := make(map[string]uint32, len(cheatStatusCRData.Data))
	for manager, nodeData := range cheatStatusCRData.Data {
		cheatStatusMap[nodeData.CheatStatus] += 1

		managerWorkloadMap[manager] = types.ManagerCSWorkload{
			ReportedNodesCount: 1,
			Score:              1, // Simply earn 1 point for 1 node reported
		}
	}

	// Get manager count of this region
	resp, err := k.managerKeeper.GetManagerByRegion(ctx, &managertypes.QueryGetManagerByRegionRequest{})
	if err != nil {
		return "", nil, err
	}
	managerCountOfRegion := uint32(len(resp.Managers))
	threshold := managerCountOfRegion / 2

	for status, count := range cheatStatusMap {
		if count > threshold {
			// Mark the node as this cheating status
			return status, managerWorkloadMap, nil
		}
	}

	// No any status has exceed the threshold, doesn't change the status
	return "", managerWorkloadMap, nil
}
