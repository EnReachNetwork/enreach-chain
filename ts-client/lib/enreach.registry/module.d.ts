import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgCreateRegion } from "./types/enreach/registry/tx";
import { QueryParamsResponse } from "./types/enreach/registry/query";
import { MsgDeleteRegion } from "./types/enreach/registry/tx";
import { Params } from "./types/enreach/registry/params";
import { QueryGetRegionResponse } from "./types/enreach/registry/query";
import { QueryGetRegionRequest } from "./types/enreach/registry/query";
import { QueryAllRegionResponse } from "./types/enreach/registry/query";
import { MsgUpdateRegion } from "./types/enreach/registry/tx";
import { MsgUpdateParams } from "./types/enreach/registry/tx";
import { MsgUpdateParamsResponse } from "./types/enreach/registry/tx";
import { MsgUpdateRegionResponse } from "./types/enreach/registry/tx";
import { MsgDeleteRegionResponse } from "./types/enreach/registry/tx";
import { QueryParamsRequest } from "./types/enreach/registry/query";
import { GenesisState } from "./types/enreach/registry/genesis";
import { Region } from "./types/enreach/registry/region";
import { MsgCreateRegionResponse } from "./types/enreach/registry/tx";
import { QueryAllRegionRequest } from "./types/enreach/registry/query";
export { MsgCreateRegion, QueryParamsResponse, MsgDeleteRegion, Params, QueryGetRegionResponse, QueryGetRegionRequest, QueryAllRegionResponse, MsgUpdateRegion, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateRegionResponse, MsgDeleteRegionResponse, QueryParamsRequest, GenesisState, Region, MsgCreateRegionResponse, QueryAllRegionRequest };
type sendMsgCreateRegionParams = {
    value: MsgCreateRegion;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeleteRegionParams = {
    value: MsgDeleteRegion;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetRegionResponseParams = {
    value: QueryGetRegionResponse;
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
type sendMsgUpdateRegionParams = {
    value: MsgUpdateRegion;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
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
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
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
type sendQueryAllRegionRequestParams = {
    value: QueryAllRegionRequest;
    fee?: StdFee;
    memo?: string;
};
type msgCreateRegionParams = {
    value: MsgCreateRegion;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgDeleteRegionParams = {
    value: MsgDeleteRegion;
};
type paramsParams = {
    value: Params;
};
type queryGetRegionResponseParams = {
    value: QueryGetRegionResponse;
};
type queryGetRegionRequestParams = {
    value: QueryGetRegionRequest;
};
type queryAllRegionResponseParams = {
    value: QueryAllRegionResponse;
};
type msgUpdateRegionParams = {
    value: MsgUpdateRegion;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgUpdateRegionResponseParams = {
    value: MsgUpdateRegionResponse;
};
type msgDeleteRegionResponseParams = {
    value: MsgDeleteRegionResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
type regionParams = {
    value: Region;
};
type msgCreateRegionResponseParams = {
    value: MsgCreateRegionResponse;
};
type queryAllRegionRequestParams = {
    value: QueryAllRegionRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgCreateRegion({ value, fee, memo }: sendMsgCreateRegionParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgDeleteRegion({ value, fee, memo }: sendMsgDeleteRegionParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryGetRegionResponse({ value, fee, memo }: sendQueryGetRegionResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetRegionRequest({ value, fee, memo }: sendQueryGetRegionRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllRegionResponse({ value, fee, memo }: sendQueryAllRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateRegion({ value, fee, memo }: sendMsgUpdateRegionParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateRegionResponse({ value, fee, memo }: sendMsgUpdateRegionResponseParams): Promise<DeliverTxResponse>;
    sendMsgDeleteRegionResponse({ value, fee, memo }: sendMsgDeleteRegionResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendRegion({ value, fee, memo }: sendRegionParams): Promise<DeliverTxResponse>;
    sendMsgCreateRegionResponse({ value, fee, memo }: sendMsgCreateRegionResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllRegionRequest({ value, fee, memo }: sendQueryAllRegionRequestParams): Promise<DeliverTxResponse>;
    msgCreateRegion({ value }: msgCreateRegionParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgDeleteRegion({ value }: msgDeleteRegionParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryGetRegionResponse({ value }: queryGetRegionResponseParams): EncodeObject;
    queryGetRegionRequest({ value }: queryGetRegionRequestParams): EncodeObject;
    queryAllRegionResponse({ value }: queryAllRegionResponseParams): EncodeObject;
    msgUpdateRegion({ value }: msgUpdateRegionParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgUpdateRegionResponse({ value }: msgUpdateRegionResponseParams): EncodeObject;
    msgDeleteRegionResponse({ value }: msgDeleteRegionResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    region({ value }: regionParams): EncodeObject;
    msgCreateRegionResponse({ value }: msgCreateRegionResponseParams): EncodeObject;
    queryAllRegionRequest({ value }: queryAllRegionRequestParams): EncodeObject;
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
