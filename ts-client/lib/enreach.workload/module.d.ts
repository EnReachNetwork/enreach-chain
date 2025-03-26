import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryGetEpochLengthResponse } from "./types/enreach/workload/query";
import { ManagerNodeScoreMap } from "./types/enreach/workload/workreport";
import { Workreport } from "./types/enreach/workload/workreport";
import { Workload } from "./types/enreach/workload/workload";
import { QueryGetCurrentEpochRequest } from "./types/enreach/workload/query";
import { NodeScore } from "./types/enreach/workload/workreport";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { MsgSubmitWorkreportsResponse } from "./types/enreach/workload/tx";
import { QueryGetAllWorkreportByEpochRequest } from "./types/enreach/workload/query";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { NodeScoreDB } from "./types/enreach/workload/workreport";
import { GenesisState } from "./types/enreach/workload/genesis";
import { Params } from "./types/enreach/workload/params";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetEpochLengthRequest } from "./types/enreach/workload/query";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { QueryGetCurrentEpochResponse } from "./types/enreach/workload/query";
import { QueryGetWorkreportRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportResponse } from "./types/enreach/workload/query";
import { MsgSubmitWorkreports } from "./types/enreach/workload/tx";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochResponse } from "./types/enreach/workload/query";
export { QueryGetEpochLengthResponse, ManagerNodeScoreMap, Workreport, Workload, QueryGetCurrentEpochRequest, NodeScore, MsgUpdateParamsResponse, MsgSubmitWorkreportsResponse, QueryGetAllWorkreportByEpochRequest, QueryAllWorkloadRequest, NodeScoreDB, GenesisState, Params, QueryParamsRequest, QueryGetEpochLengthRequest, QueryGetWorkloadRequest, MsgUpdateParams, QueryGetCurrentEpochResponse, QueryGetWorkreportRequest, QueryGetWorkreportResponse, MsgSubmitWorkreports, QueryParamsResponse, QueryGetWorkloadResponse, QueryAllWorkloadResponse, QueryGetAllWorkreportByEpochResponse };
type sendQueryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendManagerNodeScoreMapParams = {
    value: ManagerNodeScoreMap;
    fee?: StdFee;
    memo?: string;
};
type sendWorkreportParams = {
    value: Workreport;
    fee?: StdFee;
    memo?: string;
};
type sendWorkloadParams = {
    value: Workload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendNodeScoreParams = {
    value: NodeScore;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllWorkreportByEpochRequestParams = {
    value: QueryGetAllWorkreportByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllWorkloadRequestParams = {
    value: QueryAllWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendNodeScoreDBParams = {
    value: NodeScoreDB;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
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
type sendQueryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
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
type sendQueryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportResponseParams = {
    value: QueryGetWorkreportResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
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
type sendQueryAllWorkloadResponseParams = {
    value: QueryAllWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllWorkreportByEpochResponseParams = {
    value: QueryGetAllWorkreportByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type queryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
};
type managerNodeScoreMapParams = {
    value: ManagerNodeScoreMap;
};
type workreportParams = {
    value: Workreport;
};
type workloadParams = {
    value: Workload;
};
type queryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
};
type nodeScoreParams = {
    value: NodeScore;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
};
type queryGetAllWorkreportByEpochRequestParams = {
    value: QueryGetAllWorkreportByEpochRequest;
};
type queryAllWorkloadRequestParams = {
    value: QueryAllWorkloadRequest;
};
type nodeScoreDbParams = {
    value: NodeScoreDB;
};
type genesisStateParams = {
    value: GenesisState;
};
type paramsParams = {
    value: Params;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
};
type queryGetWorkloadRequestParams = {
    value: QueryGetWorkloadRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
};
type queryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
};
type queryGetWorkreportResponseParams = {
    value: QueryGetWorkreportResponse;
};
type msgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetWorkloadResponseParams = {
    value: QueryGetWorkloadResponse;
};
type queryAllWorkloadResponseParams = {
    value: QueryAllWorkloadResponse;
};
type queryGetAllWorkreportByEpochResponseParams = {
    value: QueryGetAllWorkreportByEpochResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryGetEpochLengthResponse({ value, fee, memo }: sendQueryGetEpochLengthResponseParams): Promise<DeliverTxResponse>;
    sendManagerNodeScoreMap({ value, fee, memo }: sendManagerNodeScoreMapParams): Promise<DeliverTxResponse>;
    sendWorkreport({ value, fee, memo }: sendWorkreportParams): Promise<DeliverTxResponse>;
    sendWorkload({ value, fee, memo }: sendWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochRequest({ value, fee, memo }: sendQueryGetCurrentEpochRequestParams): Promise<DeliverTxResponse>;
    sendNodeScore({ value, fee, memo }: sendNodeScoreParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreportsResponse({ value, fee, memo }: sendMsgSubmitWorkreportsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochRequest({ value, fee, memo }: sendQueryGetAllWorkreportByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllWorkloadRequest({ value, fee, memo }: sendQueryAllWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendNodeScoreDB({ value, fee, memo }: sendNodeScoreDBParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthRequest({ value, fee, memo }: sendQueryGetEpochLengthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkloadRequest({ value, fee, memo }: sendQueryGetWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochResponse({ value, fee, memo }: sendQueryGetCurrentEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportRequest({ value, fee, memo }: sendQueryGetWorkreportRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportResponse({ value, fee, memo }: sendQueryGetWorkreportResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreports({ value, fee, memo }: sendMsgSubmitWorkreportsParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkloadResponse({ value, fee, memo }: sendQueryGetWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllWorkloadResponse({ value, fee, memo }: sendQueryAllWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochResponse({ value, fee, memo }: sendQueryGetAllWorkreportByEpochResponseParams): Promise<DeliverTxResponse>;
    queryGetEpochLengthResponse({ value }: queryGetEpochLengthResponseParams): EncodeObject;
    managerNodeScoreMap({ value }: managerNodeScoreMapParams): EncodeObject;
    workreport({ value }: workreportParams): EncodeObject;
    workload({ value }: workloadParams): EncodeObject;
    queryGetCurrentEpochRequest({ value }: queryGetCurrentEpochRequestParams): EncodeObject;
    nodeScore({ value }: nodeScoreParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgSubmitWorkreportsResponse({ value }: msgSubmitWorkreportsResponseParams): EncodeObject;
    queryGetAllWorkreportByEpochRequest({ value }: queryGetAllWorkreportByEpochRequestParams): EncodeObject;
    queryAllWorkloadRequest({ value }: queryAllWorkloadRequestParams): EncodeObject;
    nodeScoreDb({ value }: nodeScoreDbParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetEpochLengthRequest({ value }: queryGetEpochLengthRequestParams): EncodeObject;
    queryGetWorkloadRequest({ value }: queryGetWorkloadRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryGetCurrentEpochResponse({ value }: queryGetCurrentEpochResponseParams): EncodeObject;
    queryGetWorkreportRequest({ value }: queryGetWorkreportRequestParams): EncodeObject;
    queryGetWorkreportResponse({ value }: queryGetWorkreportResponseParams): EncodeObject;
    msgSubmitWorkreports({ value }: msgSubmitWorkreportsParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetWorkloadResponse({ value }: queryGetWorkloadResponseParams): EncodeObject;
    queryAllWorkloadResponse({ value }: queryAllWorkloadResponseParams): EncodeObject;
    queryGetAllWorkreportByEpochResponse({ value }: queryGetAllWorkreportByEpochResponseParams): EncodeObject;
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
