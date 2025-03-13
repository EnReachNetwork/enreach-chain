import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
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
export { MsgActivateManagerResponse, MsgGoWorking, MsgCreateOperator, MsgSetManagerRegionResponse, MsgUpdateManagerConnParamsResponse, QueryGetManagerResponse, QueryAllManagerResponse, MsgUpdateParams, MsgBindOperatorEVMAccountResponse, MsgUpdateOperatorBasicInfo, QueryParamsRequest, QueryGetOperatorResponse, QueryGetManagerRequest, MsgBindOperatorManagerAccountResponse, MsgSetManagerRegion, QueryParamsResponse, Manager, MsgBindOperatorEVMAccount, MsgGoWorkingResponse, MsgRegisterManager, MsgBindOperatorManagerAccount, MsgActivateManager, QueryGetManagerByRegionResponse, MsgCreateOperatorResponse, GenesisState, Params, MsgUpdateParamsResponse, MsgRegisterManagerResponse, QueryGetOperatorRequest, QueryAllOperatorRequest, QueryAllOperatorResponse, MsgUpdateManagerConnParams, MsgUpdateOperatorBasicInfoResponse, QueryAllManagerRequest, QueryGetManagerByRegionRequest, Operator };
type sendMsgActivateManagerResponseParams = {
    value: MsgActivateManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGoWorkingParams = {
    value: MsgGoWorking;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateOperatorParams = {
    value: MsgCreateOperator;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetManagerRegionResponseParams = {
    value: MsgSetManagerRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateManagerConnParamsResponseParams = {
    value: MsgUpdateManagerConnParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerResponseParams = {
    value: QueryGetManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllManagerResponseParams = {
    value: QueryAllManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindOperatorEVMAccountResponseParams = {
    value: MsgBindOperatorEVMAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateOperatorBasicInfoParams = {
    value: MsgUpdateOperatorBasicInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
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
type sendMsgBindOperatorManagerAccountResponseParams = {
    value: MsgBindOperatorManagerAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetManagerRegionParams = {
    value: MsgSetManagerRegion;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendManagerParams = {
    value: Manager;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindOperatorEVMAccountParams = {
    value: MsgBindOperatorEVMAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGoWorkingResponseParams = {
    value: MsgGoWorkingResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterManagerParams = {
    value: MsgRegisterManager;
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
type sendQueryGetManagerByRegionResponseParams = {
    value: QueryGetManagerByRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateOperatorResponseParams = {
    value: MsgCreateOperatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterManagerResponseParams = {
    value: MsgRegisterManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetOperatorRequestParams = {
    value: QueryGetOperatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllOperatorRequestParams = {
    value: QueryAllOperatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllOperatorResponseParams = {
    value: QueryAllOperatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateManagerConnParamsParams = {
    value: MsgUpdateManagerConnParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateOperatorBasicInfoResponseParams = {
    value: MsgUpdateOperatorBasicInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllManagerRequestParams = {
    value: QueryAllManagerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerByRegionRequestParams = {
    value: QueryGetManagerByRegionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendOperatorParams = {
    value: Operator;
    fee?: StdFee;
    memo?: string;
};
type msgActivateManagerResponseParams = {
    value: MsgActivateManagerResponse;
};
type msgGoWorkingParams = {
    value: MsgGoWorking;
};
type msgCreateOperatorParams = {
    value: MsgCreateOperator;
};
type msgSetManagerRegionResponseParams = {
    value: MsgSetManagerRegionResponse;
};
type msgUpdateManagerConnParamsResponseParams = {
    value: MsgUpdateManagerConnParamsResponse;
};
type queryGetManagerResponseParams = {
    value: QueryGetManagerResponse;
};
type queryAllManagerResponseParams = {
    value: QueryAllManagerResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgBindOperatorEvmaccountResponseParams = {
    value: MsgBindOperatorEVMAccountResponse;
};
type msgUpdateOperatorBasicInfoParams = {
    value: MsgUpdateOperatorBasicInfo;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetOperatorResponseParams = {
    value: QueryGetOperatorResponse;
};
type queryGetManagerRequestParams = {
    value: QueryGetManagerRequest;
};
type msgBindOperatorManagerAccountResponseParams = {
    value: MsgBindOperatorManagerAccountResponse;
};
type msgSetManagerRegionParams = {
    value: MsgSetManagerRegion;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type managerParams = {
    value: Manager;
};
type msgBindOperatorEvmaccountParams = {
    value: MsgBindOperatorEVMAccount;
};
type msgGoWorkingResponseParams = {
    value: MsgGoWorkingResponse;
};
type msgRegisterManagerParams = {
    value: MsgRegisterManager;
};
type msgBindOperatorManagerAccountParams = {
    value: MsgBindOperatorManagerAccount;
};
type msgActivateManagerParams = {
    value: MsgActivateManager;
};
type queryGetManagerByRegionResponseParams = {
    value: QueryGetManagerByRegionResponse;
};
type msgCreateOperatorResponseParams = {
    value: MsgCreateOperatorResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type paramsParams = {
    value: Params;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgRegisterManagerResponseParams = {
    value: MsgRegisterManagerResponse;
};
type queryGetOperatorRequestParams = {
    value: QueryGetOperatorRequest;
};
type queryAllOperatorRequestParams = {
    value: QueryAllOperatorRequest;
};
type queryAllOperatorResponseParams = {
    value: QueryAllOperatorResponse;
};
type msgUpdateManagerConnParamsParams = {
    value: MsgUpdateManagerConnParams;
};
type msgUpdateOperatorBasicInfoResponseParams = {
    value: MsgUpdateOperatorBasicInfoResponse;
};
type queryAllManagerRequestParams = {
    value: QueryAllManagerRequest;
};
type queryGetManagerByRegionRequestParams = {
    value: QueryGetManagerByRegionRequest;
};
type operatorParams = {
    value: Operator;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgActivateManagerResponse({ value, fee, memo }: sendMsgActivateManagerResponseParams): Promise<DeliverTxResponse>;
    sendMsgGoWorking({ value, fee, memo }: sendMsgGoWorkingParams): Promise<DeliverTxResponse>;
    sendMsgCreateOperator({ value, fee, memo }: sendMsgCreateOperatorParams): Promise<DeliverTxResponse>;
    sendMsgSetManagerRegionResponse({ value, fee, memo }: sendMsgSetManagerRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateManagerConnParamsResponse({ value, fee, memo }: sendMsgUpdateManagerConnParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerResponse({ value, fee, memo }: sendQueryGetManagerResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllManagerResponse({ value, fee, memo }: sendQueryAllManagerResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorEVMAccountResponse({ value, fee, memo }: sendMsgBindOperatorEVMAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateOperatorBasicInfo({ value, fee, memo }: sendMsgUpdateOperatorBasicInfoParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetOperatorResponse({ value, fee, memo }: sendQueryGetOperatorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRequest({ value, fee, memo }: sendQueryGetManagerRequestParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorManagerAccountResponse({ value, fee, memo }: sendMsgBindOperatorManagerAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgSetManagerRegion({ value, fee, memo }: sendMsgSetManagerRegionParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendManager({ value, fee, memo }: sendManagerParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorEVMAccount({ value, fee, memo }: sendMsgBindOperatorEVMAccountParams): Promise<DeliverTxResponse>;
    sendMsgGoWorkingResponse({ value, fee, memo }: sendMsgGoWorkingResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterManager({ value, fee, memo }: sendMsgRegisterManagerParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorManagerAccount({ value, fee, memo }: sendMsgBindOperatorManagerAccountParams): Promise<DeliverTxResponse>;
    sendMsgActivateManager({ value, fee, memo }: sendMsgActivateManagerParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerByRegionResponse({ value, fee, memo }: sendQueryGetManagerByRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateOperatorResponse({ value, fee, memo }: sendMsgCreateOperatorResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterManagerResponse({ value, fee, memo }: sendMsgRegisterManagerResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetOperatorRequest({ value, fee, memo }: sendQueryGetOperatorRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllOperatorRequest({ value, fee, memo }: sendQueryAllOperatorRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllOperatorResponse({ value, fee, memo }: sendQueryAllOperatorResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateManagerConnParams({ value, fee, memo }: sendMsgUpdateManagerConnParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateOperatorBasicInfoResponse({ value, fee, memo }: sendMsgUpdateOperatorBasicInfoResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllManagerRequest({ value, fee, memo }: sendQueryAllManagerRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerByRegionRequest({ value, fee, memo }: sendQueryGetManagerByRegionRequestParams): Promise<DeliverTxResponse>;
    sendOperator({ value, fee, memo }: sendOperatorParams): Promise<DeliverTxResponse>;
    msgActivateManagerResponse({ value }: msgActivateManagerResponseParams): EncodeObject;
    msgGoWorking({ value }: msgGoWorkingParams): EncodeObject;
    msgCreateOperator({ value }: msgCreateOperatorParams): EncodeObject;
    msgSetManagerRegionResponse({ value }: msgSetManagerRegionResponseParams): EncodeObject;
    msgUpdateManagerConnParamsResponse({ value }: msgUpdateManagerConnParamsResponseParams): EncodeObject;
    queryGetManagerResponse({ value }: queryGetManagerResponseParams): EncodeObject;
    queryAllManagerResponse({ value }: queryAllManagerResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgBindOperatorEvmaccountResponse({ value }: msgBindOperatorEvmaccountResponseParams): EncodeObject;
    msgUpdateOperatorBasicInfo({ value }: msgUpdateOperatorBasicInfoParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetOperatorResponse({ value }: queryGetOperatorResponseParams): EncodeObject;
    queryGetManagerRequest({ value }: queryGetManagerRequestParams): EncodeObject;
    msgBindOperatorManagerAccountResponse({ value }: msgBindOperatorManagerAccountResponseParams): EncodeObject;
    msgSetManagerRegion({ value }: msgSetManagerRegionParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    manager({ value }: managerParams): EncodeObject;
    msgBindOperatorEvmaccount({ value }: msgBindOperatorEvmaccountParams): EncodeObject;
    msgGoWorkingResponse({ value }: msgGoWorkingResponseParams): EncodeObject;
    msgRegisterManager({ value }: msgRegisterManagerParams): EncodeObject;
    msgBindOperatorManagerAccount({ value }: msgBindOperatorManagerAccountParams): EncodeObject;
    msgActivateManager({ value }: msgActivateManagerParams): EncodeObject;
    queryGetManagerByRegionResponse({ value }: queryGetManagerByRegionResponseParams): EncodeObject;
    msgCreateOperatorResponse({ value }: msgCreateOperatorResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgRegisterManagerResponse({ value }: msgRegisterManagerResponseParams): EncodeObject;
    queryGetOperatorRequest({ value }: queryGetOperatorRequestParams): EncodeObject;
    queryAllOperatorRequest({ value }: queryAllOperatorRequestParams): EncodeObject;
    queryAllOperatorResponse({ value }: queryAllOperatorResponseParams): EncodeObject;
    msgUpdateManagerConnParams({ value }: msgUpdateManagerConnParamsParams): EncodeObject;
    msgUpdateOperatorBasicInfoResponse({ value }: msgUpdateOperatorBasicInfoResponseParams): EncodeObject;
    queryAllManagerRequest({ value }: queryAllManagerRequestParams): EncodeObject;
    queryGetManagerByRegionRequest({ value }: queryGetManagerByRegionRequestParams): EncodeObject;
    operator({ value }: operatorParams): EncodeObject;
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
