import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgGoWorking } from "./types/enreach/manager/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/manager/tx";
import { QueryParamsResponse } from "./types/enreach/manager/query";
import { GenesisState } from "./types/enreach/manager/genesis";
import { MsgUpdateManagerConnParams } from "./types/enreach/manager/tx";
import { MsgSetManagerRegionResponse } from "./types/enreach/manager/tx";
import { MsgGoWorkingResponse } from "./types/enreach/manager/tx";
import { QueryGetOperatorRequest } from "./types/enreach/manager/query";
import { QueryAllOperatorResponse } from "./types/enreach/manager/query";
import { MsgUpdateParamsResponse } from "./types/enreach/manager/tx";
import { MsgCreateOperator } from "./types/enreach/manager/tx";
import { Operator } from "./types/enreach/manager/operator";
import { QueryAllManagerRequest } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionResponse } from "./types/enreach/manager/query";
import { QueryGetSuperiorResponse } from "./types/enreach/manager/query";
import { MsgCreateOperatorResponse } from "./types/enreach/manager/tx";
import { MsgActivateManager } from "./types/enreach/manager/tx";
import { MsgRegisterManagerResponse } from "./types/enreach/manager/tx";
import { QueryAllOperatorRequest } from "./types/enreach/manager/query";
import { QueryAllManagerResponse } from "./types/enreach/manager/query";
import { MsgBindOperatorEVMAccount } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfo } from "./types/enreach/manager/tx";
import { MsgActivateManagerResponse } from "./types/enreach/manager/tx";
import { Manager } from "./types/enreach/manager/manager";
import { QueryParamsRequest } from "./types/enreach/manager/query";
import { QueryGetManagerResponse } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionRequest } from "./types/enreach/manager/query";
import { QueryGetSuperiorRequest } from "./types/enreach/manager/query";
import { MsgCreateSuperior } from "./types/enreach/manager/tx";
import { Superior } from "./types/enreach/manager/superior";
import { MsgSetManagerRegion } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfoResponse } from "./types/enreach/manager/tx";
import { QueryGetOperatorResponse } from "./types/enreach/manager/query";
import { QueryGetManagerRequest } from "./types/enreach/manager/query";
import { MsgUpdateParams } from "./types/enreach/manager/tx";
import { MsgBindOperatorManagerAccount } from "./types/enreach/manager/tx";
import { MsgUpdateManagerConnParamsResponse } from "./types/enreach/manager/tx";
import { MsgBindOperatorEVMAccountResponse } from "./types/enreach/manager/tx";
import { Params } from "./types/enreach/manager/params";
import { MsgUpdateSuperior } from "./types/enreach/manager/tx";
import { MsgBindOperatorManagerAccountResponse } from "./types/enreach/manager/tx";
import { MsgRegisterManager } from "./types/enreach/manager/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/manager/tx";
export { MsgGoWorking, MsgCreateSuperiorResponse, QueryParamsResponse, GenesisState, MsgUpdateManagerConnParams, MsgSetManagerRegionResponse, MsgGoWorkingResponse, QueryGetOperatorRequest, QueryAllOperatorResponse, MsgUpdateParamsResponse, MsgCreateOperator, Operator, QueryAllManagerRequest, QueryGetManagerByRegionResponse, QueryGetSuperiorResponse, MsgCreateOperatorResponse, MsgActivateManager, MsgRegisterManagerResponse, QueryAllOperatorRequest, QueryAllManagerResponse, MsgBindOperatorEVMAccount, MsgUpdateOperatorBasicInfo, MsgActivateManagerResponse, Manager, QueryParamsRequest, QueryGetManagerResponse, QueryGetManagerByRegionRequest, QueryGetSuperiorRequest, MsgCreateSuperior, Superior, MsgSetManagerRegion, MsgUpdateOperatorBasicInfoResponse, QueryGetOperatorResponse, QueryGetManagerRequest, MsgUpdateParams, MsgBindOperatorManagerAccount, MsgUpdateManagerConnParamsResponse, MsgBindOperatorEVMAccountResponse, Params, MsgUpdateSuperior, MsgBindOperatorManagerAccountResponse, MsgRegisterManager, MsgUpdateSuperiorResponse };
type sendMsgGoWorkingParams = {
    value: MsgGoWorking;
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
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateManagerConnParamsParams = {
    value: MsgUpdateManagerConnParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetManagerRegionResponseParams = {
    value: MsgSetManagerRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGoWorkingResponseParams = {
    value: MsgGoWorkingResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetOperatorRequestParams = {
    value: QueryGetOperatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllOperatorResponseParams = {
    value: QueryAllOperatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateOperatorParams = {
    value: MsgCreateOperator;
    fee?: StdFee;
    memo?: string;
};
type sendOperatorParams = {
    value: Operator;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllManagerRequestParams = {
    value: QueryAllManagerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerByRegionResponseParams = {
    value: QueryGetManagerByRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateOperatorResponseParams = {
    value: MsgCreateOperatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgActivateManagerParams = {
    value: MsgActivateManager;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterManagerResponseParams = {
    value: MsgRegisterManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllOperatorRequestParams = {
    value: QueryAllOperatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllManagerResponseParams = {
    value: QueryAllManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindOperatorEVMAccountParams = {
    value: MsgBindOperatorEVMAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateOperatorBasicInfoParams = {
    value: MsgUpdateOperatorBasicInfo;
    fee?: StdFee;
    memo?: string;
};
type sendMsgActivateManagerResponseParams = {
    value: MsgActivateManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendManagerParams = {
    value: Manager;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerResponseParams = {
    value: QueryGetManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerByRegionRequestParams = {
    value: QueryGetManagerByRegionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetManagerRegionParams = {
    value: MsgSetManagerRegion;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateOperatorBasicInfoResponseParams = {
    value: MsgUpdateOperatorBasicInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetOperatorResponseParams = {
    value: QueryGetOperatorResponse;
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
type sendMsgUpdateManagerConnParamsResponseParams = {
    value: MsgUpdateManagerConnParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindOperatorEVMAccountResponseParams = {
    value: MsgBindOperatorEVMAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindOperatorManagerAccountResponseParams = {
    value: MsgBindOperatorManagerAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterManagerParams = {
    value: MsgRegisterManager;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type msgGoWorkingParams = {
    value: MsgGoWorking;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgUpdateManagerConnParamsParams = {
    value: MsgUpdateManagerConnParams;
};
type msgSetManagerRegionResponseParams = {
    value: MsgSetManagerRegionResponse;
};
type msgGoWorkingResponseParams = {
    value: MsgGoWorkingResponse;
};
type queryGetOperatorRequestParams = {
    value: QueryGetOperatorRequest;
};
type queryAllOperatorResponseParams = {
    value: QueryAllOperatorResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgCreateOperatorParams = {
    value: MsgCreateOperator;
};
type operatorParams = {
    value: Operator;
};
type queryAllManagerRequestParams = {
    value: QueryAllManagerRequest;
};
type queryGetManagerByRegionResponseParams = {
    value: QueryGetManagerByRegionResponse;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type msgCreateOperatorResponseParams = {
    value: MsgCreateOperatorResponse;
};
type msgActivateManagerParams = {
    value: MsgActivateManager;
};
type msgRegisterManagerResponseParams = {
    value: MsgRegisterManagerResponse;
};
type queryAllOperatorRequestParams = {
    value: QueryAllOperatorRequest;
};
type queryAllManagerResponseParams = {
    value: QueryAllManagerResponse;
};
type msgBindOperatorEvmaccountParams = {
    value: MsgBindOperatorEVMAccount;
};
type msgUpdateOperatorBasicInfoParams = {
    value: MsgUpdateOperatorBasicInfo;
};
type msgActivateManagerResponseParams = {
    value: MsgActivateManagerResponse;
};
type managerParams = {
    value: Manager;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetManagerResponseParams = {
    value: QueryGetManagerResponse;
};
type queryGetManagerByRegionRequestParams = {
    value: QueryGetManagerByRegionRequest;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type superiorParams = {
    value: Superior;
};
type msgSetManagerRegionParams = {
    value: MsgSetManagerRegion;
};
type msgUpdateOperatorBasicInfoResponseParams = {
    value: MsgUpdateOperatorBasicInfoResponse;
};
type queryGetOperatorResponseParams = {
    value: QueryGetOperatorResponse;
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
type msgUpdateManagerConnParamsResponseParams = {
    value: MsgUpdateManagerConnParamsResponse;
};
type msgBindOperatorEvmaccountResponseParams = {
    value: MsgBindOperatorEVMAccountResponse;
};
type paramsParams = {
    value: Params;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type msgBindOperatorManagerAccountResponseParams = {
    value: MsgBindOperatorManagerAccountResponse;
};
type msgRegisterManagerParams = {
    value: MsgRegisterManager;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgGoWorking({ value, fee, memo }: sendMsgGoWorkingParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgUpdateManagerConnParams({ value, fee, memo }: sendMsgUpdateManagerConnParamsParams): Promise<DeliverTxResponse>;
    sendMsgSetManagerRegionResponse({ value, fee, memo }: sendMsgSetManagerRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgGoWorkingResponse({ value, fee, memo }: sendMsgGoWorkingResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetOperatorRequest({ value, fee, memo }: sendQueryGetOperatorRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllOperatorResponse({ value, fee, memo }: sendQueryAllOperatorResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateOperator({ value, fee, memo }: sendMsgCreateOperatorParams): Promise<DeliverTxResponse>;
    sendOperator({ value, fee, memo }: sendOperatorParams): Promise<DeliverTxResponse>;
    sendQueryAllManagerRequest({ value, fee, memo }: sendQueryAllManagerRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerByRegionResponse({ value, fee, memo }: sendQueryGetManagerByRegionResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateOperatorResponse({ value, fee, memo }: sendMsgCreateOperatorResponseParams): Promise<DeliverTxResponse>;
    sendMsgActivateManager({ value, fee, memo }: sendMsgActivateManagerParams): Promise<DeliverTxResponse>;
    sendMsgRegisterManagerResponse({ value, fee, memo }: sendMsgRegisterManagerResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllOperatorRequest({ value, fee, memo }: sendQueryAllOperatorRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllManagerResponse({ value, fee, memo }: sendQueryAllManagerResponseParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorEVMAccount({ value, fee, memo }: sendMsgBindOperatorEVMAccountParams): Promise<DeliverTxResponse>;
    sendMsgUpdateOperatorBasicInfo({ value, fee, memo }: sendMsgUpdateOperatorBasicInfoParams): Promise<DeliverTxResponse>;
    sendMsgActivateManagerResponse({ value, fee, memo }: sendMsgActivateManagerResponseParams): Promise<DeliverTxResponse>;
    sendManager({ value, fee, memo }: sendManagerParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerResponse({ value, fee, memo }: sendQueryGetManagerResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerByRegionRequest({ value, fee, memo }: sendQueryGetManagerByRegionRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgSetManagerRegion({ value, fee, memo }: sendMsgSetManagerRegionParams): Promise<DeliverTxResponse>;
    sendMsgUpdateOperatorBasicInfoResponse({ value, fee, memo }: sendMsgUpdateOperatorBasicInfoResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetOperatorResponse({ value, fee, memo }: sendQueryGetOperatorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRequest({ value, fee, memo }: sendQueryGetManagerRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorManagerAccount({ value, fee, memo }: sendMsgBindOperatorManagerAccountParams): Promise<DeliverTxResponse>;
    sendMsgUpdateManagerConnParamsResponse({ value, fee, memo }: sendMsgUpdateManagerConnParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorEVMAccountResponse({ value, fee, memo }: sendMsgBindOperatorEVMAccountResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorManagerAccountResponse({ value, fee, memo }: sendMsgBindOperatorManagerAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterManager({ value, fee, memo }: sendMsgRegisterManagerParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    msgGoWorking({ value }: msgGoWorkingParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgUpdateManagerConnParams({ value }: msgUpdateManagerConnParamsParams): EncodeObject;
    msgSetManagerRegionResponse({ value }: msgSetManagerRegionResponseParams): EncodeObject;
    msgGoWorkingResponse({ value }: msgGoWorkingResponseParams): EncodeObject;
    queryGetOperatorRequest({ value }: queryGetOperatorRequestParams): EncodeObject;
    queryAllOperatorResponse({ value }: queryAllOperatorResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgCreateOperator({ value }: msgCreateOperatorParams): EncodeObject;
    operator({ value }: operatorParams): EncodeObject;
    queryAllManagerRequest({ value }: queryAllManagerRequestParams): EncodeObject;
    queryGetManagerByRegionResponse({ value }: queryGetManagerByRegionResponseParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    msgCreateOperatorResponse({ value }: msgCreateOperatorResponseParams): EncodeObject;
    msgActivateManager({ value }: msgActivateManagerParams): EncodeObject;
    msgRegisterManagerResponse({ value }: msgRegisterManagerResponseParams): EncodeObject;
    queryAllOperatorRequest({ value }: queryAllOperatorRequestParams): EncodeObject;
    queryAllManagerResponse({ value }: queryAllManagerResponseParams): EncodeObject;
    msgBindOperatorEvmaccount({ value }: msgBindOperatorEvmaccountParams): EncodeObject;
    msgUpdateOperatorBasicInfo({ value }: msgUpdateOperatorBasicInfoParams): EncodeObject;
    msgActivateManagerResponse({ value }: msgActivateManagerResponseParams): EncodeObject;
    manager({ value }: managerParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetManagerResponse({ value }: queryGetManagerResponseParams): EncodeObject;
    queryGetManagerByRegionRequest({ value }: queryGetManagerByRegionRequestParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    msgSetManagerRegion({ value }: msgSetManagerRegionParams): EncodeObject;
    msgUpdateOperatorBasicInfoResponse({ value }: msgUpdateOperatorBasicInfoResponseParams): EncodeObject;
    queryGetOperatorResponse({ value }: queryGetOperatorResponseParams): EncodeObject;
    queryGetManagerRequest({ value }: queryGetManagerRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgBindOperatorManagerAccount({ value }: msgBindOperatorManagerAccountParams): EncodeObject;
    msgUpdateManagerConnParamsResponse({ value }: msgUpdateManagerConnParamsResponseParams): EncodeObject;
    msgBindOperatorEvmaccountResponse({ value }: msgBindOperatorEvmaccountResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    msgBindOperatorManagerAccountResponse({ value }: msgBindOperatorManagerAccountResponseParams): EncodeObject;
    msgRegisterManager({ value }: msgRegisterManagerParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
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
