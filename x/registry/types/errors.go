package types

// DONTCOVER

import (
	sdkerrors "cosmossdk.io/errors"
)

// x/registry module sentinel errors
var (
	ErrInvalidSigner        = sdkerrors.Register(ModuleName, 1100, "expected gov account as only signer for proposal message")
	ErrElementAlreadyExists = sdkerrors.Register(ModuleName, 1101, "element already exists")
	ErrInvalidParamLength   = sdkerrors.Register(ModuleName, 1102, "invalid parameter length")
	ErrSuperiorNotSet       = sdkerrors.Register(ModuleName, 1103, "superior not set")
)
