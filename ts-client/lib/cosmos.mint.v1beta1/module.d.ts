import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { GenesisState } from "./types/cosmos/mint/v1beta1/genesis";
import { Params } from "./types/cosmos/mint/v1beta1/mint";
import { QueryInflationRequest } from "./types/cosmos/mint/v1beta1/query";
import { QueryAnnualProvisionsRequest } from "./types/cosmos/mint/v1beta1/query";
import { QueryAnnualProvisionsResponse } from "./types/cosmos/mint/v1beta1/query";
import { Minter } from "./types/cosmos/mint/v1beta1/mint";
import { MsgUpdateParams } from "./types/cosmos/mint/v1beta1/tx";
import { MsgUpdateParamsResponse } from "./types/cosmos/mint/v1beta1/tx";
import { QueryInflationResponse } from "./types/cosmos/mint/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/mint/v1beta1/query";
import { QueryParamsResponse } from "./types/cosmos/mint/v1beta1/query";
export { GenesisState, Params, QueryInflationRequest, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse, Minter, MsgUpdateParams, MsgUpdateParamsResponse, QueryInflationResponse, QueryParamsRequest, QueryParamsResponse };
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
type sendQueryInflationRequestParams = {
    value: QueryInflationRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAnnualProvisionsRequestParams = {
    value: QueryAnnualProvisionsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAnnualProvisionsResponseParams = {
    value: QueryAnnualProvisionsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMinterParams = {
    value: Minter;
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
type sendQueryInflationResponseParams = {
    value: QueryInflationResponse;
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
type genesisStateParams = {
    value: GenesisState;
};
type paramsParams = {
    value: Params;
};
type queryInflationRequestParams = {
    value: QueryInflationRequest;
};
type queryAnnualProvisionsRequestParams = {
    value: QueryAnnualProvisionsRequest;
};
type queryAnnualProvisionsResponseParams = {
    value: QueryAnnualProvisionsResponse;
};
type minterParams = {
    value: Minter;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryInflationResponseParams = {
    value: QueryInflationResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryInflationRequest({ value, fee, memo }: sendQueryInflationRequestParams): Promise<DeliverTxResponse>;
    sendQueryAnnualProvisionsRequest({ value, fee, memo }: sendQueryAnnualProvisionsRequestParams): Promise<DeliverTxResponse>;
    sendQueryAnnualProvisionsResponse({ value, fee, memo }: sendQueryAnnualProvisionsResponseParams): Promise<DeliverTxResponse>;
    sendMinter({ value, fee, memo }: sendMinterParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryInflationResponse({ value, fee, memo }: sendQueryInflationResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    genesisState({ value }: genesisStateParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryInflationRequest({ value }: queryInflationRequestParams): EncodeObject;
    queryAnnualProvisionsRequest({ value }: queryAnnualProvisionsRequestParams): EncodeObject;
    queryAnnualProvisionsResponse({ value }: queryAnnualProvisionsResponseParams): EncodeObject;
    minter({ value }: minterParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryInflationResponse({ value }: queryInflationResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
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
