import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgBindOperatorEVMAccount } from "./types/enreach/manager/tx";
import { QueryGetManagerResponse } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionResponse } from "./types/enreach/manager/query";
import { Params } from "./types/enreach/manager/params";
import { MsgUpdateParams } from "./types/enreach/manager/tx";
import { Operator } from "./types/enreach/manager/operator";
import { MsgUpdateOperatorBasicInfoResponse } from "./types/enreach/manager/tx";
import { MsgGoWorkingResponse } from "./types/enreach/manager/tx";
import { Manager } from "./types/enreach/manager/manager";
import { QueryAllManagerResponse } from "./types/enreach/manager/query";
import { MsgSetManagerRegion } from "./types/enreach/manager/tx";
import { MsgSetManagerRegionResponse } from "./types/enreach/manager/tx";
import { MsgUpdateOperatorBasicInfo } from "./types/enreach/manager/tx";
import { QueryAllOperatorResponse } from "./types/enreach/manager/query";
import { QueryGetEpochLengthRequest } from "./types/enreach/manager/query";
import { MsgRegisterManager } from "./types/enreach/manager/tx";
import { QueryGetOperatorRequest } from "./types/enreach/manager/query";
import { QueryGetCurrentEpochResponse } from "./types/enreach/manager/query";
import { MsgActivateManager } from "./types/enreach/manager/tx";
import { MsgRegisterManagerResponse } from "./types/enreach/manager/tx";
import { GenesisState } from "./types/enreach/manager/genesis";
import { QueryGetOperatorResponse } from "./types/enreach/manager/query";
import { QueryAllOperatorRequest } from "./types/enreach/manager/query";
import { QueryAllManagerRequest } from "./types/enreach/manager/query";
import { MsgBindOperatorEVMAccountResponse } from "./types/enreach/manager/tx";
import { QueryParamsRequest } from "./types/enreach/manager/query";
import { QueryGetManagerRequest } from "./types/enreach/manager/query";
import { MsgUpdateParamsResponse } from "./types/enreach/manager/tx";
import { MsgActivateManagerResponse } from "./types/enreach/manager/tx";
import { QueryGetCurrentEpochRequest } from "./types/enreach/manager/query";
import { MsgCreateOperator } from "./types/enreach/manager/tx";
import { MsgCreateOperatorResponse } from "./types/enreach/manager/tx";
import { MsgBindOperatorManagerAccountResponse } from "./types/enreach/manager/tx";
import { MsgUpdateManagerConnParamsResponse } from "./types/enreach/manager/tx";
import { MsgGoWorking } from "./types/enreach/manager/tx";
import { QueryParamsResponse } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionRequest } from "./types/enreach/manager/query";
import { QueryGetEpochLengthResponse } from "./types/enreach/manager/query";
import { MsgBindOperatorManagerAccount } from "./types/enreach/manager/tx";
import { MsgUpdateManagerConnParams } from "./types/enreach/manager/tx";
export { MsgBindOperatorEVMAccount, QueryGetManagerResponse, QueryGetManagerByRegionResponse, Params, MsgUpdateParams, Operator, MsgUpdateOperatorBasicInfoResponse, MsgGoWorkingResponse, Manager, QueryAllManagerResponse, MsgSetManagerRegion, MsgSetManagerRegionResponse, MsgUpdateOperatorBasicInfo, QueryAllOperatorResponse, QueryGetEpochLengthRequest, MsgRegisterManager, QueryGetOperatorRequest, QueryGetCurrentEpochResponse, MsgActivateManager, MsgRegisterManagerResponse, GenesisState, QueryGetOperatorResponse, QueryAllOperatorRequest, QueryAllManagerRequest, MsgBindOperatorEVMAccountResponse, QueryParamsRequest, QueryGetManagerRequest, MsgUpdateParamsResponse, MsgActivateManagerResponse, QueryGetCurrentEpochRequest, MsgCreateOperator, MsgCreateOperatorResponse, MsgBindOperatorManagerAccountResponse, MsgUpdateManagerConnParamsResponse, MsgGoWorking, QueryParamsResponse, QueryGetManagerByRegionRequest, QueryGetEpochLengthResponse, MsgBindOperatorManagerAccount, MsgUpdateManagerConnParams };
type sendMsgBindOperatorEVMAccountParams = {
    value: MsgBindOperatorEVMAccount;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerResponseParams = {
    value: QueryGetManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerByRegionResponseParams = {
    value: QueryGetManagerByRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendOperatorParams = {
    value: Operator;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateOperatorBasicInfoResponseParams = {
    value: MsgUpdateOperatorBasicInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGoWorkingResponseParams = {
    value: MsgGoWorkingResponse;
    fee?: StdFee;
    memo?: string;
};
type sendManagerParams = {
    value: Manager;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllManagerResponseParams = {
    value: QueryAllManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetManagerRegionParams = {
    value: MsgSetManagerRegion;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetManagerRegionResponseParams = {
    value: MsgSetManagerRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateOperatorBasicInfoParams = {
    value: MsgUpdateOperatorBasicInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllOperatorResponseParams = {
    value: QueryAllOperatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterManagerParams = {
    value: MsgRegisterManager;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetOperatorRequestParams = {
    value: QueryGetOperatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
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
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetOperatorResponseParams = {
    value: QueryGetOperatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllOperatorRequestParams = {
    value: QueryAllOperatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllManagerRequestParams = {
    value: QueryAllManagerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindOperatorEVMAccountResponseParams = {
    value: MsgBindOperatorEVMAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerRequestParams = {
    value: QueryGetManagerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgActivateManagerResponseParams = {
    value: MsgActivateManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
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
type sendMsgBindOperatorManagerAccountResponseParams = {
    value: MsgBindOperatorManagerAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateManagerConnParamsResponseParams = {
    value: MsgUpdateManagerConnParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGoWorkingParams = {
    value: MsgGoWorking;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerByRegionRequestParams = {
    value: QueryGetManagerByRegionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindOperatorManagerAccountParams = {
    value: MsgBindOperatorManagerAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateManagerConnParamsParams = {
    value: MsgUpdateManagerConnParams;
    fee?: StdFee;
    memo?: string;
};
type msgBindOperatorEvmaccountParams = {
    value: MsgBindOperatorEVMAccount;
};
type queryGetManagerResponseParams = {
    value: QueryGetManagerResponse;
};
type queryGetManagerByRegionResponseParams = {
    value: QueryGetManagerByRegionResponse;
};
type paramsParams = {
    value: Params;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type operatorParams = {
    value: Operator;
};
type msgUpdateOperatorBasicInfoResponseParams = {
    value: MsgUpdateOperatorBasicInfoResponse;
};
type msgGoWorkingResponseParams = {
    value: MsgGoWorkingResponse;
};
type managerParams = {
    value: Manager;
};
type queryAllManagerResponseParams = {
    value: QueryAllManagerResponse;
};
type msgSetManagerRegionParams = {
    value: MsgSetManagerRegion;
};
type msgSetManagerRegionResponseParams = {
    value: MsgSetManagerRegionResponse;
};
type msgUpdateOperatorBasicInfoParams = {
    value: MsgUpdateOperatorBasicInfo;
};
type queryAllOperatorResponseParams = {
    value: QueryAllOperatorResponse;
};
type queryGetEpochLengthRequestParams = {
    value: QueryGetEpochLengthRequest;
};
type msgRegisterManagerParams = {
    value: MsgRegisterManager;
};
type queryGetOperatorRequestParams = {
    value: QueryGetOperatorRequest;
};
type queryGetCurrentEpochResponseParams = {
    value: QueryGetCurrentEpochResponse;
};
type msgActivateManagerParams = {
    value: MsgActivateManager;
};
type msgRegisterManagerResponseParams = {
    value: MsgRegisterManagerResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryGetOperatorResponseParams = {
    value: QueryGetOperatorResponse;
};
type queryAllOperatorRequestParams = {
    value: QueryAllOperatorRequest;
};
type queryAllManagerRequestParams = {
    value: QueryAllManagerRequest;
};
type msgBindOperatorEvmaccountResponseParams = {
    value: MsgBindOperatorEVMAccountResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetManagerRequestParams = {
    value: QueryGetManagerRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgActivateManagerResponseParams = {
    value: MsgActivateManagerResponse;
};
type queryGetCurrentEpochRequestParams = {
    value: QueryGetCurrentEpochRequest;
};
type msgCreateOperatorParams = {
    value: MsgCreateOperator;
};
type msgCreateOperatorResponseParams = {
    value: MsgCreateOperatorResponse;
};
type msgBindOperatorManagerAccountResponseParams = {
    value: MsgBindOperatorManagerAccountResponse;
};
type msgUpdateManagerConnParamsResponseParams = {
    value: MsgUpdateManagerConnParamsResponse;
};
type msgGoWorkingParams = {
    value: MsgGoWorking;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetManagerByRegionRequestParams = {
    value: QueryGetManagerByRegionRequest;
};
type queryGetEpochLengthResponseParams = {
    value: QueryGetEpochLengthResponse;
};
type msgBindOperatorManagerAccountParams = {
    value: MsgBindOperatorManagerAccount;
};
type msgUpdateManagerConnParamsParams = {
    value: MsgUpdateManagerConnParams;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgBindOperatorEVMAccount({ value, fee, memo }: sendMsgBindOperatorEVMAccountParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerResponse({ value, fee, memo }: sendQueryGetManagerResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerByRegionResponse({ value, fee, memo }: sendQueryGetManagerByRegionResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendOperator({ value, fee, memo }: sendOperatorParams): Promise<DeliverTxResponse>;
    sendMsgUpdateOperatorBasicInfoResponse({ value, fee, memo }: sendMsgUpdateOperatorBasicInfoResponseParams): Promise<DeliverTxResponse>;
    sendMsgGoWorkingResponse({ value, fee, memo }: sendMsgGoWorkingResponseParams): Promise<DeliverTxResponse>;
    sendManager({ value, fee, memo }: sendManagerParams): Promise<DeliverTxResponse>;
    sendQueryAllManagerResponse({ value, fee, memo }: sendQueryAllManagerResponseParams): Promise<DeliverTxResponse>;
    sendMsgSetManagerRegion({ value, fee, memo }: sendMsgSetManagerRegionParams): Promise<DeliverTxResponse>;
    sendMsgSetManagerRegionResponse({ value, fee, memo }: sendMsgSetManagerRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateOperatorBasicInfo({ value, fee, memo }: sendMsgUpdateOperatorBasicInfoParams): Promise<DeliverTxResponse>;
    sendQueryAllOperatorResponse({ value, fee, memo }: sendQueryAllOperatorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthRequest({ value, fee, memo }: sendQueryGetEpochLengthRequestParams): Promise<DeliverTxResponse>;
    sendMsgRegisterManager({ value, fee, memo }: sendMsgRegisterManagerParams): Promise<DeliverTxResponse>;
    sendQueryGetOperatorRequest({ value, fee, memo }: sendQueryGetOperatorRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochResponse({ value, fee, memo }: sendQueryGetCurrentEpochResponseParams): Promise<DeliverTxResponse>;
    sendMsgActivateManager({ value, fee, memo }: sendMsgActivateManagerParams): Promise<DeliverTxResponse>;
    sendMsgRegisterManagerResponse({ value, fee, memo }: sendMsgRegisterManagerResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryGetOperatorResponse({ value, fee, memo }: sendQueryGetOperatorResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllOperatorRequest({ value, fee, memo }: sendQueryAllOperatorRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllManagerRequest({ value, fee, memo }: sendQueryAllManagerRequestParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorEVMAccountResponse({ value, fee, memo }: sendMsgBindOperatorEVMAccountResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRequest({ value, fee, memo }: sendQueryGetManagerRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgActivateManagerResponse({ value, fee, memo }: sendMsgActivateManagerResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetCurrentEpochRequest({ value, fee, memo }: sendQueryGetCurrentEpochRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateOperator({ value, fee, memo }: sendMsgCreateOperatorParams): Promise<DeliverTxResponse>;
    sendMsgCreateOperatorResponse({ value, fee, memo }: sendMsgCreateOperatorResponseParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorManagerAccountResponse({ value, fee, memo }: sendMsgBindOperatorManagerAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateManagerConnParamsResponse({ value, fee, memo }: sendMsgUpdateManagerConnParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgGoWorking({ value, fee, memo }: sendMsgGoWorkingParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerByRegionRequest({ value, fee, memo }: sendQueryGetManagerByRegionRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetEpochLengthResponse({ value, fee, memo }: sendQueryGetEpochLengthResponseParams): Promise<DeliverTxResponse>;
    sendMsgBindOperatorManagerAccount({ value, fee, memo }: sendMsgBindOperatorManagerAccountParams): Promise<DeliverTxResponse>;
    sendMsgUpdateManagerConnParams({ value, fee, memo }: sendMsgUpdateManagerConnParamsParams): Promise<DeliverTxResponse>;
    msgBindOperatorEvmaccount({ value }: msgBindOperatorEvmaccountParams): EncodeObject;
    queryGetManagerResponse({ value }: queryGetManagerResponseParams): EncodeObject;
    queryGetManagerByRegionResponse({ value }: queryGetManagerByRegionResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    operator({ value }: operatorParams): EncodeObject;
    msgUpdateOperatorBasicInfoResponse({ value }: msgUpdateOperatorBasicInfoResponseParams): EncodeObject;
    msgGoWorkingResponse({ value }: msgGoWorkingResponseParams): EncodeObject;
    manager({ value }: managerParams): EncodeObject;
    queryAllManagerResponse({ value }: queryAllManagerResponseParams): EncodeObject;
    msgSetManagerRegion({ value }: msgSetManagerRegionParams): EncodeObject;
    msgSetManagerRegionResponse({ value }: msgSetManagerRegionResponseParams): EncodeObject;
    msgUpdateOperatorBasicInfo({ value }: msgUpdateOperatorBasicInfoParams): EncodeObject;
    queryAllOperatorResponse({ value }: queryAllOperatorResponseParams): EncodeObject;
    queryGetEpochLengthRequest({ value }: queryGetEpochLengthRequestParams): EncodeObject;
    msgRegisterManager({ value }: msgRegisterManagerParams): EncodeObject;
    queryGetOperatorRequest({ value }: queryGetOperatorRequestParams): EncodeObject;
    queryGetCurrentEpochResponse({ value }: queryGetCurrentEpochResponseParams): EncodeObject;
    msgActivateManager({ value }: msgActivateManagerParams): EncodeObject;
    msgRegisterManagerResponse({ value }: msgRegisterManagerResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryGetOperatorResponse({ value }: queryGetOperatorResponseParams): EncodeObject;
    queryAllOperatorRequest({ value }: queryAllOperatorRequestParams): EncodeObject;
    queryAllManagerRequest({ value }: queryAllManagerRequestParams): EncodeObject;
    msgBindOperatorEvmaccountResponse({ value }: msgBindOperatorEvmaccountResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetManagerRequest({ value }: queryGetManagerRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgActivateManagerResponse({ value }: msgActivateManagerResponseParams): EncodeObject;
    queryGetCurrentEpochRequest({ value }: queryGetCurrentEpochRequestParams): EncodeObject;
    msgCreateOperator({ value }: msgCreateOperatorParams): EncodeObject;
    msgCreateOperatorResponse({ value }: msgCreateOperatorResponseParams): EncodeObject;
    msgBindOperatorManagerAccountResponse({ value }: msgBindOperatorManagerAccountResponseParams): EncodeObject;
    msgUpdateManagerConnParamsResponse({ value }: msgUpdateManagerConnParamsResponseParams): EncodeObject;
    msgGoWorking({ value }: msgGoWorkingParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetManagerByRegionRequest({ value }: queryGetManagerByRegionRequestParams): EncodeObject;
    queryGetEpochLengthResponse({ value }: queryGetEpochLengthResponseParams): EncodeObject;
    msgBindOperatorManagerAccount({ value }: msgBindOperatorManagerAccountParams): EncodeObject;
    msgUpdateManagerConnParams({ value }: msgUpdateManagerConnParamsParams): EncodeObject;
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
