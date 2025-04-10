"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/gov/v1/query");
const gov_1 = require("./types/cosmos/gov/v1/gov");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const query_2 = require("./types/cosmos/gov/v1/query");
const query_3 = require("./types/cosmos/gov/v1/query");
const tx_1 = require("./types/cosmos/gov/v1/tx");
const query_4 = require("./types/cosmos/gov/v1/query");
const query_5 = require("./types/cosmos/gov/v1/query");
const query_6 = require("./types/cosmos/gov/v1/query");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const query_7 = require("./types/cosmos/gov/v1/query");
const query_8 = require("./types/cosmos/gov/v1/query");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const query_9 = require("./types/cosmos/gov/v1/query");
const query_10 = require("./types/cosmos/gov/v1/query");
const query_11 = require("./types/cosmos/gov/v1/query");
const query_12 = require("./types/cosmos/gov/v1/query");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const query_13 = require("./types/cosmos/gov/v1/query");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const query_14 = require("./types/cosmos/gov/v1/query");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const query_15 = require("./types/cosmos/gov/v1/query");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const query_16 = require("./types/cosmos/gov/v1/query");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const query_17 = require("./types/cosmos/gov/v1/query");
const query_18 = require("./types/cosmos/gov/v1/query");
const msgTypes = [
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_1.QueryConstitutionRequest],
    ["/cosmos.gov.v1.DepositParams", gov_1.DepositParams],
    ["/cosmos.gov.v1.VotingParams", gov_2.VotingParams],
    ["/cosmos.gov.v1.TallyParams", gov_3.TallyParams],
    ["/cosmos.gov.v1.QueryVotesResponse", query_2.QueryVotesResponse],
    ["/cosmos.gov.v1.QueryParamsResponse", query_3.QueryParamsResponse],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_1.MsgSubmitProposal],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_4.QueryProposalsRequest],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_5.QueryDepositsResponse],
    ["/cosmos.gov.v1.QueryVotesRequest", query_6.QueryVotesRequest],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_2.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.MsgDeposit", tx_3.MsgDeposit],
    ["/cosmos.gov.v1.QueryVoteRequest", query_7.QueryVoteRequest],
    ["/cosmos.gov.v1.QueryDepositRequest", query_8.QueryDepositRequest],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/cosmos.gov.v1.QueryParamsRequest", query_9.QueryParamsRequest],
    ["/cosmos.gov.v1.QueryDepositsRequest", query_10.QueryDepositsRequest],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_11.QueryProposalsResponse],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_12.QueryTallyResultRequest],
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_5.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.Deposit", gov_4.Deposit],
    ["/cosmos.gov.v1.TallyResult", gov_5.TallyResult],
    ["/cosmos.gov.v1.QueryProposalResponse", query_13.QueryProposalResponse],
    ["/cosmos.gov.v1.MsgVote", tx_6.MsgVote],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_7.MsgVoteWeighted],
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_14.QueryConstitutionResponse],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_8.MsgDepositResponse],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_9.MsgCancelProposal],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_10.MsgCancelProposalResponse],
    ["/cosmos.gov.v1.Vote", gov_6.Vote],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_11.MsgExecLegacyContent],
    ["/cosmos.gov.v1.QueryVoteResponse", query_15.QueryVoteResponse],
    ["/cosmos.gov.v1.Proposal", gov_7.Proposal],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_8.WeightedVoteOption],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_12.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_13.MsgVoteResponse],
    ["/cosmos.gov.v1.QueryDepositResponse", query_16.QueryDepositResponse],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_14.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.Params", gov_9.Params],
    ["/cosmos.gov.v1.QueryProposalRequest", query_17.QueryProposalRequest],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_18.QueryTallyResultResponse],
];
exports.msgTypes = msgTypes;
