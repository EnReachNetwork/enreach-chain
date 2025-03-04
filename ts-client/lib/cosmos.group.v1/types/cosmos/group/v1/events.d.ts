import _m0 from "protobufjs/minimal";
import { ProposalExecutorResult, ProposalStatus, TallyResult } from "./types";
export declare const protobufPackage = "cosmos.group.v1";
/** Since: cosmos-sdk 0.46 */
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
    /** group_id is the unique ID of the group. */
    groupId: number;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
    /** group_id is the unique ID of the group. */
    groupId: number;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
    /** address is the account address of the group policy. */
    address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
    /** address is the account address of the group policy. */
    address: string;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: number;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: number;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: number;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: number;
    /** result is the proposal execution result. */
    result: ProposalExecutorResult;
    /** logs contains error logs in case the execution result is FAILURE. */
    logs: string;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
    /** group_id is the unique ID of the group. */
    groupId: number;
    /** address is the account address of the group member. */
    address: string;
}
/** EventProposalPruned is an event emitted when a proposal is pruned. */
export interface EventProposalPruned {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: number;
    /** status is the proposal status (UNSPECIFIED, SUBMITTED, ACCEPTED, REJECTED, ABORTED, WITHDRAWN). */
    status: ProposalStatus;
    /** tally_result is the proposal tally result (when applicable). */
    tallyResult: TallyResult | undefined;
}
export declare const EventCreateGroup: {
    encode(message: EventCreateGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroup;
    fromJSON(object: any): EventCreateGroup;
    toJSON(message: EventCreateGroup): unknown;
    create<I extends Exact<DeepPartial<EventCreateGroup>, I>>(base?: I): EventCreateGroup;
    fromPartial<I extends Exact<DeepPartial<EventCreateGroup>, I>>(object: I): EventCreateGroup;
};
export declare const EventUpdateGroup: {
    encode(message: EventUpdateGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroup;
    fromJSON(object: any): EventUpdateGroup;
    toJSON(message: EventUpdateGroup): unknown;
    create<I extends Exact<DeepPartial<EventUpdateGroup>, I>>(base?: I): EventUpdateGroup;
    fromPartial<I extends Exact<DeepPartial<EventUpdateGroup>, I>>(object: I): EventUpdateGroup;
};
export declare const EventCreateGroupPolicy: {
    encode(message: EventCreateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroupPolicy;
    fromJSON(object: any): EventCreateGroupPolicy;
    toJSON(message: EventCreateGroupPolicy): unknown;
    create<I extends Exact<DeepPartial<EventCreateGroupPolicy>, I>>(base?: I): EventCreateGroupPolicy;
    fromPartial<I extends Exact<DeepPartial<EventCreateGroupPolicy>, I>>(object: I): EventCreateGroupPolicy;
};
export declare const EventUpdateGroupPolicy: {
    encode(message: EventUpdateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroupPolicy;
    fromJSON(object: any): EventUpdateGroupPolicy;
    toJSON(message: EventUpdateGroupPolicy): unknown;
    create<I extends Exact<DeepPartial<EventUpdateGroupPolicy>, I>>(base?: I): EventUpdateGroupPolicy;
    fromPartial<I extends Exact<DeepPartial<EventUpdateGroupPolicy>, I>>(object: I): EventUpdateGroupPolicy;
};
export declare const EventSubmitProposal: {
    encode(message: EventSubmitProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSubmitProposal;
    fromJSON(object: any): EventSubmitProposal;
    toJSON(message: EventSubmitProposal): unknown;
    create<I extends Exact<DeepPartial<EventSubmitProposal>, I>>(base?: I): EventSubmitProposal;
    fromPartial<I extends Exact<DeepPartial<EventSubmitProposal>, I>>(object: I): EventSubmitProposal;
};
export declare const EventWithdrawProposal: {
    encode(message: EventWithdrawProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawProposal;
    fromJSON(object: any): EventWithdrawProposal;
    toJSON(message: EventWithdrawProposal): unknown;
    create<I extends Exact<DeepPartial<EventWithdrawProposal>, I>>(base?: I): EventWithdrawProposal;
    fromPartial<I extends Exact<DeepPartial<EventWithdrawProposal>, I>>(object: I): EventWithdrawProposal;
};
export declare const EventVote: {
    encode(message: EventVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventVote;
    fromJSON(object: any): EventVote;
    toJSON(message: EventVote): unknown;
    create<I extends Exact<DeepPartial<EventVote>, I>>(base?: I): EventVote;
    fromPartial<I extends Exact<DeepPartial<EventVote>, I>>(object: I): EventVote;
};
export declare const EventExec: {
    encode(message: EventExec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventExec;
    fromJSON(object: any): EventExec;
    toJSON(message: EventExec): unknown;
    create<I extends Exact<DeepPartial<EventExec>, I>>(base?: I): EventExec;
    fromPartial<I extends Exact<DeepPartial<EventExec>, I>>(object: I): EventExec;
};
export declare const EventLeaveGroup: {
    encode(message: EventLeaveGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventLeaveGroup;
    fromJSON(object: any): EventLeaveGroup;
    toJSON(message: EventLeaveGroup): unknown;
    create<I extends Exact<DeepPartial<EventLeaveGroup>, I>>(base?: I): EventLeaveGroup;
    fromPartial<I extends Exact<DeepPartial<EventLeaveGroup>, I>>(object: I): EventLeaveGroup;
};
export declare const EventProposalPruned: {
    encode(message: EventProposalPruned, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventProposalPruned;
    fromJSON(object: any): EventProposalPruned;
    toJSON(message: EventProposalPruned): unknown;
    create<I extends Exact<DeepPartial<EventProposalPruned>, I>>(base?: I): EventProposalPruned;
    fromPartial<I extends Exact<DeepPartial<EventProposalPruned>, I>>(object: I): EventProposalPruned;
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
