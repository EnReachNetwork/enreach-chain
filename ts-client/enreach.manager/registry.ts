import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryParamsRequest } from "./types/enreach/manager/query";
import { MsgCreateOperatorResponse } from "./types/enreach/manager/tx";
import { QueryGetOperatorResponse } from "./types/enreach/manager/query";
import { QueryAllOperatorRequest } from "./types/enreach/manager/query";
import { QueryAllOperatorResponse } from "./types/enreach/manager/query";
import { QueryAllManagerResponse } from "./types/enreach/manager/query";
import { Params } from "./types/enreach/manager/params";
import { MsgActivateManager } from "./types/enreach/manager/tx";
import { MsgBindOperatorEVMAccount } from "./types/enreach/manager/tx";
import { QueryAllManagerRequest } from "./types/enreach/manager/query";
import { MsgUpdateParamsResponse } from "./types/enreach/manager/tx";
import { MsgBindOperatorManagerAccountResponse } from "./types/enreach/manager/tx";
import { MsgSetManagerRegion } from "./types/enreach/manager/tx";
import { MsgSetManagerRegionResponse } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfo } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfoResponse } from "./types/enreach/manager/tx";
import { MsgRegisterManagerResponse } from "./types/enreach/manager/tx";
import { MsgGoWorkingResponse } from "./types/enreach/manager/tx";
import { MsgUpdateParams } from "./types/enreach/manager/tx";
import { GenesisState } from "./types/enreach/manager/genesis";
import { QueryGetOperatorRequest } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionRequest } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionResponse } from "./types/enreach/manager/query";
import { MsgBindOperatorManagerAccount } from "./types/enreach/manager/tx";
import { MsgUpdateManagerConnParams } from "./types/enreach/manager/tx";
import { MsgRegisterManager } from "./types/enreach/manager/tx";
import { QueryParamsResponse } from "./types/enreach/manager/query";
import { MsgActivateManagerResponse } from "./types/enreach/manager/tx";
import { MsgGoWorking } from "./types/enreach/manager/tx";
import { QueryGetManagerRequest } from "./types/enreach/manager/query";
import { MsgUpdateManagerConnParamsResponse } from "./types/enreach/manager/tx";
import { MsgBindOperatorEVMAccountResponse } from "./types/enreach/manager/tx";
import { Operator } from "./types/enreach/manager/operator";
import { QueryGetManagerResponse } from "./types/enreach/manager/query";
import { MsgCreateOperator } from "./types/enreach/manager/tx";
import { Manager } from "./types/enreach/manager/manager";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.manager.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.manager.MsgCreateOperatorResponse", MsgCreateOperatorResponse],
    ["/enreach.manager.QueryGetOperatorResponse", QueryGetOperatorResponse],
    ["/enreach.manager.QueryAllOperatorRequest", QueryAllOperatorRequest],
    ["/enreach.manager.QueryAllOperatorResponse", QueryAllOperatorResponse],
    ["/enreach.manager.QueryAllManagerResponse", QueryAllManagerResponse],
    ["/enreach.manager.Params", Params],
    ["/enreach.manager.MsgActivateManager", MsgActivateManager],
    ["/enreach.manager.MsgBindOperatorEVMAccount", MsgBindOperatorEVMAccount],
    ["/enreach.manager.QueryAllManagerRequest", QueryAllManagerRequest],
    ["/enreach.manager.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgSetManagerRegion", MsgSetManagerRegion],
    ["/enreach.manager.MsgSetManagerRegionResponse", MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", MsgRegisterManagerResponse],
    ["/enreach.manager.MsgGoWorkingResponse", MsgGoWorkingResponse],
    ["/enreach.manager.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.manager.GenesisState", GenesisState],
    ["/enreach.manager.QueryGetOperatorRequest", QueryGetOperatorRequest],
    ["/enreach.manager.QueryGetManagerByRegionRequest", QueryGetManagerByRegionRequest],
    ["/enreach.manager.QueryGetManagerByRegionResponse", QueryGetManagerByRegionResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccount", MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgUpdateManagerConnParams", MsgUpdateManagerConnParams],
    ["/enreach.manager.MsgRegisterManager", MsgRegisterManager],
    ["/enreach.manager.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.manager.MsgActivateManagerResponse", MsgActivateManagerResponse],
    ["/enreach.manager.MsgGoWorking", MsgGoWorking],
    ["/enreach.manager.QueryGetManagerRequest", QueryGetManagerRequest],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.Operator", Operator],
    ["/enreach.manager.QueryGetManagerResponse", QueryGetManagerResponse],
    ["/enreach.manager.MsgCreateOperator", MsgCreateOperator],
    ["/enreach.manager.Manager", Manager],
    
];

export { msgTypes }