import _m0 from "protobufjs/minimal";
import { LightBlock, Vote } from "./types";
import { Validator } from "./validator";
export declare const protobufPackage = "tendermint.types";
export interface Evidence {
    duplicateVoteEvidence?: DuplicateVoteEvidence | undefined;
    lightClientAttackEvidence?: LightClientAttackEvidence | undefined;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
    voteA: Vote | undefined;
    voteB: Vote | undefined;
    totalVotingPower: number;
    validatorPower: number;
    timestamp: Date | undefined;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
    conflictingBlock: LightBlock | undefined;
    commonHeight: number;
    byzantineValidators: Validator[];
    totalVotingPower: number;
    timestamp: Date | undefined;
}
export interface EvidenceList {
    evidence: Evidence[];
}
export declare const Evidence: {
    encode(message: Evidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Evidence;
    fromJSON(object: any): Evidence;
    toJSON(message: Evidence): unknown;
    create<I extends Exact<DeepPartial<Evidence>, I>>(base?: I): Evidence;
    fromPartial<I extends Exact<DeepPartial<Evidence>, I>>(object: I): Evidence;
};
export declare const DuplicateVoteEvidence: {
    encode(message: DuplicateVoteEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DuplicateVoteEvidence;
    fromJSON(object: any): DuplicateVoteEvidence;
    toJSON(message: DuplicateVoteEvidence): unknown;
    create<I extends Exact<DeepPartial<DuplicateVoteEvidence>, I>>(base?: I): DuplicateVoteEvidence;
    fromPartial<I extends Exact<DeepPartial<DuplicateVoteEvidence>, I>>(object: I): DuplicateVoteEvidence;
};
export declare const LightClientAttackEvidence: {
    encode(message: LightClientAttackEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LightClientAttackEvidence;
    fromJSON(object: any): LightClientAttackEvidence;
    toJSON(message: LightClientAttackEvidence): unknown;
    create<I extends Exact<DeepPartial<LightClientAttackEvidence>, I>>(base?: I): LightClientAttackEvidence;
    fromPartial<I extends Exact<DeepPartial<LightClientAttackEvidence>, I>>(object: I): LightClientAttackEvidence;
};
export declare const EvidenceList: {
    encode(message: EvidenceList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceList;
    fromJSON(object: any): EvidenceList;
    toJSON(message: EvidenceList): unknown;
    create<I extends Exact<DeepPartial<EvidenceList>, I>>(base?: I): EvidenceList;
    fromPartial<I extends Exact<DeepPartial<EvidenceList>, I>>(object: I): EvidenceList;
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
