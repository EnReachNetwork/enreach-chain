import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryParamsRequest } from "./types/enreach/registry/query";
import { QueryParamsResponse } from "./types/enreach/registry/query";
import { QueryGetSuperiorResponse } from "./types/enreach/registry/query";
import { MsgUpdateSuperiorResponse } from "./types/enreach/registry/tx";
import { QueryAllRegionRequest } from "./types/enreach/registry/query";
import { MsgUpdateParamsResponse } from "./types/enreach/registry/tx";
import { MsgDeleteRegionResponse } from "./types/enreach/registry/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/registry/tx";
import { GenesisState } from "./types/enreach/registry/genesis";
import { QueryGetRegionRequest } from "./types/enreach/registry/query";
import { QueryAllRegionResponse } from "./types/enreach/registry/query";
import { Region } from "./types/enreach/registry/region";
import { MsgUpdateParams } from "./types/enreach/registry/tx";
import { Params } from "./types/enreach/registry/params";
import { MsgDeleteRegion } from "./types/enreach/registry/tx";
import { MsgCreateRegionResponse } from "./types/enreach/registry/tx";
import { QueryGetRegionResponse } from "./types/enreach/registry/query";
import { MsgCreateRegion } from "./types/enreach/registry/tx";
import { MsgUpdateRegion } from "./types/enreach/registry/tx";
import { Superior } from "./types/enreach/registry/superior";
import { MsgCreateSuperior } from "./types/enreach/registry/tx";
import { MsgUpdateSuperior } from "./types/enreach/registry/tx";
import { QueryGetSuperiorRequest } from "./types/enreach/registry/query";
import { MsgUpdateRegionResponse } from "./types/enreach/registry/tx";
export { QueryParamsRequest, QueryParamsResponse, QueryGetSuperiorResponse, MsgUpdateSuperiorResponse, QueryAllRegionRequest, MsgUpdateParamsResponse, MsgDeleteRegionResponse, MsgCreateSuperiorResponse, GenesisState, QueryGetRegionRequest, QueryAllRegionResponse, Region, MsgUpdateParams, Params, MsgDeleteRegion, MsgCreateRegionResponse, QueryGetRegionResponse, MsgCreateRegion, MsgUpdateRegion, Superior, MsgCreateSuperior, MsgUpdateSuperior, QueryGetSuperiorRequest, MsgUpdateRegionResponse };
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
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllRegionRequestParams = {
    value: QueryAllRegionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeleteRegionResponseParams = {
    value: MsgDeleteRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetRegionRequestParams = {
    value: QueryGetRegionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllRegionResponseParams = {
    value: QueryAllRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendRegionParams = {
    value: Region;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeleteRegionParams = {
    value: MsgDeleteRegion;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRegionResponseParams = {
    value: MsgCreateRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetRegionResponseParams = {
    value: QueryGetRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRegionParams = {
    value: MsgCreateRegion;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateRegionParams = {
    value: MsgUpdateRegion;
    fee?: StdFee;
    memo?: string;
};
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateRegionResponseParams = {
    value: MsgUpdateRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type queryAllRegionRequestParams = {
    value: QueryAllRegionRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgDeleteRegionResponseParams = {
    value: MsgDeleteRegionResponse;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryGetRegionRequestParams = {
    value: QueryGetRegionRequest;
};
type queryAllRegionResponseParams = {
    value: QueryAllRegionResponse;
};
type regionParams = {
    value: Region;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type paramsParams = {
    value: Params;
};
type msgDeleteRegionParams = {
    value: MsgDeleteRegion;
};
type msgCreateRegionResponseParams = {
    value: MsgCreateRegionResponse;
};
type queryGetRegionResponseParams = {
    value: QueryGetRegionResponse;
};
type msgCreateRegionParams = {
    value: MsgCreateRegion;
};
type msgUpdateRegionParams = {
    value: MsgUpdateRegion;
};
type superiorParams = {
    value: Superior;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
type msgUpdateRegionResponseParams = {
    value: MsgUpdateRegionResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllRegionRequest({ value, fee, memo }: sendQueryAllRegionRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgDeleteRegionResponse({ value, fee, memo }: sendMsgDeleteRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryGetRegionRequest({ value, fee, memo }: sendQueryGetRegionRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllRegionResponse({ value, fee, memo }: sendQueryAllRegionResponseParams): Promise<DeliverTxResponse>;
    sendRegion({ value, fee, memo }: sendRegionParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgDeleteRegion({ value, fee, memo }: sendMsgDeleteRegionParams): Promise<DeliverTxResponse>;
    sendMsgCreateRegionResponse({ value, fee, memo }: sendMsgCreateRegionResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetRegionResponse({ value, fee, memo }: sendQueryGetRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateRegion({ value, fee, memo }: sendMsgCreateRegionParams): Promise<DeliverTxResponse>;
    sendMsgUpdateRegion({ value, fee, memo }: sendMsgUpdateRegionParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateRegionResponse({ value, fee, memo }: sendMsgUpdateRegionResponseParams): Promise<DeliverTxResponse>;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    queryAllRegionRequest({ value }: queryAllRegionRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgDeleteRegionResponse({ value }: msgDeleteRegionResponseParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryGetRegionRequest({ value }: queryGetRegionRequestParams): EncodeObject;
    queryAllRegionResponse({ value }: queryAllRegionResponseParams): EncodeObject;
    region({ value }: regionParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgDeleteRegion({ value }: msgDeleteRegionParams): EncodeObject;
    msgCreateRegionResponse({ value }: msgCreateRegionResponseParams): EncodeObject;
    queryGetRegionResponse({ value }: queryGetRegionResponseParams): EncodeObject;
    msgCreateRegion({ value }: msgCreateRegionParams): EncodeObject;
    msgUpdateRegion({ value }: msgUpdateRegionParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
    msgUpdateRegionResponse({ value }: msgUpdateRegionResponseParams): EncodeObject;
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
