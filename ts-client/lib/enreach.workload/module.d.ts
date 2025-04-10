import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryGetAllEraCheatStatusProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetManagerCSWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetManagerCSWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetCheatStatusCRDataRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportRequest } from "./types/enreach/workload/query";
import { QueryGetPendingNextEraResponse } from "./types/enreach/workload/query";
import { QueryGetAllCheatStatusCRDataByEraResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeRawDataDB } from "./types/enreach/workload/reputationpoint";
import { NodeWorkload } from "./types/enreach/workload/workload";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochResponse } from "./types/enreach/workload/query";
import { EraInfo } from "./types/enreach/workload/era_info";
import { CheatStatusCRMapDB } from "./types/enreach/workload/cheat_status";
import { QueryGetCurrentEpochResponse } from "./types/enreach/workload/query";
import { MsgUpdateSuperior } from "./types/enreach/workload/tx";
import { QueryGetPendingNextEraRequest } from "./types/enreach/workload/query";
import { EraProcessData } from "./types/enreach/workload/reputationpoint";
import { QueryGetNodeWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerRPWorkloadByEraRequest } from "./types/enreach/workload/query";
import { ManagerCSWorkload } from "./types/enreach/workload/workload";
import { QueryGetEpochProcessDataRequest } from "./types/enreach/workload/query";
import { ReputationPointChangeRawData } from "./types/enreach/workload/reputationpoint";
import { QueryGetAllCheatStatusCRDataByEraRequest } from "./types/enreach/workload/query";
import { ManagerWRWorkload } from "./types/enreach/workload/workload";
import { ManagerNodeScoreMap } from "./types/enreach/workload/workreport";
import { QueryGetAllManagerCSWorkloadByEraResponse } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataResponse } from "./types/enreach/workload/query";
import { QueryGetManagerRPWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllEraCheatStatusProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetManagerWRWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetAllManagerWRWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetHistoryEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointChangeDataByEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetSuperiorRequest } from "./types/enreach/workload/query";
import { QueryParamRequest } from "./types/enreach/workload/query";
import { QueryGetEpochLengthResponse } from "./types/enreach/workload/query";
import { QueryGetManagerRPWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportResponse } from "./types/enreach/workload/query";
import { QueryGetCurrentEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraRequest } from "./types/enreach/workload/query";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetEraCheatStatusProcessDataResponse } from "./types/enreach/workload/query";
import { ManagerRPWorkload } from "./types/enreach/workload/workload";
import { QueryGetPendingNextEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerCSWorkloadByEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointChangeDataByEraResponse } from "./types/enreach/workload/query";
import { MsgUpdateSuperiorResponse } from "./types/enreach/workload/tx";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryGetReputationDeltaPointRequest } from "./types/enreach/workload/query";
import { QueryGetPendingNextEpochRequest } from "./types/enreach/workload/query";
import { QueryGetSuperiorResponse } from "./types/enreach/workload/query";
import { QueryGetEraLengthResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraResponse } from "./types/enreach/workload/query";
import { MsgSubmitWorkreportsResponse } from "./types/enreach/workload/tx";
import { CheatStatusCRDB } from "./types/enreach/workload/cheat_status";
import { QueryGetAllManagerWRWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataRequest } from "./types/enreach/workload/query";
import { QueryGetEraCheatStatusProcessDataRequest } from "./types/enreach/workload/query";
import { MsgUpdateParam } from "./types/enreach/workload/tx";
import { MsgSubmitCheatStatusCR } from "./types/enreach/workload/tx";
import { QueryGetAllEpochProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetAllHistoryEraRequest } from "./types/enreach/workload/query";
import { MsgSubmitCheatStatusCRResponse } from "./types/enreach/workload/tx";
import { ReputationDeltaPoint } from "./types/enreach/workload/reputationpoint";
import { QueryGetCurrentEraResponse } from "./types/enreach/workload/query";
import { QueryGetAllEraProcessDataRequest } from "./types/enreach/workload/query";
import { ReputationPointChangeRawDataMapDB } from "./types/enreach/workload/reputationpoint";
import { NodeScore } from "./types/enreach/workload/workreport";
import { NodeScoreDB } from "./types/enreach/workload/workreport";
import { CheatStatusCR } from "./types/enreach/workload/cheat_status";
import { QueryGetAllNodeWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { EpochProcessData } from "./types/enreach/workload/workreport";
import { QueryGetAllNodeWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { EpochInfo } from "./types/enreach/workload/epoch_info";
import { MsgCreateSuperior } from "./types/enreach/workload/tx";
import { QueryGetEpochLengthRequest } from "./types/enreach/workload/query";
import { QueryGetAllEraProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetAllHistoryEpochResponse } from "./types/enreach/workload/query";
import { QueryGetReputationDeltaPointResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeData } from "./types/enreach/workload/reputationpoint";
import { MsgUpdateParamResponse } from "./types/enreach/workload/tx";
import { MsgSubmitReputationPointChangeDataResponse } from "./types/enreach/workload/tx";
import { EraCheatStatusProcessData } from "./types/enreach/workload/cheat_status";
import { QueryGetCurrentEpochRequest } from "./types/enreach/workload/query";
import { QueryGetAllHistoryEraResponse } from "./types/enreach/workload/query";
import { MsgSubmitWorkreports } from "./types/enreach/workload/tx";
import { QueryGetEpochProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerRPWorkloadByEraResponse } from "./types/enreach/workload/query";
import { QueryGetCheatStatusCRDataResponse } from "./types/enreach/workload/query";
import { Superior } from "./types/enreach/workload/superior";
import { CheatStatusCRData } from "./types/enreach/workload/cheat_status";
import { QueryParamResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEraResponse } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
import { MsgSubmitReputationPointChangeData } from "./types/enreach/workload/tx";
import { QueryGetManagerWRWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetEraLengthRequest } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataResponse } from "./types/enreach/workload/query";
import { MsgCreateSuperiorResponse } from "./types/enreach/workload/tx";
import { Workreport } from "./types/enreach/workload/workreport";
import { QueryGetAllHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetNodeWorkloadRequest } from "./types/enreach/workload/query";
export { QueryGetAllEraCheatStatusProcessDataRequest, QueryGetManagerCSWorkloadRequest, QueryGetManagerCSWorkloadResponse, QueryGetAllEpochProcessDataRequest, QueryGetCheatStatusCRDataRequest, QueryGetWorkreportRequest, QueryGetPendingNextEraResponse, QueryGetAllCheatStatusCRDataByEraResponse, ReputationPointChangeRawDataDB, NodeWorkload, QueryParamsRequest, QueryGetHistoryEpochResponse, EraInfo, CheatStatusCRMapDB, QueryGetCurrentEpochResponse, MsgUpdateSuperior, QueryGetPendingNextEraRequest, EraProcessData, QueryGetNodeWorkloadResponse, QueryGetAllManagerRPWorkloadByEraRequest, ManagerCSWorkload, QueryGetEpochProcessDataRequest, ReputationPointChangeRawData, QueryGetAllCheatStatusCRDataByEraRequest, ManagerWRWorkload, ManagerNodeScoreMap, QueryGetAllManagerCSWorkloadByEraResponse, QueryGetReputationPointChangeDataResponse, QueryGetManagerRPWorkloadResponse, QueryGetAllEraCheatStatusProcessDataResponse, QueryGetManagerWRWorkloadRequest, QueryGetAllManagerWRWorkloadByEpochResponse, QueryGetAllWorkreportByEpochRequest, QueryGetHistoryEraRequest, QueryGetAllReputationPointChangeDataByEraRequest, QueryGetAllWorkreportByEpochResponse, QueryGetSuperiorRequest, QueryParamRequest, QueryGetEpochLengthResponse, QueryGetManagerRPWorkloadRequest, QueryGetWorkreportResponse, QueryGetCurrentEraRequest, QueryGetAllReputationDeltaPointByEraRequest, QueryParamsResponse, QueryGetHistoryEpochRequest, QueryGetEraProcessDataRequest, QueryGetEraCheatStatusProcessDataResponse, ManagerRPWorkload, QueryGetPendingNextEpochResponse, QueryGetAllManagerCSWorkloadByEraRequest, QueryGetAllReputationPointChangeDataByEraResponse, MsgUpdateSuperiorResponse, GenesisState, QueryGetReputationDeltaPointRequest, QueryGetPendingNextEpochRequest, QueryGetSuperiorResponse, QueryGetEraLengthResponse, QueryGetAllReputationDeltaPointByEraResponse, MsgSubmitWorkreportsResponse, CheatStatusCRDB, QueryGetAllManagerWRWorkloadByEpochRequest, QueryGetReputationPointChangeDataRequest, QueryGetEraCheatStatusProcessDataRequest, MsgUpdateParam, MsgSubmitCheatStatusCR, QueryGetAllEpochProcessDataResponse, QueryGetAllHistoryEraRequest, MsgSubmitCheatStatusCRResponse, ReputationDeltaPoint, QueryGetCurrentEraResponse, QueryGetAllEraProcessDataRequest, ReputationPointChangeRawDataMapDB, NodeScore, NodeScoreDB, CheatStatusCR, QueryGetAllNodeWorkloadByEpochRequest, EpochProcessData, QueryGetAllNodeWorkloadByEpochResponse, EpochInfo, MsgCreateSuperior, QueryGetEpochLengthRequest, QueryGetAllEraProcessDataResponse, QueryGetAllHistoryEpochResponse, QueryGetReputationDeltaPointResponse, ReputationPointChangeData, MsgUpdateParamResponse, MsgSubmitReputationPointChangeDataResponse, EraCheatStatusProcessData, QueryGetCurrentEpochRequest, QueryGetAllHistoryEraResponse, MsgSubmitWorkreports, QueryGetEpochProcessDataResponse, QueryGetAllManagerRPWorkloadByEraResponse, QueryGetCheatStatusCRDataResponse, Superior, CheatStatusCRData, QueryParamResponse, QueryGetHistoryEraResponse, Params, MsgSubmitReputationPointChangeData, QueryGetManagerWRWorkloadResponse, QueryGetEraLengthRequest, QueryGetEraProcessDataResponse, MsgCreateSuperiorResponse, Workreport, QueryGetAllHistoryEpochRequest, QueryGetNodeWorkloadRequest };
type sendQueryGetAllEraCheatStatusProcessDataRequestParams = {
    value: QueryGetAllEraCheatStatusProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerCSWorkloadRequestParams = {
    value: QueryGetManagerCSWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerCSWorkloadResponseParams = {
    value: QueryGetManagerCSWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEpochProcessDataRequestParams = {
    value: QueryGetAllEpochProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCheatStatusCRDataRequestParams = {
    value: QueryGetCheatStatusCRDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEraResponseParams = {
    value: QueryGetPendingNextEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllCheatStatusCRDataByEraResponseParams = {
    value: QueryGetAllCheatStatusCRDataByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataDBParams = {
    value: ReputationPointChangeRawDataDB;
    fee?: StdFee;
    memo?: string;
};
type sendNodeWorkloadParams = {
    value: NodeWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
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
type sendCheatStatusCRMapDBParams = {
    value: CheatStatusCRMapDB;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEraRequestParams = {
    value: QueryGetPendingNextEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendEraProcessDataParams = {
    value: EraProcessData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeWorkloadResponseParams = {
    value: QueryGetNodeWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerRPWorkloadByEraRequestParams = {
    value: QueryGetAllManagerRPWorkloadByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendManagerCSWorkloadParams = {
    value: ManagerCSWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochProcessDataRequestParams = {
    value: QueryGetEpochProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataParams = {
    value: ReputationPointChangeRawData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllCheatStatusCRDataByEraRequestParams = {
    value: QueryGetAllCheatStatusCRDataByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendManagerWRWorkloadParams = {
    value: ManagerWRWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendManagerNodeScoreMapParams = {
    value: ManagerNodeScoreMap;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerCSWorkloadByEraResponseParams = {
    value: QueryGetAllManagerCSWorkloadByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointChangeDataResponseParams = {
    value: QueryGetReputationPointChangeDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerRPWorkloadResponseParams = {
    value: QueryGetManagerRPWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraCheatStatusProcessDataResponseParams = {
    value: QueryGetAllEraCheatStatusProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerWRWorkloadRequestParams = {
    value: QueryGetManagerWRWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerWRWorkloadByEpochResponseParams = {
    value: QueryGetAllManagerWRWorkloadByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllWorkreportByEpochRequestParams = {
    value: QueryGetAllWorkreportByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEraRequestParams = {
    value: QueryGetHistoryEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationPointChangeDataByEraRequestParams = {
    value: QueryGetAllReputationPointChangeDataByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllWorkreportByEpochResponseParams = {
    value: QueryGetAllWorkreportByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamRequestParams = {
    value: QueryParamRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerRPWorkloadRequestParams = {
    value: QueryGetManagerRPWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportResponseParams = {
    value: QueryGetWorkreportResponse;
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
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochRequestParams = {
    value: QueryGetHistoryEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraProcessDataRequestParams = {
    value: QueryGetEraProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraCheatStatusProcessDataResponseParams = {
    value: QueryGetEraCheatStatusProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendManagerRPWorkloadParams = {
    value: ManagerRPWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEpochResponseParams = {
    value: QueryGetPendingNextEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerCSWorkloadByEraRequestParams = {
    value: QueryGetAllManagerCSWorkloadByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationPointChangeDataByEraResponseParams = {
    value: QueryGetAllReputationPointChangeDataByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationDeltaPointRequestParams = {
    value: QueryGetReputationDeltaPointRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEpochRequestParams = {
    value: QueryGetPendingNextEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraLengthResponseParams = {
    value: QueryGetEraLengthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationDeltaPointByEraResponseParams = {
    value: QueryGetAllReputationDeltaPointByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCheatStatusCRDBParams = {
    value: CheatStatusCRDB;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerWRWorkloadByEpochRequestParams = {
    value: QueryGetAllManagerWRWorkloadByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointChangeDataRequestParams = {
    value: QueryGetReputationPointChangeDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraCheatStatusProcessDataRequestParams = {
    value: QueryGetEraCheatStatusProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamParams = {
    value: MsgUpdateParam;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitCheatStatusCRParams = {
    value: MsgSubmitCheatStatusCR;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEpochProcessDataResponseParams = {
    value: QueryGetAllEpochProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEraRequestParams = {
    value: QueryGetAllHistoryEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitCheatStatusCRResponseParams = {
    value: MsgSubmitCheatStatusCRResponse;
    fee?: StdFee;
    memo?: string;
};
type sendReputationDeltaPointParams = {
    value: ReputationDeltaPoint;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEraResponseParams = {
    value: QueryGetCurrentEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraProcessDataRequestParams = {
    value: QueryGetAllEraProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataMapDBParams = {
    value: ReputationPointChangeRawDataMapDB;
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
type sendCheatStatusCRParams = {
    value: CheatStatusCR;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllNodeWorkloadByEpochRequestParams = {
    value: QueryGetAllNodeWorkloadByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendEpochProcessDataParams = {
    value: EpochProcessData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllNodeWorkloadByEpochResponseParams = {
    value: QueryGetAllNodeWorkloadByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEpochInfoParams = {
    value: EpochInfo;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraProcessDataResponseParams = {
    value: QueryGetAllEraProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEpochResponseParams = {
    value: QueryGetAllHistoryEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationDeltaPointResponseParams = {
    value: QueryGetReputationDeltaPointResponse;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeDataParams = {
    value: ReputationPointChangeData;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamResponseParams = {
    value: MsgUpdateParamResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitReputationPointChangeDataResponseParams = {
    value: MsgSubmitReputationPointChangeDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEraCheatStatusProcessDataParams = {
    value: EraCheatStatusProcessData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEraResponseParams = {
    value: QueryGetAllHistoryEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochProcessDataResponseParams = {
    value: QueryGetEpochProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerRPWorkloadByEraResponseParams = {
    value: QueryGetAllManagerRPWorkloadByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCheatStatusCRDataResponseParams = {
    value: QueryGetCheatStatusCRDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendCheatStatusCRDataParams = {
    value: CheatStatusCRData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamResponseParams = {
    value: QueryParamResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEraResponseParams = {
    value: QueryGetHistoryEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitReputationPointChangeDataParams = {
    value: MsgSubmitReputationPointChangeData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerWRWorkloadResponseParams = {
    value: QueryGetManagerWRWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraLengthRequestParams = {
    value: QueryGetEraLengthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraProcessDataResponseParams = {
    value: QueryGetEraProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendWorkreportParams = {
    value: Workreport;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEpochRequestParams = {
    value: QueryGetAllHistoryEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeWorkloadRequestParams = {
    value: QueryGetNodeWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type queryGetAllEraCheatStatusProcessDataRequestParams = {
    value: QueryGetAllEraCheatStatusProcessDataRequest;
};
type queryGetManagerCsworkloadRequestParams = {
    value: QueryGetManagerCSWorkloadRequest;
};
type queryGetManagerCsworkloadResponseParams = {
    value: QueryGetManagerCSWorkloadResponse;
};
type queryGetAllEpochProcessDataRequestParams = {
    value: QueryGetAllEpochProcessDataRequest;
};
type queryGetCheatStatusCrdataRequestParams = {
    value: QueryGetCheatStatusCRDataRequest;
};
type queryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
};
type queryGetPendingNextEraResponseParams = {
    value: QueryGetPendingNextEraResponse;
};
type queryGetAllCheatStatusCrdataByEraResponseParams = {
    value: QueryGetAllCheatStatusCRDataByEraResponse;
};
type reputationPointChangeRawDataDbParams = {
    value: ReputationPointChangeRawDataDB;
};
type nodeWorkloadParams = {
    value: NodeWorkload;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetHistoryEpochResponseParams = {
    value: QueryGetHistoryEpochResponse;
};
type eraInfoParams = {
    value: EraInfo;
};
type cheatStatusCrmapDbParams = {
    value: CheatStatusCRMapDB;
};
type queryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type queryGetPendingNextEraRequestParams = {
    value: QueryGetPendingNextEraRequest;
};
type eraProcessDataParams = {
    value: EraProcessData;
};
type queryGetNodeWorkloadResponseParams = {
    value: QueryGetNodeWorkloadResponse;
};
type queryGetAllManagerRpworkloadByEraRequestParams = {
    value: QueryGetAllManagerRPWorkloadByEraRequest;
};
type managerCsworkloadParams = {
    value: ManagerCSWorkload;
};
type queryGetEpochProcessDataRequestParams = {
    value: QueryGetEpochProcessDataRequest;
};
type reputationPointChangeRawDataParams = {
    value: ReputationPointChangeRawData;
};
type queryGetAllCheatStatusCrdataByEraRequestParams = {
    value: QueryGetAllCheatStatusCRDataByEraRequest;
};
type managerWrworkloadParams = {
    value: ManagerWRWorkload;
};
type managerNodeScoreMapParams = {
    value: ManagerNodeScoreMap;
};
type queryGetAllManagerCsworkloadByEraResponseParams = {
    value: QueryGetAllManagerCSWorkloadByEraResponse;
};
type queryGetReputationPointChangeDataResponseParams = {
    value: QueryGetReputationPointChangeDataResponse;
};
type queryGetManagerRpworkloadResponseParams = {
    value: QueryGetManagerRPWorkloadResponse;
};
type queryGetAllEraCheatStatusProcessDataResponseParams = {
    value: QueryGetAllEraCheatStatusProcessDataResponse;
};
type queryGetManagerWrworkloadRequestParams = {
    value: QueryGetManagerWRWorkloadRequest;
};
type queryGetAllManagerWrworkloadByEpochResponseParams = {
    value: QueryGetAllManagerWRWorkloadByEpochResponse;
};
type queryGetAllWorkreportByEpochRequestParams = {
    value: QueryGetAllWorkreportByEpochRequest;
};
type queryGetHistoryEraRequestParams = {
    value: QueryGetHistoryEraRequest;
};
type queryGetAllReputationPointChangeDataByEraRequestParams = {
    value: QueryGetAllReputationPointChangeDataByEraRequest;
};
type queryGetAllWorkreportByEpochResponseParams = {
    value: QueryGetAllWorkreportByEpochResponse;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
type queryParamRequestParams = {
    value: QueryParamRequest;
};
type queryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
};
type queryGetManagerRpworkloadRequestParams = {
    value: QueryGetManagerRPWorkloadRequest;
};
type queryGetWorkreportResponseParams = {
    value: QueryGetWorkreportResponse;
};
type queryGetCurrentEraRequestParams = {
    value: QueryGetCurrentEraRequest;
};
type queryGetAllReputationDeltaPointByEraRequestParams = {
    value: QueryGetAllReputationDeltaPointByEraRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetHistoryEpochRequestParams = {
    value: QueryGetHistoryEpochRequest;
};
type queryGetEraProcessDataRequestParams = {
    value: QueryGetEraProcessDataRequest;
};
type queryGetEraCheatStatusProcessDataResponseParams = {
    value: QueryGetEraCheatStatusProcessDataResponse;
};
type managerRpworkloadParams = {
    value: ManagerRPWorkload;
};
type queryGetPendingNextEpochResponseParams = {
    value: QueryGetPendingNextEpochResponse;
};
type queryGetAllManagerCsworkloadByEraRequestParams = {
    value: QueryGetAllManagerCSWorkloadByEraRequest;
};
type queryGetAllReputationPointChangeDataByEraResponseParams = {
    value: QueryGetAllReputationPointChangeDataByEraResponse;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryGetReputationDeltaPointRequestParams = {
    value: QueryGetReputationDeltaPointRequest;
};
type queryGetPendingNextEpochRequestParams = {
    value: QueryGetPendingNextEpochRequest;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type queryGetEraLengthResponseParams = {
    value: QueryGetEraLengthResponse;
};
type queryGetAllReputationDeltaPointByEraResponseParams = {
    value: QueryGetAllReputationDeltaPointByEraResponse;
};
type msgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
};
type cheatStatusCrdbParams = {
    value: CheatStatusCRDB;
};
type queryGetAllManagerWrworkloadByEpochRequestParams = {
    value: QueryGetAllManagerWRWorkloadByEpochRequest;
};
type queryGetReputationPointChangeDataRequestParams = {
    value: QueryGetReputationPointChangeDataRequest;
};
type queryGetEraCheatStatusProcessDataRequestParams = {
    value: QueryGetEraCheatStatusProcessDataRequest;
};
type msgUpdateParamParams = {
    value: MsgUpdateParam;
};
type msgSubmitCheatStatusCrParams = {
    value: MsgSubmitCheatStatusCR;
};
type queryGetAllEpochProcessDataResponseParams = {
    value: QueryGetAllEpochProcessDataResponse;
};
type queryGetAllHistoryEraRequestParams = {
    value: QueryGetAllHistoryEraRequest;
};
type msgSubmitCheatStatusCrresponseParams = {
    value: MsgSubmitCheatStatusCRResponse;
};
type reputationDeltaPointParams = {
    value: ReputationDeltaPoint;
};
type queryGetCurrentEraResponseParams = {
    value: QueryGetCurrentEraResponse;
};
type queryGetAllEraProcessDataRequestParams = {
    value: QueryGetAllEraProcessDataRequest;
};
type reputationPointChangeRawDataMapDbParams = {
    value: ReputationPointChangeRawDataMapDB;
};
type nodeScoreParams = {
    value: NodeScore;
};
type nodeScoreDbParams = {
    value: NodeScoreDB;
};
type cheatStatusCrParams = {
    value: CheatStatusCR;
};
type queryGetAllNodeWorkloadByEpochRequestParams = {
    value: QueryGetAllNodeWorkloadByEpochRequest;
};
type epochProcessDataParams = {
    value: EpochProcessData;
};
type queryGetAllNodeWorkloadByEpochResponseParams = {
    value: QueryGetAllNodeWorkloadByEpochResponse;
};
type epochInfoParams = {
    value: EpochInfo;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type queryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
};
type queryGetAllEraProcessDataResponseParams = {
    value: QueryGetAllEraProcessDataResponse;
};
type queryGetAllHistoryEpochResponseParams = {
    value: QueryGetAllHistoryEpochResponse;
};
type queryGetReputationDeltaPointResponseParams = {
    value: QueryGetReputationDeltaPointResponse;
};
type reputationPointChangeDataParams = {
    value: ReputationPointChangeData;
};
type msgUpdateParamResponseParams = {
    value: MsgUpdateParamResponse;
};
type msgSubmitReputationPointChangeDataResponseParams = {
    value: MsgSubmitReputationPointChangeDataResponse;
};
type eraCheatStatusProcessDataParams = {
    value: EraCheatStatusProcessData;
};
type queryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
};
type queryGetAllHistoryEraResponseParams = {
    value: QueryGetAllHistoryEraResponse;
};
type msgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
};
type queryGetEpochProcessDataResponseParams = {
    value: QueryGetEpochProcessDataResponse;
};
type queryGetAllManagerRpworkloadByEraResponseParams = {
    value: QueryGetAllManagerRPWorkloadByEraResponse;
};
type queryGetCheatStatusCrdataResponseParams = {
    value: QueryGetCheatStatusCRDataResponse;
};
type superiorParams = {
    value: Superior;
};
type cheatStatusCrdataParams = {
    value: CheatStatusCRData;
};
type queryParamResponseParams = {
    value: QueryParamResponse;
};
type queryGetHistoryEraResponseParams = {
    value: QueryGetHistoryEraResponse;
};
type paramsParams = {
    value: Params;
};
type msgSubmitReputationPointChangeDataParams = {
    value: MsgSubmitReputationPointChangeData;
};
type queryGetManagerWrworkloadResponseParams = {
    value: QueryGetManagerWRWorkloadResponse;
};
type queryGetEraLengthRequestParams = {
    value: QueryGetEraLengthRequest;
};
type queryGetEraProcessDataResponseParams = {
    value: QueryGetEraProcessDataResponse;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type workreportParams = {
    value: Workreport;
};
type queryGetAllHistoryEpochRequestParams = {
    value: QueryGetAllHistoryEpochRequest;
};
type queryGetNodeWorkloadRequestParams = {
    value: QueryGetNodeWorkloadRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryGetAllEraCheatStatusProcessDataRequest({ value, fee, memo }: sendQueryGetAllEraCheatStatusProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerCSWorkloadRequest({ value, fee, memo }: sendQueryGetManagerCSWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerCSWorkloadResponse({ value, fee, memo }: sendQueryGetManagerCSWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEpochProcessDataRequest({ value, fee, memo }: sendQueryGetAllEpochProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetCheatStatusCRDataRequest({ value, fee, memo }: sendQueryGetCheatStatusCRDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportRequest({ value, fee, memo }: sendQueryGetWorkreportRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEraResponse({ value, fee, memo }: sendQueryGetPendingNextEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllCheatStatusCRDataByEraResponse({ value, fee, memo }: sendQueryGetAllCheatStatusCRDataByEraResponseParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawDataDB({ value, fee, memo }: sendReputationPointChangeRawDataDBParams): Promise<DeliverTxResponse>;
    sendNodeWorkload({ value, fee, memo }: sendNodeWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochResponse({ value, fee, memo }: sendQueryGetHistoryEpochResponseParams): Promise<DeliverTxResponse>;
    sendEraInfo({ value, fee, memo }: sendEraInfoParams): Promise<DeliverTxResponse>;
    sendCheatStatusCRMapDB({ value, fee, memo }: sendCheatStatusCRMapDBParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochResponse({ value, fee, memo }: sendQueryGetCurrentEpochResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEraRequest({ value, fee, memo }: sendQueryGetPendingNextEraRequestParams): Promise<DeliverTxResponse>;
    sendEraProcessData({ value, fee, memo }: sendEraProcessDataParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeWorkloadResponse({ value, fee, memo }: sendQueryGetNodeWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerRPWorkloadByEraRequest({ value, fee, memo }: sendQueryGetAllManagerRPWorkloadByEraRequestParams): Promise<DeliverTxResponse>;
    sendManagerCSWorkload({ value, fee, memo }: sendManagerCSWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochProcessDataRequest({ value, fee, memo }: sendQueryGetEpochProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawData({ value, fee, memo }: sendReputationPointChangeRawDataParams): Promise<DeliverTxResponse>;
    sendQueryGetAllCheatStatusCRDataByEraRequest({ value, fee, memo }: sendQueryGetAllCheatStatusCRDataByEraRequestParams): Promise<DeliverTxResponse>;
    sendManagerWRWorkload({ value, fee, memo }: sendManagerWRWorkloadParams): Promise<DeliverTxResponse>;
    sendManagerNodeScoreMap({ value, fee, memo }: sendManagerNodeScoreMapParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerCSWorkloadByEraResponse({ value, fee, memo }: sendQueryGetAllManagerCSWorkloadByEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointChangeDataResponse({ value, fee, memo }: sendQueryGetReputationPointChangeDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRPWorkloadResponse({ value, fee, memo }: sendQueryGetManagerRPWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraCheatStatusProcessDataResponse({ value, fee, memo }: sendQueryGetAllEraCheatStatusProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerWRWorkloadRequest({ value, fee, memo }: sendQueryGetManagerWRWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerWRWorkloadByEpochResponse({ value, fee, memo }: sendQueryGetAllManagerWRWorkloadByEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochRequest({ value, fee, memo }: sendQueryGetAllWorkreportByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEraRequest({ value, fee, memo }: sendQueryGetHistoryEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointChangeDataByEraRequest({ value, fee, memo }: sendQueryGetAllReputationPointChangeDataByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochResponse({ value, fee, memo }: sendQueryGetAllWorkreportByEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamRequest({ value, fee, memo }: sendQueryParamRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthResponse({ value, fee, memo }: sendQueryGetEpochLengthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRPWorkloadRequest({ value, fee, memo }: sendQueryGetManagerRPWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportResponse({ value, fee, memo }: sendQueryGetWorkreportResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEraRequest({ value, fee, memo }: sendQueryGetCurrentEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationDeltaPointByEraRequest({ value, fee, memo }: sendQueryGetAllReputationDeltaPointByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochRequest({ value, fee, memo }: sendQueryGetHistoryEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEraProcessDataRequest({ value, fee, memo }: sendQueryGetEraProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEraCheatStatusProcessDataResponse({ value, fee, memo }: sendQueryGetEraCheatStatusProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendManagerRPWorkload({ value, fee, memo }: sendManagerRPWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEpochResponse({ value, fee, memo }: sendQueryGetPendingNextEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerCSWorkloadByEraRequest({ value, fee, memo }: sendQueryGetAllManagerCSWorkloadByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointChangeDataByEraResponse({ value, fee, memo }: sendQueryGetAllReputationPointChangeDataByEraResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationDeltaPointRequest({ value, fee, memo }: sendQueryGetReputationDeltaPointRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEpochRequest({ value, fee, memo }: sendQueryGetPendingNextEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEraLengthResponse({ value, fee, memo }: sendQueryGetEraLengthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationDeltaPointByEraResponse({ value, fee, memo }: sendQueryGetAllReputationDeltaPointByEraResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreportsResponse({ value, fee, memo }: sendMsgSubmitWorkreportsResponseParams): Promise<DeliverTxResponse>;
    sendCheatStatusCRDB({ value, fee, memo }: sendCheatStatusCRDBParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerWRWorkloadByEpochRequest({ value, fee, memo }: sendQueryGetAllManagerWRWorkloadByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointChangeDataRequest({ value, fee, memo }: sendQueryGetReputationPointChangeDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEraCheatStatusProcessDataRequest({ value, fee, memo }: sendQueryGetEraCheatStatusProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParam({ value, fee, memo }: sendMsgUpdateParamParams): Promise<DeliverTxResponse>;
    sendMsgSubmitCheatStatusCR({ value, fee, memo }: sendMsgSubmitCheatStatusCRParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEpochProcessDataResponse({ value, fee, memo }: sendQueryGetAllEpochProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEraRequest({ value, fee, memo }: sendQueryGetAllHistoryEraRequestParams): Promise<DeliverTxResponse>;
    sendMsgSubmitCheatStatusCRResponse({ value, fee, memo }: sendMsgSubmitCheatStatusCRResponseParams): Promise<DeliverTxResponse>;
    sendReputationDeltaPoint({ value, fee, memo }: sendReputationDeltaPointParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEraResponse({ value, fee, memo }: sendQueryGetCurrentEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraProcessDataRequest({ value, fee, memo }: sendQueryGetAllEraProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawDataMapDB({ value, fee, memo }: sendReputationPointChangeRawDataMapDBParams): Promise<DeliverTxResponse>;
    sendNodeScore({ value, fee, memo }: sendNodeScoreParams): Promise<DeliverTxResponse>;
    sendNodeScoreDB({ value, fee, memo }: sendNodeScoreDBParams): Promise<DeliverTxResponse>;
    sendCheatStatusCR({ value, fee, memo }: sendCheatStatusCRParams): Promise<DeliverTxResponse>;
    sendQueryGetAllNodeWorkloadByEpochRequest({ value, fee, memo }: sendQueryGetAllNodeWorkloadByEpochRequestParams): Promise<DeliverTxResponse>;
    sendEpochProcessData({ value, fee, memo }: sendEpochProcessDataParams): Promise<DeliverTxResponse>;
    sendQueryGetAllNodeWorkloadByEpochResponse({ value, fee, memo }: sendQueryGetAllNodeWorkloadByEpochResponseParams): Promise<DeliverTxResponse>;
    sendEpochInfo({ value, fee, memo }: sendEpochInfoParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthRequest({ value, fee, memo }: sendQueryGetEpochLengthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraProcessDataResponse({ value, fee, memo }: sendQueryGetAllEraProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEpochResponse({ value, fee, memo }: sendQueryGetAllHistoryEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationDeltaPointResponse({ value, fee, memo }: sendQueryGetReputationDeltaPointResponseParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeData({ value, fee, memo }: sendReputationPointChangeDataParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamResponse({ value, fee, memo }: sendMsgUpdateParamResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitReputationPointChangeDataResponse({ value, fee, memo }: sendMsgSubmitReputationPointChangeDataResponseParams): Promise<DeliverTxResponse>;
    sendEraCheatStatusProcessData({ value, fee, memo }: sendEraCheatStatusProcessDataParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochRequest({ value, fee, memo }: sendQueryGetCurrentEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEraResponse({ value, fee, memo }: sendQueryGetAllHistoryEraResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreports({ value, fee, memo }: sendMsgSubmitWorkreportsParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochProcessDataResponse({ value, fee, memo }: sendQueryGetEpochProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerRPWorkloadByEraResponse({ value, fee, memo }: sendQueryGetAllManagerRPWorkloadByEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetCheatStatusCRDataResponse({ value, fee, memo }: sendQueryGetCheatStatusCRDataResponseParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendCheatStatusCRData({ value, fee, memo }: sendCheatStatusCRDataParams): Promise<DeliverTxResponse>;
    sendQueryParamResponse({ value, fee, memo }: sendQueryParamResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEraResponse({ value, fee, memo }: sendQueryGetHistoryEraResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgSubmitReputationPointChangeData({ value, fee, memo }: sendMsgSubmitReputationPointChangeDataParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerWRWorkloadResponse({ value, fee, memo }: sendQueryGetManagerWRWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEraLengthRequest({ value, fee, memo }: sendQueryGetEraLengthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEraProcessDataResponse({ value, fee, memo }: sendQueryGetEraProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendWorkreport({ value, fee, memo }: sendWorkreportParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEpochRequest({ value, fee, memo }: sendQueryGetAllHistoryEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeWorkloadRequest({ value, fee, memo }: sendQueryGetNodeWorkloadRequestParams): Promise<DeliverTxResponse>;
    queryGetAllEraCheatStatusProcessDataRequest({ value }: queryGetAllEraCheatStatusProcessDataRequestParams): EncodeObject;
    queryGetManagerCsworkloadRequest({ value }: queryGetManagerCsworkloadRequestParams): EncodeObject;
    queryGetManagerCsworkloadResponse({ value }: queryGetManagerCsworkloadResponseParams): EncodeObject;
    queryGetAllEpochProcessDataRequest({ value }: queryGetAllEpochProcessDataRequestParams): EncodeObject;
    queryGetCheatStatusCrdataRequest({ value }: queryGetCheatStatusCrdataRequestParams): EncodeObject;
    queryGetWorkreportRequest({ value }: queryGetWorkreportRequestParams): EncodeObject;
    queryGetPendingNextEraResponse({ value }: queryGetPendingNextEraResponseParams): EncodeObject;
    queryGetAllCheatStatusCrdataByEraResponse({ value }: queryGetAllCheatStatusCrdataByEraResponseParams): EncodeObject;
    reputationPointChangeRawDataDb({ value }: reputationPointChangeRawDataDbParams): EncodeObject;
    nodeWorkload({ value }: nodeWorkloadParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetHistoryEpochResponse({ value }: queryGetHistoryEpochResponseParams): EncodeObject;
    eraInfo({ value }: eraInfoParams): EncodeObject;
    cheatStatusCrmapDb({ value }: cheatStatusCrmapDbParams): EncodeObject;
    queryGetCurrentEpochResponse({ value }: queryGetCurrentEpochResponseParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    queryGetPendingNextEraRequest({ value }: queryGetPendingNextEraRequestParams): EncodeObject;
    eraProcessData({ value }: eraProcessDataParams): EncodeObject;
    queryGetNodeWorkloadResponse({ value }: queryGetNodeWorkloadResponseParams): EncodeObject;
    queryGetAllManagerRpworkloadByEraRequest({ value }: queryGetAllManagerRpworkloadByEraRequestParams): EncodeObject;
    managerCsworkload({ value }: managerCsworkloadParams): EncodeObject;
    queryGetEpochProcessDataRequest({ value }: queryGetEpochProcessDataRequestParams): EncodeObject;
    reputationPointChangeRawData({ value }: reputationPointChangeRawDataParams): EncodeObject;
    queryGetAllCheatStatusCrdataByEraRequest({ value }: queryGetAllCheatStatusCrdataByEraRequestParams): EncodeObject;
    managerWrworkload({ value }: managerWrworkloadParams): EncodeObject;
    managerNodeScoreMap({ value }: managerNodeScoreMapParams): EncodeObject;
    queryGetAllManagerCsworkloadByEraResponse({ value }: queryGetAllManagerCsworkloadByEraResponseParams): EncodeObject;
    queryGetReputationPointChangeDataResponse({ value }: queryGetReputationPointChangeDataResponseParams): EncodeObject;
    queryGetManagerRpworkloadResponse({ value }: queryGetManagerRpworkloadResponseParams): EncodeObject;
    queryGetAllEraCheatStatusProcessDataResponse({ value }: queryGetAllEraCheatStatusProcessDataResponseParams): EncodeObject;
    queryGetManagerWrworkloadRequest({ value }: queryGetManagerWrworkloadRequestParams): EncodeObject;
    queryGetAllManagerWrworkloadByEpochResponse({ value }: queryGetAllManagerWrworkloadByEpochResponseParams): EncodeObject;
    queryGetAllWorkreportByEpochRequest({ value }: queryGetAllWorkreportByEpochRequestParams): EncodeObject;
    queryGetHistoryEraRequest({ value }: queryGetHistoryEraRequestParams): EncodeObject;
    queryGetAllReputationPointChangeDataByEraRequest({ value }: queryGetAllReputationPointChangeDataByEraRequestParams): EncodeObject;
    queryGetAllWorkreportByEpochResponse({ value }: queryGetAllWorkreportByEpochResponseParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
    queryParamRequest({ value }: queryParamRequestParams): EncodeObject;
    queryGetEpochLengthResponse({ value }: queryGetEpochLengthResponseParams): EncodeObject;
    queryGetManagerRpworkloadRequest({ value }: queryGetManagerRpworkloadRequestParams): EncodeObject;
    queryGetWorkreportResponse({ value }: queryGetWorkreportResponseParams): EncodeObject;
    queryGetCurrentEraRequest({ value }: queryGetCurrentEraRequestParams): EncodeObject;
    queryGetAllReputationDeltaPointByEraRequest({ value }: queryGetAllReputationDeltaPointByEraRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetHistoryEpochRequest({ value }: queryGetHistoryEpochRequestParams): EncodeObject;
    queryGetEraProcessDataRequest({ value }: queryGetEraProcessDataRequestParams): EncodeObject;
    queryGetEraCheatStatusProcessDataResponse({ value }: queryGetEraCheatStatusProcessDataResponseParams): EncodeObject;
    managerRpworkload({ value }: managerRpworkloadParams): EncodeObject;
    queryGetPendingNextEpochResponse({ value }: queryGetPendingNextEpochResponseParams): EncodeObject;
    queryGetAllManagerCsworkloadByEraRequest({ value }: queryGetAllManagerCsworkloadByEraRequestParams): EncodeObject;
    queryGetAllReputationPointChangeDataByEraResponse({ value }: queryGetAllReputationPointChangeDataByEraResponseParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryGetReputationDeltaPointRequest({ value }: queryGetReputationDeltaPointRequestParams): EncodeObject;
    queryGetPendingNextEpochRequest({ value }: queryGetPendingNextEpochRequestParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    queryGetEraLengthResponse({ value }: queryGetEraLengthResponseParams): EncodeObject;
    queryGetAllReputationDeltaPointByEraResponse({ value }: queryGetAllReputationDeltaPointByEraResponseParams): EncodeObject;
    msgSubmitWorkreportsResponse({ value }: msgSubmitWorkreportsResponseParams): EncodeObject;
    cheatStatusCrdb({ value }: cheatStatusCrdbParams): EncodeObject;
    queryGetAllManagerWrworkloadByEpochRequest({ value }: queryGetAllManagerWrworkloadByEpochRequestParams): EncodeObject;
    queryGetReputationPointChangeDataRequest({ value }: queryGetReputationPointChangeDataRequestParams): EncodeObject;
    queryGetEraCheatStatusProcessDataRequest({ value }: queryGetEraCheatStatusProcessDataRequestParams): EncodeObject;
    msgUpdateParam({ value }: msgUpdateParamParams): EncodeObject;
    msgSubmitCheatStatusCr({ value }: msgSubmitCheatStatusCrParams): EncodeObject;
    queryGetAllEpochProcessDataResponse({ value }: queryGetAllEpochProcessDataResponseParams): EncodeObject;
    queryGetAllHistoryEraRequest({ value }: queryGetAllHistoryEraRequestParams): EncodeObject;
    msgSubmitCheatStatusCrresponse({ value }: msgSubmitCheatStatusCrresponseParams): EncodeObject;
    reputationDeltaPoint({ value }: reputationDeltaPointParams): EncodeObject;
    queryGetCurrentEraResponse({ value }: queryGetCurrentEraResponseParams): EncodeObject;
    queryGetAllEraProcessDataRequest({ value }: queryGetAllEraProcessDataRequestParams): EncodeObject;
    reputationPointChangeRawDataMapDb({ value }: reputationPointChangeRawDataMapDbParams): EncodeObject;
    nodeScore({ value }: nodeScoreParams): EncodeObject;
    nodeScoreDb({ value }: nodeScoreDbParams): EncodeObject;
    cheatStatusCr({ value }: cheatStatusCrParams): EncodeObject;
    queryGetAllNodeWorkloadByEpochRequest({ value }: queryGetAllNodeWorkloadByEpochRequestParams): EncodeObject;
    epochProcessData({ value }: epochProcessDataParams): EncodeObject;
    queryGetAllNodeWorkloadByEpochResponse({ value }: queryGetAllNodeWorkloadByEpochResponseParams): EncodeObject;
    epochInfo({ value }: epochInfoParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    queryGetEpochLengthRequest({ value }: queryGetEpochLengthRequestParams): EncodeObject;
    queryGetAllEraProcessDataResponse({ value }: queryGetAllEraProcessDataResponseParams): EncodeObject;
    queryGetAllHistoryEpochResponse({ value }: queryGetAllHistoryEpochResponseParams): EncodeObject;
    queryGetReputationDeltaPointResponse({ value }: queryGetReputationDeltaPointResponseParams): EncodeObject;
    reputationPointChangeData({ value }: reputationPointChangeDataParams): EncodeObject;
    msgUpdateParamResponse({ value }: msgUpdateParamResponseParams): EncodeObject;
    msgSubmitReputationPointChangeDataResponse({ value }: msgSubmitReputationPointChangeDataResponseParams): EncodeObject;
    eraCheatStatusProcessData({ value }: eraCheatStatusProcessDataParams): EncodeObject;
    queryGetCurrentEpochRequest({ value }: queryGetCurrentEpochRequestParams): EncodeObject;
    queryGetAllHistoryEraResponse({ value }: queryGetAllHistoryEraResponseParams): EncodeObject;
    msgSubmitWorkreports({ value }: msgSubmitWorkreportsParams): EncodeObject;
    queryGetEpochProcessDataResponse({ value }: queryGetEpochProcessDataResponseParams): EncodeObject;
    queryGetAllManagerRpworkloadByEraResponse({ value }: queryGetAllManagerRpworkloadByEraResponseParams): EncodeObject;
    queryGetCheatStatusCrdataResponse({ value }: queryGetCheatStatusCrdataResponseParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    cheatStatusCrdata({ value }: cheatStatusCrdataParams): EncodeObject;
    queryParamResponse({ value }: queryParamResponseParams): EncodeObject;
    queryGetHistoryEraResponse({ value }: queryGetHistoryEraResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgSubmitReputationPointChangeData({ value }: msgSubmitReputationPointChangeDataParams): EncodeObject;
    queryGetManagerWrworkloadResponse({ value }: queryGetManagerWrworkloadResponseParams): EncodeObject;
    queryGetEraLengthRequest({ value }: queryGetEraLengthRequestParams): EncodeObject;
    queryGetEraProcessDataResponse({ value }: queryGetEraProcessDataResponseParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    workreport({ value }: workreportParams): EncodeObject;
    queryGetAllHistoryEpochRequest({ value }: queryGetAllHistoryEpochRequestParams): EncodeObject;
    queryGetNodeWorkloadRequest({ value }: queryGetNodeWorkloadRequestParams): EncodeObject;
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
