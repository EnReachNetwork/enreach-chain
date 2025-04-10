"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const types_1 = require("./types/cosmos/group/v1/types");
const types_2 = require("./types/cosmos/group/v1/types");
const types_3 = require("./types/cosmos/group/v1/types");
const tx_1 = require("./types/cosmos/group/v1/tx");
const events_1 = require("./types/cosmos/group/v1/events");
const tx_2 = require("./types/cosmos/group/v1/tx");
const types_4 = require("./types/cosmos/group/v1/types");
const types_5 = require("./types/cosmos/group/v1/types");
const types_6 = require("./types/cosmos/group/v1/types");
const tx_3 = require("./types/cosmos/group/v1/tx");
const query_1 = require("./types/cosmos/group/v1/query");
const query_2 = require("./types/cosmos/group/v1/query");
const tx_4 = require("./types/cosmos/group/v1/tx");
const types_7 = require("./types/cosmos/group/v1/types");
const tx_5 = require("./types/cosmos/group/v1/tx");
const tx_6 = require("./types/cosmos/group/v1/tx");
const query_3 = require("./types/cosmos/group/v1/query");
const tx_7 = require("./types/cosmos/group/v1/tx");
const tx_8 = require("./types/cosmos/group/v1/tx");
const tx_9 = require("./types/cosmos/group/v1/tx");
const query_4 = require("./types/cosmos/group/v1/query");
const types_8 = require("./types/cosmos/group/v1/types");
const types_9 = require("./types/cosmos/group/v1/types");
const events_2 = require("./types/cosmos/group/v1/events");
const events_3 = require("./types/cosmos/group/v1/events");
const query_5 = require("./types/cosmos/group/v1/query");
const query_6 = require("./types/cosmos/group/v1/query");
const events_4 = require("./types/cosmos/group/v1/events");
const query_7 = require("./types/cosmos/group/v1/query");
const tx_10 = require("./types/cosmos/group/v1/tx");
const tx_11 = require("./types/cosmos/group/v1/tx");
const query_8 = require("./types/cosmos/group/v1/query");
const query_9 = require("./types/cosmos/group/v1/query");
const query_10 = require("./types/cosmos/group/v1/query");
const query_11 = require("./types/cosmos/group/v1/query");
const query_12 = require("./types/cosmos/group/v1/query");
const tx_12 = require("./types/cosmos/group/v1/tx");
const tx_13 = require("./types/cosmos/group/v1/tx");
const query_13 = require("./types/cosmos/group/v1/query");
const tx_14 = require("./types/cosmos/group/v1/tx");
const types_10 = require("./types/cosmos/group/v1/types");
const tx_15 = require("./types/cosmos/group/v1/tx");
const tx_16 = require("./types/cosmos/group/v1/tx");
const events_5 = require("./types/cosmos/group/v1/events");
const query_14 = require("./types/cosmos/group/v1/query");
const tx_17 = require("./types/cosmos/group/v1/tx");
const tx_18 = require("./types/cosmos/group/v1/tx");
const types_11 = require("./types/cosmos/group/v1/types");
const tx_19 = require("./types/cosmos/group/v1/tx");
const tx_20 = require("./types/cosmos/group/v1/tx");
const tx_21 = require("./types/cosmos/group/v1/tx");
const events_6 = require("./types/cosmos/group/v1/events");
const query_15 = require("./types/cosmos/group/v1/query");
const query_16 = require("./types/cosmos/group/v1/query");
const tx_22 = require("./types/cosmos/group/v1/tx");
const query_17 = require("./types/cosmos/group/v1/query");
const tx_23 = require("./types/cosmos/group/v1/tx");
const genesis_1 = require("./types/cosmos/group/v1/genesis");
const query_18 = require("./types/cosmos/group/v1/query");
const query_19 = require("./types/cosmos/group/v1/query");
const query_20 = require("./types/cosmos/group/v1/query");
const tx_24 = require("./types/cosmos/group/v1/tx");
const events_7 = require("./types/cosmos/group/v1/events");
const query_21 = require("./types/cosmos/group/v1/query");
const query_22 = require("./types/cosmos/group/v1/query");
const query_23 = require("./types/cosmos/group/v1/query");
const query_24 = require("./types/cosmos/group/v1/query");
const query_25 = require("./types/cosmos/group/v1/query");
const tx_25 = require("./types/cosmos/group/v1/tx");
const tx_26 = require("./types/cosmos/group/v1/tx");
const events_8 = require("./types/cosmos/group/v1/events");
const query_26 = require("./types/cosmos/group/v1/query");
const query_27 = require("./types/cosmos/group/v1/query");
const tx_27 = require("./types/cosmos/group/v1/tx");
const tx_28 = require("./types/cosmos/group/v1/tx");
const events_9 = require("./types/cosmos/group/v1/events");
const events_10 = require("./types/cosmos/group/v1/events");
const query_28 = require("./types/cosmos/group/v1/query");
const msgTypes = [
    ["/cosmos.group.v1.GroupMember", types_1.GroupMember],
    ["/cosmos.group.v1.Vote", types_2.Vote],
    ["/cosmos.group.v1.DecisionPolicyWindows", types_3.DecisionPolicyWindows],
    ["/cosmos.group.v1.MsgUpdateGroupAdminResponse", tx_1.MsgUpdateGroupAdminResponse],
    ["/cosmos.group.v1.EventUpdateGroupPolicy", events_1.EventUpdateGroupPolicy],
    ["/cosmos.group.v1.MsgUpdateGroupMembers", tx_2.MsgUpdateGroupMembers],
    ["/cosmos.group.v1.GroupPolicyInfo", types_4.GroupPolicyInfo],
    ["/cosmos.group.v1.GroupInfo", types_5.GroupInfo],
    ["/cosmos.group.v1.TallyResult", types_6.TallyResult],
    ["/cosmos.group.v1.MsgUpdateGroupMetadataResponse", tx_3.MsgUpdateGroupMetadataResponse],
    ["/cosmos.group.v1.QueryGroupInfoResponse", query_1.QueryGroupInfoResponse],
    ["/cosmos.group.v1.QueryGroupMembersResponse", query_2.QueryGroupMembersResponse],
    ["/cosmos.group.v1.MsgUpdateGroupAdmin", tx_4.MsgUpdateGroupAdmin],
    ["/cosmos.group.v1.Proposal", types_7.Proposal],
    ["/cosmos.group.v1.MsgWithdrawProposalResponse", tx_5.MsgWithdrawProposalResponse],
    ["/cosmos.group.v1.MsgVoteResponse", tx_6.MsgVoteResponse],
    ["/cosmos.group.v1.QueryVotesByProposalResponse", query_3.QueryVotesByProposalResponse],
    ["/cosmos.group.v1.MsgSubmitProposal", tx_7.MsgSubmitProposal],
    ["/cosmos.group.v1.MsgUpdateGroupMembersResponse", tx_8.MsgUpdateGroupMembersResponse],
    ["/cosmos.group.v1.MsgSubmitProposalResponse", tx_9.MsgSubmitProposalResponse],
    ["/cosmos.group.v1.QueryTallyResultResponse", query_4.QueryTallyResultResponse],
    ["/cosmos.group.v1.ThresholdDecisionPolicy", types_8.ThresholdDecisionPolicy],
    ["/cosmos.group.v1.Member", types_9.Member],
    ["/cosmos.group.v1.EventCreateGroup", events_2.EventCreateGroup],
    ["/cosmos.group.v1.EventSubmitProposal", events_3.EventSubmitProposal],
    ["/cosmos.group.v1.QueryGroupPolicyInfoResponse", query_5.QueryGroupPolicyInfoResponse],
    ["/cosmos.group.v1.QueryVoteByProposalVoterResponse", query_6.QueryVoteByProposalVoterResponse],
    ["/cosmos.group.v1.EventLeaveGroup", events_4.EventLeaveGroup],
    ["/cosmos.group.v1.QueryGroupsByAdminResponse", query_7.QueryGroupsByAdminResponse],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicy", tx_10.MsgCreateGroupWithPolicy],
    ["/cosmos.group.v1.MsgCreateGroupPolicyResponse", tx_11.MsgCreateGroupPolicyResponse],
    ["/cosmos.group.v1.QueryProposalResponse", query_8.QueryProposalResponse],
    ["/cosmos.group.v1.QueryVotesByVoterResponse", query_9.QueryVotesByVoterResponse],
    ["/cosmos.group.v1.QueryGroupsResponse", query_10.QueryGroupsResponse],
    ["/cosmos.group.v1.QueryGroupPolicyInfoRequest", query_11.QueryGroupPolicyInfoRequest],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyRequest", query_12.QueryProposalsByGroupPolicyRequest],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse", tx_12.MsgUpdateGroupPolicyAdminResponse],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicyResponse", tx_13.MsgCreateGroupWithPolicyResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminResponse", query_13.QueryGroupPoliciesByAdminResponse],
    ["/cosmos.group.v1.MsgCreateGroupPolicy", tx_14.MsgCreateGroupPolicy],
    ["/cosmos.group.v1.PercentageDecisionPolicy", types_10.PercentageDecisionPolicy],
    ["/cosmos.group.v1.MsgCreateGroupResponse", tx_15.MsgCreateGroupResponse],
    ["/cosmos.group.v1.MsgLeaveGroup", tx_16.MsgLeaveGroup],
    ["/cosmos.group.v1.EventVote", events_5.EventVote],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupRequest", query_14.QueryGroupPoliciesByGroupRequest],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", tx_17.MsgUpdateGroupPolicyDecisionPolicy],
    ["/cosmos.group.v1.MsgVote", tx_18.MsgVote],
    ["/cosmos.group.v1.MemberRequest", types_11.MemberRequest],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse", tx_19.MsgUpdateGroupPolicyDecisionPolicyResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", tx_20.MsgUpdateGroupPolicyMetadata],
    ["/cosmos.group.v1.MsgWithdrawProposal", tx_21.MsgWithdrawProposal],
    ["/cosmos.group.v1.EventExec", events_6.EventExec],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupResponse", query_15.QueryGroupPoliciesByGroupResponse],
    ["/cosmos.group.v1.QueryTallyResultRequest", query_16.QueryTallyResultRequest],
    ["/cosmos.group.v1.MsgExec", tx_22.MsgExec],
    ["/cosmos.group.v1.QueryVotesByVoterRequest", query_17.QueryVotesByVoterRequest],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", tx_23.MsgUpdateGroupPolicyAdmin],
    ["/cosmos.group.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.group.v1.QueryGroupInfoRequest", query_18.QueryGroupInfoRequest],
    ["/cosmos.group.v1.QueryGroupMembersRequest", query_19.QueryGroupMembersRequest],
    ["/cosmos.group.v1.QueryGroupsByAdminRequest", query_20.QueryGroupsByAdminRequest],
    ["/cosmos.group.v1.MsgExecResponse", tx_24.MsgExecResponse],
    ["/cosmos.group.v1.EventCreateGroupPolicy", events_7.EventCreateGroupPolicy],
    ["/cosmos.group.v1.QueryVotesByProposalRequest", query_21.QueryVotesByProposalRequest],
    ["/cosmos.group.v1.QueryGroupsByMemberResponse", query_22.QueryGroupsByMemberResponse],
    ["/cosmos.group.v1.QueryGroupsRequest", query_23.QueryGroupsRequest],
    ["/cosmos.group.v1.QueryProposalRequest", query_24.QueryProposalRequest],
    ["/cosmos.group.v1.QueryVoteByProposalVoterRequest", query_25.QueryVoteByProposalVoterRequest],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse", tx_25.MsgUpdateGroupPolicyMetadataResponse],
    ["/cosmos.group.v1.MsgCreateGroup", tx_26.MsgCreateGroup],
    ["/cosmos.group.v1.EventProposalPruned", events_8.EventProposalPruned],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyResponse", query_26.QueryProposalsByGroupPolicyResponse],
    ["/cosmos.group.v1.QueryGroupsByMemberRequest", query_27.QueryGroupsByMemberRequest],
    ["/cosmos.group.v1.MsgUpdateGroupMetadata", tx_27.MsgUpdateGroupMetadata],
    ["/cosmos.group.v1.MsgLeaveGroupResponse", tx_28.MsgLeaveGroupResponse],
    ["/cosmos.group.v1.EventUpdateGroup", events_9.EventUpdateGroup],
    ["/cosmos.group.v1.EventWithdrawProposal", events_10.EventWithdrawProposal],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminRequest", query_28.QueryGroupPoliciesByAdminRequest],
];
exports.msgTypes = msgTypes;
