"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/bank/v1beta1/query");
const genesis_1 = require("./types/cosmos/bank/v1beta1/genesis");
const tx_1 = require("./types/cosmos/bank/v1beta1/tx");
const query_2 = require("./types/cosmos/bank/v1beta1/query");
const query_3 = require("./types/cosmos/bank/v1beta1/query");
const query_4 = require("./types/cosmos/bank/v1beta1/query");
const tx_2 = require("./types/cosmos/bank/v1beta1/tx");
const query_5 = require("./types/cosmos/bank/v1beta1/query");
const query_6 = require("./types/cosmos/bank/v1beta1/query");
const query_7 = require("./types/cosmos/bank/v1beta1/query");
const bank_1 = require("./types/cosmos/bank/v1beta1/bank");
const genesis_2 = require("./types/cosmos/bank/v1beta1/genesis");
const query_8 = require("./types/cosmos/bank/v1beta1/query");
const tx_3 = require("./types/cosmos/bank/v1beta1/tx");
const bank_2 = require("./types/cosmos/bank/v1beta1/bank");
const tx_4 = require("./types/cosmos/bank/v1beta1/tx");
const query_9 = require("./types/cosmos/bank/v1beta1/query");
const query_10 = require("./types/cosmos/bank/v1beta1/query");
const query_11 = require("./types/cosmos/bank/v1beta1/query");
const query_12 = require("./types/cosmos/bank/v1beta1/query");
const query_13 = require("./types/cosmos/bank/v1beta1/query");
const bank_3 = require("./types/cosmos/bank/v1beta1/bank");
const query_14 = require("./types/cosmos/bank/v1beta1/query");
const bank_4 = require("./types/cosmos/bank/v1beta1/bank");
const query_15 = require("./types/cosmos/bank/v1beta1/query");
const query_16 = require("./types/cosmos/bank/v1beta1/query");
const query_17 = require("./types/cosmos/bank/v1beta1/query");
const query_18 = require("./types/cosmos/bank/v1beta1/query");
const query_19 = require("./types/cosmos/bank/v1beta1/query");
const query_20 = require("./types/cosmos/bank/v1beta1/query");
const tx_5 = require("./types/cosmos/bank/v1beta1/tx");
const bank_5 = require("./types/cosmos/bank/v1beta1/bank");
const query_21 = require("./types/cosmos/bank/v1beta1/query");
const query_22 = require("./types/cosmos/bank/v1beta1/query");
const bank_6 = require("./types/cosmos/bank/v1beta1/bank");
const query_23 = require("./types/cosmos/bank/v1beta1/query");
const tx_6 = require("./types/cosmos/bank/v1beta1/tx");
const tx_7 = require("./types/cosmos/bank/v1beta1/tx");
const query_24 = require("./types/cosmos/bank/v1beta1/query");
const tx_8 = require("./types/cosmos/bank/v1beta1/tx");
const authz_1 = require("./types/cosmos/bank/v1beta1/authz");
const query_25 = require("./types/cosmos/bank/v1beta1/query");
const query_26 = require("./types/cosmos/bank/v1beta1/query");
const query_27 = require("./types/cosmos/bank/v1beta1/query");
const bank_7 = require("./types/cosmos/bank/v1beta1/bank");
const msgTypes = [
    ["/cosmos.bank.v1beta1.QueryDenomOwnersRequest", query_1.QueryDenomOwnersRequest],
    ["/cosmos.bank.v1beta1.Balance", genesis_1.Balance],
    ["/cosmos.bank.v1beta1.MsgMultiSendResponse", tx_1.MsgMultiSendResponse],
    ["/cosmos.bank.v1beta1.QueryParamsResponse", query_2.QueryParamsResponse],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataRequest", query_3.QueryDenomsMetadataRequest],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse", query_4.QueryDenomMetadataByQueryStringResponse],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabledResponse", tx_2.MsgSetSendEnabledResponse],
    ["/cosmos.bank.v1beta1.QueryBalanceResponse", query_5.QueryBalanceResponse],
    ["/cosmos.bank.v1beta1.QuerySupplyOfResponse", query_6.QuerySupplyOfResponse],
    ["/cosmos.bank.v1beta1.QueryAllBalancesResponse", query_7.QueryAllBalancesResponse],
    ["/cosmos.bank.v1beta1.Input", bank_1.Input],
    ["/cosmos.bank.v1beta1.GenesisState", genesis_2.GenesisState],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataResponse", query_8.QueryDenomMetadataResponse],
    ["/cosmos.bank.v1beta1.MsgMultiSend", tx_3.MsgMultiSend],
    ["/cosmos.bank.v1beta1.Output", bank_2.Output],
    ["/cosmos.bank.v1beta1.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/cosmos.bank.v1beta1.QueryBalanceRequest", query_9.QueryBalanceRequest],
    ["/cosmos.bank.v1beta1.QueryParamsRequest", query_10.QueryParamsRequest],
    ["/cosmos.bank.v1beta1.DenomOwner", query_11.DenomOwner],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest", query_12.QuerySpendableBalanceByDenomRequest],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataResponse", query_13.QueryDenomsMetadataResponse],
    ["/cosmos.bank.v1beta1.Metadata", bank_3.Metadata],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest", query_14.QueryDenomOwnersByQueryRequest],
    ["/cosmos.bank.v1beta1.DenomUnit", bank_4.DenomUnit],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesResponse", query_15.QuerySpendableBalancesResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersResponse", query_16.QueryDenomOwnersResponse],
    ["/cosmos.bank.v1beta1.QueryAllBalancesRequest", query_17.QueryAllBalancesRequest],
    ["/cosmos.bank.v1beta1.QuerySupplyOfRequest", query_18.QuerySupplyOfRequest],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyRequest", query_19.QueryTotalSupplyRequest],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest", query_20.QueryDenomMetadataByQueryStringRequest],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabled", tx_5.MsgSetSendEnabled],
    ["/cosmos.bank.v1beta1.Params", bank_5.Params],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse", query_21.QuerySpendableBalanceByDenomResponse],
    ["/cosmos.bank.v1beta1.QuerySendEnabledRequest", query_22.QuerySendEnabledRequest],
    ["/cosmos.bank.v1beta1.SendEnabled", bank_6.SendEnabled],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesRequest", query_23.QuerySpendableBalancesRequest],
    ["/cosmos.bank.v1beta1.MsgSendResponse", tx_6.MsgSendResponse],
    ["/cosmos.bank.v1beta1.MsgUpdateParams", tx_7.MsgUpdateParams],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataRequest", query_24.QueryDenomMetadataRequest],
    ["/cosmos.bank.v1beta1.MsgSend", tx_8.MsgSend],
    ["/cosmos.bank.v1beta1.SendAuthorization", authz_1.SendAuthorization],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyResponse", query_25.QueryTotalSupplyResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse", query_26.QueryDenomOwnersByQueryResponse],
    ["/cosmos.bank.v1beta1.QuerySendEnabledResponse", query_27.QuerySendEnabledResponse],
    ["/cosmos.bank.v1beta1.Supply", bank_7.Supply],
];
exports.msgTypes = msgTypes;
