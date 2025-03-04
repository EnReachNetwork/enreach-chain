import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgRegisterManager } from "./types/enreach/manager/tx";
import { QueryParamsRequest } from "./types/enreach/manager/query";
import { QueryParamsResponse } from "./types/enreach/manager/query";
import { QueryGetManagerRequest } from "./types/enreach/manager/query";
import { QueryAllManagerResponse } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionRequest } from "./types/enreach/manager/query";
import { Manager } from "./types/enreach/manager/manager";
import { MsgUpdateParamsResponse } from "./types/enreach/manager/tx";
import { MsgDeleteManagerResponse } from "./types/enreach/manager/tx";
import { GenesisState } from "./types/enreach/manager/genesis";
import { QueryGetManagerByRegionResponse } from "./types/enreach/manager/query";
import { Params } from "./types/enreach/manager/params";
import { MsgRegisterManagerResponse } from "./types/enreach/manager/tx";
import { MsgUpdateManager } from "./types/enreach/manager/tx";
import { MsgUpdateParams } from "./types/enreach/manager/tx";
import { MsgUpdateManagerResponse } from "./types/enreach/manager/tx";
import { QueryGetManagerResponse } from "./types/enreach/manager/query";
import { QueryAllManagerRequest } from "./types/enreach/manager/query";
import { MsgDeleteManager } from "./types/enreach/manager/tx";
export { MsgRegisterManager, QueryParamsRequest, QueryParamsResponse, QueryGetManagerRequest, QueryAllManagerResponse, QueryGetManagerByRegionRequest, Manager, MsgUpdateParamsResponse, MsgDeleteManagerResponse, GenesisState, QueryGetManagerByRegionResponse, Params, MsgRegisterManagerResponse, MsgUpdateManager, MsgUpdateParams, MsgUpdateManagerResponse, QueryGetManagerResponse, QueryAllManagerRequest, MsgDeleteManager };
type sendMsgRegisterManagerParams = {
    value: MsgRegisterManager;
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
type sendQueryGetManagerRequestParams = {
    value: QueryGetManagerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllManagerResponseParams = {
    value: QueryAllManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetManagerByRegionRequestParams = {
    value: QueryGetManagerByRegionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendManagerParams = {
    value: Manager;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeleteManagerResponseParams = {
    value: MsgDeleteManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
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
type sendMsgRegisterManagerResponseParams = {
    value: MsgRegisterManagerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateManagerParams = {
    value: MsgUpdateManager;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateManagerResponseParams = {
    value: MsgUpdateManagerResponse;
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
type sendMsgDeleteManagerParams = {
    value: MsgDeleteManager;
    fee?: StdFee;
    memo?: string;
};
type msgRegisterManagerParams = {
    value: MsgRegisterManager;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetManagerRequestParams = {
    value: QueryGetManagerRequest;
};
type queryAllManagerResponseParams = {
    value: QueryAllManagerResponse;
};
type queryGetManagerByRegionRequestParams = {
    value: QueryGetManagerByRegionRequest;
};
type managerParams = {
    value: Manager;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgDeleteManagerResponseParams = {
    value: MsgDeleteManagerResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryGetManagerByRegionResponseParams = {
    value: QueryGetManagerByRegionResponse;
};
type paramsParams = {
    value: Params;
};
type msgRegisterManagerResponseParams = {
    value: MsgRegisterManagerResponse;
};
type msgUpdateManagerParams = {
    value: MsgUpdateManager;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgUpdateManagerResponseParams = {
    value: MsgUpdateManagerResponse;
};
type queryGetManagerResponseParams = {
    value: QueryGetManagerResponse;
};
type queryAllManagerRequestParams = {
    value: QueryAllManagerRequest;
};
type msgDeleteManagerParams = {
    value: MsgDeleteManager;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgRegisterManager({ value, fee, memo }: sendMsgRegisterManagerParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerRequest({ value, fee, memo }: sendQueryGetManagerRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllManagerResponse({ value, fee, memo }: sendQueryAllManagerResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerByRegionRequest({ value, fee, memo }: sendQueryGetManagerByRegionRequestParams): Promise<DeliverTxResponse>;
    sendManager({ value, fee, memo }: sendManagerParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgDeleteManagerResponse({ value, fee, memo }: sendMsgDeleteManagerResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerByRegionResponse({ value, fee, memo }: sendQueryGetManagerByRegionResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgRegisterManagerResponse({ value, fee, memo }: sendMsgRegisterManagerResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateManager({ value, fee, memo }: sendMsgUpdateManagerParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateManagerResponse({ value, fee, memo }: sendMsgUpdateManagerResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetManagerResponse({ value, fee, memo }: sendQueryGetManagerResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllManagerRequest({ value, fee, memo }: sendQueryAllManagerRequestParams): Promise<DeliverTxResponse>;
    sendMsgDeleteManager({ value, fee, memo }: sendMsgDeleteManagerParams): Promise<DeliverTxResponse>;
    msgRegisterManager({ value }: msgRegisterManagerParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetManagerRequest({ value }: queryGetManagerRequestParams): EncodeObject;
    queryAllManagerResponse({ value }: queryAllManagerResponseParams): EncodeObject;
    queryGetManagerByRegionRequest({ value }: queryGetManagerByRegionRequestParams): EncodeObject;
    manager({ value }: managerParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgDeleteManagerResponse({ value }: msgDeleteManagerResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryGetManagerByRegionResponse({ value }: queryGetManagerByRegionResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgRegisterManagerResponse({ value }: msgRegisterManagerResponseParams): EncodeObject;
    msgUpdateManager({ value }: msgUpdateManagerParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgUpdateManagerResponse({ value }: msgUpdateManagerResponseParams): EncodeObject;
    queryGetManagerResponse({ value }: queryGetManagerResponseParams): EncodeObject;
    queryAllManagerRequest({ value }: queryAllManagerRequestParams): EncodeObject;
    msgDeleteManager({ value }: msgDeleteManagerParams): EncodeObject;
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
