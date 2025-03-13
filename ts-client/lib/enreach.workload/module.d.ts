import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { Params } from "./types/enreach/workload/params";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { Workload } from "./types/enreach/workload/workload";
import { MsgCreateWorkload } from "./types/enreach/workload/tx";
import { MsgCreateWorkloadResponse } from "./types/enreach/workload/tx";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";
export { MsgUpdateParams, Params, QueryParamsResponse, QueryAllWorkloadResponse, QueryGetWorkloadResponse, MsgUpdateParamsResponse, QueryAllWorkloadRequest, Workload, MsgCreateWorkload, MsgCreateWorkloadResponse, GenesisState, QueryParamsRequest, QueryGetWorkloadRequest };
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllWorkloadResponseParams = {
    value: QueryAllWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkloadResponseParams = {
    value: QueryGetWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllWorkloadRequestParams = {
    value: QueryAllWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendWorkloadParams = {
    value: Workload;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateWorkloadParams = {
    value: MsgCreateWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateWorkloadResponseParams = {
    value: MsgCreateWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkloadRequestParams = {
    value: QueryGetWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type paramsParams = {
    value: Params;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryAllWorkloadResponseParams = {
    value: QueryAllWorkloadResponse;
};
type queryGetWorkloadResponseParams = {
    value: QueryGetWorkloadResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryAllWorkloadRequestParams = {
    value: QueryAllWorkloadRequest;
};
type workloadParams = {
    value: Workload;
};
type msgCreateWorkloadParams = {
    value: MsgCreateWorkload;
};
type msgCreateWorkloadResponseParams = {
    value: MsgCreateWorkloadResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetWorkloadRequestParams = {
    value: QueryGetWorkloadRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllWorkloadResponse({ value, fee, memo }: sendQueryAllWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkloadResponse({ value, fee, memo }: sendQueryGetWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllWorkloadRequest({ value, fee, memo }: sendQueryAllWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendWorkload({ value, fee, memo }: sendWorkloadParams): Promise<DeliverTxResponse>;
    sendMsgCreateWorkload({ value, fee, memo }: sendMsgCreateWorkloadParams): Promise<DeliverTxResponse>;
    sendMsgCreateWorkloadResponse({ value, fee, memo }: sendMsgCreateWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkloadRequest({ value, fee, memo }: sendQueryGetWorkloadRequestParams): Promise<DeliverTxResponse>;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryAllWorkloadResponse({ value }: queryAllWorkloadResponseParams): EncodeObject;
    queryGetWorkloadResponse({ value }: queryGetWorkloadResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryAllWorkloadRequest({ value }: queryAllWorkloadRequestParams): EncodeObject;
    workload({ value }: workloadParams): EncodeObject;
    msgCreateWorkload({ value }: msgCreateWorkloadParams): EncodeObject;
    msgCreateWorkloadResponse({ value }: msgCreateWorkloadResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetWorkloadRequest({ value }: queryGetWorkloadRequestParams): EncodeObject;
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
        EnreachWorkload: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
