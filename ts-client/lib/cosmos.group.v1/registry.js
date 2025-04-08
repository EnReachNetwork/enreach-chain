"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/group/v1/query");
const types_1 = require("./types/cosmos/group/v1/types");
const types_2 = require("./types/cosmos/group/v1/types");
const tx_1 = require("./types/cosmos/group/v1/tx");
const query_2 = require("./types/cosmos/group/v1/query");
const query_3 = require("./types/cosmos/group/v1/query");
const query_4 = require("./types/cosmos/group/v1/query");
const events_1 = require("./types/cosmos/group/v1/events");
const types_3 = require("./types/cosmos/group/v1/types");
const types_4 = require("./types/cosmos/group/v1/types");
const types_5 = require("./types/cosmos/group/v1/types");
const tx_2 = require("./types/cosmos/group/v1/tx");
const types_6 = require("./types/cosmos/group/v1/types");
const tx_3 = require("./types/cosmos/group/v1/tx");
const tx_4 = require("./types/cosmos/group/v1/tx");
const events_2 = require("./types/cosmos/group/v1/events");
const events_3 = require("./types/cosmos/group/v1/events");
const query_5 = require("./types/cosmos/group/v1/query");
const query_6 = require("./types/cosmos/group/v1/query");
const query_7 = require("./types/cosmos/group/v1/query");
const tx_5 = require("./types/cosmos/group/v1/tx");
const tx_6 = require("./types/cosmos/group/v1/tx");
const tx_7 = require("./types/cosmos/group/v1/tx");
const tx_8 = require("./types/cosmos/group/v1/tx");
const query_8 = require("./types/cosmos/group/v1/query");
const query_9 = require("./types/cosmos/group/v1/query");
const events_4 = require("./types/cosmos/group/v1/events");
const events_5 = require("./types/cosmos/group/v1/events");
const types_7 = require("./types/cosmos/group/v1/types");
const types_8 = require("./types/cosmos/group/v1/types");
const tx_9 = require("./types/cosmos/group/v1/tx");
const tx_10 = require("./types/cosmos/group/v1/tx");
const query_10 = require("./types/cosmos/group/v1/query");
const tx_11 = require("./types/cosmos/group/v1/tx");
const query_11 = require("./types/cosmos/group/v1/query");
const query_12 = require("./types/cosmos/group/v1/query");
const query_13 = require("./types/cosmos/group/v1/query");
const tx_12 = require("./types/cosmos/group/v1/tx");
const query_14 = require("./types/cosmos/group/v1/query");
const query_15 = require("./types/cosmos/group/v1/query");
const tx_13 = require("./types/cosmos/group/v1/tx");
const tx_14 = require("./types/cosmos/group/v1/tx");
const query_16 = require("./types/cosmos/group/v1/query");
const tx_15 = require("./types/cosmos/group/v1/tx");
const events_6 = require("./types/cosmos/group/v1/events");
const query_17 = require("./types/cosmos/group/v1/query");
const query_18 = require("./types/cosmos/group/v1/query");
const events_7 = require("./types/cosmos/group/v1/events");
const query_19 = require("./types/cosmos/group/v1/query");
const tx_16 = require("./types/cosmos/group/v1/tx");
const tx_17 = require("./types/cosmos/group/v1/tx");
const tx_18 = require("./types/cosmos/group/v1/tx");
const tx_19 = require("./types/cosmos/group/v1/tx");
const query_20 = require("./types/cosmos/group/v1/query");
const events_8 = require("./types/cosmos/group/v1/events");
const events_9 = require("./types/cosmos/group/v1/events");
const tx_20 = require("./types/cosmos/group/v1/tx");
const query_21 = require("./types/cosmos/group/v1/query");
const tx_21 = require("./types/cosmos/group/v1/tx");
const tx_22 = require("./types/cosmos/group/v1/tx");
const query_22 = require("./types/cosmos/group/v1/query");
const types_9 = require("./types/cosmos/group/v1/types");
const query_23 = require("./types/cosmos/group/v1/query");
const query_24 = require("./types/cosmos/group/v1/query");
const events_10 = require("./types/cosmos/group/v1/events");
const tx_23 = require("./types/cosmos/group/v1/tx");
const tx_24 = require("./types/cosmos/group/v1/tx");
const tx_25 = require("./types/cosmos/group/v1/tx");
const tx_26 = require("./types/cosmos/group/v1/tx");
const query_25 = require("./types/cosmos/group/v1/query");
const tx_27 = require("./types/cosmos/group/v1/tx");
const query_26 = require("./types/cosmos/group/v1/query");
const query_27 = require("./types/cosmos/group/v1/query");
const types_10 = require("./types/cosmos/group/v1/types");
const types_11 = require("./types/cosmos/group/v1/types");
const genesis_1 = require("./types/cosmos/group/v1/genesis");
const tx_28 = require("./types/cosmos/group/v1/tx");
const query_28 = require("./types/cosmos/group/v1/query");
const msgTypes = [
    ["/cosmos.group.v1.QueryGroupMembersResponse", query_1.QueryGroupMembersResponse],
    ["/cosmos.group.v1.GroupPolicyInfo", types_1.GroupPolicyInfo],
    ["/cosmos.group.v1.TallyResult", types_2.TallyResult],
    ["/cosmos.group.v1.MsgCreateGroupPolicy", tx_1.MsgCreateGroupPolicy],
    ["/cosmos.group.v1.QueryGroupMembersRequest", query_2.QueryGroupMembersRequest],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupResponse", query_3.QueryGroupPoliciesByGroupResponse],
    ["/cosmos.group.v1.QueryTallyResultResponse", query_4.QueryTallyResultResponse],
    ["/cosmos.group.v1.EventUpdateGroup", events_1.EventUpdateGroup],
    ["/cosmos.group.v1.Member", types_3.Member],
    ["/cosmos.group.v1.MemberRequest", types_4.MemberRequest],
    ["/cosmos.group.v1.Vote", types_5.Vote],
    ["/cosmos.group.v1.MsgCreateGroup", tx_2.MsgCreateGroup],
    ["/cosmos.group.v1.Proposal", types_6.Proposal],
    ["/cosmos.group.v1.MsgLeaveGroup", tx_3.MsgLeaveGroup],
    ["/cosmos.group.v1.MsgVoteResponse", tx_4.MsgVoteResponse],
    ["/cosmos.group.v1.EventSubmitProposal", events_2.EventSubmitProposal],
    ["/cosmos.group.v1.EventProposalPruned", events_3.EventProposalPruned],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyRequest", query_5.QueryProposalsByGroupPolicyRequest],
    ["/cosmos.group.v1.QueryVotesByProposalRequest", query_6.QueryVotesByProposalRequest],
    ["/cosmos.group.v1.QueryGroupsResponse", query_7.QueryGroupsResponse],
    ["/cosmos.group.v1.MsgUpdateGroupAdminResponse", tx_5.MsgUpdateGroupAdminResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse", tx_6.MsgUpdateGroupPolicyAdminResponse],
    ["/cosmos.group.v1.MsgExecResponse", tx_7.MsgExecResponse],
    ["/cosmos.group.v1.MsgLeaveGroupResponse", tx_8.MsgLeaveGroupResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminRequest", query_8.QueryGroupPoliciesByAdminRequest],
    ["/cosmos.group.v1.QueryGroupsByMemberRequest", query_9.QueryGroupsByMemberRequest],
    ["/cosmos.group.v1.EventCreateGroup", events_4.EventCreateGroup],
    ["/cosmos.group.v1.EventCreateGroupPolicy", events_5.EventCreateGroupPolicy],
    ["/cosmos.group.v1.GroupInfo", types_7.GroupInfo],
    ["/cosmos.group.v1.GroupMember", types_8.GroupMember],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicyResponse", tx_9.MsgCreateGroupWithPolicyResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse", tx_10.MsgUpdateGroupPolicyMetadataResponse],
    ["/cosmos.group.v1.QueryProposalRequest", query_10.QueryProposalRequest],
    ["/cosmos.group.v1.MsgWithdrawProposalResponse", tx_11.MsgWithdrawProposalResponse],
    ["/cosmos.group.v1.QueryVotesByVoterRequest", query_11.QueryVotesByVoterRequest],
    ["/cosmos.group.v1.QueryGroupsByMemberResponse", query_12.QueryGroupsByMemberResponse],
    ["/cosmos.group.v1.QueryTallyResultRequest", query_13.QueryTallyResultRequest],
    ["/cosmos.group.v1.MsgExec", tx_12.MsgExec],
    ["/cosmos.group.v1.QueryGroupInfoResponse", query_14.QueryGroupInfoResponse],
    ["/cosmos.group.v1.QueryVotesByProposalResponse", query_15.QueryVotesByProposalResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMetadataResponse", tx_13.MsgUpdateGroupMetadataResponse],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicy", tx_14.MsgCreateGroupWithPolicy],
    ["/cosmos.group.v1.QueryGroupsByAdminRequest", query_16.QueryGroupsByAdminRequest],
    ["/cosmos.group.v1.MsgUpdateGroupMembers", tx_15.MsgUpdateGroupMembers],
    ["/cosmos.group.v1.EventLeaveGroup", events_6.EventLeaveGroup],
    ["/cosmos.group.v1.QueryProposalResponse", query_17.QueryProposalResponse],
    ["/cosmos.group.v1.QueryVoteByProposalVoterResponse", query_18.QueryVoteByProposalVoterResponse],
    ["/cosmos.group.v1.EventUpdateGroupPolicy", events_7.EventUpdateGroupPolicy],
    ["/cosmos.group.v1.QueryGroupsByAdminResponse", query_19.QueryGroupsByAdminResponse],
    ["/cosmos.group.v1.MsgCreateGroupResponse", tx_16.MsgCreateGroupResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMetadata", tx_17.MsgUpdateGroupMetadata],
    ["/cosmos.group.v1.MsgWithdrawProposal", tx_18.MsgWithdrawProposal],
    ["/cosmos.group.v1.MsgVote", tx_19.MsgVote],
    ["/cosmos.group.v1.QueryVotesByVoterResponse", query_20.QueryVotesByVoterResponse],
    ["/cosmos.group.v1.EventWithdrawProposal", events_8.EventWithdrawProposal],
    ["/cosmos.group.v1.EventExec", events_9.EventExec],
    ["/cosmos.group.v1.MsgCreateGroupPolicyResponse", tx_20.MsgCreateGroupPolicyResponse],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyResponse", query_21.QueryProposalsByGroupPolicyResponse],
    ["/cosmos.group.v1.MsgUpdateGroupAdmin", tx_21.MsgUpdateGroupAdmin],
    ["/cosmos.group.v1.MsgSubmitProposal", tx_22.MsgSubmitProposal],
    ["/cosmos.group.v1.QueryGroupsRequest", query_22.QueryGroupsRequest],
    ["/cosmos.group.v1.PercentageDecisionPolicy", types_9.PercentageDecisionPolicy],
    ["/cosmos.group.v1.QueryVoteByProposalVoterRequest", query_23.QueryVoteByProposalVoterRequest],
    ["/cosmos.group.v1.QueryGroupPolicyInfoResponse", query_24.QueryGroupPolicyInfoResponse],
    ["/cosmos.group.v1.EventVote", events_10.EventVote],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", tx_23.MsgUpdateGroupPolicyAdmin],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", tx_24.MsgUpdateGroupPolicyDecisionPolicy],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse", tx_25.MsgUpdateGroupPolicyDecisionPolicyResponse],
    ["/cosmos.group.v1.MsgSubmitProposalResponse", tx_26.MsgSubmitProposalResponse],
    ["/cosmos.group.v1.QueryGroupInfoRequest", query_25.QueryGroupInfoRequest],
    ["/cosmos.group.v1.MsgUpdateGroupMembersResponse", tx_27.MsgUpdateGroupMembersResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupRequest", query_26.QueryGroupPoliciesByGroupRequest],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminResponse", query_27.QueryGroupPoliciesByAdminResponse],
    ["/cosmos.group.v1.ThresholdDecisionPolicy", types_10.ThresholdDecisionPolicy],
    ["/cosmos.group.v1.DecisionPolicyWindows", types_11.DecisionPolicyWindows],
    ["/cosmos.group.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", tx_28.MsgUpdateGroupPolicyMetadata],
    ["/cosmos.group.v1.QueryGroupPolicyInfoRequest", query_28.QueryGroupPolicyInfoRequest],
];
exports.msgTypes = msgTypes;
