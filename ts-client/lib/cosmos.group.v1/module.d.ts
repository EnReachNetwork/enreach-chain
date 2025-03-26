import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { Member } from "./types/cosmos/group/v1/types";
import { PercentageDecisionPolicy } from "./types/cosmos/group/v1/types";
import { QueryGroupsByMemberRequest } from "./types/cosmos/group/v1/query";
import { QueryProposalResponse } from "./types/cosmos/group/v1/query";
import { QueryVotesByProposalResponse } from "./types/cosmos/group/v1/query";
import { MsgCreateGroupResponse } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyDecisionPolicyResponse } from "./types/cosmos/group/v1/tx";
import { MsgSubmitProposal } from "./types/cosmos/group/v1/tx";
import { MsgLeaveGroupResponse } from "./types/cosmos/group/v1/tx";
import { QueryGroupMembersResponse } from "./types/cosmos/group/v1/query";
import { QueryGroupPoliciesByAdminResponse } from "./types/cosmos/group/v1/query";
import { TallyResult } from "./types/cosmos/group/v1/types";
import { MsgUpdateGroupAdminResponse } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyAdmin } from "./types/cosmos/group/v1/tx";
import { Proposal } from "./types/cosmos/group/v1/types";
import { QueryGroupInfoResponse } from "./types/cosmos/group/v1/query";
import { QueryGroupsRequest } from "./types/cosmos/group/v1/query";
import { QueryGroupPolicyInfoResponse } from "./types/cosmos/group/v1/query";
import { QueryGroupPoliciesByGroupRequest } from "./types/cosmos/group/v1/query";
import { QueryProposalsByGroupPolicyRequest } from "./types/cosmos/group/v1/query";
import { QueryVoteByProposalVoterResponse } from "./types/cosmos/group/v1/query";
import { QueryGroupsByMemberResponse } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupPolicyMetadata } from "./types/cosmos/group/v1/tx";
import { EventWithdrawProposal } from "./types/cosmos/group/v1/events";
import { EventProposalPruned } from "./types/cosmos/group/v1/events";
import { QueryGroupsResponse } from "./types/cosmos/group/v1/query";
import { MsgCreateGroup } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupAdmin } from "./types/cosmos/group/v1/tx";
import { MsgSubmitProposalResponse } from "./types/cosmos/group/v1/tx";
import { GroupMember } from "./types/cosmos/group/v1/types";
import { EventUpdateGroup } from "./types/cosmos/group/v1/events";
import { QueryGroupPoliciesByGroupResponse } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupPolicyAdminResponse } from "./types/cosmos/group/v1/tx";
import { MsgWithdrawProposalResponse } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupMetadata } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroupPolicyResponse } from "./types/cosmos/group/v1/tx";
import { QueryTallyResultResponse } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupMembers } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupMembersResponse } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyDecisionPolicy } from "./types/cosmos/group/v1/tx";
import { MsgWithdrawProposal } from "./types/cosmos/group/v1/tx";
import { EventCreateGroup } from "./types/cosmos/group/v1/events";
import { QueryVotesByProposalRequest } from "./types/cosmos/group/v1/query";
import { MsgCreateGroupWithPolicyResponse } from "./types/cosmos/group/v1/tx";
import { MemberRequest } from "./types/cosmos/group/v1/types";
import { ThresholdDecisionPolicy } from "./types/cosmos/group/v1/types";
import { EventCreateGroupPolicy } from "./types/cosmos/group/v1/events";
import { MsgUpdateGroupMetadataResponse } from "./types/cosmos/group/v1/tx";
import { QueryTallyResultRequest } from "./types/cosmos/group/v1/query";
import { Vote } from "./types/cosmos/group/v1/types";
import { EventExec } from "./types/cosmos/group/v1/events";
import { QueryVotesByVoterResponse } from "./types/cosmos/group/v1/query";
import { MsgLeaveGroup } from "./types/cosmos/group/v1/tx";
import { EventLeaveGroup } from "./types/cosmos/group/v1/events";
import { QueryGroupPoliciesByAdminRequest } from "./types/cosmos/group/v1/query";
import { QueryGroupInfoRequest } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupPolicyMetadataResponse } from "./types/cosmos/group/v1/tx";
import { QueryGroupsByAdminResponse } from "./types/cosmos/group/v1/query";
import { QueryProposalsByGroupPolicyResponse } from "./types/cosmos/group/v1/query";
import { MsgCreateGroupWithPolicy } from "./types/cosmos/group/v1/tx";
import { MsgExec } from "./types/cosmos/group/v1/tx";
import { DecisionPolicyWindows } from "./types/cosmos/group/v1/types";
import { GroupInfo } from "./types/cosmos/group/v1/types";
import { EventSubmitProposal } from "./types/cosmos/group/v1/events";
import { EventVote } from "./types/cosmos/group/v1/events";
import { GroupPolicyInfo } from "./types/cosmos/group/v1/types";
import { QueryProposalRequest } from "./types/cosmos/group/v1/query";
import { QueryVotesByVoterRequest } from "./types/cosmos/group/v1/query";
import { MsgVoteResponse } from "./types/cosmos/group/v1/tx";
import { MsgExecResponse } from "./types/cosmos/group/v1/tx";
import { GenesisState } from "./types/cosmos/group/v1/genesis";
import { EventUpdateGroupPolicy } from "./types/cosmos/group/v1/events";
import { QueryGroupMembersRequest } from "./types/cosmos/group/v1/query";
import { MsgCreateGroupPolicy } from "./types/cosmos/group/v1/tx";
import { QueryVoteByProposalVoterRequest } from "./types/cosmos/group/v1/query";
import { MsgVote } from "./types/cosmos/group/v1/tx";
import { QueryGroupPolicyInfoRequest } from "./types/cosmos/group/v1/query";
import { QueryGroupsByAdminRequest } from "./types/cosmos/group/v1/query";
export { Member, PercentageDecisionPolicy, QueryGroupsByMemberRequest, QueryProposalResponse, QueryVotesByProposalResponse, MsgCreateGroupResponse, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgSubmitProposal, MsgLeaveGroupResponse, QueryGroupMembersResponse, QueryGroupPoliciesByAdminResponse, TallyResult, MsgUpdateGroupAdminResponse, MsgUpdateGroupPolicyAdmin, Proposal, QueryGroupInfoResponse, QueryGroupsRequest, QueryGroupPolicyInfoResponse, QueryGroupPoliciesByGroupRequest, QueryProposalsByGroupPolicyRequest, QueryVoteByProposalVoterResponse, QueryGroupsByMemberResponse, MsgUpdateGroupPolicyMetadata, EventWithdrawProposal, EventProposalPruned, QueryGroupsResponse, MsgCreateGroup, MsgUpdateGroupAdmin, MsgSubmitProposalResponse, GroupMember, EventUpdateGroup, QueryGroupPoliciesByGroupResponse, MsgUpdateGroupPolicyAdminResponse, MsgWithdrawProposalResponse, MsgUpdateGroupMetadata, MsgCreateGroupPolicyResponse, QueryTallyResultResponse, MsgUpdateGroupMembers, MsgUpdateGroupMembersResponse, MsgUpdateGroupPolicyDecisionPolicy, MsgWithdrawProposal, EventCreateGroup, QueryVotesByProposalRequest, MsgCreateGroupWithPolicyResponse, MemberRequest, ThresholdDecisionPolicy, EventCreateGroupPolicy, MsgUpdateGroupMetadataResponse, QueryTallyResultRequest, Vote, EventExec, QueryVotesByVoterResponse, MsgLeaveGroup, EventLeaveGroup, QueryGroupPoliciesByAdminRequest, QueryGroupInfoRequest, MsgUpdateGroupPolicyMetadataResponse, QueryGroupsByAdminResponse, QueryProposalsByGroupPolicyResponse, MsgCreateGroupWithPolicy, MsgExec, DecisionPolicyWindows, GroupInfo, EventSubmitProposal, EventVote, GroupPolicyInfo, QueryProposalRequest, QueryVotesByVoterRequest, MsgVoteResponse, MsgExecResponse, GenesisState, EventUpdateGroupPolicy, QueryGroupMembersRequest, MsgCreateGroupPolicy, QueryVoteByProposalVoterRequest, MsgVote, QueryGroupPolicyInfoRequest, QueryGroupsByAdminRequest };
type sendMemberParams = {
    value: Member;
    fee?: StdFee;
    memo?: string;
};
type sendPercentageDecisionPolicyParams = {
    value: PercentageDecisionPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByMemberRequestParams = {
    value: QueryGroupsByMemberRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalResponseParams = {
    value: QueryProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByProposalResponseParams = {
    value: QueryVotesByProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupResponseParams = {
    value: MsgCreateGroupResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyDecisionPolicyResponseParams = {
    value: MsgUpdateGroupPolicyDecisionPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalParams = {
    value: MsgSubmitProposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgLeaveGroupResponseParams = {
    value: MsgLeaveGroupResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupMembersResponseParams = {
    value: QueryGroupMembersResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByAdminResponseParams = {
    value: QueryGroupPoliciesByAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTallyResultParams = {
    value: TallyResult;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupAdminResponseParams = {
    value: MsgUpdateGroupAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyAdminParams = {
    value: MsgUpdateGroupPolicyAdmin;
    fee?: StdFee;
    memo?: string;
};
type sendProposalParams = {
    value: Proposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupInfoResponseParams = {
    value: QueryGroupInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsRequestParams = {
    value: QueryGroupsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPolicyInfoResponseParams = {
    value: QueryGroupPolicyInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByGroupRequestParams = {
    value: QueryGroupPoliciesByGroupRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsByGroupPolicyRequestParams = {
    value: QueryProposalsByGroupPolicyRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteByProposalVoterResponseParams = {
    value: QueryVoteByProposalVoterResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByMemberResponseParams = {
    value: QueryGroupsByMemberResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyMetadataParams = {
    value: MsgUpdateGroupPolicyMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendEventWithdrawProposalParams = {
    value: EventWithdrawProposal;
    fee?: StdFee;
    memo?: string;
};
type sendEventProposalPrunedParams = {
    value: EventProposalPruned;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsResponseParams = {
    value: QueryGroupsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupParams = {
    value: MsgCreateGroup;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupAdminParams = {
    value: MsgUpdateGroupAdmin;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGroupMemberParams = {
    value: GroupMember;
    fee?: StdFee;
    memo?: string;
};
type sendEventUpdateGroupParams = {
    value: EventUpdateGroup;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByGroupResponseParams = {
    value: QueryGroupPoliciesByGroupResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyAdminResponseParams = {
    value: MsgUpdateGroupPolicyAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawProposalResponseParams = {
    value: MsgWithdrawProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupMetadataParams = {
    value: MsgUpdateGroupMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupPolicyResponseParams = {
    value: MsgCreateGroupPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupMembersParams = {
    value: MsgUpdateGroupMembers;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupMembersResponseParams = {
    value: MsgUpdateGroupMembersResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyDecisionPolicyParams = {
    value: MsgUpdateGroupPolicyDecisionPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawProposalParams = {
    value: MsgWithdrawProposal;
    fee?: StdFee;
    memo?: string;
};
type sendEventCreateGroupParams = {
    value: EventCreateGroup;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByProposalRequestParams = {
    value: QueryVotesByProposalRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupWithPolicyResponseParams = {
    value: MsgCreateGroupWithPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMemberRequestParams = {
    value: MemberRequest;
    fee?: StdFee;
    memo?: string;
};
type sendThresholdDecisionPolicyParams = {
    value: ThresholdDecisionPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendEventCreateGroupPolicyParams = {
    value: EventCreateGroupPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupMetadataResponseParams = {
    value: MsgUpdateGroupMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
    fee?: StdFee;
    memo?: string;
};
type sendVoteParams = {
    value: Vote;
    fee?: StdFee;
    memo?: string;
};
type sendEventExecParams = {
    value: EventExec;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByVoterResponseParams = {
    value: QueryVotesByVoterResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgLeaveGroupParams = {
    value: MsgLeaveGroup;
    fee?: StdFee;
    memo?: string;
};
type sendEventLeaveGroupParams = {
    value: EventLeaveGroup;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByAdminRequestParams = {
    value: QueryGroupPoliciesByAdminRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupInfoRequestParams = {
    value: QueryGroupInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyMetadataResponseParams = {
    value: MsgUpdateGroupPolicyMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByAdminResponseParams = {
    value: QueryGroupsByAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsByGroupPolicyResponseParams = {
    value: QueryProposalsByGroupPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupWithPolicyParams = {
    value: MsgCreateGroupWithPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecParams = {
    value: MsgExec;
    fee?: StdFee;
    memo?: string;
};
type sendDecisionPolicyWindowsParams = {
    value: DecisionPolicyWindows;
    fee?: StdFee;
    memo?: string;
};
type sendGroupInfoParams = {
    value: GroupInfo;
    fee?: StdFee;
    memo?: string;
};
type sendEventSubmitProposalParams = {
    value: EventSubmitProposal;
    fee?: StdFee;
    memo?: string;
};
type sendEventVoteParams = {
    value: EventVote;
    fee?: StdFee;
    memo?: string;
};
type sendGroupPolicyInfoParams = {
    value: GroupPolicyInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalRequestParams = {
    value: QueryProposalRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByVoterRequestParams = {
    value: QueryVotesByVoterRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteResponseParams = {
    value: MsgVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecResponseParams = {
    value: MsgExecResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendEventUpdateGroupPolicyParams = {
    value: EventUpdateGroupPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupMembersRequestParams = {
    value: QueryGroupMembersRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupPolicyParams = {
    value: MsgCreateGroupPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteByProposalVoterRequestParams = {
    value: QueryVoteByProposalVoterRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteParams = {
    value: MsgVote;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPolicyInfoRequestParams = {
    value: QueryGroupPolicyInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByAdminRequestParams = {
    value: QueryGroupsByAdminRequest;
    fee?: StdFee;
    memo?: string;
};
type memberParams = {
    value: Member;
};
type percentageDecisionPolicyParams = {
    value: PercentageDecisionPolicy;
};
type queryGroupsByMemberRequestParams = {
    value: QueryGroupsByMemberRequest;
};
type queryProposalResponseParams = {
    value: QueryProposalResponse;
};
type queryVotesByProposalResponseParams = {
    value: QueryVotesByProposalResponse;
};
type msgCreateGroupResponseParams = {
    value: MsgCreateGroupResponse;
};
type msgUpdateGroupPolicyDecisionPolicyResponseParams = {
    value: MsgUpdateGroupPolicyDecisionPolicyResponse;
};
type msgSubmitProposalParams = {
    value: MsgSubmitProposal;
};
type msgLeaveGroupResponseParams = {
    value: MsgLeaveGroupResponse;
};
type queryGroupMembersResponseParams = {
    value: QueryGroupMembersResponse;
};
type queryGroupPoliciesByAdminResponseParams = {
    value: QueryGroupPoliciesByAdminResponse;
};
type tallyResultParams = {
    value: TallyResult;
};
type msgUpdateGroupAdminResponseParams = {
    value: MsgUpdateGroupAdminResponse;
};
type msgUpdateGroupPolicyAdminParams = {
    value: MsgUpdateGroupPolicyAdmin;
};
type proposalParams = {
    value: Proposal;
};
type queryGroupInfoResponseParams = {
    value: QueryGroupInfoResponse;
};
type queryGroupsRequestParams = {
    value: QueryGroupsRequest;
};
type queryGroupPolicyInfoResponseParams = {
    value: QueryGroupPolicyInfoResponse;
};
type queryGroupPoliciesByGroupRequestParams = {
    value: QueryGroupPoliciesByGroupRequest;
};
type queryProposalsByGroupPolicyRequestParams = {
    value: QueryProposalsByGroupPolicyRequest;
};
type queryVoteByProposalVoterResponseParams = {
    value: QueryVoteByProposalVoterResponse;
};
type queryGroupsByMemberResponseParams = {
    value: QueryGroupsByMemberResponse;
};
type msgUpdateGroupPolicyMetadataParams = {
    value: MsgUpdateGroupPolicyMetadata;
};
type eventWithdrawProposalParams = {
    value: EventWithdrawProposal;
};
type eventProposalPrunedParams = {
    value: EventProposalPruned;
};
type queryGroupsResponseParams = {
    value: QueryGroupsResponse;
};
type msgCreateGroupParams = {
    value: MsgCreateGroup;
};
type msgUpdateGroupAdminParams = {
    value: MsgUpdateGroupAdmin;
};
type msgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
};
type groupMemberParams = {
    value: GroupMember;
};
type eventUpdateGroupParams = {
    value: EventUpdateGroup;
};
type queryGroupPoliciesByGroupResponseParams = {
    value: QueryGroupPoliciesByGroupResponse;
};
type msgUpdateGroupPolicyAdminResponseParams = {
    value: MsgUpdateGroupPolicyAdminResponse;
};
type msgWithdrawProposalResponseParams = {
    value: MsgWithdrawProposalResponse;
};
type msgUpdateGroupMetadataParams = {
    value: MsgUpdateGroupMetadata;
};
type msgCreateGroupPolicyResponseParams = {
    value: MsgCreateGroupPolicyResponse;
};
type queryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
};
type msgUpdateGroupMembersParams = {
    value: MsgUpdateGroupMembers;
};
type msgUpdateGroupMembersResponseParams = {
    value: MsgUpdateGroupMembersResponse;
};
type msgUpdateGroupPolicyDecisionPolicyParams = {
    value: MsgUpdateGroupPolicyDecisionPolicy;
};
type msgWithdrawProposalParams = {
    value: MsgWithdrawProposal;
};
type eventCreateGroupParams = {
    value: EventCreateGroup;
};
type queryVotesByProposalRequestParams = {
    value: QueryVotesByProposalRequest;
};
type msgCreateGroupWithPolicyResponseParams = {
    value: MsgCreateGroupWithPolicyResponse;
};
type memberRequestParams = {
    value: MemberRequest;
};
type thresholdDecisionPolicyParams = {
    value: ThresholdDecisionPolicy;
};
type eventCreateGroupPolicyParams = {
    value: EventCreateGroupPolicy;
};
type msgUpdateGroupMetadataResponseParams = {
    value: MsgUpdateGroupMetadataResponse;
};
type queryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
};
type voteParams = {
    value: Vote;
};
type eventExecParams = {
    value: EventExec;
};
type queryVotesByVoterResponseParams = {
    value: QueryVotesByVoterResponse;
};
type msgLeaveGroupParams = {
    value: MsgLeaveGroup;
};
type eventLeaveGroupParams = {
    value: EventLeaveGroup;
};
type queryGroupPoliciesByAdminRequestParams = {
    value: QueryGroupPoliciesByAdminRequest;
};
type queryGroupInfoRequestParams = {
    value: QueryGroupInfoRequest;
};
type msgUpdateGroupPolicyMetadataResponseParams = {
    value: MsgUpdateGroupPolicyMetadataResponse;
};
type queryGroupsByAdminResponseParams = {
    value: QueryGroupsByAdminResponse;
};
type queryProposalsByGroupPolicyResponseParams = {
    value: QueryProposalsByGroupPolicyResponse;
};
type msgCreateGroupWithPolicyParams = {
    value: MsgCreateGroupWithPolicy;
};
type msgExecParams = {
    value: MsgExec;
};
type decisionPolicyWindowsParams = {
    value: DecisionPolicyWindows;
};
type groupInfoParams = {
    value: GroupInfo;
};
type eventSubmitProposalParams = {
    value: EventSubmitProposal;
};
type eventVoteParams = {
    value: EventVote;
};
type groupPolicyInfoParams = {
    value: GroupPolicyInfo;
};
type queryProposalRequestParams = {
    value: QueryProposalRequest;
};
type queryVotesByVoterRequestParams = {
    value: QueryVotesByVoterRequest;
};
type msgVoteResponseParams = {
    value: MsgVoteResponse;
};
type msgExecResponseParams = {
    value: MsgExecResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type eventUpdateGroupPolicyParams = {
    value: EventUpdateGroupPolicy;
};
type queryGroupMembersRequestParams = {
    value: QueryGroupMembersRequest;
};
type msgCreateGroupPolicyParams = {
    value: MsgCreateGroupPolicy;
};
type queryVoteByProposalVoterRequestParams = {
    value: QueryVoteByProposalVoterRequest;
};
type msgVoteParams = {
    value: MsgVote;
};
type queryGroupPolicyInfoRequestParams = {
    value: QueryGroupPolicyInfoRequest;
};
type queryGroupsByAdminRequestParams = {
    value: QueryGroupsByAdminRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMember({ value, fee, memo }: sendMemberParams): Promise<DeliverTxResponse>;
    sendPercentageDecisionPolicy({ value, fee, memo }: sendPercentageDecisionPolicyParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByMemberRequest({ value, fee, memo }: sendQueryGroupsByMemberRequestParams): Promise<DeliverTxResponse>;
    sendQueryProposalResponse({ value, fee, memo }: sendQueryProposalResponseParams): Promise<DeliverTxResponse>;
    sendQueryVotesByProposalResponse({ value, fee, memo }: sendQueryVotesByProposalResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupResponse({ value, fee, memo }: sendMsgCreateGroupResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyDecisionPolicyResponse({ value, fee, memo }: sendMsgUpdateGroupPolicyDecisionPolicyResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse>;
    sendMsgLeaveGroupResponse({ value, fee, memo }: sendMsgLeaveGroupResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupMembersResponse({ value, fee, memo }: sendQueryGroupMembersResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByAdminResponse({ value, fee, memo }: sendQueryGroupPoliciesByAdminResponseParams): Promise<DeliverTxResponse>;
    sendTallyResult({ value, fee, memo }: sendTallyResultParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupAdminResponse({ value, fee, memo }: sendMsgUpdateGroupAdminResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyAdmin({ value, fee, memo }: sendMsgUpdateGroupPolicyAdminParams): Promise<DeliverTxResponse>;
    sendProposal({ value, fee, memo }: sendProposalParams): Promise<DeliverTxResponse>;
    sendQueryGroupInfoResponse({ value, fee, memo }: sendQueryGroupInfoResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupsRequest({ value, fee, memo }: sendQueryGroupsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGroupPolicyInfoResponse({ value, fee, memo }: sendQueryGroupPolicyInfoResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByGroupRequest({ value, fee, memo }: sendQueryGroupPoliciesByGroupRequestParams): Promise<DeliverTxResponse>;
    sendQueryProposalsByGroupPolicyRequest({ value, fee, memo }: sendQueryProposalsByGroupPolicyRequestParams): Promise<DeliverTxResponse>;
    sendQueryVoteByProposalVoterResponse({ value, fee, memo }: sendQueryVoteByProposalVoterResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByMemberResponse({ value, fee, memo }: sendQueryGroupsByMemberResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyMetadata({ value, fee, memo }: sendMsgUpdateGroupPolicyMetadataParams): Promise<DeliverTxResponse>;
    sendEventWithdrawProposal({ value, fee, memo }: sendEventWithdrawProposalParams): Promise<DeliverTxResponse>;
    sendEventProposalPruned({ value, fee, memo }: sendEventProposalPrunedParams): Promise<DeliverTxResponse>;
    sendQueryGroupsResponse({ value, fee, memo }: sendQueryGroupsResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroup({ value, fee, memo }: sendMsgCreateGroupParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupAdmin({ value, fee, memo }: sendMsgUpdateGroupAdminParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposalResponse({ value, fee, memo }: sendMsgSubmitProposalResponseParams): Promise<DeliverTxResponse>;
    sendGroupMember({ value, fee, memo }: sendGroupMemberParams): Promise<DeliverTxResponse>;
    sendEventUpdateGroup({ value, fee, memo }: sendEventUpdateGroupParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByGroupResponse({ value, fee, memo }: sendQueryGroupPoliciesByGroupResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyAdminResponse({ value, fee, memo }: sendMsgUpdateGroupPolicyAdminResponseParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawProposalResponse({ value, fee, memo }: sendMsgWithdrawProposalResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupMetadata({ value, fee, memo }: sendMsgUpdateGroupMetadataParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupPolicyResponse({ value, fee, memo }: sendMsgCreateGroupPolicyResponseParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultResponse({ value, fee, memo }: sendQueryTallyResultResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupMembers({ value, fee, memo }: sendMsgUpdateGroupMembersParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupMembersResponse({ value, fee, memo }: sendMsgUpdateGroupMembersResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyDecisionPolicy({ value, fee, memo }: sendMsgUpdateGroupPolicyDecisionPolicyParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawProposal({ value, fee, memo }: sendMsgWithdrawProposalParams): Promise<DeliverTxResponse>;
    sendEventCreateGroup({ value, fee, memo }: sendEventCreateGroupParams): Promise<DeliverTxResponse>;
    sendQueryVotesByProposalRequest({ value, fee, memo }: sendQueryVotesByProposalRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupWithPolicyResponse({ value, fee, memo }: sendMsgCreateGroupWithPolicyResponseParams): Promise<DeliverTxResponse>;
    sendMemberRequest({ value, fee, memo }: sendMemberRequestParams): Promise<DeliverTxResponse>;
    sendThresholdDecisionPolicy({ value, fee, memo }: sendThresholdDecisionPolicyParams): Promise<DeliverTxResponse>;
    sendEventCreateGroupPolicy({ value, fee, memo }: sendEventCreateGroupPolicyParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupMetadataResponse({ value, fee, memo }: sendMsgUpdateGroupMetadataResponseParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultRequest({ value, fee, memo }: sendQueryTallyResultRequestParams): Promise<DeliverTxResponse>;
    sendVote({ value, fee, memo }: sendVoteParams): Promise<DeliverTxResponse>;
    sendEventExec({ value, fee, memo }: sendEventExecParams): Promise<DeliverTxResponse>;
    sendQueryVotesByVoterResponse({ value, fee, memo }: sendQueryVotesByVoterResponseParams): Promise<DeliverTxResponse>;
    sendMsgLeaveGroup({ value, fee, memo }: sendMsgLeaveGroupParams): Promise<DeliverTxResponse>;
    sendEventLeaveGroup({ value, fee, memo }: sendEventLeaveGroupParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByAdminRequest({ value, fee, memo }: sendQueryGroupPoliciesByAdminRequestParams): Promise<DeliverTxResponse>;
    sendQueryGroupInfoRequest({ value, fee, memo }: sendQueryGroupInfoRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyMetadataResponse({ value, fee, memo }: sendMsgUpdateGroupPolicyMetadataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByAdminResponse({ value, fee, memo }: sendQueryGroupsByAdminResponseParams): Promise<DeliverTxResponse>;
    sendQueryProposalsByGroupPolicyResponse({ value, fee, memo }: sendQueryProposalsByGroupPolicyResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupWithPolicy({ value, fee, memo }: sendMsgCreateGroupWithPolicyParams): Promise<DeliverTxResponse>;
    sendMsgExec({ value, fee, memo }: sendMsgExecParams): Promise<DeliverTxResponse>;
    sendDecisionPolicyWindows({ value, fee, memo }: sendDecisionPolicyWindowsParams): Promise<DeliverTxResponse>;
    sendGroupInfo({ value, fee, memo }: sendGroupInfoParams): Promise<DeliverTxResponse>;
    sendEventSubmitProposal({ value, fee, memo }: sendEventSubmitProposalParams): Promise<DeliverTxResponse>;
    sendEventVote({ value, fee, memo }: sendEventVoteParams): Promise<DeliverTxResponse>;
    sendGroupPolicyInfo({ value, fee, memo }: sendGroupPolicyInfoParams): Promise<DeliverTxResponse>;
    sendQueryProposalRequest({ value, fee, memo }: sendQueryProposalRequestParams): Promise<DeliverTxResponse>;
    sendQueryVotesByVoterRequest({ value, fee, memo }: sendQueryVotesByVoterRequestParams): Promise<DeliverTxResponse>;
    sendMsgVoteResponse({ value, fee, memo }: sendMsgVoteResponseParams): Promise<DeliverTxResponse>;
    sendMsgExecResponse({ value, fee, memo }: sendMsgExecResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendEventUpdateGroupPolicy({ value, fee, memo }: sendEventUpdateGroupPolicyParams): Promise<DeliverTxResponse>;
    sendQueryGroupMembersRequest({ value, fee, memo }: sendQueryGroupMembersRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupPolicy({ value, fee, memo }: sendMsgCreateGroupPolicyParams): Promise<DeliverTxResponse>;
    sendQueryVoteByProposalVoterRequest({ value, fee, memo }: sendQueryVoteByProposalVoterRequestParams): Promise<DeliverTxResponse>;
    sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse>;
    sendQueryGroupPolicyInfoRequest({ value, fee, memo }: sendQueryGroupPolicyInfoRequestParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByAdminRequest({ value, fee, memo }: sendQueryGroupsByAdminRequestParams): Promise<DeliverTxResponse>;
    member({ value }: memberParams): EncodeObject;
    percentageDecisionPolicy({ value }: percentageDecisionPolicyParams): EncodeObject;
    queryGroupsByMemberRequest({ value }: queryGroupsByMemberRequestParams): EncodeObject;
    queryProposalResponse({ value }: queryProposalResponseParams): EncodeObject;
    queryVotesByProposalResponse({ value }: queryVotesByProposalResponseParams): EncodeObject;
    msgCreateGroupResponse({ value }: msgCreateGroupResponseParams): EncodeObject;
    msgUpdateGroupPolicyDecisionPolicyResponse({ value }: msgUpdateGroupPolicyDecisionPolicyResponseParams): EncodeObject;
    msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject;
    msgLeaveGroupResponse({ value }: msgLeaveGroupResponseParams): EncodeObject;
    queryGroupMembersResponse({ value }: queryGroupMembersResponseParams): EncodeObject;
    queryGroupPoliciesByAdminResponse({ value }: queryGroupPoliciesByAdminResponseParams): EncodeObject;
    tallyResult({ value }: tallyResultParams): EncodeObject;
    msgUpdateGroupAdminResponse({ value }: msgUpdateGroupAdminResponseParams): EncodeObject;
    msgUpdateGroupPolicyAdmin({ value }: msgUpdateGroupPolicyAdminParams): EncodeObject;
    proposal({ value }: proposalParams): EncodeObject;
    queryGroupInfoResponse({ value }: queryGroupInfoResponseParams): EncodeObject;
    queryGroupsRequest({ value }: queryGroupsRequestParams): EncodeObject;
    queryGroupPolicyInfoResponse({ value }: queryGroupPolicyInfoResponseParams): EncodeObject;
    queryGroupPoliciesByGroupRequest({ value }: queryGroupPoliciesByGroupRequestParams): EncodeObject;
    queryProposalsByGroupPolicyRequest({ value }: queryProposalsByGroupPolicyRequestParams): EncodeObject;
    queryVoteByProposalVoterResponse({ value }: queryVoteByProposalVoterResponseParams): EncodeObject;
    queryGroupsByMemberResponse({ value }: queryGroupsByMemberResponseParams): EncodeObject;
    msgUpdateGroupPolicyMetadata({ value }: msgUpdateGroupPolicyMetadataParams): EncodeObject;
    eventWithdrawProposal({ value }: eventWithdrawProposalParams): EncodeObject;
    eventProposalPruned({ value }: eventProposalPrunedParams): EncodeObject;
    queryGroupsResponse({ value }: queryGroupsResponseParams): EncodeObject;
    msgCreateGroup({ value }: msgCreateGroupParams): EncodeObject;
    msgUpdateGroupAdmin({ value }: msgUpdateGroupAdminParams): EncodeObject;
    msgSubmitProposalResponse({ value }: msgSubmitProposalResponseParams): EncodeObject;
    groupMember({ value }: groupMemberParams): EncodeObject;
    eventUpdateGroup({ value }: eventUpdateGroupParams): EncodeObject;
    queryGroupPoliciesByGroupResponse({ value }: queryGroupPoliciesByGroupResponseParams): EncodeObject;
    msgUpdateGroupPolicyAdminResponse({ value }: msgUpdateGroupPolicyAdminResponseParams): EncodeObject;
    msgWithdrawProposalResponse({ value }: msgWithdrawProposalResponseParams): EncodeObject;
    msgUpdateGroupMetadata({ value }: msgUpdateGroupMetadataParams): EncodeObject;
    msgCreateGroupPolicyResponse({ value }: msgCreateGroupPolicyResponseParams): EncodeObject;
    queryTallyResultResponse({ value }: queryTallyResultResponseParams): EncodeObject;
    msgUpdateGroupMembers({ value }: msgUpdateGroupMembersParams): EncodeObject;
    msgUpdateGroupMembersResponse({ value }: msgUpdateGroupMembersResponseParams): EncodeObject;
    msgUpdateGroupPolicyDecisionPolicy({ value }: msgUpdateGroupPolicyDecisionPolicyParams): EncodeObject;
    msgWithdrawProposal({ value }: msgWithdrawProposalParams): EncodeObject;
    eventCreateGroup({ value }: eventCreateGroupParams): EncodeObject;
    queryVotesByProposalRequest({ value }: queryVotesByProposalRequestParams): EncodeObject;
    msgCreateGroupWithPolicyResponse({ value }: msgCreateGroupWithPolicyResponseParams): EncodeObject;
    memberRequest({ value }: memberRequestParams): EncodeObject;
    thresholdDecisionPolicy({ value }: thresholdDecisionPolicyParams): EncodeObject;
    eventCreateGroupPolicy({ value }: eventCreateGroupPolicyParams): EncodeObject;
    msgUpdateGroupMetadataResponse({ value }: msgUpdateGroupMetadataResponseParams): EncodeObject;
    queryTallyResultRequest({ value }: queryTallyResultRequestParams): EncodeObject;
    vote({ value }: voteParams): EncodeObject;
    eventExec({ value }: eventExecParams): EncodeObject;
    queryVotesByVoterResponse({ value }: queryVotesByVoterResponseParams): EncodeObject;
    msgLeaveGroup({ value }: msgLeaveGroupParams): EncodeObject;
    eventLeaveGroup({ value }: eventLeaveGroupParams): EncodeObject;
    queryGroupPoliciesByAdminRequest({ value }: queryGroupPoliciesByAdminRequestParams): EncodeObject;
    queryGroupInfoRequest({ value }: queryGroupInfoRequestParams): EncodeObject;
    msgUpdateGroupPolicyMetadataResponse({ value }: msgUpdateGroupPolicyMetadataResponseParams): EncodeObject;
    queryGroupsByAdminResponse({ value }: queryGroupsByAdminResponseParams): EncodeObject;
    queryProposalsByGroupPolicyResponse({ value }: queryProposalsByGroupPolicyResponseParams): EncodeObject;
    msgCreateGroupWithPolicy({ value }: msgCreateGroupWithPolicyParams): EncodeObject;
    msgExec({ value }: msgExecParams): EncodeObject;
    decisionPolicyWindows({ value }: decisionPolicyWindowsParams): EncodeObject;
    groupInfo({ value }: groupInfoParams): EncodeObject;
    eventSubmitProposal({ value }: eventSubmitProposalParams): EncodeObject;
    eventVote({ value }: eventVoteParams): EncodeObject;
    groupPolicyInfo({ value }: groupPolicyInfoParams): EncodeObject;
    queryProposalRequest({ value }: queryProposalRequestParams): EncodeObject;
    queryVotesByVoterRequest({ value }: queryVotesByVoterRequestParams): EncodeObject;
    msgVoteResponse({ value }: msgVoteResponseParams): EncodeObject;
    msgExecResponse({ value }: msgExecResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    eventUpdateGroupPolicy({ value }: eventUpdateGroupPolicyParams): EncodeObject;
    queryGroupMembersRequest({ value }: queryGroupMembersRequestParams): EncodeObject;
    msgCreateGroupPolicy({ value }: msgCreateGroupPolicyParams): EncodeObject;
    queryVoteByProposalVoterRequest({ value }: queryVoteByProposalVoterRequestParams): EncodeObject;
    msgVote({ value }: msgVoteParams): EncodeObject;
    queryGroupPolicyInfoRequest({ value }: queryGroupPolicyInfoRequestParams): EncodeObject;
    queryGroupsByAdminRequest({ value }: queryGroupsByAdminRequestParams): EncodeObject;
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
        CosmosGroupV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
