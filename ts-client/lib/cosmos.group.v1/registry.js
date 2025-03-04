"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/group/v1/query");
const query_2 = require("./types/cosmos/group/v1/query");
const types_1 = require("./types/cosmos/group/v1/types");
const tx_1 = require("./types/cosmos/group/v1/tx");
const events_1 = require("./types/cosmos/group/v1/events");
const query_3 = require("./types/cosmos/group/v1/query");
const query_4 = require("./types/cosmos/group/v1/query");
const tx_2 = require("./types/cosmos/group/v1/tx");
const query_5 = require("./types/cosmos/group/v1/query");
const query_6 = require("./types/cosmos/group/v1/query");
const types_2 = require("./types/cosmos/group/v1/types");
const tx_3 = require("./types/cosmos/group/v1/tx");
const tx_4 = require("./types/cosmos/group/v1/tx");
const tx_5 = require("./types/cosmos/group/v1/tx");
const query_7 = require("./types/cosmos/group/v1/query");
const query_8 = require("./types/cosmos/group/v1/query");
const genesis_1 = require("./types/cosmos/group/v1/genesis");
const tx_6 = require("./types/cosmos/group/v1/tx");
const events_2 = require("./types/cosmos/group/v1/events");
const query_9 = require("./types/cosmos/group/v1/query");
const query_10 = require("./types/cosmos/group/v1/query");
const tx_7 = require("./types/cosmos/group/v1/tx");
const tx_8 = require("./types/cosmos/group/v1/tx");
const tx_9 = require("./types/cosmos/group/v1/tx");
const events_3 = require("./types/cosmos/group/v1/events");
const query_11 = require("./types/cosmos/group/v1/query");
const types_3 = require("./types/cosmos/group/v1/types");
const types_4 = require("./types/cosmos/group/v1/types");
const tx_10 = require("./types/cosmos/group/v1/tx");
const tx_11 = require("./types/cosmos/group/v1/tx");
const tx_12 = require("./types/cosmos/group/v1/tx");
const query_12 = require("./types/cosmos/group/v1/query");
const types_5 = require("./types/cosmos/group/v1/types");
const events_4 = require("./types/cosmos/group/v1/events");
const events_5 = require("./types/cosmos/group/v1/events");
const query_13 = require("./types/cosmos/group/v1/query");
const query_14 = require("./types/cosmos/group/v1/query");
const query_15 = require("./types/cosmos/group/v1/query");
const query_16 = require("./types/cosmos/group/v1/query");
const tx_13 = require("./types/cosmos/group/v1/tx");
const query_17 = require("./types/cosmos/group/v1/query");
const types_6 = require("./types/cosmos/group/v1/types");
const tx_14 = require("./types/cosmos/group/v1/tx");
const tx_15 = require("./types/cosmos/group/v1/tx");
const events_6 = require("./types/cosmos/group/v1/events");
const query_18 = require("./types/cosmos/group/v1/query");
const types_7 = require("./types/cosmos/group/v1/types");
const tx_16 = require("./types/cosmos/group/v1/tx");
const tx_17 = require("./types/cosmos/group/v1/tx");
const tx_18 = require("./types/cosmos/group/v1/tx");
const events_7 = require("./types/cosmos/group/v1/events");
const events_8 = require("./types/cosmos/group/v1/events");
const query_19 = require("./types/cosmos/group/v1/query");
const types_8 = require("./types/cosmos/group/v1/types");
const tx_19 = require("./types/cosmos/group/v1/tx");
const events_9 = require("./types/cosmos/group/v1/events");
const events_10 = require("./types/cosmos/group/v1/events");
const query_20 = require("./types/cosmos/group/v1/query");
const types_9 = require("./types/cosmos/group/v1/types");
const tx_20 = require("./types/cosmos/group/v1/tx");
const tx_21 = require("./types/cosmos/group/v1/tx");
const query_21 = require("./types/cosmos/group/v1/query");
const query_22 = require("./types/cosmos/group/v1/query");
const types_10 = require("./types/cosmos/group/v1/types");
const tx_22 = require("./types/cosmos/group/v1/tx");
const tx_23 = require("./types/cosmos/group/v1/tx");
const query_23 = require("./types/cosmos/group/v1/query");
const query_24 = require("./types/cosmos/group/v1/query");
const query_25 = require("./types/cosmos/group/v1/query");
const types_11 = require("./types/cosmos/group/v1/types");
const tx_24 = require("./types/cosmos/group/v1/tx");
const query_26 = require("./types/cosmos/group/v1/query");
const tx_25 = require("./types/cosmos/group/v1/tx");
const tx_26 = require("./types/cosmos/group/v1/tx");
const query_27 = require("./types/cosmos/group/v1/query");
const query_28 = require("./types/cosmos/group/v1/query");
const tx_27 = require("./types/cosmos/group/v1/tx");
const tx_28 = require("./types/cosmos/group/v1/tx");
const msgTypes = [
    ["/cosmos.group.v1.QueryGroupsRequest", query_1.QueryGroupsRequest],
    ["/cosmos.group.v1.QueryGroupsResponse", query_2.QueryGroupsResponse],
    ["/cosmos.group.v1.ThresholdDecisionPolicy", types_1.ThresholdDecisionPolicy],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse", tx_1.MsgUpdateGroupPolicyDecisionPolicyResponse],
    ["/cosmos.group.v1.EventWithdrawProposal", events_1.EventWithdrawProposal],
    ["/cosmos.group.v1.QueryGroupInfoRequest", query_3.QueryGroupInfoRequest],
    ["/cosmos.group.v1.QueryProposalRequest", query_4.QueryProposalRequest],
    ["/cosmos.group.v1.MsgUpdateGroupMetadataResponse", tx_2.MsgUpdateGroupMetadataResponse],
    ["/cosmos.group.v1.QueryGroupMembersResponse", query_5.QueryGroupMembersResponse],
    ["/cosmos.group.v1.QueryVotesByVoterRequest", query_6.QueryVotesByVoterRequest],
    ["/cosmos.group.v1.GroupPolicyInfo", types_2.GroupPolicyInfo],
    ["/cosmos.group.v1.MsgUpdateGroupMembers", tx_3.MsgUpdateGroupMembers],
    ["/cosmos.group.v1.MsgSubmitProposalResponse", tx_4.MsgSubmitProposalResponse],
    ["/cosmos.group.v1.MsgLeaveGroup", tx_5.MsgLeaveGroup],
    ["/cosmos.group.v1.QueryGroupInfoResponse", query_7.QueryGroupInfoResponse],
    ["/cosmos.group.v1.QueryTallyResultRequest", query_8.QueryTallyResultRequest],
    ["/cosmos.group.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.group.v1.MsgVote", tx_6.MsgVote],
    ["/cosmos.group.v1.EventUpdateGroupPolicy", events_2.EventUpdateGroupPolicy],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyResponse", query_9.QueryProposalsByGroupPolicyResponse],
    ["/cosmos.group.v1.QueryVotesByProposalRequest", query_10.QueryVotesByProposalRequest],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", tx_7.MsgUpdateGroupPolicyAdmin],
    ["/cosmos.group.v1.MsgWithdrawProposalResponse", tx_8.MsgWithdrawProposalResponse],
    ["/cosmos.group.v1.MsgExecResponse", tx_9.MsgExecResponse],
    ["/cosmos.group.v1.EventProposalPruned", events_3.EventProposalPruned],
    ["/cosmos.group.v1.QueryProposalResponse", query_11.QueryProposalResponse],
    ["/cosmos.group.v1.GroupInfo", types_3.GroupInfo],
    ["/cosmos.group.v1.TallyResult", types_4.TallyResult],
    ["/cosmos.group.v1.MsgUpdateGroupAdmin", tx_10.MsgUpdateGroupAdmin],
    ["/cosmos.group.v1.MsgCreateGroupPolicy", tx_11.MsgCreateGroupPolicy],
    ["/cosmos.group.v1.MsgUpdateGroupAdminResponse", tx_12.MsgUpdateGroupAdminResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupRequest", query_12.QueryGroupPoliciesByGroupRequest],
    ["/cosmos.group.v1.Member", types_5.Member],
    ["/cosmos.group.v1.EventUpdateGroup", events_4.EventUpdateGroup],
    ["/cosmos.group.v1.EventVote", events_5.EventVote],
    ["/cosmos.group.v1.QueryGroupPolicyInfoResponse", query_13.QueryGroupPolicyInfoResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminRequest", query_14.QueryGroupPoliciesByAdminRequest],
    ["/cosmos.group.v1.QueryVoteByProposalVoterResponse", query_15.QueryVoteByProposalVoterResponse],
    ["/cosmos.group.v1.QueryVotesByVoterResponse", query_16.QueryVotesByVoterResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", tx_13.MsgUpdateGroupPolicyMetadata],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminResponse", query_17.QueryGroupPoliciesByAdminResponse],
    ["/cosmos.group.v1.PercentageDecisionPolicy", types_6.PercentageDecisionPolicy],
    ["/cosmos.group.v1.MsgUpdateGroupMembersResponse", tx_14.MsgUpdateGroupMembersResponse],
    ["/cosmos.group.v1.MsgLeaveGroupResponse", tx_15.MsgLeaveGroupResponse],
    ["/cosmos.group.v1.EventExec", events_6.EventExec],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyRequest", query_18.QueryProposalsByGroupPolicyRequest],
    ["/cosmos.group.v1.DecisionPolicyWindows", types_7.DecisionPolicyWindows],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicy", tx_16.MsgCreateGroupWithPolicy],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse", tx_17.MsgUpdateGroupPolicyMetadataResponse],
    ["/cosmos.group.v1.MsgVoteResponse", tx_18.MsgVoteResponse],
    ["/cosmos.group.v1.EventCreateGroupPolicy", events_7.EventCreateGroupPolicy],
    ["/cosmos.group.v1.EventLeaveGroup", events_8.EventLeaveGroup],
    ["/cosmos.group.v1.QueryGroupsByAdminResponse", query_19.QueryGroupsByAdminResponse],
    ["/cosmos.group.v1.MemberRequest", types_8.MemberRequest],
    ["/cosmos.group.v1.MsgCreateGroup", tx_19.MsgCreateGroup],
    ["/cosmos.group.v1.EventCreateGroup", events_9.EventCreateGroup],
    ["/cosmos.group.v1.EventSubmitProposal", events_10.EventSubmitProposal],
    ["/cosmos.group.v1.QueryGroupPolicyInfoRequest", query_20.QueryGroupPolicyInfoRequest],
    ["/cosmos.group.v1.Vote", types_9.Vote],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", tx_20.MsgUpdateGroupPolicyDecisionPolicy],
    ["/cosmos.group.v1.MsgSubmitProposal", tx_21.MsgSubmitProposal],
    ["/cosmos.group.v1.QueryGroupsByAdminRequest", query_21.QueryGroupsByAdminRequest],
    ["/cosmos.group.v1.QueryTallyResultResponse", query_22.QueryTallyResultResponse],
    ["/cosmos.group.v1.GroupMember", types_10.GroupMember],
    ["/cosmos.group.v1.MsgUpdateGroupMetadata", tx_22.MsgUpdateGroupMetadata],
    ["/cosmos.group.v1.MsgExec", tx_23.MsgExec],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupResponse", query_23.QueryGroupPoliciesByGroupResponse],
    ["/cosmos.group.v1.QueryVotesByProposalResponse", query_24.QueryVotesByProposalResponse],
    ["/cosmos.group.v1.QueryGroupsByMemberRequest", query_25.QueryGroupsByMemberRequest],
    ["/cosmos.group.v1.Proposal", types_11.Proposal],
    ["/cosmos.group.v1.MsgCreateGroupResponse", tx_24.MsgCreateGroupResponse],
    ["/cosmos.group.v1.QueryVoteByProposalVoterRequest", query_26.QueryVoteByProposalVoterRequest],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicyResponse", tx_25.MsgCreateGroupWithPolicyResponse],
    ["/cosmos.group.v1.MsgWithdrawProposal", tx_26.MsgWithdrawProposal],
    ["/cosmos.group.v1.QueryGroupMembersRequest", query_27.QueryGroupMembersRequest],
    ["/cosmos.group.v1.QueryGroupsByMemberResponse", query_28.QueryGroupsByMemberResponse],
    ["/cosmos.group.v1.MsgCreateGroupPolicyResponse", tx_27.MsgCreateGroupPolicyResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse", tx_28.MsgUpdateGroupPolicyAdminResponse],
];
exports.msgTypes = msgTypes;
