import _m0 from "protobufjs/minimal";
import { Coin } from "../../base/v1beta1/coin";
import { Params } from "./distribution";
export declare const protobufPackage = "cosmos.distribution.v1beta1";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
    delegatorAddress: string;
    withdrawAddress: string;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 */
export interface MsgSetWithdrawAddressResponse {
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
    delegatorAddress: string;
    validatorAddress: string;
}
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 */
export interface MsgWithdrawDelegatorRewardResponse {
    /** Since: cosmos-sdk 0.46 */
    amount: Coin[];
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
    validatorAddress: string;
}
/**
 * MsgWithdrawValidatorCommissionResponse defines the
 * Msg/WithdrawValidatorCommission response type.
 */
export interface MsgWithdrawValidatorCommissionResponse {
    /** Since: cosmos-sdk 0.46 */
    amount: Coin[];
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
    amount: Coin[];
    depositor: string;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/distribution parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params | undefined;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpend {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    recipient: string;
    amount: Coin[];
}
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpendResponse {
}
/**
 * DepositValidatorRewardsPool defines the request structure to provide
 * additional rewards to delegators from a specific validator.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgDepositValidatorRewardsPool {
    depositor: string;
    validatorAddress: string;
    amount: Coin[];
}
/**
 * MsgDepositValidatorRewardsPoolResponse defines the response to executing a
 * MsgDepositValidatorRewardsPool message.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgDepositValidatorRewardsPoolResponse {
}
export declare const MsgSetWithdrawAddress: {
    encode(message: MsgSetWithdrawAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawAddress;
    fromJSON(object: any): MsgSetWithdrawAddress;
    toJSON(message: MsgSetWithdrawAddress): unknown;
    create<I extends Exact<DeepPartial<MsgSetWithdrawAddress>, I>>(base?: I): MsgSetWithdrawAddress;
    fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddress>, I>>(object: I): MsgSetWithdrawAddress;
};
export declare const MsgSetWithdrawAddressResponse: {
    encode(_: MsgSetWithdrawAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawAddressResponse;
    fromJSON(_: any): MsgSetWithdrawAddressResponse;
    toJSON(_: MsgSetWithdrawAddressResponse): unknown;
    create<I extends Exact<DeepPartial<MsgSetWithdrawAddressResponse>, I>>(base?: I): MsgSetWithdrawAddressResponse;
    fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddressResponse>, I>>(_: I): MsgSetWithdrawAddressResponse;
};
export declare const MsgWithdrawDelegatorReward: {
    encode(message: MsgWithdrawDelegatorReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegatorReward;
    fromJSON(object: any): MsgWithdrawDelegatorReward;
    toJSON(message: MsgWithdrawDelegatorReward): unknown;
    create<I extends Exact<DeepPartial<MsgWithdrawDelegatorReward>, I>>(base?: I): MsgWithdrawDelegatorReward;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawDelegatorReward>, I>>(object: I): MsgWithdrawDelegatorReward;
};
export declare const MsgWithdrawDelegatorRewardResponse: {
    encode(message: MsgWithdrawDelegatorRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegatorRewardResponse;
    fromJSON(object: any): MsgWithdrawDelegatorRewardResponse;
    toJSON(message: MsgWithdrawDelegatorRewardResponse): unknown;
    create<I extends Exact<DeepPartial<MsgWithdrawDelegatorRewardResponse>, I>>(base?: I): MsgWithdrawDelegatorRewardResponse;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawDelegatorRewardResponse>, I>>(object: I): MsgWithdrawDelegatorRewardResponse;
};
export declare const MsgWithdrawValidatorCommission: {
    encode(message: MsgWithdrawValidatorCommission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawValidatorCommission;
    fromJSON(object: any): MsgWithdrawValidatorCommission;
    toJSON(message: MsgWithdrawValidatorCommission): unknown;
    create<I extends Exact<DeepPartial<MsgWithdrawValidatorCommission>, I>>(base?: I): MsgWithdrawValidatorCommission;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawValidatorCommission>, I>>(object: I): MsgWithdrawValidatorCommission;
};
export declare const MsgWithdrawValidatorCommissionResponse: {
    encode(message: MsgWithdrawValidatorCommissionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawValidatorCommissionResponse;
    fromJSON(object: any): MsgWithdrawValidatorCommissionResponse;
    toJSON(message: MsgWithdrawValidatorCommissionResponse): unknown;
    create<I extends Exact<DeepPartial<MsgWithdrawValidatorCommissionResponse>, I>>(base?: I): MsgWithdrawValidatorCommissionResponse;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawValidatorCommissionResponse>, I>>(object: I): MsgWithdrawValidatorCommissionResponse;
};
export declare const MsgFundCommunityPool: {
    encode(message: MsgFundCommunityPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundCommunityPool;
    fromJSON(object: any): MsgFundCommunityPool;
    toJSON(message: MsgFundCommunityPool): unknown;
    create<I extends Exact<DeepPartial<MsgFundCommunityPool>, I>>(base?: I): MsgFundCommunityPool;
    fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPool>, I>>(object: I): MsgFundCommunityPool;
};
export declare const MsgFundCommunityPoolResponse: {
    encode(_: MsgFundCommunityPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundCommunityPoolResponse;
    fromJSON(_: any): MsgFundCommunityPoolResponse;
    toJSON(_: MsgFundCommunityPoolResponse): unknown;
    create<I extends Exact<DeepPartial<MsgFundCommunityPoolResponse>, I>>(base?: I): MsgFundCommunityPoolResponse;
    fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPoolResponse>, I>>(_: I): MsgFundCommunityPoolResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse;
};
export declare const MsgCommunityPoolSpend: {
    encode(message: MsgCommunityPoolSpend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCommunityPoolSpend;
    fromJSON(object: any): MsgCommunityPoolSpend;
    toJSON(message: MsgCommunityPoolSpend): unknown;
    create<I extends Exact<DeepPartial<MsgCommunityPoolSpend>, I>>(base?: I): MsgCommunityPoolSpend;
    fromPartial<I extends Exact<DeepPartial<MsgCommunityPoolSpend>, I>>(object: I): MsgCommunityPoolSpend;
};
export declare const MsgCommunityPoolSpendResponse: {
    encode(_: MsgCommunityPoolSpendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCommunityPoolSpendResponse;
    fromJSON(_: any): MsgCommunityPoolSpendResponse;
    toJSON(_: MsgCommunityPoolSpendResponse): unknown;
    create<I extends Exact<DeepPartial<MsgCommunityPoolSpendResponse>, I>>(base?: I): MsgCommunityPoolSpendResponse;
    fromPartial<I extends Exact<DeepPartial<MsgCommunityPoolSpendResponse>, I>>(_: I): MsgCommunityPoolSpendResponse;
};
export declare const MsgDepositValidatorRewardsPool: {
    encode(message: MsgDepositValidatorRewardsPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositValidatorRewardsPool;
    fromJSON(object: any): MsgDepositValidatorRewardsPool;
    toJSON(message: MsgDepositValidatorRewardsPool): unknown;
    create<I extends Exact<DeepPartial<MsgDepositValidatorRewardsPool>, I>>(base?: I): MsgDepositValidatorRewardsPool;
    fromPartial<I extends Exact<DeepPartial<MsgDepositValidatorRewardsPool>, I>>(object: I): MsgDepositValidatorRewardsPool;
};
export declare const MsgDepositValidatorRewardsPoolResponse: {
    encode(_: MsgDepositValidatorRewardsPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositValidatorRewardsPoolResponse;
    fromJSON(_: any): MsgDepositValidatorRewardsPoolResponse;
    toJSON(_: MsgDepositValidatorRewardsPoolResponse): unknown;
    create<I extends Exact<DeepPartial<MsgDepositValidatorRewardsPoolResponse>, I>>(base?: I): MsgDepositValidatorRewardsPoolResponse;
    fromPartial<I extends Exact<DeepPartial<MsgDepositValidatorRewardsPoolResponse>, I>>(_: I): MsgDepositValidatorRewardsPoolResponse;
};
/** Msg defines the distribution Msg service. */
export interface Msg {
    /**
     * SetWithdrawAddress defines a method to change the withdraw address
     * for a delegator (or validator self-delegation).
     */
    SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
    /**
     * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     * from a single validator.
     */
    WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
    /**
     * WithdrawValidatorCommission defines a method to withdraw the
     * full commission to the validator address.
     */
    WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
    /**
     * FundCommunityPool defines a method to allow an account to directly
     * fund the community pool.
     */
    FundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/distribution
     * module parameters. The authority is defined in the keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /**
     * CommunityPoolSpend defines a governance operation for sending tokens from
     * the community pool in the x/distribution module to another account, which
     * could be the governance module itself. The authority is defined in the
     * keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    CommunityPoolSpend(request: MsgCommunityPoolSpend): Promise<MsgCommunityPoolSpendResponse>;
    /**
     * DepositValidatorRewardsPool defines a method to provide additional rewards
     * to delegators to a specific validator.
     *
     * Since: cosmos-sdk 0.50
     */
    DepositValidatorRewardsPool(request: MsgDepositValidatorRewardsPool): Promise<MsgDepositValidatorRewardsPoolResponse>;
}
export declare const MsgServiceName = "cosmos.distribution.v1beta1.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
    WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
    WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
    FundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    CommunityPoolSpend(request: MsgCommunityPoolSpend): Promise<MsgCommunityPoolSpendResponse>;
    DepositValidatorRewardsPool(request: MsgDepositValidatorRewardsPool): Promise<MsgDepositValidatorRewardsPoolResponse>;
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
