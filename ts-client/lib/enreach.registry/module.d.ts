import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgUpdateRegion } from "./types/enreach/registry/tx";
import { QueryGetRegionResponse } from "./types/enreach/registry/query";
import { QueryAllRegionRequest } from "./types/enreach/registry/query";
import { MsgUpdateRegionResponse } from "./types/enreach/registry/tx";
import { Region } from "./types/enreach/registry/region";
import { MsgUpdateSuperiorResponse } from "./types/enreach/registry/tx";
import { MsgCreateRegion } from "./types/enreach/registry/tx";
import { MsgUpdateParams } from "./types/enreach/registry/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/registry/tx";
import { MsgUpdateSuperior } from "./types/enreach/registry/tx";
import { QueryAllRegionResponse } from "./types/enreach/registry/query";
import { MsgCreateRegionResponse } from "./types/enreach/registry/tx";
import { MsgDeleteRegionResponse } from "./types/enreach/registry/tx";
import { GenesisState } from "./types/enreach/registry/genesis";
import { Params } from "./types/enreach/registry/params";
import { Superior } from "./types/enreach/registry/superior";
import { QueryParamsRequest } from "./types/enreach/registry/query";
import { QueryGetSuperiorResponse } from "./types/enreach/registry/query";
import { QueryGetSuperiorRequest } from "./types/enreach/registry/query";
import { MsgUpdateParamsResponse } from "./types/enreach/registry/tx";
import { MsgCreateSuperior } from "./types/enreach/registry/tx";
import { MsgDeleteRegion } from "./types/enreach/registry/tx";
import { QueryParamsResponse } from "./types/enreach/registry/query";
import { QueryGetRegionRequest } from "./types/enreach/registry/query";
export { MsgUpdateRegion, QueryGetRegionResponse, QueryAllRegionRequest, MsgUpdateRegionResponse, Region, MsgUpdateSuperiorResponse, MsgCreateRegion, MsgUpdateParams, MsgCreateSuperiorResponse, MsgUpdateSuperior, QueryAllRegionResponse, MsgCreateRegionResponse, MsgDeleteRegionResponse, GenesisState, Params, Superior, QueryParamsRequest, QueryGetSuperiorResponse, QueryGetSuperiorRequest, MsgUpdateParamsResponse, MsgCreateSuperior, MsgDeleteRegion, QueryParamsResponse, QueryGetRegionRequest };
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
type sendQueryAllRegionRequestParams = {
    value: QueryAllRegionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateRegionResponseParams = {
    value: MsgUpdateRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendRegionParams = {
    value: Region;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRegionParams = {
    value: MsgCreateRegion;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllRegionResponseParams = {
    value: QueryAllRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRegionResponseParams = {
    value: MsgCreateRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeleteRegionResponseParams = {
    value: MsgDeleteRegionResponse;
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
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeleteRegionParams = {
    value: MsgDeleteRegion;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetRegionRequestParams = {
    value: QueryGetRegionRequest;
    fee?: StdFee;
    memo?: string;
};
type msgUpdateRegionParams = {
    value: MsgUpdateRegion;
};
type queryGetRegionResponseParams = {
    value: QueryGetRegionResponse;
};
type queryAllRegionRequestParams = {
    value: QueryAllRegionRequest;
};
type msgUpdateRegionResponseParams = {
    value: MsgUpdateRegionResponse;
};
type regionParams = {
    value: Region;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type msgCreateRegionParams = {
    value: MsgCreateRegion;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type queryAllRegionResponseParams = {
    value: QueryAllRegionResponse;
};
type msgCreateRegionResponseParams = {
    value: MsgCreateRegionResponse;
};
type msgDeleteRegionResponseParams = {
    value: MsgDeleteRegionResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type paramsParams = {
    value: Params;
};
type superiorParams = {
    value: Superior;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type msgDeleteRegionParams = {
    value: MsgDeleteRegion;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetRegionRequestParams = {
    value: QueryGetRegionRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgUpdateRegion({ value, fee, memo }: sendMsgUpdateRegionParams): Promise<DeliverTxResponse>;
    sendQueryGetRegionResponse({ value, fee, memo }: sendQueryGetRegionResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllRegionRequest({ value, fee, memo }: sendQueryAllRegionRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateRegionResponse({ value, fee, memo }: sendMsgUpdateRegionResponseParams): Promise<DeliverTxResponse>;
    sendRegion({ value, fee, memo }: sendRegionParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateRegion({ value, fee, memo }: sendMsgCreateRegionParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryAllRegionResponse({ value, fee, memo }: sendQueryAllRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateRegionResponse({ value, fee, memo }: sendMsgCreateRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgDeleteRegionResponse({ value, fee, memo }: sendMsgDeleteRegionResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgDeleteRegion({ value, fee, memo }: sendMsgDeleteRegionParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetRegionRequest({ value, fee, memo }: sendQueryGetRegionRequestParams): Promise<DeliverTxResponse>;
    msgUpdateRegion({ value }: msgUpdateRegionParams): EncodeObject;
    queryGetRegionResponse({ value }: queryGetRegionResponseParams): EncodeObject;
    queryAllRegionRequest({ value }: queryAllRegionRequestParams): EncodeObject;
    msgUpdateRegionResponse({ value }: msgUpdateRegionResponseParams): EncodeObject;
    region({ value }: regionParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    msgCreateRegion({ value }: msgCreateRegionParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    queryAllRegionResponse({ value }: queryAllRegionResponseParams): EncodeObject;
    msgCreateRegionResponse({ value }: msgCreateRegionResponseParams): EncodeObject;
    msgDeleteRegionResponse({ value }: msgDeleteRegionResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    msgDeleteRegion({ value }: msgDeleteRegionParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetRegionRequest({ value }: queryGetRegionRequestParams): EncodeObject;
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
