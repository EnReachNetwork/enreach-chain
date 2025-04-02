import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryAllOperatorRequest } from "./types/enreach/manager/query";
import { QueryGetManagerResponse } from "./types/enreach/manager/query";
import { QueryAllManagerRequest } from "./types/enreach/manager/query";
import { QueryGetSuperiorRequest } from "./types/enreach/manager/query";
import { MsgCreateOperator } from "./types/enreach/manager/tx";
import { QueryParamsResponse } from "./types/enreach/manager/query";
import { QueryGetOperatorRequest } from "./types/enreach/manager/query";
import { QueryGetOperatorResponse } from "./types/enreach/manager/query";
import { MsgBindOperatorEVMAccountResponse } from "./types/enreach/manager/tx";
import { MsgRegisterManagerResponse } from "./types/enreach/manager/tx";
import { MsgUpdateParams } from "./types/enreach/manager/tx";
import { MsgRegisterManager } from "./types/enreach/manager/tx";
import { MsgGoWorking } from "./types/enreach/manager/tx";
import { MsgUpdateParamsResponse } from "./types/enreach/manager/tx";
import { MsgCreateOperatorResponse } from "./types/enreach/manager/tx";
import { MsgActivateManager } from "./types/enreach/manager/tx";
import { MsgBindOperatorEVMAccount } from "./types/enreach/manager/tx";
import { Operator } from "./types/enreach/manager/operator";
import { MsgUpdateSuperior } from "./types/enreach/manager/tx";
import { Manager } from "./types/enreach/manager/manager";
import { MsgUpdateSuperiorResponse } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfo } from "./types/enreach/manager/tx";
import { Superior } from "./types/enreach/manager/superior";
import { QueryParamsRequest } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionResponse } from "./types/enreach/manager/query";
import { Params } from "./types/enreach/manager/params";
import { MsgUpdateManagerConnParamsResponse } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfoResponse } from "./types/enreach/manager/tx";
import { MsgBindOperatorManagerAccountResponse } from "./types/enreach/manager/tx";
import { MsgBindOperatorManagerAccount } from "./types/enreach/manager/tx";
import { QueryAllManagerResponse } from "./types/enreach/manager/query";
import { QueryGetSuperiorResponse } from "./types/enreach/manager/query";
import { MsgCreateSuperior } from "./types/enreach/manager/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/manager/tx";
import { MsgSetManagerRegion } from "./types/enreach/manager/tx";
import { MsgUpdateManagerConnParams } from "./types/enreach/manager/tx";
import { QueryGetManagerRequest } from "./types/enreach/manager/query";
import { MsgSetManagerRegionResponse } from "./types/enreach/manager/tx";
import { MsgGoWorkingResponse } from "./types/enreach/manager/tx";
import { GenesisState } from "./types/enreach/manager/genesis";
import { QueryAllOperatorResponse } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionRequest } from "./types/enreach/manager/query";
import { MsgActivateManagerResponse } from "./types/enreach/manager/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.manager.QueryAllOperatorRequest", QueryAllOperatorRequest],
    ["/enreach.manager.QueryGetManagerResponse", QueryGetManagerResponse],
    ["/enreach.manager.QueryAllManagerRequest", QueryAllManagerRequest],
    ["/enreach.manager.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    ["/enreach.manager.MsgCreateOperator", MsgCreateOperator],
    ["/enreach.manager.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.manager.QueryGetOperatorRequest", QueryGetOperatorRequest],
    ["/enreach.manager.QueryGetOperatorResponse", QueryGetOperatorResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", MsgRegisterManagerResponse],
    ["/enreach.manager.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.manager.MsgRegisterManager", MsgRegisterManager],
    ["/enreach.manager.MsgGoWorking", MsgGoWorking],
    ["/enreach.manager.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.manager.MsgCreateOperatorResponse", MsgCreateOperatorResponse],
    ["/enreach.manager.MsgActivateManager", MsgActivateManager],
    ["/enreach.manager.MsgBindOperatorEVMAccount", MsgBindOperatorEVMAccount],
    ["/enreach.manager.Operator", Operator],
    ["/enreach.manager.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.manager.Manager", Manager],
    ["/enreach.manager.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.Superior", Superior],
    ["/enreach.manager.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.manager.QueryGetManagerByRegionResponse", QueryGetManagerByRegionResponse],
    ["/enreach.manager.Params", Params],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccount", MsgBindOperatorManagerAccount],
    ["/enreach.manager.QueryAllManagerResponse", QueryAllManagerResponse],
    ["/enreach.manager.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.manager.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.manager.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.manager.MsgSetManagerRegion", MsgSetManagerRegion],
    ["/enreach.manager.MsgUpdateManagerConnParams", MsgUpdateManagerConnParams],
    ["/enreach.manager.QueryGetManagerRequest", QueryGetManagerRequest],
    ["/enreach.manager.MsgSetManagerRegionResponse", MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgGoWorkingResponse", MsgGoWorkingResponse],
    ["/enreach.manager.GenesisState", GenesisState],
    ["/enreach.manager.QueryAllOperatorResponse", QueryAllOperatorResponse],
    ["/enreach.manager.QueryGetManagerByRegionRequest", QueryGetManagerByRegionRequest],
    ["/enreach.manager.MsgActivateManagerResponse", MsgActivateManagerResponse],
    
];

export { msgTypes }