package types

// DONTCOVER

import (
	sdkerrors "cosmossdk.io/errors"
)

// x/manager module sentinel errors
var (
	ErrInvalidSigner                        = sdkerrors.Register(ModuleName, 1100, "expected gov account as only signer for proposal message")
	ErrElementAlreadyExists                 = sdkerrors.Register(ModuleName, 1101, "element already exists")
	ErrInvalidParamLength                   = sdkerrors.Register(ModuleName, 1102, "invalid parameter length")
	ErrInvalidEvmAccount                    = sdkerrors.Register(ModuleName, 1103, "invalid evm account")
	ErrInvalidSignature                     = sdkerrors.Register(ModuleName, 1104, "invalid signature")
	ErrOperatorAndManagerAccountDuplicate   = sdkerrors.Register(ModuleName, 1105, "operator account and manager account should not be the same")
	ErrOperatorAndManagerAccountAlreadyBind = sdkerrors.Register(ModuleName, 1106, "operator account and manager account already bind")
	ErrManagerNotRegister                   = sdkerrors.Register(ModuleName, 1107, "mananger not register")
	ErrManagerAlreadyBind                   = sdkerrors.Register(ModuleName, 1108, "mananger already bind")
	ErrOperatorAlreadyBind                  = sdkerrors.Register(ModuleName, 1109, "operator already bind")
	ErrManagerNotActivate                   = sdkerrors.Register(ModuleName, 1110, "manager not activate")
	ErrManagerNotBind                       = sdkerrors.Register(ModuleName, 1111, "manager not bind to an operator")
	ErrManagerConnParamsNotSet              = sdkerrors.Register(ModuleName, 1112, "manager connection params not set")
	ErrManagerRegionNotSet                  = sdkerrors.Register(ModuleName, 1113, "manager region not set")
	ErrManagerRegionChangeNotAllow          = sdkerrors.Register(ModuleName, 1114, "manager region change is not allowed")
	ErrInvalidRegion                        = sdkerrors.Register(ModuleName, 1115, "invalid region")
	ErrInvalidManagerRegisterStatus         = sdkerrors.Register(ModuleName, 1116, "invalid manager register status")
	ErrInvalidManagerLicense                = sdkerrors.Register(ModuleName, 1117, "invalid manager activate license")
)
