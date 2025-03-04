import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { MemberRequest, ProposalExecutorResult, VoteOption } from "./types";
export declare const protobufPackage = "cosmos.group.v1";
/** Since: cosmos-sdk 0.46 */
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export declare enum Exec {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    EXEC_UNSPECIFIED = 0,
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    EXEC_TRY = 1,
    UNRECOGNIZED = -1
}
export declare function execFromJSON(object: any): Exec;
export declare function execToJSON(object: Exec): string;
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
    /** admin is the account address of the group admin. */
    admin: string;
    /** members defines the group members. */
    members: MemberRequest[];
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata: string;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
    /** group_id is the unique ID of the newly created group. */
    groupId: number;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: number;
    /**
     * member_updates is the list of members to update,
     * set weight to 0 to remove a member.
     */
    memberUpdates: MemberRequest[];
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
    /** admin is the current account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: number;
    /** new_admin is the group new admin account address. */
    newAdmin: string;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: number;
    /** metadata is the updated group's metadata. */
    metadata: string;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {
}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicy {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: number;
    /** metadata is any arbitrary metadata attached to the group policy. */
    metadata: string;
    /** decision_policy specifies the group policy's decision policy. */
    decisionPolicy: Any | undefined;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponse {
    /** address is the account address of the newly created group policy. */
    address: string;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdmin {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_policy_address is the account address of the group policy. */
    groupPolicyAddress: string;
    /** new_admin is the new group policy admin. */
    newAdmin: string;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponse {
}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicy {
    /** admin is the account address of the group and group policy admin. */
    admin: string;
    /** members defines the group members. */
    members: MemberRequest[];
    /** group_metadata is any arbitrary metadata attached to the group. */
    groupMetadata: string;
    /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
    groupPolicyMetadata: string;
    /**
     * group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group
     * and group policy admin.
     */
    groupPolicyAsAdmin: boolean;
    /** decision_policy specifies the group policy's decision policy. */
    decisionPolicy: Any | undefined;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponse {
    /** group_id is the unique ID of the newly created group with policy. */
    groupId: number;
    /** group_policy_address is the account address of the newly created group policy. */
    groupPolicyAddress: string;
}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicy {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_policy_address is the account address of group policy. */
    groupPolicyAddress: string;
    /** decision_policy is the updated group policy's decision policy. */
    decisionPolicy: Any | undefined;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponse {
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_policy_address is the account address of group policy. */
    groupPolicyAddress: string;
    /** metadata is the group policy metadata to be updated. */
    metadata: string;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponse {
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposal {
    /** group_policy_address is the account address of group policy. */
    groupPolicyAddress: string;
    /**
     * proposers are the account addresses of the proposers.
     * Proposers signatures will be counted as yes votes.
     */
    proposers: string[];
    /** metadata is any arbitrary metadata attached to the proposal. */
    metadata: string;
    /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
    messages: Any[];
    /**
     * exec defines the mode of execution of the proposal,
     * whether it should be executed immediately on creation or not.
     * If so, proposers signatures are considered as Yes votes.
     */
    exec: Exec;
    /**
     * title is the title of the proposal.
     *
     * Since: cosmos-sdk 0.47
     */
    title: string;
    /**
     * summary is the summary of the proposal.
     *
     * Since: cosmos-sdk 0.47
     */
    summary: string;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
    /** proposal is the unique ID of the proposal. */
    proposalId: number;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposal {
    /** proposal is the unique ID of the proposal. */
    proposalId: number;
    /** address is the admin of the group policy or one of the proposer of the proposal. */
    address: string;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponse {
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
    /** proposal is the unique ID of the proposal. */
    proposalId: number;
    /** voter is the voter account address. */
    voter: string;
    /** option is the voter's choice on the proposal. */
    option: VoteOption;
    /** metadata is any arbitrary metadata attached to the vote. */
    metadata: string;
    /**
     * exec defines whether the proposal should be executed
     * immediately after voting or not.
     */
    exec: Exec;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
    /** proposal is the unique ID of the proposal. */
    proposalId: number;
    /** executor is the account address used to execute the proposal. */
    executor: string;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {
    /** result is the final result of the proposal execution. */
    result: ProposalExecutorResult;
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroup {
    /** address is the account address of the group member. */
    address: string;
    /** group_id is the unique ID of the group. */
    groupId: number;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponse {
}
export declare const MsgCreateGroup: {
    encode(message: MsgCreateGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroup;
    fromJSON(object: any): MsgCreateGroup;
    toJSON(message: MsgCreateGroup): unknown;
    create<I extends Exact<DeepPartial<MsgCreateGroup>, I>>(base?: I): MsgCreateGroup;
    fromPartial<I extends Exact<DeepPartial<MsgCreateGroup>, I>>(object: I): MsgCreateGroup;
};
export declare const MsgCreateGroupResponse: {
    encode(message: MsgCreateGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupResponse;
    fromJSON(object: any): MsgCreateGroupResponse;
    toJSON(message: MsgCreateGroupResponse): unknown;
    create<I extends Exact<DeepPartial<MsgCreateGroupResponse>, I>>(base?: I): MsgCreateGroupResponse;
    fromPartial<I extends Exact<DeepPartial<MsgCreateGroupResponse>, I>>(object: I): MsgCreateGroupResponse;
};
export declare const MsgUpdateGroupMembers: {
    encode(message: MsgUpdateGroupMembers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembers;
    fromJSON(object: any): MsgUpdateGroupMembers;
    toJSON(message: MsgUpdateGroupMembers): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateGroupMembers>, I>>(base?: I): MsgUpdateGroupMembers;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupMembers>, I>>(object: I): MsgUpdateGroupMembers;
};
export declare const MsgUpdateGroupMembersResponse: {
    encode(_: MsgUpdateGroupMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembersResponse;
    fromJSON(_: any): MsgUpdateGroupMembersResponse;
    toJSON(_: MsgUpdateGroupMembersResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateGroupMembersResponse>, I>>(base?: I): MsgUpdateGroupMembersResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupMembersResponse>, I>>(_: I): MsgUpdateGroupMembersResponse;
};
export declare const MsgUpdateGroupAdmin: {
    encode(message: MsgUpdateGroupAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdmin;
    fromJSON(object: any): MsgUpdateGroupAdmin;
    toJSON(message: MsgUpdateGroupAdmin): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateGroupAdmin>, I>>(base?: I): MsgUpdateGroupAdmin;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupAdmin>, I>>(object: I): MsgUpdateGroupAdmin;
};
export declare const MsgUpdateGroupAdminResponse: {
    encode(_: MsgUpdateGroupAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdminResponse;
    fromJSON(_: any): MsgUpdateGroupAdminResponse;
    toJSON(_: MsgUpdateGroupAdminResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateGroupAdminResponse>, I>>(base?: I): MsgUpdateGroupAdminResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupAdminResponse>, I>>(_: I): MsgUpdateGroupAdminResponse;
};
export declare const MsgUpdateGroupMetadata: {
    encode(message: MsgUpdateGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadata;
    fromJSON(object: any): MsgUpdateGroupMetadata;
    toJSON(message: MsgUpdateGroupMetadata): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateGroupMetadata>, I>>(base?: I): MsgUpdateGroupMetadata;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupMetadata>, I>>(object: I): MsgUpdateGroupMetadata;
};
export declare const MsgUpdateGroupMetadataResponse: {
    encode(_: MsgUpdateGroupMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadataResponse;
    fromJSON(_: any): MsgUpdateGroupMetadataResponse;
    toJSON(_: MsgUpdateGroupMetadataResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateGroupMetadataResponse>, I>>(base?: I): MsgUpdateGroupMetadataResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupMetadataResponse>, I>>(_: I): MsgUpdateGroupMetadataResponse;
};
export declare const MsgCreateGroupPolicy: {
    encode(message: MsgCreateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicy;
    fromJSON(object: any): MsgCreateGroupPolicy;
    toJSON(message: MsgCreateGroupPolicy): unknown;
    create<I extends Exact<DeepPartial<MsgCreateGroupPolicy>, I>>(base?: I): MsgCreateGroupPolicy;
    fromPartial<I extends Exact<DeepPartial<MsgCreateGroupPolicy>, I>>(object: I): MsgCreateGroupPolicy;
};
export declare const MsgCreateGroupPolicyResponse: {
    encode(message: MsgCreateGroupPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicyResponse;
    fromJSON(object: any): MsgCreateGroupPolicyResponse;
    toJSON(message: MsgCreateGroupPolicyResponse): unknown;
    create<I extends Exact<DeepPartial<MsgCreateGroupPolicyResponse>, I>>(base?: I): MsgCreateGroupPolicyResponse;
    fromPartial<I extends Exact<DeepPartial<MsgCreateGroupPolicyResponse>, I>>(object: I): MsgCreateGroupPolicyResponse;
};
export declare const MsgUpdateGroupPolicyAdmin: {
    encode(message: MsgUpdateGroupPolicyAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdmin;
    fromJSON(object: any): MsgUpdateGroupPolicyAdmin;
    toJSON(message: MsgUpdateGroupPolicyAdmin): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateGroupPolicyAdmin>, I>>(base?: I): MsgUpdateGroupPolicyAdmin;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupPolicyAdmin>, I>>(object: I): MsgUpdateGroupPolicyAdmin;
};
export declare const MsgUpdateGroupPolicyAdminResponse: {
    encode(_: MsgUpdateGroupPolicyAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdminResponse;
    fromJSON(_: any): MsgUpdateGroupPolicyAdminResponse;
    toJSON(_: MsgUpdateGroupPolicyAdminResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateGroupPolicyAdminResponse>, I>>(base?: I): MsgUpdateGroupPolicyAdminResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupPolicyAdminResponse>, I>>(_: I): MsgUpdateGroupPolicyAdminResponse;
};
export declare const MsgCreateGroupWithPolicy: {
    encode(message: MsgCreateGroupWithPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupWithPolicy;
    fromJSON(object: any): MsgCreateGroupWithPolicy;
    toJSON(message: MsgCreateGroupWithPolicy): unknown;
    create<I extends Exact<DeepPartial<MsgCreateGroupWithPolicy>, I>>(base?: I): MsgCreateGroupWithPolicy;
    fromPartial<I extends Exact<DeepPartial<MsgCreateGroupWithPolicy>, I>>(object: I): MsgCreateGroupWithPolicy;
};
export declare const MsgCreateGroupWithPolicyResponse: {
    encode(message: MsgCreateGroupWithPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupWithPolicyResponse;
    fromJSON(object: any): MsgCreateGroupWithPolicyResponse;
    toJSON(message: MsgCreateGroupWithPolicyResponse): unknown;
    create<I extends Exact<DeepPartial<MsgCreateGroupWithPolicyResponse>, I>>(base?: I): MsgCreateGroupWithPolicyResponse;
    fromPartial<I extends Exact<DeepPartial<MsgCreateGroupWithPolicyResponse>, I>>(object: I): MsgCreateGroupWithPolicyResponse;
};
export declare const MsgUpdateGroupPolicyDecisionPolicy: {
    encode(message: MsgUpdateGroupPolicyDecisionPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicy;
    fromJSON(object: any): MsgUpdateGroupPolicyDecisionPolicy;
    toJSON(message: MsgUpdateGroupPolicyDecisionPolicy): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>, I>>(base?: I): MsgUpdateGroupPolicyDecisionPolicy;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>, I>>(object: I): MsgUpdateGroupPolicyDecisionPolicy;
};
export declare const MsgUpdateGroupPolicyDecisionPolicyResponse: {
    encode(_: MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicyResponse;
    fromJSON(_: any): MsgUpdateGroupPolicyDecisionPolicyResponse;
    toJSON(_: MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateGroupPolicyDecisionPolicyResponse>, I>>(base?: I): MsgUpdateGroupPolicyDecisionPolicyResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupPolicyDecisionPolicyResponse>, I>>(_: I): MsgUpdateGroupPolicyDecisionPolicyResponse;
};
export declare const MsgUpdateGroupPolicyMetadata: {
    encode(message: MsgUpdateGroupPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadata;
    fromJSON(object: any): MsgUpdateGroupPolicyMetadata;
    toJSON(message: MsgUpdateGroupPolicyMetadata): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateGroupPolicyMetadata>, I>>(base?: I): MsgUpdateGroupPolicyMetadata;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupPolicyMetadata>, I>>(object: I): MsgUpdateGroupPolicyMetadata;
};
export declare const MsgUpdateGroupPolicyMetadataResponse: {
    encode(_: MsgUpdateGroupPolicyMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadataResponse;
    fromJSON(_: any): MsgUpdateGroupPolicyMetadataResponse;
    toJSON(_: MsgUpdateGroupPolicyMetadataResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateGroupPolicyMetadataResponse>, I>>(base?: I): MsgUpdateGroupPolicyMetadataResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateGroupPolicyMetadataResponse>, I>>(_: I): MsgUpdateGroupPolicyMetadataResponse;
};
export declare const MsgSubmitProposal: {
    encode(message: MsgSubmitProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal;
    fromJSON(object: any): MsgSubmitProposal;
    toJSON(message: MsgSubmitProposal): unknown;
    create<I extends Exact<DeepPartial<MsgSubmitProposal>, I>>(base?: I): MsgSubmitProposal;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitProposal>, I>>(object: I): MsgSubmitProposal;
};
export declare const MsgSubmitProposalResponse: {
    encode(message: MsgSubmitProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponse;
    fromJSON(object: any): MsgSubmitProposalResponse;
    toJSON(message: MsgSubmitProposalResponse): unknown;
    create<I extends Exact<DeepPartial<MsgSubmitProposalResponse>, I>>(base?: I): MsgSubmitProposalResponse;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitProposalResponse>, I>>(object: I): MsgSubmitProposalResponse;
};
export declare const MsgWithdrawProposal: {
    encode(message: MsgWithdrawProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposal;
    fromJSON(object: any): MsgWithdrawProposal;
    toJSON(message: MsgWithdrawProposal): unknown;
    create<I extends Exact<DeepPartial<MsgWithdrawProposal>, I>>(base?: I): MsgWithdrawProposal;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawProposal>, I>>(object: I): MsgWithdrawProposal;
};
export declare const MsgWithdrawProposalResponse: {
    encode(_: MsgWithdrawProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposalResponse;
    fromJSON(_: any): MsgWithdrawProposalResponse;
    toJSON(_: MsgWithdrawProposalResponse): unknown;
    create<I extends Exact<DeepPartial<MsgWithdrawProposalResponse>, I>>(base?: I): MsgWithdrawProposalResponse;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawProposalResponse>, I>>(_: I): MsgWithdrawProposalResponse;
};
export declare const MsgVote: {
    encode(message: MsgVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote;
    fromJSON(object: any): MsgVote;
    toJSON(message: MsgVote): unknown;
    create<I extends Exact<DeepPartial<MsgVote>, I>>(base?: I): MsgVote;
    fromPartial<I extends Exact<DeepPartial<MsgVote>, I>>(object: I): MsgVote;
};
export declare const MsgVoteResponse: {
    encode(_: MsgVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse;
    fromJSON(_: any): MsgVoteResponse;
    toJSON(_: MsgVoteResponse): unknown;
    create<I extends Exact<DeepPartial<MsgVoteResponse>, I>>(base?: I): MsgVoteResponse;
    fromPartial<I extends Exact<DeepPartial<MsgVoteResponse>, I>>(_: I): MsgVoteResponse;
};
export declare const MsgExec: {
    encode(message: MsgExec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec;
    fromJSON(object: any): MsgExec;
    toJSON(message: MsgExec): unknown;
    create<I extends Exact<DeepPartial<MsgExec>, I>>(base?: I): MsgExec;
    fromPartial<I extends Exact<DeepPartial<MsgExec>, I>>(object: I): MsgExec;
};
export declare const MsgExecResponse: {
    encode(message: MsgExecResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse;
    fromJSON(object: any): MsgExecResponse;
    toJSON(message: MsgExecResponse): unknown;
    create<I extends Exact<DeepPartial<MsgExecResponse>, I>>(base?: I): MsgExecResponse;
    fromPartial<I extends Exact<DeepPartial<MsgExecResponse>, I>>(object: I): MsgExecResponse;
};
export declare const MsgLeaveGroup: {
    encode(message: MsgLeaveGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroup;
    fromJSON(object: any): MsgLeaveGroup;
    toJSON(message: MsgLeaveGroup): unknown;
    create<I extends Exact<DeepPartial<MsgLeaveGroup>, I>>(base?: I): MsgLeaveGroup;
    fromPartial<I extends Exact<DeepPartial<MsgLeaveGroup>, I>>(object: I): MsgLeaveGroup;
};
export declare const MsgLeaveGroupResponse: {
    encode(_: MsgLeaveGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroupResponse;
    fromJSON(_: any): MsgLeaveGroupResponse;
    toJSON(_: MsgLeaveGroupResponse): unknown;
    create<I extends Exact<DeepPartial<MsgLeaveGroupResponse>, I>>(base?: I): MsgLeaveGroupResponse;
    fromPartial<I extends Exact<DeepPartial<MsgLeaveGroupResponse>, I>>(_: I): MsgLeaveGroupResponse;
};
/** Msg is the cosmos.group.v1 Msg service. */
export interface Msg {
    /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
    CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
    /** UpdateGroupMembers updates the group members with given group id and admin address. */
    UpdateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse>;
    /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
    UpdateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponse>;
    /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
    UpdateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponse>;
    /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
    CreateGroupPolicy(request: MsgCreateGroupPolicy): Promise<MsgCreateGroupPolicyResponse>;
    /** CreateGroupWithPolicy creates a new group with policy. */
    CreateGroupWithPolicy(request: MsgCreateGroupWithPolicy): Promise<MsgCreateGroupWithPolicyResponse>;
    /** UpdateGroupPolicyAdmin updates a group policy admin. */
    UpdateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin): Promise<MsgUpdateGroupPolicyAdminResponse>;
    /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
    UpdateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse>;
    /** UpdateGroupPolicyMetadata updates a group policy metadata. */
    UpdateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata): Promise<MsgUpdateGroupPolicyMetadataResponse>;
    /** SubmitProposal submits a new proposal. */
    SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    /** WithdrawProposal withdraws a proposal. */
    WithdrawProposal(request: MsgWithdrawProposal): Promise<MsgWithdrawProposalResponse>;
    /** Vote allows a voter to vote on a proposal. */
    Vote(request: MsgVote): Promise<MsgVoteResponse>;
    /** Exec executes a proposal. */
    Exec(request: MsgExec): Promise<MsgExecResponse>;
    /** LeaveGroup allows a group member to leave the group. */
    LeaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse>;
}
export declare const MsgServiceName = "cosmos.group.v1.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
    UpdateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse>;
    UpdateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponse>;
    UpdateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponse>;
    CreateGroupPolicy(request: MsgCreateGroupPolicy): Promise<MsgCreateGroupPolicyResponse>;
    CreateGroupWithPolicy(request: MsgCreateGroupWithPolicy): Promise<MsgCreateGroupWithPolicyResponse>;
    UpdateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin): Promise<MsgUpdateGroupPolicyAdminResponse>;
    UpdateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse>;
    UpdateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata): Promise<MsgUpdateGroupPolicyMetadataResponse>;
    SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    WithdrawProposal(request: MsgWithdrawProposal): Promise<MsgWithdrawProposalResponse>;
    Vote(request: MsgVote): Promise<MsgVoteResponse>;
    Exec(request: MsgExec): Promise<MsgExecResponse>;
    LeaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse>;
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
