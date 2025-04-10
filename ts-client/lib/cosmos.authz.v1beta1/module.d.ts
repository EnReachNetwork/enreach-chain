import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryGranterGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { GrantQueueItem } from "./types/cosmos/authz/v1beta1/authz";
import { MsgRevokeResponse } from "./types/cosmos/authz/v1beta1/tx";
import { MsgExec } from "./types/cosmos/authz/v1beta1/tx";
import { EventGrant } from "./types/cosmos/authz/v1beta1/event";
import { QueryGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranterGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { MsgGrant } from "./types/cosmos/authz/v1beta1/tx";
import { EventRevoke } from "./types/cosmos/authz/v1beta1/event";
import { MsgGrantResponse } from "./types/cosmos/authz/v1beta1/tx";
import { Grant } from "./types/cosmos/authz/v1beta1/authz";
import { GrantAuthorization } from "./types/cosmos/authz/v1beta1/authz";
import { MsgExecResponse } from "./types/cosmos/authz/v1beta1/tx";
import { MsgRevoke } from "./types/cosmos/authz/v1beta1/tx";
import { QueryGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { GenericAuthorization } from "./types/cosmos/authz/v1beta1/authz";
import { GenesisState } from "./types/cosmos/authz/v1beta1/genesis";
export { QueryGranterGrantsRequest, GrantQueueItem, MsgRevokeResponse, MsgExec, EventGrant, QueryGrantsResponse, QueryGranterGrantsResponse, MsgGrant, EventRevoke, MsgGrantResponse, Grant, GrantAuthorization, MsgExecResponse, MsgRevoke, QueryGrantsRequest, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse, GenericAuthorization, GenesisState };
type sendQueryGranterGrantsRequestParams = {
    value: QueryGranterGrantsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGrantQueueItemParams = {
    value: GrantQueueItem;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRevokeResponseParams = {
    value: MsgRevokeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecParams = {
    value: MsgExec;
    fee?: StdFee;
    memo?: string;
};
type sendEventGrantParams = {
    value: EventGrant;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGrantsResponseParams = {
    value: QueryGrantsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranterGrantsResponseParams = {
    value: QueryGranterGrantsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGrantParams = {
    value: MsgGrant;
    fee?: StdFee;
    memo?: string;
};
type sendEventRevokeParams = {
    value: EventRevoke;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGrantResponseParams = {
    value: MsgGrantResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGrantParams = {
    value: Grant;
    fee?: StdFee;
    memo?: string;
};
type sendGrantAuthorizationParams = {
    value: GrantAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecResponseParams = {
    value: MsgExecResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRevokeParams = {
    value: MsgRevoke;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGrantsRequestParams = {
    value: QueryGrantsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranteeGrantsRequestParams = {
    value: QueryGranteeGrantsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranteeGrantsResponseParams = {
    value: QueryGranteeGrantsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenericAuthorizationParams = {
    value: GenericAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type queryGranterGrantsRequestParams = {
    value: QueryGranterGrantsRequest;
};
type grantQueueItemParams = {
    value: GrantQueueItem;
};
type msgRevokeResponseParams = {
    value: MsgRevokeResponse;
};
type msgExecParams = {
    value: MsgExec;
};
type eventGrantParams = {
    value: EventGrant;
};
type queryGrantsResponseParams = {
    value: QueryGrantsResponse;
};
type queryGranterGrantsResponseParams = {
    value: QueryGranterGrantsResponse;
};
type msgGrantParams = {
    value: MsgGrant;
};
type eventRevokeParams = {
    value: EventRevoke;
};
type msgGrantResponseParams = {
    value: MsgGrantResponse;
};
type grantParams = {
    value: Grant;
};
type grantAuthorizationParams = {
    value: GrantAuthorization;
};
type msgExecResponseParams = {
    value: MsgExecResponse;
};
type msgRevokeParams = {
    value: MsgRevoke;
};
type queryGrantsRequestParams = {
    value: QueryGrantsRequest;
};
type queryGranteeGrantsRequestParams = {
    value: QueryGranteeGrantsRequest;
};
type queryGranteeGrantsResponseParams = {
    value: QueryGranteeGrantsResponse;
};
type genericAuthorizationParams = {
    value: GenericAuthorization;
};
type genesisStateParams = {
    value: GenesisState;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryGranterGrantsRequest({ value, fee, memo }: sendQueryGranterGrantsRequestParams): Promise<DeliverTxResponse>;
    sendGrantQueueItem({ value, fee, memo }: sendGrantQueueItemParams): Promise<DeliverTxResponse>;
    sendMsgRevokeResponse({ value, fee, memo }: sendMsgRevokeResponseParams): Promise<DeliverTxResponse>;
    sendMsgExec({ value, fee, memo }: sendMsgExecParams): Promise<DeliverTxResponse>;
    sendEventGrant({ value, fee, memo }: sendEventGrantParams): Promise<DeliverTxResponse>;
    sendQueryGrantsResponse({ value, fee, memo }: sendQueryGrantsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGranterGrantsResponse({ value, fee, memo }: sendQueryGranterGrantsResponseParams): Promise<DeliverTxResponse>;
    sendMsgGrant({ value, fee, memo }: sendMsgGrantParams): Promise<DeliverTxResponse>;
    sendEventRevoke({ value, fee, memo }: sendEventRevokeParams): Promise<DeliverTxResponse>;
    sendMsgGrantResponse({ value, fee, memo }: sendMsgGrantResponseParams): Promise<DeliverTxResponse>;
    sendGrant({ value, fee, memo }: sendGrantParams): Promise<DeliverTxResponse>;
    sendGrantAuthorization({ value, fee, memo }: sendGrantAuthorizationParams): Promise<DeliverTxResponse>;
    sendMsgExecResponse({ value, fee, memo }: sendMsgExecResponseParams): Promise<DeliverTxResponse>;
    sendMsgRevoke({ value, fee, memo }: sendMsgRevokeParams): Promise<DeliverTxResponse>;
    sendQueryGrantsRequest({ value, fee, memo }: sendQueryGrantsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGranteeGrantsRequest({ value, fee, memo }: sendQueryGranteeGrantsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGranteeGrantsResponse({ value, fee, memo }: sendQueryGranteeGrantsResponseParams): Promise<DeliverTxResponse>;
    sendGenericAuthorization({ value, fee, memo }: sendGenericAuthorizationParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    queryGranterGrantsRequest({ value }: queryGranterGrantsRequestParams): EncodeObject;
    grantQueueItem({ value }: grantQueueItemParams): EncodeObject;
    msgRevokeResponse({ value }: msgRevokeResponseParams): EncodeObject;
    msgExec({ value }: msgExecParams): EncodeObject;
    eventGrant({ value }: eventGrantParams): EncodeObject;
    queryGrantsResponse({ value }: queryGrantsResponseParams): EncodeObject;
    queryGranterGrantsResponse({ value }: queryGranterGrantsResponseParams): EncodeObject;
    msgGrant({ value }: msgGrantParams): EncodeObject;
    eventRevoke({ value }: eventRevokeParams): EncodeObject;
    msgGrantResponse({ value }: msgGrantResponseParams): EncodeObject;
    grant({ value }: grantParams): EncodeObject;
    grantAuthorization({ value }: grantAuthorizationParams): EncodeObject;
    msgExecResponse({ value }: msgExecResponseParams): EncodeObject;
    msgRevoke({ value }: msgRevokeParams): EncodeObject;
    queryGrantsRequest({ value }: queryGrantsRequestParams): EncodeObject;
    queryGranteeGrantsRequest({ value }: queryGranteeGrantsRequestParams): EncodeObject;
    queryGranteeGrantsResponse({ value }: queryGranteeGrantsResponseParams): EncodeObject;
    genericAuthorization({ value }: genericAuthorizationParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
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
        CosmosAuthzV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
