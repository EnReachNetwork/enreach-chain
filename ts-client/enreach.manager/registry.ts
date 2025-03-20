import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateOperator } from "./types/enreach/manager/tx";
import { MsgUpdateSuperior } from "./types/enreach/manager/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/manager/tx";
import { MsgUpdateParams } from "./types/enreach/manager/tx";
import { MsgUpdateParamsResponse } from "./types/enreach/manager/tx";
import { MsgBindOperatorManagerAccount } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfoResponse } from "./types/enreach/manager/tx";
import { QueryParamsRequest } from "./types/enreach/manager/query";
import { QueryParamsResponse } from "./types/enreach/manager/query";
import { QueryGetManagerRequest } from "./types/enreach/manager/query";
import { MsgCreateSuperiorResponse } from "./types/enreach/manager/tx";
import { MsgGoWorking } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfo } from "./types/enreach/manager/tx";
import { MsgActivateManagerResponse } from "./types/enreach/manager/tx";
import { QueryGetEpochLengthResponse } from "./types/enreach/manager/query";
import { Params } from "./types/enreach/manager/params";
import { QueryGetCurrentEpochResponse } from "./types/enreach/manager/query";
import { QueryGetOperatorRequest } from "./types/enreach/manager/query";
import { QueryAllOperatorRequest } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionResponse } from "./types/enreach/manager/query";
import { Operator } from "./types/enreach/manager/operator";
import { Manager } from "./types/enreach/manager/manager";
import { MsgBindOperatorEVMAccount } from "./types/enreach/manager/tx";
import { MsgBindOperatorEVMAccountResponse } from "./types/enreach/manager/tx";
import { QueryGetManagerResponse } from "./types/enreach/manager/query";
import { QueryGetSuperiorResponse } from "./types/enreach/manager/query";
import { MsgGoWorkingResponse } from "./types/enreach/manager/tx";
import { MsgSetManagerRegionResponse } from "./types/enreach/manager/tx";
import { MsgBindOperatorManagerAccountResponse } from "./types/enreach/manager/tx";
import { MsgUpdateManagerConnParams } from "./types/enreach/manager/tx";
import { QueryGetManagerByRegionRequest } from "./types/enreach/manager/query";
import { MsgUpdateManagerConnParamsResponse } from "./types/enreach/manager/tx";
import { MsgRegisterManagerResponse } from "./types/enreach/manager/tx";
import { QueryAllManagerResponse } from "./types/enreach/manager/query";
import { QueryGetCurrentEpochRequest } from "./types/enreach/manager/query";
import { MsgActivateManager } from "./types/enreach/manager/tx";
import { MsgCreateSuperior } from "./types/enreach/manager/tx";
import { Superior } from "./types/enreach/manager/superior";
import { GenesisState } from "./types/enreach/manager/genesis";
import { MsgSetManagerRegion } from "./types/enreach/manager/tx";
import { QueryAllManagerRequest } from "./types/enreach/manager/query";
import { QueryGetEpochLengthRequest } from "./types/enreach/manager/query";
import { QueryGetSuperiorRequest } from "./types/enreach/manager/query";
import { MsgRegisterManager } from "./types/enreach/manager/tx";
import { QueryGetOperatorResponse } from "./types/enreach/manager/query";
import { QueryAllOperatorResponse } from "./types/enreach/manager/query";
import { MsgCreateOperatorResponse } from "./types/enreach/manager/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.manager.MsgCreateOperator", MsgCreateOperator],
    ["/enreach.manager.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.manager.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.manager.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.manager.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccount", MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.manager.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.manager.QueryGetManagerRequest", QueryGetManagerRequest],
    ["/enreach.manager.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.manager.MsgGoWorking", MsgGoWorking],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.MsgActivateManagerResponse", MsgActivateManagerResponse],
    ["/enreach.manager.QueryGetEpochLengthResponse", QueryGetEpochLengthResponse],
    ["/enreach.manager.Params", Params],
    ["/enreach.manager.QueryGetCurrentEpochResponse", QueryGetCurrentEpochResponse],
    ["/enreach.manager.QueryGetOperatorRequest", QueryGetOperatorRequest],
    ["/enreach.manager.QueryAllOperatorRequest", QueryAllOperatorRequest],
    ["/enreach.manager.QueryGetManagerByRegionResponse", QueryGetManagerByRegionResponse],
    ["/enreach.manager.Operator", Operator],
    ["/enreach.manager.Manager", Manager],
    ["/enreach.manager.MsgBindOperatorEVMAccount", MsgBindOperatorEVMAccount],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.QueryGetManagerResponse", QueryGetManagerResponse],
    ["/enreach.manager.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.manager.MsgGoWorkingResponse", MsgGoWorkingResponse],
    ["/enreach.manager.MsgSetManagerRegionResponse", MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgUpdateManagerConnParams", MsgUpdateManagerConnParams],
    ["/enreach.manager.QueryGetManagerByRegionRequest", QueryGetManagerByRegionRequest],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", MsgRegisterManagerResponse],
    ["/enreach.manager.QueryAllManagerResponse", QueryAllManagerResponse],
    ["/enreach.manager.QueryGetCurrentEpochRequest", QueryGetCurrentEpochRequest],
    ["/enreach.manager.MsgActivateManager", MsgActivateManager],
    ["/enreach.manager.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.manager.Superior", Superior],
    ["/enreach.manager.GenesisState", GenesisState],
    ["/enreach.manager.MsgSetManagerRegion", MsgSetManagerRegion],
    ["/enreach.manager.QueryAllManagerRequest", QueryAllManagerRequest],
    ["/enreach.manager.QueryGetEpochLengthRequest", QueryGetEpochLengthRequest],
    ["/enreach.manager.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    ["/enreach.manager.MsgRegisterManager", MsgRegisterManager],
    ["/enreach.manager.QueryGetOperatorResponse", QueryGetOperatorResponse],
    ["/enreach.manager.QueryAllOperatorResponse", QueryAllOperatorResponse],
    ["/enreach.manager.MsgCreateOperatorResponse", MsgCreateOperatorResponse],
    
];

export { msgTypes }