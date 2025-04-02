"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const events_1 = require("./types/cosmos/group/v1/events");
const types_1 = require("./types/cosmos/group/v1/types");
const query_1 = require("./types/cosmos/group/v1/query");
const tx_1 = require("./types/cosmos/group/v1/tx");
const tx_2 = require("./types/cosmos/group/v1/tx");
const types_2 = require("./types/cosmos/group/v1/types");
const tx_3 = require("./types/cosmos/group/v1/tx");
const query_2 = require("./types/cosmos/group/v1/query");
const query_3 = require("./types/cosmos/group/v1/query");
const query_4 = require("./types/cosmos/group/v1/query");
const tx_4 = require("./types/cosmos/group/v1/tx");
const tx_5 = require("./types/cosmos/group/v1/tx");
const tx_6 = require("./types/cosmos/group/v1/tx");
const genesis_1 = require("./types/cosmos/group/v1/genesis");
const types_3 = require("./types/cosmos/group/v1/types");
const tx_7 = require("./types/cosmos/group/v1/tx");
const query_5 = require("./types/cosmos/group/v1/query");
const query_6 = require("./types/cosmos/group/v1/query");
const tx_8 = require("./types/cosmos/group/v1/tx");
const types_4 = require("./types/cosmos/group/v1/types");
const query_7 = require("./types/cosmos/group/v1/query");
const events_2 = require("./types/cosmos/group/v1/events");
const types_5 = require("./types/cosmos/group/v1/types");
const types_6 = require("./types/cosmos/group/v1/types");
const types_7 = require("./types/cosmos/group/v1/types");
const events_3 = require("./types/cosmos/group/v1/events");
const types_8 = require("./types/cosmos/group/v1/types");
const tx_9 = require("./types/cosmos/group/v1/tx");
const types_9 = require("./types/cosmos/group/v1/types");
const query_8 = require("./types/cosmos/group/v1/query");
const tx_10 = require("./types/cosmos/group/v1/tx");
const query_9 = require("./types/cosmos/group/v1/query");
const tx_11 = require("./types/cosmos/group/v1/tx");
const tx_12 = require("./types/cosmos/group/v1/tx");
const tx_13 = require("./types/cosmos/group/v1/tx");
const events_4 = require("./types/cosmos/group/v1/events");
const events_5 = require("./types/cosmos/group/v1/events");
const query_10 = require("./types/cosmos/group/v1/query");
const query_11 = require("./types/cosmos/group/v1/query");
const query_12 = require("./types/cosmos/group/v1/query");
const query_13 = require("./types/cosmos/group/v1/query");
const tx_14 = require("./types/cosmos/group/v1/tx");
const tx_15 = require("./types/cosmos/group/v1/tx");
const query_14 = require("./types/cosmos/group/v1/query");
const query_15 = require("./types/cosmos/group/v1/query");
const query_16 = require("./types/cosmos/group/v1/query");
const query_17 = require("./types/cosmos/group/v1/query");
const events_6 = require("./types/cosmos/group/v1/events");
const tx_16 = require("./types/cosmos/group/v1/tx");
const tx_17 = require("./types/cosmos/group/v1/tx");
const tx_18 = require("./types/cosmos/group/v1/tx");
const tx_19 = require("./types/cosmos/group/v1/tx");
const query_18 = require("./types/cosmos/group/v1/query");
const query_19 = require("./types/cosmos/group/v1/query");
const events_7 = require("./types/cosmos/group/v1/events");
const query_20 = require("./types/cosmos/group/v1/query");
const tx_20 = require("./types/cosmos/group/v1/tx");
const tx_21 = require("./types/cosmos/group/v1/tx");
const tx_22 = require("./types/cosmos/group/v1/tx");
const query_21 = require("./types/cosmos/group/v1/query");
const query_22 = require("./types/cosmos/group/v1/query");
const query_23 = require("./types/cosmos/group/v1/query");
const tx_23 = require("./types/cosmos/group/v1/tx");
const events_8 = require("./types/cosmos/group/v1/events");
const events_9 = require("./types/cosmos/group/v1/events");
const tx_24 = require("./types/cosmos/group/v1/tx");
const tx_25 = require("./types/cosmos/group/v1/tx");
const tx_26 = require("./types/cosmos/group/v1/tx");
const tx_27 = require("./types/cosmos/group/v1/tx");
const tx_28 = require("./types/cosmos/group/v1/tx");
const query_24 = require("./types/cosmos/group/v1/query");
const query_25 = require("./types/cosmos/group/v1/query");
const query_26 = require("./types/cosmos/group/v1/query");
const events_10 = require("./types/cosmos/group/v1/events");
const types_10 = require("./types/cosmos/group/v1/types");
const query_27 = require("./types/cosmos/group/v1/query");
const types_11 = require("./types/cosmos/group/v1/types");
const query_28 = require("./types/cosmos/group/v1/query");
const msgTypes = [
    ["/cosmos.group.v1.EventLeaveGroup", events_1.EventLeaveGroup],
    ["/cosmos.group.v1.Member", types_1.Member],
    ["/cosmos.group.v1.QueryGroupInfoRequest", query_1.QueryGroupInfoRequest],
    ["/cosmos.group.v1.MsgUpdateGroupMembersResponse", tx_1.MsgUpdateGroupMembersResponse],
    ["/cosmos.group.v1.MsgWithdrawProposal", tx_2.MsgWithdrawProposal],
    ["/cosmos.group.v1.GroupPolicyInfo", types_2.GroupPolicyInfo],
    ["/cosmos.group.v1.MsgCreateGroupPolicy", tx_3.MsgCreateGroupPolicy],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyRequest", query_2.QueryProposalsByGroupPolicyRequest],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyResponse", query_3.QueryProposalsByGroupPolicyResponse],
    ["/cosmos.group.v1.QueryTallyResultRequest", query_4.QueryTallyResultRequest],
    ["/cosmos.group.v1.MsgCreateGroup", tx_4.MsgCreateGroup],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicyResponse", tx_5.MsgCreateGroupWithPolicyResponse],
    ["/cosmos.group.v1.MsgWithdrawProposalResponse", tx_6.MsgWithdrawProposalResponse],
    ["/cosmos.group.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.group.v1.TallyResult", types_3.TallyResult],
    ["/cosmos.group.v1.MsgUpdateGroupMetadata", tx_7.MsgUpdateGroupMetadata],
    ["/cosmos.group.v1.QueryVoteByProposalVoterRequest", query_5.QueryVoteByProposalVoterRequest],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupRequest", query_6.QueryGroupPoliciesByGroupRequest],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse", tx_8.MsgUpdateGroupPolicyDecisionPolicyResponse],
    ["/cosmos.group.v1.DecisionPolicyWindows", types_4.DecisionPolicyWindows],
    ["/cosmos.group.v1.QueryGroupMembersResponse", query_7.QueryGroupMembersResponse],
    ["/cosmos.group.v1.EventUpdateGroupPolicy", events_2.EventUpdateGroupPolicy],
    ["/cosmos.group.v1.ThresholdDecisionPolicy", types_5.ThresholdDecisionPolicy],
    ["/cosmos.group.v1.GroupInfo", types_6.GroupInfo],
    ["/cosmos.group.v1.Proposal", types_7.Proposal],
    ["/cosmos.group.v1.EventCreateGroupPolicy", events_3.EventCreateGroupPolicy],
    ["/cosmos.group.v1.PercentageDecisionPolicy", types_8.PercentageDecisionPolicy],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", tx_9.MsgUpdateGroupPolicyMetadata],
    ["/cosmos.group.v1.GroupMember", types_9.GroupMember],
    ["/cosmos.group.v1.QueryVotesByProposalRequest", query_8.QueryVotesByProposalRequest],
    ["/cosmos.group.v1.MsgCreateGroupPolicyResponse", tx_10.MsgCreateGroupPolicyResponse],
    ["/cosmos.group.v1.QueryVotesByProposalResponse", query_9.QueryVotesByProposalResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse", tx_11.MsgUpdateGroupPolicyAdminResponse],
    ["/cosmos.group.v1.MsgVoteResponse", tx_12.MsgVoteResponse],
    ["/cosmos.group.v1.MsgExec", tx_13.MsgExec],
    ["/cosmos.group.v1.EventCreateGroup", events_4.EventCreateGroup],
    ["/cosmos.group.v1.EventWithdrawProposal", events_5.EventWithdrawProposal],
    ["/cosmos.group.v1.QueryGroupInfoResponse", query_10.QueryGroupInfoResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminRequest", query_11.QueryGroupPoliciesByAdminRequest],
    ["/cosmos.group.v1.QueryGroupsByMemberRequest", query_12.QueryGroupsByMemberRequest],
    ["/cosmos.group.v1.QueryGroupsByMemberResponse", query_13.QueryGroupsByMemberResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", tx_14.MsgUpdateGroupPolicyAdmin],
    ["/cosmos.group.v1.MsgLeaveGroup", tx_15.MsgLeaveGroup],
    ["/cosmos.group.v1.QueryGroupPolicyInfoResponse", query_14.QueryGroupPolicyInfoResponse],
    ["/cosmos.group.v1.QueryGroupMembersRequest", query_15.QueryGroupMembersRequest],
    ["/cosmos.group.v1.QueryVotesByVoterRequest", query_16.QueryVotesByVoterRequest],
    ["/cosmos.group.v1.QueryVotesByVoterResponse", query_17.QueryVotesByVoterResponse],
    ["/cosmos.group.v1.EventExec", events_6.EventExec],
    ["/cosmos.group.v1.MsgUpdateGroupMembers", tx_16.MsgUpdateGroupMembers],
    ["/cosmos.group.v1.MsgUpdateGroupAdminResponse", tx_17.MsgUpdateGroupAdminResponse],
    ["/cosmos.group.v1.MsgLeaveGroupResponse", tx_18.MsgLeaveGroupResponse],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicy", tx_19.MsgCreateGroupWithPolicy],
    ["/cosmos.group.v1.QueryGroupsRequest", query_18.QueryGroupsRequest],
    ["/cosmos.group.v1.QueryGroupsResponse", query_19.QueryGroupsResponse],
    ["/cosmos.group.v1.EventVote", events_7.EventVote],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminResponse", query_20.QueryGroupPoliciesByAdminResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", tx_20.MsgUpdateGroupPolicyDecisionPolicy],
    ["/cosmos.group.v1.MsgUpdateGroupMetadataResponse", tx_21.MsgUpdateGroupMetadataResponse],
    ["/cosmos.group.v1.MsgSubmitProposalResponse", tx_22.MsgSubmitProposalResponse],
    ["/cosmos.group.v1.QueryGroupsByAdminRequest", query_21.QueryGroupsByAdminRequest],
    ["/cosmos.group.v1.QueryGroupsByAdminResponse", query_22.QueryGroupsByAdminResponse],
    ["/cosmos.group.v1.QueryVoteByProposalVoterResponse", query_23.QueryVoteByProposalVoterResponse],
    ["/cosmos.group.v1.MsgCreateGroupResponse", tx_23.MsgCreateGroupResponse],
    ["/cosmos.group.v1.EventUpdateGroup", events_8.EventUpdateGroup],
    ["/cosmos.group.v1.EventSubmitProposal", events_9.EventSubmitProposal],
    ["/cosmos.group.v1.MsgUpdateGroupAdmin", tx_24.MsgUpdateGroupAdmin],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse", tx_25.MsgUpdateGroupPolicyMetadataResponse],
    ["/cosmos.group.v1.MsgVote", tx_26.MsgVote],
    ["/cosmos.group.v1.MsgExecResponse", tx_27.MsgExecResponse],
    ["/cosmos.group.v1.MsgSubmitProposal", tx_28.MsgSubmitProposal],
    ["/cosmos.group.v1.QueryGroupPolicyInfoRequest", query_24.QueryGroupPolicyInfoRequest],
    ["/cosmos.group.v1.QueryProposalRequest", query_25.QueryProposalRequest],
    ["/cosmos.group.v1.QueryProposalResponse", query_26.QueryProposalResponse],
    ["/cosmos.group.v1.EventProposalPruned", events_10.EventProposalPruned],
    ["/cosmos.group.v1.Vote", types_10.Vote],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupResponse", query_27.QueryGroupPoliciesByGroupResponse],
    ["/cosmos.group.v1.MemberRequest", types_11.MemberRequest],
    ["/cosmos.group.v1.QueryTallyResultResponse", query_28.QueryTallyResultResponse],
];
exports.msgTypes = msgTypes;
