import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryParamsRequest } from "./types/cosmos/mint/v1beta1/query";
import { QueryInflationRequest } from "./types/cosmos/mint/v1beta1/query";
import { MsgUpdateParams } from "./types/cosmos/mint/v1beta1/tx";
import { QueryParamsResponse } from "./types/cosmos/mint/v1beta1/query";
import { QueryInflationResponse } from "./types/cosmos/mint/v1beta1/query";
import { QueryAnnualProvisionsResponse } from "./types/cosmos/mint/v1beta1/query";
import { MsgUpdateParamsResponse } from "./types/cosmos/mint/v1beta1/tx";
import { QueryAnnualProvisionsRequest } from "./types/cosmos/mint/v1beta1/query";
import { Params } from "./types/cosmos/mint/v1beta1/mint";
import { Minter } from "./types/cosmos/mint/v1beta1/mint";
import { GenesisState } from "./types/cosmos/mint/v1beta1/genesis";
export { QueryParamsRequest, QueryInflationRequest, MsgUpdateParams, QueryParamsResponse, QueryInflationResponse, QueryAnnualProvisionsResponse, MsgUpdateParamsResponse, QueryAnnualProvisionsRequest, Params, Minter, GenesisState };
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryInflationRequestParams = {
    value: QueryInflationRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryInflationResponseParams = {
    value: QueryInflationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAnnualProvisionsResponseParams = {
    value: QueryAnnualProvisionsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAnnualProvisionsRequestParams = {
    value: QueryAnnualProvisionsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMinterParams = {
    value: Minter;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryInflationRequestParams = {
    value: QueryInflationRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryInflationResponseParams = {
    value: QueryInflationResponse;
};
type queryAnnualProvisionsResponseParams = {
    value: QueryAnnualProvisionsResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryAnnualProvisionsRequestParams = {
    value: QueryAnnualProvisionsRequest;
};
type paramsParams = {
    value: Params;
};
type minterParams = {
    value: Minter;
};
type genesisStateParams = {
    value: GenesisState;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryInflationRequest({ value, fee, memo }: sendQueryInflationRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryInflationResponse({ value, fee, memo }: sendQueryInflationResponseParams): Promise<DeliverTxResponse>;
    sendQueryAnnualProvisionsResponse({ value, fee, memo }: sendQueryAnnualProvisionsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryAnnualProvisionsRequest({ value, fee, memo }: sendQueryAnnualProvisionsRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMinter({ value, fee, memo }: sendMinterParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryInflationRequest({ value }: queryInflationRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryInflationResponse({ value }: queryInflationResponseParams): EncodeObject;
    queryAnnualProvisionsResponse({ value }: queryAnnualProvisionsResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryAnnualProvisionsRequest({ value }: queryAnnualProvisionsRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    minter({ value }: minterParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
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
        CosmosMintV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
