import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryGranterGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { MsgExec } from "./types/cosmos/authz/v1beta1/tx";
import { MsgGrantResponse } from "./types/cosmos/authz/v1beta1/tx";
import { MsgExecResponse } from "./types/cosmos/authz/v1beta1/tx";
import { QueryGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranterGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { Grant } from "./types/cosmos/authz/v1beta1/authz";
import { GenericAuthorization } from "./types/cosmos/authz/v1beta1/authz";
import { MsgRevoke } from "./types/cosmos/authz/v1beta1/tx";
import { GrantAuthorization } from "./types/cosmos/authz/v1beta1/authz";
import { QueryGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { MsgGrant } from "./types/cosmos/authz/v1beta1/tx";
import { GrantQueueItem } from "./types/cosmos/authz/v1beta1/authz";
import { EventGrant } from "./types/cosmos/authz/v1beta1/event";
import { EventRevoke } from "./types/cosmos/authz/v1beta1/event";
import { GenesisState } from "./types/cosmos/authz/v1beta1/genesis";
import { QueryGranteeGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { MsgRevokeResponse } from "./types/cosmos/authz/v1beta1/tx";
export { QueryGranterGrantsRequest, QueryGranteeGrantsRequest, MsgExec, MsgGrantResponse, MsgExecResponse, QueryGrantsRequest, QueryGranterGrantsResponse, Grant, GenericAuthorization, MsgRevoke, GrantAuthorization, QueryGrantsResponse, MsgGrant, GrantQueueItem, EventGrant, EventRevoke, GenesisState, QueryGranteeGrantsResponse, MsgRevokeResponse };
type sendQueryGranterGrantsRequestParams = {
    value: QueryGranterGrantsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranteeGrantsRequestParams = {
    value: QueryGranteeGrantsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecParams = {
    value: MsgExec;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGrantResponseParams = {
    value: MsgGrantResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecResponseParams = {
    value: MsgExecResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGrantsRequestParams = {
    value: QueryGrantsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranterGrantsResponseParams = {
    value: QueryGranterGrantsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGrantParams = {
    value: Grant;
    fee?: StdFee;
    memo?: string;
};
type sendGenericAuthorizationParams = {
    value: GenericAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRevokeParams = {
    value: MsgRevoke;
    fee?: StdFee;
    memo?: string;
};
type sendGrantAuthorizationParams = {
    value: GrantAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGrantsResponseParams = {
    value: QueryGrantsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGrantParams = {
    value: MsgGrant;
    fee?: StdFee;
    memo?: string;
};
type sendGrantQueueItemParams = {
    value: GrantQueueItem;
    fee?: StdFee;
    memo?: string;
};
type sendEventGrantParams = {
    value: EventGrant;
    fee?: StdFee;
    memo?: string;
};
type sendEventRevokeParams = {
    value: EventRevoke;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranteeGrantsResponseParams = {
    value: QueryGranteeGrantsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRevokeResponseParams = {
    value: MsgRevokeResponse;
    fee?: StdFee;
    memo?: string;
};
type queryGranterGrantsRequestParams = {
    value: QueryGranterGrantsRequest;
};
type queryGranteeGrantsRequestParams = {
    value: QueryGranteeGrantsRequest;
};
type msgExecParams = {
    value: MsgExec;
};
type msgGrantResponseParams = {
    value: MsgGrantResponse;
};
type msgExecResponseParams = {
    value: MsgExecResponse;
};
type queryGrantsRequestParams = {
    value: QueryGrantsRequest;
};
type queryGranterGrantsResponseParams = {
    value: QueryGranterGrantsResponse;
};
type grantParams = {
    value: Grant;
};
type genericAuthorizationParams = {
    value: GenericAuthorization;
};
type msgRevokeParams = {
    value: MsgRevoke;
};
type grantAuthorizationParams = {
    value: GrantAuthorization;
};
type queryGrantsResponseParams = {
    value: QueryGrantsResponse;
};
type msgGrantParams = {
    value: MsgGrant;
};
type grantQueueItemParams = {
    value: GrantQueueItem;
};
type eventGrantParams = {
    value: EventGrant;
};
type eventRevokeParams = {
    value: EventRevoke;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryGranteeGrantsResponseParams = {
    value: QueryGranteeGrantsResponse;
};
type msgRevokeResponseParams = {
    value: MsgRevokeResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryGranterGrantsRequest({ value, fee, memo }: sendQueryGranterGrantsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGranteeGrantsRequest({ value, fee, memo }: sendQueryGranteeGrantsRequestParams): Promise<DeliverTxResponse>;
    sendMsgExec({ value, fee, memo }: sendMsgExecParams): Promise<DeliverTxResponse>;
    sendMsgGrantResponse({ value, fee, memo }: sendMsgGrantResponseParams): Promise<DeliverTxResponse>;
    sendMsgExecResponse({ value, fee, memo }: sendMsgExecResponseParams): Promise<DeliverTxResponse>;
    sendQueryGrantsRequest({ value, fee, memo }: sendQueryGrantsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGranterGrantsResponse({ value, fee, memo }: sendQueryGranterGrantsResponseParams): Promise<DeliverTxResponse>;
    sendGrant({ value, fee, memo }: sendGrantParams): Promise<DeliverTxResponse>;
    sendGenericAuthorization({ value, fee, memo }: sendGenericAuthorizationParams): Promise<DeliverTxResponse>;
    sendMsgRevoke({ value, fee, memo }: sendMsgRevokeParams): Promise<DeliverTxResponse>;
    sendGrantAuthorization({ value, fee, memo }: sendGrantAuthorizationParams): Promise<DeliverTxResponse>;
    sendQueryGrantsResponse({ value, fee, memo }: sendQueryGrantsResponseParams): Promise<DeliverTxResponse>;
    sendMsgGrant({ value, fee, memo }: sendMsgGrantParams): Promise<DeliverTxResponse>;
    sendGrantQueueItem({ value, fee, memo }: sendGrantQueueItemParams): Promise<DeliverTxResponse>;
    sendEventGrant({ value, fee, memo }: sendEventGrantParams): Promise<DeliverTxResponse>;
    sendEventRevoke({ value, fee, memo }: sendEventRevokeParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryGranteeGrantsResponse({ value, fee, memo }: sendQueryGranteeGrantsResponseParams): Promise<DeliverTxResponse>;
    sendMsgRevokeResponse({ value, fee, memo }: sendMsgRevokeResponseParams): Promise<DeliverTxResponse>;
    queryGranterGrantsRequest({ value }: queryGranterGrantsRequestParams): EncodeObject;
    queryGranteeGrantsRequest({ value }: queryGranteeGrantsRequestParams): EncodeObject;
    msgExec({ value }: msgExecParams): EncodeObject;
    msgGrantResponse({ value }: msgGrantResponseParams): EncodeObject;
    msgExecResponse({ value }: msgExecResponseParams): EncodeObject;
    queryGrantsRequest({ value }: queryGrantsRequestParams): EncodeObject;
    queryGranterGrantsResponse({ value }: queryGranterGrantsResponseParams): EncodeObject;
    grant({ value }: grantParams): EncodeObject;
    genericAuthorization({ value }: genericAuthorizationParams): EncodeObject;
    msgRevoke({ value }: msgRevokeParams): EncodeObject;
    grantAuthorization({ value }: grantAuthorizationParams): EncodeObject;
    queryGrantsResponse({ value }: queryGrantsResponseParams): EncodeObject;
    msgGrant({ value }: msgGrantParams): EncodeObject;
    grantQueueItem({ value }: grantQueueItemParams): EncodeObject;
    eventGrant({ value }: eventGrantParams): EncodeObject;
    eventRevoke({ value }: eventRevokeParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryGranteeGrantsResponse({ value }: queryGranteeGrantsResponseParams): EncodeObject;
    msgRevokeResponse({ value }: msgRevokeResponseParams): EncodeObject;
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
