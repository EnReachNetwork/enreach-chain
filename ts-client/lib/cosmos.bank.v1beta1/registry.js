"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/bank/v1beta1/query");
const query_2 = require("./types/cosmos/bank/v1beta1/query");
const tx_1 = require("./types/cosmos/bank/v1beta1/tx");
const query_3 = require("./types/cosmos/bank/v1beta1/query");
const genesis_1 = require("./types/cosmos/bank/v1beta1/genesis");
const query_4 = require("./types/cosmos/bank/v1beta1/query");
const tx_2 = require("./types/cosmos/bank/v1beta1/tx");
const authz_1 = require("./types/cosmos/bank/v1beta1/authz");
const query_5 = require("./types/cosmos/bank/v1beta1/query");
const query_6 = require("./types/cosmos/bank/v1beta1/query");
const bank_1 = require("./types/cosmos/bank/v1beta1/bank");
const bank_2 = require("./types/cosmos/bank/v1beta1/bank");
const genesis_2 = require("./types/cosmos/bank/v1beta1/genesis");
const bank_3 = require("./types/cosmos/bank/v1beta1/bank");
const query_7 = require("./types/cosmos/bank/v1beta1/query");
const bank_4 = require("./types/cosmos/bank/v1beta1/bank");
const tx_3 = require("./types/cosmos/bank/v1beta1/tx");
const bank_5 = require("./types/cosmos/bank/v1beta1/bank");
const query_8 = require("./types/cosmos/bank/v1beta1/query");
const query_9 = require("./types/cosmos/bank/v1beta1/query");
const tx_4 = require("./types/cosmos/bank/v1beta1/tx");
const query_10 = require("./types/cosmos/bank/v1beta1/query");
const query_11 = require("./types/cosmos/bank/v1beta1/query");
const tx_5 = require("./types/cosmos/bank/v1beta1/tx");
const query_12 = require("./types/cosmos/bank/v1beta1/query");
const query_13 = require("./types/cosmos/bank/v1beta1/query");
const query_14 = require("./types/cosmos/bank/v1beta1/query");
const query_15 = require("./types/cosmos/bank/v1beta1/query");
const query_16 = require("./types/cosmos/bank/v1beta1/query");
const tx_6 = require("./types/cosmos/bank/v1beta1/tx");
const tx_7 = require("./types/cosmos/bank/v1beta1/tx");
const query_17 = require("./types/cosmos/bank/v1beta1/query");
const query_18 = require("./types/cosmos/bank/v1beta1/query");
const query_19 = require("./types/cosmos/bank/v1beta1/query");
const query_20 = require("./types/cosmos/bank/v1beta1/query");
const query_21 = require("./types/cosmos/bank/v1beta1/query");
const query_22 = require("./types/cosmos/bank/v1beta1/query");
const query_23 = require("./types/cosmos/bank/v1beta1/query");
const bank_6 = require("./types/cosmos/bank/v1beta1/bank");
const query_24 = require("./types/cosmos/bank/v1beta1/query");
const tx_8 = require("./types/cosmos/bank/v1beta1/tx");
const query_25 = require("./types/cosmos/bank/v1beta1/query");
const query_26 = require("./types/cosmos/bank/v1beta1/query");
const bank_7 = require("./types/cosmos/bank/v1beta1/bank");
const query_27 = require("./types/cosmos/bank/v1beta1/query");
const msgTypes = [
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse", query_1.QuerySpendableBalanceByDenomResponse],
    ["/cosmos.bank.v1beta1.QuerySendEnabledRequest", query_2.QuerySendEnabledRequest],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabled", tx_1.MsgSetSendEnabled],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest", query_3.QueryDenomOwnersByQueryRequest],
    ["/cosmos.bank.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.bank.v1beta1.QuerySupplyOfResponse", query_4.QuerySupplyOfResponse],
    ["/cosmos.bank.v1beta1.MsgSend", tx_2.MsgSend],
    ["/cosmos.bank.v1beta1.SendAuthorization", authz_1.SendAuthorization],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataRequest", query_5.QueryDenomMetadataRequest],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersRequest", query_6.QueryDenomOwnersRequest],
    ["/cosmos.bank.v1beta1.Supply", bank_1.Supply],
    ["/cosmos.bank.v1beta1.Input", bank_2.Input],
    ["/cosmos.bank.v1beta1.Balance", genesis_2.Balance],
    ["/cosmos.bank.v1beta1.Params", bank_3.Params],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesResponse", query_7.QuerySpendableBalancesResponse],
    ["/cosmos.bank.v1beta1.DenomUnit", bank_4.DenomUnit],
    ["/cosmos.bank.v1beta1.MsgSendResponse", tx_3.MsgSendResponse],
    ["/cosmos.bank.v1beta1.Output", bank_5.Output],
    ["/cosmos.bank.v1beta1.QueryParamsResponse", query_8.QueryParamsResponse],
    ["/cosmos.bank.v1beta1.QueryAllBalancesResponse", query_9.QueryAllBalancesResponse],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabledResponse", tx_4.MsgSetSendEnabledResponse],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyRequest", query_10.QueryTotalSupplyRequest],
    ["/cosmos.bank.v1beta1.DenomOwner", query_11.DenomOwner],
    ["/cosmos.bank.v1beta1.MsgMultiSend", tx_5.MsgMultiSend],
    ["/cosmos.bank.v1beta1.QueryAllBalancesRequest", query_12.QueryAllBalancesRequest],
    ["/cosmos.bank.v1beta1.QueryParamsRequest", query_13.QueryParamsRequest],
    ["/cosmos.bank.v1beta1.QueryBalanceRequest", query_14.QueryBalanceRequest],
    ["/cosmos.bank.v1beta1.QueryBalanceResponse", query_15.QueryBalanceResponse],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataRequest", query_16.QueryDenomsMetadataRequest],
    ["/cosmos.bank.v1beta1.MsgMultiSendResponse", tx_6.MsgMultiSendResponse],
    ["/cosmos.bank.v1beta1.MsgUpdateParamsResponse", tx_7.MsgUpdateParamsResponse],
    ["/cosmos.bank.v1beta1.QuerySupplyOfRequest", query_17.QuerySupplyOfRequest],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest", query_18.QueryDenomMetadataByQueryStringRequest],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse", query_19.QueryDenomMetadataByQueryStringResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersResponse", query_20.QueryDenomOwnersResponse],
    ["/cosmos.bank.v1beta1.QuerySendEnabledResponse", query_21.QuerySendEnabledResponse],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesRequest", query_22.QuerySpendableBalancesRequest],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyResponse", query_23.QueryTotalSupplyResponse],
    ["/cosmos.bank.v1beta1.Metadata", bank_6.Metadata],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse", query_24.QueryDenomOwnersByQueryResponse],
    ["/cosmos.bank.v1beta1.MsgUpdateParams", tx_8.MsgUpdateParams],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataResponse", query_25.QueryDenomsMetadataResponse],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataResponse", query_26.QueryDenomMetadataResponse],
    ["/cosmos.bank.v1beta1.SendEnabled", bank_7.SendEnabled],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest", query_27.QuerySpendableBalanceByDenomRequest],
];
exports.msgTypes = msgTypes;
