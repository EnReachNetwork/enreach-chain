"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const types_1 = require("./types/cosmos/group/v1/types");
const types_2 = require("./types/cosmos/group/v1/types");
const query_1 = require("./types/cosmos/group/v1/query");
const query_2 = require("./types/cosmos/group/v1/query");
const query_3 = require("./types/cosmos/group/v1/query");
const tx_1 = require("./types/cosmos/group/v1/tx");
const tx_2 = require("./types/cosmos/group/v1/tx");
const tx_3 = require("./types/cosmos/group/v1/tx");
const tx_4 = require("./types/cosmos/group/v1/tx");
const query_4 = require("./types/cosmos/group/v1/query");
const query_5 = require("./types/cosmos/group/v1/query");
const types_3 = require("./types/cosmos/group/v1/types");
const tx_5 = require("./types/cosmos/group/v1/tx");
const tx_6 = require("./types/cosmos/group/v1/tx");
const types_4 = require("./types/cosmos/group/v1/types");
const query_6 = require("./types/cosmos/group/v1/query");
const query_7 = require("./types/cosmos/group/v1/query");
const query_8 = require("./types/cosmos/group/v1/query");
const query_9 = require("./types/cosmos/group/v1/query");
const query_10 = require("./types/cosmos/group/v1/query");
const query_11 = require("./types/cosmos/group/v1/query");
const query_12 = require("./types/cosmos/group/v1/query");
const tx_7 = require("./types/cosmos/group/v1/tx");
const events_1 = require("./types/cosmos/group/v1/events");
const events_2 = require("./types/cosmos/group/v1/events");
const query_13 = require("./types/cosmos/group/v1/query");
const tx_8 = require("./types/cosmos/group/v1/tx");
const tx_9 = require("./types/cosmos/group/v1/tx");
const tx_10 = require("./types/cosmos/group/v1/tx");
const types_5 = require("./types/cosmos/group/v1/types");
const events_3 = require("./types/cosmos/group/v1/events");
const query_14 = require("./types/cosmos/group/v1/query");
const tx_11 = require("./types/cosmos/group/v1/tx");
const tx_12 = require("./types/cosmos/group/v1/tx");
const tx_13 = require("./types/cosmos/group/v1/tx");
const tx_14 = require("./types/cosmos/group/v1/tx");
const query_15 = require("./types/cosmos/group/v1/query");
const tx_15 = require("./types/cosmos/group/v1/tx");
const tx_16 = require("./types/cosmos/group/v1/tx");
const tx_17 = require("./types/cosmos/group/v1/tx");
const tx_18 = require("./types/cosmos/group/v1/tx");
const events_4 = require("./types/cosmos/group/v1/events");
const query_16 = require("./types/cosmos/group/v1/query");
const tx_19 = require("./types/cosmos/group/v1/tx");
const types_6 = require("./types/cosmos/group/v1/types");
const types_7 = require("./types/cosmos/group/v1/types");
const events_5 = require("./types/cosmos/group/v1/events");
const tx_20 = require("./types/cosmos/group/v1/tx");
const query_17 = require("./types/cosmos/group/v1/query");
const types_8 = require("./types/cosmos/group/v1/types");
const events_6 = require("./types/cosmos/group/v1/events");
const query_18 = require("./types/cosmos/group/v1/query");
const tx_21 = require("./types/cosmos/group/v1/tx");
const events_7 = require("./types/cosmos/group/v1/events");
const query_19 = require("./types/cosmos/group/v1/query");
const query_20 = require("./types/cosmos/group/v1/query");
const tx_22 = require("./types/cosmos/group/v1/tx");
const query_21 = require("./types/cosmos/group/v1/query");
const query_22 = require("./types/cosmos/group/v1/query");
const tx_23 = require("./types/cosmos/group/v1/tx");
const tx_24 = require("./types/cosmos/group/v1/tx");
const types_9 = require("./types/cosmos/group/v1/types");
const types_10 = require("./types/cosmos/group/v1/types");
const events_8 = require("./types/cosmos/group/v1/events");
const events_9 = require("./types/cosmos/group/v1/events");
const types_11 = require("./types/cosmos/group/v1/types");
const query_23 = require("./types/cosmos/group/v1/query");
const query_24 = require("./types/cosmos/group/v1/query");
const tx_25 = require("./types/cosmos/group/v1/tx");
const tx_26 = require("./types/cosmos/group/v1/tx");
const genesis_1 = require("./types/cosmos/group/v1/genesis");
const events_10 = require("./types/cosmos/group/v1/events");
const query_25 = require("./types/cosmos/group/v1/query");
const tx_27 = require("./types/cosmos/group/v1/tx");
const query_26 = require("./types/cosmos/group/v1/query");
const tx_28 = require("./types/cosmos/group/v1/tx");
const query_27 = require("./types/cosmos/group/v1/query");
const query_28 = require("./types/cosmos/group/v1/query");
const msgTypes = [
    ["/cosmos.group.v1.Member", types_1.Member],
    ["/cosmos.group.v1.PercentageDecisionPolicy", types_2.PercentageDecisionPolicy],
    ["/cosmos.group.v1.QueryGroupsByMemberRequest", query_1.QueryGroupsByMemberRequest],
    ["/cosmos.group.v1.QueryProposalResponse", query_2.QueryProposalResponse],
    ["/cosmos.group.v1.QueryVotesByProposalResponse", query_3.QueryVotesByProposalResponse],
    ["/cosmos.group.v1.MsgCreateGroupResponse", tx_1.MsgCreateGroupResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse", tx_2.MsgUpdateGroupPolicyDecisionPolicyResponse],
    ["/cosmos.group.v1.MsgSubmitProposal", tx_3.MsgSubmitProposal],
    ["/cosmos.group.v1.MsgLeaveGroupResponse", tx_4.MsgLeaveGroupResponse],
    ["/cosmos.group.v1.QueryGroupMembersResponse", query_4.QueryGroupMembersResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminResponse", query_5.QueryGroupPoliciesByAdminResponse],
    ["/cosmos.group.v1.TallyResult", types_3.TallyResult],
    ["/cosmos.group.v1.MsgUpdateGroupAdminResponse", tx_5.MsgUpdateGroupAdminResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", tx_6.MsgUpdateGroupPolicyAdmin],
    ["/cosmos.group.v1.Proposal", types_4.Proposal],
    ["/cosmos.group.v1.QueryGroupInfoResponse", query_6.QueryGroupInfoResponse],
    ["/cosmos.group.v1.QueryGroupsRequest", query_7.QueryGroupsRequest],
    ["/cosmos.group.v1.QueryGroupPolicyInfoResponse", query_8.QueryGroupPolicyInfoResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupRequest", query_9.QueryGroupPoliciesByGroupRequest],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyRequest", query_10.QueryProposalsByGroupPolicyRequest],
    ["/cosmos.group.v1.QueryVoteByProposalVoterResponse", query_11.QueryVoteByProposalVoterResponse],
    ["/cosmos.group.v1.QueryGroupsByMemberResponse", query_12.QueryGroupsByMemberResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", tx_7.MsgUpdateGroupPolicyMetadata],
    ["/cosmos.group.v1.EventWithdrawProposal", events_1.EventWithdrawProposal],
    ["/cosmos.group.v1.EventProposalPruned", events_2.EventProposalPruned],
    ["/cosmos.group.v1.QueryGroupsResponse", query_13.QueryGroupsResponse],
    ["/cosmos.group.v1.MsgCreateGroup", tx_8.MsgCreateGroup],
    ["/cosmos.group.v1.MsgUpdateGroupAdmin", tx_9.MsgUpdateGroupAdmin],
    ["/cosmos.group.v1.MsgSubmitProposalResponse", tx_10.MsgSubmitProposalResponse],
    ["/cosmos.group.v1.GroupMember", types_5.GroupMember],
    ["/cosmos.group.v1.EventUpdateGroup", events_3.EventUpdateGroup],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupResponse", query_14.QueryGroupPoliciesByGroupResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse", tx_11.MsgUpdateGroupPolicyAdminResponse],
    ["/cosmos.group.v1.MsgWithdrawProposalResponse", tx_12.MsgWithdrawProposalResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMetadata", tx_13.MsgUpdateGroupMetadata],
    ["/cosmos.group.v1.MsgCreateGroupPolicyResponse", tx_14.MsgCreateGroupPolicyResponse],
    ["/cosmos.group.v1.QueryTallyResultResponse", query_15.QueryTallyResultResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMembers", tx_15.MsgUpdateGroupMembers],
    ["/cosmos.group.v1.MsgUpdateGroupMembersResponse", tx_16.MsgUpdateGroupMembersResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", tx_17.MsgUpdateGroupPolicyDecisionPolicy],
    ["/cosmos.group.v1.MsgWithdrawProposal", tx_18.MsgWithdrawProposal],
    ["/cosmos.group.v1.EventCreateGroup", events_4.EventCreateGroup],
    ["/cosmos.group.v1.QueryVotesByProposalRequest", query_16.QueryVotesByProposalRequest],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicyResponse", tx_19.MsgCreateGroupWithPolicyResponse],
    ["/cosmos.group.v1.MemberRequest", types_6.MemberRequest],
    ["/cosmos.group.v1.ThresholdDecisionPolicy", types_7.ThresholdDecisionPolicy],
    ["/cosmos.group.v1.EventCreateGroupPolicy", events_5.EventCreateGroupPolicy],
    ["/cosmos.group.v1.MsgUpdateGroupMetadataResponse", tx_20.MsgUpdateGroupMetadataResponse],
    ["/cosmos.group.v1.QueryTallyResultRequest", query_17.QueryTallyResultRequest],
    ["/cosmos.group.v1.Vote", types_8.Vote],
    ["/cosmos.group.v1.EventExec", events_6.EventExec],
    ["/cosmos.group.v1.QueryVotesByVoterResponse", query_18.QueryVotesByVoterResponse],
    ["/cosmos.group.v1.MsgLeaveGroup", tx_21.MsgLeaveGroup],
    ["/cosmos.group.v1.EventLeaveGroup", events_7.EventLeaveGroup],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminRequest", query_19.QueryGroupPoliciesByAdminRequest],
    ["/cosmos.group.v1.QueryGroupInfoRequest", query_20.QueryGroupInfoRequest],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse", tx_22.MsgUpdateGroupPolicyMetadataResponse],
    ["/cosmos.group.v1.QueryGroupsByAdminResponse", query_21.QueryGroupsByAdminResponse],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyResponse", query_22.QueryProposalsByGroupPolicyResponse],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicy", tx_23.MsgCreateGroupWithPolicy],
    ["/cosmos.group.v1.MsgExec", tx_24.MsgExec],
    ["/cosmos.group.v1.DecisionPolicyWindows", types_9.DecisionPolicyWindows],
    ["/cosmos.group.v1.GroupInfo", types_10.GroupInfo],
    ["/cosmos.group.v1.EventSubmitProposal", events_8.EventSubmitProposal],
    ["/cosmos.group.v1.EventVote", events_9.EventVote],
    ["/cosmos.group.v1.GroupPolicyInfo", types_11.GroupPolicyInfo],
    ["/cosmos.group.v1.QueryProposalRequest", query_23.QueryProposalRequest],
    ["/cosmos.group.v1.QueryVotesByVoterRequest", query_24.QueryVotesByVoterRequest],
    ["/cosmos.group.v1.MsgVoteResponse", tx_25.MsgVoteResponse],
    ["/cosmos.group.v1.MsgExecResponse", tx_26.MsgExecResponse],
    ["/cosmos.group.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.group.v1.EventUpdateGroupPolicy", events_10.EventUpdateGroupPolicy],
    ["/cosmos.group.v1.QueryGroupMembersRequest", query_25.QueryGroupMembersRequest],
    ["/cosmos.group.v1.MsgCreateGroupPolicy", tx_27.MsgCreateGroupPolicy],
    ["/cosmos.group.v1.QueryVoteByProposalVoterRequest", query_26.QueryVoteByProposalVoterRequest],
    ["/cosmos.group.v1.MsgVote", tx_28.MsgVote],
    ["/cosmos.group.v1.QueryGroupPolicyInfoRequest", query_27.QueryGroupPolicyInfoRequest],
    ["/cosmos.group.v1.QueryGroupsByAdminRequest", query_28.QueryGroupsByAdminRequest],
];
exports.msgTypes = msgTypes;
