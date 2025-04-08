import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgDeleteRegion } from "./types/enreach/registry/tx";
import { QueryParamsResponse } from "./types/enreach/registry/query";
import { QueryParamsRequest } from "./types/enreach/registry/query";
import { QueryGetRegionRequest } from "./types/enreach/registry/query";
import { MsgUpdateParamsResponse } from "./types/enreach/registry/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/registry/tx";
import { MsgUpdateRegionResponse } from "./types/enreach/registry/tx";
import { MsgDeleteRegionResponse } from "./types/enreach/registry/tx";
import { MsgUpdateRegion } from "./types/enreach/registry/tx";
import { QueryGetRegionResponse } from "./types/enreach/registry/query";
import { QueryAllRegionResponse } from "./types/enreach/registry/query";
import { Region } from "./types/enreach/registry/region";
import { MsgCreateRegionResponse } from "./types/enreach/registry/tx";
import { Superior } from "./types/enreach/registry/superior";
import { MsgUpdateParams } from "./types/enreach/registry/tx";
import { MsgCreateSuperior } from "./types/enreach/registry/tx";
import { QueryAllRegionRequest } from "./types/enreach/registry/query";
import { MsgCreateSuperiorResponse } from "./types/enreach/registry/tx";
import { GenesisState } from "./types/enreach/registry/genesis";
import { MsgCreateRegion } from "./types/enreach/registry/tx";
import { MsgUpdateSuperior } from "./types/enreach/registry/tx";
import { QueryGetSuperiorRequest } from "./types/enreach/registry/query";
import { QueryGetSuperiorResponse } from "./types/enreach/registry/query";
import { Params } from "./types/enreach/registry/params";
export { MsgDeleteRegion, QueryParamsResponse, QueryParamsRequest, QueryGetRegionRequest, MsgUpdateParamsResponse, MsgUpdateSuperiorResponse, MsgUpdateRegionResponse, MsgDeleteRegionResponse, MsgUpdateRegion, QueryGetRegionResponse, QueryAllRegionResponse, Region, MsgCreateRegionResponse, Superior, MsgUpdateParams, MsgCreateSuperior, QueryAllRegionRequest, MsgCreateSuperiorResponse, GenesisState, MsgCreateRegion, MsgUpdateSuperior, QueryGetSuperiorRequest, QueryGetSuperiorResponse, Params };
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
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetRegionRequestParams = {
    value: QueryGetRegionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateRegionResponseParams = {
    value: MsgUpdateRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeleteRegionResponseParams = {
    value: MsgDeleteRegionResponse;
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
type sendRegionParams = {
    value: Region;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateRegionResponseParams = {
    value: MsgCreateRegionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllRegionRequestParams = {
    value: QueryAllRegionRequest;
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
type sendMsgCreateRegionParams = {
    value: MsgCreateRegion;
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
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type msgDeleteRegionParams = {
    value: MsgDeleteRegion;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetRegionRequestParams = {
    value: QueryGetRegionRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type msgUpdateRegionResponseParams = {
    value: MsgUpdateRegionResponse;
};
type msgDeleteRegionResponseParams = {
    value: MsgDeleteRegionResponse;
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
type regionParams = {
    value: Region;
};
type msgCreateRegionResponseParams = {
    value: MsgCreateRegionResponse;
};
type superiorParams = {
    value: Superior;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type queryAllRegionRequestParams = {
    value: QueryAllRegionRequest;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgCreateRegionParams = {
    value: MsgCreateRegion;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type paramsParams = {
    value: Params;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgDeleteRegion({ value, fee, memo }: sendMsgDeleteRegionParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetRegionRequest({ value, fee, memo }: sendQueryGetRegionRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateRegionResponse({ value, fee, memo }: sendMsgUpdateRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgDeleteRegionResponse({ value, fee, memo }: sendMsgDeleteRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateRegion({ value, fee, memo }: sendMsgUpdateRegionParams): Promise<DeliverTxResponse>;
    sendQueryGetRegionResponse({ value, fee, memo }: sendQueryGetRegionResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllRegionResponse({ value, fee, memo }: sendQueryAllRegionResponseParams): Promise<DeliverTxResponse>;
    sendRegion({ value, fee, memo }: sendRegionParams): Promise<DeliverTxResponse>;
    sendMsgCreateRegionResponse({ value, fee, memo }: sendMsgCreateRegionResponseParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryAllRegionRequest({ value, fee, memo }: sendQueryAllRegionRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgCreateRegion({ value, fee, memo }: sendMsgCreateRegionParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    msgDeleteRegion({ value }: msgDeleteRegionParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetRegionRequest({ value }: queryGetRegionRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    msgUpdateRegionResponse({ value }: msgUpdateRegionResponseParams): EncodeObject;
    msgDeleteRegionResponse({ value }: msgDeleteRegionResponseParams): EncodeObject;
    msgUpdateRegion({ value }: msgUpdateRegionParams): EncodeObject;
    queryGetRegionResponse({ value }: queryGetRegionResponseParams): EncodeObject;
    queryAllRegionResponse({ value }: queryAllRegionResponseParams): EncodeObject;
    region({ value }: regionParams): EncodeObject;
    msgCreateRegionResponse({ value }: msgCreateRegionResponseParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    queryAllRegionRequest({ value }: queryAllRegionRequestParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgCreateRegion({ value }: msgCreateRegionParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
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
