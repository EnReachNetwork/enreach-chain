"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const events_1 = require("./types/cosmos/group/v1/events");
const tx_1 = require("./types/cosmos/group/v1/tx");
const tx_2 = require("./types/cosmos/group/v1/tx");
const genesis_1 = require("./types/cosmos/group/v1/genesis");
const query_1 = require("./types/cosmos/group/v1/query");
const query_2 = require("./types/cosmos/group/v1/query");
const query_3 = require("./types/cosmos/group/v1/query");
const events_2 = require("./types/cosmos/group/v1/events");
const types_1 = require("./types/cosmos/group/v1/types");
const tx_3 = require("./types/cosmos/group/v1/tx");
const tx_4 = require("./types/cosmos/group/v1/tx");
const query_4 = require("./types/cosmos/group/v1/query");
const query_5 = require("./types/cosmos/group/v1/query");
const query_6 = require("./types/cosmos/group/v1/query");
const tx_5 = require("./types/cosmos/group/v1/tx");
const tx_6 = require("./types/cosmos/group/v1/tx");
const tx_7 = require("./types/cosmos/group/v1/tx");
const query_7 = require("./types/cosmos/group/v1/query");
const tx_8 = require("./types/cosmos/group/v1/tx");
const types_2 = require("./types/cosmos/group/v1/types");
const tx_9 = require("./types/cosmos/group/v1/tx");
const types_3 = require("./types/cosmos/group/v1/types");
const types_4 = require("./types/cosmos/group/v1/types");
const query_8 = require("./types/cosmos/group/v1/query");
const tx_10 = require("./types/cosmos/group/v1/tx");
const tx_11 = require("./types/cosmos/group/v1/tx");
const query_9 = require("./types/cosmos/group/v1/query");
const events_3 = require("./types/cosmos/group/v1/events");
const tx_12 = require("./types/cosmos/group/v1/tx");
const types_5 = require("./types/cosmos/group/v1/types");
const types_6 = require("./types/cosmos/group/v1/types");
const query_10 = require("./types/cosmos/group/v1/query");
const query_11 = require("./types/cosmos/group/v1/query");
const query_12 = require("./types/cosmos/group/v1/query");
const types_7 = require("./types/cosmos/group/v1/types");
const query_13 = require("./types/cosmos/group/v1/query");
const tx_13 = require("./types/cosmos/group/v1/tx");
const events_4 = require("./types/cosmos/group/v1/events");
const events_5 = require("./types/cosmos/group/v1/events");
const tx_14 = require("./types/cosmos/group/v1/tx");
const query_14 = require("./types/cosmos/group/v1/query");
const query_15 = require("./types/cosmos/group/v1/query");
const query_16 = require("./types/cosmos/group/v1/query");
const tx_15 = require("./types/cosmos/group/v1/tx");
const tx_16 = require("./types/cosmos/group/v1/tx");
const tx_17 = require("./types/cosmos/group/v1/tx");
const tx_18 = require("./types/cosmos/group/v1/tx");
const query_17 = require("./types/cosmos/group/v1/query");
const events_6 = require("./types/cosmos/group/v1/events");
const query_18 = require("./types/cosmos/group/v1/query");
const tx_19 = require("./types/cosmos/group/v1/tx");
const types_8 = require("./types/cosmos/group/v1/types");
const events_7 = require("./types/cosmos/group/v1/events");
const types_9 = require("./types/cosmos/group/v1/types");
const tx_20 = require("./types/cosmos/group/v1/tx");
const tx_21 = require("./types/cosmos/group/v1/tx");
const events_8 = require("./types/cosmos/group/v1/events");
const tx_22 = require("./types/cosmos/group/v1/tx");
const events_9 = require("./types/cosmos/group/v1/events");
const tx_23 = require("./types/cosmos/group/v1/tx");
const types_10 = require("./types/cosmos/group/v1/types");
const query_19 = require("./types/cosmos/group/v1/query");
const query_20 = require("./types/cosmos/group/v1/query");
const query_21 = require("./types/cosmos/group/v1/query");
const tx_24 = require("./types/cosmos/group/v1/tx");
const tx_25 = require("./types/cosmos/group/v1/tx");
const types_11 = require("./types/cosmos/group/v1/types");
const query_22 = require("./types/cosmos/group/v1/query");
const query_23 = require("./types/cosmos/group/v1/query");
const tx_26 = require("./types/cosmos/group/v1/tx");
const tx_27 = require("./types/cosmos/group/v1/tx");
const query_24 = require("./types/cosmos/group/v1/query");
const query_25 = require("./types/cosmos/group/v1/query");
const query_26 = require("./types/cosmos/group/v1/query");
const query_27 = require("./types/cosmos/group/v1/query");
const events_10 = require("./types/cosmos/group/v1/events");
const query_28 = require("./types/cosmos/group/v1/query");
const tx_28 = require("./types/cosmos/group/v1/tx");
const msgTypes = [
    ["/cosmos.group.v1.EventExec", events_1.EventExec],
    ["/cosmos.group.v1.MsgCreateGroup", tx_1.MsgCreateGroup],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse", tx_2.MsgUpdateGroupPolicyAdminResponse],
    ["/cosmos.group.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.group.v1.QueryProposalRequest", query_1.QueryProposalRequest],
    ["/cosmos.group.v1.QueryTallyResultResponse", query_2.QueryTallyResultResponse],
    ["/cosmos.group.v1.QueryGroupInfoResponse", query_3.QueryGroupInfoResponse],
    ["/cosmos.group.v1.EventCreateGroupPolicy", events_2.EventCreateGroupPolicy],
    ["/cosmos.group.v1.PercentageDecisionPolicy", types_1.PercentageDecisionPolicy],
    ["/cosmos.group.v1.MsgCreateGroupPolicy", tx_3.MsgCreateGroupPolicy],
    ["/cosmos.group.v1.MsgExec", tx_4.MsgExec],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyRequest", query_4.QueryProposalsByGroupPolicyRequest],
    ["/cosmos.group.v1.QueryVotesByProposalRequest", query_5.QueryVotesByProposalRequest],
    ["/cosmos.group.v1.QueryGroupsByMemberRequest", query_6.QueryGroupsByMemberRequest],
    ["/cosmos.group.v1.MsgUpdateGroupMembersResponse", tx_5.MsgUpdateGroupMembersResponse],
    ["/cosmos.group.v1.MsgCreateGroupPolicyResponse", tx_6.MsgCreateGroupPolicyResponse],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicyResponse", tx_7.MsgCreateGroupWithPolicyResponse],
    ["/cosmos.group.v1.QueryGroupPolicyInfoResponse", query_7.QueryGroupPolicyInfoResponse],
    ["/cosmos.group.v1.MsgCreateGroupWithPolicy", tx_8.MsgCreateGroupWithPolicy],
    ["/cosmos.group.v1.Proposal", types_2.Proposal],
    ["/cosmos.group.v1.MsgWithdrawProposal", tx_9.MsgWithdrawProposal],
    ["/cosmos.group.v1.GroupInfo", types_3.GroupInfo],
    ["/cosmos.group.v1.Member", types_4.Member],
    ["/cosmos.group.v1.QueryProposalsByGroupPolicyResponse", query_8.QueryProposalsByGroupPolicyResponse],
    ["/cosmos.group.v1.MsgSubmitProposalResponse", tx_10.MsgSubmitProposalResponse],
    ["/cosmos.group.v1.MsgLeaveGroup", tx_11.MsgLeaveGroup],
    ["/cosmos.group.v1.QueryTallyResultRequest", query_9.QueryTallyResultRequest],
    ["/cosmos.group.v1.EventLeaveGroup", events_3.EventLeaveGroup],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse", tx_12.MsgUpdateGroupPolicyMetadataResponse],
    ["/cosmos.group.v1.ThresholdDecisionPolicy", types_5.ThresholdDecisionPolicy],
    ["/cosmos.group.v1.GroupPolicyInfo", types_6.GroupPolicyInfo],
    ["/cosmos.group.v1.QueryGroupsByAdminRequest", query_10.QueryGroupsByAdminRequest],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminRequest", query_11.QueryGroupPoliciesByAdminRequest],
    ["/cosmos.group.v1.QueryGroupPoliciesByAdminResponse", query_12.QueryGroupPoliciesByAdminResponse],
    ["/cosmos.group.v1.DecisionPolicyWindows", types_7.DecisionPolicyWindows],
    ["/cosmos.group.v1.QueryVotesByVoterRequest", query_13.QueryVotesByVoterRequest],
    ["/cosmos.group.v1.MsgUpdateGroupMetadata", tx_13.MsgUpdateGroupMetadata],
    ["/cosmos.group.v1.EventUpdateGroupPolicy", events_4.EventUpdateGroupPolicy],
    ["/cosmos.group.v1.EventVote", events_5.EventVote],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", tx_14.MsgUpdateGroupPolicyMetadata],
    ["/cosmos.group.v1.QueryGroupPolicyInfoRequest", query_14.QueryGroupPolicyInfoRequest],
    ["/cosmos.group.v1.QueryProposalResponse", query_15.QueryProposalResponse],
    ["/cosmos.group.v1.QueryVotesByProposalResponse", query_16.QueryVotesByProposalResponse],
    ["/cosmos.group.v1.MsgVoteResponse", tx_15.MsgVoteResponse],
    ["/cosmos.group.v1.MsgUpdateGroupAdminResponse", tx_16.MsgUpdateGroupAdminResponse],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", tx_17.MsgUpdateGroupPolicyAdmin],
    ["/cosmos.group.v1.MsgWithdrawProposalResponse", tx_18.MsgWithdrawProposalResponse],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupResponse", query_17.QueryGroupPoliciesByGroupResponse],
    ["/cosmos.group.v1.EventSubmitProposal", events_6.EventSubmitProposal],
    ["/cosmos.group.v1.QueryGroupMembersRequest", query_18.QueryGroupMembersRequest],
    ["/cosmos.group.v1.MsgUpdateGroupMetadataResponse", tx_19.MsgUpdateGroupMetadataResponse],
    ["/cosmos.group.v1.Vote", types_8.Vote],
    ["/cosmos.group.v1.EventWithdrawProposal", events_7.EventWithdrawProposal],
    ["/cosmos.group.v1.TallyResult", types_9.TallyResult],
    ["/cosmos.group.v1.MsgUpdateGroupAdmin", tx_20.MsgUpdateGroupAdmin],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", tx_21.MsgUpdateGroupPolicyDecisionPolicy],
    ["/cosmos.group.v1.EventCreateGroup", events_8.EventCreateGroup],
    ["/cosmos.group.v1.MsgSubmitProposal", tx_22.MsgSubmitProposal],
    ["/cosmos.group.v1.EventProposalPruned", events_9.EventProposalPruned],
    ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse", tx_23.MsgUpdateGroupPolicyDecisionPolicyResponse],
    ["/cosmos.group.v1.MemberRequest", types_10.MemberRequest],
    ["/cosmos.group.v1.QueryGroupPoliciesByGroupRequest", query_19.QueryGroupPoliciesByGroupRequest],
    ["/cosmos.group.v1.QueryGroupsRequest", query_20.QueryGroupsRequest],
    ["/cosmos.group.v1.QueryGroupsResponse", query_21.QueryGroupsResponse],
    ["/cosmos.group.v1.MsgVote", tx_24.MsgVote],
    ["/cosmos.group.v1.MsgLeaveGroupResponse", tx_25.MsgLeaveGroupResponse],
    ["/cosmos.group.v1.GroupMember", types_11.GroupMember],
    ["/cosmos.group.v1.QueryGroupMembersResponse", query_22.QueryGroupMembersResponse],
    ["/cosmos.group.v1.QueryVoteByProposalVoterRequest", query_23.QueryVoteByProposalVoterRequest],
    ["/cosmos.group.v1.MsgUpdateGroupMembers", tx_26.MsgUpdateGroupMembers],
    ["/cosmos.group.v1.MsgCreateGroupResponse", tx_27.MsgCreateGroupResponse],
    ["/cosmos.group.v1.QueryVoteByProposalVoterResponse", query_24.QueryVoteByProposalVoterResponse],
    ["/cosmos.group.v1.QueryGroupsByMemberResponse", query_25.QueryGroupsByMemberResponse],
    ["/cosmos.group.v1.QueryGroupInfoRequest", query_26.QueryGroupInfoRequest],
    ["/cosmos.group.v1.QueryGroupsByAdminResponse", query_27.QueryGroupsByAdminResponse],
    ["/cosmos.group.v1.EventUpdateGroup", events_10.EventUpdateGroup],
    ["/cosmos.group.v1.QueryVotesByVoterResponse", query_28.QueryVotesByVoterResponse],
    ["/cosmos.group.v1.MsgExecResponse", tx_28.MsgExecResponse],
];
exports.msgTypes = msgTypes;
