"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/group/v1/tx");
const tx_2 = require("./types/cosmos/group/v1/tx");
const query_1 = require("./types/cosmos/group/v1/query");
const query_2 = require("./types/cosmos/group/v1/query");
const tx_3 = require("./types/cosmos/group/v1/tx");
const query_3 = require("./types/cosmos/group/v1/query");
const query_4 = require("./types/cosmos/group/v1/query");
const events_1 = require("./types/cosmos/group/v1/events");
const events_2 = require("./types/cosmos/group/v1/events");
const tx_4 = require("./types/cosmos/group/v1/tx");
const tx_5 = require("./types/cosmos/group/v1/tx");
const tx_6 = require("./types/cosmos/group/v1/tx");
const query_5 = require("./types/cosmos/group/v1/query");
const events_3 = require("./types/cosmos/group/v1/events");
const tx_7 = require("./types/cosmos/group/v1/tx");
const tx_8 = require("./types/cosmos/group/v1/tx");
const events_4 = require("./types/cosmos/group/v1/events");
const events_5 = require("./types/cosmos/group/v1/events");
const tx_9 = require("./types/cosmos/group/v1/tx");
const tx_10 = require("./types/cosmos/group/v1/tx");
const tx_11 = require("./types/cosmos/group/v1/tx");
const query_6 = require("./types/cosmos/group/v1/query");
const query_7 = require("./types/cosmos/group/v1/query");
const query_8 = require("./types/cosmos/group/v1/query");
const query_9 = require("./types/cosmos/group/v1/query");
const query_10 = require("./types/cosmos/group/v1/query");
const events_6 = require("./types/cosmos/group/v1/events");
const tx_12 = require("./types/cosmos/group/v1/tx");
const tx_13 = require("./types/cosmos/group/v1/tx");
const tx_14 = require("./types/cosmos/group/v1/tx");
const types_1 = require("./types/cosmos/group/v1/types");
const types_2 = require("./types/cosmos/group/v1/types");
const query_11 = require("./types/cosmos/group/v1/query");
const tx_15 = require("./types/cosmos/group/v1/tx");
const tx_16 = require("./types/cosmos/group/v1/tx");
const tx_17 = require("./types/cosmos/group/v1/tx");
const genesis_1 = require("./types/cosmos/group/v1/genesis");
const types_3 = require("./types/cosmos/group/v1/types");
const query_12 = require("./types/cosmos/group/v1/query");
const query_13 = require("./types/cosmos/group/v1/query");
const tx_18 = require("./types/cosmos/group/v1/tx");
const types_4 = require("./types/cosmos/group/v1/types");
const query_14 = require("./types/cosmos/group/v1/query");
const query_15 = require("./types/cosmos/group/v1/query");
const query_16 = require("./types/cosmos/group/v1/query");
const query_17 = require("./types/cosmos/group/v1/query");
const query_18 = require("./types/cosmos/group/v1/query");
const tx_19 = require("./types/cosmos/group/v1/tx");
const tx_20 = require("./types/cosmos/group/v1/tx");
const types_5 = require("./types/cosmos/group/v1/types");
const types_6 = require("./types/cosmos/group/v1/types");
const query_19 = require("./types/cosmos/group/v1/query");
const query_20 = require("./types/cosmos/group/v1/query");
const types_7 = require("./types/cosmos/group/v1/types");
const types_8 = require("./types/cosmos/group/v1/types");
const types_9 = require("./types/cosmos/group/v1/types");
const types_10 = require("./types/cosmos/group/v1/types");
const query_21 = require("./types/cosmos/group/v1/query");
const events_7 = require("./types/cosmos/group/v1/events");
const tx_21 = require("./types/cosmos/group/v1/tx");
const tx_22 = require("./types/cosmos/group/v1/tx");
const tx_23 = require("./types/cosmos/group/v1/tx");
const types_11 = require("./types/cosmos/group/v1/types");
const query_22 = require("./types/cosmos/group/v1/query");
const events_8 = require("./types/cosmos/group/v1/events");
const tx_24 = require("./types/cosmos/group/v1/tx");
const query_23 = require("./types/cosmos/group/v1/query");
const query_24 = require("./types/cosmos/group/v1/query");
const query_25 = require("./types/cosmos/group/v1/query");
const query_26 = require("./types/cosmos/group/v1/query");
const events_9 = require("./types/cosmos/group/v1/events");
const events_10 = require("./types/cosmos/group/v1/events");
const tx_25 = require("./types/cosmos/group/v1/tx");
const tx_26 = require("./types/cosmos/group/v1/tx");
const tx_27 = require("./types/cosmos/group/v1/tx");
const tx_28 = require("./types/cosmos/group/v1/tx");
const query_27 = require("./types/cosmos/group/v1/query");
const query_28 = require("./types/cosmos/group/v1/query");
const msgTypes = [
    ["/cosmos.group.v1.MsgWithdrawProposalResponse", tx_1.MsgWithdrawProposalResponse],
    ["/cosmos.group.v1.MsgVote", tx_2.MsgVote],
    ["/cosmos.group.v1.QueryVoteByProposalVoterRequest", query_1.QueryVoteByProposalVoterRequest],
    ["/cosmos.group.v1.QueryTallyResultRequest", query_2.QueryTallyResultRequest],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse", tx_3.MsgUpdateGroupPolicyMetadataResponse],
    ["/cosmos.group.v1.QueryGroupMembersRequest", query_3.QueryGroupMembersRequest],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminRequest", query_4.QueryGroupPoliciesByAdminRequest],
    ["/cosmos.group.v1.EventUpdateGroup", events_1.EventUpdateGroup],
    ["/cosmos.group.v1.EventSubmitProposal", events_2.EventSubmitProposal],
    ["/cosmos.group.v1.MsgSubmitProposal", tx_4.MsgSubmitProposal],
    ["/cosmos.group.v1.MsgCreateGroupPolicyResponse", tx_5.MsgCreateGroupPolicyResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse", tx_6.MsgUpdateGroupPolicyAdminResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminResponse", query_5.QueryGroupPoliciesByAdminResponse],
    ["/cosmos.group.v1.EventCreateGroupPolicy", events_3.EventCreateGroupPolicy],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicyResponse", tx_7.MsgCreateGroupWithPolicyResponse],
    ["/cosmos.group.v1.MsgLeaveGroup", tx_8.MsgLeaveGroup],
    ["/cosmos.group.v1.EventWithdrawProposal", events_4.EventWithdrawProposal],
    ["/cosmos.group.v1.EventExec", events_5.EventExec],
    ["/cosmos.group.v1.MsgUpdateGroupMetadataResponse", tx_9.MsgUpdateGroupMetadataResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMetadata", tx_10.MsgUpdateGroupMetadata],
    ["/cosmos.group.v1.MsgWithdrawProposal", tx_11.MsgWithdrawProposal],
    ["/cosmos.group.v1.QueryGroupInfoResponse", query_6.QueryGroupInfoResponse],
    ["/cosmos.group.v1.QueryVotesByProposalRequest", query_7.QueryVotesByProposalRequest],
    ["/cosmos.group.v1.QueryVotesByProposalResponse", query_8.QueryVotesByProposalResponse],
    ["/cosmos.group.v1.QueryGroupPolicyInfoRequest", query_9.QueryGroupPolicyInfoRequest],
    ["/cosmos.group.v1.QueryVotesByVoterResponse", query_10.QueryVotesByVoterResponse],
    ["/cosmos.group.v1.EventProposalPruned", events_6.EventProposalPruned],
    ["/cosmos.group.v1.MsgUpdateGroupAdmin", tx_12.MsgUpdateGroupAdmin],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", tx_13.MsgUpdateGroupPolicyDecisionPolicy],
    ["/cosmos.group.v1.MsgExec", tx_14.MsgExec],
    ["/cosmos.group.v1.GroupPolicyInfo", types_1.GroupPolicyInfo],
    ["/cosmos.group.v1.Proposal", types_2.Proposal],
    ["/cosmos.group.v1.QueryGroupMembersResponse", query_11.QueryGroupMembersResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMembers", tx_15.MsgUpdateGroupMembers],
    ["/cosmos.group.v1.MsgCreateGroupPolicy", tx_16.MsgCreateGroupPolicy],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse", tx_17.MsgUpdateGroupPolicyDecisionPolicyResponse],
    ["/cosmos.group.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.group.v1.GroupMember", types_3.GroupMember],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupRequest", query_12.QueryGroupPoliciesByGroupRequest],
    ["/cosmos.group.v1.QueryProposalResponse", query_13.QueryProposalResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMembersResponse", tx_18.MsgUpdateGroupMembersResponse],
    ["/cosmos.group.v1.Member", types_4.Member],
    ["/cosmos.group.v1.QueryGroupPolicyInfoResponse", query_14.QueryGroupPolicyInfoResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupResponse", query_15.QueryGroupPoliciesByGroupResponse],
    ["/cosmos.group.v1.QueryGroupInfoRequest", query_16.QueryGroupInfoRequest],
    ["/cosmos.group.v1.QueryGroupsByAdminResponse", query_17.QueryGroupsByAdminResponse],
    ["/cosmos.group.v1.QueryVotesByVoterRequest", query_18.QueryVotesByVoterRequest],
    ["/cosmos.group.v1.MsgCreateGroupResponse", tx_19.MsgCreateGroupResponse],
    ["/cosmos.group.v1.MsgUpdateGroupAdminResponse", tx_20.MsgUpdateGroupAdminResponse],
    ["/cosmos.group.v1.DecisionPolicyWindows", types_5.DecisionPolicyWindows],
    ["/cosmos.group.v1.Vote", types_6.Vote],
    ["/cosmos.group.v1.QueryGroupsByMemberRequest", query_19.QueryGroupsByMemberRequest],
    ["/cosmos.group.v1.QueryGroupsResponse", query_20.QueryGroupsResponse],
    ["/cosmos.group.v1.PercentageDecisionPolicy", types_7.PercentageDecisionPolicy],
    ["/cosmos.group.v1.GroupInfo", types_8.GroupInfo],
    ["/cosmos.group.v1.TallyResult", types_9.TallyResult],
    ["/cosmos.group.v1.ThresholdDecisionPolicy", types_10.ThresholdDecisionPolicy],
    ["/cosmos.group.v1.QueryProposalRequest", query_21.QueryProposalRequest],
    ["/cosmos.group.v1.EventCreateGroup", events_7.EventCreateGroup],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicy", tx_21.MsgCreateGroupWithPolicy],
    ["/cosmos.group.v1.MsgSubmitProposalResponse", tx_22.MsgSubmitProposalResponse],
    ["/cosmos.group.v1.MsgExecResponse", tx_23.MsgExecResponse],
    ["/cosmos.group.v1.MemberRequest", types_11.MemberRequest],
    ["/cosmos.group.v1.QueryTallyResultResponse", query_22.QueryTallyResultResponse],
    ["/cosmos.group.v1.EventUpdateGroupPolicy", events_8.EventUpdateGroupPolicy],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", tx_24.MsgUpdateGroupPolicyAdmin],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyRequest", query_23.QueryProposalsByGroupPolicyRequest],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyResponse", query_24.QueryProposalsByGroupPolicyResponse],
    ["/cosmos.group.v1.QueryVoteByProposalVoterResponse", query_25.QueryVoteByProposalVoterResponse],
    ["/cosmos.group.v1.QueryGroupsByMemberResponse", query_26.QueryGroupsByMemberResponse],
    ["/cosmos.group.v1.EventVote", events_9.EventVote],
    ["/cosmos.group.v1.EventLeaveGroup", events_10.EventLeaveGroup],
    ["/cosmos.group.v1.MsgCreateGroup", tx_25.MsgCreateGroup],
    ["/cosmos.group.v1.MsgVoteResponse", tx_26.MsgVoteResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", tx_27.MsgUpdateGroupPolicyMetadata],
    ["/cosmos.group.v1.MsgLeaveGroupResponse", tx_28.MsgLeaveGroupResponse],
    ["/cosmos.group.v1.QueryGroupsByAdminRequest", query_27.QueryGroupsByAdminRequest],
    ["/cosmos.group.v1.QueryGroupsRequest", query_28.QueryGroupsRequest],
];
exports.msgTypes = msgTypes;
