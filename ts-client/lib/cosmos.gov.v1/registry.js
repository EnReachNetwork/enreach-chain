"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/gov/v1/tx");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const query_1 = require("./types/cosmos/gov/v1/query");
const query_2 = require("./types/cosmos/gov/v1/query");
const gov_1 = require("./types/cosmos/gov/v1/gov");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const query_3 = require("./types/cosmos/gov/v1/query");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const query_4 = require("./types/cosmos/gov/v1/query");
const query_5 = require("./types/cosmos/gov/v1/query");
const query_6 = require("./types/cosmos/gov/v1/query");
const query_7 = require("./types/cosmos/gov/v1/query");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const query_8 = require("./types/cosmos/gov/v1/query");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const query_9 = require("./types/cosmos/gov/v1/query");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const query_10 = require("./types/cosmos/gov/v1/query");
const query_11 = require("./types/cosmos/gov/v1/query");
const query_12 = require("./types/cosmos/gov/v1/query");
const query_13 = require("./types/cosmos/gov/v1/query");
const query_14 = require("./types/cosmos/gov/v1/query");
const query_15 = require("./types/cosmos/gov/v1/query");
const query_16 = require("./types/cosmos/gov/v1/query");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const query_17 = require("./types/cosmos/gov/v1/query");
const query_18 = require("./types/cosmos/gov/v1/query");
const msgTypes = [
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_1.MsgSubmitProposal],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_2.MsgExecLegacyContent],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_3.MsgDepositResponse],
    ["/cosmos.gov.v1.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_2.QueryDepositsResponse],
    ["/cosmos.gov.v1.Proposal", gov_1.Proposal],
    ["/cosmos.gov.v1.TallyResult", gov_2.TallyResult],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_3.QueryProposalsRequest],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_4.MsgVoteResponse],
    ["/cosmos.gov.v1.Vote", gov_3.Vote],
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_4.QueryConstitutionResponse],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_5.QueryProposalsResponse],
    ["/cosmos.gov.v1.QueryParamsRequest", query_6.QueryParamsRequest],
    ["/cosmos.gov.v1.QueryVoteResponse", query_7.QueryVoteResponse],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_5.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.Deposit", gov_4.Deposit],
    ["/cosmos.gov.v1.QueryProposalRequest", query_8.QueryProposalRequest],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_6.MsgVoteWeighted],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_7.MsgCancelProposalResponse],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_8.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.MsgDeposit", tx_9.MsgDeposit],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_10.MsgCancelProposal],
    ["/cosmos.gov.v1.DepositParams", gov_5.DepositParams],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_11.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.MsgVote", tx_12.MsgVote],
    ["/cosmos.gov.v1.TallyParams", gov_6.TallyParams],
    ["/cosmos.gov.v1.QueryDepositRequest", query_9.QueryDepositRequest],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_13.MsgUpdateParams],
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_10.QueryConstitutionRequest],
    ["/cosmos.gov.v1.QueryProposalResponse", query_11.QueryProposalResponse],
    ["/cosmos.gov.v1.QueryVotesRequest", query_12.QueryVotesRequest],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_13.QueryTallyResultRequest],
    ["/cosmos.gov.v1.QueryVoteRequest", query_14.QueryVoteRequest],
    ["/cosmos.gov.v1.QueryVotesResponse", query_15.QueryVotesResponse],
    ["/cosmos.gov.v1.QueryDepositResponse", query_16.QueryDepositResponse],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_7.WeightedVoteOption],
    ["/cosmos.gov.v1.Params", gov_8.Params],
    ["/cosmos.gov.v1.VotingParams", gov_9.VotingParams],
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_14.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_17.QueryTallyResultResponse],
    ["/cosmos.gov.v1.QueryDepositsRequest", query_18.QueryDepositsRequest],
];
exports.msgTypes = msgTypes;
