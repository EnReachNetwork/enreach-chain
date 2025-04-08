"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const events_1 = require("./types/cosmos/group/v1/events");
const query_1 = require("./types/cosmos/group/v1/query");
const query_2 = require("./types/cosmos/group/v1/query");
const tx_1 = require("./types/cosmos/group/v1/tx");
const tx_2 = require("./types/cosmos/group/v1/tx");
const genesis_1 = require("./types/cosmos/group/v1/genesis");
const types_1 = require("./types/cosmos/group/v1/types");
const events_2 = require("./types/cosmos/group/v1/events");
const query_3 = require("./types/cosmos/group/v1/query");
const query_4 = require("./types/cosmos/group/v1/query");
const query_5 = require("./types/cosmos/group/v1/query");
const tx_3 = require("./types/cosmos/group/v1/tx");
const tx_4 = require("./types/cosmos/group/v1/tx");
const tx_5 = require("./types/cosmos/group/v1/tx");
const tx_6 = require("./types/cosmos/group/v1/tx");
const tx_7 = require("./types/cosmos/group/v1/tx");
const tx_8 = require("./types/cosmos/group/v1/tx");
const query_6 = require("./types/cosmos/group/v1/query");
const events_3 = require("./types/cosmos/group/v1/events");
const tx_9 = require("./types/cosmos/group/v1/tx");
const tx_10 = require("./types/cosmos/group/v1/tx");
const types_2 = require("./types/cosmos/group/v1/types");
const tx_11 = require("./types/cosmos/group/v1/tx");
const query_7 = require("./types/cosmos/group/v1/query");
const query_8 = require("./types/cosmos/group/v1/query");
const tx_12 = require("./types/cosmos/group/v1/tx");
const events_4 = require("./types/cosmos/group/v1/events");
const types_3 = require("./types/cosmos/group/v1/types");
const query_9 = require("./types/cosmos/group/v1/query");
const query_10 = require("./types/cosmos/group/v1/query");
const tx_13 = require("./types/cosmos/group/v1/tx");
const query_11 = require("./types/cosmos/group/v1/query");
const query_12 = require("./types/cosmos/group/v1/query");
const query_13 = require("./types/cosmos/group/v1/query");
const query_14 = require("./types/cosmos/group/v1/query");
const tx_14 = require("./types/cosmos/group/v1/tx");
const tx_15 = require("./types/cosmos/group/v1/tx");
const events_5 = require("./types/cosmos/group/v1/events");
const tx_16 = require("./types/cosmos/group/v1/tx");
const types_4 = require("./types/cosmos/group/v1/types");
const query_15 = require("./types/cosmos/group/v1/query");
const query_16 = require("./types/cosmos/group/v1/query");
const query_17 = require("./types/cosmos/group/v1/query");
const query_18 = require("./types/cosmos/group/v1/query");
const tx_17 = require("./types/cosmos/group/v1/tx");
const events_6 = require("./types/cosmos/group/v1/events");
const events_7 = require("./types/cosmos/group/v1/events");
const events_8 = require("./types/cosmos/group/v1/events");
const tx_18 = require("./types/cosmos/group/v1/tx");
const query_19 = require("./types/cosmos/group/v1/query");
const types_5 = require("./types/cosmos/group/v1/types");
const events_9 = require("./types/cosmos/group/v1/events");
const tx_19 = require("./types/cosmos/group/v1/tx");
const tx_20 = require("./types/cosmos/group/v1/tx");
const tx_21 = require("./types/cosmos/group/v1/tx");
const tx_22 = require("./types/cosmos/group/v1/tx");
const types_6 = require("./types/cosmos/group/v1/types");
const types_7 = require("./types/cosmos/group/v1/types");
const events_10 = require("./types/cosmos/group/v1/events");
const query_20 = require("./types/cosmos/group/v1/query");
const query_21 = require("./types/cosmos/group/v1/query");
const tx_23 = require("./types/cosmos/group/v1/tx");
const tx_24 = require("./types/cosmos/group/v1/tx");
const types_8 = require("./types/cosmos/group/v1/types");
const types_9 = require("./types/cosmos/group/v1/types");
const query_22 = require("./types/cosmos/group/v1/query");
const query_23 = require("./types/cosmos/group/v1/query");
const query_24 = require("./types/cosmos/group/v1/query");
const query_25 = require("./types/cosmos/group/v1/query");
const types_10 = require("./types/cosmos/group/v1/types");
const query_26 = require("./types/cosmos/group/v1/query");
const tx_25 = require("./types/cosmos/group/v1/tx");
const tx_26 = require("./types/cosmos/group/v1/tx");
const tx_27 = require("./types/cosmos/group/v1/tx");
const tx_28 = require("./types/cosmos/group/v1/tx");
const query_27 = require("./types/cosmos/group/v1/query");
const query_28 = require("./types/cosmos/group/v1/query");
const types_11 = require("./types/cosmos/group/v1/types");
const msgTypes = [
    ["/cosmos.group.v1.EventUpdateGroup", events_1.EventUpdateGroup],
    ["/cosmos.group.v1.QueryProposalRequest", query_1.QueryProposalRequest],
    ["/cosmos.group.v1.QueryTallyResultRequest", query_2.QueryTallyResultRequest],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse", tx_1.MsgUpdateGroupPolicyMetadataResponse],
    ["/cosmos.group.v1.MsgLeaveGroup", tx_2.MsgLeaveGroup],
    ["/cosmos.group.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.group.v1.Member", types_1.Member],
    ["/cosmos.group.v1.EventCreateGroup", events_2.EventCreateGroup],
    ["/cosmos.group.v1.QueryGroupPolicyInfoResponse", query_3.QueryGroupPolicyInfoResponse],
    ["/cosmos.group.v1.QueryVotesByVoterRequest", query_4.QueryVotesByVoterRequest],
    ["/cosmos.group.v1.QueryVotesByVoterResponse", query_5.QueryVotesByVoterResponse],
    ["/cosmos.group.v1.MsgCreateGroupResponse", tx_3.MsgCreateGroupResponse],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicyResponse", tx_4.MsgCreateGroupWithPolicyResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", tx_5.MsgUpdateGroupPolicyMetadata],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse", tx_6.MsgUpdateGroupPolicyAdminResponse],
    ["/cosmos.group.v1.MsgWithdrawProposal", tx_7.MsgWithdrawProposal],
    ["/cosmos.group.v1.MsgVoteResponse", tx_8.MsgVoteResponse],
    ["/cosmos.group.v1.QueryVotesByProposalResponse", query_6.QueryVotesByProposalResponse],
    ["/cosmos.group.v1.EventExec", events_3.EventExec],
    ["/cosmos.group.v1.MsgUpdateGroupMembersResponse", tx_9.MsgUpdateGroupMembersResponse],
    ["/cosmos.group.v1.MsgCreateGroupPolicyResponse", tx_10.MsgCreateGroupPolicyResponse],
    ["/cosmos.group.v1.Vote", types_2.Vote],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicy", tx_11.MsgCreateGroupWithPolicy],
    ["/cosmos.group.v1.QueryGroupPolicyInfoRequest", query_7.QueryGroupPolicyInfoRequest],
    ["/cosmos.group.v1.QueryTallyResultResponse", query_8.QueryTallyResultResponse],
    ["/cosmos.group.v1.MsgWithdrawProposalResponse", tx_12.MsgWithdrawProposalResponse],
    ["/cosmos.group.v1.EventCreateGroupPolicy", events_4.EventCreateGroupPolicy],
    ["/cosmos.group.v1.MemberRequest", types_3.MemberRequest],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminResponse", query_9.QueryGroupPoliciesByAdminResponse],
    ["/cosmos.group.v1.QueryGroupsResponse", query_10.QueryGroupsResponse],
    ["/cosmos.group.v1.MsgUpdateGroupAdmin", tx_13.MsgUpdateGroupAdmin],
    ["/cosmos.group.v1.QueryGroupsByAdminRequest", query_11.QueryGroupsByAdminRequest],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyRequest", query_12.QueryProposalsByGroupPolicyRequest],
    ["/cosmos.group.v1.QueryGroupsByMemberRequest", query_13.QueryGroupsByMemberRequest],
    ["/cosmos.group.v1.QueryGroupsRequest", query_14.QueryGroupsRequest],
    ["/cosmos.group.v1.MsgSubmitProposalResponse", tx_14.MsgSubmitProposalResponse],
    ["/cosmos.group.v1.MsgExecResponse", tx_15.MsgExecResponse],
    ["/cosmos.group.v1.EventUpdateGroupPolicy", events_5.EventUpdateGroupPolicy],
    ["/cosmos.group.v1.MsgLeaveGroupResponse", tx_16.MsgLeaveGroupResponse],
    ["/cosmos.group.v1.TallyResult", types_4.TallyResult],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupResponse", query_15.QueryGroupPoliciesByGroupResponse],
    ["/cosmos.group.v1.QueryGroupInfoRequest", query_16.QueryGroupInfoRequest],
    ["/cosmos.group.v1.QueryGroupMembersResponse", query_17.QueryGroupMembersResponse],
    ["/cosmos.group.v1.QueryGroupsByMemberResponse", query_18.QueryGroupsByMemberResponse],
    ["/cosmos.group.v1.MsgUpdateGroupAdminResponse", tx_17.MsgUpdateGroupAdminResponse],
    ["/cosmos.group.v1.EventSubmitProposal", events_6.EventSubmitProposal],
    ["/cosmos.group.v1.EventVote", events_7.EventVote],
    ["/cosmos.group.v1.EventLeaveGroup", events_8.EventLeaveGroup],
    ["/cosmos.group.v1.MsgUpdateGroupMembers", tx_18.MsgUpdateGroupMembers],
    ["/cosmos.group.v1.QueryProposalResponse", query_19.QueryProposalResponse],
    ["/cosmos.group.v1.GroupInfo", types_5.GroupInfo],
    ["/cosmos.group.v1.EventWithdrawProposal", events_9.EventWithdrawProposal],
    ["/cosmos.group.v1.MsgCreateGroupPolicy", tx_19.MsgCreateGroupPolicy],
    ["/cosmos.group.v1.MsgCreateGroup", tx_20.MsgCreateGroup],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", tx_21.MsgUpdateGroupPolicyAdmin],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse", tx_22.MsgUpdateGroupPolicyDecisionPolicyResponse],
    ["/cosmos.group.v1.GroupMember", types_6.GroupMember],
    ["/cosmos.group.v1.Proposal", types_7.Proposal],
    ["/cosmos.group.v1.EventProposalPruned", events_10.EventProposalPruned],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyResponse", query_20.QueryProposalsByGroupPolicyResponse],
    ["/cosmos.group.v1.QueryVoteByProposalVoterRequest", query_21.QueryVoteByProposalVoterRequest],
    ["/cosmos.group.v1.MsgUpdateGroupMetadataResponse", tx_23.MsgUpdateGroupMetadataResponse],
    ["/cosmos.group.v1.MsgVote", tx_24.MsgVote],
    ["/cosmos.group.v1.ThresholdDecisionPolicy", types_8.ThresholdDecisionPolicy],
    ["/cosmos.group.v1.GroupPolicyInfo", types_9.GroupPolicyInfo],
    ["/cosmos.group.v1.QueryGroupInfoResponse", query_22.QueryGroupInfoResponse],
    ["/cosmos.group.v1.QueryGroupsByAdminResponse", query_23.QueryGroupsByAdminResponse],
    ["/cosmos.group.v1.QueryVoteByProposalVoterResponse", query_24.QueryVoteByProposalVoterResponse],
    ["/cosmos.group.v1.QueryVotesByProposalRequest", query_25.QueryVotesByProposalRequest],
    ["/cosmos.group.v1.DecisionPolicyWindows", types_10.DecisionPolicyWindows],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminRequest", query_26.QueryGroupPoliciesByAdminRequest],
    ["/cosmos.group.v1.MsgExec", tx_25.MsgExec],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", tx_26.MsgUpdateGroupPolicyDecisionPolicy],
    ["/cosmos.group.v1.MsgUpdateGroupMetadata", tx_27.MsgUpdateGroupMetadata],
    ["/cosmos.group.v1.MsgSubmitProposal", tx_28.MsgSubmitProposal],
    ["/cosmos.group.v1.QueryGroupMembersRequest", query_27.QueryGroupMembersRequest],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupRequest", query_28.QueryGroupPoliciesByGroupRequest],
    ["/cosmos.group.v1.PercentageDecisionPolicy", types_11.PercentageDecisionPolicy],
];
exports.msgTypes = msgTypes;
