package types

// DONTCOVER

import (
	sdkerrors "cosmossdk.io/errors"
)

// x/manager module sentinel errors
var (
	ErrInvalidSigner                        = sdkerrors.Register(ModuleName, 1100, "expected gov account as only signer for proposal message")
	ErrElementAlreadyExists                 = sdkerrors.Register(ModuleName, 1101, "element already exists")
	ErrParamExceedMaxLength                 = sdkerrors.Register(ModuleName, 1102, "parameter exceed max length")
	ErrInvalidEvmAccount                    = sdkerrors.Register(ModuleName, 1103, "invalid evm account")
	ErrInvalidSignature                     = sdkerrors.Register(ModuleName, 1104, "invalid signature")
	ErrOperatorAndManagerAccountDuplicate   = sdkerrors.Register(ModuleName, 1105, "operator account and manager account should not be the same")
	ErrOperatorAndManagerAccountAlreadyBind = sdkerrors.Register(ModuleName, 1106, "operator account and manager account already bind")
	ErrManagerNotRegister                   = sdkerrors.Register(ModuleName, 1107, "mananger not register yet")
	ErrManagerAlreadyBind                   = sdkerrors.Register(ModuleName, 1108, "mananger already bind")
	ErrOperatorAlreadyBind                  = sdkerrors.Register(ModuleName, 1109, "operator already bind")
)
