import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Coin } from "../../base/v1beta1/coin";
import { Metadata, Params, SendEnabled } from "./bank";
export declare const protobufPackage = "cosmos.bank.v1beta1";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
    /** balance is the balance of the coin. */
    balance: Coin | undefined;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequest {
    /** address is the address to query balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
    /**
     * resolve_denom is the flag to resolve the denom into a human-readable form from the metadata.
     *
     * Since: cosmos-sdk 0.50
     */
    resolveDenom: boolean;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponse {
    /** balances is the balances of all the coins. */
    balances: Coin[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesRequest {
    /** address is the address to query spendable balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesResponse {
    /** balances is the spendable balances of all the coins. */
    balances: Coin[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomRequest {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomResponse {
    /** balance is the balance of the coin. */
    balance: Coin | undefined;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequest {
    /**
     * pagination defines an optional pagination for the request.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination: PageRequest | undefined;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponse {
    /** supply is the supply of the coins */
    supply: Coin[];
    /**
     * pagination defines the pagination in the response.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination: PageResponse | undefined;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
    /** denom is the coin denom to query balances for. */
    denom: string;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
    /** amount is the supply of the coin. */
    amount: Coin | undefined;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponse {
    /** params provides the parameters of the bank module. */
    params: Params | undefined;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponse {
    /** metadata provides the client information for all the registered tokens. */
    metadatas: Metadata[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequest {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponse {
    /** metadata describes and provides all the client information for the requested token. */
    metadata: Metadata | undefined;
}
/**
 * QueryDenomMetadataByQueryStringRequest is the request type for the Query/DenomMetadata RPC method.
 * Identical with QueryDenomMetadataRequest but receives denom as query string.
 */
export interface QueryDenomMetadataByQueryStringRequest {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
/**
 * QueryDenomMetadataByQueryStringResponse is the response type for the Query/DenomMetadata RPC
 * method. Identical with QueryDenomMetadataResponse but receives denom as query string in request.
 */
export interface QueryDenomMetadataByQueryStringResponse {
    /** metadata describes and provides all the client information for the requested token. */
    metadata: Metadata | undefined;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */
export interface QueryDenomOwnersRequest {
    /** denom defines the coin denomination to query all account holders for. */
    denom: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 *
 * Since: cosmos-sdk 0.46
 */
export interface DenomOwner {
    /** address defines the address that owns a particular denomination. */
    address: string;
    /** balance is the balance of the denominated coin for an account. */
    balance: Coin | undefined;
}
/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryDenomOwnersResponse {
    denomOwners: DenomOwner[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/**
 * QueryDenomOwnersByQueryRequest defines the request type for the DenomOwnersByQuery RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 *
 * Since: cosmos-sdk 0.50.3
 */
export interface QueryDenomOwnersByQueryRequest {
    /** denom defines the coin denomination to query all account holders for. */
    denom: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/**
 * QueryDenomOwnersByQueryResponse defines the RPC response of a DenomOwnersByQuery RPC query.
 *
 * Since: cosmos-sdk 0.50.3
 */
export interface QueryDenomOwnersByQueryResponse {
    denomOwners: DenomOwner[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledRequest {
    /** denoms is the specific denoms you want look up. Leave empty to get all entries. */
    denoms: string[];
    /**
     * pagination defines an optional pagination for the request. This field is
     * only read if the denoms field is empty.
     */
    pagination: PageRequest | undefined;
}
/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledResponse {
    sendEnabled: SendEnabled[];
    /**
     * pagination defines the pagination in the response. This field is only
     * populated if the denoms field in the request is empty.
     */
    pagination: PageResponse | undefined;
}
export declare const QueryBalanceRequest: {
    encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    create<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(base?: I): QueryBalanceRequest;
    fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(object: I): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    create<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(base?: I): QueryBalanceResponse;
    fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(object: I): QueryBalanceResponse;
};
export declare const QueryAllBalancesRequest: {
    encode(message: QueryAllBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesRequest;
    fromJSON(object: any): QueryAllBalancesRequest;
    toJSON(message: QueryAllBalancesRequest): unknown;
    create<I extends Exact<DeepPartial<QueryAllBalancesRequest>, I>>(base?: I): QueryAllBalancesRequest;
    fromPartial<I extends Exact<DeepPartial<QueryAllBalancesRequest>, I>>(object: I): QueryAllBalancesRequest;
};
export declare const QueryAllBalancesResponse: {
    encode(message: QueryAllBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBalancesResponse;
    fromJSON(object: any): QueryAllBalancesResponse;
    toJSON(message: QueryAllBalancesResponse): unknown;
    create<I extends Exact<DeepPartial<QueryAllBalancesResponse>, I>>(base?: I): QueryAllBalancesResponse;
    fromPartial<I extends Exact<DeepPartial<QueryAllBalancesResponse>, I>>(object: I): QueryAllBalancesResponse;
};
export declare const QuerySpendableBalancesRequest: {
    encode(message: QuerySpendableBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpendableBalancesRequest;
    fromJSON(object: any): QuerySpendableBalancesRequest;
    toJSON(message: QuerySpendableBalancesRequest): unknown;
    create<I extends Exact<DeepPartial<QuerySpendableBalancesRequest>, I>>(base?: I): QuerySpendableBalancesRequest;
    fromPartial<I extends Exact<DeepPartial<QuerySpendableBalancesRequest>, I>>(object: I): QuerySpendableBalancesRequest;
};
export declare const QuerySpendableBalancesResponse: {
    encode(message: QuerySpendableBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpendableBalancesResponse;
    fromJSON(object: any): QuerySpendableBalancesResponse;
    toJSON(message: QuerySpendableBalancesResponse): unknown;
    create<I extends Exact<DeepPartial<QuerySpendableBalancesResponse>, I>>(base?: I): QuerySpendableBalancesResponse;
    fromPartial<I extends Exact<DeepPartial<QuerySpendableBalancesResponse>, I>>(object: I): QuerySpendableBalancesResponse;
};
export declare const QuerySpendableBalanceByDenomRequest: {
    encode(message: QuerySpendableBalanceByDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpendableBalanceByDenomRequest;
    fromJSON(object: any): QuerySpendableBalanceByDenomRequest;
    toJSON(message: QuerySpendableBalanceByDenomRequest): unknown;
    create<I extends Exact<DeepPartial<QuerySpendableBalanceByDenomRequest>, I>>(base?: I): QuerySpendableBalanceByDenomRequest;
    fromPartial<I extends Exact<DeepPartial<QuerySpendableBalanceByDenomRequest>, I>>(object: I): QuerySpendableBalanceByDenomRequest;
};
export declare const QuerySpendableBalanceByDenomResponse: {
    encode(message: QuerySpendableBalanceByDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpendableBalanceByDenomResponse;
    fromJSON(object: any): QuerySpendableBalanceByDenomResponse;
    toJSON(message: QuerySpendableBalanceByDenomResponse): unknown;
    create<I extends Exact<DeepPartial<QuerySpendableBalanceByDenomResponse>, I>>(base?: I): QuerySpendableBalanceByDenomResponse;
    fromPartial<I extends Exact<DeepPartial<QuerySpendableBalanceByDenomResponse>, I>>(object: I): QuerySpendableBalanceByDenomResponse;
};
export declare const QueryTotalSupplyRequest: {
    encode(message: QueryTotalSupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyRequest;
    fromJSON(object: any): QueryTotalSupplyRequest;
    toJSON(message: QueryTotalSupplyRequest): unknown;
    create<I extends Exact<DeepPartial<QueryTotalSupplyRequest>, I>>(base?: I): QueryTotalSupplyRequest;
    fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyRequest>, I>>(object: I): QueryTotalSupplyRequest;
};
export declare const QueryTotalSupplyResponse: {
    encode(message: QueryTotalSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyResponse;
    fromJSON(object: any): QueryTotalSupplyResponse;
    toJSON(message: QueryTotalSupplyResponse): unknown;
    create<I extends Exact<DeepPartial<QueryTotalSupplyResponse>, I>>(base?: I): QueryTotalSupplyResponse;
    fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyResponse>, I>>(object: I): QueryTotalSupplyResponse;
};
export declare const QuerySupplyOfRequest: {
    encode(message: QuerySupplyOfRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyOfRequest;
    fromJSON(object: any): QuerySupplyOfRequest;
    toJSON(message: QuerySupplyOfRequest): unknown;
    create<I extends Exact<DeepPartial<QuerySupplyOfRequest>, I>>(base?: I): QuerySupplyOfRequest;
    fromPartial<I extends Exact<DeepPartial<QuerySupplyOfRequest>, I>>(object: I): QuerySupplyOfRequest;
};
export declare const QuerySupplyOfResponse: {
    encode(message: QuerySupplyOfResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyOfResponse;
    fromJSON(object: any): QuerySupplyOfResponse;
    toJSON(message: QuerySupplyOfResponse): unknown;
    create<I extends Exact<DeepPartial<QuerySupplyOfResponse>, I>>(base?: I): QuerySupplyOfResponse;
    fromPartial<I extends Exact<DeepPartial<QuerySupplyOfResponse>, I>>(object: I): QuerySupplyOfResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest;
    fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse;
    fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse;
};
export declare const QueryDenomsMetadataRequest: {
    encode(message: QueryDenomsMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsMetadataRequest;
    fromJSON(object: any): QueryDenomsMetadataRequest;
    toJSON(message: QueryDenomsMetadataRequest): unknown;
    create<I extends Exact<DeepPartial<QueryDenomsMetadataRequest>, I>>(base?: I): QueryDenomsMetadataRequest;
    fromPartial<I extends Exact<DeepPartial<QueryDenomsMetadataRequest>, I>>(object: I): QueryDenomsMetadataRequest;
};
export declare const QueryDenomsMetadataResponse: {
    encode(message: QueryDenomsMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsMetadataResponse;
    fromJSON(object: any): QueryDenomsMetadataResponse;
    toJSON(message: QueryDenomsMetadataResponse): unknown;
    create<I extends Exact<DeepPartial<QueryDenomsMetadataResponse>, I>>(base?: I): QueryDenomsMetadataResponse;
    fromPartial<I extends Exact<DeepPartial<QueryDenomsMetadataResponse>, I>>(object: I): QueryDenomsMetadataResponse;
};
export declare const QueryDenomMetadataRequest: {
    encode(message: QueryDenomMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomMetadataRequest;
    fromJSON(object: any): QueryDenomMetadataRequest;
    toJSON(message: QueryDenomMetadataRequest): unknown;
    create<I extends Exact<DeepPartial<QueryDenomMetadataRequest>, I>>(base?: I): QueryDenomMetadataRequest;
    fromPartial<I extends Exact<DeepPartial<QueryDenomMetadataRequest>, I>>(object: I): QueryDenomMetadataRequest;
};
export declare const QueryDenomMetadataResponse: {
    encode(message: QueryDenomMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomMetadataResponse;
    fromJSON(object: any): QueryDenomMetadataResponse;
    toJSON(message: QueryDenomMetadataResponse): unknown;
    create<I extends Exact<DeepPartial<QueryDenomMetadataResponse>, I>>(base?: I): QueryDenomMetadataResponse;
    fromPartial<I extends Exact<DeepPartial<QueryDenomMetadataResponse>, I>>(object: I): QueryDenomMetadataResponse;
};
export declare const QueryDenomMetadataByQueryStringRequest: {
    encode(message: QueryDenomMetadataByQueryStringRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomMetadataByQueryStringRequest;
    fromJSON(object: any): QueryDenomMetadataByQueryStringRequest;
    toJSON(message: QueryDenomMetadataByQueryStringRequest): unknown;
    create<I extends Exact<DeepPartial<QueryDenomMetadataByQueryStringRequest>, I>>(base?: I): QueryDenomMetadataByQueryStringRequest;
    fromPartial<I extends Exact<DeepPartial<QueryDenomMetadataByQueryStringRequest>, I>>(object: I): QueryDenomMetadataByQueryStringRequest;
};
export declare const QueryDenomMetadataByQueryStringResponse: {
    encode(message: QueryDenomMetadataByQueryStringResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomMetadataByQueryStringResponse;
    fromJSON(object: any): QueryDenomMetadataByQueryStringResponse;
    toJSON(message: QueryDenomMetadataByQueryStringResponse): unknown;
    create<I extends Exact<DeepPartial<QueryDenomMetadataByQueryStringResponse>, I>>(base?: I): QueryDenomMetadataByQueryStringResponse;
    fromPartial<I extends Exact<DeepPartial<QueryDenomMetadataByQueryStringResponse>, I>>(object: I): QueryDenomMetadataByQueryStringResponse;
};
export declare const QueryDenomOwnersRequest: {
    encode(message: QueryDenomOwnersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomOwnersRequest;
    fromJSON(object: any): QueryDenomOwnersRequest;
    toJSON(message: QueryDenomOwnersRequest): unknown;
    create<I extends Exact<DeepPartial<QueryDenomOwnersRequest>, I>>(base?: I): QueryDenomOwnersRequest;
    fromPartial<I extends Exact<DeepPartial<QueryDenomOwnersRequest>, I>>(object: I): QueryDenomOwnersRequest;
};
export declare const DenomOwner: {
    encode(message: DenomOwner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomOwner;
    fromJSON(object: any): DenomOwner;
    toJSON(message: DenomOwner): unknown;
    create<I extends Exact<DeepPartial<DenomOwner>, I>>(base?: I): DenomOwner;
    fromPartial<I extends Exact<DeepPartial<DenomOwner>, I>>(object: I): DenomOwner;
};
export declare const QueryDenomOwnersResponse: {
    encode(message: QueryDenomOwnersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomOwnersResponse;
    fromJSON(object: any): QueryDenomOwnersResponse;
    toJSON(message: QueryDenomOwnersResponse): unknown;
    create<I extends Exact<DeepPartial<QueryDenomOwnersResponse>, I>>(base?: I): QueryDenomOwnersResponse;
    fromPartial<I extends Exact<DeepPartial<QueryDenomOwnersResponse>, I>>(object: I): QueryDenomOwnersResponse;
};
export declare const QueryDenomOwnersByQueryRequest: {
    encode(message: QueryDenomOwnersByQueryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomOwnersByQueryRequest;
    fromJSON(object: any): QueryDenomOwnersByQueryRequest;
    toJSON(message: QueryDenomOwnersByQueryRequest): unknown;
    create<I extends Exact<DeepPartial<QueryDenomOwnersByQueryRequest>, I>>(base?: I): QueryDenomOwnersByQueryRequest;
    fromPartial<I extends Exact<DeepPartial<QueryDenomOwnersByQueryRequest>, I>>(object: I): QueryDenomOwnersByQueryRequest;
};
export declare const QueryDenomOwnersByQueryResponse: {
    encode(message: QueryDenomOwnersByQueryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomOwnersByQueryResponse;
    fromJSON(object: any): QueryDenomOwnersByQueryResponse;
    toJSON(message: QueryDenomOwnersByQueryResponse): unknown;
    create<I extends Exact<DeepPartial<QueryDenomOwnersByQueryResponse>, I>>(base?: I): QueryDenomOwnersByQueryResponse;
    fromPartial<I extends Exact<DeepPartial<QueryDenomOwnersByQueryResponse>, I>>(object: I): QueryDenomOwnersByQueryResponse;
};
export declare const QuerySendEnabledRequest: {
    encode(message: QuerySendEnabledRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySendEnabledRequest;
    fromJSON(object: any): QuerySendEnabledRequest;
    toJSON(message: QuerySendEnabledRequest): unknown;
    create<I extends Exact<DeepPartial<QuerySendEnabledRequest>, I>>(base?: I): QuerySendEnabledRequest;
    fromPartial<I extends Exact<DeepPartial<QuerySendEnabledRequest>, I>>(object: I): QuerySendEnabledRequest;
};
export declare const QuerySendEnabledResponse: {
    encode(message: QuerySendEnabledResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySendEnabledResponse;
    fromJSON(object: any): QuerySendEnabledResponse;
    toJSON(message: QuerySendEnabledResponse): unknown;
    create<I extends Exact<DeepPartial<QuerySendEnabledResponse>, I>>(base?: I): QuerySendEnabledResponse;
    fromPartial<I extends Exact<DeepPartial<QuerySendEnabledResponse>, I>>(object: I): QuerySendEnabledResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Balance queries the balance of a single coin for a single account. */
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /**
     * AllBalances queries the balance of all coins for a single account.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    AllBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    /**
     * SpendableBalances queries the spendable balance of all coins for a single
     * account.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.46
     */
    SpendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
    /**
     * SpendableBalanceByDenom queries the spendable balance of a single denom for
     * a single account.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.47
     */
    SpendableBalanceByDenom(request: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse>;
    /**
     * TotalSupply queries the total supply of all coins.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    TotalSupply(request: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    /**
     * SupplyOf queries the supply of a single coin.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    /** Params queries the parameters of x/bank module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** DenomMetadata queries the client metadata of a given coin denomination. */
    DenomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    /** DenomMetadataByQueryString queries the client metadata of a given coin denomination. */
    DenomMetadataByQueryString(request: QueryDenomMetadataByQueryStringRequest): Promise<QueryDenomMetadataByQueryStringResponse>;
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    DenomsMetadata(request: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.46
     */
    DenomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>;
    /**
     * DenomOwnersByQuery queries for all account addresses that own a particular token
     * denomination.
     *
     * Since: cosmos-sdk 0.50.3
     */
    DenomOwnersByQuery(request: QueryDenomOwnersByQueryRequest): Promise<QueryDenomOwnersByQueryResponse>;
    /**
     * SendEnabled queries for SendEnabled entries.
     *
     * This query only returns denominations that have specific SendEnabled settings.
     * Any denomination that does not have a specific setting will use the default
     * params.default_send_enabled, and will not be returned by this query.
     *
     * Since: cosmos-sdk 0.47
     */
    SendEnabled(request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse>;
}
export declare const QueryServiceName = "cosmos.bank.v1beta1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    AllBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    SpendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
    SpendableBalanceByDenom(request: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse>;
    TotalSupply(request: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    DenomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    DenomMetadataByQueryString(request: QueryDenomMetadataByQueryStringRequest): Promise<QueryDenomMetadataByQueryStringResponse>;
    DenomsMetadata(request: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
    DenomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>;
    DenomOwnersByQuery(request: QueryDenomOwnersByQueryRequest): Promise<QueryDenomOwnersByQueryResponse>;
    SendEnabled(request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
