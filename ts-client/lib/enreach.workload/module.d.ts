import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { ReputationPointChangeRawData } from "./types/enreach/workload/reputationpoint";
import { ReputationDeltaPoint } from "./types/enreach/workload/reputationpoint";
import { QueryGetAllCheatStatusCRDataByEraRequest } from "./types/enreach/workload/query";
import { EraCheatStatusProcessData } from "./types/enreach/workload/cheat_status";
import { MsgUpdateHistoryEpochDataDepth } from "./types/enreach/workload/tx";
import { QueryGetPendingNextEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraResponse } from "./types/enreach/workload/query";
import { MsgCreateSuperior } from "./types/enreach/workload/tx";
import { QueryGetSuperiorResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointChangeDataByEraRequest } from "./types/enreach/workload/query";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { QueryGetManagerCSWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetCurrentEraRequest } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
import { QueryGetAllEraProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetEraCheatStatusProcessDataRequest } from "./types/enreach/workload/query";
import { MsgUpdateSuperior } from "./types/enreach/workload/tx";
import { MsgSubmitCheatStatusCRResponse } from "./types/enreach/workload/tx";
import { QueryGetHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetPendingNextEraResponse } from "./types/enreach/workload/query";
import { NodeWorkload } from "./types/enreach/workload/workload";
import { QueryGetAllManagerRPWorkloadByEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataResponse } from "./types/enreach/workload/query";
import { MsgUpdateWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/tx";
import { QueryGetReputationDeltaPointRequest } from "./types/enreach/workload/query";
import { QueryGetCurrentEraResponse } from "./types/enreach/workload/query";
import { QueryGetAllHistoryEraRequest } from "./types/enreach/workload/query";
import { QueryGetCheatStatusCRDataResponse } from "./types/enreach/workload/query";
import { CheatStatusCRDB } from "./types/enreach/workload/cheat_status";
import { MsgSubmitWorkreports } from "./types/enreach/workload/tx";
import { QueryGetWorkreportRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportProcessBatchSizeRequest } from "./types/enreach/workload/query";
import { ManagerRPWorkload } from "./types/enreach/workload/workload";
import { QueryGetAllHistoryEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerCSWorkloadByEraResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointChangeDataByEraResponse } from "./types/enreach/workload/query";
import { MsgSubmitWorkreportsResponse } from "./types/enreach/workload/tx";
import { MsgSubmitCheatStatusCR } from "./types/enreach/workload/tx";
import { EraProcessData } from "./types/enreach/workload/reputationpoint";
import { NodeScoreDB } from "./types/enreach/workload/workreport";
import { QueryGetNodeWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetCheatStatusCRDataRequest } from "./types/enreach/workload/query";
import { QueryGetAllManagerRPWorkloadByEraResponse } from "./types/enreach/workload/query";
import { QueryGetSuperiorRequest } from "./types/enreach/workload/query";
import { QueryGetAllCheatStatusCRDataByEraResponse } from "./types/enreach/workload/query";
import { EraInfo } from "./types/enreach/workload/era_info";
import { QueryGetWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataResponse } from "./types/enreach/workload/query";
import { ManagerWRWorkload } from "./types/enreach/workload/workload";
import { MsgUpdateSuperiorResponse } from "./types/enreach/workload/tx";
import { QueryGetAllManagerWRWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraRequest } from "./types/enreach/workload/query";
import { Superior } from "./types/enreach/workload/superior";
import { QueryGetCurrentEpochRequest } from "./types/enreach/workload/query";
import { QueryGetManagerRPWorkloadRequest } from "./types/enreach/workload/query";
import { CheatStatusCRData } from "./types/enreach/workload/cheat_status";
import { QueryGetAllWorkreportByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetAllHistoryEraResponse } from "./types/enreach/workload/query";
import { QueryGetEraCheatStatusProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetReputationDeltaPointResponse } from "./types/enreach/workload/query";
import { NodeScore } from "./types/enreach/workload/workreport";
import { QueryGetCurrentEpochResponse } from "./types/enreach/workload/query";
import { QueryGetEraLengthResponse } from "./types/enreach/workload/query";
import { QueryGetManagerCSWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataRequest } from "./types/enreach/workload/query";
import { CheatStatusCRMapDB } from "./types/enreach/workload/cheat_status";
import { ManagerCSWorkload } from "./types/enreach/workload/workload";
import { ReputationPointChangeRawDataDB } from "./types/enreach/workload/reputationpoint";
import { QueryGetAllManagerWRWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { MsgUpdateHistoryEpochDataDepthResponse } from "./types/enreach/workload/tx";
import { QueryGetAllManagerCSWorkloadByEraRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataResponse } from "./types/enreach/workload/query";
import { QueryGetAllEraCheatStatusProcessDataResponse } from "./types/enreach/workload/query";
import { Workreport } from "./types/enreach/workload/workreport";
import { ReputationPointChangeData } from "./types/enreach/workload/reputationpoint";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetHistoryEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllNodeWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataRequest } from "./types/enreach/workload/query";
import { EpochProcessData } from "./types/enreach/workload/workreport";
import { ReputationPointChangeRawDataMapDB } from "./types/enreach/workload/reputationpoint";
import { QueryGetHistoryEpochResponse } from "./types/enreach/workload/query";
import { QueryGetManagerWRWorkloadRequest } from "./types/enreach/workload/query";
import { ManagerNodeScoreMap } from "./types/enreach/workload/workreport";
import { MsgCreateSuperiorResponse } from "./types/enreach/workload/tx";
import { MsgSubmitReputationPointChangeData } from "./types/enreach/workload/tx";
import { QueryGetAllHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetEpochLengthResponse } from "./types/enreach/workload/query";
import { QueryGetAllEraProcessDataResponse } from "./types/enreach/workload/query";
import { CheatStatusCR } from "./types/enreach/workload/cheat_status";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { MsgUpdateWorkreportProcessBatchSize } from "./types/enreach/workload/tx";
import { QueryGetEpochLengthRequest } from "./types/enreach/workload/query";
import { QueryGetAllNodeWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { GenesisState } from "./types/enreach/workload/genesis";
import { MsgSubmitReputationPointChangeDataResponse } from "./types/enreach/workload/tx";
import { EpochInfo } from "./types/enreach/workload/epoch_info";
import { QueryGetPendingNextEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllEraCheatStatusProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetManagerRPWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochDataDepthResponse } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportResponse } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataResponse } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { QueryGetPendingNextEpochRequest } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochDataDepthRequest } from "./types/enreach/workload/query";
import { QueryGetEraLengthRequest } from "./types/enreach/workload/query";
import { QueryGetHistoryEraResponse } from "./types/enreach/workload/query";
import { QueryGetNodeWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetManagerWRWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochResponse } from "./types/enreach/workload/query";
export { ReputationPointChangeRawData, ReputationDeltaPoint, QueryGetAllCheatStatusCRDataByEraRequest, EraCheatStatusProcessData, MsgUpdateHistoryEpochDataDepth, QueryGetPendingNextEpochResponse, QueryGetAllReputationDeltaPointByEraResponse, MsgCreateSuperior, QueryGetSuperiorResponse, QueryGetAllReputationPointChangeDataByEraRequest, QueryParamsResponse, QueryGetManagerCSWorkloadRequest, QueryGetCurrentEraRequest, Params, QueryGetAllEraProcessDataRequest, QueryGetEraCheatStatusProcessDataRequest, MsgUpdateSuperior, MsgSubmitCheatStatusCRResponse, QueryGetHistoryEpochRequest, QueryGetPendingNextEraResponse, NodeWorkload, QueryGetAllManagerRPWorkloadByEraRequest, QueryGetAllEpochProcessDataResponse, MsgUpdateWorkreportProcessBatchSizeResponse, QueryGetReputationDeltaPointRequest, QueryGetCurrentEraResponse, QueryGetAllHistoryEraRequest, QueryGetCheatStatusCRDataResponse, CheatStatusCRDB, MsgSubmitWorkreports, QueryGetWorkreportRequest, QueryGetWorkreportProcessBatchSizeRequest, ManagerRPWorkload, QueryGetAllHistoryEpochResponse, QueryGetAllManagerCSWorkloadByEraResponse, QueryGetAllReputationPointChangeDataByEraResponse, MsgSubmitWorkreportsResponse, MsgSubmitCheatStatusCR, EraProcessData, NodeScoreDB, QueryGetNodeWorkloadRequest, QueryGetCheatStatusCRDataRequest, QueryGetAllManagerRPWorkloadByEraResponse, QueryGetSuperiorRequest, QueryGetAllCheatStatusCRDataByEraResponse, EraInfo, QueryGetWorkreportProcessBatchSizeResponse, QueryGetEraProcessDataResponse, ManagerWRWorkload, MsgUpdateSuperiorResponse, QueryGetAllManagerWRWorkloadByEpochRequest, QueryGetAllReputationDeltaPointByEraRequest, Superior, QueryGetCurrentEpochRequest, QueryGetManagerRPWorkloadRequest, CheatStatusCRData, QueryGetAllWorkreportByEpochRequest, QueryGetAllHistoryEraResponse, QueryGetEraCheatStatusProcessDataResponse, QueryGetReputationDeltaPointResponse, NodeScore, QueryGetCurrentEpochResponse, QueryGetEraLengthResponse, QueryGetManagerCSWorkloadResponse, QueryGetEraProcessDataRequest, CheatStatusCRMapDB, ManagerCSWorkload, ReputationPointChangeRawDataDB, QueryGetAllManagerWRWorkloadByEpochResponse, MsgUpdateHistoryEpochDataDepthResponse, QueryGetAllManagerCSWorkloadByEraRequest, QueryGetReputationPointChangeDataRequest, QueryGetReputationPointChangeDataResponse, QueryGetAllEraCheatStatusProcessDataResponse, Workreport, ReputationPointChangeData, QueryParamsRequest, QueryGetHistoryEraRequest, QueryGetAllNodeWorkloadByEpochRequest, QueryGetAllEpochProcessDataRequest, EpochProcessData, ReputationPointChangeRawDataMapDB, QueryGetHistoryEpochResponse, QueryGetManagerWRWorkloadRequest, ManagerNodeScoreMap, MsgCreateSuperiorResponse, MsgSubmitReputationPointChangeData, QueryGetAllHistoryEpochRequest, QueryGetEpochLengthResponse, QueryGetAllEraProcessDataResponse, CheatStatusCR, MsgUpdateParams, MsgUpdateWorkreportProcessBatchSize, QueryGetEpochLengthRequest, QueryGetAllNodeWorkloadByEpochResponse, GenesisState, MsgSubmitReputationPointChangeDataResponse, EpochInfo, QueryGetPendingNextEraRequest, QueryGetAllEraCheatStatusProcessDataRequest, QueryGetManagerRPWorkloadResponse, QueryGetHistoryEpochDataDepthResponse, QueryGetEpochProcessDataRequest, QueryGetWorkreportResponse, QueryGetEpochProcessDataResponse, MsgUpdateParamsResponse, QueryGetPendingNextEpochRequest, QueryGetHistoryEpochDataDepthRequest, QueryGetEraLengthRequest, QueryGetHistoryEraResponse, QueryGetNodeWorkloadResponse, QueryGetManagerWRWorkloadResponse, QueryGetAllWorkreportByEpochResponse };
type sendReputationPointChangeRawDataParams = {
    value: ReputationPointChangeRawData;
    fee?: StdFee;
    memo?: string;
};
type sendReputationDeltaPointParams = {
    value: ReputationDeltaPoint;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllCheatStatusCRDataByEraRequestParams = {
    value: QueryGetAllCheatStatusCRDataByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendEraCheatStatusProcessDataParams = {
    value: EraCheatStatusProcessData;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateHistoryEpochDataDepthParams = {
    value: MsgUpdateHistoryEpochDataDepth;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEpochResponseParams = {
    value: QueryGetPendingNextEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationDeltaPointByEraResponseParams = {
    value: QueryGetAllReputationDeltaPointByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
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
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerCSWorkloadRequestParams = {
    value: QueryGetManagerCSWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEraRequestParams = {
    value: QueryGetCurrentEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraProcessDataRequestParams = {
    value: QueryGetAllEraProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraCheatStatusProcessDataRequestParams = {
    value: QueryGetEraCheatStatusProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitCheatStatusCRResponseParams = {
    value: MsgSubmitCheatStatusCRResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochRequestParams = {
    value: QueryGetHistoryEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEraResponseParams = {
    value: QueryGetPendingNextEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendNodeWorkloadParams = {
    value: NodeWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerRPWorkloadByEraRequestParams = {
    value: QueryGetAllManagerRPWorkloadByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEpochProcessDataResponseParams = {
    value: QueryGetAllEpochProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateWorkreportProcessBatchSizeResponseParams = {
    value: MsgUpdateWorkreportProcessBatchSizeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationDeltaPointRequestParams = {
    value: QueryGetReputationDeltaPointRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEraResponseParams = {
    value: QueryGetCurrentEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEraRequestParams = {
    value: QueryGetAllHistoryEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCheatStatusCRDataResponseParams = {
    value: QueryGetCheatStatusCRDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCheatStatusCRDBParams = {
    value: CheatStatusCRDB;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportProcessBatchSizeRequestParams = {
    value: QueryGetWorkreportProcessBatchSizeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendManagerRPWorkloadParams = {
    value: ManagerRPWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEpochResponseParams = {
    value: QueryGetAllHistoryEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerCSWorkloadByEraResponseParams = {
    value: QueryGetAllManagerCSWorkloadByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationPointChangeDataByEraResponseParams = {
    value: QueryGetAllReputationPointChangeDataByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitCheatStatusCRParams = {
    value: MsgSubmitCheatStatusCR;
    fee?: StdFee;
    memo?: string;
};
type sendEraProcessDataParams = {
    value: EraProcessData;
    fee?: StdFee;
    memo?: string;
};
type sendNodeScoreDBParams = {
    value: NodeScoreDB;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeWorkloadRequestParams = {
    value: QueryGetNodeWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCheatStatusCRDataRequestParams = {
    value: QueryGetCheatStatusCRDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerRPWorkloadByEraResponseParams = {
    value: QueryGetAllManagerRPWorkloadByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllCheatStatusCRDataByEraResponseParams = {
    value: QueryGetAllCheatStatusCRDataByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEraInfoParams = {
    value: EraInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportProcessBatchSizeResponseParams = {
    value: QueryGetWorkreportProcessBatchSizeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraProcessDataResponseParams = {
    value: QueryGetEraProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendManagerWRWorkloadParams = {
    value: ManagerWRWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerWRWorkloadByEpochRequestParams = {
    value: QueryGetAllManagerWRWorkloadByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationDeltaPointByEraRequestParams = {
    value: QueryGetAllReputationDeltaPointByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerRPWorkloadRequestParams = {
    value: QueryGetManagerRPWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendCheatStatusCRDataParams = {
    value: CheatStatusCRData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllWorkreportByEpochRequestParams = {
    value: QueryGetAllWorkreportByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEraResponseParams = {
    value: QueryGetAllHistoryEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraCheatStatusProcessDataResponseParams = {
    value: QueryGetEraCheatStatusProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationDeltaPointResponseParams = {
    value: QueryGetReputationDeltaPointResponse;
    fee?: StdFee;
    memo?: string;
};
type sendNodeScoreParams = {
    value: NodeScore;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraLengthResponseParams = {
    value: QueryGetEraLengthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerCSWorkloadResponseParams = {
    value: QueryGetManagerCSWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraProcessDataRequestParams = {
    value: QueryGetEraProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendCheatStatusCRMapDBParams = {
    value: CheatStatusCRMapDB;
    fee?: StdFee;
    memo?: string;
};
type sendManagerCSWorkloadParams = {
    value: ManagerCSWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataDBParams = {
    value: ReputationPointChangeRawDataDB;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerWRWorkloadByEpochResponseParams = {
    value: QueryGetAllManagerWRWorkloadByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateHistoryEpochDataDepthResponseParams = {
    value: MsgUpdateHistoryEpochDataDepthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerCSWorkloadByEraRequestParams = {
    value: QueryGetAllManagerCSWorkloadByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointChangeDataRequestParams = {
    value: QueryGetReputationPointChangeDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointChangeDataResponseParams = {
    value: QueryGetReputationPointChangeDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraCheatStatusProcessDataResponseParams = {
    value: QueryGetAllEraCheatStatusProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendWorkreportParams = {
    value: Workreport;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeDataParams = {
    value: ReputationPointChangeData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEraRequestParams = {
    value: QueryGetHistoryEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllNodeWorkloadByEpochRequestParams = {
    value: QueryGetAllNodeWorkloadByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEpochProcessDataRequestParams = {
    value: QueryGetAllEpochProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendEpochProcessDataParams = {
    value: EpochProcessData;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataMapDBParams = {
    value: ReputationPointChangeRawDataMapDB;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochResponseParams = {
    value: QueryGetHistoryEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerWRWorkloadRequestParams = {
    value: QueryGetManagerWRWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendManagerNodeScoreMapParams = {
    value: ManagerNodeScoreMap;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitReputationPointChangeDataParams = {
    value: MsgSubmitReputationPointChangeData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEpochRequestParams = {
    value: QueryGetAllHistoryEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraProcessDataResponseParams = {
    value: QueryGetAllEraProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCheatStatusCRParams = {
    value: CheatStatusCR;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateWorkreportProcessBatchSizeParams = {
    value: MsgUpdateWorkreportProcessBatchSize;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllNodeWorkloadByEpochResponseParams = {
    value: QueryGetAllNodeWorkloadByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitReputationPointChangeDataResponseParams = {
    value: MsgSubmitReputationPointChangeDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEpochInfoParams = {
    value: EpochInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEraRequestParams = {
    value: QueryGetPendingNextEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraCheatStatusProcessDataRequestParams = {
    value: QueryGetAllEraCheatStatusProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerRPWorkloadResponseParams = {
    value: QueryGetManagerRPWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochDataDepthResponseParams = {
    value: QueryGetHistoryEpochDataDepthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochProcessDataRequestParams = {
    value: QueryGetEpochProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportResponseParams = {
    value: QueryGetWorkreportResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochProcessDataResponseParams = {
    value: QueryGetEpochProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEpochRequestParams = {
    value: QueryGetPendingNextEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochDataDepthRequestParams = {
    value: QueryGetHistoryEpochDataDepthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraLengthRequestParams = {
    value: QueryGetEraLengthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEraResponseParams = {
    value: QueryGetHistoryEraResponse;
    fee?: StdFee;
    memo?: string;
};
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
type sendQueryGetAllWorkreportByEpochResponseParams = {
    value: QueryGetAllWorkreportByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type reputationPointChangeRawDataParams = {
    value: ReputationPointChangeRawData;
};
type reputationDeltaPointParams = {
    value: ReputationDeltaPoint;
};
type queryGetAllCheatStatusCrdataByEraRequestParams = {
    value: QueryGetAllCheatStatusCRDataByEraRequest;
};
type eraCheatStatusProcessDataParams = {
    value: EraCheatStatusProcessData;
};
type msgUpdateHistoryEpochDataDepthParams = {
    value: MsgUpdateHistoryEpochDataDepth;
};
type queryGetPendingNextEpochResponseParams = {
    value: QueryGetPendingNextEpochResponse;
};
type queryGetAllReputationDeltaPointByEraResponseParams = {
    value: QueryGetAllReputationDeltaPointByEraResponse;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type queryGetAllReputationPointChangeDataByEraRequestParams = {
    value: QueryGetAllReputationPointChangeDataByEraRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetManagerCsworkloadRequestParams = {
    value: QueryGetManagerCSWorkloadRequest;
};
type queryGetCurrentEraRequestParams = {
    value: QueryGetCurrentEraRequest;
};
type paramsParams = {
    value: Params;
};
type queryGetAllEraProcessDataRequestParams = {
    value: QueryGetAllEraProcessDataRequest;
};
type queryGetEraCheatStatusProcessDataRequestParams = {
    value: QueryGetEraCheatStatusProcessDataRequest;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type msgSubmitCheatStatusCrresponseParams = {
    value: MsgSubmitCheatStatusCRResponse;
};
type queryGetHistoryEpochRequestParams = {
    value: QueryGetHistoryEpochRequest;
};
type queryGetPendingNextEraResponseParams = {
    value: QueryGetPendingNextEraResponse;
};
type nodeWorkloadParams = {
    value: NodeWorkload;
};
type queryGetAllManagerRpworkloadByEraRequestParams = {
    value: QueryGetAllManagerRPWorkloadByEraRequest;
};
type queryGetAllEpochProcessDataResponseParams = {
    value: QueryGetAllEpochProcessDataResponse;
};
type msgUpdateWorkreportProcessBatchSizeResponseParams = {
    value: MsgUpdateWorkreportProcessBatchSizeResponse;
};
type queryGetReputationDeltaPointRequestParams = {
    value: QueryGetReputationDeltaPointRequest;
};
type queryGetCurrentEraResponseParams = {
    value: QueryGetCurrentEraResponse;
};
type queryGetAllHistoryEraRequestParams = {
    value: QueryGetAllHistoryEraRequest;
};
type queryGetCheatStatusCrdataResponseParams = {
    value: QueryGetCheatStatusCRDataResponse;
};
type cheatStatusCrdbParams = {
    value: CheatStatusCRDB;
};
type msgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
};
type queryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
};
type queryGetWorkreportProcessBatchSizeRequestParams = {
    value: QueryGetWorkreportProcessBatchSizeRequest;
};
type managerRpworkloadParams = {
    value: ManagerRPWorkload;
};
type queryGetAllHistoryEpochResponseParams = {
    value: QueryGetAllHistoryEpochResponse;
};
type queryGetAllManagerCsworkloadByEraResponseParams = {
    value: QueryGetAllManagerCSWorkloadByEraResponse;
};
type queryGetAllReputationPointChangeDataByEraResponseParams = {
    value: QueryGetAllReputationPointChangeDataByEraResponse;
};
type msgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
};
type msgSubmitCheatStatusCrParams = {
    value: MsgSubmitCheatStatusCR;
};
type eraProcessDataParams = {
    value: EraProcessData;
};
type nodeScoreDbParams = {
    value: NodeScoreDB;
};
type queryGetNodeWorkloadRequestParams = {
    value: QueryGetNodeWorkloadRequest;
};
type queryGetCheatStatusCrdataRequestParams = {
    value: QueryGetCheatStatusCRDataRequest;
};
type queryGetAllManagerRpworkloadByEraResponseParams = {
    value: QueryGetAllManagerRPWorkloadByEraResponse;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
type queryGetAllCheatStatusCrdataByEraResponseParams = {
    value: QueryGetAllCheatStatusCRDataByEraResponse;
};
type eraInfoParams = {
    value: EraInfo;
};
type queryGetWorkreportProcessBatchSizeResponseParams = {
    value: QueryGetWorkreportProcessBatchSizeResponse;
};
type queryGetEraProcessDataResponseParams = {
    value: QueryGetEraProcessDataResponse;
};
type managerWrworkloadParams = {
    value: ManagerWRWorkload;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type queryGetAllManagerWrworkloadByEpochRequestParams = {
    value: QueryGetAllManagerWRWorkloadByEpochRequest;
};
type queryGetAllReputationDeltaPointByEraRequestParams = {
    value: QueryGetAllReputationDeltaPointByEraRequest;
};
type superiorParams = {
    value: Superior;
};
type queryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
};
type queryGetManagerRpworkloadRequestParams = {
    value: QueryGetManagerRPWorkloadRequest;
};
type cheatStatusCrdataParams = {
    value: CheatStatusCRData;
};
type queryGetAllWorkreportByEpochRequestParams = {
    value: QueryGetAllWorkreportByEpochRequest;
};
type queryGetAllHistoryEraResponseParams = {
    value: QueryGetAllHistoryEraResponse;
};
type queryGetEraCheatStatusProcessDataResponseParams = {
    value: QueryGetEraCheatStatusProcessDataResponse;
};
type queryGetReputationDeltaPointResponseParams = {
    value: QueryGetReputationDeltaPointResponse;
};
type nodeScoreParams = {
    value: NodeScore;
};
type queryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
};
type queryGetEraLengthResponseParams = {
    value: QueryGetEraLengthResponse;
};
type queryGetManagerCsworkloadResponseParams = {
    value: QueryGetManagerCSWorkloadResponse;
};
type queryGetEraProcessDataRequestParams = {
    value: QueryGetEraProcessDataRequest;
};
type cheatStatusCrmapDbParams = {
    value: CheatStatusCRMapDB;
};
type managerCsworkloadParams = {
    value: ManagerCSWorkload;
};
type reputationPointChangeRawDataDbParams = {
    value: ReputationPointChangeRawDataDB;
};
type queryGetAllManagerWrworkloadByEpochResponseParams = {
    value: QueryGetAllManagerWRWorkloadByEpochResponse;
};
type msgUpdateHistoryEpochDataDepthResponseParams = {
    value: MsgUpdateHistoryEpochDataDepthResponse;
};
type queryGetAllManagerCsworkloadByEraRequestParams = {
    value: QueryGetAllManagerCSWorkloadByEraRequest;
};
type queryGetReputationPointChangeDataRequestParams = {
    value: QueryGetReputationPointChangeDataRequest;
};
type queryGetReputationPointChangeDataResponseParams = {
    value: QueryGetReputationPointChangeDataResponse;
};
type queryGetAllEraCheatStatusProcessDataResponseParams = {
    value: QueryGetAllEraCheatStatusProcessDataResponse;
};
type workreportParams = {
    value: Workreport;
};
type reputationPointChangeDataParams = {
    value: ReputationPointChangeData;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetHistoryEraRequestParams = {
    value: QueryGetHistoryEraRequest;
};
type queryGetAllNodeWorkloadByEpochRequestParams = {
    value: QueryGetAllNodeWorkloadByEpochRequest;
};
type queryGetAllEpochProcessDataRequestParams = {
    value: QueryGetAllEpochProcessDataRequest;
};
type epochProcessDataParams = {
    value: EpochProcessData;
};
type reputationPointChangeRawDataMapDbParams = {
    value: ReputationPointChangeRawDataMapDB;
};
type queryGetHistoryEpochResponseParams = {
    value: QueryGetHistoryEpochResponse;
};
type queryGetManagerWrworkloadRequestParams = {
    value: QueryGetManagerWRWorkloadRequest;
};
type managerNodeScoreMapParams = {
    value: ManagerNodeScoreMap;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type msgSubmitReputationPointChangeDataParams = {
    value: MsgSubmitReputationPointChangeData;
};
type queryGetAllHistoryEpochRequestParams = {
    value: QueryGetAllHistoryEpochRequest;
};
type queryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
};
type queryGetAllEraProcessDataResponseParams = {
    value: QueryGetAllEraProcessDataResponse;
};
type cheatStatusCrParams = {
    value: CheatStatusCR;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgUpdateWorkreportProcessBatchSizeParams = {
    value: MsgUpdateWorkreportProcessBatchSize;
};
type queryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
};
type queryGetAllNodeWorkloadByEpochResponseParams = {
    value: QueryGetAllNodeWorkloadByEpochResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgSubmitReputationPointChangeDataResponseParams = {
    value: MsgSubmitReputationPointChangeDataResponse;
};
type epochInfoParams = {
    value: EpochInfo;
};
type queryGetPendingNextEraRequestParams = {
    value: QueryGetPendingNextEraRequest;
};
type queryGetAllEraCheatStatusProcessDataRequestParams = {
    value: QueryGetAllEraCheatStatusProcessDataRequest;
};
type queryGetManagerRpworkloadResponseParams = {
    value: QueryGetManagerRPWorkloadResponse;
};
type queryGetHistoryEpochDataDepthResponseParams = {
    value: QueryGetHistoryEpochDataDepthResponse;
};
type queryGetEpochProcessDataRequestParams = {
    value: QueryGetEpochProcessDataRequest;
};
type queryGetWorkreportResponseParams = {
    value: QueryGetWorkreportResponse;
};
type queryGetEpochProcessDataResponseParams = {
    value: QueryGetEpochProcessDataResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryGetPendingNextEpochRequestParams = {
    value: QueryGetPendingNextEpochRequest;
};
type queryGetHistoryEpochDataDepthRequestParams = {
    value: QueryGetHistoryEpochDataDepthRequest;
};
type queryGetEraLengthRequestParams = {
    value: QueryGetEraLengthRequest;
};
type queryGetHistoryEraResponseParams = {
    value: QueryGetHistoryEraResponse;
};
type queryGetNodeWorkloadResponseParams = {
    value: QueryGetNodeWorkloadResponse;
};
type queryGetManagerWrworkloadResponseParams = {
    value: QueryGetManagerWRWorkloadResponse;
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
    sendReputationPointChangeRawData({ value, fee, memo }: sendReputationPointChangeRawDataParams): Promise<DeliverTxResponse>;
    sendReputationDeltaPoint({ value, fee, memo }: sendReputationDeltaPointParams): Promise<DeliverTxResponse>;
    sendQueryGetAllCheatStatusCRDataByEraRequest({ value, fee, memo }: sendQueryGetAllCheatStatusCRDataByEraRequestParams): Promise<DeliverTxResponse>;
    sendEraCheatStatusProcessData({ value, fee, memo }: sendEraCheatStatusProcessDataParams): Promise<DeliverTxResponse>;
    sendMsgUpdateHistoryEpochDataDepth({ value, fee, memo }: sendMsgUpdateHistoryEpochDataDepthParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEpochResponse({ value, fee, memo }: sendQueryGetPendingNextEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationDeltaPointByEraResponse({ value, fee, memo }: sendQueryGetAllReputationDeltaPointByEraResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointChangeDataByEraRequest({ value, fee, memo }: sendQueryGetAllReputationPointChangeDataByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerCSWorkloadRequest({ value, fee, memo }: sendQueryGetManagerCSWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEraRequest({ value, fee, memo }: sendQueryGetCurrentEraRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraProcessDataRequest({ value, fee, memo }: sendQueryGetAllEraProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEraCheatStatusProcessDataRequest({ value, fee, memo }: sendQueryGetEraCheatStatusProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgSubmitCheatStatusCRResponse({ value, fee, memo }: sendMsgSubmitCheatStatusCRResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochRequest({ value, fee, memo }: sendQueryGetHistoryEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEraResponse({ value, fee, memo }: sendQueryGetPendingNextEraResponseParams): Promise<DeliverTxResponse>;
    sendNodeWorkload({ value, fee, memo }: sendNodeWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerRPWorkloadByEraRequest({ value, fee, memo }: sendQueryGetAllManagerRPWorkloadByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEpochProcessDataResponse({ value, fee, memo }: sendQueryGetAllEpochProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateWorkreportProcessBatchSizeResponse({ value, fee, memo }: sendMsgUpdateWorkreportProcessBatchSizeResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationDeltaPointRequest({ value, fee, memo }: sendQueryGetReputationDeltaPointRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEraResponse({ value, fee, memo }: sendQueryGetCurrentEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEraRequest({ value, fee, memo }: sendQueryGetAllHistoryEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetCheatStatusCRDataResponse({ value, fee, memo }: sendQueryGetCheatStatusCRDataResponseParams): Promise<DeliverTxResponse>;
    sendCheatStatusCRDB({ value, fee, memo }: sendCheatStatusCRDBParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreports({ value, fee, memo }: sendMsgSubmitWorkreportsParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportRequest({ value, fee, memo }: sendQueryGetWorkreportRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportProcessBatchSizeRequest({ value, fee, memo }: sendQueryGetWorkreportProcessBatchSizeRequestParams): Promise<DeliverTxResponse>;
    sendManagerRPWorkload({ value, fee, memo }: sendManagerRPWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEpochResponse({ value, fee, memo }: sendQueryGetAllHistoryEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerCSWorkloadByEraResponse({ value, fee, memo }: sendQueryGetAllManagerCSWorkloadByEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointChangeDataByEraResponse({ value, fee, memo }: sendQueryGetAllReputationPointChangeDataByEraResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreportsResponse({ value, fee, memo }: sendMsgSubmitWorkreportsResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitCheatStatusCR({ value, fee, memo }: sendMsgSubmitCheatStatusCRParams): Promise<DeliverTxResponse>;
    sendEraProcessData({ value, fee, memo }: sendEraProcessDataParams): Promise<DeliverTxResponse>;
    sendNodeScoreDB({ value, fee, memo }: sendNodeScoreDBParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeWorkloadRequest({ value, fee, memo }: sendQueryGetNodeWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetCheatStatusCRDataRequest({ value, fee, memo }: sendQueryGetCheatStatusCRDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerRPWorkloadByEraResponse({ value, fee, memo }: sendQueryGetAllManagerRPWorkloadByEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllCheatStatusCRDataByEraResponse({ value, fee, memo }: sendQueryGetAllCheatStatusCRDataByEraResponseParams): Promise<DeliverTxResponse>;
    sendEraInfo({ value, fee, memo }: sendEraInfoParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportProcessBatchSizeResponse({ value, fee, memo }: sendQueryGetWorkreportProcessBatchSizeResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEraProcessDataResponse({ value, fee, memo }: sendQueryGetEraProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendManagerWRWorkload({ value, fee, memo }: sendManagerWRWorkloadParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerWRWorkloadByEpochRequest({ value, fee, memo }: sendQueryGetAllManagerWRWorkloadByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationDeltaPointByEraRequest({ value, fee, memo }: sendQueryGetAllReputationDeltaPointByEraRequestParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochRequest({ value, fee, memo }: sendQueryGetCurrentEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRPWorkloadRequest({ value, fee, memo }: sendQueryGetManagerRPWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendCheatStatusCRData({ value, fee, memo }: sendCheatStatusCRDataParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochRequest({ value, fee, memo }: sendQueryGetAllWorkreportByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEraResponse({ value, fee, memo }: sendQueryGetAllHistoryEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEraCheatStatusProcessDataResponse({ value, fee, memo }: sendQueryGetEraCheatStatusProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationDeltaPointResponse({ value, fee, memo }: sendQueryGetReputationDeltaPointResponseParams): Promise<DeliverTxResponse>;
    sendNodeScore({ value, fee, memo }: sendNodeScoreParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochResponse({ value, fee, memo }: sendQueryGetCurrentEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEraLengthResponse({ value, fee, memo }: sendQueryGetEraLengthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerCSWorkloadResponse({ value, fee, memo }: sendQueryGetManagerCSWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEraProcessDataRequest({ value, fee, memo }: sendQueryGetEraProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendCheatStatusCRMapDB({ value, fee, memo }: sendCheatStatusCRMapDBParams): Promise<DeliverTxResponse>;
    sendManagerCSWorkload({ value, fee, memo }: sendManagerCSWorkloadParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawDataDB({ value, fee, memo }: sendReputationPointChangeRawDataDBParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerWRWorkloadByEpochResponse({ value, fee, memo }: sendQueryGetAllManagerWRWorkloadByEpochResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateHistoryEpochDataDepthResponse({ value, fee, memo }: sendMsgUpdateHistoryEpochDataDepthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerCSWorkloadByEraRequest({ value, fee, memo }: sendQueryGetAllManagerCSWorkloadByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointChangeDataRequest({ value, fee, memo }: sendQueryGetReputationPointChangeDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointChangeDataResponse({ value, fee, memo }: sendQueryGetReputationPointChangeDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraCheatStatusProcessDataResponse({ value, fee, memo }: sendQueryGetAllEraCheatStatusProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendWorkreport({ value, fee, memo }: sendWorkreportParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeData({ value, fee, memo }: sendReputationPointChangeDataParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEraRequest({ value, fee, memo }: sendQueryGetHistoryEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllNodeWorkloadByEpochRequest({ value, fee, memo }: sendQueryGetAllNodeWorkloadByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEpochProcessDataRequest({ value, fee, memo }: sendQueryGetAllEpochProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendEpochProcessData({ value, fee, memo }: sendEpochProcessDataParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawDataMapDB({ value, fee, memo }: sendReputationPointChangeRawDataMapDBParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochResponse({ value, fee, memo }: sendQueryGetHistoryEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerWRWorkloadRequest({ value, fee, memo }: sendQueryGetManagerWRWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendManagerNodeScoreMap({ value, fee, memo }: sendManagerNodeScoreMapParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitReputationPointChangeData({ value, fee, memo }: sendMsgSubmitReputationPointChangeDataParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEpochRequest({ value, fee, memo }: sendQueryGetAllHistoryEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthResponse({ value, fee, memo }: sendQueryGetEpochLengthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraProcessDataResponse({ value, fee, memo }: sendQueryGetAllEraProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendCheatStatusCR({ value, fee, memo }: sendCheatStatusCRParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateWorkreportProcessBatchSize({ value, fee, memo }: sendMsgUpdateWorkreportProcessBatchSizeParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthRequest({ value, fee, memo }: sendQueryGetEpochLengthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllNodeWorkloadByEpochResponse({ value, fee, memo }: sendQueryGetAllNodeWorkloadByEpochResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgSubmitReputationPointChangeDataResponse({ value, fee, memo }: sendMsgSubmitReputationPointChangeDataResponseParams): Promise<DeliverTxResponse>;
    sendEpochInfo({ value, fee, memo }: sendEpochInfoParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEraRequest({ value, fee, memo }: sendQueryGetPendingNextEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraCheatStatusProcessDataRequest({ value, fee, memo }: sendQueryGetAllEraCheatStatusProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRPWorkloadResponse({ value, fee, memo }: sendQueryGetManagerRPWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochDataDepthResponse({ value, fee, memo }: sendQueryGetHistoryEpochDataDepthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochProcessDataRequest({ value, fee, memo }: sendQueryGetEpochProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportResponse({ value, fee, memo }: sendQueryGetWorkreportResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochProcessDataResponse({ value, fee, memo }: sendQueryGetEpochProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEpochRequest({ value, fee, memo }: sendQueryGetPendingNextEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochDataDepthRequest({ value, fee, memo }: sendQueryGetHistoryEpochDataDepthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEraLengthRequest({ value, fee, memo }: sendQueryGetEraLengthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEraResponse({ value, fee, memo }: sendQueryGetHistoryEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeWorkloadResponse({ value, fee, memo }: sendQueryGetNodeWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerWRWorkloadResponse({ value, fee, memo }: sendQueryGetManagerWRWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochResponse({ value, fee, memo }: sendQueryGetAllWorkreportByEpochResponseParams): Promise<DeliverTxResponse>;
    reputationPointChangeRawData({ value }: reputationPointChangeRawDataParams): EncodeObject;
    reputationDeltaPoint({ value }: reputationDeltaPointParams): EncodeObject;
    queryGetAllCheatStatusCrdataByEraRequest({ value }: queryGetAllCheatStatusCrdataByEraRequestParams): EncodeObject;
    eraCheatStatusProcessData({ value }: eraCheatStatusProcessDataParams): EncodeObject;
    msgUpdateHistoryEpochDataDepth({ value }: msgUpdateHistoryEpochDataDepthParams): EncodeObject;
    queryGetPendingNextEpochResponse({ value }: queryGetPendingNextEpochResponseParams): EncodeObject;
    queryGetAllReputationDeltaPointByEraResponse({ value }: queryGetAllReputationDeltaPointByEraResponseParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    queryGetAllReputationPointChangeDataByEraRequest({ value }: queryGetAllReputationPointChangeDataByEraRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetManagerCsworkloadRequest({ value }: queryGetManagerCsworkloadRequestParams): EncodeObject;
    queryGetCurrentEraRequest({ value }: queryGetCurrentEraRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryGetAllEraProcessDataRequest({ value }: queryGetAllEraProcessDataRequestParams): EncodeObject;
    queryGetEraCheatStatusProcessDataRequest({ value }: queryGetEraCheatStatusProcessDataRequestParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    msgSubmitCheatStatusCrresponse({ value }: msgSubmitCheatStatusCrresponseParams): EncodeObject;
    queryGetHistoryEpochRequest({ value }: queryGetHistoryEpochRequestParams): EncodeObject;
    queryGetPendingNextEraResponse({ value }: queryGetPendingNextEraResponseParams): EncodeObject;
    nodeWorkload({ value }: nodeWorkloadParams): EncodeObject;
    queryGetAllManagerRpworkloadByEraRequest({ value }: queryGetAllManagerRpworkloadByEraRequestParams): EncodeObject;
    queryGetAllEpochProcessDataResponse({ value }: queryGetAllEpochProcessDataResponseParams): EncodeObject;
    msgUpdateWorkreportProcessBatchSizeResponse({ value }: msgUpdateWorkreportProcessBatchSizeResponseParams): EncodeObject;
    queryGetReputationDeltaPointRequest({ value }: queryGetReputationDeltaPointRequestParams): EncodeObject;
    queryGetCurrentEraResponse({ value }: queryGetCurrentEraResponseParams): EncodeObject;
    queryGetAllHistoryEraRequest({ value }: queryGetAllHistoryEraRequestParams): EncodeObject;
    queryGetCheatStatusCrdataResponse({ value }: queryGetCheatStatusCrdataResponseParams): EncodeObject;
    cheatStatusCrdb({ value }: cheatStatusCrdbParams): EncodeObject;
    msgSubmitWorkreports({ value }: msgSubmitWorkreportsParams): EncodeObject;
    queryGetWorkreportRequest({ value }: queryGetWorkreportRequestParams): EncodeObject;
    queryGetWorkreportProcessBatchSizeRequest({ value }: queryGetWorkreportProcessBatchSizeRequestParams): EncodeObject;
    managerRpworkload({ value }: managerRpworkloadParams): EncodeObject;
    queryGetAllHistoryEpochResponse({ value }: queryGetAllHistoryEpochResponseParams): EncodeObject;
    queryGetAllManagerCsworkloadByEraResponse({ value }: queryGetAllManagerCsworkloadByEraResponseParams): EncodeObject;
    queryGetAllReputationPointChangeDataByEraResponse({ value }: queryGetAllReputationPointChangeDataByEraResponseParams): EncodeObject;
    msgSubmitWorkreportsResponse({ value }: msgSubmitWorkreportsResponseParams): EncodeObject;
    msgSubmitCheatStatusCr({ value }: msgSubmitCheatStatusCrParams): EncodeObject;
    eraProcessData({ value }: eraProcessDataParams): EncodeObject;
    nodeScoreDb({ value }: nodeScoreDbParams): EncodeObject;
    queryGetNodeWorkloadRequest({ value }: queryGetNodeWorkloadRequestParams): EncodeObject;
    queryGetCheatStatusCrdataRequest({ value }: queryGetCheatStatusCrdataRequestParams): EncodeObject;
    queryGetAllManagerRpworkloadByEraResponse({ value }: queryGetAllManagerRpworkloadByEraResponseParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
    queryGetAllCheatStatusCrdataByEraResponse({ value }: queryGetAllCheatStatusCrdataByEraResponseParams): EncodeObject;
    eraInfo({ value }: eraInfoParams): EncodeObject;
    queryGetWorkreportProcessBatchSizeResponse({ value }: queryGetWorkreportProcessBatchSizeResponseParams): EncodeObject;
    queryGetEraProcessDataResponse({ value }: queryGetEraProcessDataResponseParams): EncodeObject;
    managerWrworkload({ value }: managerWrworkloadParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    queryGetAllManagerWrworkloadByEpochRequest({ value }: queryGetAllManagerWrworkloadByEpochRequestParams): EncodeObject;
    queryGetAllReputationDeltaPointByEraRequest({ value }: queryGetAllReputationDeltaPointByEraRequestParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    queryGetCurrentEpochRequest({ value }: queryGetCurrentEpochRequestParams): EncodeObject;
    queryGetManagerRpworkloadRequest({ value }: queryGetManagerRpworkloadRequestParams): EncodeObject;
    cheatStatusCrdata({ value }: cheatStatusCrdataParams): EncodeObject;
    queryGetAllWorkreportByEpochRequest({ value }: queryGetAllWorkreportByEpochRequestParams): EncodeObject;
    queryGetAllHistoryEraResponse({ value }: queryGetAllHistoryEraResponseParams): EncodeObject;
    queryGetEraCheatStatusProcessDataResponse({ value }: queryGetEraCheatStatusProcessDataResponseParams): EncodeObject;
    queryGetReputationDeltaPointResponse({ value }: queryGetReputationDeltaPointResponseParams): EncodeObject;
    nodeScore({ value }: nodeScoreParams): EncodeObject;
    queryGetCurrentEpochResponse({ value }: queryGetCurrentEpochResponseParams): EncodeObject;
    queryGetEraLengthResponse({ value }: queryGetEraLengthResponseParams): EncodeObject;
    queryGetManagerCsworkloadResponse({ value }: queryGetManagerCsworkloadResponseParams): EncodeObject;
    queryGetEraProcessDataRequest({ value }: queryGetEraProcessDataRequestParams): EncodeObject;
    cheatStatusCrmapDb({ value }: cheatStatusCrmapDbParams): EncodeObject;
    managerCsworkload({ value }: managerCsworkloadParams): EncodeObject;
    reputationPointChangeRawDataDb({ value }: reputationPointChangeRawDataDbParams): EncodeObject;
    queryGetAllManagerWrworkloadByEpochResponse({ value }: queryGetAllManagerWrworkloadByEpochResponseParams): EncodeObject;
    msgUpdateHistoryEpochDataDepthResponse({ value }: msgUpdateHistoryEpochDataDepthResponseParams): EncodeObject;
    queryGetAllManagerCsworkloadByEraRequest({ value }: queryGetAllManagerCsworkloadByEraRequestParams): EncodeObject;
    queryGetReputationPointChangeDataRequest({ value }: queryGetReputationPointChangeDataRequestParams): EncodeObject;
    queryGetReputationPointChangeDataResponse({ value }: queryGetReputationPointChangeDataResponseParams): EncodeObject;
    queryGetAllEraCheatStatusProcessDataResponse({ value }: queryGetAllEraCheatStatusProcessDataResponseParams): EncodeObject;
    workreport({ value }: workreportParams): EncodeObject;
    reputationPointChangeData({ value }: reputationPointChangeDataParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetHistoryEraRequest({ value }: queryGetHistoryEraRequestParams): EncodeObject;
    queryGetAllNodeWorkloadByEpochRequest({ value }: queryGetAllNodeWorkloadByEpochRequestParams): EncodeObject;
    queryGetAllEpochProcessDataRequest({ value }: queryGetAllEpochProcessDataRequestParams): EncodeObject;
    epochProcessData({ value }: epochProcessDataParams): EncodeObject;
    reputationPointChangeRawDataMapDb({ value }: reputationPointChangeRawDataMapDbParams): EncodeObject;
    queryGetHistoryEpochResponse({ value }: queryGetHistoryEpochResponseParams): EncodeObject;
    queryGetManagerWrworkloadRequest({ value }: queryGetManagerWrworkloadRequestParams): EncodeObject;
    managerNodeScoreMap({ value }: managerNodeScoreMapParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    msgSubmitReputationPointChangeData({ value }: msgSubmitReputationPointChangeDataParams): EncodeObject;
    queryGetAllHistoryEpochRequest({ value }: queryGetAllHistoryEpochRequestParams): EncodeObject;
    queryGetEpochLengthResponse({ value }: queryGetEpochLengthResponseParams): EncodeObject;
    queryGetAllEraProcessDataResponse({ value }: queryGetAllEraProcessDataResponseParams): EncodeObject;
    cheatStatusCr({ value }: cheatStatusCrParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgUpdateWorkreportProcessBatchSize({ value }: msgUpdateWorkreportProcessBatchSizeParams): EncodeObject;
    queryGetEpochLengthRequest({ value }: queryGetEpochLengthRequestParams): EncodeObject;
    queryGetAllNodeWorkloadByEpochResponse({ value }: queryGetAllNodeWorkloadByEpochResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgSubmitReputationPointChangeDataResponse({ value }: msgSubmitReputationPointChangeDataResponseParams): EncodeObject;
    epochInfo({ value }: epochInfoParams): EncodeObject;
    queryGetPendingNextEraRequest({ value }: queryGetPendingNextEraRequestParams): EncodeObject;
    queryGetAllEraCheatStatusProcessDataRequest({ value }: queryGetAllEraCheatStatusProcessDataRequestParams): EncodeObject;
    queryGetManagerRpworkloadResponse({ value }: queryGetManagerRpworkloadResponseParams): EncodeObject;
    queryGetHistoryEpochDataDepthResponse({ value }: queryGetHistoryEpochDataDepthResponseParams): EncodeObject;
    queryGetEpochProcessDataRequest({ value }: queryGetEpochProcessDataRequestParams): EncodeObject;
    queryGetWorkreportResponse({ value }: queryGetWorkreportResponseParams): EncodeObject;
    queryGetEpochProcessDataResponse({ value }: queryGetEpochProcessDataResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryGetPendingNextEpochRequest({ value }: queryGetPendingNextEpochRequestParams): EncodeObject;
    queryGetHistoryEpochDataDepthRequest({ value }: queryGetHistoryEpochDataDepthRequestParams): EncodeObject;
    queryGetEraLengthRequest({ value }: queryGetEraLengthRequestParams): EncodeObject;
    queryGetHistoryEraResponse({ value }: queryGetHistoryEraResponseParams): EncodeObject;
    queryGetNodeWorkloadResponse({ value }: queryGetNodeWorkloadResponseParams): EncodeObject;
    queryGetManagerWrworkloadResponse({ value }: queryGetManagerWrworkloadResponseParams): EncodeObject;
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
