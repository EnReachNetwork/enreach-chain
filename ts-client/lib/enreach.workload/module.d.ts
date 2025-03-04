import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { MsgUpdateWorkload } from "./types/enreach/workload/tx";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { MsgUpdateWorkloadResponse } from "./types/enreach/workload/tx";
import { GenesisState } from "./types/enreach/workload/genesis";
import { MsgCreateWorkload } from "./types/enreach/workload/tx";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { MsgCreateWorkloadResponse } from "./types/enreach/workload/tx";
import { MsgDeleteWorkloadResponse } from "./types/enreach/workload/tx";
import { MsgDeleteWorkload } from "./types/enreach/workload/tx";
import { Workload } from "./types/enreach/workload/workload";
export { QueryGetWorkloadRequest, QueryGetWorkloadResponse, Params, QueryParamsRequest, MsgUpdateWorkload, MsgUpdateParams, QueryParamsResponse, MsgUpdateParamsResponse, MsgUpdateWorkloadResponse, GenesisState, MsgCreateWorkload, QueryAllWorkloadRequest, QueryAllWorkloadResponse, MsgCreateWorkloadResponse, MsgDeleteWorkloadResponse, MsgDeleteWorkload, Workload };
type sendQueryGetWorkloadRequestParams = {
    value: QueryGetWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkloadResponseParams = {
    value: QueryGetWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateWorkloadParams = {
    value: MsgUpdateWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateWorkloadResponseParams = {
    value: MsgUpdateWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateWorkloadParams = {
    value: MsgCreateWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllWorkloadRequestParams = {
    value: QueryAllWorkloadRequest;
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
type sendMsgDeleteWorkloadResponseParams = {
    value: MsgDeleteWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeleteWorkloadParams = {
    value: MsgDeleteWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendWorkloadParams = {
    value: Workload;
    fee?: StdFee;
    memo?: string;
};
type queryGetWorkloadRequestParams = {
    value: QueryGetWorkloadRequest;
};
type queryGetWorkloadResponseParams = {
    value: QueryGetWorkloadResponse;
};
type paramsParams = {
    value: Params;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type msgUpdateWorkloadParams = {
    value: MsgUpdateWorkload;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgUpdateWorkloadResponseParams = {
    value: MsgUpdateWorkloadResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgCreateWorkloadParams = {
    value: MsgCreateWorkload;
};
type queryAllWorkloadRequestParams = {
    value: QueryAllWorkloadRequest;
};
type queryAllWorkloadResponseParams = {
    value: QueryAllWorkloadResponse;
};
type msgCreateWorkloadResponseParams = {
    value: MsgCreateWorkloadResponse;
};
type msgDeleteWorkloadResponseParams = {
    value: MsgDeleteWorkloadResponse;
};
type msgDeleteWorkloadParams = {
    value: MsgDeleteWorkload;
};
type workloadParams = {
    value: Workload;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryGetWorkloadRequest({ value, fee, memo }: sendQueryGetWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkloadResponse({ value, fee, memo }: sendQueryGetWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateWorkload({ value, fee, memo }: sendMsgUpdateWorkloadParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateWorkloadResponse({ value, fee, memo }: sendMsgUpdateWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgCreateWorkload({ value, fee, memo }: sendMsgCreateWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryAllWorkloadRequest({ value, fee, memo }: sendQueryAllWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllWorkloadResponse({ value, fee, memo }: sendQueryAllWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateWorkloadResponse({ value, fee, memo }: sendMsgCreateWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendMsgDeleteWorkloadResponse({ value, fee, memo }: sendMsgDeleteWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendMsgDeleteWorkload({ value, fee, memo }: sendMsgDeleteWorkloadParams): Promise<DeliverTxResponse>;
    sendWorkload({ value, fee, memo }: sendWorkloadParams): Promise<DeliverTxResponse>;
    queryGetWorkloadRequest({ value }: queryGetWorkloadRequestParams): EncodeObject;
    queryGetWorkloadResponse({ value }: queryGetWorkloadResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    msgUpdateWorkload({ value }: msgUpdateWorkloadParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgUpdateWorkloadResponse({ value }: msgUpdateWorkloadResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgCreateWorkload({ value }: msgCreateWorkloadParams): EncodeObject;
    queryAllWorkloadRequest({ value }: queryAllWorkloadRequestParams): EncodeObject;
    queryAllWorkloadResponse({ value }: queryAllWorkloadResponseParams): EncodeObject;
    msgCreateWorkloadResponse({ value }: msgCreateWorkloadResponseParams): EncodeObject;
    msgDeleteWorkloadResponse({ value }: msgDeleteWorkloadResponseParams): EncodeObject;
    msgDeleteWorkload({ value }: msgDeleteWorkloadParams): EncodeObject;
    workload({ value }: workloadParams): EncodeObject;
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
