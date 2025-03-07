import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { MsgUpdateWorkloadResponse } from "./types/enreach/workload/tx";
import { MsgCreateWorkloadResponse } from "./types/enreach/workload/tx";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
import { MsgDeleteWorkload } from "./types/enreach/workload/tx";
import { MsgUpdateWorkload } from "./types/enreach/workload/tx";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { Workload } from "./types/enreach/workload/workload";
import { MsgCreateWorkload } from "./types/enreach/workload/tx";
import { MsgDeleteWorkloadResponse } from "./types/enreach/workload/tx";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";
import { GenesisState } from "./types/enreach/workload/genesis";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
export { QueryAllWorkloadRequest, MsgUpdateParamsResponse, MsgUpdateWorkloadResponse, MsgCreateWorkloadResponse, QueryGetWorkloadRequest, Params, MsgDeleteWorkload, MsgUpdateWorkload, QueryAllWorkloadResponse, Workload, MsgCreateWorkload, MsgDeleteWorkloadResponse, QueryParamsRequest, QueryParamsResponse, QueryGetWorkloadResponse, GenesisState, MsgUpdateParams };
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
type sendMsgUpdateWorkloadResponseParams = {
    value: MsgUpdateWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateWorkloadResponseParams = {
    value: MsgCreateWorkloadResponse;
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
type sendMsgDeleteWorkloadParams = {
    value: MsgDeleteWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateWorkloadParams = {
    value: MsgUpdateWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllWorkloadResponseParams = {
    value: QueryAllWorkloadResponse;
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
type sendMsgDeleteWorkloadResponseParams = {
    value: MsgDeleteWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
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
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type queryAllWorkloadRequestParams = {
    value: QueryAllWorkloadRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgUpdateWorkloadResponseParams = {
    value: MsgUpdateWorkloadResponse;
};
type msgCreateWorkloadResponseParams = {
    value: MsgCreateWorkloadResponse;
};
type queryGetWorkloadRequestParams = {
    value: QueryGetWorkloadRequest;
};
type paramsParams = {
    value: Params;
};
type msgDeleteWorkloadParams = {
    value: MsgDeleteWorkload;
};
type msgUpdateWorkloadParams = {
    value: MsgUpdateWorkload;
};
type queryAllWorkloadResponseParams = {
    value: QueryAllWorkloadResponse;
};
type workloadParams = {
    value: Workload;
};
type msgCreateWorkloadParams = {
    value: MsgCreateWorkload;
};
type msgDeleteWorkloadResponseParams = {
    value: MsgDeleteWorkloadResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetWorkloadResponseParams = {
    value: QueryGetWorkloadResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryAllWorkloadRequest({ value, fee, memo }: sendQueryAllWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateWorkloadResponse({ value, fee, memo }: sendMsgUpdateWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateWorkloadResponse({ value, fee, memo }: sendMsgCreateWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkloadRequest({ value, fee, memo }: sendQueryGetWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgDeleteWorkload({ value, fee, memo }: sendMsgDeleteWorkloadParams): Promise<DeliverTxResponse>;
    sendMsgUpdateWorkload({ value, fee, memo }: sendMsgUpdateWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryAllWorkloadResponse({ value, fee, memo }: sendQueryAllWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendWorkload({ value, fee, memo }: sendWorkloadParams): Promise<DeliverTxResponse>;
    sendMsgCreateWorkload({ value, fee, memo }: sendMsgCreateWorkloadParams): Promise<DeliverTxResponse>;
    sendMsgDeleteWorkloadResponse({ value, fee, memo }: sendMsgDeleteWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkloadResponse({ value, fee, memo }: sendQueryGetWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    queryAllWorkloadRequest({ value }: queryAllWorkloadRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgUpdateWorkloadResponse({ value }: msgUpdateWorkloadResponseParams): EncodeObject;
    msgCreateWorkloadResponse({ value }: msgCreateWorkloadResponseParams): EncodeObject;
    queryGetWorkloadRequest({ value }: queryGetWorkloadRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgDeleteWorkload({ value }: msgDeleteWorkloadParams): EncodeObject;
    msgUpdateWorkload({ value }: msgUpdateWorkloadParams): EncodeObject;
    queryAllWorkloadResponse({ value }: queryAllWorkloadResponseParams): EncodeObject;
    workload({ value }: workloadParams): EncodeObject;
    msgCreateWorkload({ value }: msgCreateWorkloadParams): EncodeObject;
    msgDeleteWorkloadResponse({ value }: msgDeleteWorkloadResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetWorkloadResponse({ value }: queryGetWorkloadResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
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
