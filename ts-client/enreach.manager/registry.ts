import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryGetOperatorResponse } from "./types/enreach/manager/query";
import { MsgUpdateParams } from "./types/enreach/manager/tx";
import { MsgActivateManagerResponse } from "./types/enreach/manager/tx";
import { MsgUpdateParamsResponse } from "./types/enreach/manager/tx";
import { MsgRegisterManager } from "./types/enreach/manager/tx";
import { QueryGetManagerResponse } from "./types/enreach/manager/query";
import { MsgUpdateOperatorBasicInfo } from "./types/enreach/manager/tx";
import { MsgBindOperatorManagerAccountResponse } from "./types/enreach/manager/tx";
import { QueryAllOperatorResponse } from "./types/enreach/manager/query";
import { Params } from "./types/enreach/manager/params";
import { MsgUpdateManagerConnParamsResponse } from "./types/enreach/manager/tx";
import { Superior } from "./types/enreach/manager/superior";
import { MsgUpdateSuperiorResponse } from "./types/enreach/manager/tx";
import { MsgBindOperatorEVMAccount } from "./types/enreach/manager/tx";
import { MsgBindOperatorEVMAccountResponse } from "./types/enreach/manager/tx";
import { MsgRegisterManagerResponse } from "./types/enreach/manager/tx";
import { MsgCreateOperator } from "./types/enreach/manager/tx";
import { QueryParamsResponse } from "./types/enreach/manager/query";
import { QueryGetOperatorRequest } from "./types/enreach/manager/query";
import { QueryGetEpochLengthResponse } from "./types/enreach/manager/query";
import { MsgCreateOperatorResponse } from "./types/enreach/manager/tx";
import { QueryGetManagerRequest } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionRequest } from "./types/enreach/manager/query";
import { MsgGoWorking } from "./types/enreach/manager/tx";
import { GenesisState } from "./types/enreach/manager/genesis";
import { MsgUpdateSuperior } from "./types/enreach/manager/tx";
import { QueryGetCurrentEpochResponse } from "./types/enreach/manager/query";
import { MsgCreateSuperior } from "./types/enreach/manager/tx";
import { QueryAllManagerRequest } from "./types/enreach/manager/query";
import { QueryGetEpochLengthRequest } from "./types/enreach/manager/query";
import { QueryGetSuperiorRequest } from "./types/enreach/manager/query";
import { MsgUpdateManagerConnParams } from "./types/enreach/manager/tx";
import { Manager } from "./types/enreach/manager/manager";
import { MsgBindOperatorManagerAccount } from "./types/enreach/manager/tx";
import { MsgGoWorkingResponse } from "./types/enreach/manager/tx";
import { Operator } from "./types/enreach/manager/operator";
import { QueryGetManagerByRegionResponse } from "./types/enreach/manager/query";
import { MsgSetManagerRegion } from "./types/enreach/manager/tx";
import { MsgSetManagerRegionResponse } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfoResponse } from "./types/enreach/manager/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/manager/tx";
import { QueryGetCurrentEpochRequest } from "./types/enreach/manager/query";
import { QueryGetSuperiorResponse } from "./types/enreach/manager/query";
import { QueryParamsRequest } from "./types/enreach/manager/query";
import { QueryAllOperatorRequest } from "./types/enreach/manager/query";
import { QueryAllManagerResponse } from "./types/enreach/manager/query";
import { MsgActivateManager } from "./types/enreach/manager/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.manager.QueryGetOperatorResponse", QueryGetOperatorResponse],
    ["/enreach.manager.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.manager.MsgActivateManagerResponse", MsgActivateManagerResponse],
    ["/enreach.manager.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.manager.MsgRegisterManager", MsgRegisterManager],
    ["/enreach.manager.QueryGetManagerResponse", QueryGetManagerResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.QueryAllOperatorResponse", QueryAllOperatorResponse],
    ["/enreach.manager.Params", Params],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.Superior", Superior],
    ["/enreach.manager.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccount", MsgBindOperatorEVMAccount],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", MsgRegisterManagerResponse],
    ["/enreach.manager.MsgCreateOperator", MsgCreateOperator],
    ["/enreach.manager.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.manager.QueryGetOperatorRequest", QueryGetOperatorRequest],
    ["/enreach.manager.QueryGetEpochLengthResponse", QueryGetEpochLengthResponse],
    ["/enreach.manager.MsgCreateOperatorResponse", MsgCreateOperatorResponse],
    ["/enreach.manager.QueryGetManagerRequest", QueryGetManagerRequest],
    ["/enreach.manager.QueryGetManagerByRegionRequest", QueryGetManagerByRegionRequest],
    ["/enreach.manager.MsgGoWorking", MsgGoWorking],
    ["/enreach.manager.GenesisState", GenesisState],
    ["/enreach.manager.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.manager.QueryGetCurrentEpochResponse", QueryGetCurrentEpochResponse],
    ["/enreach.manager.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.manager.QueryAllManagerRequest", QueryAllManagerRequest],
    ["/enreach.manager.QueryGetEpochLengthRequest", QueryGetEpochLengthRequest],
    ["/enreach.manager.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    ["/enreach.manager.MsgUpdateManagerConnParams", MsgUpdateManagerConnParams],
    ["/enreach.manager.Manager", Manager],
    ["/enreach.manager.MsgBindOperatorManagerAccount", MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgGoWorkingResponse", MsgGoWorkingResponse],
    ["/enreach.manager.Operator", Operator],
    ["/enreach.manager.QueryGetManagerByRegionResponse", QueryGetManagerByRegionResponse],
    ["/enreach.manager.MsgSetManagerRegion", MsgSetManagerRegion],
    ["/enreach.manager.MsgSetManagerRegionResponse", MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.manager.QueryGetCurrentEpochRequest", QueryGetCurrentEpochRequest],
    ["/enreach.manager.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.manager.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.manager.QueryAllOperatorRequest", QueryAllOperatorRequest],
    ["/enreach.manager.QueryAllManagerResponse", QueryAllManagerResponse],
    ["/enreach.manager.MsgActivateManager", MsgActivateManager],
    
];

export { msgTypes }