import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
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
export { MsgRegisterManager, QueryGetOperatorResponse, QueryGetManagerResponse, QueryGetSuperiorResponse, MsgUpdateSuperior, MsgUpdateParamsResponse, MsgBindOperatorEVMAccount, QueryAllOperatorResponse, MsgGoWorking, Manager, Params, QueryGetManagerByRegionRequest, MsgSetManagerRegionResponse, MsgBindOperatorEVMAccountResponse, MsgRegisterManagerResponse, MsgUpdateSuperiorResponse, QueryParamsRequest, QueryGetManagerByRegionResponse, MsgCreateSuperiorResponse, QueryParamsResponse, QueryGetOperatorRequest, QueryGetManagerRequest, QueryGetSuperiorRequest, MsgActivateManager, MsgCreateOperatorResponse, MsgBindOperatorManagerAccountResponse, MsgUpdateManagerConnParams, MsgUpdateManagerConnParamsResponse, MsgUpdateOperatorBasicInfoResponse, Superior, Operator, GenesisState, QueryAllOperatorRequest, MsgUpdateParams, MsgBindOperatorManagerAccount, MsgSetManagerRegion, MsgUpdateOperatorBasicInfo, QueryAllManagerRequest, QueryAllManagerResponse, MsgCreateSuperior, MsgCreateOperator, MsgActivateManagerResponse, MsgGoWorkingResponse };
type sendMsgRegisterManagerParams = {
    value: MsgRegisterManager;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetOperatorResponseParams = {
    value: QueryGetOperatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerResponseParams = {
    value: QueryGetManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindOperatorEVMAccountParams = {
    value: MsgBindOperatorEVMAccount;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllOperatorResponseParams = {
    value: QueryAllOperatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGoWorkingParams = {
    value: MsgGoWorking;
    fee?: StdFee;
    memo?: string;
};
type sendManagerParams = {
    value: Manager;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerByRegionRequestParams = {
    value: QueryGetManagerByRegionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetManagerRegionResponseParams = {
    value: MsgSetManagerRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindOperatorEVMAccountResponseParams = {
    value: MsgBindOperatorEVMAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterManagerResponseParams = {
    value: MsgRegisterManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerByRegionResponseParams = {
    value: QueryGetManagerByRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetOperatorRequestParams = {
    value: QueryGetOperatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerRequestParams = {
    value: QueryGetManagerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgActivateManagerParams = {
    value: MsgActivateManager;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateOperatorResponseParams = {
    value: MsgCreateOperatorResponse;
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
type sendMsgUpdateManagerConnParamsResponseParams = {
    value: MsgUpdateManagerConnParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateOperatorBasicInfoResponseParams = {
    value: MsgUpdateOperatorBasicInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendOperatorParams = {
    value: Operator;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllOperatorRequestParams = {
    value: QueryAllOperatorRequest;
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
type sendMsgSetManagerRegionParams = {
    value: MsgSetManagerRegion;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateOperatorBasicInfoParams = {
    value: MsgUpdateOperatorBasicInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllManagerRequestParams = {
    value: QueryAllManagerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllManagerResponseParams = {
    value: QueryAllManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateOperatorParams = {
    value: MsgCreateOperator;
    fee?: StdFee;
    memo?: string;
};
type sendMsgActivateManagerResponseParams = {
    value: MsgActivateManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGoWorkingResponseParams = {
    value: MsgGoWorkingResponse;
    fee?: StdFee;
    memo?: string;
};
type msgRegisterManagerParams = {
    value: MsgRegisterManager;
};
type queryGetOperatorResponseParams = {
    value: QueryGetOperatorResponse;
};
type queryGetManagerResponseParams = {
    value: QueryGetManagerResponse;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgBindOperatorEvmaccountParams = {
    value: MsgBindOperatorEVMAccount;
};
type queryAllOperatorResponseParams = {
    value: QueryAllOperatorResponse;
};
type msgGoWorkingParams = {
    value: MsgGoWorking;
};
type managerParams = {
    value: Manager;
};
type paramsParams = {
    value: Params;
};
type queryGetManagerByRegionRequestParams = {
    value: QueryGetManagerByRegionRequest;
};
type msgSetManagerRegionResponseParams = {
    value: MsgSetManagerRegionResponse;
};
type msgBindOperatorEvmaccountResponseParams = {
    value: MsgBindOperatorEVMAccountResponse;
};
type msgRegisterManagerResponseParams = {
    value: MsgRegisterManagerResponse;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetManagerByRegionResponseParams = {
    value: QueryGetManagerByRegionResponse;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetOperatorRequestParams = {
    value: QueryGetOperatorRequest;
};
type queryGetManagerRequestParams = {
    value: QueryGetManagerRequest;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
type msgActivateManagerParams = {
    value: MsgActivateManager;
};
type msgCreateOperatorResponseParams = {
    value: MsgCreateOperatorResponse;
};
type msgBindOperatorManagerAccountResponseParams = {
    value: MsgBindOperatorManagerAccountResponse;
};
type msgUpdateManagerConnParamsParams = {
    value: MsgUpdateManagerConnParams;
};
type msgUpdateManagerConnParamsResponseParams = {
    value: MsgUpdateManagerConnParamsResponse;
};
type msgUpdateOperatorBasicInfoResponseParams = {
    value: MsgUpdateOperatorBasicInfoResponse;
};
type superiorParams = {
    value: Superior;
};
type operatorParams = {
    value: Operator;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryAllOperatorRequestParams = {
    value: QueryAllOperatorRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgBindOperatorManagerAccountParams = {
    value: MsgBindOperatorManagerAccount;
};
type msgSetManagerRegionParams = {
    value: MsgSetManagerRegion;
};
type msgUpdateOperatorBasicInfoParams = {
    value: MsgUpdateOperatorBasicInfo;
};
type queryAllManagerRequestParams = {
    value: QueryAllManagerRequest;
};
type queryAllManagerResponseParams = {
    value: QueryAllManagerResponse;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type msgCreateOperatorParams = {
    value: MsgCreateOperator;
};
type msgActivateManagerResponseParams = {
    value: MsgActivateManagerResponse;
};
type msgGoWorkingResponseParams = {
    value: MsgGoWorkingResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgRegisterManager({ value, fee, memo }: sendMsgRegisterManagerParams): Promise<DeliverTxResponse>;
    sendQueryGetOperatorResponse({ value, fee, memo }: sendQueryGetOperatorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerResponse({ value, fee, memo }: sendQueryGetManagerResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorEVMAccount({ value, fee, memo }: sendMsgBindOperatorEVMAccountParams): Promise<DeliverTxResponse>;
    sendQueryAllOperatorResponse({ value, fee, memo }: sendQueryAllOperatorResponseParams): Promise<DeliverTxResponse>;
    sendMsgGoWorking({ value, fee, memo }: sendMsgGoWorkingParams): Promise<DeliverTxResponse>;
    sendManager({ value, fee, memo }: sendManagerParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerByRegionRequest({ value, fee, memo }: sendQueryGetManagerByRegionRequestParams): Promise<DeliverTxResponse>;
    sendMsgSetManagerRegionResponse({ value, fee, memo }: sendMsgSetManagerRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorEVMAccountResponse({ value, fee, memo }: sendMsgBindOperatorEVMAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterManagerResponse({ value, fee, memo }: sendMsgRegisterManagerResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerByRegionResponse({ value, fee, memo }: sendQueryGetManagerByRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetOperatorRequest({ value, fee, memo }: sendQueryGetOperatorRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRequest({ value, fee, memo }: sendQueryGetManagerRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    sendMsgActivateManager({ value, fee, memo }: sendMsgActivateManagerParams): Promise<DeliverTxResponse>;
    sendMsgCreateOperatorResponse({ value, fee, memo }: sendMsgCreateOperatorResponseParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorManagerAccountResponse({ value, fee, memo }: sendMsgBindOperatorManagerAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateManagerConnParams({ value, fee, memo }: sendMsgUpdateManagerConnParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateManagerConnParamsResponse({ value, fee, memo }: sendMsgUpdateManagerConnParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateOperatorBasicInfoResponse({ value, fee, memo }: sendMsgUpdateOperatorBasicInfoResponseParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendOperator({ value, fee, memo }: sendOperatorParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryAllOperatorRequest({ value, fee, memo }: sendQueryAllOperatorRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorManagerAccount({ value, fee, memo }: sendMsgBindOperatorManagerAccountParams): Promise<DeliverTxResponse>;
    sendMsgSetManagerRegion({ value, fee, memo }: sendMsgSetManagerRegionParams): Promise<DeliverTxResponse>;
    sendMsgUpdateOperatorBasicInfo({ value, fee, memo }: sendMsgUpdateOperatorBasicInfoParams): Promise<DeliverTxResponse>;
    sendQueryAllManagerRequest({ value, fee, memo }: sendQueryAllManagerRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllManagerResponse({ value, fee, memo }: sendQueryAllManagerResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgCreateOperator({ value, fee, memo }: sendMsgCreateOperatorParams): Promise<DeliverTxResponse>;
    sendMsgActivateManagerResponse({ value, fee, memo }: sendMsgActivateManagerResponseParams): Promise<DeliverTxResponse>;
    sendMsgGoWorkingResponse({ value, fee, memo }: sendMsgGoWorkingResponseParams): Promise<DeliverTxResponse>;
    msgRegisterManager({ value }: msgRegisterManagerParams): EncodeObject;
    queryGetOperatorResponse({ value }: queryGetOperatorResponseParams): EncodeObject;
    queryGetManagerResponse({ value }: queryGetManagerResponseParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgBindOperatorEvmaccount({ value }: msgBindOperatorEvmaccountParams): EncodeObject;
    queryAllOperatorResponse({ value }: queryAllOperatorResponseParams): EncodeObject;
    msgGoWorking({ value }: msgGoWorkingParams): EncodeObject;
    manager({ value }: managerParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryGetManagerByRegionRequest({ value }: queryGetManagerByRegionRequestParams): EncodeObject;
    msgSetManagerRegionResponse({ value }: msgSetManagerRegionResponseParams): EncodeObject;
    msgBindOperatorEvmaccountResponse({ value }: msgBindOperatorEvmaccountResponseParams): EncodeObject;
    msgRegisterManagerResponse({ value }: msgRegisterManagerResponseParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetManagerByRegionResponse({ value }: queryGetManagerByRegionResponseParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetOperatorRequest({ value }: queryGetOperatorRequestParams): EncodeObject;
    queryGetManagerRequest({ value }: queryGetManagerRequestParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
    msgActivateManager({ value }: msgActivateManagerParams): EncodeObject;
    msgCreateOperatorResponse({ value }: msgCreateOperatorResponseParams): EncodeObject;
    msgBindOperatorManagerAccountResponse({ value }: msgBindOperatorManagerAccountResponseParams): EncodeObject;
    msgUpdateManagerConnParams({ value }: msgUpdateManagerConnParamsParams): EncodeObject;
    msgUpdateManagerConnParamsResponse({ value }: msgUpdateManagerConnParamsResponseParams): EncodeObject;
    msgUpdateOperatorBasicInfoResponse({ value }: msgUpdateOperatorBasicInfoResponseParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    operator({ value }: operatorParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryAllOperatorRequest({ value }: queryAllOperatorRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgBindOperatorManagerAccount({ value }: msgBindOperatorManagerAccountParams): EncodeObject;
    msgSetManagerRegion({ value }: msgSetManagerRegionParams): EncodeObject;
    msgUpdateOperatorBasicInfo({ value }: msgUpdateOperatorBasicInfoParams): EncodeObject;
    queryAllManagerRequest({ value }: queryAllManagerRequestParams): EncodeObject;
    queryAllManagerResponse({ value }: queryAllManagerResponseParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    msgCreateOperator({ value }: msgCreateOperatorParams): EncodeObject;
    msgActivateManagerResponse({ value }: msgActivateManagerResponseParams): EncodeObject;
    msgGoWorkingResponse({ value }: msgGoWorkingResponseParams): EncodeObject;
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
