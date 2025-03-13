import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgActivateManagerResponse } from "./types/enreach/manager/tx";
import { MsgGoWorking } from "./types/enreach/manager/tx";
import { MsgCreateOperator } from "./types/enreach/manager/tx";
import { MsgSetManagerRegionResponse } from "./types/enreach/manager/tx";
import { MsgUpdateManagerConnParamsResponse } from "./types/enreach/manager/tx";
import { QueryGetManagerResponse } from "./types/enreach/manager/query";
import { QueryAllManagerResponse } from "./types/enreach/manager/query";
import { MsgUpdateParams } from "./types/enreach/manager/tx";
import { MsgBindOperatorEVMAccountResponse } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfo } from "./types/enreach/manager/tx";
import { QueryParamsRequest } from "./types/enreach/manager/query";
import { QueryGetOperatorResponse } from "./types/enreach/manager/query";
import { QueryGetManagerRequest } from "./types/enreach/manager/query";
import { MsgBindOperatorManagerAccountResponse } from "./types/enreach/manager/tx";
import { MsgSetManagerRegion } from "./types/enreach/manager/tx";
import { QueryParamsResponse } from "./types/enreach/manager/query";
import { Manager } from "./types/enreach/manager/manager";
import { MsgBindOperatorEVMAccount } from "./types/enreach/manager/tx";
import { MsgGoWorkingResponse } from "./types/enreach/manager/tx";
import { MsgRegisterManager } from "./types/enreach/manager/tx";
import { MsgBindOperatorManagerAccount } from "./types/enreach/manager/tx";
import { MsgActivateManager } from "./types/enreach/manager/tx";
import { QueryGetManagerByRegionResponse } from "./types/enreach/manager/query";
import { MsgCreateOperatorResponse } from "./types/enreach/manager/tx";
import { GenesisState } from "./types/enreach/manager/genesis";
import { Params } from "./types/enreach/manager/params";
import { MsgUpdateParamsResponse } from "./types/enreach/manager/tx";
import { MsgRegisterManagerResponse } from "./types/enreach/manager/tx";
import { QueryGetOperatorRequest } from "./types/enreach/manager/query";
import { QueryAllOperatorRequest } from "./types/enreach/manager/query";
import { QueryAllOperatorResponse } from "./types/enreach/manager/query";
import { MsgUpdateManagerConnParams } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfoResponse } from "./types/enreach/manager/tx";
import { QueryAllManagerRequest } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionRequest } from "./types/enreach/manager/query";
import { Operator } from "./types/enreach/manager/operator";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.manager.MsgActivateManagerResponse", MsgActivateManagerResponse],
    ["/enreach.manager.MsgGoWorking", MsgGoWorking],
    ["/enreach.manager.MsgCreateOperator", MsgCreateOperator],
    ["/enreach.manager.MsgSetManagerRegionResponse", MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.QueryGetManagerResponse", QueryGetManagerResponse],
    ["/enreach.manager.QueryAllManagerResponse", QueryAllManagerResponse],
    ["/enreach.manager.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.manager.QueryGetOperatorResponse", QueryGetOperatorResponse],
    ["/enreach.manager.QueryGetManagerRequest", QueryGetManagerRequest],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgSetManagerRegion", MsgSetManagerRegion],
    ["/enreach.manager.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.manager.Manager", Manager],
    ["/enreach.manager.MsgBindOperatorEVMAccount", MsgBindOperatorEVMAccount],
    ["/enreach.manager.MsgGoWorkingResponse", MsgGoWorkingResponse],
    ["/enreach.manager.MsgRegisterManager", MsgRegisterManager],
    ["/enreach.manager.MsgBindOperatorManagerAccount", MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgActivateManager", MsgActivateManager],
    ["/enreach.manager.QueryGetManagerByRegionResponse", QueryGetManagerByRegionResponse],
    ["/enreach.manager.MsgCreateOperatorResponse", MsgCreateOperatorResponse],
    ["/enreach.manager.GenesisState", GenesisState],
    ["/enreach.manager.Params", Params],
    ["/enreach.manager.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", MsgRegisterManagerResponse],
    ["/enreach.manager.QueryGetOperatorRequest", QueryGetOperatorRequest],
    ["/enreach.manager.QueryAllOperatorRequest", QueryAllOperatorRequest],
    ["/enreach.manager.QueryAllOperatorResponse", QueryAllOperatorResponse],
    ["/enreach.manager.MsgUpdateManagerConnParams", MsgUpdateManagerConnParams],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.QueryAllManagerRequest", QueryAllManagerRequest],
    ["/enreach.manager.QueryGetManagerByRegionRequest", QueryGetManagerByRegionRequest],
    ["/enreach.manager.Operator", Operator],
    
];

export { msgTypes }