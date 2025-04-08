import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgUpdateParamsResponse } from "./types/enreach/manager/tx";
import { QueryParamsRequest } from "./types/enreach/manager/query";
import { QueryParamsResponse } from "./types/enreach/manager/query";
import { MsgCreateOperator } from "./types/enreach/manager/tx";
import { MsgCreateOperatorResponse } from "./types/enreach/manager/tx";
import { QueryAllOperatorResponse } from "./types/enreach/manager/query";
import { QueryGetManagerRequest } from "./types/enreach/manager/query";
import { MsgUpdateParams } from "./types/enreach/manager/tx";
import { MsgBindOperatorManagerAccount } from "./types/enreach/manager/tx";
import { MsgActivateManager } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfo } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfoResponse } from "./types/enreach/manager/tx";
import { MsgCreateSuperior } from "./types/enreach/manager/tx";
import { QueryAllOperatorRequest } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionRequest } from "./types/enreach/manager/query";
import { Superior } from "./types/enreach/manager/superior";
import { MsgBindOperatorEVMAccount } from "./types/enreach/manager/tx";
import { MsgRegisterManager } from "./types/enreach/manager/tx";
import { Params } from "./types/enreach/manager/params";
import { Manager } from "./types/enreach/manager/manager";
import { QueryGetSuperiorRequest } from "./types/enreach/manager/query";
import { MsgSetManagerRegionResponse } from "./types/enreach/manager/tx";
import { MsgActivateManagerResponse } from "./types/enreach/manager/tx";
import { MsgRegisterManagerResponse } from "./types/enreach/manager/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/manager/tx";
import { QueryGetOperatorRequest } from "./types/enreach/manager/query";
import { QueryGetManagerResponse } from "./types/enreach/manager/query";
import { QueryAllManagerRequest } from "./types/enreach/manager/query";
import { MsgBindOperatorManagerAccountResponse } from "./types/enreach/manager/tx";
import { MsgUpdateManagerConnParams } from "./types/enreach/manager/tx";
import { MsgBindOperatorEVMAccountResponse } from "./types/enreach/manager/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/manager/tx";
import { GenesisState } from "./types/enreach/manager/genesis";
import { QueryAllManagerResponse } from "./types/enreach/manager/query";
import { QueryGetSuperiorResponse } from "./types/enreach/manager/query";
import { MsgGoWorking } from "./types/enreach/manager/tx";
import { MsgGoWorkingResponse } from "./types/enreach/manager/tx";
import { MsgUpdateSuperior } from "./types/enreach/manager/tx";
import { QueryGetOperatorResponse } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionResponse } from "./types/enreach/manager/query";
import { Operator } from "./types/enreach/manager/operator";
import { MsgSetManagerRegion } from "./types/enreach/manager/tx";
import { MsgUpdateManagerConnParamsResponse } from "./types/enreach/manager/tx";
export { MsgUpdateParamsResponse, QueryParamsRequest, QueryParamsResponse, MsgCreateOperator, MsgCreateOperatorResponse, QueryAllOperatorResponse, QueryGetManagerRequest, MsgUpdateParams, MsgBindOperatorManagerAccount, MsgActivateManager, MsgUpdateOperatorBasicInfo, MsgUpdateOperatorBasicInfoResponse, MsgCreateSuperior, QueryAllOperatorRequest, QueryGetManagerByRegionRequest, Superior, MsgBindOperatorEVMAccount, MsgRegisterManager, Params, Manager, QueryGetSuperiorRequest, MsgSetManagerRegionResponse, MsgActivateManagerResponse, MsgRegisterManagerResponse, MsgCreateSuperiorResponse, QueryGetOperatorRequest, QueryGetManagerResponse, QueryAllManagerRequest, MsgBindOperatorManagerAccountResponse, MsgUpdateManagerConnParams, MsgBindOperatorEVMAccountResponse, MsgUpdateSuperiorResponse, GenesisState, QueryAllManagerResponse, QueryGetSuperiorResponse, MsgGoWorking, MsgGoWorkingResponse, MsgUpdateSuperior, QueryGetOperatorResponse, QueryGetManagerByRegionResponse, Operator, MsgSetManagerRegion, MsgUpdateManagerConnParamsResponse };
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
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateOperatorParams = {
    value: MsgCreateOperator;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateOperatorResponseParams = {
    value: MsgCreateOperatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllOperatorResponseParams = {
    value: QueryAllOperatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerRequestParams = {
    value: QueryGetManagerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindOperatorManagerAccountParams = {
    value: MsgBindOperatorManagerAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgActivateManagerParams = {
    value: MsgActivateManager;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateOperatorBasicInfoParams = {
    value: MsgUpdateOperatorBasicInfo;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateOperatorBasicInfoResponseParams = {
    value: MsgUpdateOperatorBasicInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllOperatorRequestParams = {
    value: QueryAllOperatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerByRegionRequestParams = {
    value: QueryGetManagerByRegionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindOperatorEVMAccountParams = {
    value: MsgBindOperatorEVMAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterManagerParams = {
    value: MsgRegisterManager;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendManagerParams = {
    value: Manager;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetManagerRegionResponseParams = {
    value: MsgSetManagerRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgActivateManagerResponseParams = {
    value: MsgActivateManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterManagerResponseParams = {
    value: MsgRegisterManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetOperatorRequestParams = {
    value: QueryGetOperatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerResponseParams = {
    value: QueryGetManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllManagerRequestParams = {
    value: QueryAllManagerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindOperatorManagerAccountResponseParams = {
    value: MsgBindOperatorManagerAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateManagerConnParamsParams = {
    value: MsgUpdateManagerConnParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindOperatorEVMAccountResponseParams = {
    value: MsgBindOperatorEVMAccountResponse;
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
type sendQueryAllManagerResponseParams = {
    value: QueryAllManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGoWorkingParams = {
    value: MsgGoWorking;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGoWorkingResponseParams = {
    value: MsgGoWorkingResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetOperatorResponseParams = {
    value: QueryGetOperatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerByRegionResponseParams = {
    value: QueryGetManagerByRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendOperatorParams = {
    value: Operator;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetManagerRegionParams = {
    value: MsgSetManagerRegion;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateManagerConnParamsResponseParams = {
    value: MsgUpdateManagerConnParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgCreateOperatorParams = {
    value: MsgCreateOperator;
};
type msgCreateOperatorResponseParams = {
    value: MsgCreateOperatorResponse;
};
type queryAllOperatorResponseParams = {
    value: QueryAllOperatorResponse;
};
type queryGetManagerRequestParams = {
    value: QueryGetManagerRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgBindOperatorManagerAccountParams = {
    value: MsgBindOperatorManagerAccount;
};
type msgActivateManagerParams = {
    value: MsgActivateManager;
};
type msgUpdateOperatorBasicInfoParams = {
    value: MsgUpdateOperatorBasicInfo;
};
type msgUpdateOperatorBasicInfoResponseParams = {
    value: MsgUpdateOperatorBasicInfoResponse;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type queryAllOperatorRequestParams = {
    value: QueryAllOperatorRequest;
};
type queryGetManagerByRegionRequestParams = {
    value: QueryGetManagerByRegionRequest;
};
type superiorParams = {
    value: Superior;
};
type msgBindOperatorEvmaccountParams = {
    value: MsgBindOperatorEVMAccount;
};
type msgRegisterManagerParams = {
    value: MsgRegisterManager;
};
type paramsParams = {
    value: Params;
};
type managerParams = {
    value: Manager;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
type msgSetManagerRegionResponseParams = {
    value: MsgSetManagerRegionResponse;
};
type msgActivateManagerResponseParams = {
    value: MsgActivateManagerResponse;
};
type msgRegisterManagerResponseParams = {
    value: MsgRegisterManagerResponse;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type queryGetOperatorRequestParams = {
    value: QueryGetOperatorRequest;
};
type queryGetManagerResponseParams = {
    value: QueryGetManagerResponse;
};
type queryAllManagerRequestParams = {
    value: QueryAllManagerRequest;
};
type msgBindOperatorManagerAccountResponseParams = {
    value: MsgBindOperatorManagerAccountResponse;
};
type msgUpdateManagerConnParamsParams = {
    value: MsgUpdateManagerConnParams;
};
type msgBindOperatorEvmaccountResponseParams = {
    value: MsgBindOperatorEVMAccountResponse;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryAllManagerResponseParams = {
    value: QueryAllManagerResponse;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type msgGoWorkingParams = {
    value: MsgGoWorking;
};
type msgGoWorkingResponseParams = {
    value: MsgGoWorkingResponse;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type queryGetOperatorResponseParams = {
    value: QueryGetOperatorResponse;
};
type queryGetManagerByRegionResponseParams = {
    value: QueryGetManagerByRegionResponse;
};
type operatorParams = {
    value: Operator;
};
type msgSetManagerRegionParams = {
    value: MsgSetManagerRegion;
};
type msgUpdateManagerConnParamsResponseParams = {
    value: MsgUpdateManagerConnParamsResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateOperator({ value, fee, memo }: sendMsgCreateOperatorParams): Promise<DeliverTxResponse>;
    sendMsgCreateOperatorResponse({ value, fee, memo }: sendMsgCreateOperatorResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllOperatorResponse({ value, fee, memo }: sendQueryAllOperatorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRequest({ value, fee, memo }: sendQueryGetManagerRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorManagerAccount({ value, fee, memo }: sendMsgBindOperatorManagerAccountParams): Promise<DeliverTxResponse>;
    sendMsgActivateManager({ value, fee, memo }: sendMsgActivateManagerParams): Promise<DeliverTxResponse>;
    sendMsgUpdateOperatorBasicInfo({ value, fee, memo }: sendMsgUpdateOperatorBasicInfoParams): Promise<DeliverTxResponse>;
    sendMsgUpdateOperatorBasicInfoResponse({ value, fee, memo }: sendMsgUpdateOperatorBasicInfoResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryAllOperatorRequest({ value, fee, memo }: sendQueryAllOperatorRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerByRegionRequest({ value, fee, memo }: sendQueryGetManagerByRegionRequestParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorEVMAccount({ value, fee, memo }: sendMsgBindOperatorEVMAccountParams): Promise<DeliverTxResponse>;
    sendMsgRegisterManager({ value, fee, memo }: sendMsgRegisterManagerParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendManager({ value, fee, memo }: sendManagerParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    sendMsgSetManagerRegionResponse({ value, fee, memo }: sendMsgSetManagerRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgActivateManagerResponse({ value, fee, memo }: sendMsgActivateManagerResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterManagerResponse({ value, fee, memo }: sendMsgRegisterManagerResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetOperatorRequest({ value, fee, memo }: sendQueryGetOperatorRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerResponse({ value, fee, memo }: sendQueryGetManagerResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllManagerRequest({ value, fee, memo }: sendQueryAllManagerRequestParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorManagerAccountResponse({ value, fee, memo }: sendMsgBindOperatorManagerAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateManagerConnParams({ value, fee, memo }: sendMsgUpdateManagerConnParamsParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorEVMAccountResponse({ value, fee, memo }: sendMsgBindOperatorEVMAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryAllManagerResponse({ value, fee, memo }: sendQueryAllManagerResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgGoWorking({ value, fee, memo }: sendMsgGoWorkingParams): Promise<DeliverTxResponse>;
    sendMsgGoWorkingResponse({ value, fee, memo }: sendMsgGoWorkingResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryGetOperatorResponse({ value, fee, memo }: sendQueryGetOperatorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerByRegionResponse({ value, fee, memo }: sendQueryGetManagerByRegionResponseParams): Promise<DeliverTxResponse>;
    sendOperator({ value, fee, memo }: sendOperatorParams): Promise<DeliverTxResponse>;
    sendMsgSetManagerRegion({ value, fee, memo }: sendMsgSetManagerRegionParams): Promise<DeliverTxResponse>;
    sendMsgUpdateManagerConnParamsResponse({ value, fee, memo }: sendMsgUpdateManagerConnParamsResponseParams): Promise<DeliverTxResponse>;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgCreateOperator({ value }: msgCreateOperatorParams): EncodeObject;
    msgCreateOperatorResponse({ value }: msgCreateOperatorResponseParams): EncodeObject;
    queryAllOperatorResponse({ value }: queryAllOperatorResponseParams): EncodeObject;
    queryGetManagerRequest({ value }: queryGetManagerRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgBindOperatorManagerAccount({ value }: msgBindOperatorManagerAccountParams): EncodeObject;
    msgActivateManager({ value }: msgActivateManagerParams): EncodeObject;
    msgUpdateOperatorBasicInfo({ value }: msgUpdateOperatorBasicInfoParams): EncodeObject;
    msgUpdateOperatorBasicInfoResponse({ value }: msgUpdateOperatorBasicInfoResponseParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    queryAllOperatorRequest({ value }: queryAllOperatorRequestParams): EncodeObject;
    queryGetManagerByRegionRequest({ value }: queryGetManagerByRegionRequestParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    msgBindOperatorEvmaccount({ value }: msgBindOperatorEvmaccountParams): EncodeObject;
    msgRegisterManager({ value }: msgRegisterManagerParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    manager({ value }: managerParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
    msgSetManagerRegionResponse({ value }: msgSetManagerRegionResponseParams): EncodeObject;
    msgActivateManagerResponse({ value }: msgActivateManagerResponseParams): EncodeObject;
    msgRegisterManagerResponse({ value }: msgRegisterManagerResponseParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    queryGetOperatorRequest({ value }: queryGetOperatorRequestParams): EncodeObject;
    queryGetManagerResponse({ value }: queryGetManagerResponseParams): EncodeObject;
    queryAllManagerRequest({ value }: queryAllManagerRequestParams): EncodeObject;
    msgBindOperatorManagerAccountResponse({ value }: msgBindOperatorManagerAccountResponseParams): EncodeObject;
    msgUpdateManagerConnParams({ value }: msgUpdateManagerConnParamsParams): EncodeObject;
    msgBindOperatorEvmaccountResponse({ value }: msgBindOperatorEvmaccountResponseParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryAllManagerResponse({ value }: queryAllManagerResponseParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    msgGoWorking({ value }: msgGoWorkingParams): EncodeObject;
    msgGoWorkingResponse({ value }: msgGoWorkingResponseParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    queryGetOperatorResponse({ value }: queryGetOperatorResponseParams): EncodeObject;
    queryGetManagerByRegionResponse({ value }: queryGetManagerByRegionResponseParams): EncodeObject;
    operator({ value }: operatorParams): EncodeObject;
    msgSetManagerRegion({ value }: msgSetManagerRegionParams): EncodeObject;
    msgUpdateManagerConnParamsResponse({ value }: msgUpdateManagerConnParamsResponseParams): EncodeObject;
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
        EnreachManager: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
