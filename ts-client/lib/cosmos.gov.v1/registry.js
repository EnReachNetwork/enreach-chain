"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const gov_1 = require("./types/cosmos/gov/v1/gov");
const tx_1 = require("./types/cosmos/gov/v1/tx");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const query_1 = require("./types/cosmos/gov/v1/query");
const query_2 = require("./types/cosmos/gov/v1/query");
const query_3 = require("./types/cosmos/gov/v1/query");
const query_4 = require("./types/cosmos/gov/v1/query");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const query_5 = require("./types/cosmos/gov/v1/query");
const query_6 = require("./types/cosmos/gov/v1/query");
const query_7 = require("./types/cosmos/gov/v1/query");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const query_8 = require("./types/cosmos/gov/v1/query");
const query_9 = require("./types/cosmos/gov/v1/query");
const query_10 = require("./types/cosmos/gov/v1/query");
const query_11 = require("./types/cosmos/gov/v1/query");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const query_12 = require("./types/cosmos/gov/v1/query");
const query_13 = require("./types/cosmos/gov/v1/query");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const query_14 = require("./types/cosmos/gov/v1/query");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const query_15 = require("./types/cosmos/gov/v1/query");
const query_16 = require("./types/cosmos/gov/v1/query");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const query_17 = require("./types/cosmos/gov/v1/query");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const query_18 = require("./types/cosmos/gov/v1/query");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const msgTypes = [
    ["/cosmos.gov.v1.TallyResult", gov_1.TallyResult],
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_1.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.TallyParams", gov_2.TallyParams],
    ["/cosmos.gov.v1.QueryVoteRequest", query_1.QueryVoteRequest],
    ["/cosmos.gov.v1.QueryParamsRequest", query_2.QueryParamsRequest],
    ["/cosmos.gov.v1.QueryProposalRequest", query_3.QueryProposalRequest],
    ["/cosmos.gov.v1.QueryDepositResponse", query_4.QueryDepositResponse],
    ["/cosmos.gov.v1.Vote", gov_3.Vote],
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_2.MsgSubmitProposal],
    ["/cosmos.gov.v1.MsgVote", tx_3.MsgVote],
    ["/cosmos.gov.v1.MsgDeposit", tx_4.MsgDeposit],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_5.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.QueryProposalResponse", query_5.QueryProposalResponse],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_6.QueryProposalsResponse],
    ["/cosmos.gov.v1.QueryVoteResponse", query_7.QueryVoteResponse],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_4.WeightedVoteOption],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_6.MsgVoteWeighted],
    ["/cosmos.gov.v1.QueryParamsResponse", query_8.QueryParamsResponse],
    ["/cosmos.gov.v1.QueryDepositsRequest", query_9.QueryDepositsRequest],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_10.QueryDepositsResponse],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_11.QueryTallyResultResponse],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_7.MsgUpdateParams],
    ["/cosmos.gov.v1.Params", gov_5.Params],
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_12.QueryConstitutionRequest],
    ["/cosmos.gov.v1.QueryDepositRequest", query_13.QueryDepositRequest],
    ["/cosmos.gov.v1.VotingParams", gov_6.VotingParams],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_8.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_9.MsgDepositResponse],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_14.QueryProposalsRequest],
    ["/cosmos.gov.v1.Deposit", gov_7.Deposit],
    ["/cosmos.gov.v1.QueryVotesRequest", query_15.QueryVotesRequest],
    ["/cosmos.gov.v1.QueryVotesResponse", query_16.QueryVotesResponse],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_10.MsgExecLegacyContent],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_11.MsgVoteResponse],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_17.QueryTallyResultRequest],
    ["/cosmos.gov.v1.DepositParams", gov_8.DepositParams],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_18.QueryConstitutionResponse],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_12.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.Proposal", gov_9.Proposal],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_13.MsgCancelProposal],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_14.MsgCancelProposalResponse],
];
exports.msgTypes = msgTypes;
