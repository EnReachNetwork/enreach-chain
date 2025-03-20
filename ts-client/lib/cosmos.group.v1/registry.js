"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/group/v1/query");
const tx_1 = require("./types/cosmos/group/v1/tx");
const events_1 = require("./types/cosmos/group/v1/events");
const tx_2 = require("./types/cosmos/group/v1/tx");
const tx_3 = require("./types/cosmos/group/v1/tx");
const tx_4 = require("./types/cosmos/group/v1/tx");
const query_2 = require("./types/cosmos/group/v1/query");
const query_3 = require("./types/cosmos/group/v1/query");
const query_4 = require("./types/cosmos/group/v1/query");
const tx_5 = require("./types/cosmos/group/v1/tx");
const tx_6 = require("./types/cosmos/group/v1/tx");
const types_1 = require("./types/cosmos/group/v1/types");
const query_5 = require("./types/cosmos/group/v1/query");
const tx_7 = require("./types/cosmos/group/v1/tx");
const events_2 = require("./types/cosmos/group/v1/events");
const query_6 = require("./types/cosmos/group/v1/query");
const tx_8 = require("./types/cosmos/group/v1/tx");
const events_3 = require("./types/cosmos/group/v1/events");
const query_7 = require("./types/cosmos/group/v1/query");
const query_8 = require("./types/cosmos/group/v1/query");
const types_2 = require("./types/cosmos/group/v1/types");
const genesis_1 = require("./types/cosmos/group/v1/genesis");
const query_9 = require("./types/cosmos/group/v1/query");
const query_10 = require("./types/cosmos/group/v1/query");
const tx_9 = require("./types/cosmos/group/v1/tx");
const tx_10 = require("./types/cosmos/group/v1/tx");
const events_4 = require("./types/cosmos/group/v1/events");
const tx_11 = require("./types/cosmos/group/v1/tx");
const types_3 = require("./types/cosmos/group/v1/types");
const query_11 = require("./types/cosmos/group/v1/query");
const query_12 = require("./types/cosmos/group/v1/query");
const tx_12 = require("./types/cosmos/group/v1/tx");
const tx_13 = require("./types/cosmos/group/v1/tx");
const tx_14 = require("./types/cosmos/group/v1/tx");
const tx_15 = require("./types/cosmos/group/v1/tx");
const events_5 = require("./types/cosmos/group/v1/events");
const events_6 = require("./types/cosmos/group/v1/events");
const types_4 = require("./types/cosmos/group/v1/types");
const query_13 = require("./types/cosmos/group/v1/query");
const query_14 = require("./types/cosmos/group/v1/query");
const tx_16 = require("./types/cosmos/group/v1/tx");
const tx_17 = require("./types/cosmos/group/v1/tx");
const tx_18 = require("./types/cosmos/group/v1/tx");
const query_15 = require("./types/cosmos/group/v1/query");
const query_16 = require("./types/cosmos/group/v1/query");
const query_17 = require("./types/cosmos/group/v1/query");
const query_18 = require("./types/cosmos/group/v1/query");
const types_5 = require("./types/cosmos/group/v1/types");
const query_19 = require("./types/cosmos/group/v1/query");
const query_20 = require("./types/cosmos/group/v1/query");
const query_21 = require("./types/cosmos/group/v1/query");
const query_22 = require("./types/cosmos/group/v1/query");
const tx_19 = require("./types/cosmos/group/v1/tx");
const types_6 = require("./types/cosmos/group/v1/types");
const types_7 = require("./types/cosmos/group/v1/types");
const types_8 = require("./types/cosmos/group/v1/types");
const types_9 = require("./types/cosmos/group/v1/types");
const query_23 = require("./types/cosmos/group/v1/query");
const query_24 = require("./types/cosmos/group/v1/query");
const tx_20 = require("./types/cosmos/group/v1/tx");
const tx_21 = require("./types/cosmos/group/v1/tx");
const events_7 = require("./types/cosmos/group/v1/events");
const query_25 = require("./types/cosmos/group/v1/query");
const query_26 = require("./types/cosmos/group/v1/query");
const tx_22 = require("./types/cosmos/group/v1/tx");
const events_8 = require("./types/cosmos/group/v1/events");
const types_10 = require("./types/cosmos/group/v1/types");
const types_11 = require("./types/cosmos/group/v1/types");
const query_27 = require("./types/cosmos/group/v1/query");
const tx_23 = require("./types/cosmos/group/v1/tx");
const tx_24 = require("./types/cosmos/group/v1/tx");
const tx_25 = require("./types/cosmos/group/v1/tx");
const events_9 = require("./types/cosmos/group/v1/events");
const events_10 = require("./types/cosmos/group/v1/events");
const query_28 = require("./types/cosmos/group/v1/query");
const tx_26 = require("./types/cosmos/group/v1/tx");
const tx_27 = require("./types/cosmos/group/v1/tx");
const tx_28 = require("./types/cosmos/group/v1/tx");
const msgTypes = [
    ["/cosmos.group.v1.QueryGroupsByMemberRequest", query_1.QueryGroupsByMemberRequest],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", tx_1.MsgUpdateGroupPolicyDecisionPolicy],
    ["/cosmos.group.v1.EventExec", events_1.EventExec],
    ["/cosmos.group.v1.MsgCreateGroup", tx_2.MsgCreateGroup],
    ["/cosmos.group.v1.MsgUpdateGroupMembersResponse", tx_3.MsgUpdateGroupMembersResponse],
    ["/cosmos.group.v1.MsgWithdrawProposal", tx_4.MsgWithdrawProposal],
    ["/cosmos.group.v1.QueryGroupInfoResponse", query_2.QueryGroupInfoResponse],
    ["/cosmos.group.v1.QueryVoteByProposalVoterRequest", query_3.QueryVoteByProposalVoterRequest],
    ["/cosmos.group.v1.QueryVotesByProposalResponse", query_4.QueryVotesByProposalResponse],
    ["/cosmos.group.v1.MsgUpdateGroupAdmin", tx_5.MsgUpdateGroupAdmin],
    ["/cosmos.group.v1.MsgVoteResponse", tx_6.MsgVoteResponse],
    ["/cosmos.group.v1.DecisionPolicyWindows", types_1.DecisionPolicyWindows],
    ["/cosmos.group.v1.QueryProposalRequest", query_5.QueryProposalRequest],
    ["/cosmos.group.v1.MsgWithdrawProposalResponse", tx_7.MsgWithdrawProposalResponse],
    ["/cosmos.group.v1.EventVote", events_2.EventVote],
    ["/cosmos.group.v1.QueryGroupInfoRequest", query_6.QueryGroupInfoRequest],
    ["/cosmos.group.v1.MsgLeaveGroupResponse", tx_8.MsgLeaveGroupResponse],
    ["/cosmos.group.v1.EventWithdrawProposal", events_3.EventWithdrawProposal],
    ["/cosmos.group.v1.QueryGroupsResponse", query_7.QueryGroupsResponse],
    ["/cosmos.group.v1.QueryGroupsByAdminResponse", query_8.QueryGroupsByAdminResponse],
    ["/cosmos.group.v1.MemberRequest", types_2.MemberRequest],
    ["/cosmos.group.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.group.v1.QueryVotesByProposalRequest", query_9.QueryVotesByProposalRequest],
    ["/cosmos.group.v1.QueryTallyResultResponse", query_10.QueryTallyResultResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMetadata", tx_9.MsgUpdateGroupMetadata],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse", tx_10.MsgUpdateGroupPolicyAdminResponse],
    ["/cosmos.group.v1.EventCreateGroup", events_4.EventCreateGroup],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse", tx_11.MsgUpdateGroupPolicyMetadataResponse],
    ["/cosmos.group.v1.Member", types_3.Member],
    ["/cosmos.group.v1.QueryGroupPolicyInfoResponse", query_11.QueryGroupPolicyInfoResponse],
    ["/cosmos.group.v1.QueryGroupMembersResponse", query_12.QueryGroupMembersResponse],
    ["/cosmos.group.v1.MsgUpdateGroupAdminResponse", tx_12.MsgUpdateGroupAdminResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", tx_13.MsgUpdateGroupPolicyAdmin],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse", tx_14.MsgUpdateGroupPolicyDecisionPolicyResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", tx_15.MsgUpdateGroupPolicyMetadata],
    ["/cosmos.group.v1.EventSubmitProposal", events_5.EventSubmitProposal],
    ["/cosmos.group.v1.EventProposalPruned", events_6.EventProposalPruned],
    ["/cosmos.group.v1.ThresholdDecisionPolicy", types_4.ThresholdDecisionPolicy],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupRequest", query_13.QueryGroupPoliciesByGroupRequest],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyRequest", query_14.QueryProposalsByGroupPolicyRequest],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicyResponse", tx_16.MsgCreateGroupWithPolicyResponse],
    ["/cosmos.group.v1.MsgExec", tx_17.MsgExec],
    ["/cosmos.group.v1.MsgLeaveGroup", tx_18.MsgLeaveGroup],
    ["/cosmos.group.v1.QueryGroupsByAdminRequest", query_15.QueryGroupsByAdminRequest],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminRequest", query_16.QueryGroupPoliciesByAdminRequest],
    ["/cosmos.group.v1.QueryVotesByVoterResponse", query_17.QueryVotesByVoterResponse],
    ["/cosmos.group.v1.QueryGroupsRequest", query_18.QueryGroupsRequest],
    ["/cosmos.group.v1.GroupMember", types_5.GroupMember],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupResponse", query_19.QueryGroupPoliciesByGroupResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminResponse", query_20.QueryGroupPoliciesByAdminResponse],
    ["/cosmos.group.v1.QueryProposalResponse", query_21.QueryProposalResponse],
    ["/cosmos.group.v1.QueryVoteByProposalVoterResponse", query_22.QueryVoteByProposalVoterResponse],
    ["/cosmos.group.v1.MsgCreateGroupPolicyResponse", tx_19.MsgCreateGroupPolicyResponse],
    ["/cosmos.group.v1.Vote", types_6.Vote],
    ["/cosmos.group.v1.TallyResult", types_7.TallyResult],
    ["/cosmos.group.v1.GroupInfo", types_8.GroupInfo],
    ["/cosmos.group.v1.Proposal", types_9.Proposal],
    ["/cosmos.group.v1.QueryGroupsByMemberResponse", query_23.QueryGroupsByMemberResponse],
    ["/cosmos.group.v1.QueryTallyResultRequest", query_24.QueryTallyResultRequest],
    ["/cosmos.group.v1.MsgUpdateGroupMembers", tx_20.MsgUpdateGroupMembers],
    ["/cosmos.group.v1.MsgCreateGroupPolicy", tx_21.MsgCreateGroupPolicy],
    ["/cosmos.group.v1.EventLeaveGroup", events_7.EventLeaveGroup],
    ["/cosmos.group.v1.QueryGroupPolicyInfoRequest", query_25.QueryGroupPolicyInfoRequest],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyResponse", query_26.QueryProposalsByGroupPolicyResponse],
    ["/cosmos.group.v1.MsgCreateGroupResponse", tx_22.MsgCreateGroupResponse],
    ["/cosmos.group.v1.EventUpdateGroupPolicy", events_8.EventUpdateGroupPolicy],
    ["/cosmos.group.v1.PercentageDecisionPolicy", types_10.PercentageDecisionPolicy],
    ["/cosmos.group.v1.GroupPolicyInfo", types_11.GroupPolicyInfo],
    ["/cosmos.group.v1.QueryGroupMembersRequest", query_27.QueryGroupMembersRequest],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicy", tx_23.MsgCreateGroupWithPolicy],
    ["/cosmos.group.v1.MsgUpdateGroupMetadataResponse", tx_24.MsgUpdateGroupMetadataResponse],
    ["/cosmos.group.v1.MsgVote", tx_25.MsgVote],
    ["/cosmos.group.v1.EventUpdateGroup", events_9.EventUpdateGroup],
    ["/cosmos.group.v1.EventCreateGroupPolicy", events_10.EventCreateGroupPolicy],
    ["/cosmos.group.v1.QueryVotesByVoterRequest", query_28.QueryVotesByVoterRequest],
    ["/cosmos.group.v1.MsgSubmitProposal", tx_26.MsgSubmitProposal],
    ["/cosmos.group.v1.MsgSubmitProposalResponse", tx_27.MsgSubmitProposalResponse],
    ["/cosmos.group.v1.MsgExecResponse", tx_28.MsgExecResponse],
];
exports.msgTypes = msgTypes;
