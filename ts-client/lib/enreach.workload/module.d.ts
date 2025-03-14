import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { MsgCreateWorkloadResponse } from "./types/enreach/workload/tx";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";
import { Workload } from "./types/enreach/workload/workload";
import { MsgCreateWorkload } from "./types/enreach/workload/tx";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
export { MsgUpdateParams, QueryParamsRequest, MsgUpdateParamsResponse, GenesisState, QueryAllWorkloadResponse, MsgCreateWorkloadResponse, QueryAllWorkloadRequest, QueryParamsResponse, QueryGetWorkloadResponse, Workload, MsgCreateWorkload, QueryGetWorkloadRequest, Params };
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
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
type sendQueryAllWorkloadRequestParams = {
    value: QueryAllWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkloadResponseParams = {
    value: QueryGetWorkloadResponse;
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
type sendQueryGetWorkloadRequestParams = {
    value: QueryGetWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryAllWorkloadResponseParams = {
    value: QueryAllWorkloadResponse;
};
type msgCreateWorkloadResponseParams = {
    value: MsgCreateWorkloadResponse;
};
type queryAllWorkloadRequestParams = {
    value: QueryAllWorkloadRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetWorkloadResponseParams = {
    value: QueryGetWorkloadResponse;
};
type workloadParams = {
    value: Workload;
};
type msgCreateWorkloadParams = {
    value: MsgCreateWorkload;
};
type queryGetWorkloadRequestParams = {
    value: QueryGetWorkloadRequest;
};
type paramsParams = {
    value: Params;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryAllWorkloadResponse({ value, fee, memo }: sendQueryAllWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateWorkloadResponse({ value, fee, memo }: sendMsgCreateWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllWorkloadRequest({ value, fee, memo }: sendQueryAllWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkloadResponse({ value, fee, memo }: sendQueryGetWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendWorkload({ value, fee, memo }: sendWorkloadParams): Promise<DeliverTxResponse>;
    sendMsgCreateWorkload({ value, fee, memo }: sendMsgCreateWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkloadRequest({ value, fee, memo }: sendQueryGetWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryAllWorkloadResponse({ value }: queryAllWorkloadResponseParams): EncodeObject;
    msgCreateWorkloadResponse({ value }: msgCreateWorkloadResponseParams): EncodeObject;
    queryAllWorkloadRequest({ value }: queryAllWorkloadRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetWorkloadResponse({ value }: queryGetWorkloadResponseParams): EncodeObject;
    workload({ value }: workloadParams): EncodeObject;
    msgCreateWorkload({ value }: msgCreateWorkloadParams): EncodeObject;
    queryGetWorkloadRequest({ value }: queryGetWorkloadRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
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
