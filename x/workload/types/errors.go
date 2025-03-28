package types

// DONTCOVER

import (
	sdkerrors "cosmossdk.io/errors"
)

// x/workload module sentinel errors
var (
	ErrInvalidSigner                    = sdkerrors.Register(ModuleName, 1100, "expected gov account as only signer for proposal message")
	ErrManagerNotExist                  = sdkerrors.Register(ModuleName, 1101, "manager does not exist")
	ErrManagerNotActivate               = sdkerrors.Register(ModuleName, 1102, "manager is not activate")
	ErrManagerBlocked                   = sdkerrors.Register(ModuleName, 1103, "manager is blocked")
	ErrNodeNotExist                     = sdkerrors.Register(ModuleName, 1104, "node does not exist")
	ErrNodeNotActivate                  = sdkerrors.Register(ModuleName, 1105, "node is not activate")
	ErrRegionNotMatch                   = sdkerrors.Register(ModuleName, 1106, "region code not match")
	ErrInvalidParamLength               = sdkerrors.Register(ModuleName, 1107, "invalid parameter length")
	ErrNodeScoresCountExceedPerReqLimit = sdkerrors.Register(ModuleName, 1108, "nodescores count exceed per request limit")
	ErrInvalidEpoch                     = sdkerrors.Register(ModuleName, 1109, "invalid epoch")
	ErrSuperiorNotSet                   = sdkerrors.Register(ModuleName, 1110, "superior not set")
	ErrInvalidParamValue                = sdkerrors.Register(ModuleName, 1111, "invalid param value")
)
