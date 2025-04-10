import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { ModuleCredential } from "./types/cosmos/auth/v1beta1/auth";
import { GenesisState } from "./types/cosmos/auth/v1beta1/genesis";
import { Bech32PrefixResponse } from "./types/cosmos/auth/v1beta1/query";
import { AddressBytesToStringResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryModuleAccountsResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountInfoResponse } from "./types/cosmos/auth/v1beta1/query";
import { AddressBytesToStringRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountAddressByIDRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountInfoRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryModuleAccountsRequest } from "./types/cosmos/auth/v1beta1/query";
import { Bech32PrefixRequest } from "./types/cosmos/auth/v1beta1/query";
import { MsgUpdateParams } from "./types/cosmos/auth/v1beta1/tx";
import { QueryAccountsResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/auth/v1beta1/query";
import { AddressStringToBytesResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryModuleAccountByNameResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountsRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryModuleAccountByNameRequest } from "./types/cosmos/auth/v1beta1/query";
import { AddressStringToBytesRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountAddressByIDResponse } from "./types/cosmos/auth/v1beta1/query";
import { Params } from "./types/cosmos/auth/v1beta1/auth";
import { BaseAccount } from "./types/cosmos/auth/v1beta1/auth";
import { ModuleAccount } from "./types/cosmos/auth/v1beta1/auth";
import { MsgUpdateParamsResponse } from "./types/cosmos/auth/v1beta1/tx";
import { QueryParamsResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountResponse } from "./types/cosmos/auth/v1beta1/query";
export { ModuleCredential, GenesisState, Bech32PrefixResponse, AddressBytesToStringResponse, QueryModuleAccountsResponse, QueryAccountInfoResponse, AddressBytesToStringRequest, QueryAccountAddressByIDRequest, QueryAccountInfoRequest, QueryModuleAccountsRequest, Bech32PrefixRequest, MsgUpdateParams, QueryAccountsResponse, QueryAccountRequest, QueryParamsRequest, AddressStringToBytesResponse, QueryModuleAccountByNameResponse, QueryAccountsRequest, QueryModuleAccountByNameRequest, AddressStringToBytesRequest, QueryAccountAddressByIDResponse, Params, BaseAccount, ModuleAccount, MsgUpdateParamsResponse, QueryParamsResponse, QueryAccountResponse };
type sendModuleCredentialParams = {
    value: ModuleCredential;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendBech32PrefixResponseParams = {
    value: Bech32PrefixResponse;
    fee?: StdFee;
    memo?: string;
};
type sendAddressBytesToStringResponseParams = {
    value: AddressBytesToStringResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryModuleAccountsResponseParams = {
    value: QueryModuleAccountsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountInfoResponseParams = {
    value: QueryAccountInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendAddressBytesToStringRequestParams = {
    value: AddressBytesToStringRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountAddressByIDRequestParams = {
    value: QueryAccountAddressByIDRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountInfoRequestParams = {
    value: QueryAccountInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryModuleAccountsRequestParams = {
    value: QueryModuleAccountsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendBech32PrefixRequestParams = {
    value: Bech32PrefixRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountsResponseParams = {
    value: QueryAccountsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountRequestParams = {
    value: QueryAccountRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendAddressStringToBytesResponseParams = {
    value: AddressStringToBytesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryModuleAccountByNameResponseParams = {
    value: QueryModuleAccountByNameResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountsRequestParams = {
    value: QueryAccountsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryModuleAccountByNameRequestParams = {
    value: QueryModuleAccountByNameRequest;
    fee?: StdFee;
    memo?: string;
};
type sendAddressStringToBytesRequestParams = {
    value: AddressStringToBytesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountAddressByIDResponseParams = {
    value: QueryAccountAddressByIDResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendBaseAccountParams = {
    value: BaseAccount;
    fee?: StdFee;
    memo?: string;
};
type sendModuleAccountParams = {
    value: ModuleAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAccountResponseParams = {
    value: QueryAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type moduleCredentialParams = {
    value: ModuleCredential;
};
type genesisStateParams = {
    value: GenesisState;
};
type bech32PrefixResponseParams = {
    value: Bech32PrefixResponse;
};
type addressBytesToStringResponseParams = {
    value: AddressBytesToStringResponse;
};
type queryModuleAccountsResponseParams = {
    value: QueryModuleAccountsResponse;
};
type queryAccountInfoResponseParams = {
    value: QueryAccountInfoResponse;
};
type addressBytesToStringRequestParams = {
    value: AddressBytesToStringRequest;
};
type queryAccountAddressByIdrequestParams = {
    value: QueryAccountAddressByIDRequest;
};
type queryAccountInfoRequestParams = {
    value: QueryAccountInfoRequest;
};
type queryModuleAccountsRequestParams = {
    value: QueryModuleAccountsRequest;
};
type bech32PrefixRequestParams = {
    value: Bech32PrefixRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryAccountsResponseParams = {
    value: QueryAccountsResponse;
};
type queryAccountRequestParams = {
    value: QueryAccountRequest;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type addressStringToBytesResponseParams = {
    value: AddressStringToBytesResponse;
};
type queryModuleAccountByNameResponseParams = {
    value: QueryModuleAccountByNameResponse;
};
type queryAccountsRequestParams = {
    value: QueryAccountsRequest;
};
type queryModuleAccountByNameRequestParams = {
    value: QueryModuleAccountByNameRequest;
};
type addressStringToBytesRequestParams = {
    value: AddressStringToBytesRequest;
};
type queryAccountAddressByIdresponseParams = {
    value: QueryAccountAddressByIDResponse;
};
type paramsParams = {
    value: Params;
};
type baseAccountParams = {
    value: BaseAccount;
};
type moduleAccountParams = {
    value: ModuleAccount;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryAccountResponseParams = {
    value: QueryAccountResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendModuleCredential({ value, fee, memo }: sendModuleCredentialParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendBech32PrefixResponse({ value, fee, memo }: sendBech32PrefixResponseParams): Promise<DeliverTxResponse>;
    sendAddressBytesToStringResponse({ value, fee, memo }: sendAddressBytesToStringResponseParams): Promise<DeliverTxResponse>;
    sendQueryModuleAccountsResponse({ value, fee, memo }: sendQueryModuleAccountsResponseParams): Promise<DeliverTxResponse>;
    sendQueryAccountInfoResponse({ value, fee, memo }: sendQueryAccountInfoResponseParams): Promise<DeliverTxResponse>;
    sendAddressBytesToStringRequest({ value, fee, memo }: sendAddressBytesToStringRequestParams): Promise<DeliverTxResponse>;
    sendQueryAccountAddressByIDRequest({ value, fee, memo }: sendQueryAccountAddressByIDRequestParams): Promise<DeliverTxResponse>;
    sendQueryAccountInfoRequest({ value, fee, memo }: sendQueryAccountInfoRequestParams): Promise<DeliverTxResponse>;
    sendQueryModuleAccountsRequest({ value, fee, memo }: sendQueryModuleAccountsRequestParams): Promise<DeliverTxResponse>;
    sendBech32PrefixRequest({ value, fee, memo }: sendBech32PrefixRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryAccountsResponse({ value, fee, memo }: sendQueryAccountsResponseParams): Promise<DeliverTxResponse>;
    sendQueryAccountRequest({ value, fee, memo }: sendQueryAccountRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendAddressStringToBytesResponse({ value, fee, memo }: sendAddressStringToBytesResponseParams): Promise<DeliverTxResponse>;
    sendQueryModuleAccountByNameResponse({ value, fee, memo }: sendQueryModuleAccountByNameResponseParams): Promise<DeliverTxResponse>;
    sendQueryAccountsRequest({ value, fee, memo }: sendQueryAccountsRequestParams): Promise<DeliverTxResponse>;
    sendQueryModuleAccountByNameRequest({ value, fee, memo }: sendQueryModuleAccountByNameRequestParams): Promise<DeliverTxResponse>;
    sendAddressStringToBytesRequest({ value, fee, memo }: sendAddressStringToBytesRequestParams): Promise<DeliverTxResponse>;
    sendQueryAccountAddressByIDResponse({ value, fee, memo }: sendQueryAccountAddressByIDResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendBaseAccount({ value, fee, memo }: sendBaseAccountParams): Promise<DeliverTxResponse>;
    sendModuleAccount({ value, fee, memo }: sendModuleAccountParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryAccountResponse({ value, fee, memo }: sendQueryAccountResponseParams): Promise<DeliverTxResponse>;
    moduleCredential({ value }: moduleCredentialParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    bech32PrefixResponse({ value }: bech32PrefixResponseParams): EncodeObject;
    addressBytesToStringResponse({ value }: addressBytesToStringResponseParams): EncodeObject;
    queryModuleAccountsResponse({ value }: queryModuleAccountsResponseParams): EncodeObject;
    queryAccountInfoResponse({ value }: queryAccountInfoResponseParams): EncodeObject;
    addressBytesToStringRequest({ value }: addressBytesToStringRequestParams): EncodeObject;
    queryAccountAddressByIdrequest({ value }: queryAccountAddressByIdrequestParams): EncodeObject;
    queryAccountInfoRequest({ value }: queryAccountInfoRequestParams): EncodeObject;
    queryModuleAccountsRequest({ value }: queryModuleAccountsRequestParams): EncodeObject;
    bech32PrefixRequest({ value }: bech32PrefixRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryAccountsResponse({ value }: queryAccountsResponseParams): EncodeObject;
    queryAccountRequest({ value }: queryAccountRequestParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    addressStringToBytesResponse({ value }: addressStringToBytesResponseParams): EncodeObject;
    queryModuleAccountByNameResponse({ value }: queryModuleAccountByNameResponseParams): EncodeObject;
    queryAccountsRequest({ value }: queryAccountsRequestParams): EncodeObject;
    queryModuleAccountByNameRequest({ value }: queryModuleAccountByNameRequestParams): EncodeObject;
    addressStringToBytesRequest({ value }: addressStringToBytesRequestParams): EncodeObject;
    queryAccountAddressByIdresponse({ value }: queryAccountAddressByIdresponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    baseAccount({ value }: baseAccountParams): EncodeObject;
    moduleAccount({ value }: moduleAccountParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryAccountResponse({ value }: queryAccountResponseParams): EncodeObject;
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
        CosmosAuthV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
