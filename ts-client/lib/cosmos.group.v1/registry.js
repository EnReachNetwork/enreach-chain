"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/group/v1/tx");
const query_1 = require("./types/cosmos/group/v1/query");
const query_2 = require("./types/cosmos/group/v1/query");
const tx_2 = require("./types/cosmos/group/v1/tx");
const types_1 = require("./types/cosmos/group/v1/types");
const types_2 = require("./types/cosmos/group/v1/types");
const types_3 = require("./types/cosmos/group/v1/types");
const tx_3 = require("./types/cosmos/group/v1/tx");
const tx_4 = require("./types/cosmos/group/v1/tx");
const events_1 = require("./types/cosmos/group/v1/events");
const events_2 = require("./types/cosmos/group/v1/events");
const tx_5 = require("./types/cosmos/group/v1/tx");
const query_3 = require("./types/cosmos/group/v1/query");
const query_4 = require("./types/cosmos/group/v1/query");
const query_5 = require("./types/cosmos/group/v1/query");
const query_6 = require("./types/cosmos/group/v1/query");
const query_7 = require("./types/cosmos/group/v1/query");
const query_8 = require("./types/cosmos/group/v1/query");
const tx_6 = require("./types/cosmos/group/v1/tx");
const tx_7 = require("./types/cosmos/group/v1/tx");
const tx_8 = require("./types/cosmos/group/v1/tx");
const events_3 = require("./types/cosmos/group/v1/events");
const query_9 = require("./types/cosmos/group/v1/query");
const tx_9 = require("./types/cosmos/group/v1/tx");
const events_4 = require("./types/cosmos/group/v1/events");
const query_10 = require("./types/cosmos/group/v1/query");
const query_11 = require("./types/cosmos/group/v1/query");
const types_4 = require("./types/cosmos/group/v1/types");
const tx_10 = require("./types/cosmos/group/v1/tx");
const tx_11 = require("./types/cosmos/group/v1/tx");
const events_5 = require("./types/cosmos/group/v1/events");
const query_12 = require("./types/cosmos/group/v1/query");
const tx_12 = require("./types/cosmos/group/v1/tx");
const events_6 = require("./types/cosmos/group/v1/events");
const query_13 = require("./types/cosmos/group/v1/query");
const genesis_1 = require("./types/cosmos/group/v1/genesis");
const tx_13 = require("./types/cosmos/group/v1/tx");
const tx_14 = require("./types/cosmos/group/v1/tx");
const events_7 = require("./types/cosmos/group/v1/events");
const types_5 = require("./types/cosmos/group/v1/types");
const types_6 = require("./types/cosmos/group/v1/types");
const tx_15 = require("./types/cosmos/group/v1/tx");
const tx_16 = require("./types/cosmos/group/v1/tx");
const tx_17 = require("./types/cosmos/group/v1/tx");
const types_7 = require("./types/cosmos/group/v1/types");
const query_14 = require("./types/cosmos/group/v1/query");
const types_8 = require("./types/cosmos/group/v1/types");
const types_9 = require("./types/cosmos/group/v1/types");
const tx_18 = require("./types/cosmos/group/v1/tx");
const query_15 = require("./types/cosmos/group/v1/query");
const query_16 = require("./types/cosmos/group/v1/query");
const query_17 = require("./types/cosmos/group/v1/query");
const tx_19 = require("./types/cosmos/group/v1/tx");
const tx_20 = require("./types/cosmos/group/v1/tx");
const tx_21 = require("./types/cosmos/group/v1/tx");
const tx_22 = require("./types/cosmos/group/v1/tx");
const query_18 = require("./types/cosmos/group/v1/query");
const query_19 = require("./types/cosmos/group/v1/query");
const tx_23 = require("./types/cosmos/group/v1/tx");
const tx_24 = require("./types/cosmos/group/v1/tx");
const tx_25 = require("./types/cosmos/group/v1/tx");
const tx_26 = require("./types/cosmos/group/v1/tx");
const types_10 = require("./types/cosmos/group/v1/types");
const query_20 = require("./types/cosmos/group/v1/query");
const tx_27 = require("./types/cosmos/group/v1/tx");
const events_8 = require("./types/cosmos/group/v1/events");
const events_9 = require("./types/cosmos/group/v1/events");
const query_21 = require("./types/cosmos/group/v1/query");
const query_22 = require("./types/cosmos/group/v1/query");
const query_23 = require("./types/cosmos/group/v1/query");
const query_24 = require("./types/cosmos/group/v1/query");
const types_11 = require("./types/cosmos/group/v1/types");
const query_25 = require("./types/cosmos/group/v1/query");
const tx_28 = require("./types/cosmos/group/v1/tx");
const events_10 = require("./types/cosmos/group/v1/events");
const query_26 = require("./types/cosmos/group/v1/query");
const query_27 = require("./types/cosmos/group/v1/query");
const query_28 = require("./types/cosmos/group/v1/query");
const msgTypes = [
    ["/cosmos.group.v1.MsgCreateGroupWithPolicyResponse", tx_1.MsgCreateGroupWithPolicyResponse],
    ["/cosmos.group.v1.QueryGroupPolicyInfoRequest", query_1.QueryGroupPolicyInfoRequest],
    ["/cosmos.group.v1.QueryGroupsResponse", query_2.QueryGroupsResponse],
    ["/cosmos.group.v1.MsgCreateGroupPolicyResponse", tx_2.MsgCreateGroupPolicyResponse],
    ["/cosmos.group.v1.MemberRequest", types_1.MemberRequest],
    ["/cosmos.group.v1.GroupPolicyInfo", types_2.GroupPolicyInfo],
    ["/cosmos.group.v1.Vote", types_3.Vote],
    ["/cosmos.group.v1.MsgUpdateGroupMembers", tx_3.MsgUpdateGroupMembers],
    ["/cosmos.group.v1.MsgUpdateGroupAdmin", tx_4.MsgUpdateGroupAdmin],
    ["/cosmos.group.v1.EventCreateGroupPolicy", events_1.EventCreateGroupPolicy],
    ["/cosmos.group.v1.EventExec", events_2.EventExec],
    ["/cosmos.group.v1.MsgSubmitProposal", tx_5.MsgSubmitProposal],
    ["/cosmos.group.v1.QueryProposalRequest", query_3.QueryProposalRequest],
    ["/cosmos.group.v1.QueryVotesByVoterResponse", query_4.QueryVotesByVoterResponse],
    ["/cosmos.group.v1.QueryGroupInfoRequest", query_5.QueryGroupInfoRequest],
    ["/cosmos.group.v1.QueryVoteByProposalVoterResponse", query_6.QueryVoteByProposalVoterResponse],
    ["/cosmos.group.v1.QueryVotesByProposalRequest", query_7.QueryVotesByProposalRequest],
    ["/cosmos.group.v1.QueryTallyResultRequest", query_8.QueryTallyResultRequest],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse", tx_6.MsgUpdateGroupPolicyMetadataResponse],
    ["/cosmos.group.v1.MsgVote", tx_7.MsgVote],
    ["/cosmos.group.v1.MsgExec", tx_8.MsgExec],
    ["/cosmos.group.v1.EventSubmitProposal", events_3.EventSubmitProposal],
    ["/cosmos.group.v1.QueryGroupInfoResponse", query_9.QueryGroupInfoResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMetadata", tx_9.MsgUpdateGroupMetadata],
    ["/cosmos.group.v1.EventWithdrawProposal", events_4.EventWithdrawProposal],
    ["/cosmos.group.v1.QueryGroupMembersRequest", query_10.QueryGroupMembersRequest],
    ["/cosmos.group.v1.QueryGroupMembersResponse", query_11.QueryGroupMembersResponse],
    ["/cosmos.group.v1.GroupMember", types_4.GroupMember],
    ["/cosmos.group.v1.MsgSubmitProposalResponse", tx_10.MsgSubmitProposalResponse],
    ["/cosmos.group.v1.MsgWithdrawProposal", tx_11.MsgWithdrawProposal],
    ["/cosmos.group.v1.EventLeaveGroup", events_5.EventLeaveGroup],
    ["/cosmos.group.v1.QueryGroupsRequest", query_12.QueryGroupsRequest],
    ["/cosmos.group.v1.MsgCreateGroup", tx_12.MsgCreateGroup],
    ["/cosmos.group.v1.EventVote", events_6.EventVote],
    ["/cosmos.group.v1.QueryProposalResponse", query_13.QueryProposalResponse],
    ["/cosmos.group.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", tx_13.MsgUpdateGroupPolicyMetadata],
    ["/cosmos.group.v1.MsgWithdrawProposalResponse", tx_14.MsgWithdrawProposalResponse],
    ["/cosmos.group.v1.EventUpdateGroup", events_7.EventUpdateGroup],
    ["/cosmos.group.v1.GroupInfo", types_5.GroupInfo],
    ["/cosmos.group.v1.TallyResult", types_6.TallyResult],
    ["/cosmos.group.v1.MsgCreateGroupResponse", tx_15.MsgCreateGroupResponse],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicy", tx_16.MsgCreateGroupWithPolicy],
    ["/cosmos.group.v1.MsgVoteResponse", tx_17.MsgVoteResponse],
    ["/cosmos.group.v1.Member", types_7.Member],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyResponse", query_14.QueryProposalsByGroupPolicyResponse],
    ["/cosmos.group.v1.ThresholdDecisionPolicy", types_8.ThresholdDecisionPolicy],
    ["/cosmos.group.v1.Proposal", types_9.Proposal],
    ["/cosmos.group.v1.MsgLeaveGroupResponse", tx_18.MsgLeaveGroupResponse],
    ["/cosmos.group.v1.QueryVoteByProposalVoterRequest", query_15.QueryVoteByProposalVoterRequest],
    ["/cosmos.group.v1.QueryGroupsByMemberRequest", query_16.QueryGroupsByMemberRequest],
    ["/cosmos.group.v1.QueryGroupsByMemberResponse", query_17.QueryGroupsByMemberResponse],
    ["/cosmos.group.v1.MsgUpdateGroupAdminResponse", tx_19.MsgUpdateGroupAdminResponse],
    ["/cosmos.group.v1.MsgCreateGroupPolicy", tx_20.MsgCreateGroupPolicy],
    ["/cosmos.group.v1.MsgExecResponse", tx_21.MsgExecResponse],
    ["/cosmos.group.v1.MsgLeaveGroup", tx_22.MsgLeaveGroup],
    ["/cosmos.group.v1.QueryGroupsByAdminResponse", query_18.QueryGroupsByAdminResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupResponse", query_19.QueryGroupPoliciesByGroupResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMetadataResponse", tx_23.MsgUpdateGroupMetadataResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", tx_24.MsgUpdateGroupPolicyAdmin],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse", tx_25.MsgUpdateGroupPolicyAdminResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse", tx_26.MsgUpdateGroupPolicyDecisionPolicyResponse],
    ["/cosmos.group.v1.DecisionPolicyWindows", types_10.DecisionPolicyWindows],
    ["/cosmos.group.v1.QueryTallyResultResponse", query_20.QueryTallyResultResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMembersResponse", tx_27.MsgUpdateGroupMembersResponse],
    ["/cosmos.group.v1.EventUpdateGroupPolicy", events_8.EventUpdateGroupPolicy],
    ["/cosmos.group.v1.EventProposalPruned", events_9.EventProposalPruned],
    ["/cosmos.group.v1.QueryGroupsByAdminRequest", query_21.QueryGroupsByAdminRequest],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminRequest", query_22.QueryGroupPoliciesByAdminRequest],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyRequest", query_23.QueryProposalsByGroupPolicyRequest],
    ["/cosmos.group.v1.QueryVotesByProposalResponse", query_24.QueryVotesByProposalResponse],
    ["/cosmos.group.v1.PercentageDecisionPolicy", types_11.PercentageDecisionPolicy],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminResponse", query_25.QueryGroupPoliciesByAdminResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", tx_28.MsgUpdateGroupPolicyDecisionPolicy],
    ["/cosmos.group.v1.EventCreateGroup", events_10.EventCreateGroup],
    ["/cosmos.group.v1.QueryGroupPolicyInfoResponse", query_26.QueryGroupPolicyInfoResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupRequest", query_27.QueryGroupPoliciesByGroupRequest],
    ["/cosmos.group.v1.QueryVotesByVoterRequest", query_28.QueryVotesByVoterRequest],
];
exports.msgTypes = msgTypes;
