import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { GenesisState } from "./types/enreach/workload/genesis";
import { MsgSubmitWorkreports } from "./types/enreach/workload/tx";
import { QueryGetAllWorkreportByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetSuperiorRequest } from "./types/enreach/workload/query";
import { QueryGetHistoryEraRequest } from "./types/enreach/workload/query";
import { MsgCreateSuperiorResponse } from "./types/enreach/workload/tx";
import { QueryGetEpochProcessDataRequest } from "./types/enreach/workload/query";
import { NodeScore } from "./types/enreach/workload/workreport";
import { QueryParamResponse } from "./types/enreach/workload/query";
import { QueryGetCurrentEraResponse } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataResponse } from "./types/enreach/workload/query";
import { CheatStatusCRDB } from "./types/enreach/workload/cheat_status";
import { QueryGetAllReputationPointChangeDataByEraRequest } from "./types/enreach/workload/query";
import { QueryGetCheatStatusCRDataResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeRawData } from "./types/enreach/workload/reputationpoint";
import { EraInfo } from "./types/enreach/workload/era_info";
import { NodeWorkload } from "./types/enreach/workload/workload";
import { QueryGetManagerRPWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerCSWorkloadByEraRequest } from "./types/enreach/workload/query";
import { QueryGetEraCheatStatusProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetAllEraCheatStatusProcessDataRequest } from "./types/enreach/workload/query";
import { ReputationDeltaPoint } from "./types/enreach/workload/reputationpoint";
import { EpochInfo } from "./types/enreach/workload/epoch_info";
import { QueryGetAllHistoryEraRequest } from "./types/enreach/workload/query";
import { EraProcessData } from "./types/enreach/workload/reputationpoint";
import { ManagerWRWorkload } from "./types/enreach/workload/workload";
import { QueryGetCurrentEraRequest } from "./types/enreach/workload/query";
import { CheatStatusCR } from "./types/enreach/workload/cheat_status";
import { CheatStatusCRMapDB } from "./types/enreach/workload/cheat_status";
import { QueryGetReputationDeltaPointResponse } from "./types/enreach/workload/query";
import { QueryGetPendingNextEraRequest } from "./types/enreach/workload/query";
import { QueryGetPendingNextEraResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointChangeDataByEraResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraResponse } from "./types/enreach/workload/query";
import { MsgUpdateParamResponse } from "./types/enreach/workload/tx";
import { MsgSubmitWorkreportsResponse } from "./types/enreach/workload/tx";
import { QueryParamRequest } from "./types/enreach/workload/query";
import { NodeScoreDB } from "./types/enreach/workload/workreport";
import { CheatStatusCRData } from "./types/enreach/workload/cheat_status";
import { QueryGetAllCheatStatusCRDataByEraRequest } from "./types/enreach/workload/query";
import { MsgSubmitReputationPointChangeDataResponse } from "./types/enreach/workload/tx";
import { MsgSubmitCheatStatusCRResponse } from "./types/enreach/workload/tx";
import { QueryGetEpochLengthResponse } from "./types/enreach/workload/query";
import { QueryGetWorkreportRequest } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllEraProcessDataRequest } from "./types/enreach/workload/query";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllNodeWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEraResponse } from "./types/enreach/workload/query";
import { QueryGetAllEraProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetNodeWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataResponse } from "./types/enreach/workload/query";
import { MsgUpdateSuperiorResponse } from "./types/enreach/workload/tx";
import { QueryGetPendingNextEpochRequest } from "./types/enreach/workload/query";
import { QueryGetManagerWRWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetEraLengthRequest } from "./types/enreach/workload/query";
import { QueryGetAllHistoryEraResponse } from "./types/enreach/workload/query";
import { MsgCreateSuperior } from "./types/enreach/workload/tx";
import { QueryGetHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetAllManagerRPWorkloadByEraRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerRPWorkloadByEraResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeData } from "./types/enreach/workload/reputationpoint";
import { ManagerNodeScoreMap } from "./types/enreach/workload/workreport";
import { QueryGetCurrentEpochResponse } from "./types/enreach/workload/query";
import { QueryGetPendingNextEpochResponse } from "./types/enreach/workload/query";
import { QueryGetManagerCSWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetSuperiorResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeRawDataMapDB } from "./types/enreach/workload/reputationpoint";
import { QueryGetAllCheatStatusCRDataByEraResponse } from "./types/enreach/workload/query";
import { QueryGetEraCheatStatusProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetAllManagerCSWorkloadByEraResponse } from "./types/enreach/workload/query";
import { QueryGetCheatStatusCRDataRequest } from "./types/enreach/workload/query";
import { QueryGetAllEraCheatStatusProcessDataResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeRawDataDB } from "./types/enreach/workload/reputationpoint";
import { MsgUpdateSuperior } from "./types/enreach/workload/tx";
import { ManagerCSWorkload } from "./types/enreach/workload/workload";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetCurrentEpochRequest } from "./types/enreach/workload/query";
import { QueryGetEraLengthResponse } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataRequest } from "./types/enreach/workload/query";
import { MsgUpdateParam } from "./types/enreach/workload/tx";
import { QueryGetAllHistoryEpochResponse } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataRequest } from "./types/enreach/workload/query";
import { ManagerRPWorkload } from "./types/enreach/workload/workload";
import { QueryGetReputationDeltaPointRequest } from "./types/enreach/workload/query";
import { EpochProcessData } from "./types/enreach/workload/workreport";
import { EraCheatStatusProcessData } from "./types/enreach/workload/cheat_status";
import { QueryGetEpochLengthRequest } from "./types/enreach/workload/query";
import { QueryGetAllManagerWRWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
import { QueryGetNodeWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerWRWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllNodeWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetManagerCSWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataResponse } from "./types/enreach/workload/query";
import { MsgSubmitReputationPointChangeData } from "./types/enreach/workload/tx";
import { MsgSubmitCheatStatusCR } from "./types/enreach/workload/tx";
import { QueryGetManagerRPWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataResponse } from "./types/enreach/workload/query";
import { Superior } from "./types/enreach/workload/superior";
import { QueryGetAllHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetManagerWRWorkloadResponse } from "./types/enreach/workload/query";
import { Workreport } from "./types/enreach/workload/workreport";
export { GenesisState, MsgSubmitWorkreports, QueryGetAllWorkreportByEpochRequest, QueryGetSuperiorRequest, QueryGetHistoryEraRequest, MsgCreateSuperiorResponse, QueryGetEpochProcessDataRequest, NodeScore, QueryParamResponse, QueryGetCurrentEraResponse, QueryGetEraProcessDataResponse, CheatStatusCRDB, QueryGetAllReputationPointChangeDataByEraRequest, QueryGetCheatStatusCRDataResponse, ReputationPointChangeRawData, EraInfo, NodeWorkload, QueryGetManagerRPWorkloadResponse, QueryGetAllManagerCSWorkloadByEraRequest, QueryGetEraCheatStatusProcessDataResponse, QueryGetAllEraCheatStatusProcessDataRequest, ReputationDeltaPoint, EpochInfo, QueryGetAllHistoryEraRequest, EraProcessData, ManagerWRWorkload, QueryGetCurrentEraRequest, CheatStatusCR, CheatStatusCRMapDB, QueryGetReputationDeltaPointResponse, QueryGetPendingNextEraRequest, QueryGetPendingNextEraResponse, QueryGetAllReputationPointChangeDataByEraResponse, QueryGetAllReputationDeltaPointByEraResponse, MsgUpdateParamResponse, MsgSubmitWorkreportsResponse, QueryParamRequest, NodeScoreDB, CheatStatusCRData, QueryGetAllCheatStatusCRDataByEraRequest, MsgSubmitReputationPointChangeDataResponse, MsgSubmitCheatStatusCRResponse, QueryGetEpochLengthResponse, QueryGetWorkreportRequest, QueryGetAllEpochProcessDataRequest, QueryGetAllReputationDeltaPointByEraRequest, QueryGetAllEraProcessDataRequest, QueryParamsResponse, QueryGetHistoryEpochResponse, QueryGetAllNodeWorkloadByEpochResponse, QueryGetHistoryEraResponse, QueryGetAllEraProcessDataResponse, QueryGetNodeWorkloadRequest, QueryGetEpochProcessDataResponse, MsgUpdateSuperiorResponse, QueryGetPendingNextEpochRequest, QueryGetManagerWRWorkloadRequest, QueryGetEraLengthRequest, QueryGetAllHistoryEraResponse, MsgCreateSuperior, QueryGetHistoryEpochRequest, QueryGetAllManagerRPWorkloadByEraRequest, QueryGetWorkreportResponse, QueryGetAllManagerRPWorkloadByEraResponse, ReputationPointChangeData, ManagerNodeScoreMap, QueryGetCurrentEpochResponse, QueryGetPendingNextEpochResponse, QueryGetManagerCSWorkloadResponse, QueryGetAllWorkreportByEpochResponse, QueryGetSuperiorResponse, ReputationPointChangeRawDataMapDB, QueryGetAllCheatStatusCRDataByEraResponse, QueryGetEraCheatStatusProcessDataRequest, QueryGetAllManagerCSWorkloadByEraResponse, QueryGetCheatStatusCRDataRequest, QueryGetAllEraCheatStatusProcessDataResponse, ReputationPointChangeRawDataDB, MsgUpdateSuperior, ManagerCSWorkload, QueryParamsRequest, QueryGetCurrentEpochRequest, QueryGetEraLengthResponse, QueryGetReputationPointChangeDataRequest, MsgUpdateParam, QueryGetAllHistoryEpochResponse, QueryGetEraProcessDataRequest, ManagerRPWorkload, QueryGetReputationDeltaPointRequest, EpochProcessData, EraCheatStatusProcessData, QueryGetEpochLengthRequest, QueryGetAllManagerWRWorkloadByEpochRequest, Params, QueryGetNodeWorkloadResponse, QueryGetAllManagerWRWorkloadByEpochResponse, QueryGetAllNodeWorkloadByEpochRequest, QueryGetManagerCSWorkloadRequest, QueryGetAllEpochProcessDataResponse, MsgSubmitReputationPointChangeData, MsgSubmitCheatStatusCR, QueryGetManagerRPWorkloadRequest, QueryGetReputationPointChangeDataResponse, Superior, QueryGetAllHistoryEpochRequest, QueryGetManagerWRWorkloadResponse, Workreport };
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllWorkreportByEpochRequestParams = {
    value: QueryGetAllWorkreportByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEraRequestParams = {
    value: QueryGetHistoryEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochProcessDataRequestParams = {
    value: QueryGetEpochProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendNodeScoreParams = {
    value: NodeScore;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamResponseParams = {
    value: QueryParamResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEraResponseParams = {
    value: QueryGetCurrentEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraProcessDataResponseParams = {
    value: QueryGetEraProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCheatStatusCRDBParams = {
    value: CheatStatusCRDB;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationPointChangeDataByEraRequestParams = {
    value: QueryGetAllReputationPointChangeDataByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCheatStatusCRDataResponseParams = {
    value: QueryGetCheatStatusCRDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataParams = {
    value: ReputationPointChangeRawData;
    fee?: StdFee;
    memo?: string;
};
type sendEraInfoParams = {
    value: EraInfo;
    fee?: StdFee;
    memo?: string;
};
type sendNodeWorkloadParams = {
    value: NodeWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerRPWorkloadResponseParams = {
    value: QueryGetManagerRPWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerCSWorkloadByEraRequestParams = {
    value: QueryGetAllManagerCSWorkloadByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraCheatStatusProcessDataResponseParams = {
    value: QueryGetEraCheatStatusProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraCheatStatusProcessDataRequestParams = {
    value: QueryGetAllEraCheatStatusProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendReputationDeltaPointParams = {
    value: ReputationDeltaPoint;
    fee?: StdFee;
    memo?: string;
};
type sendEpochInfoParams = {
    value: EpochInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEraRequestParams = {
    value: QueryGetAllHistoryEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendEraProcessDataParams = {
    value: EraProcessData;
    fee?: StdFee;
    memo?: string;
};
type sendManagerWRWorkloadParams = {
    value: ManagerWRWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEraRequestParams = {
    value: QueryGetCurrentEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendCheatStatusCRParams = {
    value: CheatStatusCR;
    fee?: StdFee;
    memo?: string;
};
type sendCheatStatusCRMapDBParams = {
    value: CheatStatusCRMapDB;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationDeltaPointResponseParams = {
    value: QueryGetReputationDeltaPointResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEraRequestParams = {
    value: QueryGetPendingNextEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEraResponseParams = {
    value: QueryGetPendingNextEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationPointChangeDataByEraResponseParams = {
    value: QueryGetAllReputationPointChangeDataByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationDeltaPointByEraResponseParams = {
    value: QueryGetAllReputationDeltaPointByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamResponseParams = {
    value: MsgUpdateParamResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamRequestParams = {
    value: QueryParamRequest;
    fee?: StdFee;
    memo?: string;
};
type sendNodeScoreDBParams = {
    value: NodeScoreDB;
    fee?: StdFee;
    memo?: string;
};
type sendCheatStatusCRDataParams = {
    value: CheatStatusCRData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllCheatStatusCRDataByEraRequestParams = {
    value: QueryGetAllCheatStatusCRDataByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitReputationPointChangeDataResponseParams = {
    value: MsgSubmitReputationPointChangeDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitCheatStatusCRResponseParams = {
    value: MsgSubmitCheatStatusCRResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEpochProcessDataRequestParams = {
    value: QueryGetAllEpochProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllReputationDeltaPointByEraRequestParams = {
    value: QueryGetAllReputationDeltaPointByEraRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraProcessDataRequestParams = {
    value: QueryGetAllEraProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochResponseParams = {
    value: QueryGetHistoryEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllNodeWorkloadByEpochResponseParams = {
    value: QueryGetAllNodeWorkloadByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEraResponseParams = {
    value: QueryGetHistoryEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraProcessDataResponseParams = {
    value: QueryGetAllEraProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeWorkloadRequestParams = {
    value: QueryGetNodeWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochProcessDataResponseParams = {
    value: QueryGetEpochProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEpochRequestParams = {
    value: QueryGetPendingNextEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerWRWorkloadRequestParams = {
    value: QueryGetManagerWRWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraLengthRequestParams = {
    value: QueryGetEraLengthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEraResponseParams = {
    value: QueryGetAllHistoryEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetHistoryEpochRequestParams = {
    value: QueryGetHistoryEpochRequest;
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
type sendQueryGetAllManagerRPWorkloadByEraResponseParams = {
    value: QueryGetAllManagerRPWorkloadByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeDataParams = {
    value: ReputationPointChangeData;
    fee?: StdFee;
    memo?: string;
};
type sendManagerNodeScoreMapParams = {
    value: ManagerNodeScoreMap;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetPendingNextEpochResponseParams = {
    value: QueryGetPendingNextEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerCSWorkloadResponseParams = {
    value: QueryGetManagerCSWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllWorkreportByEpochResponseParams = {
    value: QueryGetAllWorkreportByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataMapDBParams = {
    value: ReputationPointChangeRawDataMapDB;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllCheatStatusCRDataByEraResponseParams = {
    value: QueryGetAllCheatStatusCRDataByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraCheatStatusProcessDataRequestParams = {
    value: QueryGetEraCheatStatusProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerCSWorkloadByEraResponseParams = {
    value: QueryGetAllManagerCSWorkloadByEraResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCheatStatusCRDataRequestParams = {
    value: QueryGetCheatStatusCRDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEraCheatStatusProcessDataResponseParams = {
    value: QueryGetAllEraCheatStatusProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendReputationPointChangeRawDataDBParams = {
    value: ReputationPointChangeRawDataDB;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendManagerCSWorkloadParams = {
    value: ManagerCSWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraLengthResponseParams = {
    value: QueryGetEraLengthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointChangeDataRequestParams = {
    value: QueryGetReputationPointChangeDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamParams = {
    value: MsgUpdateParam;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEpochResponseParams = {
    value: QueryGetAllHistoryEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEraProcessDataRequestParams = {
    value: QueryGetEraProcessDataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendManagerRPWorkloadParams = {
    value: ManagerRPWorkload;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationDeltaPointRequestParams = {
    value: QueryGetReputationDeltaPointRequest;
    fee?: StdFee;
    memo?: string;
};
type sendEpochProcessDataParams = {
    value: EpochProcessData;
    fee?: StdFee;
    memo?: string;
};
type sendEraCheatStatusProcessDataParams = {
    value: EraCheatStatusProcessData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerWRWorkloadByEpochRequestParams = {
    value: QueryGetAllManagerWRWorkloadByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeWorkloadResponseParams = {
    value: QueryGetNodeWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllManagerWRWorkloadByEpochResponseParams = {
    value: QueryGetAllManagerWRWorkloadByEpochResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllNodeWorkloadByEpochRequestParams = {
    value: QueryGetAllNodeWorkloadByEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerCSWorkloadRequestParams = {
    value: QueryGetManagerCSWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllEpochProcessDataResponseParams = {
    value: QueryGetAllEpochProcessDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitReputationPointChangeDataParams = {
    value: MsgSubmitReputationPointChangeData;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitCheatStatusCRParams = {
    value: MsgSubmitCheatStatusCR;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerRPWorkloadRequestParams = {
    value: QueryGetManagerRPWorkloadRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetReputationPointChangeDataResponseParams = {
    value: QueryGetReputationPointChangeDataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetAllHistoryEpochRequestParams = {
    value: QueryGetAllHistoryEpochRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerWRWorkloadResponseParams = {
    value: QueryGetManagerWRWorkloadResponse;
    fee?: StdFee;
    memo?: string;
};
type sendWorkreportParams = {
    value: Workreport;
    fee?: StdFee;
    memo?: string;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgSubmitWorkreportsParams = {
    value: MsgSubmitWorkreports;
};
type queryGetAllWorkreportByEpochRequestParams = {
    value: QueryGetAllWorkreportByEpochRequest;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
type queryGetHistoryEraRequestParams = {
    value: QueryGetHistoryEraRequest;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type queryGetEpochProcessDataRequestParams = {
    value: QueryGetEpochProcessDataRequest;
};
type nodeScoreParams = {
    value: NodeScore;
};
type queryParamResponseParams = {
    value: QueryParamResponse;
};
type queryGetCurrentEraResponseParams = {
    value: QueryGetCurrentEraResponse;
};
type queryGetEraProcessDataResponseParams = {
    value: QueryGetEraProcessDataResponse;
};
type cheatStatusCrdbParams = {
    value: CheatStatusCRDB;
};
type queryGetAllReputationPointChangeDataByEraRequestParams = {
    value: QueryGetAllReputationPointChangeDataByEraRequest;
};
type queryGetCheatStatusCrdataResponseParams = {
    value: QueryGetCheatStatusCRDataResponse;
};
type reputationPointChangeRawDataParams = {
    value: ReputationPointChangeRawData;
};
type eraInfoParams = {
    value: EraInfo;
};
type nodeWorkloadParams = {
    value: NodeWorkload;
};
type queryGetManagerRpworkloadResponseParams = {
    value: QueryGetManagerRPWorkloadResponse;
};
type queryGetAllManagerCsworkloadByEraRequestParams = {
    value: QueryGetAllManagerCSWorkloadByEraRequest;
};
type queryGetEraCheatStatusProcessDataResponseParams = {
    value: QueryGetEraCheatStatusProcessDataResponse;
};
type queryGetAllEraCheatStatusProcessDataRequestParams = {
    value: QueryGetAllEraCheatStatusProcessDataRequest;
};
type reputationDeltaPointParams = {
    value: ReputationDeltaPoint;
};
type epochInfoParams = {
    value: EpochInfo;
};
type queryGetAllHistoryEraRequestParams = {
    value: QueryGetAllHistoryEraRequest;
};
type eraProcessDataParams = {
    value: EraProcessData;
};
type managerWrworkloadParams = {
    value: ManagerWRWorkload;
};
type queryGetCurrentEraRequestParams = {
    value: QueryGetCurrentEraRequest;
};
type cheatStatusCrParams = {
    value: CheatStatusCR;
};
type cheatStatusCrmapDbParams = {
    value: CheatStatusCRMapDB;
};
type queryGetReputationDeltaPointResponseParams = {
    value: QueryGetReputationDeltaPointResponse;
};
type queryGetPendingNextEraRequestParams = {
    value: QueryGetPendingNextEraRequest;
};
type queryGetPendingNextEraResponseParams = {
    value: QueryGetPendingNextEraResponse;
};
type queryGetAllReputationPointChangeDataByEraResponseParams = {
    value: QueryGetAllReputationPointChangeDataByEraResponse;
};
type queryGetAllReputationDeltaPointByEraResponseParams = {
    value: QueryGetAllReputationDeltaPointByEraResponse;
};
type msgUpdateParamResponseParams = {
    value: MsgUpdateParamResponse;
};
type msgSubmitWorkreportsResponseParams = {
    value: MsgSubmitWorkreportsResponse;
};
type queryParamRequestParams = {
    value: QueryParamRequest;
};
type nodeScoreDbParams = {
    value: NodeScoreDB;
};
type cheatStatusCrdataParams = {
    value: CheatStatusCRData;
};
type queryGetAllCheatStatusCrdataByEraRequestParams = {
    value: QueryGetAllCheatStatusCRDataByEraRequest;
};
type msgSubmitReputationPointChangeDataResponseParams = {
    value: MsgSubmitReputationPointChangeDataResponse;
};
type msgSubmitCheatStatusCrresponseParams = {
    value: MsgSubmitCheatStatusCRResponse;
};
type queryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
};
type queryGetWorkreportRequestParams = {
    value: QueryGetWorkreportRequest;
};
type queryGetAllEpochProcessDataRequestParams = {
    value: QueryGetAllEpochProcessDataRequest;
};
type queryGetAllReputationDeltaPointByEraRequestParams = {
    value: QueryGetAllReputationDeltaPointByEraRequest;
};
type queryGetAllEraProcessDataRequestParams = {
    value: QueryGetAllEraProcessDataRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetHistoryEpochResponseParams = {
    value: QueryGetHistoryEpochResponse;
};
type queryGetAllNodeWorkloadByEpochResponseParams = {
    value: QueryGetAllNodeWorkloadByEpochResponse;
};
type queryGetHistoryEraResponseParams = {
    value: QueryGetHistoryEraResponse;
};
type queryGetAllEraProcessDataResponseParams = {
    value: QueryGetAllEraProcessDataResponse;
};
type queryGetNodeWorkloadRequestParams = {
    value: QueryGetNodeWorkloadRequest;
};
type queryGetEpochProcessDataResponseParams = {
    value: QueryGetEpochProcessDataResponse;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type queryGetPendingNextEpochRequestParams = {
    value: QueryGetPendingNextEpochRequest;
};
type queryGetManagerWrworkloadRequestParams = {
    value: QueryGetManagerWRWorkloadRequest;
};
type queryGetEraLengthRequestParams = {
    value: QueryGetEraLengthRequest;
};
type queryGetAllHistoryEraResponseParams = {
    value: QueryGetAllHistoryEraResponse;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type queryGetHistoryEpochRequestParams = {
    value: QueryGetHistoryEpochRequest;
};
type queryGetAllManagerRpworkloadByEraRequestParams = {
    value: QueryGetAllManagerRPWorkloadByEraRequest;
};
type queryGetWorkreportResponseParams = {
    value: QueryGetWorkreportResponse;
};
type queryGetAllManagerRpworkloadByEraResponseParams = {
    value: QueryGetAllManagerRPWorkloadByEraResponse;
};
type reputationPointChangeDataParams = {
    value: ReputationPointChangeData;
};
type managerNodeScoreMapParams = {
    value: ManagerNodeScoreMap;
};
type queryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
};
type queryGetPendingNextEpochResponseParams = {
    value: QueryGetPendingNextEpochResponse;
};
type queryGetManagerCsworkloadResponseParams = {
    value: QueryGetManagerCSWorkloadResponse;
};
type queryGetAllWorkreportByEpochResponseParams = {
    value: QueryGetAllWorkreportByEpochResponse;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type reputationPointChangeRawDataMapDbParams = {
    value: ReputationPointChangeRawDataMapDB;
};
type queryGetAllCheatStatusCrdataByEraResponseParams = {
    value: QueryGetAllCheatStatusCRDataByEraResponse;
};
type queryGetEraCheatStatusProcessDataRequestParams = {
    value: QueryGetEraCheatStatusProcessDataRequest;
};
type queryGetAllManagerCsworkloadByEraResponseParams = {
    value: QueryGetAllManagerCSWorkloadByEraResponse;
};
type queryGetCheatStatusCrdataRequestParams = {
    value: QueryGetCheatStatusCRDataRequest;
};
type queryGetAllEraCheatStatusProcessDataResponseParams = {
    value: QueryGetAllEraCheatStatusProcessDataResponse;
};
type reputationPointChangeRawDataDbParams = {
    value: ReputationPointChangeRawDataDB;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type managerCsworkloadParams = {
    value: ManagerCSWorkload;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
};
type queryGetEraLengthResponseParams = {
    value: QueryGetEraLengthResponse;
};
type queryGetReputationPointChangeDataRequestParams = {
    value: QueryGetReputationPointChangeDataRequest;
};
type msgUpdateParamParams = {
    value: MsgUpdateParam;
};
type queryGetAllHistoryEpochResponseParams = {
    value: QueryGetAllHistoryEpochResponse;
};
type queryGetEraProcessDataRequestParams = {
    value: QueryGetEraProcessDataRequest;
};
type managerRpworkloadParams = {
    value: ManagerRPWorkload;
};
type queryGetReputationDeltaPointRequestParams = {
    value: QueryGetReputationDeltaPointRequest;
};
type epochProcessDataParams = {
    value: EpochProcessData;
};
type eraCheatStatusProcessDataParams = {
    value: EraCheatStatusProcessData;
};
type queryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
};
type queryGetAllManagerWrworkloadByEpochRequestParams = {
    value: QueryGetAllManagerWRWorkloadByEpochRequest;
};
type paramsParams = {
    value: Params;
};
type queryGetNodeWorkloadResponseParams = {
    value: QueryGetNodeWorkloadResponse;
};
type queryGetAllManagerWrworkloadByEpochResponseParams = {
    value: QueryGetAllManagerWRWorkloadByEpochResponse;
};
type queryGetAllNodeWorkloadByEpochRequestParams = {
    value: QueryGetAllNodeWorkloadByEpochRequest;
};
type queryGetManagerCsworkloadRequestParams = {
    value: QueryGetManagerCSWorkloadRequest;
};
type queryGetAllEpochProcessDataResponseParams = {
    value: QueryGetAllEpochProcessDataResponse;
};
type msgSubmitReputationPointChangeDataParams = {
    value: MsgSubmitReputationPointChangeData;
};
type msgSubmitCheatStatusCrParams = {
    value: MsgSubmitCheatStatusCR;
};
type queryGetManagerRpworkloadRequestParams = {
    value: QueryGetManagerRPWorkloadRequest;
};
type queryGetReputationPointChangeDataResponseParams = {
    value: QueryGetReputationPointChangeDataResponse;
};
type superiorParams = {
    value: Superior;
};
type queryGetAllHistoryEpochRequestParams = {
    value: QueryGetAllHistoryEpochRequest;
};
type queryGetManagerWrworkloadResponseParams = {
    value: QueryGetManagerWRWorkloadResponse;
};
type workreportParams = {
    value: Workreport;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreports({ value, fee, memo }: sendMsgSubmitWorkreportsParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochRequest({ value, fee, memo }: sendQueryGetAllWorkreportByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEraRequest({ value, fee, memo }: sendQueryGetHistoryEraRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochProcessDataRequest({ value, fee, memo }: sendQueryGetEpochProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendNodeScore({ value, fee, memo }: sendNodeScoreParams): Promise<DeliverTxResponse>;
    sendQueryParamResponse({ value, fee, memo }: sendQueryParamResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEraResponse({ value, fee, memo }: sendQueryGetCurrentEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEraProcessDataResponse({ value, fee, memo }: sendQueryGetEraProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendCheatStatusCRDB({ value, fee, memo }: sendCheatStatusCRDBParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointChangeDataByEraRequest({ value, fee, memo }: sendQueryGetAllReputationPointChangeDataByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetCheatStatusCRDataResponse({ value, fee, memo }: sendQueryGetCheatStatusCRDataResponseParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawData({ value, fee, memo }: sendReputationPointChangeRawDataParams): Promise<DeliverTxResponse>;
    sendEraInfo({ value, fee, memo }: sendEraInfoParams): Promise<DeliverTxResponse>;
    sendNodeWorkload({ value, fee, memo }: sendNodeWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRPWorkloadResponse({ value, fee, memo }: sendQueryGetManagerRPWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerCSWorkloadByEraRequest({ value, fee, memo }: sendQueryGetAllManagerCSWorkloadByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEraCheatStatusProcessDataResponse({ value, fee, memo }: sendQueryGetEraCheatStatusProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraCheatStatusProcessDataRequest({ value, fee, memo }: sendQueryGetAllEraCheatStatusProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendReputationDeltaPoint({ value, fee, memo }: sendReputationDeltaPointParams): Promise<DeliverTxResponse>;
    sendEpochInfo({ value, fee, memo }: sendEpochInfoParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEraRequest({ value, fee, memo }: sendQueryGetAllHistoryEraRequestParams): Promise<DeliverTxResponse>;
    sendEraProcessData({ value, fee, memo }: sendEraProcessDataParams): Promise<DeliverTxResponse>;
    sendManagerWRWorkload({ value, fee, memo }: sendManagerWRWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEraRequest({ value, fee, memo }: sendQueryGetCurrentEraRequestParams): Promise<DeliverTxResponse>;
    sendCheatStatusCR({ value, fee, memo }: sendCheatStatusCRParams): Promise<DeliverTxResponse>;
    sendCheatStatusCRMapDB({ value, fee, memo }: sendCheatStatusCRMapDBParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationDeltaPointResponse({ value, fee, memo }: sendQueryGetReputationDeltaPointResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEraRequest({ value, fee, memo }: sendQueryGetPendingNextEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEraResponse({ value, fee, memo }: sendQueryGetPendingNextEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationPointChangeDataByEraResponse({ value, fee, memo }: sendQueryGetAllReputationPointChangeDataByEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationDeltaPointByEraResponse({ value, fee, memo }: sendQueryGetAllReputationDeltaPointByEraResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamResponse({ value, fee, memo }: sendMsgUpdateParamResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitWorkreportsResponse({ value, fee, memo }: sendMsgSubmitWorkreportsResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamRequest({ value, fee, memo }: sendQueryParamRequestParams): Promise<DeliverTxResponse>;
    sendNodeScoreDB({ value, fee, memo }: sendNodeScoreDBParams): Promise<DeliverTxResponse>;
    sendCheatStatusCRData({ value, fee, memo }: sendCheatStatusCRDataParams): Promise<DeliverTxResponse>;
    sendQueryGetAllCheatStatusCRDataByEraRequest({ value, fee, memo }: sendQueryGetAllCheatStatusCRDataByEraRequestParams): Promise<DeliverTxResponse>;
    sendMsgSubmitReputationPointChangeDataResponse({ value, fee, memo }: sendMsgSubmitReputationPointChangeDataResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitCheatStatusCRResponse({ value, fee, memo }: sendMsgSubmitCheatStatusCRResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthResponse({ value, fee, memo }: sendQueryGetEpochLengthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportRequest({ value, fee, memo }: sendQueryGetWorkreportRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEpochProcessDataRequest({ value, fee, memo }: sendQueryGetAllEpochProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllReputationDeltaPointByEraRequest({ value, fee, memo }: sendQueryGetAllReputationDeltaPointByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraProcessDataRequest({ value, fee, memo }: sendQueryGetAllEraProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochResponse({ value, fee, memo }: sendQueryGetHistoryEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllNodeWorkloadByEpochResponse({ value, fee, memo }: sendQueryGetAllNodeWorkloadByEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEraResponse({ value, fee, memo }: sendQueryGetHistoryEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraProcessDataResponse({ value, fee, memo }: sendQueryGetAllEraProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeWorkloadRequest({ value, fee, memo }: sendQueryGetNodeWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochProcessDataResponse({ value, fee, memo }: sendQueryGetEpochProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEpochRequest({ value, fee, memo }: sendQueryGetPendingNextEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerWRWorkloadRequest({ value, fee, memo }: sendQueryGetManagerWRWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEraLengthRequest({ value, fee, memo }: sendQueryGetEraLengthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEraResponse({ value, fee, memo }: sendQueryGetAllHistoryEraResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryGetHistoryEpochRequest({ value, fee, memo }: sendQueryGetHistoryEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerRPWorkloadByEraRequest({ value, fee, memo }: sendQueryGetAllManagerRPWorkloadByEraRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetWorkreportResponse({ value, fee, memo }: sendQueryGetWorkreportResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerRPWorkloadByEraResponse({ value, fee, memo }: sendQueryGetAllManagerRPWorkloadByEraResponseParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeData({ value, fee, memo }: sendReputationPointChangeDataParams): Promise<DeliverTxResponse>;
    sendManagerNodeScoreMap({ value, fee, memo }: sendManagerNodeScoreMapParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochResponse({ value, fee, memo }: sendQueryGetCurrentEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetPendingNextEpochResponse({ value, fee, memo }: sendQueryGetPendingNextEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerCSWorkloadResponse({ value, fee, memo }: sendQueryGetManagerCSWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllWorkreportByEpochResponse({ value, fee, memo }: sendQueryGetAllWorkreportByEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawDataMapDB({ value, fee, memo }: sendReputationPointChangeRawDataMapDBParams): Promise<DeliverTxResponse>;
    sendQueryGetAllCheatStatusCRDataByEraResponse({ value, fee, memo }: sendQueryGetAllCheatStatusCRDataByEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEraCheatStatusProcessDataRequest({ value, fee, memo }: sendQueryGetEraCheatStatusProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerCSWorkloadByEraResponse({ value, fee, memo }: sendQueryGetAllManagerCSWorkloadByEraResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetCheatStatusCRDataRequest({ value, fee, memo }: sendQueryGetCheatStatusCRDataRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEraCheatStatusProcessDataResponse({ value, fee, memo }: sendQueryGetAllEraCheatStatusProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendReputationPointChangeRawDataDB({ value, fee, memo }: sendReputationPointChangeRawDataDBParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendManagerCSWorkload({ value, fee, memo }: sendManagerCSWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochRequest({ value, fee, memo }: sendQueryGetCurrentEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEraLengthResponse({ value, fee, memo }: sendQueryGetEraLengthResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointChangeDataRequest({ value, fee, memo }: sendQueryGetReputationPointChangeDataRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParam({ value, fee, memo }: sendMsgUpdateParamParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEpochResponse({ value, fee, memo }: sendQueryGetAllHistoryEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEraProcessDataRequest({ value, fee, memo }: sendQueryGetEraProcessDataRequestParams): Promise<DeliverTxResponse>;
    sendManagerRPWorkload({ value, fee, memo }: sendManagerRPWorkloadParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationDeltaPointRequest({ value, fee, memo }: sendQueryGetReputationDeltaPointRequestParams): Promise<DeliverTxResponse>;
    sendEpochProcessData({ value, fee, memo }: sendEpochProcessDataParams): Promise<DeliverTxResponse>;
    sendEraCheatStatusProcessData({ value, fee, memo }: sendEraCheatStatusProcessDataParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthRequest({ value, fee, memo }: sendQueryGetEpochLengthRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerWRWorkloadByEpochRequest({ value, fee, memo }: sendQueryGetAllManagerWRWorkloadByEpochRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeWorkloadResponse({ value, fee, memo }: sendQueryGetNodeWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllManagerWRWorkloadByEpochResponse({ value, fee, memo }: sendQueryGetAllManagerWRWorkloadByEpochResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetAllNodeWorkloadByEpochRequest({ value, fee, memo }: sendQueryGetAllNodeWorkloadByEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerCSWorkloadRequest({ value, fee, memo }: sendQueryGetManagerCSWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetAllEpochProcessDataResponse({ value, fee, memo }: sendQueryGetAllEpochProcessDataResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitReputationPointChangeData({ value, fee, memo }: sendMsgSubmitReputationPointChangeDataParams): Promise<DeliverTxResponse>;
    sendMsgSubmitCheatStatusCR({ value, fee, memo }: sendMsgSubmitCheatStatusCRParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRPWorkloadRequest({ value, fee, memo }: sendQueryGetManagerRPWorkloadRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetReputationPointChangeDataResponse({ value, fee, memo }: sendQueryGetReputationPointChangeDataResponseParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryGetAllHistoryEpochRequest({ value, fee, memo }: sendQueryGetAllHistoryEpochRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerWRWorkloadResponse({ value, fee, memo }: sendQueryGetManagerWRWorkloadResponseParams): Promise<DeliverTxResponse>;
    sendWorkreport({ value, fee, memo }: sendWorkreportParams): Promise<DeliverTxResponse>;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgSubmitWorkreports({ value }: msgSubmitWorkreportsParams): EncodeObject;
    queryGetAllWorkreportByEpochRequest({ value }: queryGetAllWorkreportByEpochRequestParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
    queryGetHistoryEraRequest({ value }: queryGetHistoryEraRequestParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    queryGetEpochProcessDataRequest({ value }: queryGetEpochProcessDataRequestParams): EncodeObject;
    nodeScore({ value }: nodeScoreParams): EncodeObject;
    queryParamResponse({ value }: queryParamResponseParams): EncodeObject;
    queryGetCurrentEraResponse({ value }: queryGetCurrentEraResponseParams): EncodeObject;
    queryGetEraProcessDataResponse({ value }: queryGetEraProcessDataResponseParams): EncodeObject;
    cheatStatusCrdb({ value }: cheatStatusCrdbParams): EncodeObject;
    queryGetAllReputationPointChangeDataByEraRequest({ value }: queryGetAllReputationPointChangeDataByEraRequestParams): EncodeObject;
    queryGetCheatStatusCrdataResponse({ value }: queryGetCheatStatusCrdataResponseParams): EncodeObject;
    reputationPointChangeRawData({ value }: reputationPointChangeRawDataParams): EncodeObject;
    eraInfo({ value }: eraInfoParams): EncodeObject;
    nodeWorkload({ value }: nodeWorkloadParams): EncodeObject;
    queryGetManagerRpworkloadResponse({ value }: queryGetManagerRpworkloadResponseParams): EncodeObject;
    queryGetAllManagerCsworkloadByEraRequest({ value }: queryGetAllManagerCsworkloadByEraRequestParams): EncodeObject;
    queryGetEraCheatStatusProcessDataResponse({ value }: queryGetEraCheatStatusProcessDataResponseParams): EncodeObject;
    queryGetAllEraCheatStatusProcessDataRequest({ value }: queryGetAllEraCheatStatusProcessDataRequestParams): EncodeObject;
    reputationDeltaPoint({ value }: reputationDeltaPointParams): EncodeObject;
    epochInfo({ value }: epochInfoParams): EncodeObject;
    queryGetAllHistoryEraRequest({ value }: queryGetAllHistoryEraRequestParams): EncodeObject;
    eraProcessData({ value }: eraProcessDataParams): EncodeObject;
    managerWrworkload({ value }: managerWrworkloadParams): EncodeObject;
    queryGetCurrentEraRequest({ value }: queryGetCurrentEraRequestParams): EncodeObject;
    cheatStatusCr({ value }: cheatStatusCrParams): EncodeObject;
    cheatStatusCrmapDb({ value }: cheatStatusCrmapDbParams): EncodeObject;
    queryGetReputationDeltaPointResponse({ value }: queryGetReputationDeltaPointResponseParams): EncodeObject;
    queryGetPendingNextEraRequest({ value }: queryGetPendingNextEraRequestParams): EncodeObject;
    queryGetPendingNextEraResponse({ value }: queryGetPendingNextEraResponseParams): EncodeObject;
    queryGetAllReputationPointChangeDataByEraResponse({ value }: queryGetAllReputationPointChangeDataByEraResponseParams): EncodeObject;
    queryGetAllReputationDeltaPointByEraResponse({ value }: queryGetAllReputationDeltaPointByEraResponseParams): EncodeObject;
    msgUpdateParamResponse({ value }: msgUpdateParamResponseParams): EncodeObject;
    msgSubmitWorkreportsResponse({ value }: msgSubmitWorkreportsResponseParams): EncodeObject;
    queryParamRequest({ value }: queryParamRequestParams): EncodeObject;
    nodeScoreDb({ value }: nodeScoreDbParams): EncodeObject;
    cheatStatusCrdata({ value }: cheatStatusCrdataParams): EncodeObject;
    queryGetAllCheatStatusCrdataByEraRequest({ value }: queryGetAllCheatStatusCrdataByEraRequestParams): EncodeObject;
    msgSubmitReputationPointChangeDataResponse({ value }: msgSubmitReputationPointChangeDataResponseParams): EncodeObject;
    msgSubmitCheatStatusCrresponse({ value }: msgSubmitCheatStatusCrresponseParams): EncodeObject;
    queryGetEpochLengthResponse({ value }: queryGetEpochLengthResponseParams): EncodeObject;
    queryGetWorkreportRequest({ value }: queryGetWorkreportRequestParams): EncodeObject;
    queryGetAllEpochProcessDataRequest({ value }: queryGetAllEpochProcessDataRequestParams): EncodeObject;
    queryGetAllReputationDeltaPointByEraRequest({ value }: queryGetAllReputationDeltaPointByEraRequestParams): EncodeObject;
    queryGetAllEraProcessDataRequest({ value }: queryGetAllEraProcessDataRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetHistoryEpochResponse({ value }: queryGetHistoryEpochResponseParams): EncodeObject;
    queryGetAllNodeWorkloadByEpochResponse({ value }: queryGetAllNodeWorkloadByEpochResponseParams): EncodeObject;
    queryGetHistoryEraResponse({ value }: queryGetHistoryEraResponseParams): EncodeObject;
    queryGetAllEraProcessDataResponse({ value }: queryGetAllEraProcessDataResponseParams): EncodeObject;
    queryGetNodeWorkloadRequest({ value }: queryGetNodeWorkloadRequestParams): EncodeObject;
    queryGetEpochProcessDataResponse({ value }: queryGetEpochProcessDataResponseParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    queryGetPendingNextEpochRequest({ value }: queryGetPendingNextEpochRequestParams): EncodeObject;
    queryGetManagerWrworkloadRequest({ value }: queryGetManagerWrworkloadRequestParams): EncodeObject;
    queryGetEraLengthRequest({ value }: queryGetEraLengthRequestParams): EncodeObject;
    queryGetAllHistoryEraResponse({ value }: queryGetAllHistoryEraResponseParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    queryGetHistoryEpochRequest({ value }: queryGetHistoryEpochRequestParams): EncodeObject;
    queryGetAllManagerRpworkloadByEraRequest({ value }: queryGetAllManagerRpworkloadByEraRequestParams): EncodeObject;
    queryGetWorkreportResponse({ value }: queryGetWorkreportResponseParams): EncodeObject;
    queryGetAllManagerRpworkloadByEraResponse({ value }: queryGetAllManagerRpworkloadByEraResponseParams): EncodeObject;
    reputationPointChangeData({ value }: reputationPointChangeDataParams): EncodeObject;
    managerNodeScoreMap({ value }: managerNodeScoreMapParams): EncodeObject;
    queryGetCurrentEpochResponse({ value }: queryGetCurrentEpochResponseParams): EncodeObject;
    queryGetPendingNextEpochResponse({ value }: queryGetPendingNextEpochResponseParams): EncodeObject;
    queryGetManagerCsworkloadResponse({ value }: queryGetManagerCsworkloadResponseParams): EncodeObject;
    queryGetAllWorkreportByEpochResponse({ value }: queryGetAllWorkreportByEpochResponseParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    reputationPointChangeRawDataMapDb({ value }: reputationPointChangeRawDataMapDbParams): EncodeObject;
    queryGetAllCheatStatusCrdataByEraResponse({ value }: queryGetAllCheatStatusCrdataByEraResponseParams): EncodeObject;
    queryGetEraCheatStatusProcessDataRequest({ value }: queryGetEraCheatStatusProcessDataRequestParams): EncodeObject;
    queryGetAllManagerCsworkloadByEraResponse({ value }: queryGetAllManagerCsworkloadByEraResponseParams): EncodeObject;
    queryGetCheatStatusCrdataRequest({ value }: queryGetCheatStatusCrdataRequestParams): EncodeObject;
    queryGetAllEraCheatStatusProcessDataResponse({ value }: queryGetAllEraCheatStatusProcessDataResponseParams): EncodeObject;
    reputationPointChangeRawDataDb({ value }: reputationPointChangeRawDataDbParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    managerCsworkload({ value }: managerCsworkloadParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetCurrentEpochRequest({ value }: queryGetCurrentEpochRequestParams): EncodeObject;
    queryGetEraLengthResponse({ value }: queryGetEraLengthResponseParams): EncodeObject;
    queryGetReputationPointChangeDataRequest({ value }: queryGetReputationPointChangeDataRequestParams): EncodeObject;
    msgUpdateParam({ value }: msgUpdateParamParams): EncodeObject;
    queryGetAllHistoryEpochResponse({ value }: queryGetAllHistoryEpochResponseParams): EncodeObject;
    queryGetEraProcessDataRequest({ value }: queryGetEraProcessDataRequestParams): EncodeObject;
    managerRpworkload({ value }: managerRpworkloadParams): EncodeObject;
    queryGetReputationDeltaPointRequest({ value }: queryGetReputationDeltaPointRequestParams): EncodeObject;
    epochProcessData({ value }: epochProcessDataParams): EncodeObject;
    eraCheatStatusProcessData({ value }: eraCheatStatusProcessDataParams): EncodeObject;
    queryGetEpochLengthRequest({ value }: queryGetEpochLengthRequestParams): EncodeObject;
    queryGetAllManagerWrworkloadByEpochRequest({ value }: queryGetAllManagerWrworkloadByEpochRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryGetNodeWorkloadResponse({ value }: queryGetNodeWorkloadResponseParams): EncodeObject;
    queryGetAllManagerWrworkloadByEpochResponse({ value }: queryGetAllManagerWrworkloadByEpochResponseParams): EncodeObject;
    queryGetAllNodeWorkloadByEpochRequest({ value }: queryGetAllNodeWorkloadByEpochRequestParams): EncodeObject;
    queryGetManagerCsworkloadRequest({ value }: queryGetManagerCsworkloadRequestParams): EncodeObject;
    queryGetAllEpochProcessDataResponse({ value }: queryGetAllEpochProcessDataResponseParams): EncodeObject;
    msgSubmitReputationPointChangeData({ value }: msgSubmitReputationPointChangeDataParams): EncodeObject;
    msgSubmitCheatStatusCr({ value }: msgSubmitCheatStatusCrParams): EncodeObject;
    queryGetManagerRpworkloadRequest({ value }: queryGetManagerRpworkloadRequestParams): EncodeObject;
    queryGetReputationPointChangeDataResponse({ value }: queryGetReputationPointChangeDataResponseParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    queryGetAllHistoryEpochRequest({ value }: queryGetAllHistoryEpochRequestParams): EncodeObject;
    queryGetManagerWrworkloadResponse({ value }: queryGetManagerWrworkloadResponseParams): EncodeObject;
    workreport({ value }: workreportParams): EncodeObject;
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
