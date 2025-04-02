import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryGetManagerRPWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetReputationDeltaPointRequest } from "./types/enreach/workload/query";
import { Superior } from "./types/enreach/workload/superior";
import { MsgUpdateHistoryEpochDataDepthResponse } from "./types/enreach/workload/tx";
import { QueryGetEpochLengthRequest } from "./types/enreach/workload/query";
import { QueryGetSuperiorRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointChangeDataByEraResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointRequest } from "./types/enreach/workload/query";
import { MsgUpdateWorkreportProcessBatchSize } from "./types/enreach/workload/tx";
import { MsgUpdateWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/workload/tx";
import { QueryGetAllManagerRPWorkloadByEraResponse } from "./types/enreach/workload/query";
import { QueryGetEraLengthRequest } from "./types/enreach/workload/query";
import { QueryGetEraLengthResponse } from "./types/enreach/workload/query";
import { QueryGetCurrentEraResponse } from "./types/enreach/workload/query";
import { QueryGetReputationPointResponse } from "./types/enreach/workload/query";
import { MsgCreateSuperiorResponse } from "./types/enreach/workload/tx";
import { QueryGetManagerWRWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataResponse } from "./types/enreach/workload/query";
import { QueryGetReputationDeltaPointResponse } from "./types/enreach/workload/query";
import { NodeWorkload } from "./types/enreach/workload/workload";
import { QueryGetAllNodeWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerWRWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportProcessBatchSizeRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointResponse } from "./types/enreach/workload/query";
import { QueryGetCurrentEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraResponse } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetAllEraProcessDataRequest } from "./types/enreach/workload/query";
import { NodeScoreDB } from "./types/enreach/workload/workreport";
import { QueryGetWorkreportRequest } from "./types/enreach/workload/query";
import { QueryGetAllManagerRPWorkloadByEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochResponse } from "./types/enreach/workload/query";
import { Workreport } from "./types/enreach/workload/workreport";
import { EpochProcessData } from "./types/enreach/workload/workreport";
import { MsgCreateSuperior } from "./types/enreach/workload/tx";
import { MsgUpdateSuperior } from "./types/enreach/workload/tx";
import { ManagerRPWorkload } from "./types/enreach/workload/workload";
import { QueryGetManagerWRWorkloadRequest } from "./types/enreach/workload/query";
import { EraProcessData } from "./types/enreach/workload/reputationpoint";
import { MsgSubmitWorkreports } from "./types/enreach/workload/tx";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { QueryGetWorkreportResponse } from "./types/enreach/workload/query";
import { QueryGetWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochDataDepthRequest } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochDataDepthResponse } from "./types/enreach/workload/query";
import { QueryGetCurrentEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraRequest } from "./types/enreach/workload/query";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryGetNodeWorkloadRequest } from "./types/enreach/workload/query";
import { ManagerWRWorkload } from "./types/enreach/workload/workload";
import { ReputationPointChangeRawData } from "./types/enreach/workload/reputationpoint";
import { NodeScore } from "./types/enreach/workload/workreport";
import { QueryGetAllManagerWRWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetEpochLengthResponse } from "./types/enreach/workload/query";
import { QueryGetSuperiorResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointChangeDataByEraRequest } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataResponse } from "./types/enreach/workload/query";
import { ManagerNodeScoreMap } from "./types/enreach/workload/workreport";
import { ReputationDeltaPoint } from "./types/enreach/workload/reputationpoint";
import { ReputationPoint } from "./types/enreach/workload/reputationpoint";
import { MsgSubmitWorkreportsResponse } from "./types/enreach/workload/tx";
import { QueryGetNodeWorkloadResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeRawDataMapDB } from "./types/enreach/workload/reputationpoint";
import { MsgUpdateHistoryEpochDataDepth } from "./types/enreach/workload/tx";
import { QueryGetCurrentEpochRequest } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetAllEraProcessDataResponse } from "./types/enreach/workload/query";
import { MsgSubmitReputationPointChangeData } from "./types/enreach/workload/tx";
import { MsgSubmitReputationPointChangeDataResponse } from "./types/enreach/workload/tx";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataRequest } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
import { ReputationPointChangeData } from "./types/enreach/workload/reputationpoint";
import { QueryGetAllNodeWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { ReputationPointChangeRawDataDB } from "./types/enreach/workload/reputationpoint";
import { QueryGetManagerRPWorkloadResponse } from "./types/enreach/workload/query";
export { QueryGetManagerRPWorkloadRequest, QueryGetReputationDeltaPointRequest, Superior, MsgUpdateHistoryEpochDataDepthResponse, QueryGetEpochLengthRequest, QueryGetSuperiorRequest, QueryGetAllReputationPointChangeDataByEraResponse, QueryGetAllReputationPointRequest, MsgUpdateWorkreportProcessBatchSize, MsgUpdateWorkreportProcessBatchSizeResponse, MsgUpdateSuperiorResponse, QueryGetAllManagerRPWorkloadByEraResponse, QueryGetEraLengthRequest, QueryGetEraLengthResponse, QueryGetCurrentEraResponse, QueryGetReputationPointResponse, MsgCreateSuperiorResponse, QueryGetManagerWRWorkloadResponse, QueryGetEpochProcessDataRequest, QueryGetReputationPointChangeDataResponse, QueryGetReputationDeltaPointResponse, NodeWorkload, QueryGetAllNodeWorkloadByEpochResponse, QueryGetAllManagerWRWorkloadByEpochRequest, QueryGetWorkreportProcessBatchSizeRequest, QueryGetReputationPointRequest, QueryGetAllReputationPointResponse, QueryGetCurrentEpochResponse, QueryGetAllWorkreportByEpochRequest, QueryGetAllReputationDeltaPointByEraResponse, QueryGetEraProcessDataResponse, QueryGetAllEraProcessDataRequest, NodeScoreDB, QueryGetWorkreportRequest, QueryGetAllManagerRPWorkloadByEraRequest, QueryGetAllWorkreportByEpochResponse, Workreport, EpochProcessData, MsgCreateSuperior, MsgUpdateSuperior, ManagerRPWorkload, QueryGetManagerWRWorkloadRequest, EraProcessData, MsgSubmitWorkreports, MsgUpdateParams, QueryGetWorkreportResponse, QueryGetWorkreportProcessBatchSizeResponse, QueryGetHistoryEpochDataDepthRequest, QueryGetHistoryEpochDataDepthResponse, QueryGetCurrentEraRequest, QueryGetAllReputationDeltaPointByEraRequest, GenesisState, QueryGetNodeWorkloadRequest, ManagerWRWorkload, ReputationPointChangeRawData, NodeScore, QueryGetAllManagerWRWorkloadByEpochResponse, QueryGetEpochLengthResponse, QueryGetSuperiorResponse, QueryGetAllReputationPointChangeDataByEraRequest, MsgUpdateParamsResponse, QueryParamsRequest, QueryGetEpochProcessDataResponse, QueryGetAllEpochProcessDataRequest, QueryGetAllEpochProcessDataResponse, ManagerNodeScoreMap, ReputationDeltaPoint, ReputationPoint, MsgSubmitWorkreportsResponse, QueryGetNodeWorkloadResponse, ReputationPointChangeRawDataMapDB, MsgUpdateHistoryEpochDataDepth, QueryGetCurrentEpochRequest, QueryGetEraProcessDataRequest, QueryGetAllEraProcessDataResponse, MsgSubmitReputationPointChangeData, MsgSubmitReputationPointChangeDataResponse, QueryParamsResponse, QueryGetReputationPointChangeDataRequest, Params, ReputationPointChangeData, QueryGetAllNodeWorkloadByEpochRequest, ReputationPointChangeRawDataDB, QueryGetManagerRPWorkloadResponse };
type sendQueryGetManagerRPWorkloadRequestParams = {
    value: QueryGetManagerRPWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationDeltaPointRequestParams = {
    value: QueryGetReputationDeltaPointRequest;
    fee?: StdFee;
    memo?: string;
};
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
type sendQueryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
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
type sendMsgUpdateWorkreportProcessBatchSizeParams = {
    value: MsgUpdateWorkreportProcessBatchSize;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateWorkreportProcessBatchSizeResponseParams = {
    value: MsgUpdateWorkreportProcessBatchSizeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerRPWorkloadByEraResponseParams = {
    value: QueryGetAllManagerRPWorkloadByEraResponse;
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
type sendQueryGetCurrentEraResponseParams = {
    value: QueryGetCurrentEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointResponseParams = {
    value: QueryGetReputationPointResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerWRWorkloadResponseParams = {
    value: QueryGetManagerWRWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochProcessDataRequestParams = {
    value: QueryGetEpochProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointChangeDataResponseParams = {
    value: QueryGetReputationPointChangeDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationDeltaPointResponseParams = {
    value: QueryGetReputationDeltaPointResponse;
    fee?: StdFee;
    memo?: string;
};
type sendNodeWorkloadParams = {
    value: NodeWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllNodeWorkloadByEpochResponseParams = {
    value: QueryGetAllNodeWorkloadByEpochResponse;
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
type sendQueryGetReputationPointRequestParams = {
    value: QueryGetReputationPointRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationPointResponseParams = {
    value: QueryGetAllReputationPointResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllWorkreportByEpochRequestParams = {
    value: QueryGetAllWorkreportByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationDeltaPointByEraResponseParams = {
    value: QueryGetAllReputationDeltaPointByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraProcessDataResponseParams = {
    value: QueryGetEraProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraProcessDataRequestParams = {
    value: QueryGetAllEraProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendNodeScoreDBParams = {
    value: NodeScoreDB;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerRPWorkloadByEraRequestParams = {
    value: QueryGetAllManagerRPWorkloadByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllWorkreportByEpochResponseParams = {
    value: QueryGetAllWorkreportByEpochResponse;
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
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendManagerRPWorkloadParams = {
    value: ManagerRPWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerWRWorkloadRequestParams = {
    value: QueryGetManagerWRWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendEraProcessDataParams = {
    value: EraProcessData;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportResponseParams = {
    value: QueryGetWorkreportResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportProcessBatchSizeResponseParams = {
    value: QueryGetWorkreportProcessBatchSizeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochDataDepthRequestParams = {
    value: QueryGetHistoryEpochDataDepthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochDataDepthResponseParams = {
    value: QueryGetHistoryEpochDataDepthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEraRequestParams = {
    value: QueryGetCurrentEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationDeltaPointByEraRequestParams = {
    value: QueryGetAllReputationDeltaPointByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeWorkloadRequestParams = {
    value: QueryGetNodeWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendManagerWRWorkloadParams = {
    value: ManagerWRWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataParams = {
    value: ReputationPointChangeRawData;
    fee?: StdFee;
    memo?: string;
};
type sendNodeScoreParams = {
    value: NodeScore;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerWRWorkloadByEpochResponseParams = {
    value: QueryGetAllManagerWRWorkloadByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationPointChangeDataByEraRequestParams = {
    value: QueryGetAllReputationPointChangeDataByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
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
type sendQueryGetAllEpochProcessDataRequestParams = {
    value: QueryGetAllEpochProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEpochProcessDataResponseParams = {
    value: QueryGetAllEpochProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendManagerNodeScoreMapParams = {
    value: ManagerNodeScoreMap;
    fee?: StdFee;
    memo?: string;
};
type sendReputationDeltaPointParams = {
    value: ReputationDeltaPoint;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointParams = {
    value: ReputationPoint;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeWorkloadResponseParams = {
    value: QueryGetNodeWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataMapDBParams = {
    value: ReputationPointChangeRawDataMapDB;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateHistoryEpochDataDepthParams = {
    value: MsgUpdateHistoryEpochDataDepth;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraProcessDataRequestParams = {
    value: QueryGetEraProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraProcessDataResponseParams = {
    value: QueryGetAllEraProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitReputationPointChangeDataParams = {
    value: MsgSubmitReputationPointChangeData;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitReputationPointChangeDataResponseParams = {
    value: MsgSubmitReputationPointChangeDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointChangeDataRequestParams = {
    value: QueryGetReputationPointChangeDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeDataParams = {
    value: ReputationPointChangeData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllNodeWorkloadByEpochRequestParams = {
    value: QueryGetAllNodeWorkloadByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataDBParams = {
    value: ReputationPointChangeRawDataDB;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerRPWorkloadResponseParams = {
    value: QueryGetManagerRPWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type queryGetManagerRpworkloadRequestParams = {
    value: QueryGetManagerRPWorkloadRequest;
};
type queryGetReputationDeltaPointRequestParams = {
    value: QueryGetReputationDeltaPointRequest;
};
type superiorParams = {
    value: Superior;
};
type msgUpdateHistoryEpochDataDepthResponseParams = {
    value: MsgUpdateHistoryEpochDataDepthResponse;
};
type queryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
type queryGetAllReputationPointChangeDataByEraResponseParams = {
    value: QueryGetAllReputationPointChangeDataByEraResponse;
};
type queryGetAllReputationPointRequestParams = {
    value: QueryGetAllReputationPointRequest;
};
type msgUpdateWorkreportProcessBatchSizeParams = {
    value: MsgUpdateWorkreportProcessBatchSize;
};
type msgUpdateWorkreportProcessBatchSizeResponseParams = {
    value: MsgUpdateWorkreportProcessBatchSizeResponse;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type queryGetAllManagerRpworkloadByEraResponseParams = {
    value: QueryGetAllManagerRPWorkloadByEraResponse;
};
type queryGetEraLengthRequestParams = {
    value: QueryGetEraLengthRequest;
};
type queryGetEraLengthResponseParams = {
    value: QueryGetEraLengthResponse;
};
type queryGetCurrentEraResponseParams = {
    value: QueryGetCurrentEraResponse;
};
type queryGetReputationPointResponseParams = {
    value: QueryGetReputationPointResponse;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type queryGetManagerWrworkloadResponseParams = {
    value: QueryGetManagerWRWorkloadResponse;
};
type queryGetEpochProcessDataRequestParams = {
    value: QueryGetEpochProcessDataRequest;
};
type queryGetReputationPointChangeDataResponseParams = {
    value: QueryGetReputationPointChangeDataResponse;
};
type queryGetReputationDeltaPointResponseParams = {
    value: QueryGetReputationDeltaPointResponse;
};
type nodeWorkloadParams = {
    value: NodeWorkload;
};
type queryGetAllNodeWorkloadByEpochResponseParams = {
    value: QueryGetAllNodeWorkloadByEpochResponse;
};
type queryGetAllManagerWrworkloadByEpochRequestParams = {
    value: QueryGetAllManagerWRWorkloadByEpochRequest;
};
type queryGetWorkreportProcessBatchSizeRequestParams = {
    value: QueryGetWorkreportProcessBatchSizeRequest;
};
type queryGetReputationPointRequestParams = {
    value: QueryGetReputationPointRequest;
};
type queryGetAllReputationPointResponseParams = {
    value: QueryGetAllReputationPointResponse;
};
type queryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
};
type queryGetAllWorkreportByEpochRequestParams = {
    value: QueryGetAllWorkreportByEpochRequest;
};
type queryGetAllReputationDeltaPointByEraResponseParams = {
    value: QueryGetAllReputationDeltaPointByEraResponse;
};
type queryGetEraProcessDataResponseParams = {
    value: QueryGetEraProcessDataResponse;
};
type queryGetAllEraProcessDataRequestParams = {
    value: QueryGetAllEraProcessDataRequest;
};
type nodeScoreDbParams = {
    value: NodeScoreDB;
};
type queryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
};
type queryGetAllManagerRpworkloadByEraRequestParams = {
    value: QueryGetAllManagerRPWorkloadByEraRequest;
};
type queryGetAllWorkreportByEpochResponseParams = {
    value: QueryGetAllWorkreportByEpochResponse;
};
type workreportParams = {
    value: Workreport;
};
type epochProcessDataParams = {
    value: EpochProcessData;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type managerRpworkloadParams = {
    value: ManagerRPWorkload;
};
type queryGetManagerWrworkloadRequestParams = {
    value: QueryGetManagerWRWorkloadRequest;
};
type eraProcessDataParams = {
    value: EraProcessData;
};
type msgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryGetWorkreportResponseParams = {
    value: QueryGetWorkreportResponse;
};
type queryGetWorkreportProcessBatchSizeResponseParams = {
    value: QueryGetWorkreportProcessBatchSizeResponse;
};
type queryGetHistoryEpochDataDepthRequestParams = {
    value: QueryGetHistoryEpochDataDepthRequest;
};
type queryGetHistoryEpochDataDepthResponseParams = {
    value: QueryGetHistoryEpochDataDepthResponse;
};
type queryGetCurrentEraRequestParams = {
    value: QueryGetCurrentEraRequest;
};
type queryGetAllReputationDeltaPointByEraRequestParams = {
    value: QueryGetAllReputationDeltaPointByEraRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryGetNodeWorkloadRequestParams = {
    value: QueryGetNodeWorkloadRequest;
};
type managerWrworkloadParams = {
    value: ManagerWRWorkload;
};
type reputationPointChangeRawDataParams = {
    value: ReputationPointChangeRawData;
};
type nodeScoreParams = {
    value: NodeScore;
};
type queryGetAllManagerWrworkloadByEpochResponseParams = {
    value: QueryGetAllManagerWRWorkloadByEpochResponse;
};
type queryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type queryGetAllReputationPointChangeDataByEraRequestParams = {
    value: QueryGetAllReputationPointChangeDataByEraRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetEpochProcessDataResponseParams = {
    value: QueryGetEpochProcessDataResponse;
};
type queryGetAllEpochProcessDataRequestParams = {
    value: QueryGetAllEpochProcessDataRequest;
};
type queryGetAllEpochProcessDataResponseParams = {
    value: QueryGetAllEpochProcessDataResponse;
};
type managerNodeScoreMapParams = {
    value: ManagerNodeScoreMap;
};
type reputationDeltaPointParams = {
    value: ReputationDeltaPoint;
};
type reputationPointParams = {
    value: ReputationPoint;
};
type msgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
};
type queryGetNodeWorkloadResponseParams = {
    value: QueryGetNodeWorkloadResponse;
};
type reputationPointChangeRawDataMapDbParams = {
    value: ReputationPointChangeRawDataMapDB;
};
type msgUpdateHistoryEpochDataDepthParams = {
    value: MsgUpdateHistoryEpochDataDepth;
};
type queryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
};
type queryGetEraProcessDataRequestParams = {
    value: QueryGetEraProcessDataRequest;
};
type queryGetAllEraProcessDataResponseParams = {
    value: QueryGetAllEraProcessDataResponse;
};
type msgSubmitReputationPointChangeDataParams = {
    value: MsgSubmitReputationPointChangeData;
};
type msgSubmitReputationPointChangeDataResponseParams = {
    value: MsgSubmitReputationPointChangeDataResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetReputationPointChangeDataRequestParams = {
    value: QueryGetReputationPointChangeDataRequest;
};
type paramsParams = {
    value: Params;
};
type reputationPointChangeDataParams = {
    value: ReputationPointChangeData;
};
type queryGetAllNodeWorkloadByEpochRequestParams = {
    value: QueryGetAllNodeWorkloadByEpochRequest;
};
type reputationPointChangeRawDataDbParams = {
    value: ReputationPointChangeRawDataDB;
};
type queryGetManagerRpworkloadResponseParams = {
    value: QueryGetManagerRPWorkloadResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryGetManagerRPWorkloadRequest({ value, fee, memo }: sendQueryGetManagerRPWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationDeltaPointRequest({ value, fee, memo }: sendQueryGetReputationDeltaPointRequestParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgUpdateHistoryEpochDataDepthResponse({ value, fee, memo }: sendMsgUpdateHistoryEpochDataDepthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthRequest({ value, fee, memo }: sendQueryGetEpochLengthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointChangeDataByEraResponse({ value, fee, memo }: sendQueryGetAllReputationPointChangeDataByEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointRequest({ value, fee, memo }: sendQueryGetAllReputationPointRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateWorkreportProcessBatchSize({ value, fee, memo }: sendMsgUpdateWorkreportProcessBatchSizeParams): Promise<DeliverTxResponse>;
    sendMsgUpdateWorkreportProcessBatchSizeResponse({ value, fee, memo }: sendMsgUpdateWorkreportProcessBatchSizeResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerRPWorkloadByEraResponse({ value, fee, memo }: sendQueryGetAllManagerRPWorkloadByEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEraLengthRequest({ value, fee, memo }: sendQueryGetEraLengthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEraLengthResponse({ value, fee, memo }: sendQueryGetEraLengthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEraResponse({ value, fee, memo }: sendQueryGetCurrentEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointResponse({ value, fee, memo }: sendQueryGetReputationPointResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerWRWorkloadResponse({ value, fee, memo }: sendQueryGetManagerWRWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochProcessDataRequest({ value, fee, memo }: sendQueryGetEpochProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointChangeDataResponse({ value, fee, memo }: sendQueryGetReputationPointChangeDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationDeltaPointResponse({ value, fee, memo }: sendQueryGetReputationDeltaPointResponseParams): Promise<DeliverTxResponse>;
    sendNodeWorkload({ value, fee, memo }: sendNodeWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetAllNodeWorkloadByEpochResponse({ value, fee, memo }: sendQueryGetAllNodeWorkloadByEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerWRWorkloadByEpochRequest({ value, fee, memo }: sendQueryGetAllManagerWRWorkloadByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportProcessBatchSizeRequest({ value, fee, memo }: sendQueryGetWorkreportProcessBatchSizeRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointRequest({ value, fee, memo }: sendQueryGetReputationPointRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointResponse({ value, fee, memo }: sendQueryGetAllReputationPointResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochResponse({ value, fee, memo }: sendQueryGetCurrentEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochRequest({ value, fee, memo }: sendQueryGetAllWorkreportByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationDeltaPointByEraResponse({ value, fee, memo }: sendQueryGetAllReputationDeltaPointByEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEraProcessDataResponse({ value, fee, memo }: sendQueryGetEraProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraProcessDataRequest({ value, fee, memo }: sendQueryGetAllEraProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendNodeScoreDB({ value, fee, memo }: sendNodeScoreDBParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportRequest({ value, fee, memo }: sendQueryGetWorkreportRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerRPWorkloadByEraRequest({ value, fee, memo }: sendQueryGetAllManagerRPWorkloadByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochResponse({ value, fee, memo }: sendQueryGetAllWorkreportByEpochResponseParams): Promise<DeliverTxResponse>;
    sendWorkreport({ value, fee, memo }: sendWorkreportParams): Promise<DeliverTxResponse>;
    sendEpochProcessData({ value, fee, memo }: sendEpochProcessDataParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendManagerRPWorkload({ value, fee, memo }: sendManagerRPWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerWRWorkloadRequest({ value, fee, memo }: sendQueryGetManagerWRWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendEraProcessData({ value, fee, memo }: sendEraProcessDataParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreports({ value, fee, memo }: sendMsgSubmitWorkreportsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportResponse({ value, fee, memo }: sendQueryGetWorkreportResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportProcessBatchSizeResponse({ value, fee, memo }: sendQueryGetWorkreportProcessBatchSizeResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochDataDepthRequest({ value, fee, memo }: sendQueryGetHistoryEpochDataDepthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochDataDepthResponse({ value, fee, memo }: sendQueryGetHistoryEpochDataDepthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEraRequest({ value, fee, memo }: sendQueryGetCurrentEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationDeltaPointByEraRequest({ value, fee, memo }: sendQueryGetAllReputationDeltaPointByEraRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeWorkloadRequest({ value, fee, memo }: sendQueryGetNodeWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendManagerWRWorkload({ value, fee, memo }: sendManagerWRWorkloadParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawData({ value, fee, memo }: sendReputationPointChangeRawDataParams): Promise<DeliverTxResponse>;
    sendNodeScore({ value, fee, memo }: sendNodeScoreParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerWRWorkloadByEpochResponse({ value, fee, memo }: sendQueryGetAllManagerWRWorkloadByEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthResponse({ value, fee, memo }: sendQueryGetEpochLengthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointChangeDataByEraRequest({ value, fee, memo }: sendQueryGetAllReputationPointChangeDataByEraRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochProcessDataResponse({ value, fee, memo }: sendQueryGetEpochProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEpochProcessDataRequest({ value, fee, memo }: sendQueryGetAllEpochProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEpochProcessDataResponse({ value, fee, memo }: sendQueryGetAllEpochProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendManagerNodeScoreMap({ value, fee, memo }: sendManagerNodeScoreMapParams): Promise<DeliverTxResponse>;
    sendReputationDeltaPoint({ value, fee, memo }: sendReputationDeltaPointParams): Promise<DeliverTxResponse>;
    sendReputationPoint({ value, fee, memo }: sendReputationPointParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreportsResponse({ value, fee, memo }: sendMsgSubmitWorkreportsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeWorkloadResponse({ value, fee, memo }: sendQueryGetNodeWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawDataMapDB({ value, fee, memo }: sendReputationPointChangeRawDataMapDBParams): Promise<DeliverTxResponse>;
    sendMsgUpdateHistoryEpochDataDepth({ value, fee, memo }: sendMsgUpdateHistoryEpochDataDepthParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochRequest({ value, fee, memo }: sendQueryGetCurrentEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEraProcessDataRequest({ value, fee, memo }: sendQueryGetEraProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraProcessDataResponse({ value, fee, memo }: sendQueryGetAllEraProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitReputationPointChangeData({ value, fee, memo }: sendMsgSubmitReputationPointChangeDataParams): Promise<DeliverTxResponse>;
    sendMsgSubmitReputationPointChangeDataResponse({ value, fee, memo }: sendMsgSubmitReputationPointChangeDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointChangeDataRequest({ value, fee, memo }: sendQueryGetReputationPointChangeDataRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeData({ value, fee, memo }: sendReputationPointChangeDataParams): Promise<DeliverTxResponse>;
    sendQueryGetAllNodeWorkloadByEpochRequest({ value, fee, memo }: sendQueryGetAllNodeWorkloadByEpochRequestParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawDataDB({ value, fee, memo }: sendReputationPointChangeRawDataDBParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRPWorkloadResponse({ value, fee, memo }: sendQueryGetManagerRPWorkloadResponseParams): Promise<DeliverTxResponse>;
    queryGetManagerRpworkloadRequest({ value }: queryGetManagerRpworkloadRequestParams): EncodeObject;
    queryGetReputationDeltaPointRequest({ value }: queryGetReputationDeltaPointRequestParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    msgUpdateHistoryEpochDataDepthResponse({ value }: msgUpdateHistoryEpochDataDepthResponseParams): EncodeObject;
    queryGetEpochLengthRequest({ value }: queryGetEpochLengthRequestParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
    queryGetAllReputationPointChangeDataByEraResponse({ value }: queryGetAllReputationPointChangeDataByEraResponseParams): EncodeObject;
    queryGetAllReputationPointRequest({ value }: queryGetAllReputationPointRequestParams): EncodeObject;
    msgUpdateWorkreportProcessBatchSize({ value }: msgUpdateWorkreportProcessBatchSizeParams): EncodeObject;
    msgUpdateWorkreportProcessBatchSizeResponse({ value }: msgUpdateWorkreportProcessBatchSizeResponseParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    queryGetAllManagerRpworkloadByEraResponse({ value }: queryGetAllManagerRpworkloadByEraResponseParams): EncodeObject;
    queryGetEraLengthRequest({ value }: queryGetEraLengthRequestParams): EncodeObject;
    queryGetEraLengthResponse({ value }: queryGetEraLengthResponseParams): EncodeObject;
    queryGetCurrentEraResponse({ value }: queryGetCurrentEraResponseParams): EncodeObject;
    queryGetReputationPointResponse({ value }: queryGetReputationPointResponseParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    queryGetManagerWrworkloadResponse({ value }: queryGetManagerWrworkloadResponseParams): EncodeObject;
    queryGetEpochProcessDataRequest({ value }: queryGetEpochProcessDataRequestParams): EncodeObject;
    queryGetReputationPointChangeDataResponse({ value }: queryGetReputationPointChangeDataResponseParams): EncodeObject;
    queryGetReputationDeltaPointResponse({ value }: queryGetReputationDeltaPointResponseParams): EncodeObject;
    nodeWorkload({ value }: nodeWorkloadParams): EncodeObject;
    queryGetAllNodeWorkloadByEpochResponse({ value }: queryGetAllNodeWorkloadByEpochResponseParams): EncodeObject;
    queryGetAllManagerWrworkloadByEpochRequest({ value }: queryGetAllManagerWrworkloadByEpochRequestParams): EncodeObject;
    queryGetWorkreportProcessBatchSizeRequest({ value }: queryGetWorkreportProcessBatchSizeRequestParams): EncodeObject;
    queryGetReputationPointRequest({ value }: queryGetReputationPointRequestParams): EncodeObject;
    queryGetAllReputationPointResponse({ value }: queryGetAllReputationPointResponseParams): EncodeObject;
    queryGetCurrentEpochResponse({ value }: queryGetCurrentEpochResponseParams): EncodeObject;
    queryGetAllWorkreportByEpochRequest({ value }: queryGetAllWorkreportByEpochRequestParams): EncodeObject;
    queryGetAllReputationDeltaPointByEraResponse({ value }: queryGetAllReputationDeltaPointByEraResponseParams): EncodeObject;
    queryGetEraProcessDataResponse({ value }: queryGetEraProcessDataResponseParams): EncodeObject;
    queryGetAllEraProcessDataRequest({ value }: queryGetAllEraProcessDataRequestParams): EncodeObject;
    nodeScoreDb({ value }: nodeScoreDbParams): EncodeObject;
    queryGetWorkreportRequest({ value }: queryGetWorkreportRequestParams): EncodeObject;
    queryGetAllManagerRpworkloadByEraRequest({ value }: queryGetAllManagerRpworkloadByEraRequestParams): EncodeObject;
    queryGetAllWorkreportByEpochResponse({ value }: queryGetAllWorkreportByEpochResponseParams): EncodeObject;
    workreport({ value }: workreportParams): EncodeObject;
    epochProcessData({ value }: epochProcessDataParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    managerRpworkload({ value }: managerRpworkloadParams): EncodeObject;
    queryGetManagerWrworkloadRequest({ value }: queryGetManagerWrworkloadRequestParams): EncodeObject;
    eraProcessData({ value }: eraProcessDataParams): EncodeObject;
    msgSubmitWorkreports({ value }: msgSubmitWorkreportsParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryGetWorkreportResponse({ value }: queryGetWorkreportResponseParams): EncodeObject;
    queryGetWorkreportProcessBatchSizeResponse({ value }: queryGetWorkreportProcessBatchSizeResponseParams): EncodeObject;
    queryGetHistoryEpochDataDepthRequest({ value }: queryGetHistoryEpochDataDepthRequestParams): EncodeObject;
    queryGetHistoryEpochDataDepthResponse({ value }: queryGetHistoryEpochDataDepthResponseParams): EncodeObject;
    queryGetCurrentEraRequest({ value }: queryGetCurrentEraRequestParams): EncodeObject;
    queryGetAllReputationDeltaPointByEraRequest({ value }: queryGetAllReputationDeltaPointByEraRequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryGetNodeWorkloadRequest({ value }: queryGetNodeWorkloadRequestParams): EncodeObject;
    managerWrworkload({ value }: managerWrworkloadParams): EncodeObject;
    reputationPointChangeRawData({ value }: reputationPointChangeRawDataParams): EncodeObject;
    nodeScore({ value }: nodeScoreParams): EncodeObject;
    queryGetAllManagerWrworkloadByEpochResponse({ value }: queryGetAllManagerWrworkloadByEpochResponseParams): EncodeObject;
    queryGetEpochLengthResponse({ value }: queryGetEpochLengthResponseParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    queryGetAllReputationPointChangeDataByEraRequest({ value }: queryGetAllReputationPointChangeDataByEraRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetEpochProcessDataResponse({ value }: queryGetEpochProcessDataResponseParams): EncodeObject;
    queryGetAllEpochProcessDataRequest({ value }: queryGetAllEpochProcessDataRequestParams): EncodeObject;
    queryGetAllEpochProcessDataResponse({ value }: queryGetAllEpochProcessDataResponseParams): EncodeObject;
    managerNodeScoreMap({ value }: managerNodeScoreMapParams): EncodeObject;
    reputationDeltaPoint({ value }: reputationDeltaPointParams): EncodeObject;
    reputationPoint({ value }: reputationPointParams): EncodeObject;
    msgSubmitWorkreportsResponse({ value }: msgSubmitWorkreportsResponseParams): EncodeObject;
    queryGetNodeWorkloadResponse({ value }: queryGetNodeWorkloadResponseParams): EncodeObject;
    reputationPointChangeRawDataMapDb({ value }: reputationPointChangeRawDataMapDbParams): EncodeObject;
    msgUpdateHistoryEpochDataDepth({ value }: msgUpdateHistoryEpochDataDepthParams): EncodeObject;
    queryGetCurrentEpochRequest({ value }: queryGetCurrentEpochRequestParams): EncodeObject;
    queryGetEraProcessDataRequest({ value }: queryGetEraProcessDataRequestParams): EncodeObject;
    queryGetAllEraProcessDataResponse({ value }: queryGetAllEraProcessDataResponseParams): EncodeObject;
    msgSubmitReputationPointChangeData({ value }: msgSubmitReputationPointChangeDataParams): EncodeObject;
    msgSubmitReputationPointChangeDataResponse({ value }: msgSubmitReputationPointChangeDataResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetReputationPointChangeDataRequest({ value }: queryGetReputationPointChangeDataRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    reputationPointChangeData({ value }: reputationPointChangeDataParams): EncodeObject;
    queryGetAllNodeWorkloadByEpochRequest({ value }: queryGetAllNodeWorkloadByEpochRequestParams): EncodeObject;
    reputationPointChangeRawDataDb({ value }: reputationPointChangeRawDataDbParams): EncodeObject;
    queryGetManagerRpworkloadResponse({ value }: queryGetManagerRpworkloadResponseParams): EncodeObject;
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
