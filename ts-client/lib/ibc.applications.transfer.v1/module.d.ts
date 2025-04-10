import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgUpdateParams } from "./types/ibc/applications/transfer/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/applications/transfer/v1/tx";
import { QueryEscrowAddressRequest } from "./types/ibc/applications/transfer/v1/query";
import { MsgTransferResponse } from "./types/ibc/applications/transfer/v1/tx";
import { QueryParamsResponse } from "./types/ibc/applications/transfer/v1/query";
import { QueryEscrowAddressResponse } from "./types/ibc/applications/transfer/v1/query";
import { QueryDenomTraceRequest } from "./types/ibc/applications/transfer/v1/query";
import { QueryDenomTracesResponse } from "./types/ibc/applications/transfer/v1/query";
import { GenesisState } from "./types/ibc/applications/transfer/v1/genesis";
import { QueryDenomTracesRequest } from "./types/ibc/applications/transfer/v1/query";
import { QueryParamsRequest } from "./types/ibc/applications/transfer/v1/query";
import { QueryDenomHashResponse } from "./types/ibc/applications/transfer/v1/query";
import { DenomTrace } from "./types/ibc/applications/transfer/v1/transfer";
import { Allocation } from "./types/ibc/applications/transfer/v1/authz";
import { TransferAuthorization } from "./types/ibc/applications/transfer/v1/authz";
import { QueryDenomHashRequest } from "./types/ibc/applications/transfer/v1/query";
import { QueryTotalEscrowForDenomRequest } from "./types/ibc/applications/transfer/v1/query";
import { Params } from "./types/ibc/applications/transfer/v1/transfer";
import { QueryTotalEscrowForDenomResponse } from "./types/ibc/applications/transfer/v1/query";
import { MsgTransfer } from "./types/ibc/applications/transfer/v1/tx";
import { QueryDenomTraceResponse } from "./types/ibc/applications/transfer/v1/query";
export { MsgUpdateParams, MsgUpdateParamsResponse, QueryEscrowAddressRequest, MsgTransferResponse, QueryParamsResponse, QueryEscrowAddressResponse, QueryDenomTraceRequest, QueryDenomTracesResponse, GenesisState, QueryDenomTracesRequest, QueryParamsRequest, QueryDenomHashResponse, DenomTrace, Allocation, TransferAuthorization, QueryDenomHashRequest, QueryTotalEscrowForDenomRequest, Params, QueryTotalEscrowForDenomResponse, MsgTransfer, QueryDenomTraceResponse };
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryEscrowAddressRequestParams = {
    value: QueryEscrowAddressRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTransferResponseParams = {
    value: MsgTransferResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryEscrowAddressResponseParams = {
    value: QueryEscrowAddressResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomTraceRequestParams = {
    value: QueryDenomTraceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomTracesResponseParams = {
    value: QueryDenomTracesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomTracesRequestParams = {
    value: QueryDenomTracesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomHashResponseParams = {
    value: QueryDenomHashResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDenomTraceParams = {
    value: DenomTrace;
    fee?: StdFee;
    memo?: string;
};
type sendAllocationParams = {
    value: Allocation;
    fee?: StdFee;
    memo?: string;
};
type sendTransferAuthorizationParams = {
    value: TransferAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomHashRequestParams = {
    value: QueryDenomHashRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalEscrowForDenomRequestParams = {
    value: QueryTotalEscrowForDenomRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalEscrowForDenomResponseParams = {
    value: QueryTotalEscrowForDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTransferParams = {
    value: MsgTransfer;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomTraceResponseParams = {
    value: QueryDenomTraceResponse;
    fee?: StdFee;
    memo?: string;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryEscrowAddressRequestParams = {
    value: QueryEscrowAddressRequest;
};
type msgTransferResponseParams = {
    value: MsgTransferResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryEscrowAddressResponseParams = {
    value: QueryEscrowAddressResponse;
};
type queryDenomTraceRequestParams = {
    value: QueryDenomTraceRequest;
};
type queryDenomTracesResponseParams = {
    value: QueryDenomTracesResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryDenomTracesRequestParams = {
    value: QueryDenomTracesRequest;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryDenomHashResponseParams = {
    value: QueryDenomHashResponse;
};
type denomTraceParams = {
    value: DenomTrace;
};
type allocationParams = {
    value: Allocation;
};
type transferAuthorizationParams = {
    value: TransferAuthorization;
};
type queryDenomHashRequestParams = {
    value: QueryDenomHashRequest;
};
type queryTotalEscrowForDenomRequestParams = {
    value: QueryTotalEscrowForDenomRequest;
};
type paramsParams = {
    value: Params;
};
type queryTotalEscrowForDenomResponseParams = {
    value: QueryTotalEscrowForDenomResponse;
};
type msgTransferParams = {
    value: MsgTransfer;
};
type queryDenomTraceResponseParams = {
    value: QueryDenomTraceResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryEscrowAddressRequest({ value, fee, memo }: sendQueryEscrowAddressRequestParams): Promise<DeliverTxResponse>;
    sendMsgTransferResponse({ value, fee, memo }: sendMsgTransferResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryEscrowAddressResponse({ value, fee, memo }: sendQueryEscrowAddressResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomTraceRequest({ value, fee, memo }: sendQueryDenomTraceRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomTracesResponse({ value, fee, memo }: sendQueryDenomTracesResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryDenomTracesRequest({ value, fee, memo }: sendQueryDenomTracesRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomHashResponse({ value, fee, memo }: sendQueryDenomHashResponseParams): Promise<DeliverTxResponse>;
    sendDenomTrace({ value, fee, memo }: sendDenomTraceParams): Promise<DeliverTxResponse>;
    sendAllocation({ value, fee, memo }: sendAllocationParams): Promise<DeliverTxResponse>;
    sendTransferAuthorization({ value, fee, memo }: sendTransferAuthorizationParams): Promise<DeliverTxResponse>;
    sendQueryDenomHashRequest({ value, fee, memo }: sendQueryDenomHashRequestParams): Promise<DeliverTxResponse>;
    sendQueryTotalEscrowForDenomRequest({ value, fee, memo }: sendQueryTotalEscrowForDenomRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryTotalEscrowForDenomResponse({ value, fee, memo }: sendQueryTotalEscrowForDenomResponseParams): Promise<DeliverTxResponse>;
    sendMsgTransfer({ value, fee, memo }: sendMsgTransferParams): Promise<DeliverTxResponse>;
    sendQueryDenomTraceResponse({ value, fee, memo }: sendQueryDenomTraceResponseParams): Promise<DeliverTxResponse>;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryEscrowAddressRequest({ value }: queryEscrowAddressRequestParams): EncodeObject;
    msgTransferResponse({ value }: msgTransferResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryEscrowAddressResponse({ value }: queryEscrowAddressResponseParams): EncodeObject;
    queryDenomTraceRequest({ value }: queryDenomTraceRequestParams): EncodeObject;
    queryDenomTracesResponse({ value }: queryDenomTracesResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryDenomTracesRequest({ value }: queryDenomTracesRequestParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryDenomHashResponse({ value }: queryDenomHashResponseParams): EncodeObject;
    denomTrace({ value }: denomTraceParams): EncodeObject;
    allocation({ value }: allocationParams): EncodeObject;
    transferAuthorization({ value }: transferAuthorizationParams): EncodeObject;
    queryDenomHashRequest({ value }: queryDenomHashRequestParams): EncodeObject;
    queryTotalEscrowForDenomRequest({ value }: queryTotalEscrowForDenomRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryTotalEscrowForDenomResponse({ value }: queryTotalEscrowForDenomResponseParams): EncodeObject;
    msgTransfer({ value }: msgTransferParams): EncodeObject;
    queryDenomTraceResponse({ value }: queryDenomTraceResponseParams): EncodeObject;
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
        IbcApplicationsTransferV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
