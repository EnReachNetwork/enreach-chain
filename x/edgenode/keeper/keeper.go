package keeper

import (
	"context"
	"fmt"

	"cosmossdk.io/core/store"
	errorsmod "cosmossdk.io/errors"
	"cosmossdk.io/log"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"enreach/x/edgenode/types"
)

type (
	Keeper struct {
		cdc          codec.BinaryCodec
		storeService store.KVStoreService
		logger       log.Logger

		// the address capable of executing a MsgUpdateParams message. Typically, this
		// should be the x/gov module account.
		authority string

		registryKeeper types.RegistryKeeper
	}
)

func NewKeeper(
	cdc codec.BinaryCodec,
	storeService store.KVStoreService,
	logger log.Logger,
	authority string,
	registryKeeper types.RegistryKeeper,
) Keeper {
	if _, err := sdk.AccAddressFromBech32(authority); err != nil {
		panic(fmt.Sprintf("invalid authority address: %s", authority))
	}

	return Keeper{
		cdc:            cdc,
		storeService:   storeService,
		authority:      authority,
		logger:         logger,
		registryKeeper: registryKeeper,
	}
}

// GetAuthority returns the module's authority.
func (k Keeper) GetAuthority() string {
	return k.authority
}

// Logger returns a module-specific logger.
func (k Keeper) Logger() log.Logger {
	return k.logger.With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

func (k Keeper) EnsureAuthorityOrAdminAccount(ctx context.Context, account string) error {
	adminAccount, _ := k.GetAdminAccount(ctx)

	if account != k.GetAuthority() && account != adminAccount {
		return errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Only authority or admin account can execute the call")
	}

	return nil
}
