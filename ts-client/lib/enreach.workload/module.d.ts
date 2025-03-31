import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { Superior } from "./types/enreach/workload/superior";
import { MsgUpdateHistoryEpochDataDepthResponse } from "./types/enreach/workload/tx";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetSuperiorResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataRequest } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { NodeScore } from "./types/enreach/workload/workreport";
import { Params } from "./types/enreach/workload/params";
import { QueryGetCurrentEpochRequest } from "./types/enreach/workload/query";
import { QueryGetNodeWorkloadResponse } from "./types/enreach/workload/query";
import { NodeScoreDB } from "./types/enreach/workload/workreport";
import { Workreport } from "./types/enreach/workload/workreport";
import { EpochProcessData } from "./types/enreach/workload/workreport";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { QueryGetWorkreportProcessBatchSizeRequest } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataResponse } from "./types/enreach/workload/query";
import { MsgUpdateWorkreportProcessBatchSize } from "./types/enreach/workload/tx";
import { ManagerWorkload } from "./types/enreach/workload/workload";
import { QueryGetCurrentEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochDataDepthRequest } from "./types/enreach/workload/query";
import { QueryGetEpochLengthResponse } from "./types/enreach/workload/query";
import { NodeWorkload } from "./types/enreach/workload/workload";
import { QueryGetWorkreportResponse } from "./types/enreach/workload/query";
import { MsgCreateSuperiorResponse } from "./types/enreach/workload/tx";
import { ManagerNodeScoreMap } from "./types/enreach/workload/workreport";
import { QueryGetNodeWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochDataDepthResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetManagerWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetWorkreportRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/query";
import { MsgUpdateHistoryEpochDataDepth } from "./types/enreach/workload/tx";
import { MsgCreateSuperior } from "./types/enreach/workload/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/workload/tx";
import { QueryGetEpochLengthRequest } from "./types/enreach/workload/query";
import { QueryGetManagerWorkloadRequest } from "./types/enreach/workload/query";
import { MsgUpdateWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/tx";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { MsgUpdateSuperior } from "./types/enreach/workload/tx";
import { QueryGetAllNodeWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { MsgSubmitWorkreports } from "./types/enreach/workload/tx";
import { MsgSubmitWorkreportsResponse } from "./types/enreach/workload/tx";
import { QueryGetAllNodeWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetSuperiorRequest } from "./types/enreach/workload/query";
export { Superior, MsgUpdateHistoryEpochDataDepthResponse, GenesisState, QueryParamsRequest, QueryGetEpochProcessDataResponse, QueryGetSuperiorResponse, QueryGetAllManagerWorkloadByEpochResponse, QueryGetAllWorkreportByEpochRequest, QueryGetEpochProcessDataRequest, MsgUpdateParamsResponse, NodeScore, Params, QueryGetCurrentEpochRequest, QueryGetNodeWorkloadResponse, NodeScoreDB, Workreport, EpochProcessData, MsgUpdateParams, QueryGetWorkreportProcessBatchSizeRequest, QueryGetAllEpochProcessDataResponse, MsgUpdateWorkreportProcessBatchSize, ManagerWorkload, QueryGetCurrentEpochResponse, QueryGetAllWorkreportByEpochResponse, QueryGetHistoryEpochDataDepthRequest, QueryGetEpochLengthResponse, NodeWorkload, QueryGetWorkreportResponse, MsgCreateSuperiorResponse, ManagerNodeScoreMap, QueryGetNodeWorkloadRequest, QueryGetHistoryEpochDataDepthResponse, QueryGetAllManagerWorkloadByEpochRequest, QueryGetAllEpochProcessDataRequest, QueryGetManagerWorkloadResponse, QueryGetWorkreportRequest, QueryGetWorkreportProcessBatchSizeResponse, MsgUpdateHistoryEpochDataDepth, MsgCreateSuperior, MsgUpdateSuperiorResponse, QueryGetEpochLengthRequest, QueryGetManagerWorkloadRequest, MsgUpdateWorkreportProcessBatchSizeResponse, QueryParamsResponse, MsgUpdateSuperior, QueryGetAllNodeWorkloadByEpochRequest, MsgSubmitWorkreports, MsgSubmitWorkreportsResponse, QueryGetAllNodeWorkloadByEpochResponse, QueryGetSuperiorRequest };
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateHistoryEpochDataDepthResponseParams = {
    value: MsgUpdateHistoryEpochDataDepthResponse;
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
type sendQueryGetEpochProcessDataResponseParams = {
    value: QueryGetEpochProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerWorkloadByEpochResponseParams = {
    value: QueryGetAllManagerWorkloadByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllWorkreportByEpochRequestParams = {
    value: QueryGetAllWorkreportByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochProcessDataRequestParams = {
    value: QueryGetEpochProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendNodeScoreParams = {
    value: NodeScore;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeWorkloadResponseParams = {
    value: QueryGetNodeWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendNodeScoreDBParams = {
    value: NodeScoreDB;
    fee?: StdFee;
    memo?: string;
};
type sendWorkreportParams = {
    value: Workreport;
    fee?: StdFee;
    memo?: string;
};
type sendEpochProcessDataParams = {
    value: EpochProcessData;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportProcessBatchSizeRequestParams = {
    value: QueryGetWorkreportProcessBatchSizeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEpochProcessDataResponseParams = {
    value: QueryGetAllEpochProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateWorkreportProcessBatchSizeParams = {
    value: MsgUpdateWorkreportProcessBatchSize;
    fee?: StdFee;
    memo?: string;
};
type sendManagerWorkloadParams = {
    value: ManagerWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllWorkreportByEpochResponseParams = {
    value: QueryGetAllWorkreportByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochDataDepthRequestParams = {
    value: QueryGetHistoryEpochDataDepthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendNodeWorkloadParams = {
    value: NodeWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportResponseParams = {
    value: QueryGetWorkreportResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendManagerNodeScoreMapParams = {
    value: ManagerNodeScoreMap;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeWorkloadRequestParams = {
    value: QueryGetNodeWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochDataDepthResponseParams = {
    value: QueryGetHistoryEpochDataDepthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerWorkloadByEpochRequestParams = {
    value: QueryGetAllManagerWorkloadByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEpochProcessDataRequestParams = {
    value: QueryGetAllEpochProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerWorkloadResponseParams = {
    value: QueryGetManagerWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportProcessBatchSizeResponseParams = {
    value: QueryGetWorkreportProcessBatchSizeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateHistoryEpochDataDepthParams = {
    value: MsgUpdateHistoryEpochDataDepth;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerWorkloadRequestParams = {
    value: QueryGetManagerWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateWorkreportProcessBatchSizeResponseParams = {
    value: MsgUpdateWorkreportProcessBatchSizeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllNodeWorkloadByEpochRequestParams = {
    value: QueryGetAllNodeWorkloadByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllNodeWorkloadByEpochResponseParams = {
    value: QueryGetAllNodeWorkloadByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
    fee?: StdFee;
    memo?: string;
};
type superiorParams = {
    value: Superior;
};
type msgUpdateHistoryEpochDataDepthResponseParams = {
    value: MsgUpdateHistoryEpochDataDepthResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetEpochProcessDataResponseParams = {
    value: QueryGetEpochProcessDataResponse;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type queryGetAllManagerWorkloadByEpochResponseParams = {
    value: QueryGetAllManagerWorkloadByEpochResponse;
};
type queryGetAllWorkreportByEpochRequestParams = {
    value: QueryGetAllWorkreportByEpochRequest;
};
type queryGetEpochProcessDataRequestParams = {
    value: QueryGetEpochProcessDataRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type nodeScoreParams = {
    value: NodeScore;
};
type paramsParams = {
    value: Params;
};
type queryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
};
type queryGetNodeWorkloadResponseParams = {
    value: QueryGetNodeWorkloadResponse;
};
type nodeScoreDbParams = {
    value: NodeScoreDB;
};
type workreportParams = {
    value: Workreport;
};
type epochProcessDataParams = {
    value: EpochProcessData;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryGetWorkreportProcessBatchSizeRequestParams = {
    value: QueryGetWorkreportProcessBatchSizeRequest;
};
type queryGetAllEpochProcessDataResponseParams = {
    value: QueryGetAllEpochProcessDataResponse;
};
type msgUpdateWorkreportProcessBatchSizeParams = {
    value: MsgUpdateWorkreportProcessBatchSize;
};
type managerWorkloadParams = {
    value: ManagerWorkload;
};
type queryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
};
type queryGetAllWorkreportByEpochResponseParams = {
    value: QueryGetAllWorkreportByEpochResponse;
};
type queryGetHistoryEpochDataDepthRequestParams = {
    value: QueryGetHistoryEpochDataDepthRequest;
};
type queryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
};
type nodeWorkloadParams = {
    value: NodeWorkload;
};
type queryGetWorkreportResponseParams = {
    value: QueryGetWorkreportResponse;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type managerNodeScoreMapParams = {
    value: ManagerNodeScoreMap;
};
type queryGetNodeWorkloadRequestParams = {
    value: QueryGetNodeWorkloadRequest;
};
type queryGetHistoryEpochDataDepthResponseParams = {
    value: QueryGetHistoryEpochDataDepthResponse;
};
type queryGetAllManagerWorkloadByEpochRequestParams = {
    value: QueryGetAllManagerWorkloadByEpochRequest;
};
type queryGetAllEpochProcessDataRequestParams = {
    value: QueryGetAllEpochProcessDataRequest;
};
type queryGetManagerWorkloadResponseParams = {
    value: QueryGetManagerWorkloadResponse;
};
type queryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
};
type queryGetWorkreportProcessBatchSizeResponseParams = {
    value: QueryGetWorkreportProcessBatchSizeResponse;
};
type msgUpdateHistoryEpochDataDepthParams = {
    value: MsgUpdateHistoryEpochDataDepth;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type queryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
};
type queryGetManagerWorkloadRequestParams = {
    value: QueryGetManagerWorkloadRequest;
};
type msgUpdateWorkreportProcessBatchSizeResponseParams = {
    value: MsgUpdateWorkreportProcessBatchSizeResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type queryGetAllNodeWorkloadByEpochRequestParams = {
    value: QueryGetAllNodeWorkloadByEpochRequest;
};
type msgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
};
type msgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
};
type queryGetAllNodeWorkloadByEpochResponseParams = {
    value: QueryGetAllNodeWorkloadByEpochResponse;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgUpdateHistoryEpochDataDepthResponse({ value, fee, memo }: sendMsgUpdateHistoryEpochDataDepthResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochProcessDataResponse({ value, fee, memo }: sendQueryGetEpochProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerWorkloadByEpochResponse({ value, fee, memo }: sendQueryGetAllManagerWorkloadByEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochRequest({ value, fee, memo }: sendQueryGetAllWorkreportByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochProcessDataRequest({ value, fee, memo }: sendQueryGetEpochProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendNodeScore({ value, fee, memo }: sendNodeScoreParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochRequest({ value, fee, memo }: sendQueryGetCurrentEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeWorkloadResponse({ value, fee, memo }: sendQueryGetNodeWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendNodeScoreDB({ value, fee, memo }: sendNodeScoreDBParams): Promise<DeliverTxResponse>;
    sendWorkreport({ value, fee, memo }: sendWorkreportParams): Promise<DeliverTxResponse>;
    sendEpochProcessData({ value, fee, memo }: sendEpochProcessDataParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportProcessBatchSizeRequest({ value, fee, memo }: sendQueryGetWorkreportProcessBatchSizeRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEpochProcessDataResponse({ value, fee, memo }: sendQueryGetAllEpochProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateWorkreportProcessBatchSize({ value, fee, memo }: sendMsgUpdateWorkreportProcessBatchSizeParams): Promise<DeliverTxResponse>;
    sendManagerWorkload({ value, fee, memo }: sendManagerWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochResponse({ value, fee, memo }: sendQueryGetCurrentEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochResponse({ value, fee, memo }: sendQueryGetAllWorkreportByEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochDataDepthRequest({ value, fee, memo }: sendQueryGetHistoryEpochDataDepthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthResponse({ value, fee, memo }: sendQueryGetEpochLengthResponseParams): Promise<DeliverTxResponse>;
    sendNodeWorkload({ value, fee, memo }: sendNodeWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportResponse({ value, fee, memo }: sendQueryGetWorkreportResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendManagerNodeScoreMap({ value, fee, memo }: sendManagerNodeScoreMapParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeWorkloadRequest({ value, fee, memo }: sendQueryGetNodeWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochDataDepthResponse({ value, fee, memo }: sendQueryGetHistoryEpochDataDepthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerWorkloadByEpochRequest({ value, fee, memo }: sendQueryGetAllManagerWorkloadByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEpochProcessDataRequest({ value, fee, memo }: sendQueryGetAllEpochProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerWorkloadResponse({ value, fee, memo }: sendQueryGetManagerWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportRequest({ value, fee, memo }: sendQueryGetWorkreportRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportProcessBatchSizeResponse({ value, fee, memo }: sendQueryGetWorkreportProcessBatchSizeResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateHistoryEpochDataDepth({ value, fee, memo }: sendMsgUpdateHistoryEpochDataDepthParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthRequest({ value, fee, memo }: sendQueryGetEpochLengthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerWorkloadRequest({ value, fee, memo }: sendQueryGetManagerWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateWorkreportProcessBatchSizeResponse({ value, fee, memo }: sendMsgUpdateWorkreportProcessBatchSizeResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryGetAllNodeWorkloadByEpochRequest({ value, fee, memo }: sendQueryGetAllNodeWorkloadByEpochRequestParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreports({ value, fee, memo }: sendMsgSubmitWorkreportsParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreportsResponse({ value, fee, memo }: sendMsgSubmitWorkreportsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllNodeWorkloadByEpochResponse({ value, fee, memo }: sendQueryGetAllNodeWorkloadByEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    superior({ value }: superiorParams): EncodeObject;
    msgUpdateHistoryEpochDataDepthResponse({ value }: msgUpdateHistoryEpochDataDepthResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetEpochProcessDataResponse({ value }: queryGetEpochProcessDataResponseParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    queryGetAllManagerWorkloadByEpochResponse({ value }: queryGetAllManagerWorkloadByEpochResponseParams): EncodeObject;
    queryGetAllWorkreportByEpochRequest({ value }: queryGetAllWorkreportByEpochRequestParams): EncodeObject;
    queryGetEpochProcessDataRequest({ value }: queryGetEpochProcessDataRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    nodeScore({ value }: nodeScoreParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryGetCurrentEpochRequest({ value }: queryGetCurrentEpochRequestParams): EncodeObject;
    queryGetNodeWorkloadResponse({ value }: queryGetNodeWorkloadResponseParams): EncodeObject;
    nodeScoreDb({ value }: nodeScoreDbParams): EncodeObject;
    workreport({ value }: workreportParams): EncodeObject;
    epochProcessData({ value }: epochProcessDataParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryGetWorkreportProcessBatchSizeRequest({ value }: queryGetWorkreportProcessBatchSizeRequestParams): EncodeObject;
    queryGetAllEpochProcessDataResponse({ value }: queryGetAllEpochProcessDataResponseParams): EncodeObject;
    msgUpdateWorkreportProcessBatchSize({ value }: msgUpdateWorkreportProcessBatchSizeParams): EncodeObject;
    managerWorkload({ value }: managerWorkloadParams): EncodeObject;
    queryGetCurrentEpochResponse({ value }: queryGetCurrentEpochResponseParams): EncodeObject;
    queryGetAllWorkreportByEpochResponse({ value }: queryGetAllWorkreportByEpochResponseParams): EncodeObject;
    queryGetHistoryEpochDataDepthRequest({ value }: queryGetHistoryEpochDataDepthRequestParams): EncodeObject;
    queryGetEpochLengthResponse({ value }: queryGetEpochLengthResponseParams): EncodeObject;
    nodeWorkload({ value }: nodeWorkloadParams): EncodeObject;
    queryGetWorkreportResponse({ value }: queryGetWorkreportResponseParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    managerNodeScoreMap({ value }: managerNodeScoreMapParams): EncodeObject;
    queryGetNodeWorkloadRequest({ value }: queryGetNodeWorkloadRequestParams): EncodeObject;
    queryGetHistoryEpochDataDepthResponse({ value }: queryGetHistoryEpochDataDepthResponseParams): EncodeObject;
    queryGetAllManagerWorkloadByEpochRequest({ value }: queryGetAllManagerWorkloadByEpochRequestParams): EncodeObject;
    queryGetAllEpochProcessDataRequest({ value }: queryGetAllEpochProcessDataRequestParams): EncodeObject;
    queryGetManagerWorkloadResponse({ value }: queryGetManagerWorkloadResponseParams): EncodeObject;
    queryGetWorkreportRequest({ value }: queryGetWorkreportRequestParams): EncodeObject;
    queryGetWorkreportProcessBatchSizeResponse({ value }: queryGetWorkreportProcessBatchSizeResponseParams): EncodeObject;
    msgUpdateHistoryEpochDataDepth({ value }: msgUpdateHistoryEpochDataDepthParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    queryGetEpochLengthRequest({ value }: queryGetEpochLengthRequestParams): EncodeObject;
    queryGetManagerWorkloadRequest({ value }: queryGetManagerWorkloadRequestParams): EncodeObject;
    msgUpdateWorkreportProcessBatchSizeResponse({ value }: msgUpdateWorkreportProcessBatchSizeResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    queryGetAllNodeWorkloadByEpochRequest({ value }: queryGetAllNodeWorkloadByEpochRequestParams): EncodeObject;
    msgSubmitWorkreports({ value }: msgSubmitWorkreportsParams): EncodeObject;
    msgSubmitWorkreportsResponse({ value }: msgSubmitWorkreportsResponseParams): EncodeObject;
    queryGetAllNodeWorkloadByEpochResponse({ value }: queryGetAllNodeWorkloadByEpochResponseParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
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
