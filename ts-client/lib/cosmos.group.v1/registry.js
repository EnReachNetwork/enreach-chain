"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/group/v1/tx");
const tx_2 = require("./types/cosmos/group/v1/tx");
const types_1 = require("./types/cosmos/group/v1/types");
const types_2 = require("./types/cosmos/group/v1/types");
const tx_3 = require("./types/cosmos/group/v1/tx");
const tx_4 = require("./types/cosmos/group/v1/tx");
const query_1 = require("./types/cosmos/group/v1/query");
const query_2 = require("./types/cosmos/group/v1/query");
const query_3 = require("./types/cosmos/group/v1/query");
const tx_5 = require("./types/cosmos/group/v1/tx");
const events_1 = require("./types/cosmos/group/v1/events");
const query_4 = require("./types/cosmos/group/v1/query");
const types_3 = require("./types/cosmos/group/v1/types");
const tx_6 = require("./types/cosmos/group/v1/tx");
const tx_7 = require("./types/cosmos/group/v1/tx");
const tx_8 = require("./types/cosmos/group/v1/tx");
const query_5 = require("./types/cosmos/group/v1/query");
const query_6 = require("./types/cosmos/group/v1/query");
const tx_9 = require("./types/cosmos/group/v1/tx");
const events_2 = require("./types/cosmos/group/v1/events");
const query_7 = require("./types/cosmos/group/v1/query");
const query_8 = require("./types/cosmos/group/v1/query");
const tx_10 = require("./types/cosmos/group/v1/tx");
const tx_11 = require("./types/cosmos/group/v1/tx");
const genesis_1 = require("./types/cosmos/group/v1/genesis");
const tx_12 = require("./types/cosmos/group/v1/tx");
const tx_13 = require("./types/cosmos/group/v1/tx");
const query_9 = require("./types/cosmos/group/v1/query");
const tx_14 = require("./types/cosmos/group/v1/tx");
const tx_15 = require("./types/cosmos/group/v1/tx");
const query_10 = require("./types/cosmos/group/v1/query");
const types_4 = require("./types/cosmos/group/v1/types");
const query_11 = require("./types/cosmos/group/v1/query");
const tx_16 = require("./types/cosmos/group/v1/tx");
const tx_17 = require("./types/cosmos/group/v1/tx");
const tx_18 = require("./types/cosmos/group/v1/tx");
const tx_19 = require("./types/cosmos/group/v1/tx");
const events_3 = require("./types/cosmos/group/v1/events");
const query_12 = require("./types/cosmos/group/v1/query");
const query_13 = require("./types/cosmos/group/v1/query");
const query_14 = require("./types/cosmos/group/v1/query");
const tx_20 = require("./types/cosmos/group/v1/tx");
const types_5 = require("./types/cosmos/group/v1/types");
const events_4 = require("./types/cosmos/group/v1/events");
const query_15 = require("./types/cosmos/group/v1/query");
const types_6 = require("./types/cosmos/group/v1/types");
const events_5 = require("./types/cosmos/group/v1/events");
const query_16 = require("./types/cosmos/group/v1/query");
const query_17 = require("./types/cosmos/group/v1/query");
const query_18 = require("./types/cosmos/group/v1/query");
const types_7 = require("./types/cosmos/group/v1/types");
const tx_21 = require("./types/cosmos/group/v1/tx");
const tx_22 = require("./types/cosmos/group/v1/tx");
const events_6 = require("./types/cosmos/group/v1/events");
const query_19 = require("./types/cosmos/group/v1/query");
const query_20 = require("./types/cosmos/group/v1/query");
const query_21 = require("./types/cosmos/group/v1/query");
const query_22 = require("./types/cosmos/group/v1/query");
const tx_23 = require("./types/cosmos/group/v1/tx");
const tx_24 = require("./types/cosmos/group/v1/tx");
const events_7 = require("./types/cosmos/group/v1/events");
const query_23 = require("./types/cosmos/group/v1/query");
const query_24 = require("./types/cosmos/group/v1/query");
const query_25 = require("./types/cosmos/group/v1/query");
const types_8 = require("./types/cosmos/group/v1/types");
const query_26 = require("./types/cosmos/group/v1/query");
const types_9 = require("./types/cosmos/group/v1/types");
const tx_25 = require("./types/cosmos/group/v1/tx");
const types_10 = require("./types/cosmos/group/v1/types");
const events_8 = require("./types/cosmos/group/v1/events");
const events_9 = require("./types/cosmos/group/v1/events");
const query_27 = require("./types/cosmos/group/v1/query");
const query_28 = require("./types/cosmos/group/v1/query");
const types_11 = require("./types/cosmos/group/v1/types");
const tx_26 = require("./types/cosmos/group/v1/tx");
const tx_27 = require("./types/cosmos/group/v1/tx");
const tx_28 = require("./types/cosmos/group/v1/tx");
const events_10 = require("./types/cosmos/group/v1/events");
const msgTypes = [
    ["/cosmos.group.v1.MsgSubmitProposalResponse", tx_1.MsgSubmitProposalResponse],
    ["/cosmos.group.v1.MsgVote", tx_2.MsgVote],
    ["/cosmos.group.v1.GroupPolicyInfo", types_1.GroupPolicyInfo],
    ["/cosmos.group.v1.PercentageDecisionPolicy", types_2.PercentageDecisionPolicy],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", tx_3.MsgUpdateGroupPolicyDecisionPolicy],
    ["/cosmos.group.v1.MsgExec", tx_4.MsgExec],
    ["/cosmos.group.v1.QueryVotesByVoterResponse", query_1.QueryVotesByVoterResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminResponse", query_2.QueryGroupPoliciesByAdminResponse],
    ["/cosmos.group.v1.QueryGroupsByMemberResponse", query_3.QueryGroupsByMemberResponse],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicyResponse", tx_5.MsgCreateGroupWithPolicyResponse],
    ["/cosmos.group.v1.EventExec", events_1.EventExec],
    ["/cosmos.group.v1.QueryTallyResultResponse", query_4.QueryTallyResultResponse],
    ["/cosmos.group.v1.GroupInfo", types_3.GroupInfo],
    ["/cosmos.group.v1.MsgUpdateGroupMembers", tx_6.MsgUpdateGroupMembers],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse", tx_7.MsgUpdateGroupPolicyDecisionPolicyResponse],
    ["/cosmos.group.v1.MsgWithdrawProposal", tx_8.MsgWithdrawProposal],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupRequest", query_5.QueryGroupPoliciesByGroupRequest],
    ["/cosmos.group.v1.QueryTallyResultRequest", query_6.QueryTallyResultRequest],
    ["/cosmos.group.v1.MsgWithdrawProposalResponse", tx_9.MsgWithdrawProposalResponse],
    ["/cosmos.group.v1.EventCreateGroupPolicy", events_2.EventCreateGroupPolicy],
    ["/cosmos.group.v1.QueryGroupMembersRequest", query_7.QueryGroupMembersRequest],
    ["/cosmos.group.v1.QueryGroupsRequest", query_8.QueryGroupsRequest],
    ["/cosmos.group.v1.MsgCreateGroup", tx_10.MsgCreateGroup],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicy", tx_11.MsgCreateGroupWithPolicy],
    ["/cosmos.group.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.group.v1.MsgUpdateGroupMembersResponse", tx_12.MsgUpdateGroupMembersResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", tx_13.MsgUpdateGroupPolicyAdmin],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyRequest", query_9.QueryProposalsByGroupPolicyRequest],
    ["/cosmos.group.v1.MsgSubmitProposal", tx_14.MsgSubmitProposal],
    ["/cosmos.group.v1.MsgLeaveGroup", tx_15.MsgLeaveGroup],
    ["/cosmos.group.v1.QueryGroupPolicyInfoResponse", query_10.QueryGroupPolicyInfoResponse],
    ["/cosmos.group.v1.Proposal", types_4.Proposal],
    ["/cosmos.group.v1.QueryGroupInfoResponse", query_11.QueryGroupInfoResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMetadata", tx_16.MsgUpdateGroupMetadata],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse", tx_17.MsgUpdateGroupPolicyAdminResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse", tx_18.MsgUpdateGroupPolicyMetadataResponse],
    ["/cosmos.group.v1.MsgVoteResponse", tx_19.MsgVoteResponse],
    ["/cosmos.group.v1.EventWithdrawProposal", events_3.EventWithdrawProposal],
    ["/cosmos.group.v1.QueryGroupsByAdminResponse", query_12.QueryGroupsByAdminResponse],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyResponse", query_13.QueryProposalsByGroupPolicyResponse],
    ["/cosmos.group.v1.QueryVoteByProposalVoterRequest", query_14.QueryVoteByProposalVoterRequest],
    ["/cosmos.group.v1.MsgUpdateGroupMetadataResponse", tx_20.MsgUpdateGroupMetadataResponse],
    ["/cosmos.group.v1.Member", types_5.Member],
    ["/cosmos.group.v1.EventCreateGroup", events_4.EventCreateGroup],
    ["/cosmos.group.v1.QueryGroupsByMemberRequest", query_15.QueryGroupsByMemberRequest],
    ["/cosmos.group.v1.Vote", types_6.Vote],
    ["/cosmos.group.v1.EventLeaveGroup", events_5.EventLeaveGroup],
    ["/cosmos.group.v1.QueryGroupsByAdminRequest", query_16.QueryGroupsByAdminRequest],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupResponse", query_17.QueryGroupPoliciesByGroupResponse],
    ["/cosmos.group.v1.QueryVoteByProposalVoterResponse", query_18.QueryVoteByProposalVoterResponse],
    ["/cosmos.group.v1.GroupMember", types_7.GroupMember],
    ["/cosmos.group.v1.MsgCreateGroupResponse", tx_21.MsgCreateGroupResponse],
    ["/cosmos.group.v1.MsgUpdateGroupAdminResponse", tx_22.MsgUpdateGroupAdminResponse],
    ["/cosmos.group.v1.EventSubmitProposal", events_6.EventSubmitProposal],
    ["/cosmos.group.v1.QueryProposalResponse", query_19.QueryProposalResponse],
    ["/cosmos.group.v1.QueryVotesByProposalRequest", query_20.QueryVotesByProposalRequest],
    ["/cosmos.group.v1.QueryVotesByVoterRequest", query_21.QueryVotesByVoterRequest],
    ["/cosmos.group.v1.QueryGroupsResponse", query_22.QueryGroupsResponse],
    ["/cosmos.group.v1.MsgCreateGroupPolicyResponse", tx_23.MsgCreateGroupPolicyResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", tx_24.MsgUpdateGroupPolicyMetadata],
    ["/cosmos.group.v1.EventProposalPruned", events_7.EventProposalPruned],
    ["/cosmos.group.v1.QueryGroupMembersResponse", query_23.QueryGroupMembersResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminRequest", query_24.QueryGroupPoliciesByAdminRequest],
    ["/cosmos.group.v1.QueryProposalRequest", query_25.QueryProposalRequest],
    ["/cosmos.group.v1.MemberRequest", types_8.MemberRequest],
    ["/cosmos.group.v1.QueryGroupPolicyInfoRequest", query_26.QueryGroupPolicyInfoRequest],
    ["/cosmos.group.v1.ThresholdDecisionPolicy", types_9.ThresholdDecisionPolicy],
    ["/cosmos.group.v1.MsgCreateGroupPolicy", tx_25.MsgCreateGroupPolicy],
    ["/cosmos.group.v1.DecisionPolicyWindows", types_10.DecisionPolicyWindows],
    ["/cosmos.group.v1.EventUpdateGroupPolicy", events_8.EventUpdateGroupPolicy],
    ["/cosmos.group.v1.EventVote", events_9.EventVote],
    ["/cosmos.group.v1.QueryGroupInfoRequest", query_27.QueryGroupInfoRequest],
    ["/cosmos.group.v1.QueryVotesByProposalResponse", query_28.QueryVotesByProposalResponse],
    ["/cosmos.group.v1.TallyResult", types_11.TallyResult],
    ["/cosmos.group.v1.MsgUpdateGroupAdmin", tx_26.MsgUpdateGroupAdmin],
    ["/cosmos.group.v1.MsgExecResponse", tx_27.MsgExecResponse],
    ["/cosmos.group.v1.MsgLeaveGroupResponse", tx_28.MsgLeaveGroupResponse],
    ["/cosmos.group.v1.EventUpdateGroup", events_10.EventUpdateGroup],
];
exports.msgTypes = msgTypes;
