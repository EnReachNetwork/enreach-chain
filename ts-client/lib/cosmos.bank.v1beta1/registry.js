"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/bank/v1beta1/query");
const query_2 = require("./types/cosmos/bank/v1beta1/query");
const query_3 = require("./types/cosmos/bank/v1beta1/query");
const query_4 = require("./types/cosmos/bank/v1beta1/query");
const tx_1 = require("./types/cosmos/bank/v1beta1/tx");
const query_5 = require("./types/cosmos/bank/v1beta1/query");
const query_6 = require("./types/cosmos/bank/v1beta1/query");
const genesis_1 = require("./types/cosmos/bank/v1beta1/genesis");
const tx_2 = require("./types/cosmos/bank/v1beta1/tx");
const tx_3 = require("./types/cosmos/bank/v1beta1/tx");
const bank_1 = require("./types/cosmos/bank/v1beta1/bank");
const query_7 = require("./types/cosmos/bank/v1beta1/query");
const query_8 = require("./types/cosmos/bank/v1beta1/query");
const query_9 = require("./types/cosmos/bank/v1beta1/query");
const query_10 = require("./types/cosmos/bank/v1beta1/query");
const query_11 = require("./types/cosmos/bank/v1beta1/query");
const tx_4 = require("./types/cosmos/bank/v1beta1/tx");
const query_12 = require("./types/cosmos/bank/v1beta1/query");
const tx_5 = require("./types/cosmos/bank/v1beta1/tx");
const query_13 = require("./types/cosmos/bank/v1beta1/query");
const query_14 = require("./types/cosmos/bank/v1beta1/query");
const authz_1 = require("./types/cosmos/bank/v1beta1/authz");
const bank_2 = require("./types/cosmos/bank/v1beta1/bank");
const query_15 = require("./types/cosmos/bank/v1beta1/query");
const query_16 = require("./types/cosmos/bank/v1beta1/query");
const query_17 = require("./types/cosmos/bank/v1beta1/query");
const tx_6 = require("./types/cosmos/bank/v1beta1/tx");
const bank_3 = require("./types/cosmos/bank/v1beta1/bank");
const bank_4 = require("./types/cosmos/bank/v1beta1/bank");
const query_18 = require("./types/cosmos/bank/v1beta1/query");
const query_19 = require("./types/cosmos/bank/v1beta1/query");
const query_20 = require("./types/cosmos/bank/v1beta1/query");
const query_21 = require("./types/cosmos/bank/v1beta1/query");
const tx_7 = require("./types/cosmos/bank/v1beta1/tx");
const query_22 = require("./types/cosmos/bank/v1beta1/query");
const query_23 = require("./types/cosmos/bank/v1beta1/query");
const bank_5 = require("./types/cosmos/bank/v1beta1/bank");
const bank_6 = require("./types/cosmos/bank/v1beta1/bank");
const bank_7 = require("./types/cosmos/bank/v1beta1/bank");
const query_24 = require("./types/cosmos/bank/v1beta1/query");
const query_25 = require("./types/cosmos/bank/v1beta1/query");
const genesis_2 = require("./types/cosmos/bank/v1beta1/genesis");
const query_26 = require("./types/cosmos/bank/v1beta1/query");
const tx_8 = require("./types/cosmos/bank/v1beta1/tx");
const query_27 = require("./types/cosmos/bank/v1beta1/query");
const msgTypes = [
    ["/cosmos.bank.v1beta1.QueryAllBalancesResponse", query_1.QueryAllBalancesResponse],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse", query_2.QuerySpendableBalanceByDenomResponse],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataRequest", query_3.QueryDenomMetadataRequest],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersResponse", query_4.QueryDenomOwnersResponse],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabled", tx_1.MsgSetSendEnabled],
    ["/cosmos.bank.v1beta1.QueryAllBalancesRequest", query_5.QueryAllBalancesRequest],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse", query_6.QueryDenomMetadataByQueryStringResponse],
    ["/cosmos.bank.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.bank.v1beta1.MsgSendResponse", tx_2.MsgSendResponse],
    ["/cosmos.bank.v1beta1.MsgMultiSendResponse", tx_3.MsgMultiSendResponse],
    ["/cosmos.bank.v1beta1.Supply", bank_1.Supply],
    ["/cosmos.bank.v1beta1.QueryBalanceRequest", query_7.QueryBalanceRequest],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesRequest", query_8.QuerySpendableBalancesRequest],
    ["/cosmos.bank.v1beta1.QueryParamsResponse", query_9.QueryParamsResponse],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataResponse", query_10.QueryDenomMetadataResponse],
    ["/cosmos.bank.v1beta1.QuerySendEnabledResponse", query_11.QuerySendEnabledResponse],
    ["/cosmos.bank.v1beta1.MsgMultiSend", tx_4.MsgMultiSend],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest", query_12.QueryDenomOwnersByQueryRequest],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabledResponse", tx_5.MsgSetSendEnabledResponse],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesResponse", query_13.QuerySpendableBalancesResponse],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataRequest", query_14.QueryDenomsMetadataRequest],
    ["/cosmos.bank.v1beta1.SendAuthorization", authz_1.SendAuthorization],
    ["/cosmos.bank.v1beta1.Metadata", bank_2.Metadata],
    ["/cosmos.bank.v1beta1.QueryParamsRequest", query_15.QueryParamsRequest],
    ["/cosmos.bank.v1beta1.DenomOwner", query_16.DenomOwner],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse", query_17.QueryDenomOwnersByQueryResponse],
    ["/cosmos.bank.v1beta1.MsgSend", tx_6.MsgSend],
    ["/cosmos.bank.v1beta1.Params", bank_3.Params],
    ["/cosmos.bank.v1beta1.SendEnabled", bank_4.SendEnabled],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest", query_18.QuerySpendableBalanceByDenomRequest],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyRequest", query_19.QueryTotalSupplyRequest],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataResponse", query_20.QueryDenomsMetadataResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersRequest", query_21.QueryDenomOwnersRequest],
    ["/cosmos.bank.v1beta1.MsgUpdateParamsResponse", tx_7.MsgUpdateParamsResponse],
    ["/cosmos.bank.v1beta1.QueryBalanceResponse", query_22.QueryBalanceResponse],
    ["/cosmos.bank.v1beta1.QuerySupplyOfResponse", query_23.QuerySupplyOfResponse],
    ["/cosmos.bank.v1beta1.Output", bank_5.Output],
    ["/cosmos.bank.v1beta1.DenomUnit", bank_6.DenomUnit],
    ["/cosmos.bank.v1beta1.Input", bank_7.Input],
    ["/cosmos.bank.v1beta1.QuerySendEnabledRequest", query_24.QuerySendEnabledRequest],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyResponse", query_25.QueryTotalSupplyResponse],
    ["/cosmos.bank.v1beta1.Balance", genesis_2.Balance],
    ["/cosmos.bank.v1beta1.QuerySupplyOfRequest", query_26.QuerySupplyOfRequest],
    ["/cosmos.bank.v1beta1.MsgUpdateParams", tx_8.MsgUpdateParams],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest", query_27.QueryDenomMetadataByQueryStringRequest],
];
exports.msgTypes = msgTypes;
