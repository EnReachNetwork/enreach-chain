import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryGetNodeWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetManagerWRWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerRPWorkloadByEraResponse } from "./types/enreach/workload/query";
import { MsgUpdateHistoryEpochDataDepthResponse } from "./types/enreach/workload/tx";
import { QueryGetEpochLengthResponse } from "./types/enreach/workload/query";
import { QueryGetAllNodeWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { QueryGetAllHistoryEraResponse } from "./types/enreach/workload/query";
import { QueryGetSuperiorRequest } from "./types/enreach/workload/query";
import { ReputationPoint } from "./types/enreach/workload/reputationpoint";
import { QueryGetHistoryEpochDataDepthResponse } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataResponse } from "./types/enreach/workload/query";
import { Superior } from "./types/enreach/workload/superior";
import { MsgUpdateHistoryEpochDataDepth } from "./types/enreach/workload/tx";
import { Workreport } from "./types/enreach/workload/workreport";
import { QueryGetCurrentEpochRequest } from "./types/enreach/workload/query";
import { QueryGetPendingNextEraResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeRawData } from "./types/enreach/workload/reputationpoint";
import { QueryGetAllReputationPointResponse } from "./types/enreach/workload/query";
import { EpochProcessData } from "./types/enreach/workload/workreport";
import { QueryGetAllWorkreportByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetEraLengthResponse } from "./types/enreach/workload/query";
import { QueryGetCurrentEraRequest } from "./types/enreach/workload/query";
import { MsgSubmitReputationPointChangeData } from "./types/enreach/workload/tx";
import { ReputationDeltaPoint } from "./types/enreach/workload/reputationpoint";
import { ManagerWRWorkload } from "./types/enreach/workload/workload";
import { QueryGetAllManagerRPWorkloadByEraRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportResponse } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataRequest } from "./types/enreach/workload/query";
import { MsgUpdateSuperiorResponse } from "./types/enreach/workload/tx";
import { QueryGetManagerRPWorkloadRequest } from "./types/enreach/workload/query";
import { ReputationPointChangeRawDataMapDB } from "./types/enreach/workload/reputationpoint";
import { QueryGetNodeWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetPendingNextEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraRequest } from "./types/enreach/workload/query";
import { NodeScoreDB } from "./types/enreach/workload/workreport";
import { EraProcessData } from "./types/enreach/workload/reputationpoint";
import { QueryGetPendingNextEpochRequest } from "./types/enreach/workload/query";
import { QueryGetAllHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointChangeDataByEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointChangeDataByEraResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochResponse } from "./types/enreach/workload/query";
import { EraInfo } from "./types/enreach/workload/era_info";
import { QueryGetAllManagerWRWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportProcessBatchSizeRequest } from "./types/enreach/workload/query";
import { QueryGetCurrentEraResponse } from "./types/enreach/workload/query";
import { MsgSubmitWorkreports } from "./types/enreach/workload/tx";
import { MsgUpdateWorkreportProcessBatchSize } from "./types/enreach/workload/tx";
import { ManagerNodeScoreMap } from "./types/enreach/workload/workreport";
import { QueryGetManagerWRWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraResponse } from "./types/enreach/workload/query";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { QueryGetAllEpochProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointResponse } from "./types/enreach/workload/query";
import { QueryGetAllNodeWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetCurrentEpochResponse } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeData } from "./types/enreach/workload/reputationpoint";
import { EpochInfo } from "./types/enreach/workload/epoch_info";
import { QueryGetHistoryEraResponse } from "./types/enreach/workload/query";
import { MsgCreateSuperior } from "./types/enreach/workload/tx";
import { MsgSubmitReputationPointChangeDataResponse } from "./types/enreach/workload/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/workload/tx";
import { ManagerRPWorkload } from "./types/enreach/workload/workload";
import { QueryGetEpochLengthRequest } from "./types/enreach/workload/query";
import { QueryGetAllHistoryEraRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataResponse } from "./types/enreach/workload/query";
import { QueryGetReputationDeltaPointRequest } from "./types/enreach/workload/query";
import { QueryGetReputationDeltaPointResponse } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataRequest } from "./types/enreach/workload/query";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryGetAllReputationPointRequest } from "./types/enreach/workload/query";
import { ReputationPointChangeRawDataDB } from "./types/enreach/workload/reputationpoint";
import { Params } from "./types/enreach/workload/params";
import { QueryGetManagerRPWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllEraProcessDataRequest } from "./types/enreach/workload/query";
import { NodeWorkload } from "./types/enreach/workload/workload";
import { QueryGetPendingNextEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerWRWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { MsgUpdateWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/tx";
import { QueryGetHistoryEpochDataDepthRequest } from "./types/enreach/workload/query";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportRequest } from "./types/enreach/workload/query";
import { QueryGetEraLengthRequest } from "./types/enreach/workload/query";
import { QueryGetAllEraProcessDataResponse } from "./types/enreach/workload/query";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { MsgUpdateSuperior } from "./types/enreach/workload/tx";
import { QueryGetAllHistoryEpochResponse } from "./types/enreach/workload/query";
import { NodeScore } from "./types/enreach/workload/workreport";
import { QueryGetHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetSuperiorResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEraRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointRequest } from "./types/enreach/workload/query";
import { MsgSubmitWorkreportsResponse } from "./types/enreach/workload/tx";
export { QueryGetNodeWorkloadResponse, QueryGetManagerWRWorkloadResponse, QueryGetAllManagerRPWorkloadByEraResponse, MsgUpdateHistoryEpochDataDepthResponse, QueryGetEpochLengthResponse, QueryGetAllNodeWorkloadByEpochResponse, MsgUpdateParamsResponse, QueryGetAllHistoryEraResponse, QueryGetSuperiorRequest, ReputationPoint, QueryGetHistoryEpochDataDepthResponse, QueryGetAllEpochProcessDataResponse, Superior, MsgUpdateHistoryEpochDataDepth, Workreport, QueryGetCurrentEpochRequest, QueryGetPendingNextEraResponse, ReputationPointChangeRawData, QueryGetAllReputationPointResponse, EpochProcessData, QueryGetAllWorkreportByEpochResponse, QueryGetEpochProcessDataRequest, QueryGetEraLengthResponse, QueryGetCurrentEraRequest, MsgSubmitReputationPointChangeData, ReputationDeltaPoint, ManagerWRWorkload, QueryGetAllManagerRPWorkloadByEraRequest, QueryGetWorkreportResponse, QueryGetReputationPointChangeDataRequest, MsgUpdateSuperiorResponse, QueryGetManagerRPWorkloadRequest, ReputationPointChangeRawDataMapDB, QueryGetNodeWorkloadRequest, QueryGetPendingNextEraRequest, QueryGetAllReputationDeltaPointByEraRequest, NodeScoreDB, EraProcessData, QueryGetPendingNextEpochRequest, QueryGetAllHistoryEpochRequest, QueryGetAllReputationPointChangeDataByEraRequest, QueryGetAllReputationPointChangeDataByEraResponse, QueryGetHistoryEpochResponse, EraInfo, QueryGetAllManagerWRWorkloadByEpochRequest, QueryGetWorkreportProcessBatchSizeRequest, QueryGetCurrentEraResponse, MsgSubmitWorkreports, MsgUpdateWorkreportProcessBatchSize, ManagerNodeScoreMap, QueryGetManagerWRWorkloadRequest, QueryGetAllWorkreportByEpochRequest, QueryGetWorkreportProcessBatchSizeResponse, QueryGetAllReputationDeltaPointByEraResponse, MsgUpdateParams, QueryGetAllEpochProcessDataRequest, QueryGetReputationPointResponse, QueryGetAllNodeWorkloadByEpochRequest, QueryGetCurrentEpochResponse, QueryGetEpochProcessDataResponse, QueryGetEraProcessDataResponse, ReputationPointChangeData, EpochInfo, QueryGetHistoryEraResponse, MsgCreateSuperior, MsgSubmitReputationPointChangeDataResponse, MsgCreateSuperiorResponse, ManagerRPWorkload, QueryGetEpochLengthRequest, QueryGetAllHistoryEraRequest, QueryGetReputationPointChangeDataResponse, QueryGetReputationDeltaPointRequest, QueryGetReputationDeltaPointResponse, QueryGetEraProcessDataRequest, GenesisState, QueryGetAllReputationPointRequest, ReputationPointChangeRawDataDB, Params, QueryGetManagerRPWorkloadResponse, QueryGetAllEraProcessDataRequest, NodeWorkload, QueryGetPendingNextEpochResponse, QueryGetAllManagerWRWorkloadByEpochResponse, MsgUpdateWorkreportProcessBatchSizeResponse, QueryGetHistoryEpochDataDepthRequest, QueryParamsRequest, QueryGetWorkreportRequest, QueryGetEraLengthRequest, QueryGetAllEraProcessDataResponse, QueryParamsResponse, MsgUpdateSuperior, QueryGetAllHistoryEpochResponse, NodeScore, QueryGetHistoryEpochRequest, QueryGetSuperiorResponse, QueryGetHistoryEraRequest, QueryGetReputationPointRequest, MsgSubmitWorkreportsResponse };
type sendQueryGetNodeWorkloadResponseParams = {
    value: QueryGetNodeWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerWRWorkloadResponseParams = {
    value: QueryGetManagerWRWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerRPWorkloadByEraResponseParams = {
    value: QueryGetAllManagerRPWorkloadByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateHistoryEpochDataDepthResponseParams = {
    value: MsgUpdateHistoryEpochDataDepthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllNodeWorkloadByEpochResponseParams = {
    value: QueryGetAllNodeWorkloadByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEraResponseParams = {
    value: QueryGetAllHistoryEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointParams = {
    value: ReputationPoint;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochDataDepthResponseParams = {
    value: QueryGetHistoryEpochDataDepthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEpochProcessDataResponseParams = {
    value: QueryGetAllEpochProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateHistoryEpochDataDepthParams = {
    value: MsgUpdateHistoryEpochDataDepth;
    fee?: StdFee;
    memo?: string;
};
type sendWorkreportParams = {
    value: Workreport;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEraResponseParams = {
    value: QueryGetPendingNextEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataParams = {
    value: ReputationPointChangeRawData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationPointResponseParams = {
    value: QueryGetAllReputationPointResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEpochProcessDataParams = {
    value: EpochProcessData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllWorkreportByEpochResponseParams = {
    value: QueryGetAllWorkreportByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochProcessDataRequestParams = {
    value: QueryGetEpochProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraLengthResponseParams = {
    value: QueryGetEraLengthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEraRequestParams = {
    value: QueryGetCurrentEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitReputationPointChangeDataParams = {
    value: MsgSubmitReputationPointChangeData;
    fee?: StdFee;
    memo?: string;
};
type sendReputationDeltaPointParams = {
    value: ReputationDeltaPoint;
    fee?: StdFee;
    memo?: string;
};
type sendManagerWRWorkloadParams = {
    value: ManagerWRWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerRPWorkloadByEraRequestParams = {
    value: QueryGetAllManagerRPWorkloadByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportResponseParams = {
    value: QueryGetWorkreportResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointChangeDataRequestParams = {
    value: QueryGetReputationPointChangeDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerRPWorkloadRequestParams = {
    value: QueryGetManagerRPWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataMapDBParams = {
    value: ReputationPointChangeRawDataMapDB;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeWorkloadRequestParams = {
    value: QueryGetNodeWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEraRequestParams = {
    value: QueryGetPendingNextEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationDeltaPointByEraRequestParams = {
    value: QueryGetAllReputationDeltaPointByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendNodeScoreDBParams = {
    value: NodeScoreDB;
    fee?: StdFee;
    memo?: string;
};
type sendEraProcessDataParams = {
    value: EraProcessData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEpochRequestParams = {
    value: QueryGetPendingNextEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEpochRequestParams = {
    value: QueryGetAllHistoryEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationPointChangeDataByEraRequestParams = {
    value: QueryGetAllReputationPointChangeDataByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationPointChangeDataByEraResponseParams = {
    value: QueryGetAllReputationPointChangeDataByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochResponseParams = {
    value: QueryGetHistoryEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEraInfoParams = {
    value: EraInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerWRWorkloadByEpochRequestParams = {
    value: QueryGetAllManagerWRWorkloadByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportProcessBatchSizeRequestParams = {
    value: QueryGetWorkreportProcessBatchSizeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEraResponseParams = {
    value: QueryGetCurrentEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateWorkreportProcessBatchSizeParams = {
    value: MsgUpdateWorkreportProcessBatchSize;
    fee?: StdFee;
    memo?: string;
};
type sendManagerNodeScoreMapParams = {
    value: ManagerNodeScoreMap;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerWRWorkloadRequestParams = {
    value: QueryGetManagerWRWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllWorkreportByEpochRequestParams = {
    value: QueryGetAllWorkreportByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportProcessBatchSizeResponseParams = {
    value: QueryGetWorkreportProcessBatchSizeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationDeltaPointByEraResponseParams = {
    value: QueryGetAllReputationDeltaPointByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEpochProcessDataRequestParams = {
    value: QueryGetAllEpochProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointResponseParams = {
    value: QueryGetReputationPointResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllNodeWorkloadByEpochRequestParams = {
    value: QueryGetAllNodeWorkloadByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochProcessDataResponseParams = {
    value: QueryGetEpochProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraProcessDataResponseParams = {
    value: QueryGetEraProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeDataParams = {
    value: ReputationPointChangeData;
    fee?: StdFee;
    memo?: string;
};
type sendEpochInfoParams = {
    value: EpochInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEraResponseParams = {
    value: QueryGetHistoryEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitReputationPointChangeDataResponseParams = {
    value: MsgSubmitReputationPointChangeDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendManagerRPWorkloadParams = {
    value: ManagerRPWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEraRequestParams = {
    value: QueryGetAllHistoryEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointChangeDataResponseParams = {
    value: QueryGetReputationPointChangeDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationDeltaPointRequestParams = {
    value: QueryGetReputationDeltaPointRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationDeltaPointResponseParams = {
    value: QueryGetReputationDeltaPointResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraProcessDataRequestParams = {
    value: QueryGetEraProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationPointRequestParams = {
    value: QueryGetAllReputationPointRequest;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataDBParams = {
    value: ReputationPointChangeRawDataDB;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerRPWorkloadResponseParams = {
    value: QueryGetManagerRPWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraProcessDataRequestParams = {
    value: QueryGetAllEraProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendNodeWorkloadParams = {
    value: NodeWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEpochResponseParams = {
    value: QueryGetPendingNextEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerWRWorkloadByEpochResponseParams = {
    value: QueryGetAllManagerWRWorkloadByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateWorkreportProcessBatchSizeResponseParams = {
    value: MsgUpdateWorkreportProcessBatchSizeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochDataDepthRequestParams = {
    value: QueryGetHistoryEpochDataDepthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraLengthRequestParams = {
    value: QueryGetEraLengthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraProcessDataResponseParams = {
    value: QueryGetAllEraProcessDataResponse;
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
type sendQueryGetAllHistoryEpochResponseParams = {
    value: QueryGetAllHistoryEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendNodeScoreParams = {
    value: NodeScore;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochRequestParams = {
    value: QueryGetHistoryEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEraRequestParams = {
    value: QueryGetHistoryEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointRequestParams = {
    value: QueryGetReputationPointRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
    fee?: StdFee;
    memo?: string;
};
type queryGetNodeWorkloadResponseParams = {
    value: QueryGetNodeWorkloadResponse;
};
type queryGetManagerWrworkloadResponseParams = {
    value: QueryGetManagerWRWorkloadResponse;
};
type queryGetAllManagerRpworkloadByEraResponseParams = {
    value: QueryGetAllManagerRPWorkloadByEraResponse;
};
type msgUpdateHistoryEpochDataDepthResponseParams = {
    value: MsgUpdateHistoryEpochDataDepthResponse;
};
type queryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
};
type queryGetAllNodeWorkloadByEpochResponseParams = {
    value: QueryGetAllNodeWorkloadByEpochResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryGetAllHistoryEraResponseParams = {
    value: QueryGetAllHistoryEraResponse;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
type reputationPointParams = {
    value: ReputationPoint;
};
type queryGetHistoryEpochDataDepthResponseParams = {
    value: QueryGetHistoryEpochDataDepthResponse;
};
type queryGetAllEpochProcessDataResponseParams = {
    value: QueryGetAllEpochProcessDataResponse;
};
type superiorParams = {
    value: Superior;
};
type msgUpdateHistoryEpochDataDepthParams = {
    value: MsgUpdateHistoryEpochDataDepth;
};
type workreportParams = {
    value: Workreport;
};
type queryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
};
type queryGetPendingNextEraResponseParams = {
    value: QueryGetPendingNextEraResponse;
};
type reputationPointChangeRawDataParams = {
    value: ReputationPointChangeRawData;
};
type queryGetAllReputationPointResponseParams = {
    value: QueryGetAllReputationPointResponse;
};
type epochProcessDataParams = {
    value: EpochProcessData;
};
type queryGetAllWorkreportByEpochResponseParams = {
    value: QueryGetAllWorkreportByEpochResponse;
};
type queryGetEpochProcessDataRequestParams = {
    value: QueryGetEpochProcessDataRequest;
};
type queryGetEraLengthResponseParams = {
    value: QueryGetEraLengthResponse;
};
type queryGetCurrentEraRequestParams = {
    value: QueryGetCurrentEraRequest;
};
type msgSubmitReputationPointChangeDataParams = {
    value: MsgSubmitReputationPointChangeData;
};
type reputationDeltaPointParams = {
    value: ReputationDeltaPoint;
};
type managerWrworkloadParams = {
    value: ManagerWRWorkload;
};
type queryGetAllManagerRpworkloadByEraRequestParams = {
    value: QueryGetAllManagerRPWorkloadByEraRequest;
};
type queryGetWorkreportResponseParams = {
    value: QueryGetWorkreportResponse;
};
type queryGetReputationPointChangeDataRequestParams = {
    value: QueryGetReputationPointChangeDataRequest;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type queryGetManagerRpworkloadRequestParams = {
    value: QueryGetManagerRPWorkloadRequest;
};
type reputationPointChangeRawDataMapDbParams = {
    value: ReputationPointChangeRawDataMapDB;
};
type queryGetNodeWorkloadRequestParams = {
    value: QueryGetNodeWorkloadRequest;
};
type queryGetPendingNextEraRequestParams = {
    value: QueryGetPendingNextEraRequest;
};
type queryGetAllReputationDeltaPointByEraRequestParams = {
    value: QueryGetAllReputationDeltaPointByEraRequest;
};
type nodeScoreDbParams = {
    value: NodeScoreDB;
};
type eraProcessDataParams = {
    value: EraProcessData;
};
type queryGetPendingNextEpochRequestParams = {
    value: QueryGetPendingNextEpochRequest;
};
type queryGetAllHistoryEpochRequestParams = {
    value: QueryGetAllHistoryEpochRequest;
};
type queryGetAllReputationPointChangeDataByEraRequestParams = {
    value: QueryGetAllReputationPointChangeDataByEraRequest;
};
type queryGetAllReputationPointChangeDataByEraResponseParams = {
    value: QueryGetAllReputationPointChangeDataByEraResponse;
};
type queryGetHistoryEpochResponseParams = {
    value: QueryGetHistoryEpochResponse;
};
type eraInfoParams = {
    value: EraInfo;
};
type queryGetAllManagerWrworkloadByEpochRequestParams = {
    value: QueryGetAllManagerWRWorkloadByEpochRequest;
};
type queryGetWorkreportProcessBatchSizeRequestParams = {
    value: QueryGetWorkreportProcessBatchSizeRequest;
};
type queryGetCurrentEraResponseParams = {
    value: QueryGetCurrentEraResponse;
};
type msgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
};
type msgUpdateWorkreportProcessBatchSizeParams = {
    value: MsgUpdateWorkreportProcessBatchSize;
};
type managerNodeScoreMapParams = {
    value: ManagerNodeScoreMap;
};
type queryGetManagerWrworkloadRequestParams = {
    value: QueryGetManagerWRWorkloadRequest;
};
type queryGetAllWorkreportByEpochRequestParams = {
    value: QueryGetAllWorkreportByEpochRequest;
};
type queryGetWorkreportProcessBatchSizeResponseParams = {
    value: QueryGetWorkreportProcessBatchSizeResponse;
};
type queryGetAllReputationDeltaPointByEraResponseParams = {
    value: QueryGetAllReputationDeltaPointByEraResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryGetAllEpochProcessDataRequestParams = {
    value: QueryGetAllEpochProcessDataRequest;
};
type queryGetReputationPointResponseParams = {
    value: QueryGetReputationPointResponse;
};
type queryGetAllNodeWorkloadByEpochRequestParams = {
    value: QueryGetAllNodeWorkloadByEpochRequest;
};
type queryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
};
type queryGetEpochProcessDataResponseParams = {
    value: QueryGetEpochProcessDataResponse;
};
type queryGetEraProcessDataResponseParams = {
    value: QueryGetEraProcessDataResponse;
};
type reputationPointChangeDataParams = {
    value: ReputationPointChangeData;
};
type epochInfoParams = {
    value: EpochInfo;
};
type queryGetHistoryEraResponseParams = {
    value: QueryGetHistoryEraResponse;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type msgSubmitReputationPointChangeDataResponseParams = {
    value: MsgSubmitReputationPointChangeDataResponse;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type managerRpworkloadParams = {
    value: ManagerRPWorkload;
};
type queryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
};
type queryGetAllHistoryEraRequestParams = {
    value: QueryGetAllHistoryEraRequest;
};
type queryGetReputationPointChangeDataResponseParams = {
    value: QueryGetReputationPointChangeDataResponse;
};
type queryGetReputationDeltaPointRequestParams = {
    value: QueryGetReputationDeltaPointRequest;
};
type queryGetReputationDeltaPointResponseParams = {
    value: QueryGetReputationDeltaPointResponse;
};
type queryGetEraProcessDataRequestParams = {
    value: QueryGetEraProcessDataRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryGetAllReputationPointRequestParams = {
    value: QueryGetAllReputationPointRequest;
};
type reputationPointChangeRawDataDbParams = {
    value: ReputationPointChangeRawDataDB;
};
type paramsParams = {
    value: Params;
};
type queryGetManagerRpworkloadResponseParams = {
    value: QueryGetManagerRPWorkloadResponse;
};
type queryGetAllEraProcessDataRequestParams = {
    value: QueryGetAllEraProcessDataRequest;
};
type nodeWorkloadParams = {
    value: NodeWorkload;
};
type queryGetPendingNextEpochResponseParams = {
    value: QueryGetPendingNextEpochResponse;
};
type queryGetAllManagerWrworkloadByEpochResponseParams = {
    value: QueryGetAllManagerWRWorkloadByEpochResponse;
};
type msgUpdateWorkreportProcessBatchSizeResponseParams = {
    value: MsgUpdateWorkreportProcessBatchSizeResponse;
};
type queryGetHistoryEpochDataDepthRequestParams = {
    value: QueryGetHistoryEpochDataDepthRequest;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
};
type queryGetEraLengthRequestParams = {
    value: QueryGetEraLengthRequest;
};
type queryGetAllEraProcessDataResponseParams = {
    value: QueryGetAllEraProcessDataResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type queryGetAllHistoryEpochResponseParams = {
    value: QueryGetAllHistoryEpochResponse;
};
type nodeScoreParams = {
    value: NodeScore;
};
type queryGetHistoryEpochRequestParams = {
    value: QueryGetHistoryEpochRequest;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type queryGetHistoryEraRequestParams = {
    value: QueryGetHistoryEraRequest;
};
type queryGetReputationPointRequestParams = {
    value: QueryGetReputationPointRequest;
};
type msgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryGetNodeWorkloadResponse({ value, fee, memo }: sendQueryGetNodeWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerWRWorkloadResponse({ value, fee, memo }: sendQueryGetManagerWRWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerRPWorkloadByEraResponse({ value, fee, memo }: sendQueryGetAllManagerRPWorkloadByEraResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateHistoryEpochDataDepthResponse({ value, fee, memo }: sendMsgUpdateHistoryEpochDataDepthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthResponse({ value, fee, memo }: sendQueryGetEpochLengthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllNodeWorkloadByEpochResponse({ value, fee, memo }: sendQueryGetAllNodeWorkloadByEpochResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEraResponse({ value, fee, memo }: sendQueryGetAllHistoryEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    sendReputationPoint({ value, fee, memo }: sendReputationPointParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochDataDepthResponse({ value, fee, memo }: sendQueryGetHistoryEpochDataDepthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEpochProcessDataResponse({ value, fee, memo }: sendQueryGetAllEpochProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgUpdateHistoryEpochDataDepth({ value, fee, memo }: sendMsgUpdateHistoryEpochDataDepthParams): Promise<DeliverTxResponse>;
    sendWorkreport({ value, fee, memo }: sendWorkreportParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochRequest({ value, fee, memo }: sendQueryGetCurrentEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEraResponse({ value, fee, memo }: sendQueryGetPendingNextEraResponseParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawData({ value, fee, memo }: sendReputationPointChangeRawDataParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointResponse({ value, fee, memo }: sendQueryGetAllReputationPointResponseParams): Promise<DeliverTxResponse>;
    sendEpochProcessData({ value, fee, memo }: sendEpochProcessDataParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochResponse({ value, fee, memo }: sendQueryGetAllWorkreportByEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochProcessDataRequest({ value, fee, memo }: sendQueryGetEpochProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEraLengthResponse({ value, fee, memo }: sendQueryGetEraLengthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEraRequest({ value, fee, memo }: sendQueryGetCurrentEraRequestParams): Promise<DeliverTxResponse>;
    sendMsgSubmitReputationPointChangeData({ value, fee, memo }: sendMsgSubmitReputationPointChangeDataParams): Promise<DeliverTxResponse>;
    sendReputationDeltaPoint({ value, fee, memo }: sendReputationDeltaPointParams): Promise<DeliverTxResponse>;
    sendManagerWRWorkload({ value, fee, memo }: sendManagerWRWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerRPWorkloadByEraRequest({ value, fee, memo }: sendQueryGetAllManagerRPWorkloadByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportResponse({ value, fee, memo }: sendQueryGetWorkreportResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointChangeDataRequest({ value, fee, memo }: sendQueryGetReputationPointChangeDataRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRPWorkloadRequest({ value, fee, memo }: sendQueryGetManagerRPWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawDataMapDB({ value, fee, memo }: sendReputationPointChangeRawDataMapDBParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeWorkloadRequest({ value, fee, memo }: sendQueryGetNodeWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEraRequest({ value, fee, memo }: sendQueryGetPendingNextEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationDeltaPointByEraRequest({ value, fee, memo }: sendQueryGetAllReputationDeltaPointByEraRequestParams): Promise<DeliverTxResponse>;
    sendNodeScoreDB({ value, fee, memo }: sendNodeScoreDBParams): Promise<DeliverTxResponse>;
    sendEraProcessData({ value, fee, memo }: sendEraProcessDataParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEpochRequest({ value, fee, memo }: sendQueryGetPendingNextEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEpochRequest({ value, fee, memo }: sendQueryGetAllHistoryEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointChangeDataByEraRequest({ value, fee, memo }: sendQueryGetAllReputationPointChangeDataByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointChangeDataByEraResponse({ value, fee, memo }: sendQueryGetAllReputationPointChangeDataByEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochResponse({ value, fee, memo }: sendQueryGetHistoryEpochResponseParams): Promise<DeliverTxResponse>;
    sendEraInfo({ value, fee, memo }: sendEraInfoParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerWRWorkloadByEpochRequest({ value, fee, memo }: sendQueryGetAllManagerWRWorkloadByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportProcessBatchSizeRequest({ value, fee, memo }: sendQueryGetWorkreportProcessBatchSizeRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEraResponse({ value, fee, memo }: sendQueryGetCurrentEraResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreports({ value, fee, memo }: sendMsgSubmitWorkreportsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateWorkreportProcessBatchSize({ value, fee, memo }: sendMsgUpdateWorkreportProcessBatchSizeParams): Promise<DeliverTxResponse>;
    sendManagerNodeScoreMap({ value, fee, memo }: sendManagerNodeScoreMapParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerWRWorkloadRequest({ value, fee, memo }: sendQueryGetManagerWRWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochRequest({ value, fee, memo }: sendQueryGetAllWorkreportByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportProcessBatchSizeResponse({ value, fee, memo }: sendQueryGetWorkreportProcessBatchSizeResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationDeltaPointByEraResponse({ value, fee, memo }: sendQueryGetAllReputationDeltaPointByEraResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEpochProcessDataRequest({ value, fee, memo }: sendQueryGetAllEpochProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointResponse({ value, fee, memo }: sendQueryGetReputationPointResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllNodeWorkloadByEpochRequest({ value, fee, memo }: sendQueryGetAllNodeWorkloadByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochResponse({ value, fee, memo }: sendQueryGetCurrentEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochProcessDataResponse({ value, fee, memo }: sendQueryGetEpochProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEraProcessDataResponse({ value, fee, memo }: sendQueryGetEraProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeData({ value, fee, memo }: sendReputationPointChangeDataParams): Promise<DeliverTxResponse>;
    sendEpochInfo({ value, fee, memo }: sendEpochInfoParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEraResponse({ value, fee, memo }: sendQueryGetHistoryEraResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgSubmitReputationPointChangeDataResponse({ value, fee, memo }: sendMsgSubmitReputationPointChangeDataResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendManagerRPWorkload({ value, fee, memo }: sendManagerRPWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthRequest({ value, fee, memo }: sendQueryGetEpochLengthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEraRequest({ value, fee, memo }: sendQueryGetAllHistoryEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointChangeDataResponse({ value, fee, memo }: sendQueryGetReputationPointChangeDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationDeltaPointRequest({ value, fee, memo }: sendQueryGetReputationDeltaPointRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationDeltaPointResponse({ value, fee, memo }: sendQueryGetReputationDeltaPointResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEraProcessDataRequest({ value, fee, memo }: sendQueryGetEraProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointRequest({ value, fee, memo }: sendQueryGetAllReputationPointRequestParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawDataDB({ value, fee, memo }: sendReputationPointChangeRawDataDBParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRPWorkloadResponse({ value, fee, memo }: sendQueryGetManagerRPWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraProcessDataRequest({ value, fee, memo }: sendQueryGetAllEraProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendNodeWorkload({ value, fee, memo }: sendNodeWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEpochResponse({ value, fee, memo }: sendQueryGetPendingNextEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerWRWorkloadByEpochResponse({ value, fee, memo }: sendQueryGetAllManagerWRWorkloadByEpochResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateWorkreportProcessBatchSizeResponse({ value, fee, memo }: sendMsgUpdateWorkreportProcessBatchSizeResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochDataDepthRequest({ value, fee, memo }: sendQueryGetHistoryEpochDataDepthRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportRequest({ value, fee, memo }: sendQueryGetWorkreportRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEraLengthRequest({ value, fee, memo }: sendQueryGetEraLengthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraProcessDataResponse({ value, fee, memo }: sendQueryGetAllEraProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEpochResponse({ value, fee, memo }: sendQueryGetAllHistoryEpochResponseParams): Promise<DeliverTxResponse>;
    sendNodeScore({ value, fee, memo }: sendNodeScoreParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochRequest({ value, fee, memo }: sendQueryGetHistoryEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEraRequest({ value, fee, memo }: sendQueryGetHistoryEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointRequest({ value, fee, memo }: sendQueryGetReputationPointRequestParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreportsResponse({ value, fee, memo }: sendMsgSubmitWorkreportsResponseParams): Promise<DeliverTxResponse>;
    queryGetNodeWorkloadResponse({ value }: queryGetNodeWorkloadResponseParams): EncodeObject;
    queryGetManagerWrworkloadResponse({ value }: queryGetManagerWrworkloadResponseParams): EncodeObject;
    queryGetAllManagerRpworkloadByEraResponse({ value }: queryGetAllManagerRpworkloadByEraResponseParams): EncodeObject;
    msgUpdateHistoryEpochDataDepthResponse({ value }: msgUpdateHistoryEpochDataDepthResponseParams): EncodeObject;
    queryGetEpochLengthResponse({ value }: queryGetEpochLengthResponseParams): EncodeObject;
    queryGetAllNodeWorkloadByEpochResponse({ value }: queryGetAllNodeWorkloadByEpochResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryGetAllHistoryEraResponse({ value }: queryGetAllHistoryEraResponseParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
    reputationPoint({ value }: reputationPointParams): EncodeObject;
    queryGetHistoryEpochDataDepthResponse({ value }: queryGetHistoryEpochDataDepthResponseParams): EncodeObject;
    queryGetAllEpochProcessDataResponse({ value }: queryGetAllEpochProcessDataResponseParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    msgUpdateHistoryEpochDataDepth({ value }: msgUpdateHistoryEpochDataDepthParams): EncodeObject;
    workreport({ value }: workreportParams): EncodeObject;
    queryGetCurrentEpochRequest({ value }: queryGetCurrentEpochRequestParams): EncodeObject;
    queryGetPendingNextEraResponse({ value }: queryGetPendingNextEraResponseParams): EncodeObject;
    reputationPointChangeRawData({ value }: reputationPointChangeRawDataParams): EncodeObject;
    queryGetAllReputationPointResponse({ value }: queryGetAllReputationPointResponseParams): EncodeObject;
    epochProcessData({ value }: epochProcessDataParams): EncodeObject;
    queryGetAllWorkreportByEpochResponse({ value }: queryGetAllWorkreportByEpochResponseParams): EncodeObject;
    queryGetEpochProcessDataRequest({ value }: queryGetEpochProcessDataRequestParams): EncodeObject;
    queryGetEraLengthResponse({ value }: queryGetEraLengthResponseParams): EncodeObject;
    queryGetCurrentEraRequest({ value }: queryGetCurrentEraRequestParams): EncodeObject;
    msgSubmitReputationPointChangeData({ value }: msgSubmitReputationPointChangeDataParams): EncodeObject;
    reputationDeltaPoint({ value }: reputationDeltaPointParams): EncodeObject;
    managerWrworkload({ value }: managerWrworkloadParams): EncodeObject;
    queryGetAllManagerRpworkloadByEraRequest({ value }: queryGetAllManagerRpworkloadByEraRequestParams): EncodeObject;
    queryGetWorkreportResponse({ value }: queryGetWorkreportResponseParams): EncodeObject;
    queryGetReputationPointChangeDataRequest({ value }: queryGetReputationPointChangeDataRequestParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    queryGetManagerRpworkloadRequest({ value }: queryGetManagerRpworkloadRequestParams): EncodeObject;
    reputationPointChangeRawDataMapDb({ value }: reputationPointChangeRawDataMapDbParams): EncodeObject;
    queryGetNodeWorkloadRequest({ value }: queryGetNodeWorkloadRequestParams): EncodeObject;
    queryGetPendingNextEraRequest({ value }: queryGetPendingNextEraRequestParams): EncodeObject;
    queryGetAllReputationDeltaPointByEraRequest({ value }: queryGetAllReputationDeltaPointByEraRequestParams): EncodeObject;
    nodeScoreDb({ value }: nodeScoreDbParams): EncodeObject;
    eraProcessData({ value }: eraProcessDataParams): EncodeObject;
    queryGetPendingNextEpochRequest({ value }: queryGetPendingNextEpochRequestParams): EncodeObject;
    queryGetAllHistoryEpochRequest({ value }: queryGetAllHistoryEpochRequestParams): EncodeObject;
    queryGetAllReputationPointChangeDataByEraRequest({ value }: queryGetAllReputationPointChangeDataByEraRequestParams): EncodeObject;
    queryGetAllReputationPointChangeDataByEraResponse({ value }: queryGetAllReputationPointChangeDataByEraResponseParams): EncodeObject;
    queryGetHistoryEpochResponse({ value }: queryGetHistoryEpochResponseParams): EncodeObject;
    eraInfo({ value }: eraInfoParams): EncodeObject;
    queryGetAllManagerWrworkloadByEpochRequest({ value }: queryGetAllManagerWrworkloadByEpochRequestParams): EncodeObject;
    queryGetWorkreportProcessBatchSizeRequest({ value }: queryGetWorkreportProcessBatchSizeRequestParams): EncodeObject;
    queryGetCurrentEraResponse({ value }: queryGetCurrentEraResponseParams): EncodeObject;
    msgSubmitWorkreports({ value }: msgSubmitWorkreportsParams): EncodeObject;
    msgUpdateWorkreportProcessBatchSize({ value }: msgUpdateWorkreportProcessBatchSizeParams): EncodeObject;
    managerNodeScoreMap({ value }: managerNodeScoreMapParams): EncodeObject;
    queryGetManagerWrworkloadRequest({ value }: queryGetManagerWrworkloadRequestParams): EncodeObject;
    queryGetAllWorkreportByEpochRequest({ value }: queryGetAllWorkreportByEpochRequestParams): EncodeObject;
    queryGetWorkreportProcessBatchSizeResponse({ value }: queryGetWorkreportProcessBatchSizeResponseParams): EncodeObject;
    queryGetAllReputationDeltaPointByEraResponse({ value }: queryGetAllReputationDeltaPointByEraResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryGetAllEpochProcessDataRequest({ value }: queryGetAllEpochProcessDataRequestParams): EncodeObject;
    queryGetReputationPointResponse({ value }: queryGetReputationPointResponseParams): EncodeObject;
    queryGetAllNodeWorkloadByEpochRequest({ value }: queryGetAllNodeWorkloadByEpochRequestParams): EncodeObject;
    queryGetCurrentEpochResponse({ value }: queryGetCurrentEpochResponseParams): EncodeObject;
    queryGetEpochProcessDataResponse({ value }: queryGetEpochProcessDataResponseParams): EncodeObject;
    queryGetEraProcessDataResponse({ value }: queryGetEraProcessDataResponseParams): EncodeObject;
    reputationPointChangeData({ value }: reputationPointChangeDataParams): EncodeObject;
    epochInfo({ value }: epochInfoParams): EncodeObject;
    queryGetHistoryEraResponse({ value }: queryGetHistoryEraResponseParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    msgSubmitReputationPointChangeDataResponse({ value }: msgSubmitReputationPointChangeDataResponseParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    managerRpworkload({ value }: managerRpworkloadParams): EncodeObject;
    queryGetEpochLengthRequest({ value }: queryGetEpochLengthRequestParams): EncodeObject;
    queryGetAllHistoryEraRequest({ value }: queryGetAllHistoryEraRequestParams): EncodeObject;
    queryGetReputationPointChangeDataResponse({ value }: queryGetReputationPointChangeDataResponseParams): EncodeObject;
    queryGetReputationDeltaPointRequest({ value }: queryGetReputationDeltaPointRequestParams): EncodeObject;
    queryGetReputationDeltaPointResponse({ value }: queryGetReputationDeltaPointResponseParams): EncodeObject;
    queryGetEraProcessDataRequest({ value }: queryGetEraProcessDataRequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryGetAllReputationPointRequest({ value }: queryGetAllReputationPointRequestParams): EncodeObject;
    reputationPointChangeRawDataDb({ value }: reputationPointChangeRawDataDbParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryGetManagerRpworkloadResponse({ value }: queryGetManagerRpworkloadResponseParams): EncodeObject;
    queryGetAllEraProcessDataRequest({ value }: queryGetAllEraProcessDataRequestParams): EncodeObject;
    nodeWorkload({ value }: nodeWorkloadParams): EncodeObject;
    queryGetPendingNextEpochResponse({ value }: queryGetPendingNextEpochResponseParams): EncodeObject;
    queryGetAllManagerWrworkloadByEpochResponse({ value }: queryGetAllManagerWrworkloadByEpochResponseParams): EncodeObject;
    msgUpdateWorkreportProcessBatchSizeResponse({ value }: msgUpdateWorkreportProcessBatchSizeResponseParams): EncodeObject;
    queryGetHistoryEpochDataDepthRequest({ value }: queryGetHistoryEpochDataDepthRequestParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetWorkreportRequest({ value }: queryGetWorkreportRequestParams): EncodeObject;
    queryGetEraLengthRequest({ value }: queryGetEraLengthRequestParams): EncodeObject;
    queryGetAllEraProcessDataResponse({ value }: queryGetAllEraProcessDataResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    queryGetAllHistoryEpochResponse({ value }: queryGetAllHistoryEpochResponseParams): EncodeObject;
    nodeScore({ value }: nodeScoreParams): EncodeObject;
    queryGetHistoryEpochRequest({ value }: queryGetHistoryEpochRequestParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    queryGetHistoryEraRequest({ value }: queryGetHistoryEraRequestParams): EncodeObject;
    queryGetReputationPointRequest({ value }: queryGetReputationPointRequestParams): EncodeObject;
    msgSubmitWorkreportsResponse({ value }: msgSubmitWorkreportsResponseParams): EncodeObject;
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
