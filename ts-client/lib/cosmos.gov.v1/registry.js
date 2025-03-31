"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/gov/v1/tx");
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const gov_1 = require("./types/cosmos/gov/v1/gov");
const query_1 = require("./types/cosmos/gov/v1/query");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const query_2 = require("./types/cosmos/gov/v1/query");
const query_3 = require("./types/cosmos/gov/v1/query");
const query_4 = require("./types/cosmos/gov/v1/query");
const query_5 = require("./types/cosmos/gov/v1/query");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const query_6 = require("./types/cosmos/gov/v1/query");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const query_7 = require("./types/cosmos/gov/v1/query");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const query_8 = require("./types/cosmos/gov/v1/query");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const query_9 = require("./types/cosmos/gov/v1/query");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const query_10 = require("./types/cosmos/gov/v1/query");
const query_11 = require("./types/cosmos/gov/v1/query");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const query_12 = require("./types/cosmos/gov/v1/query");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const query_13 = require("./types/cosmos/gov/v1/query");
const query_14 = require("./types/cosmos/gov/v1/query");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const query_15 = require("./types/cosmos/gov/v1/query");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const query_16 = require("./types/cosmos/gov/v1/query");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const query_17 = require("./types/cosmos/gov/v1/query");
const query_18 = require("./types/cosmos/gov/v1/query");
const msgTypes = [
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_1.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.gov.v1.Deposit", gov_1.Deposit],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_1.QueryTallyResultResponse],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_2.MsgSubmitProposal],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_2.QueryDepositsResponse],
    ["/cosmos.gov.v1.QueryVotesResponse", query_3.QueryVotesResponse],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_4.QueryProposalsResponse],
    ["/cosmos.gov.v1.QueryDepositRequest", query_5.QueryDepositRequest],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_3.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_4.MsgDepositResponse],
    ["/cosmos.gov.v1.VotingParams", gov_2.VotingParams],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_6.QueryProposalsRequest],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_5.MsgCancelProposalResponse],
    ["/cosmos.gov.v1.QueryDepositResponse", query_7.QueryDepositResponse],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_6.MsgUpdateParams],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_8.QueryConstitutionResponse],
    ["/cosmos.gov.v1.MsgVote", tx_7.MsgVote],
    ["/cosmos.gov.v1.MsgDeposit", tx_8.MsgDeposit],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_9.MsgCancelProposal],
    ["/cosmos.gov.v1.QueryParamsRequest", query_9.QueryParamsRequest],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_10.MsgVoteWeighted],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_11.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.DepositParams", gov_3.DepositParams],
    ["/cosmos.gov.v1.QueryProposalResponse", query_10.QueryProposalResponse],
    ["/cosmos.gov.v1.QueryVoteResponse", query_11.QueryVoteResponse],
    ["/cosmos.gov.v1.TallyResult", gov_4.TallyResult],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_12.MsgExecLegacyContent],
    ["/cosmos.gov.v1.QueryProposalRequest", query_12.QueryProposalRequest],
    ["/cosmos.gov.v1.Proposal", gov_5.Proposal],
    ["/cosmos.gov.v1.QueryVoteRequest", query_13.QueryVoteRequest],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_14.QueryTallyResultRequest],
    ["/cosmos.gov.v1.TallyParams", gov_6.TallyParams],
    ["/cosmos.gov.v1.QueryParamsResponse", query_15.QueryParamsResponse],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_13.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_7.WeightedVoteOption],
    ["/cosmos.gov.v1.Params", gov_8.Params],
    ["/cosmos.gov.v1.QueryVotesRequest", query_16.QueryVotesRequest],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_14.MsgVoteResponse],
    ["/cosmos.gov.v1.Vote", gov_9.Vote],
    ["/cosmos.gov.v1.QueryDepositsRequest", query_17.QueryDepositsRequest],
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_18.QueryConstitutionRequest],
];
exports.msgTypes = msgTypes;
