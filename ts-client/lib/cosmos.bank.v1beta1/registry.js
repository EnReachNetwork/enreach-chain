"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/bank/v1beta1/tx");
const authz_1 = require("./types/cosmos/bank/v1beta1/authz");
const query_1 = require("./types/cosmos/bank/v1beta1/query");
const query_2 = require("./types/cosmos/bank/v1beta1/query");
const query_3 = require("./types/cosmos/bank/v1beta1/query");
const bank_1 = require("./types/cosmos/bank/v1beta1/bank");
const genesis_1 = require("./types/cosmos/bank/v1beta1/genesis");
const query_4 = require("./types/cosmos/bank/v1beta1/query");
const query_5 = require("./types/cosmos/bank/v1beta1/query");
const genesis_2 = require("./types/cosmos/bank/v1beta1/genesis");
const tx_2 = require("./types/cosmos/bank/v1beta1/tx");
const query_6 = require("./types/cosmos/bank/v1beta1/query");
const query_7 = require("./types/cosmos/bank/v1beta1/query");
const query_8 = require("./types/cosmos/bank/v1beta1/query");
const query_9 = require("./types/cosmos/bank/v1beta1/query");
const query_10 = require("./types/cosmos/bank/v1beta1/query");
const query_11 = require("./types/cosmos/bank/v1beta1/query");
const query_12 = require("./types/cosmos/bank/v1beta1/query");
const bank_2 = require("./types/cosmos/bank/v1beta1/bank");
const tx_3 = require("./types/cosmos/bank/v1beta1/tx");
const tx_4 = require("./types/cosmos/bank/v1beta1/tx");
const query_13 = require("./types/cosmos/bank/v1beta1/query");
const query_14 = require("./types/cosmos/bank/v1beta1/query");
const bank_3 = require("./types/cosmos/bank/v1beta1/bank");
const query_15 = require("./types/cosmos/bank/v1beta1/query");
const query_16 = require("./types/cosmos/bank/v1beta1/query");
const tx_5 = require("./types/cosmos/bank/v1beta1/tx");
const query_17 = require("./types/cosmos/bank/v1beta1/query");
const query_18 = require("./types/cosmos/bank/v1beta1/query");
const bank_4 = require("./types/cosmos/bank/v1beta1/bank");
const query_19 = require("./types/cosmos/bank/v1beta1/query");
const query_20 = require("./types/cosmos/bank/v1beta1/query");
const query_21 = require("./types/cosmos/bank/v1beta1/query");
const query_22 = require("./types/cosmos/bank/v1beta1/query");
const bank_5 = require("./types/cosmos/bank/v1beta1/bank");
const tx_6 = require("./types/cosmos/bank/v1beta1/tx");
const query_23 = require("./types/cosmos/bank/v1beta1/query");
const query_24 = require("./types/cosmos/bank/v1beta1/query");
const query_25 = require("./types/cosmos/bank/v1beta1/query");
const bank_6 = require("./types/cosmos/bank/v1beta1/bank");
const tx_7 = require("./types/cosmos/bank/v1beta1/tx");
const query_26 = require("./types/cosmos/bank/v1beta1/query");
const tx_8 = require("./types/cosmos/bank/v1beta1/tx");
const query_27 = require("./types/cosmos/bank/v1beta1/query");
const bank_7 = require("./types/cosmos/bank/v1beta1/bank");
const msgTypes = [
    ["/cosmos.bank.v1beta1.MsgMultiSendResponse", tx_1.MsgMultiSendResponse],
    ["/cosmos.bank.v1beta1.SendAuthorization", authz_1.SendAuthorization],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse", query_1.QuerySpendableBalanceByDenomResponse],
    ["/cosmos.bank.v1beta1.QuerySupplyOfRequest", query_2.QuerySupplyOfRequest],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest", query_3.QueryDenomMetadataByQueryStringRequest],
    ["/cosmos.bank.v1beta1.Output", bank_1.Output],
    ["/cosmos.bank.v1beta1.Balance", genesis_1.Balance],
    ["/cosmos.bank.v1beta1.QueryBalanceResponse", query_4.QueryBalanceResponse],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyResponse", query_5.QueryTotalSupplyResponse],
    ["/cosmos.bank.v1beta1.GenesisState", genesis_2.GenesisState],
    ["/cosmos.bank.v1beta1.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesRequest", query_6.QuerySpendableBalancesRequest],
    ["/cosmos.bank.v1beta1.QuerySendEnabledRequest", query_7.QuerySendEnabledRequest],
    ["/cosmos.bank.v1beta1.QueryAllBalancesResponse", query_8.QueryAllBalancesResponse],
    ["/cosmos.bank.v1beta1.QueryParamsResponse", query_9.QueryParamsResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse", query_10.QueryDenomOwnersByQueryResponse],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataResponse", query_11.QueryDenomsMetadataResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersRequest", query_12.QueryDenomOwnersRequest],
    ["/cosmos.bank.v1beta1.SendEnabled", bank_2.SendEnabled],
    ["/cosmos.bank.v1beta1.MsgSend", tx_3.MsgSend],
    ["/cosmos.bank.v1beta1.MsgSendResponse", tx_4.MsgSendResponse],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesResponse", query_13.QuerySpendableBalancesResponse],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataResponse", query_14.QueryDenomMetadataResponse],
    ["/cosmos.bank.v1beta1.DenomUnit", bank_3.DenomUnit],
    ["/cosmos.bank.v1beta1.QueryBalanceRequest", query_15.QueryBalanceRequest],
    ["/cosmos.bank.v1beta1.QueryParamsRequest", query_16.QueryParamsRequest],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabledResponse", tx_5.MsgSetSendEnabledResponse],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyRequest", query_17.QueryTotalSupplyRequest],
    ["/cosmos.bank.v1beta1.QuerySendEnabledResponse", query_18.QuerySendEnabledResponse],
    ["/cosmos.bank.v1beta1.Params", bank_4.Params],
    ["/cosmos.bank.v1beta1.DenomOwner", query_19.DenomOwner],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest", query_20.QueryDenomOwnersByQueryRequest],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest", query_21.QuerySpendableBalanceByDenomRequest],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataRequest", query_22.QueryDenomMetadataRequest],
    ["/cosmos.bank.v1beta1.Metadata", bank_5.Metadata],
    ["/cosmos.bank.v1beta1.MsgMultiSend", tx_6.MsgMultiSend],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataRequest", query_23.QueryDenomsMetadataRequest],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersResponse", query_24.QueryDenomOwnersResponse],
    ["/cosmos.bank.v1beta1.QueryAllBalancesRequest", query_25.QueryAllBalancesRequest],
    ["/cosmos.bank.v1beta1.Input", bank_6.Input],
    ["/cosmos.bank.v1beta1.MsgUpdateParams", tx_7.MsgUpdateParams],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse", query_26.QueryDenomMetadataByQueryStringResponse],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabled", tx_8.MsgSetSendEnabled],
    ["/cosmos.bank.v1beta1.QuerySupplyOfResponse", query_27.QuerySupplyOfResponse],
    ["/cosmos.bank.v1beta1.Supply", bank_7.Supply],
];
exports.msgTypes = msgTypes;
