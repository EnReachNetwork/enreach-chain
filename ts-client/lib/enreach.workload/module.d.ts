import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryGetAllManagerWRWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetSuperiorResponse } from "./types/enreach/workload/query";
import { QueryGetReputationPointRequest } from "./types/enreach/workload/query";
import { ManagerWRWorkload } from "./types/enreach/workload/workload";
import { ReputationPointChangeRawDataMapDB } from "./types/enreach/workload/reputationpoint";
import { MsgSubmitWorkreportsResponse } from "./types/enreach/workload/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/workload/tx";
import { MsgSubmitReputationPointChangeDataResponse } from "./types/enreach/workload/tx";
import { NodeScore } from "./types/enreach/workload/workreport";
import { NodeScoreDB } from "./types/enreach/workload/workreport";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryGetCurrentEpochResponse } from "./types/enreach/workload/query";
import { ManagerNodeScoreMap } from "./types/enreach/workload/workreport";
import { Workreport } from "./types/enreach/workload/workreport";
import { QueryGetCurrentEpochRequest } from "./types/enreach/workload/query";
import { QueryGetManagerWRWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/query";
import { MsgUpdateWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/tx";
import { EraProcessData } from "./types/enreach/workload/reputationpoint";
import { NodeWorkload } from "./types/enreach/workload/workload";
import { MsgSubmitReputationPointChangeData } from "./types/enreach/workload/tx";
import { EpochProcessData } from "./types/enreach/workload/workreport";
import { QueryGetPendingNextEpochResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetManagerRPWorkloadResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeData } from "./types/enreach/workload/reputationpoint";
import { QueryGetWorkreportResponse } from "./types/enreach/workload/query";
import { QueryGetWorkreportProcessBatchSizeRequest } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataResponse } from "./types/enreach/workload/query";
import { Superior } from "./types/enreach/workload/superior";
import { QueryGetAllManagerRPWorkloadByEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllManagerRPWorkloadByEraResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochResponse } from "./types/enreach/workload/query";
import { ManagerRPWorkload } from "./types/enreach/workload/workload";
import { QueryGetCurrentEraResponse } from "./types/enreach/workload/query";
import { QueryGetReputationDeltaPointResponse } from "./types/enreach/workload/query";
import { MsgUpdateWorkreportProcessBatchSize } from "./types/enreach/workload/tx";
import { MsgUpdateHistoryEpochDataDepth } from "./types/enreach/workload/tx";
import { QueryGetEpochLengthRequest } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetSuperiorRequest } from "./types/enreach/workload/query";
import { QueryGetNodeWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetNodeWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetAllNodeWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetManagerWRWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointResponse } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeRawData } from "./types/enreach/workload/reputationpoint";
import { EpochInfo } from "./types/enreach/workload/epoch_info";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetEpochLengthResponse } from "./types/enreach/workload/query";
import { QueryGetAllHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetEraLengthRequest } from "./types/enreach/workload/query";
import { QueryGetEraLengthResponse } from "./types/enreach/workload/query";
import { QueryGetCurrentEraRequest } from "./types/enreach/workload/query";
import { ReputationPoint } from "./types/enreach/workload/reputationpoint";
import { QueryGetAllReputationPointChangeDataByEraResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointRequest } from "./types/enreach/workload/query";
import { QueryGetAllEraProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraResponse } from "./types/enreach/workload/query";
import { MsgSubmitWorkreports } from "./types/enreach/workload/tx";
import { MsgCreateSuperior } from "./types/enreach/workload/tx";
import { QueryGetAllWorkreportByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochDataDepthResponse } from "./types/enreach/workload/query";
import { QueryGetReputationDeltaPointRequest } from "./types/enreach/workload/query";
import { ReputationDeltaPoint } from "./types/enreach/workload/reputationpoint";
import { MsgUpdateHistoryEpochDataDepthResponse } from "./types/enreach/workload/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/workload/tx";
import { QueryGetAllHistoryEpochResponse } from "./types/enreach/workload/query";
import { QueryGetManagerRPWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochDataDepthRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointChangeDataByEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointResponse } from "./types/enreach/workload/query";
import { MsgUpdateSuperior } from "./types/enreach/workload/tx";
import { QueryGetAllEraProcessDataResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeRawDataDB } from "./types/enreach/workload/reputationpoint";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { QueryGetAllNodeWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetWorkreportRequest } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataRequest } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
import { QueryGetEraProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetAllManagerWRWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataRequest } from "./types/enreach/workload/query";
import { QueryGetPendingNextEpochRequest } from "./types/enreach/workload/query";
export { QueryGetAllManagerWRWorkloadByEpochRequest, QueryGetSuperiorResponse, QueryGetReputationPointRequest, ManagerWRWorkload, ReputationPointChangeRawDataMapDB, MsgSubmitWorkreportsResponse, MsgCreateSuperiorResponse, MsgSubmitReputationPointChangeDataResponse, NodeScore, NodeScoreDB, QueryParamsResponse, GenesisState, QueryGetCurrentEpochResponse, ManagerNodeScoreMap, Workreport, QueryGetCurrentEpochRequest, QueryGetManagerWRWorkloadRequest, QueryGetWorkreportProcessBatchSizeResponse, MsgUpdateWorkreportProcessBatchSizeResponse, EraProcessData, NodeWorkload, MsgSubmitReputationPointChangeData, EpochProcessData, QueryGetPendingNextEpochResponse, QueryGetHistoryEpochRequest, QueryGetManagerRPWorkloadResponse, ReputationPointChangeData, QueryGetWorkreportResponse, QueryGetWorkreportProcessBatchSizeRequest, QueryGetAllEpochProcessDataResponse, Superior, QueryGetAllManagerRPWorkloadByEraRequest, QueryGetAllManagerRPWorkloadByEraResponse, QueryGetHistoryEpochResponse, ManagerRPWorkload, QueryGetCurrentEraResponse, QueryGetReputationDeltaPointResponse, MsgUpdateWorkreportProcessBatchSize, MsgUpdateHistoryEpochDataDepth, QueryGetEpochLengthRequest, QueryGetEpochProcessDataResponse, QueryGetSuperiorRequest, QueryGetNodeWorkloadResponse, QueryGetNodeWorkloadRequest, QueryGetAllNodeWorkloadByEpochRequest, QueryGetManagerWRWorkloadResponse, QueryGetAllReputationDeltaPointByEraRequest, QueryGetReputationPointResponse, QueryGetEraProcessDataResponse, ReputationPointChangeRawData, EpochInfo, QueryParamsRequest, QueryGetEpochLengthResponse, QueryGetAllHistoryEpochRequest, QueryGetEraLengthRequest, QueryGetEraLengthResponse, QueryGetCurrentEraRequest, ReputationPoint, QueryGetAllReputationPointChangeDataByEraResponse, QueryGetAllReputationPointRequest, QueryGetAllEraProcessDataRequest, QueryGetReputationPointChangeDataResponse, QueryGetAllReputationDeltaPointByEraResponse, MsgSubmitWorkreports, MsgCreateSuperior, QueryGetAllWorkreportByEpochResponse, QueryGetHistoryEpochDataDepthResponse, QueryGetReputationDeltaPointRequest, ReputationDeltaPoint, MsgUpdateHistoryEpochDataDepthResponse, MsgUpdateSuperiorResponse, QueryGetAllHistoryEpochResponse, QueryGetManagerRPWorkloadRequest, QueryGetHistoryEpochDataDepthRequest, QueryGetAllReputationPointChangeDataByEraRequest, QueryGetAllReputationPointResponse, MsgUpdateSuperior, QueryGetAllEraProcessDataResponse, ReputationPointChangeRawDataDB, MsgUpdateParams, MsgUpdateParamsResponse, QueryGetAllNodeWorkloadByEpochResponse, QueryGetWorkreportRequest, QueryGetAllWorkreportByEpochRequest, QueryGetEpochProcessDataRequest, Params, QueryGetEraProcessDataRequest, QueryGetAllManagerWRWorkloadByEpochResponse, QueryGetAllEpochProcessDataRequest, QueryGetReputationPointChangeDataRequest, QueryGetPendingNextEpochRequest };
type sendQueryGetAllManagerWRWorkloadByEpochRequestParams = {
    value: QueryGetAllManagerWRWorkloadByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointRequestParams = {
    value: QueryGetReputationPointRequest;
    fee?: StdFee;
    memo?: string;
};
type sendManagerWRWorkloadParams = {
    value: ManagerWRWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataMapDBParams = {
    value: ReputationPointChangeRawDataMapDB;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitReputationPointChangeDataResponseParams = {
    value: MsgSubmitReputationPointChangeDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendNodeScoreParams = {
    value: NodeScore;
    fee?: StdFee;
    memo?: string;
};
type sendNodeScoreDBParams = {
    value: NodeScoreDB;
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
type sendQueryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
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
type sendQueryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerWRWorkloadRequestParams = {
    value: QueryGetManagerWRWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportProcessBatchSizeResponseParams = {
    value: QueryGetWorkreportProcessBatchSizeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateWorkreportProcessBatchSizeResponseParams = {
    value: MsgUpdateWorkreportProcessBatchSizeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEraProcessDataParams = {
    value: EraProcessData;
    fee?: StdFee;
    memo?: string;
};
type sendNodeWorkloadParams = {
    value: NodeWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitReputationPointChangeDataParams = {
    value: MsgSubmitReputationPointChangeData;
    fee?: StdFee;
    memo?: string;
};
type sendEpochProcessDataParams = {
    value: EpochProcessData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEpochResponseParams = {
    value: QueryGetPendingNextEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochRequestParams = {
    value: QueryGetHistoryEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerRPWorkloadResponseParams = {
    value: QueryGetManagerRPWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeDataParams = {
    value: ReputationPointChangeData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportResponseParams = {
    value: QueryGetWorkreportResponse;
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
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerRPWorkloadByEraRequestParams = {
    value: QueryGetAllManagerRPWorkloadByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerRPWorkloadByEraResponseParams = {
    value: QueryGetAllManagerRPWorkloadByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochResponseParams = {
    value: QueryGetHistoryEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendManagerRPWorkloadParams = {
    value: ManagerRPWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEraResponseParams = {
    value: QueryGetCurrentEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationDeltaPointResponseParams = {
    value: QueryGetReputationDeltaPointResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateWorkreportProcessBatchSizeParams = {
    value: MsgUpdateWorkreportProcessBatchSize;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateHistoryEpochDataDepthParams = {
    value: MsgUpdateHistoryEpochDataDepth;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochProcessDataResponseParams = {
    value: QueryGetEpochProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeWorkloadResponseParams = {
    value: QueryGetNodeWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeWorkloadRequestParams = {
    value: QueryGetNodeWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllNodeWorkloadByEpochRequestParams = {
    value: QueryGetAllNodeWorkloadByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerWRWorkloadResponseParams = {
    value: QueryGetManagerWRWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationDeltaPointByEraRequestParams = {
    value: QueryGetAllReputationDeltaPointByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointResponseParams = {
    value: QueryGetReputationPointResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraProcessDataResponseParams = {
    value: QueryGetEraProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataParams = {
    value: ReputationPointChangeRawData;
    fee?: StdFee;
    memo?: string;
};
type sendEpochInfoParams = {
    value: EpochInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEpochRequestParams = {
    value: QueryGetAllHistoryEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraLengthRequestParams = {
    value: QueryGetEraLengthRequest;
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
type sendReputationPointParams = {
    value: ReputationPoint;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationPointChangeDataByEraResponseParams = {
    value: QueryGetAllReputationPointChangeDataByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationPointRequestParams = {
    value: QueryGetAllReputationPointRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraProcessDataRequestParams = {
    value: QueryGetAllEraProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointChangeDataResponseParams = {
    value: QueryGetReputationPointChangeDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationDeltaPointByEraResponseParams = {
    value: QueryGetAllReputationDeltaPointByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllWorkreportByEpochResponseParams = {
    value: QueryGetAllWorkreportByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochDataDepthResponseParams = {
    value: QueryGetHistoryEpochDataDepthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationDeltaPointRequestParams = {
    value: QueryGetReputationDeltaPointRequest;
    fee?: StdFee;
    memo?: string;
};
type sendReputationDeltaPointParams = {
    value: ReputationDeltaPoint;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateHistoryEpochDataDepthResponseParams = {
    value: MsgUpdateHistoryEpochDataDepthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEpochResponseParams = {
    value: QueryGetAllHistoryEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerRPWorkloadRequestParams = {
    value: QueryGetManagerRPWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochDataDepthRequestParams = {
    value: QueryGetHistoryEpochDataDepthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationPointChangeDataByEraRequestParams = {
    value: QueryGetAllReputationPointChangeDataByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationPointResponseParams = {
    value: QueryGetAllReputationPointResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraProcessDataResponseParams = {
    value: QueryGetAllEraProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataDBParams = {
    value: ReputationPointChangeRawDataDB;
    fee?: StdFee;
    memo?: string;
};
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
type sendQueryGetAllNodeWorkloadByEpochResponseParams = {
    value: QueryGetAllNodeWorkloadByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
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
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraProcessDataRequestParams = {
    value: QueryGetEraProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerWRWorkloadByEpochResponseParams = {
    value: QueryGetAllManagerWRWorkloadByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEpochProcessDataRequestParams = {
    value: QueryGetAllEpochProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointChangeDataRequestParams = {
    value: QueryGetReputationPointChangeDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEpochRequestParams = {
    value: QueryGetPendingNextEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type queryGetAllManagerWrworkloadByEpochRequestParams = {
    value: QueryGetAllManagerWRWorkloadByEpochRequest;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type queryGetReputationPointRequestParams = {
    value: QueryGetReputationPointRequest;
};
type managerWrworkloadParams = {
    value: ManagerWRWorkload;
};
type reputationPointChangeRawDataMapDbParams = {
    value: ReputationPointChangeRawDataMapDB;
};
type msgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type msgSubmitReputationPointChangeDataResponseParams = {
    value: MsgSubmitReputationPointChangeDataResponse;
};
type nodeScoreParams = {
    value: NodeScore;
};
type nodeScoreDbParams = {
    value: NodeScoreDB;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
};
type managerNodeScoreMapParams = {
    value: ManagerNodeScoreMap;
};
type workreportParams = {
    value: Workreport;
};
type queryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
};
type queryGetManagerWrworkloadRequestParams = {
    value: QueryGetManagerWRWorkloadRequest;
};
type queryGetWorkreportProcessBatchSizeResponseParams = {
    value: QueryGetWorkreportProcessBatchSizeResponse;
};
type msgUpdateWorkreportProcessBatchSizeResponseParams = {
    value: MsgUpdateWorkreportProcessBatchSizeResponse;
};
type eraProcessDataParams = {
    value: EraProcessData;
};
type nodeWorkloadParams = {
    value: NodeWorkload;
};
type msgSubmitReputationPointChangeDataParams = {
    value: MsgSubmitReputationPointChangeData;
};
type epochProcessDataParams = {
    value: EpochProcessData;
};
type queryGetPendingNextEpochResponseParams = {
    value: QueryGetPendingNextEpochResponse;
};
type queryGetHistoryEpochRequestParams = {
    value: QueryGetHistoryEpochRequest;
};
type queryGetManagerRpworkloadResponseParams = {
    value: QueryGetManagerRPWorkloadResponse;
};
type reputationPointChangeDataParams = {
    value: ReputationPointChangeData;
};
type queryGetWorkreportResponseParams = {
    value: QueryGetWorkreportResponse;
};
type queryGetWorkreportProcessBatchSizeRequestParams = {
    value: QueryGetWorkreportProcessBatchSizeRequest;
};
type queryGetAllEpochProcessDataResponseParams = {
    value: QueryGetAllEpochProcessDataResponse;
};
type superiorParams = {
    value: Superior;
};
type queryGetAllManagerRpworkloadByEraRequestParams = {
    value: QueryGetAllManagerRPWorkloadByEraRequest;
};
type queryGetAllManagerRpworkloadByEraResponseParams = {
    value: QueryGetAllManagerRPWorkloadByEraResponse;
};
type queryGetHistoryEpochResponseParams = {
    value: QueryGetHistoryEpochResponse;
};
type managerRpworkloadParams = {
    value: ManagerRPWorkload;
};
type queryGetCurrentEraResponseParams = {
    value: QueryGetCurrentEraResponse;
};
type queryGetReputationDeltaPointResponseParams = {
    value: QueryGetReputationDeltaPointResponse;
};
type msgUpdateWorkreportProcessBatchSizeParams = {
    value: MsgUpdateWorkreportProcessBatchSize;
};
type msgUpdateHistoryEpochDataDepthParams = {
    value: MsgUpdateHistoryEpochDataDepth;
};
type queryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
};
type queryGetEpochProcessDataResponseParams = {
    value: QueryGetEpochProcessDataResponse;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
type queryGetNodeWorkloadResponseParams = {
    value: QueryGetNodeWorkloadResponse;
};
type queryGetNodeWorkloadRequestParams = {
    value: QueryGetNodeWorkloadRequest;
};
type queryGetAllNodeWorkloadByEpochRequestParams = {
    value: QueryGetAllNodeWorkloadByEpochRequest;
};
type queryGetManagerWrworkloadResponseParams = {
    value: QueryGetManagerWRWorkloadResponse;
};
type queryGetAllReputationDeltaPointByEraRequestParams = {
    value: QueryGetAllReputationDeltaPointByEraRequest;
};
type queryGetReputationPointResponseParams = {
    value: QueryGetReputationPointResponse;
};
type queryGetEraProcessDataResponseParams = {
    value: QueryGetEraProcessDataResponse;
};
type reputationPointChangeRawDataParams = {
    value: ReputationPointChangeRawData;
};
type epochInfoParams = {
    value: EpochInfo;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
};
type queryGetAllHistoryEpochRequestParams = {
    value: QueryGetAllHistoryEpochRequest;
};
type queryGetEraLengthRequestParams = {
    value: QueryGetEraLengthRequest;
};
type queryGetEraLengthResponseParams = {
    value: QueryGetEraLengthResponse;
};
type queryGetCurrentEraRequestParams = {
    value: QueryGetCurrentEraRequest;
};
type reputationPointParams = {
    value: ReputationPoint;
};
type queryGetAllReputationPointChangeDataByEraResponseParams = {
    value: QueryGetAllReputationPointChangeDataByEraResponse;
};
type queryGetAllReputationPointRequestParams = {
    value: QueryGetAllReputationPointRequest;
};
type queryGetAllEraProcessDataRequestParams = {
    value: QueryGetAllEraProcessDataRequest;
};
type queryGetReputationPointChangeDataResponseParams = {
    value: QueryGetReputationPointChangeDataResponse;
};
type queryGetAllReputationDeltaPointByEraResponseParams = {
    value: QueryGetAllReputationDeltaPointByEraResponse;
};
type msgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type queryGetAllWorkreportByEpochResponseParams = {
    value: QueryGetAllWorkreportByEpochResponse;
};
type queryGetHistoryEpochDataDepthResponseParams = {
    value: QueryGetHistoryEpochDataDepthResponse;
};
type queryGetReputationDeltaPointRequestParams = {
    value: QueryGetReputationDeltaPointRequest;
};
type reputationDeltaPointParams = {
    value: ReputationDeltaPoint;
};
type msgUpdateHistoryEpochDataDepthResponseParams = {
    value: MsgUpdateHistoryEpochDataDepthResponse;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type queryGetAllHistoryEpochResponseParams = {
    value: QueryGetAllHistoryEpochResponse;
};
type queryGetManagerRpworkloadRequestParams = {
    value: QueryGetManagerRPWorkloadRequest;
};
type queryGetHistoryEpochDataDepthRequestParams = {
    value: QueryGetHistoryEpochDataDepthRequest;
};
type queryGetAllReputationPointChangeDataByEraRequestParams = {
    value: QueryGetAllReputationPointChangeDataByEraRequest;
};
type queryGetAllReputationPointResponseParams = {
    value: QueryGetAllReputationPointResponse;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type queryGetAllEraProcessDataResponseParams = {
    value: QueryGetAllEraProcessDataResponse;
};
type reputationPointChangeRawDataDbParams = {
    value: ReputationPointChangeRawDataDB;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryGetAllNodeWorkloadByEpochResponseParams = {
    value: QueryGetAllNodeWorkloadByEpochResponse;
};
type queryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
};
type queryGetAllWorkreportByEpochRequestParams = {
    value: QueryGetAllWorkreportByEpochRequest;
};
type queryGetEpochProcessDataRequestParams = {
    value: QueryGetEpochProcessDataRequest;
};
type paramsParams = {
    value: Params;
};
type queryGetEraProcessDataRequestParams = {
    value: QueryGetEraProcessDataRequest;
};
type queryGetAllManagerWrworkloadByEpochResponseParams = {
    value: QueryGetAllManagerWRWorkloadByEpochResponse;
};
type queryGetAllEpochProcessDataRequestParams = {
    value: QueryGetAllEpochProcessDataRequest;
};
type queryGetReputationPointChangeDataRequestParams = {
    value: QueryGetReputationPointChangeDataRequest;
};
type queryGetPendingNextEpochRequestParams = {
    value: QueryGetPendingNextEpochRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryGetAllManagerWRWorkloadByEpochRequest({ value, fee, memo }: sendQueryGetAllManagerWRWorkloadByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointRequest({ value, fee, memo }: sendQueryGetReputationPointRequestParams): Promise<DeliverTxResponse>;
    sendManagerWRWorkload({ value, fee, memo }: sendManagerWRWorkloadParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawDataMapDB({ value, fee, memo }: sendReputationPointChangeRawDataMapDBParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreportsResponse({ value, fee, memo }: sendMsgSubmitWorkreportsResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitReputationPointChangeDataResponse({ value, fee, memo }: sendMsgSubmitReputationPointChangeDataResponseParams): Promise<DeliverTxResponse>;
    sendNodeScore({ value, fee, memo }: sendNodeScoreParams): Promise<DeliverTxResponse>;
    sendNodeScoreDB({ value, fee, memo }: sendNodeScoreDBParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochResponse({ value, fee, memo }: sendQueryGetCurrentEpochResponseParams): Promise<DeliverTxResponse>;
    sendManagerNodeScoreMap({ value, fee, memo }: sendManagerNodeScoreMapParams): Promise<DeliverTxResponse>;
    sendWorkreport({ value, fee, memo }: sendWorkreportParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochRequest({ value, fee, memo }: sendQueryGetCurrentEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerWRWorkloadRequest({ value, fee, memo }: sendQueryGetManagerWRWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportProcessBatchSizeResponse({ value, fee, memo }: sendQueryGetWorkreportProcessBatchSizeResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateWorkreportProcessBatchSizeResponse({ value, fee, memo }: sendMsgUpdateWorkreportProcessBatchSizeResponseParams): Promise<DeliverTxResponse>;
    sendEraProcessData({ value, fee, memo }: sendEraProcessDataParams): Promise<DeliverTxResponse>;
    sendNodeWorkload({ value, fee, memo }: sendNodeWorkloadParams): Promise<DeliverTxResponse>;
    sendMsgSubmitReputationPointChangeData({ value, fee, memo }: sendMsgSubmitReputationPointChangeDataParams): Promise<DeliverTxResponse>;
    sendEpochProcessData({ value, fee, memo }: sendEpochProcessDataParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEpochResponse({ value, fee, memo }: sendQueryGetPendingNextEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochRequest({ value, fee, memo }: sendQueryGetHistoryEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRPWorkloadResponse({ value, fee, memo }: sendQueryGetManagerRPWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeData({ value, fee, memo }: sendReputationPointChangeDataParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportResponse({ value, fee, memo }: sendQueryGetWorkreportResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportProcessBatchSizeRequest({ value, fee, memo }: sendQueryGetWorkreportProcessBatchSizeRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEpochProcessDataResponse({ value, fee, memo }: sendQueryGetAllEpochProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerRPWorkloadByEraRequest({ value, fee, memo }: sendQueryGetAllManagerRPWorkloadByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerRPWorkloadByEraResponse({ value, fee, memo }: sendQueryGetAllManagerRPWorkloadByEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochResponse({ value, fee, memo }: sendQueryGetHistoryEpochResponseParams): Promise<DeliverTxResponse>;
    sendManagerRPWorkload({ value, fee, memo }: sendManagerRPWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEraResponse({ value, fee, memo }: sendQueryGetCurrentEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationDeltaPointResponse({ value, fee, memo }: sendQueryGetReputationDeltaPointResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateWorkreportProcessBatchSize({ value, fee, memo }: sendMsgUpdateWorkreportProcessBatchSizeParams): Promise<DeliverTxResponse>;
    sendMsgUpdateHistoryEpochDataDepth({ value, fee, memo }: sendMsgUpdateHistoryEpochDataDepthParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthRequest({ value, fee, memo }: sendQueryGetEpochLengthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochProcessDataResponse({ value, fee, memo }: sendQueryGetEpochProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeWorkloadResponse({ value, fee, memo }: sendQueryGetNodeWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeWorkloadRequest({ value, fee, memo }: sendQueryGetNodeWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllNodeWorkloadByEpochRequest({ value, fee, memo }: sendQueryGetAllNodeWorkloadByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerWRWorkloadResponse({ value, fee, memo }: sendQueryGetManagerWRWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationDeltaPointByEraRequest({ value, fee, memo }: sendQueryGetAllReputationDeltaPointByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointResponse({ value, fee, memo }: sendQueryGetReputationPointResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEraProcessDataResponse({ value, fee, memo }: sendQueryGetEraProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawData({ value, fee, memo }: sendReputationPointChangeRawDataParams): Promise<DeliverTxResponse>;
    sendEpochInfo({ value, fee, memo }: sendEpochInfoParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthResponse({ value, fee, memo }: sendQueryGetEpochLengthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEpochRequest({ value, fee, memo }: sendQueryGetAllHistoryEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEraLengthRequest({ value, fee, memo }: sendQueryGetEraLengthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEraLengthResponse({ value, fee, memo }: sendQueryGetEraLengthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEraRequest({ value, fee, memo }: sendQueryGetCurrentEraRequestParams): Promise<DeliverTxResponse>;
    sendReputationPoint({ value, fee, memo }: sendReputationPointParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointChangeDataByEraResponse({ value, fee, memo }: sendQueryGetAllReputationPointChangeDataByEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointRequest({ value, fee, memo }: sendQueryGetAllReputationPointRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraProcessDataRequest({ value, fee, memo }: sendQueryGetAllEraProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointChangeDataResponse({ value, fee, memo }: sendQueryGetReputationPointChangeDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationDeltaPointByEraResponse({ value, fee, memo }: sendQueryGetAllReputationDeltaPointByEraResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreports({ value, fee, memo }: sendMsgSubmitWorkreportsParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochResponse({ value, fee, memo }: sendQueryGetAllWorkreportByEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochDataDepthResponse({ value, fee, memo }: sendQueryGetHistoryEpochDataDepthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationDeltaPointRequest({ value, fee, memo }: sendQueryGetReputationDeltaPointRequestParams): Promise<DeliverTxResponse>;
    sendReputationDeltaPoint({ value, fee, memo }: sendReputationDeltaPointParams): Promise<DeliverTxResponse>;
    sendMsgUpdateHistoryEpochDataDepthResponse({ value, fee, memo }: sendMsgUpdateHistoryEpochDataDepthResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEpochResponse({ value, fee, memo }: sendQueryGetAllHistoryEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRPWorkloadRequest({ value, fee, memo }: sendQueryGetManagerRPWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochDataDepthRequest({ value, fee, memo }: sendQueryGetHistoryEpochDataDepthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointChangeDataByEraRequest({ value, fee, memo }: sendQueryGetAllReputationPointChangeDataByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointResponse({ value, fee, memo }: sendQueryGetAllReputationPointResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraProcessDataResponse({ value, fee, memo }: sendQueryGetAllEraProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawDataDB({ value, fee, memo }: sendReputationPointChangeRawDataDBParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllNodeWorkloadByEpochResponse({ value, fee, memo }: sendQueryGetAllNodeWorkloadByEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportRequest({ value, fee, memo }: sendQueryGetWorkreportRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochRequest({ value, fee, memo }: sendQueryGetAllWorkreportByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochProcessDataRequest({ value, fee, memo }: sendQueryGetEpochProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryGetEraProcessDataRequest({ value, fee, memo }: sendQueryGetEraProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerWRWorkloadByEpochResponse({ value, fee, memo }: sendQueryGetAllManagerWRWorkloadByEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEpochProcessDataRequest({ value, fee, memo }: sendQueryGetAllEpochProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointChangeDataRequest({ value, fee, memo }: sendQueryGetReputationPointChangeDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEpochRequest({ value, fee, memo }: sendQueryGetPendingNextEpochRequestParams): Promise<DeliverTxResponse>;
    queryGetAllManagerWrworkloadByEpochRequest({ value }: queryGetAllManagerWrworkloadByEpochRequestParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    queryGetReputationPointRequest({ value }: queryGetReputationPointRequestParams): EncodeObject;
    managerWrworkload({ value }: managerWrworkloadParams): EncodeObject;
    reputationPointChangeRawDataMapDb({ value }: reputationPointChangeRawDataMapDbParams): EncodeObject;
    msgSubmitWorkreportsResponse({ value }: msgSubmitWorkreportsResponseParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    msgSubmitReputationPointChangeDataResponse({ value }: msgSubmitReputationPointChangeDataResponseParams): EncodeObject;
    nodeScore({ value }: nodeScoreParams): EncodeObject;
    nodeScoreDb({ value }: nodeScoreDbParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryGetCurrentEpochResponse({ value }: queryGetCurrentEpochResponseParams): EncodeObject;
    managerNodeScoreMap({ value }: managerNodeScoreMapParams): EncodeObject;
    workreport({ value }: workreportParams): EncodeObject;
    queryGetCurrentEpochRequest({ value }: queryGetCurrentEpochRequestParams): EncodeObject;
    queryGetManagerWrworkloadRequest({ value }: queryGetManagerWrworkloadRequestParams): EncodeObject;
    queryGetWorkreportProcessBatchSizeResponse({ value }: queryGetWorkreportProcessBatchSizeResponseParams): EncodeObject;
    msgUpdateWorkreportProcessBatchSizeResponse({ value }: msgUpdateWorkreportProcessBatchSizeResponseParams): EncodeObject;
    eraProcessData({ value }: eraProcessDataParams): EncodeObject;
    nodeWorkload({ value }: nodeWorkloadParams): EncodeObject;
    msgSubmitReputationPointChangeData({ value }: msgSubmitReputationPointChangeDataParams): EncodeObject;
    epochProcessData({ value }: epochProcessDataParams): EncodeObject;
    queryGetPendingNextEpochResponse({ value }: queryGetPendingNextEpochResponseParams): EncodeObject;
    queryGetHistoryEpochRequest({ value }: queryGetHistoryEpochRequestParams): EncodeObject;
    queryGetManagerRpworkloadResponse({ value }: queryGetManagerRpworkloadResponseParams): EncodeObject;
    reputationPointChangeData({ value }: reputationPointChangeDataParams): EncodeObject;
    queryGetWorkreportResponse({ value }: queryGetWorkreportResponseParams): EncodeObject;
    queryGetWorkreportProcessBatchSizeRequest({ value }: queryGetWorkreportProcessBatchSizeRequestParams): EncodeObject;
    queryGetAllEpochProcessDataResponse({ value }: queryGetAllEpochProcessDataResponseParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    queryGetAllManagerRpworkloadByEraRequest({ value }: queryGetAllManagerRpworkloadByEraRequestParams): EncodeObject;
    queryGetAllManagerRpworkloadByEraResponse({ value }: queryGetAllManagerRpworkloadByEraResponseParams): EncodeObject;
    queryGetHistoryEpochResponse({ value }: queryGetHistoryEpochResponseParams): EncodeObject;
    managerRpworkload({ value }: managerRpworkloadParams): EncodeObject;
    queryGetCurrentEraResponse({ value }: queryGetCurrentEraResponseParams): EncodeObject;
    queryGetReputationDeltaPointResponse({ value }: queryGetReputationDeltaPointResponseParams): EncodeObject;
    msgUpdateWorkreportProcessBatchSize({ value }: msgUpdateWorkreportProcessBatchSizeParams): EncodeObject;
    msgUpdateHistoryEpochDataDepth({ value }: msgUpdateHistoryEpochDataDepthParams): EncodeObject;
    queryGetEpochLengthRequest({ value }: queryGetEpochLengthRequestParams): EncodeObject;
    queryGetEpochProcessDataResponse({ value }: queryGetEpochProcessDataResponseParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
    queryGetNodeWorkloadResponse({ value }: queryGetNodeWorkloadResponseParams): EncodeObject;
    queryGetNodeWorkloadRequest({ value }: queryGetNodeWorkloadRequestParams): EncodeObject;
    queryGetAllNodeWorkloadByEpochRequest({ value }: queryGetAllNodeWorkloadByEpochRequestParams): EncodeObject;
    queryGetManagerWrworkloadResponse({ value }: queryGetManagerWrworkloadResponseParams): EncodeObject;
    queryGetAllReputationDeltaPointByEraRequest({ value }: queryGetAllReputationDeltaPointByEraRequestParams): EncodeObject;
    queryGetReputationPointResponse({ value }: queryGetReputationPointResponseParams): EncodeObject;
    queryGetEraProcessDataResponse({ value }: queryGetEraProcessDataResponseParams): EncodeObject;
    reputationPointChangeRawData({ value }: reputationPointChangeRawDataParams): EncodeObject;
    epochInfo({ value }: epochInfoParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetEpochLengthResponse({ value }: queryGetEpochLengthResponseParams): EncodeObject;
    queryGetAllHistoryEpochRequest({ value }: queryGetAllHistoryEpochRequestParams): EncodeObject;
    queryGetEraLengthRequest({ value }: queryGetEraLengthRequestParams): EncodeObject;
    queryGetEraLengthResponse({ value }: queryGetEraLengthResponseParams): EncodeObject;
    queryGetCurrentEraRequest({ value }: queryGetCurrentEraRequestParams): EncodeObject;
    reputationPoint({ value }: reputationPointParams): EncodeObject;
    queryGetAllReputationPointChangeDataByEraResponse({ value }: queryGetAllReputationPointChangeDataByEraResponseParams): EncodeObject;
    queryGetAllReputationPointRequest({ value }: queryGetAllReputationPointRequestParams): EncodeObject;
    queryGetAllEraProcessDataRequest({ value }: queryGetAllEraProcessDataRequestParams): EncodeObject;
    queryGetReputationPointChangeDataResponse({ value }: queryGetReputationPointChangeDataResponseParams): EncodeObject;
    queryGetAllReputationDeltaPointByEraResponse({ value }: queryGetAllReputationDeltaPointByEraResponseParams): EncodeObject;
    msgSubmitWorkreports({ value }: msgSubmitWorkreportsParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    queryGetAllWorkreportByEpochResponse({ value }: queryGetAllWorkreportByEpochResponseParams): EncodeObject;
    queryGetHistoryEpochDataDepthResponse({ value }: queryGetHistoryEpochDataDepthResponseParams): EncodeObject;
    queryGetReputationDeltaPointRequest({ value }: queryGetReputationDeltaPointRequestParams): EncodeObject;
    reputationDeltaPoint({ value }: reputationDeltaPointParams): EncodeObject;
    msgUpdateHistoryEpochDataDepthResponse({ value }: msgUpdateHistoryEpochDataDepthResponseParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    queryGetAllHistoryEpochResponse({ value }: queryGetAllHistoryEpochResponseParams): EncodeObject;
    queryGetManagerRpworkloadRequest({ value }: queryGetManagerRpworkloadRequestParams): EncodeObject;
    queryGetHistoryEpochDataDepthRequest({ value }: queryGetHistoryEpochDataDepthRequestParams): EncodeObject;
    queryGetAllReputationPointChangeDataByEraRequest({ value }: queryGetAllReputationPointChangeDataByEraRequestParams): EncodeObject;
    queryGetAllReputationPointResponse({ value }: queryGetAllReputationPointResponseParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    queryGetAllEraProcessDataResponse({ value }: queryGetAllEraProcessDataResponseParams): EncodeObject;
    reputationPointChangeRawDataDb({ value }: reputationPointChangeRawDataDbParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryGetAllNodeWorkloadByEpochResponse({ value }: queryGetAllNodeWorkloadByEpochResponseParams): EncodeObject;
    queryGetWorkreportRequest({ value }: queryGetWorkreportRequestParams): EncodeObject;
    queryGetAllWorkreportByEpochRequest({ value }: queryGetAllWorkreportByEpochRequestParams): EncodeObject;
    queryGetEpochProcessDataRequest({ value }: queryGetEpochProcessDataRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryGetEraProcessDataRequest({ value }: queryGetEraProcessDataRequestParams): EncodeObject;
    queryGetAllManagerWrworkloadByEpochResponse({ value }: queryGetAllManagerWrworkloadByEpochResponseParams): EncodeObject;
    queryGetAllEpochProcessDataRequest({ value }: queryGetAllEpochProcessDataRequestParams): EncodeObject;
    queryGetReputationPointChangeDataRequest({ value }: queryGetReputationPointChangeDataRequestParams): EncodeObject;
    queryGetPendingNextEpochRequest({ value }: queryGetPendingNextEpochRequestParams): EncodeObject;
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
