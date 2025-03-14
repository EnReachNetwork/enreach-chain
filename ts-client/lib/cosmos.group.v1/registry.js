"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/group/v1/tx");
const types_1 = require("./types/cosmos/group/v1/types");
const tx_2 = require("./types/cosmos/group/v1/tx");
const tx_3 = require("./types/cosmos/group/v1/tx");
const tx_4 = require("./types/cosmos/group/v1/tx");
const events_1 = require("./types/cosmos/group/v1/events");
const events_2 = require("./types/cosmos/group/v1/events");
const query_1 = require("./types/cosmos/group/v1/query");
const query_2 = require("./types/cosmos/group/v1/query");
const query_3 = require("./types/cosmos/group/v1/query");
const query_4 = require("./types/cosmos/group/v1/query");
const tx_5 = require("./types/cosmos/group/v1/tx");
const types_2 = require("./types/cosmos/group/v1/types");
const types_3 = require("./types/cosmos/group/v1/types");
const query_5 = require("./types/cosmos/group/v1/query");
const query_6 = require("./types/cosmos/group/v1/query");
const query_7 = require("./types/cosmos/group/v1/query");
const tx_6 = require("./types/cosmos/group/v1/tx");
const tx_7 = require("./types/cosmos/group/v1/tx");
const tx_8 = require("./types/cosmos/group/v1/tx");
const tx_9 = require("./types/cosmos/group/v1/tx");
const tx_10 = require("./types/cosmos/group/v1/tx");
const tx_11 = require("./types/cosmos/group/v1/tx");
const genesis_1 = require("./types/cosmos/group/v1/genesis");
const query_8 = require("./types/cosmos/group/v1/query");
const query_9 = require("./types/cosmos/group/v1/query");
const query_10 = require("./types/cosmos/group/v1/query");
const types_4 = require("./types/cosmos/group/v1/types");
const types_5 = require("./types/cosmos/group/v1/types");
const events_3 = require("./types/cosmos/group/v1/events");
const events_4 = require("./types/cosmos/group/v1/events");
const query_11 = require("./types/cosmos/group/v1/query");
const tx_12 = require("./types/cosmos/group/v1/tx");
const tx_13 = require("./types/cosmos/group/v1/tx");
const tx_14 = require("./types/cosmos/group/v1/tx");
const tx_15 = require("./types/cosmos/group/v1/tx");
const query_12 = require("./types/cosmos/group/v1/query");
const events_5 = require("./types/cosmos/group/v1/events");
const tx_16 = require("./types/cosmos/group/v1/tx");
const types_6 = require("./types/cosmos/group/v1/types");
const events_6 = require("./types/cosmos/group/v1/events");
const events_7 = require("./types/cosmos/group/v1/events");
const tx_17 = require("./types/cosmos/group/v1/tx");
const query_13 = require("./types/cosmos/group/v1/query");
const query_14 = require("./types/cosmos/group/v1/query");
const query_15 = require("./types/cosmos/group/v1/query");
const tx_18 = require("./types/cosmos/group/v1/tx");
const types_7 = require("./types/cosmos/group/v1/types");
const events_8 = require("./types/cosmos/group/v1/events");
const query_16 = require("./types/cosmos/group/v1/query");
const query_17 = require("./types/cosmos/group/v1/query");
const query_18 = require("./types/cosmos/group/v1/query");
const types_8 = require("./types/cosmos/group/v1/types");
const types_9 = require("./types/cosmos/group/v1/types");
const events_9 = require("./types/cosmos/group/v1/events");
const events_10 = require("./types/cosmos/group/v1/events");
const query_19 = require("./types/cosmos/group/v1/query");
const tx_19 = require("./types/cosmos/group/v1/tx");
const tx_20 = require("./types/cosmos/group/v1/tx");
const tx_21 = require("./types/cosmos/group/v1/tx");
const tx_22 = require("./types/cosmos/group/v1/tx");
const types_10 = require("./types/cosmos/group/v1/types");
const types_11 = require("./types/cosmos/group/v1/types");
const query_20 = require("./types/cosmos/group/v1/query");
const query_21 = require("./types/cosmos/group/v1/query");
const tx_23 = require("./types/cosmos/group/v1/tx");
const tx_24 = require("./types/cosmos/group/v1/tx");
const tx_25 = require("./types/cosmos/group/v1/tx");
const tx_26 = require("./types/cosmos/group/v1/tx");
const query_22 = require("./types/cosmos/group/v1/query");
const query_23 = require("./types/cosmos/group/v1/query");
const query_24 = require("./types/cosmos/group/v1/query");
const tx_27 = require("./types/cosmos/group/v1/tx");
const tx_28 = require("./types/cosmos/group/v1/tx");
const query_25 = require("./types/cosmos/group/v1/query");
const query_26 = require("./types/cosmos/group/v1/query");
const query_27 = require("./types/cosmos/group/v1/query");
const query_28 = require("./types/cosmos/group/v1/query");
const msgTypes = [
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse", tx_1.MsgUpdateGroupPolicyMetadataResponse],
    ["/cosmos.group.v1.Member", types_1.Member],
    ["/cosmos.group.v1.MsgCreateGroupResponse", tx_2.MsgCreateGroupResponse],
    ["/cosmos.group.v1.MsgCreateGroupPolicyResponse", tx_3.MsgCreateGroupPolicyResponse],
    ["/cosmos.group.v1.MsgExecResponse", tx_4.MsgExecResponse],
    ["/cosmos.group.v1.EventCreateGroup", events_1.EventCreateGroup],
    ["/cosmos.group.v1.EventCreateGroupPolicy", events_2.EventCreateGroupPolicy],
    ["/cosmos.group.v1.QueryGroupMembersResponse", query_1.QueryGroupMembersResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminRequest", query_2.QueryGroupPoliciesByAdminRequest],
    ["/cosmos.group.v1.QueryGroupsResponse", query_3.QueryGroupsResponse],
    ["/cosmos.group.v1.QueryGroupsByMemberRequest", query_4.QueryGroupsByMemberRequest],
    ["/cosmos.group.v1.MsgCreateGroup", tx_5.MsgCreateGroup],
    ["/cosmos.group.v1.MemberRequest", types_2.MemberRequest],
    ["/cosmos.group.v1.Vote", types_3.Vote],
    ["/cosmos.group.v1.QueryGroupPolicyInfoResponse", query_5.QueryGroupPolicyInfoResponse],
    ["/cosmos.group.v1.QueryGroupsByAdminRequest", query_6.QueryGroupsByAdminRequest],
    ["/cosmos.group.v1.QueryProposalRequest", query_7.QueryProposalRequest],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse", tx_6.MsgUpdateGroupPolicyAdminResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", tx_7.MsgUpdateGroupPolicyMetadata],
    ["/cosmos.group.v1.MsgExec", tx_8.MsgExec],
    ["/cosmos.group.v1.MsgLeaveGroupResponse", tx_9.MsgLeaveGroupResponse],
    ["/cosmos.group.v1.MsgVoteResponse", tx_10.MsgVoteResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMembers", tx_11.MsgUpdateGroupMembers],
    ["/cosmos.group.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupResponse", query_8.QueryGroupPoliciesByGroupResponse],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyRequest", query_9.QueryProposalsByGroupPolicyRequest],
    ["/cosmos.group.v1.QueryVotesByProposalResponse", query_10.QueryVotesByProposalResponse],
    ["/cosmos.group.v1.GroupPolicyInfo", types_4.GroupPolicyInfo],
    ["/cosmos.group.v1.Proposal", types_5.Proposal],
    ["/cosmos.group.v1.EventSubmitProposal", events_3.EventSubmitProposal],
    ["/cosmos.group.v1.EventLeaveGroup", events_4.EventLeaveGroup],
    ["/cosmos.group.v1.QueryGroupInfoRequest", query_11.QueryGroupInfoRequest],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicyResponse", tx_12.MsgCreateGroupWithPolicyResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse", tx_13.MsgUpdateGroupPolicyDecisionPolicyResponse],
    ["/cosmos.group.v1.MsgWithdrawProposalResponse", tx_14.MsgWithdrawProposalResponse],
    ["/cosmos.group.v1.MsgVote", tx_15.MsgVote],
    ["/cosmos.group.v1.QueryProposalResponse", query_12.QueryProposalResponse],
    ["/cosmos.group.v1.EventProposalPruned", events_5.EventProposalPruned],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", tx_16.MsgUpdateGroupPolicyDecisionPolicy],
    ["/cosmos.group.v1.PercentageDecisionPolicy", types_6.PercentageDecisionPolicy],
    ["/cosmos.group.v1.EventVote", events_6.EventVote],
    ["/cosmos.group.v1.EventExec", events_7.EventExec],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicy", tx_17.MsgCreateGroupWithPolicy],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupRequest", query_13.QueryGroupPoliciesByGroupRequest],
    ["/cosmos.group.v1.QueryVoteByProposalVoterResponse", query_14.QueryVoteByProposalVoterResponse],
    ["/cosmos.group.v1.QueryTallyResultResponse", query_15.QueryTallyResultResponse],
    ["/cosmos.group.v1.MsgUpdateGroupAdmin", tx_18.MsgUpdateGroupAdmin],
    ["/cosmos.group.v1.ThresholdDecisionPolicy", types_7.ThresholdDecisionPolicy],
    ["/cosmos.group.v1.EventUpdateGroupPolicy", events_8.EventUpdateGroupPolicy],
    ["/cosmos.group.v1.QueryVotesByVoterResponse", query_16.QueryVotesByVoterResponse],
    ["/cosmos.group.v1.QueryTallyResultRequest", query_17.QueryTallyResultRequest],
    ["/cosmos.group.v1.QueryGroupsRequest", query_18.QueryGroupsRequest],
    ["/cosmos.group.v1.GroupMember", types_8.GroupMember],
    ["/cosmos.group.v1.TallyResult", types_9.TallyResult],
    ["/cosmos.group.v1.EventUpdateGroup", events_9.EventUpdateGroup],
    ["/cosmos.group.v1.EventWithdrawProposal", events_10.EventWithdrawProposal],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyResponse", query_19.QueryProposalsByGroupPolicyResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMetadataResponse", tx_19.MsgUpdateGroupMetadataResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", tx_20.MsgUpdateGroupPolicyAdmin],
    ["/cosmos.group.v1.MsgWithdrawProposal", tx_21.MsgWithdrawProposal],
    ["/cosmos.group.v1.MsgSubmitProposal", tx_22.MsgSubmitProposal],
    ["/cosmos.group.v1.DecisionPolicyWindows", types_10.DecisionPolicyWindows],
    ["/cosmos.group.v1.GroupInfo", types_11.GroupInfo],
    ["/cosmos.group.v1.QueryGroupInfoResponse", query_20.QueryGroupInfoResponse],
    ["/cosmos.group.v1.QueryVotesByVoterRequest", query_21.QueryVotesByVoterRequest],
    ["/cosmos.group.v1.MsgLeaveGroup", tx_23.MsgLeaveGroup],
    ["/cosmos.group.v1.MsgUpdateGroupAdminResponse", tx_24.MsgUpdateGroupAdminResponse],
    ["/cosmos.group.v1.MsgSubmitProposalResponse", tx_25.MsgSubmitProposalResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMetadata", tx_26.MsgUpdateGroupMetadata],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminResponse", query_22.QueryGroupPoliciesByAdminResponse],
    ["/cosmos.group.v1.QueryVoteByProposalVoterRequest", query_23.QueryVoteByProposalVoterRequest],
    ["/cosmos.group.v1.QueryGroupsByMemberResponse", query_24.QueryGroupsByMemberResponse],
    ["/cosmos.group.v1.MsgUpdateGroupMembersResponse", tx_27.MsgUpdateGroupMembersResponse],
    ["/cosmos.group.v1.MsgCreateGroupPolicy", tx_28.MsgCreateGroupPolicy],
    ["/cosmos.group.v1.QueryGroupsByAdminResponse", query_25.QueryGroupsByAdminResponse],
    ["/cosmos.group.v1.QueryGroupPolicyInfoRequest", query_26.QueryGroupPolicyInfoRequest],
    ["/cosmos.group.v1.QueryGroupMembersRequest", query_27.QueryGroupMembersRequest],
    ["/cosmos.group.v1.QueryVotesByProposalRequest", query_28.QueryVotesByProposalRequest],
];
exports.msgTypes = msgTypes;
