import _m0 from "protobufjs/minimal";
import { Deposit, DepositParams, Params, Proposal, TallyParams, Vote, VotingParams } from "./gov";
export declare const protobufPackage = "cosmos.gov.v1";
/** Since: cosmos-sdk 0.46 */
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
    /** starting_proposal_id is the ID of the starting proposal. */
    startingProposalId: number;
    /** deposits defines all the deposits present at genesis. */
    deposits: Deposit[];
    /** votes defines all the votes present at genesis. */
    votes: Vote[];
    /** proposals defines all the proposals present at genesis. */
    proposals: Proposal[];
    /**
     * Deprecated: Prefer to use `params` instead.
     * deposit_params defines all the paramaters of related to deposit.
     *
     * @deprecated
     */
    depositParams: DepositParams | undefined;
    /**
     * Deprecated: Prefer to use `params` instead.
     * voting_params defines all the paramaters of related to voting.
     *
     * @deprecated
     */
    votingParams: VotingParams | undefined;
    /**
     * Deprecated: Prefer to use `params` instead.
     * tally_params defines all the paramaters of related to tally.
     *
     * @deprecated
     */
    tallyParams: TallyParams | undefined;
    /**
     * params defines all the paramaters of x/gov module.
     *
     * Since: cosmos-sdk 0.47
     */
    params: Params | undefined;
    /**
     * The constitution allows builders to lay a foundation and define purpose.
     * This is an immutable string set in genesis.
     * There are no amendments, to go outside of scope, just fork.
     * constitution is an immutable string in genesis for a chain builder to lay out their vision, ideas and ideals.
     *
     * Since: cosmos-sdk 0.50
     */
    constitution: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
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
