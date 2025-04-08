"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/gov/v1/tx");
const gov_1 = require("./types/cosmos/gov/v1/gov");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const query_1 = require("./types/cosmos/gov/v1/query");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const query_2 = require("./types/cosmos/gov/v1/query");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const query_3 = require("./types/cosmos/gov/v1/query");
const query_4 = require("./types/cosmos/gov/v1/query");
const query_5 = require("./types/cosmos/gov/v1/query");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const query_6 = require("./types/cosmos/gov/v1/query");
const query_7 = require("./types/cosmos/gov/v1/query");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const query_8 = require("./types/cosmos/gov/v1/query");
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const query_9 = require("./types/cosmos/gov/v1/query");
const query_10 = require("./types/cosmos/gov/v1/query");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const query_11 = require("./types/cosmos/gov/v1/query");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const query_12 = require("./types/cosmos/gov/v1/query");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const query_13 = require("./types/cosmos/gov/v1/query");
const query_14 = require("./types/cosmos/gov/v1/query");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const query_15 = require("./types/cosmos/gov/v1/query");
const query_16 = require("./types/cosmos/gov/v1/query");
const query_17 = require("./types/cosmos/gov/v1/query");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const query_18 = require("./types/cosmos/gov/v1/query");
const msgTypes = [
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_1.MsgExecLegacyContent],
    ["/cosmos.gov.v1.TallyParams", gov_1.TallyParams],
    ["/cosmos.gov.v1.Params", gov_2.Params],
    ["/cosmos.gov.v1.VotingParams", gov_3.VotingParams],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_1.QueryDepositsResponse],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_2.MsgCancelProposal],
    ["/cosmos.gov.v1.QueryParamsRequest", query_2.QueryParamsRequest],
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_3.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_4.MsgVoteResponse],
    ["/cosmos.gov.v1.QueryVotesResponse", query_3.QueryVotesResponse],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_4.QueryProposalsRequest],
    ["/cosmos.gov.v1.QueryDepositResponse", query_5.QueryDepositResponse],
    ["/cosmos.gov.v1.TallyResult", gov_4.TallyResult],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_5.MsgVoteWeighted],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_6.MsgDepositResponse],
    ["/cosmos.gov.v1.QueryVoteResponse", query_6.QueryVoteResponse],
    ["/cosmos.gov.v1.QueryDepositsRequest", query_7.QueryDepositsRequest],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_7.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.QueryVoteRequest", query_8.QueryVoteRequest],
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.gov.v1.QueryVotesRequest", query_9.QueryVotesRequest],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_10.QueryTallyResultResponse],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_5.WeightedVoteOption],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_8.MsgSubmitProposal],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_9.MsgCancelProposalResponse],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_11.QueryTallyResultRequest],
    ["/cosmos.gov.v1.Deposit", gov_6.Deposit],
    ["/cosmos.gov.v1.QueryParamsResponse", query_12.QueryParamsResponse],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_10.MsgUpdateParams],
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_13.QueryConstitutionRequest],
    ["/cosmos.gov.v1.QueryProposalRequest", query_14.QueryProposalRequest],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_11.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.MsgVote", tx_12.MsgVote],
    ["/cosmos.gov.v1.DepositParams", gov_7.DepositParams],
    ["/cosmos.gov.v1.MsgDeposit", tx_13.MsgDeposit],
    ["/cosmos.gov.v1.Vote", gov_8.Vote],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_14.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_15.QueryConstitutionResponse],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_16.QueryProposalsResponse],
    ["/cosmos.gov.v1.QueryDepositRequest", query_17.QueryDepositRequest],
    ["/cosmos.gov.v1.Proposal", gov_9.Proposal],
    ["/cosmos.gov.v1.QueryProposalResponse", query_18.QueryProposalResponse],
];
exports.msgTypes = msgTypes;
