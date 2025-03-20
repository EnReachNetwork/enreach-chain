import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { Workload } from "./types/enreach/workload/workload";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { Params } from "./types/enreach/workload/params";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { MsgCreateWorkload } from "./types/enreach/workload/tx";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { MsgCreateWorkloadResponse } from "./types/enreach/workload/tx";
export { Workload, QueryParamsRequest, QueryGetWorkloadResponse, QueryAllWorkloadRequest, MsgUpdateParamsResponse, Params, QueryParamsResponse, GenesisState, QueryGetWorkloadRequest, MsgUpdateParams, MsgCreateWorkload, QueryAllWorkloadResponse, MsgCreateWorkloadResponse };
type sendWorkloadParams = {
    value: Workload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkloadResponseParams = {
    value: QueryGetWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllWorkloadRequestParams = {
    value: QueryAllWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
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
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkloadRequestParams = {
    value: QueryGetWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateWorkloadParams = {
    value: MsgCreateWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllWorkloadResponseParams = {
    value: QueryAllWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateWorkloadResponseParams = {
    value: MsgCreateWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type workloadParams = {
    value: Workload;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetWorkloadResponseParams = {
    value: QueryGetWorkloadResponse;
};
type queryAllWorkloadRequestParams = {
    value: QueryAllWorkloadRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type paramsParams = {
    value: Params;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryGetWorkloadRequestParams = {
    value: QueryGetWorkloadRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgCreateWorkloadParams = {
    value: MsgCreateWorkload;
};
type queryAllWorkloadResponseParams = {
    value: QueryAllWorkloadResponse;
};
type msgCreateWorkloadResponseParams = {
    value: MsgCreateWorkloadResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendWorkload({ value, fee, memo }: sendWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkloadResponse({ value, fee, memo }: sendQueryGetWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllWorkloadRequest({ value, fee, memo }: sendQueryAllWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkloadRequest({ value, fee, memo }: sendQueryGetWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgCreateWorkload({ value, fee, memo }: sendMsgCreateWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryAllWorkloadResponse({ value, fee, memo }: sendQueryAllWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateWorkloadResponse({ value, fee, memo }: sendMsgCreateWorkloadResponseParams): Promise<DeliverTxResponse>;
    workload({ value }: workloadParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetWorkloadResponse({ value }: queryGetWorkloadResponseParams): EncodeObject;
    queryAllWorkloadRequest({ value }: queryAllWorkloadRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryGetWorkloadRequest({ value }: queryGetWorkloadRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgCreateWorkload({ value }: msgCreateWorkloadParams): EncodeObject;
    queryAllWorkloadResponse({ value }: queryAllWorkloadResponseParams): EncodeObject;
    msgCreateWorkloadResponse({ value }: msgCreateWorkloadResponseParams): EncodeObject;
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
