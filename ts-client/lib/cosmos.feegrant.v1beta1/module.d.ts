import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { Grant } from "./types/cosmos/feegrant/v1beta1/feegrant";
import { AllowedMsgAllowance } from "./types/cosmos/feegrant/v1beta1/feegrant";
import { QueryAllowanceRequest } from "./types/cosmos/feegrant/v1beta1/query";
import { QueryAllowancesByGranterRequest } from "./types/cosmos/feegrant/v1beta1/query";
import { QueryAllowancesByGranterResponse } from "./types/cosmos/feegrant/v1beta1/query";
import { MsgGrantAllowance } from "./types/cosmos/feegrant/v1beta1/tx";
import { QueryAllowanceResponse } from "./types/cosmos/feegrant/v1beta1/query";
import { BasicAllowance } from "./types/cosmos/feegrant/v1beta1/feegrant";
import { MsgPruneAllowancesResponse } from "./types/cosmos/feegrant/v1beta1/tx";
import { MsgRevokeAllowance } from "./types/cosmos/feegrant/v1beta1/tx";
import { MsgRevokeAllowanceResponse } from "./types/cosmos/feegrant/v1beta1/tx";
import { MsgPruneAllowances } from "./types/cosmos/feegrant/v1beta1/tx";
import { PeriodicAllowance } from "./types/cosmos/feegrant/v1beta1/feegrant";
import { GenesisState } from "./types/cosmos/feegrant/v1beta1/genesis";
import { QueryAllowancesRequest } from "./types/cosmos/feegrant/v1beta1/query";
import { MsgGrantAllowanceResponse } from "./types/cosmos/feegrant/v1beta1/tx";
import { QueryAllowancesResponse } from "./types/cosmos/feegrant/v1beta1/query";
export { Grant, AllowedMsgAllowance, QueryAllowanceRequest, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse, MsgGrantAllowance, QueryAllowanceResponse, BasicAllowance, MsgPruneAllowancesResponse, MsgRevokeAllowance, MsgRevokeAllowanceResponse, MsgPruneAllowances, PeriodicAllowance, GenesisState, QueryAllowancesRequest, MsgGrantAllowanceResponse, QueryAllowancesResponse };
type sendGrantParams = {
    value: Grant;
    fee?: StdFee;
    memo?: string;
};
type sendAllowedMsgAllowanceParams = {
    value: AllowedMsgAllowance;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllowanceRequestParams = {
    value: QueryAllowanceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllowancesByGranterRequestParams = {
    value: QueryAllowancesByGranterRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllowancesByGranterResponseParams = {
    value: QueryAllowancesByGranterResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGrantAllowanceParams = {
    value: MsgGrantAllowance;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllowanceResponseParams = {
    value: QueryAllowanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendBasicAllowanceParams = {
    value: BasicAllowance;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPruneAllowancesResponseParams = {
    value: MsgPruneAllowancesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRevokeAllowanceParams = {
    value: MsgRevokeAllowance;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRevokeAllowanceResponseParams = {
    value: MsgRevokeAllowanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPruneAllowancesParams = {
    value: MsgPruneAllowances;
    fee?: StdFee;
    memo?: string;
};
type sendPeriodicAllowanceParams = {
    value: PeriodicAllowance;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllowancesRequestParams = {
    value: QueryAllowancesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGrantAllowanceResponseParams = {
    value: MsgGrantAllowanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllowancesResponseParams = {
    value: QueryAllowancesResponse;
    fee?: StdFee;
    memo?: string;
};
type grantParams = {
    value: Grant;
};
type allowedMsgAllowanceParams = {
    value: AllowedMsgAllowance;
};
type queryAllowanceRequestParams = {
    value: QueryAllowanceRequest;
};
type queryAllowancesByGranterRequestParams = {
    value: QueryAllowancesByGranterRequest;
};
type queryAllowancesByGranterResponseParams = {
    value: QueryAllowancesByGranterResponse;
};
type msgGrantAllowanceParams = {
    value: MsgGrantAllowance;
};
type queryAllowanceResponseParams = {
    value: QueryAllowanceResponse;
};
type basicAllowanceParams = {
    value: BasicAllowance;
};
type msgPruneAllowancesResponseParams = {
    value: MsgPruneAllowancesResponse;
};
type msgRevokeAllowanceParams = {
    value: MsgRevokeAllowance;
};
type msgRevokeAllowanceResponseParams = {
    value: MsgRevokeAllowanceResponse;
};
type msgPruneAllowancesParams = {
    value: MsgPruneAllowances;
};
type periodicAllowanceParams = {
    value: PeriodicAllowance;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryAllowancesRequestParams = {
    value: QueryAllowancesRequest;
};
type msgGrantAllowanceResponseParams = {
    value: MsgGrantAllowanceResponse;
};
type queryAllowancesResponseParams = {
    value: QueryAllowancesResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendGrant({ value, fee, memo }: sendGrantParams): Promise<DeliverTxResponse>;
    sendAllowedMsgAllowance({ value, fee, memo }: sendAllowedMsgAllowanceParams): Promise<DeliverTxResponse>;
    sendQueryAllowanceRequest({ value, fee, memo }: sendQueryAllowanceRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllowancesByGranterRequest({ value, fee, memo }: sendQueryAllowancesByGranterRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllowancesByGranterResponse({ value, fee, memo }: sendQueryAllowancesByGranterResponseParams): Promise<DeliverTxResponse>;
    sendMsgGrantAllowance({ value, fee, memo }: sendMsgGrantAllowanceParams): Promise<DeliverTxResponse>;
    sendQueryAllowanceResponse({ value, fee, memo }: sendQueryAllowanceResponseParams): Promise<DeliverTxResponse>;
    sendBasicAllowance({ value, fee, memo }: sendBasicAllowanceParams): Promise<DeliverTxResponse>;
    sendMsgPruneAllowancesResponse({ value, fee, memo }: sendMsgPruneAllowancesResponseParams): Promise<DeliverTxResponse>;
    sendMsgRevokeAllowance({ value, fee, memo }: sendMsgRevokeAllowanceParams): Promise<DeliverTxResponse>;
    sendMsgRevokeAllowanceResponse({ value, fee, memo }: sendMsgRevokeAllowanceResponseParams): Promise<DeliverTxResponse>;
    sendMsgPruneAllowances({ value, fee, memo }: sendMsgPruneAllowancesParams): Promise<DeliverTxResponse>;
    sendPeriodicAllowance({ value, fee, memo }: sendPeriodicAllowanceParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryAllowancesRequest({ value, fee, memo }: sendQueryAllowancesRequestParams): Promise<DeliverTxResponse>;
    sendMsgGrantAllowanceResponse({ value, fee, memo }: sendMsgGrantAllowanceResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllowancesResponse({ value, fee, memo }: sendQueryAllowancesResponseParams): Promise<DeliverTxResponse>;
    grant({ value }: grantParams): EncodeObject;
    allowedMsgAllowance({ value }: allowedMsgAllowanceParams): EncodeObject;
    queryAllowanceRequest({ value }: queryAllowanceRequestParams): EncodeObject;
    queryAllowancesByGranterRequest({ value }: queryAllowancesByGranterRequestParams): EncodeObject;
    queryAllowancesByGranterResponse({ value }: queryAllowancesByGranterResponseParams): EncodeObject;
    msgGrantAllowance({ value }: msgGrantAllowanceParams): EncodeObject;
    queryAllowanceResponse({ value }: queryAllowanceResponseParams): EncodeObject;
    basicAllowance({ value }: basicAllowanceParams): EncodeObject;
    msgPruneAllowancesResponse({ value }: msgPruneAllowancesResponseParams): EncodeObject;
    msgRevokeAllowance({ value }: msgRevokeAllowanceParams): EncodeObject;
    msgRevokeAllowanceResponse({ value }: msgRevokeAllowanceResponseParams): EncodeObject;
    msgPruneAllowances({ value }: msgPruneAllowancesParams): EncodeObject;
    periodicAllowance({ value }: periodicAllowanceParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryAllowancesRequest({ value }: queryAllowancesRequestParams): EncodeObject;
    msgGrantAllowanceResponse({ value }: msgGrantAllowanceResponseParams): EncodeObject;
    queryAllowancesResponse({ value }: queryAllowancesResponseParams): EncodeObject;
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
        CosmosFeegrantV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
