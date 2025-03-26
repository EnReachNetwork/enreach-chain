import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgDeleteRegion } from "./types/enreach/registry/tx";
import { Region } from "./types/enreach/registry/region";
import { MsgDeleteRegionResponse } from "./types/enreach/registry/tx";
import { Superior } from "./types/enreach/registry/superior";
import { MsgUpdateRegion } from "./types/enreach/registry/tx";
import { QueryGetRegionResponse } from "./types/enreach/registry/query";
import { QueryAllRegionResponse } from "./types/enreach/registry/query";
import { MsgCreateRegion } from "./types/enreach/registry/tx";
import { MsgCreateSuperior } from "./types/enreach/registry/tx";
import { GenesisState } from "./types/enreach/registry/genesis";
import { MsgCreateRegionResponse } from "./types/enreach/registry/tx";
import { MsgUpdateRegionResponse } from "./types/enreach/registry/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/registry/tx";
import { QueryParamsRequest } from "./types/enreach/registry/query";
import { Params } from "./types/enreach/registry/params";
import { QueryParamsResponse } from "./types/enreach/registry/query";
import { MsgUpdateParams } from "./types/enreach/registry/tx";
import { QueryGetRegionRequest } from "./types/enreach/registry/query";
import { QueryAllRegionRequest } from "./types/enreach/registry/query";
import { QueryGetSuperiorResponse } from "./types/enreach/registry/query";
import { MsgUpdateParamsResponse } from "./types/enreach/registry/tx";
import { MsgUpdateSuperior } from "./types/enreach/registry/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/registry/tx";
import { QueryGetSuperiorRequest } from "./types/enreach/registry/query";
export { MsgDeleteRegion, Region, MsgDeleteRegionResponse, Superior, MsgUpdateRegion, QueryGetRegionResponse, QueryAllRegionResponse, MsgCreateRegion, MsgCreateSuperior, GenesisState, MsgCreateRegionResponse, MsgUpdateRegionResponse, MsgCreateSuperiorResponse, QueryParamsRequest, Params, QueryParamsResponse, MsgUpdateParams, QueryGetRegionRequest, QueryAllRegionRequest, QueryGetSuperiorResponse, MsgUpdateParamsResponse, MsgUpdateSuperior, MsgUpdateSuperiorResponse, QueryGetSuperiorRequest };
type sendMsgDeleteRegionParams = {
    value: MsgDeleteRegion;
    fee?: StdFee;
    memo?: string;
};
type sendRegionParams = {
    value: Region;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeleteRegionResponseParams = {
    value: MsgDeleteRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateRegionParams = {
    value: MsgUpdateRegion;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetRegionResponseParams = {
    value: QueryGetRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllRegionResponseParams = {
    value: QueryAllRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRegionParams = {
    value: MsgCreateRegion;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRegionResponseParams = {
    value: MsgCreateRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateRegionResponseParams = {
    value: MsgUpdateRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetRegionRequestParams = {
    value: QueryGetRegionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllRegionRequestParams = {
    value: QueryAllRegionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
    fee?: StdFee;
    memo?: string;
};
type msgDeleteRegionParams = {
    value: MsgDeleteRegion;
};
type regionParams = {
    value: Region;
};
type msgDeleteRegionResponseParams = {
    value: MsgDeleteRegionResponse;
};
type superiorParams = {
    value: Superior;
};
type msgUpdateRegionParams = {
    value: MsgUpdateRegion;
};
type queryGetRegionResponseParams = {
    value: QueryGetRegionResponse;
};
type queryAllRegionResponseParams = {
    value: QueryAllRegionResponse;
};
type msgCreateRegionParams = {
    value: MsgCreateRegion;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgCreateRegionResponseParams = {
    value: MsgCreateRegionResponse;
};
type msgUpdateRegionResponseParams = {
    value: MsgUpdateRegionResponse;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type paramsParams = {
    value: Params;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryGetRegionRequestParams = {
    value: QueryGetRegionRequest;
};
type queryAllRegionRequestParams = {
    value: QueryAllRegionRequest;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgDeleteRegion({ value, fee, memo }: sendMsgDeleteRegionParams): Promise<DeliverTxResponse>;
    sendRegion({ value, fee, memo }: sendRegionParams): Promise<DeliverTxResponse>;
    sendMsgDeleteRegionResponse({ value, fee, memo }: sendMsgDeleteRegionResponseParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgUpdateRegion({ value, fee, memo }: sendMsgUpdateRegionParams): Promise<DeliverTxResponse>;
    sendQueryGetRegionResponse({ value, fee, memo }: sendQueryGetRegionResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllRegionResponse({ value, fee, memo }: sendQueryAllRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateRegion({ value, fee, memo }: sendMsgCreateRegionParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgCreateRegionResponse({ value, fee, memo }: sendMsgCreateRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateRegionResponse({ value, fee, memo }: sendMsgUpdateRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryGetRegionRequest({ value, fee, memo }: sendQueryGetRegionRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllRegionRequest({ value, fee, memo }: sendQueryAllRegionRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    msgDeleteRegion({ value }: msgDeleteRegionParams): EncodeObject;
    region({ value }: regionParams): EncodeObject;
    msgDeleteRegionResponse({ value }: msgDeleteRegionResponseParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    msgUpdateRegion({ value }: msgUpdateRegionParams): EncodeObject;
    queryGetRegionResponse({ value }: queryGetRegionResponseParams): EncodeObject;
    queryAllRegionResponse({ value }: queryAllRegionResponseParams): EncodeObject;
    msgCreateRegion({ value }: msgCreateRegionParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgCreateRegionResponse({ value }: msgCreateRegionResponseParams): EncodeObject;
    msgUpdateRegionResponse({ value }: msgUpdateRegionResponseParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryGetRegionRequest({ value }: queryGetRegionRequestParams): EncodeObject;
    queryAllRegionRequest({ value }: queryAllRegionRequestParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
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
        EnreachRegistry: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
