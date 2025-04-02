"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/gov/v1/query");
const query_2 = require("./types/cosmos/gov/v1/query");
const query_3 = require("./types/cosmos/gov/v1/query");
const gov_1 = require("./types/cosmos/gov/v1/gov");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const query_4 = require("./types/cosmos/gov/v1/query");
const tx_1 = require("./types/cosmos/gov/v1/tx");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const query_5 = require("./types/cosmos/gov/v1/query");
const query_6 = require("./types/cosmos/gov/v1/query");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const query_7 = require("./types/cosmos/gov/v1/query");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const query_8 = require("./types/cosmos/gov/v1/query");
const query_9 = require("./types/cosmos/gov/v1/query");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const query_10 = require("./types/cosmos/gov/v1/query");
const query_11 = require("./types/cosmos/gov/v1/query");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const query_12 = require("./types/cosmos/gov/v1/query");
const query_13 = require("./types/cosmos/gov/v1/query");
const query_14 = require("./types/cosmos/gov/v1/query");
const query_15 = require("./types/cosmos/gov/v1/query");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const query_16 = require("./types/cosmos/gov/v1/query");
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const query_17 = require("./types/cosmos/gov/v1/query");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const query_18 = require("./types/cosmos/gov/v1/query");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const msgTypes = [
    ["/cosmos.gov.v1.QueryDepositsRequest", query_1.QueryDepositsRequest],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_2.QueryProposalsRequest],
    ["/cosmos.gov.v1.QueryParamsRequest", query_3.QueryParamsRequest],
    ["/cosmos.gov.v1.TallyResult", gov_1.TallyResult],
    ["/cosmos.gov.v1.Params", gov_2.Params],
    ["/cosmos.gov.v1.Vote", gov_3.Vote],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_4.QueryProposalsResponse],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_1.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.Deposit", gov_4.Deposit],
    ["/cosmos.gov.v1.QueryVoteResponse", query_5.QueryVoteResponse],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_6.QueryTallyResultResponse],
    ["/cosmos.gov.v1.MsgDeposit", tx_2.MsgDeposit],
    ["/cosmos.gov.v1.Proposal", gov_5.Proposal],
    ["/cosmos.gov.v1.QueryVotesRequest", query_7.QueryVotesRequest],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_3.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_4.MsgCancelProposal],
    ["/cosmos.gov.v1.QueryVotesResponse", query_8.QueryVotesResponse],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_9.QueryDepositsResponse],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_5.MsgDepositResponse],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_6.WeightedVoteOption],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_10.QueryTallyResultRequest],
    ["/cosmos.gov.v1.QueryVoteRequest", query_11.QueryVoteRequest],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_6.MsgSubmitProposal],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_7.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.QueryDepositRequest", query_12.QueryDepositRequest],
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_13.QueryConstitutionRequest],
    ["/cosmos.gov.v1.QueryProposalRequest", query_14.QueryProposalRequest],
    ["/cosmos.gov.v1.QueryDepositResponse", query_15.QueryDepositResponse],
    ["/cosmos.gov.v1.TallyParams", gov_7.TallyParams],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_8.MsgVoteResponse],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_9.MsgCancelProposalResponse],
    ["/cosmos.gov.v1.VotingParams", gov_8.VotingParams],
    ["/cosmos.gov.v1.QueryProposalResponse", query_16.QueryProposalResponse],
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.gov.v1.DepositParams", gov_9.DepositParams],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_10.MsgExecLegacyContent],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_17.QueryConstitutionResponse],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_11.MsgUpdateParams],
    ["/cosmos.gov.v1.QueryParamsResponse", query_18.QueryParamsResponse],
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_12.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.MsgVote", tx_13.MsgVote],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_14.MsgVoteWeighted],
];
exports.msgTypes = msgTypes;
