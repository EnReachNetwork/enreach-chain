package keeper

import (
	"context"
	"strconv"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"enreach/x/workload/types"
)

func (k msgServer) UpdateParam(goCtx context.Context, msg *types.MsgUpdateParam) (*types.MsgUpdateParamResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// tx caller must be superior
	superior, isFound := k.GetSuperior(ctx)
	if !isFound {
		return nil, types.ErrSuperiorNotSet
	}
	if superior.Account != msg.Signer {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Only superior can execute this call")
	}

	// Retieve the existing params from store
	paramsDB := k.GetParams(ctx)

	// Validate the input param key and value
	switch msg.ParamKey {
	case types.PK_EPOCH_LENGTH:
		checkParamValueInvalidInteger(msg.ParamKey, msg.ParamValue)

		newEpochLength, _ := strconv.Atoi(msg.ParamValue)
		if newEpochLength < types.MIN_EPOCH_LENGTH || newEpochLength > types.MAX_EPOCH_LENGTH {
			return nil, errorsmod.Wrapf(types.ErrInvalidParamValue,
				"%s value must be between %d and %d",
				types.PK_EPOCH_LENGTH, types.MIN_EPOCH_LENGTH, types.MAX_EPOCH_LENGTH)
		}
	case types.PK_ERA_LENGTH:
		checkParamValueInvalidInteger(msg.ParamKey, msg.ParamValue)

		newEraLength, _ := strconv.Atoi(msg.ParamValue)
		currentEpochLengthValue := paramsDB.Data[types.PK_EPOCH_LENGTH]
		currentEpochLength, _ := strconv.Atoi(currentEpochLengthValue)
		// EraLength must be at least 4 times of EpochLength
		if newEraLength < 4*currentEpochLength || newEraLength > types.MAX_ERA_LENGTH {
			return nil, errorsmod.Wrapf(types.ErrInvalidParamValue,
				"%s value must be between %d and %d",
				types.PK_ERA_LENGTH, 4*currentEpochLength, types.MAX_ERA_LENGTH)
		}
		if newEraLength%currentEpochLength != 0 {
			return nil, errorsmod.Wrapf(types.ErrInvalidParamValue,
				"%s value must be a multiple of current EpochLength %s",
				types.PK_ERA_LENGTH, types.PK_EPOCH_LENGTH)
		}
	case types.PK_WORKREPORT_PROCESS_BATCH_SIZE:
		checkParamValueInvalidInteger(msg.ParamKey, msg.ParamValue)

		newBatchSize, _ := strconv.Atoi(msg.ParamValue)
		if newBatchSize > types.MAX_WORKREPORT_PROCESS_BATCH_SIZE {
			return nil, errorsmod.Wrapf(types.ErrInvalidParamValue,
				"%s value must be less than %d",
				types.PK_WORKREPORT_PROCESS_BATCH_SIZE, types.MAX_WORKREPORT_PROCESS_BATCH_SIZE)
		}
	case types.PK_REPUTATION_POINT_PROCESS_BATCH_SIZE:
		checkParamValueInvalidInteger(msg.ParamKey, msg.ParamValue)

		newBatchSize, _ := strconv.Atoi(msg.ParamValue)
		if newBatchSize > types.MAX_REPUTATION_POINT_PROCESS_BATCH_SIZE {
			return nil, errorsmod.Wrapf(types.ErrInvalidParamValue,
				"%s value must be less than %d",
				types.PK_REPUTATION_POINT_PROCESS_BATCH_SIZE, types.MAX_REPUTATION_POINT_PROCESS_BATCH_SIZE)
		}
	case types.PK_CHEAT_STATUS_PROCESS_BATCH_SIZE:
		checkParamValueInvalidInteger(msg.ParamKey, msg.ParamValue)

		newBatchSize, _ := strconv.Atoi(msg.ParamValue)
		if newBatchSize > types.MAX_CHEAT_STATUS_PROCESS_BATCH_SIZE {
			return nil, errorsmod.Wrapf(types.ErrInvalidParamValue,
				"%s value must be less than %d",
				types.PK_CHEAT_STATUS_PROCESS_BATCH_SIZE, types.MAX_CHEAT_STATUS_PROCESS_BATCH_SIZE)
		}
	case types.PK_HISTORY_EPOCH_DATA_DEPTH:
		checkParamValueInvalidInteger(msg.ParamKey, msg.ParamValue)

		newEpochDataDepth, _ := strconv.Atoi(msg.ParamValue)
		if newEpochDataDepth < types.MIN_HISTORY_EPOCH_DATA_DEPTH || newEpochDataDepth > types.MAX_HISTORY_EPOCH_DATA_DEPTH {
			return nil, errorsmod.Wrapf(types.ErrInvalidParamValue,
				"%s value must be between %d and %d",
				types.PK_HISTORY_EPOCH_DATA_DEPTH, types.MIN_HISTORY_EPOCH_DATA_DEPTH, types.MAX_HISTORY_EPOCH_DATA_DEPTH)
		}
	case types.PK_HISTORY_ERA_DATA_DEPTH:
		checkParamValueInvalidInteger(msg.ParamKey, msg.ParamValue)

		newEraDataDepth, _ := strconv.Atoi(msg.ParamValue)
		if newEraDataDepth < types.MIN_HISTORY_ERA_DATA_DEPTH || newEraDataDepth > types.MAX_HISTORY_ERA_DATA_DEPTH {
			return nil, errorsmod.Wrapf(types.ErrInvalidParamValue,
				"%s value must be between %d and %d",
				types.PK_HISTORY_ERA_DATA_DEPTH, types.MIN_HISTORY_ERA_DATA_DEPTH, types.MAX_HISTORY_ERA_DATA_DEPTH)
		}
	default:
		return nil, errorsmod.Wrapf(types.ErrInvalidParamKey, "%s is not a valid param key", msg.ParamKey)
	}

	// Update the param value and set to the store
	oldValue := paramsDB.Data[msg.ParamKey]
	paramsDB.Data[msg.ParamKey] = msg.ParamValue
	if err := k.SetParams(ctx, paramsDB); err != nil {
		return nil, err
	}

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeParamUpdated,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.Signer),
			sdk.NewAttribute(types.AttributeKeyParamKey, msg.ParamKey),
			sdk.NewAttribute(types.AttributeKeyOldParamValue, oldValue),
			sdk.NewAttribute(types.AttributeKeyNewParamValue, msg.ParamValue),
		),
	)

	return &types.MsgUpdateParamResponse{}, nil
}

func checkParamValueInvalidInteger(paramKey string, paramValue string) error {
	if paramValue == "" {
		return errorsmod.Wrapf(types.ErrInvalidParamValue, "%s value cannot be empty", paramKey)
	}
	intValue, err := strconv.Atoi(paramValue)
	if err != nil {
		return errorsmod.Wrapf(types.ErrInvalidParamValue, "%s must be a valid integer", paramKey)
	}
	if intValue <= 0 {
		return errorsmod.Wrapf(types.ErrInvalidParamValue, "%s value must be greater than 0", paramKey)
	}

	return nil
}
