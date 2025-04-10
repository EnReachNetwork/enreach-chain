import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgTripCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { Permissions } from "./types/cosmos/circuit/v1/types";
import { GenesisAccountPermissions } from "./types/cosmos/circuit/v1/types";
import { MsgAuthorizeCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { DisabledListResponse } from "./types/cosmos/circuit/v1/query";
import { MsgTripCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { MsgResetCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { MsgResetCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { GenesisState } from "./types/cosmos/circuit/v1/types";
import { QueryAccountRequest } from "./types/cosmos/circuit/v1/query";
import { MsgAuthorizeCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { AccountResponse } from "./types/cosmos/circuit/v1/query";
import { QueryAccountsRequest } from "./types/cosmos/circuit/v1/query";
import { AccountsResponse } from "./types/cosmos/circuit/v1/query";
import { QueryDisabledListRequest } from "./types/cosmos/circuit/v1/query";
export { MsgTripCircuitBreaker, Permissions, GenesisAccountPermissions, MsgAuthorizeCircuitBreakerResponse, DisabledListResponse, MsgTripCircuitBreakerResponse, MsgResetCircuitBreaker, MsgResetCircuitBreakerResponse, GenesisState, QueryAccountRequest, MsgAuthorizeCircuitBreaker, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest };
type sendMsgTripCircuitBreakerParams = {
    value: MsgTripCircuitBreaker;
    fee?: StdFee;
    memo?: string;
};
type sendPermissionsParams = {
    value: Permissions;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisAccountPermissionsParams = {
    value: GenesisAccountPermissions;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAuthorizeCircuitBreakerResponseParams = {
    value: MsgAuthorizeCircuitBreakerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDisabledListResponseParams = {
    value: DisabledListResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTripCircuitBreakerResponseParams = {
    value: MsgTripCircuitBreakerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgResetCircuitBreakerParams = {
    value: MsgResetCircuitBreaker;
    fee?: StdFee;
    memo?: string;
};
type sendMsgResetCircuitBreakerResponseParams = {
    value: MsgResetCircuitBreakerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountRequestParams = {
    value: QueryAccountRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAuthorizeCircuitBreakerParams = {
    value: MsgAuthorizeCircuitBreaker;
    fee?: StdFee;
    memo?: string;
};
type sendAccountResponseParams = {
    value: AccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountsRequestParams = {
    value: QueryAccountsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendAccountsResponseParams = {
    value: AccountsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDisabledListRequestParams = {
    value: QueryDisabledListRequest;
    fee?: StdFee;
    memo?: string;
};
type msgTripCircuitBreakerParams = {
    value: MsgTripCircuitBreaker;
};
type permissionsParams = {
    value: Permissions;
};
type genesisAccountPermissionsParams = {
    value: GenesisAccountPermissions;
};
type msgAuthorizeCircuitBreakerResponseParams = {
    value: MsgAuthorizeCircuitBreakerResponse;
};
type disabledListResponseParams = {
    value: DisabledListResponse;
};
type msgTripCircuitBreakerResponseParams = {
    value: MsgTripCircuitBreakerResponse;
};
type msgResetCircuitBreakerParams = {
    value: MsgResetCircuitBreaker;
};
type msgResetCircuitBreakerResponseParams = {
    value: MsgResetCircuitBreakerResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryAccountRequestParams = {
    value: QueryAccountRequest;
};
type msgAuthorizeCircuitBreakerParams = {
    value: MsgAuthorizeCircuitBreaker;
};
type accountResponseParams = {
    value: AccountResponse;
};
type queryAccountsRequestParams = {
    value: QueryAccountsRequest;
};
type accountsResponseParams = {
    value: AccountsResponse;
};
type queryDisabledListRequestParams = {
    value: QueryDisabledListRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgTripCircuitBreaker({ value, fee, memo }: sendMsgTripCircuitBreakerParams): Promise<DeliverTxResponse>;
    sendPermissions({ value, fee, memo }: sendPermissionsParams): Promise<DeliverTxResponse>;
    sendGenesisAccountPermissions({ value, fee, memo }: sendGenesisAccountPermissionsParams): Promise<DeliverTxResponse>;
    sendMsgAuthorizeCircuitBreakerResponse({ value, fee, memo }: sendMsgAuthorizeCircuitBreakerResponseParams): Promise<DeliverTxResponse>;
    sendDisabledListResponse({ value, fee, memo }: sendDisabledListResponseParams): Promise<DeliverTxResponse>;
    sendMsgTripCircuitBreakerResponse({ value, fee, memo }: sendMsgTripCircuitBreakerResponseParams): Promise<DeliverTxResponse>;
    sendMsgResetCircuitBreaker({ value, fee, memo }: sendMsgResetCircuitBreakerParams): Promise<DeliverTxResponse>;
    sendMsgResetCircuitBreakerResponse({ value, fee, memo }: sendMsgResetCircuitBreakerResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryAccountRequest({ value, fee, memo }: sendQueryAccountRequestParams): Promise<DeliverTxResponse>;
    sendMsgAuthorizeCircuitBreaker({ value, fee, memo }: sendMsgAuthorizeCircuitBreakerParams): Promise<DeliverTxResponse>;
    sendAccountResponse({ value, fee, memo }: sendAccountResponseParams): Promise<DeliverTxResponse>;
    sendQueryAccountsRequest({ value, fee, memo }: sendQueryAccountsRequestParams): Promise<DeliverTxResponse>;
    sendAccountsResponse({ value, fee, memo }: sendAccountsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDisabledListRequest({ value, fee, memo }: sendQueryDisabledListRequestParams): Promise<DeliverTxResponse>;
    msgTripCircuitBreaker({ value }: msgTripCircuitBreakerParams): EncodeObject;
    permissions({ value }: permissionsParams): EncodeObject;
    genesisAccountPermissions({ value }: genesisAccountPermissionsParams): EncodeObject;
    msgAuthorizeCircuitBreakerResponse({ value }: msgAuthorizeCircuitBreakerResponseParams): EncodeObject;
    disabledListResponse({ value }: disabledListResponseParams): EncodeObject;
    msgTripCircuitBreakerResponse({ value }: msgTripCircuitBreakerResponseParams): EncodeObject;
    msgResetCircuitBreaker({ value }: msgResetCircuitBreakerParams): EncodeObject;
    msgResetCircuitBreakerResponse({ value }: msgResetCircuitBreakerResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryAccountRequest({ value }: queryAccountRequestParams): EncodeObject;
    msgAuthorizeCircuitBreaker({ value }: msgAuthorizeCircuitBreakerParams): EncodeObject;
    accountResponse({ value }: accountResponseParams): EncodeObject;
    queryAccountsRequest({ value }: queryAccountsRequestParams): EncodeObject;
    accountsResponse({ value }: accountsResponseParams): EncodeObject;
    queryDisabledListRequest({ value }: queryDisabledListRequestParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        CosmosCircuitV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
