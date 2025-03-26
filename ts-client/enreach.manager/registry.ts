import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRegisterManager } from "./types/enreach/manager/tx";
import { QueryGetOperatorResponse } from "./types/enreach/manager/query";
import { QueryGetManagerResponse } from "./types/enreach/manager/query";
import { QueryGetSuperiorResponse } from "./types/enreach/manager/query";
import { MsgUpdateSuperior } from "./types/enreach/manager/tx";
import { MsgUpdateParamsResponse } from "./types/enreach/manager/tx";
import { MsgBindOperatorEVMAccount } from "./types/enreach/manager/tx";
import { QueryAllOperatorResponse } from "./types/enreach/manager/query";
import { MsgGoWorking } from "./types/enreach/manager/tx";
import { Manager } from "./types/enreach/manager/manager";
import { Params } from "./types/enreach/manager/params";
import { QueryGetManagerByRegionRequest } from "./types/enreach/manager/query";
import { MsgSetManagerRegionResponse } from "./types/enreach/manager/tx";
import { MsgBindOperatorEVMAccountResponse } from "./types/enreach/manager/tx";
import { MsgRegisterManagerResponse } from "./types/enreach/manager/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/manager/tx";
import { QueryParamsRequest } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionResponse } from "./types/enreach/manager/query";
import { MsgCreateSuperiorResponse } from "./types/enreach/manager/tx";
import { QueryParamsResponse } from "./types/enreach/manager/query";
import { QueryGetOperatorRequest } from "./types/enreach/manager/query";
import { QueryGetManagerRequest } from "./types/enreach/manager/query";
import { QueryGetSuperiorRequest } from "./types/enreach/manager/query";
import { MsgActivateManager } from "./types/enreach/manager/tx";
import { MsgCreateOperatorResponse } from "./types/enreach/manager/tx";
import { MsgBindOperatorManagerAccountResponse } from "./types/enreach/manager/tx";
import { MsgUpdateManagerConnParams } from "./types/enreach/manager/tx";
import { MsgUpdateManagerConnParamsResponse } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfoResponse } from "./types/enreach/manager/tx";
import { Superior } from "./types/enreach/manager/superior";
import { Operator } from "./types/enreach/manager/operator";
import { GenesisState } from "./types/enreach/manager/genesis";
import { QueryAllOperatorRequest } from "./types/enreach/manager/query";
import { MsgUpdateParams } from "./types/enreach/manager/tx";
import { MsgBindOperatorManagerAccount } from "./types/enreach/manager/tx";
import { MsgSetManagerRegion } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfo } from "./types/enreach/manager/tx";
import { QueryAllManagerRequest } from "./types/enreach/manager/query";
import { QueryAllManagerResponse } from "./types/enreach/manager/query";
import { MsgCreateSuperior } from "./types/enreach/manager/tx";
import { MsgCreateOperator } from "./types/enreach/manager/tx";
import { MsgActivateManagerResponse } from "./types/enreach/manager/tx";
import { MsgGoWorkingResponse } from "./types/enreach/manager/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.manager.MsgRegisterManager", MsgRegisterManager],
    ["/enreach.manager.QueryGetOperatorResponse", QueryGetOperatorResponse],
    ["/enreach.manager.QueryGetManagerResponse", QueryGetManagerResponse],
    ["/enreach.manager.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.manager.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.manager.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccount", MsgBindOperatorEVMAccount],
    ["/enreach.manager.QueryAllOperatorResponse", QueryAllOperatorResponse],
    ["/enreach.manager.MsgGoWorking", MsgGoWorking],
    ["/enreach.manager.Manager", Manager],
    ["/enreach.manager.Params", Params],
    ["/enreach.manager.QueryGetManagerByRegionRequest", QueryGetManagerByRegionRequest],
    ["/enreach.manager.MsgSetManagerRegionResponse", MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", MsgRegisterManagerResponse],
    ["/enreach.manager.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.manager.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.manager.QueryGetManagerByRegionResponse", QueryGetManagerByRegionResponse],
    ["/enreach.manager.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.manager.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.manager.QueryGetOperatorRequest", QueryGetOperatorRequest],
    ["/enreach.manager.QueryGetManagerRequest", QueryGetManagerRequest],
    ["/enreach.manager.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    ["/enreach.manager.MsgActivateManager", MsgActivateManager],
    ["/enreach.manager.MsgCreateOperatorResponse", MsgCreateOperatorResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgUpdateManagerConnParams", MsgUpdateManagerConnParams],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.Superior", Superior],
    ["/enreach.manager.Operator", Operator],
    ["/enreach.manager.GenesisState", GenesisState],
    ["/enreach.manager.QueryAllOperatorRequest", QueryAllOperatorRequest],
    ["/enreach.manager.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.manager.MsgBindOperatorManagerAccount", MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgSetManagerRegion", MsgSetManagerRegion],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.QueryAllManagerRequest", QueryAllManagerRequest],
    ["/enreach.manager.QueryAllManagerResponse", QueryAllManagerResponse],
    ["/enreach.manager.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.manager.MsgCreateOperator", MsgCreateOperator],
    ["/enreach.manager.MsgActivateManagerResponse", MsgActivateManagerResponse],
    ["/enreach.manager.MsgGoWorkingResponse", MsgGoWorkingResponse],
    
];

export { msgTypes }