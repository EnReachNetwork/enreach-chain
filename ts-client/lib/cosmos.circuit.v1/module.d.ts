import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgAuthorizeCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { MsgTripCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { MsgTripCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { MsgAuthorizeCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { Permissions } from "./types/cosmos/circuit/v1/types";
import { AccountResponse } from "./types/cosmos/circuit/v1/query";
import { QueryAccountsRequest } from "./types/cosmos/circuit/v1/query";
import { AccountsResponse } from "./types/cosmos/circuit/v1/query";
import { MsgResetCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { GenesisAccountPermissions } from "./types/cosmos/circuit/v1/types";
import { GenesisState } from "./types/cosmos/circuit/v1/types";
import { QueryAccountRequest } from "./types/cosmos/circuit/v1/query";
import { QueryDisabledListRequest } from "./types/cosmos/circuit/v1/query";
import { DisabledListResponse } from "./types/cosmos/circuit/v1/query";
import { MsgResetCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
export { MsgAuthorizeCircuitBreakerResponse, MsgTripCircuitBreaker, MsgTripCircuitBreakerResponse, MsgAuthorizeCircuitBreaker, Permissions, AccountResponse, QueryAccountsRequest, AccountsResponse, MsgResetCircuitBreaker, GenesisAccountPermissions, GenesisState, QueryAccountRequest, QueryDisabledListRequest, DisabledListResponse, MsgResetCircuitBreakerResponse };
type sendMsgAuthorizeCircuitBreakerResponseParams = {
    value: MsgAuthorizeCircuitBreakerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTripCircuitBreakerParams = {
    value: MsgTripCircuitBreaker;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTripCircuitBreakerResponseParams = {
    value: MsgTripCircuitBreakerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAuthorizeCircuitBreakerParams = {
    value: MsgAuthorizeCircuitBreaker;
    fee?: StdFee;
    memo?: string;
};
type sendPermissionsParams = {
    value: Permissions;
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
type sendMsgResetCircuitBreakerParams = {
    value: MsgResetCircuitBreaker;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisAccountPermissionsParams = {
    value: GenesisAccountPermissions;
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
type sendQueryDisabledListRequestParams = {
    value: QueryDisabledListRequest;
    fee?: StdFee;
    memo?: string;
};
type sendDisabledListResponseParams = {
    value: DisabledListResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgResetCircuitBreakerResponseParams = {
    value: MsgResetCircuitBreakerResponse;
    fee?: StdFee;
    memo?: string;
};
type msgAuthorizeCircuitBreakerResponseParams = {
    value: MsgAuthorizeCircuitBreakerResponse;
};
type msgTripCircuitBreakerParams = {
    value: MsgTripCircuitBreaker;
};
type msgTripCircuitBreakerResponseParams = {
    value: MsgTripCircuitBreakerResponse;
};
type msgAuthorizeCircuitBreakerParams = {
    value: MsgAuthorizeCircuitBreaker;
};
type permissionsParams = {
    value: Permissions;
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
type msgResetCircuitBreakerParams = {
    value: MsgResetCircuitBreaker;
};
type genesisAccountPermissionsParams = {
    value: GenesisAccountPermissions;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryAccountRequestParams = {
    value: QueryAccountRequest;
};
type queryDisabledListRequestParams = {
    value: QueryDisabledListRequest;
};
type disabledListResponseParams = {
    value: DisabledListResponse;
};
type msgResetCircuitBreakerResponseParams = {
    value: MsgResetCircuitBreakerResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgAuthorizeCircuitBreakerResponse({ value, fee, memo }: sendMsgAuthorizeCircuitBreakerResponseParams): Promise<DeliverTxResponse>;
    sendMsgTripCircuitBreaker({ value, fee, memo }: sendMsgTripCircuitBreakerParams): Promise<DeliverTxResponse>;
    sendMsgTripCircuitBreakerResponse({ value, fee, memo }: sendMsgTripCircuitBreakerResponseParams): Promise<DeliverTxResponse>;
    sendMsgAuthorizeCircuitBreaker({ value, fee, memo }: sendMsgAuthorizeCircuitBreakerParams): Promise<DeliverTxResponse>;
    sendPermissions({ value, fee, memo }: sendPermissionsParams): Promise<DeliverTxResponse>;
    sendAccountResponse({ value, fee, memo }: sendAccountResponseParams): Promise<DeliverTxResponse>;
    sendQueryAccountsRequest({ value, fee, memo }: sendQueryAccountsRequestParams): Promise<DeliverTxResponse>;
    sendAccountsResponse({ value, fee, memo }: sendAccountsResponseParams): Promise<DeliverTxResponse>;
    sendMsgResetCircuitBreaker({ value, fee, memo }: sendMsgResetCircuitBreakerParams): Promise<DeliverTxResponse>;
    sendGenesisAccountPermissions({ value, fee, memo }: sendGenesisAccountPermissionsParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryAccountRequest({ value, fee, memo }: sendQueryAccountRequestParams): Promise<DeliverTxResponse>;
    sendQueryDisabledListRequest({ value, fee, memo }: sendQueryDisabledListRequestParams): Promise<DeliverTxResponse>;
    sendDisabledListResponse({ value, fee, memo }: sendDisabledListResponseParams): Promise<DeliverTxResponse>;
    sendMsgResetCircuitBreakerResponse({ value, fee, memo }: sendMsgResetCircuitBreakerResponseParams): Promise<DeliverTxResponse>;
    msgAuthorizeCircuitBreakerResponse({ value }: msgAuthorizeCircuitBreakerResponseParams): EncodeObject;
    msgTripCircuitBreaker({ value }: msgTripCircuitBreakerParams): EncodeObject;
    msgTripCircuitBreakerResponse({ value }: msgTripCircuitBreakerResponseParams): EncodeObject;
    msgAuthorizeCircuitBreaker({ value }: msgAuthorizeCircuitBreakerParams): EncodeObject;
    permissions({ value }: permissionsParams): EncodeObject;
    accountResponse({ value }: accountResponseParams): EncodeObject;
    queryAccountsRequest({ value }: queryAccountsRequestParams): EncodeObject;
    accountsResponse({ value }: accountsResponseParams): EncodeObject;
    msgResetCircuitBreaker({ value }: msgResetCircuitBreakerParams): EncodeObject;
    genesisAccountPermissions({ value }: genesisAccountPermissionsParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryAccountRequest({ value }: queryAccountRequestParams): EncodeObject;
    queryDisabledListRequest({ value }: queryDisabledListRequestParams): EncodeObject;
    disabledListResponse({ value }: disabledListResponseParams): EncodeObject;
    msgResetCircuitBreakerResponse({ value }: msgResetCircuitBreakerResponseParams): EncodeObject;
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
