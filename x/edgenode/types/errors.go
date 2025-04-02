package types

// DONTCOVER

import (
	sdkerrors "cosmossdk.io/errors"
)

// x/edgenode module sentinel errors
var (
	ErrInvalidSigner                          = sdkerrors.Register(ModuleName, 1100, "expected gov account as only signer for proposal message")
	ErrInvalidParamLength                     = sdkerrors.Register(ModuleName, 1101, "invalid parameter length")
	ErrElementAlreadyExists                   = sdkerrors.Register(ModuleName, 1102, "element already exists")
	ErrNodeAlreadyBindToThisUser              = sdkerrors.Register(ModuleName, 1103, "node already bound to this user")
	ErrNodeAlreadyBindToOtherUser             = sdkerrors.Register(ModuleName, 1104, "node already bound to other user")
	ErrNodeNotBindYet                         = sdkerrors.Register(ModuleName, 1105, "node not bound yet")
	ErrUnbindUserIDNotMatch                   = sdkerrors.Register(ModuleName, 1106, "unbind userID not match")
	ErrInvalidRegion                          = sdkerrors.Register(ModuleName, 1107, "invalid region")
	ErrSuperiorNotSet                         = sdkerrors.Register(ModuleName, 1108, "superior not set")
	ErrInvalidSignature                       = sdkerrors.Register(ModuleName, 1109, "invalid signature")
	ErrNodeTrafficTypesCountExceedPerReqLimit = sdkerrors.Register(ModuleName, 1110, "nodeTrafficTypes element count exceed per request limit")
)
