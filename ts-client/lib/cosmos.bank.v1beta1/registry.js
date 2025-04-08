"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const bank_1 = require("./types/cosmos/bank/v1beta1/bank");
const query_1 = require("./types/cosmos/bank/v1beta1/query");
const tx_1 = require("./types/cosmos/bank/v1beta1/tx");
const genesis_1 = require("./types/cosmos/bank/v1beta1/genesis");
const query_2 = require("./types/cosmos/bank/v1beta1/query");
const query_3 = require("./types/cosmos/bank/v1beta1/query");
const query_4 = require("./types/cosmos/bank/v1beta1/query");
const query_5 = require("./types/cosmos/bank/v1beta1/query");
const tx_2 = require("./types/cosmos/bank/v1beta1/tx");
const genesis_2 = require("./types/cosmos/bank/v1beta1/genesis");
const bank_2 = require("./types/cosmos/bank/v1beta1/bank");
const query_6 = require("./types/cosmos/bank/v1beta1/query");
const bank_3 = require("./types/cosmos/bank/v1beta1/bank");
const bank_4 = require("./types/cosmos/bank/v1beta1/bank");
const query_7 = require("./types/cosmos/bank/v1beta1/query");
const tx_3 = require("./types/cosmos/bank/v1beta1/tx");
const authz_1 = require("./types/cosmos/bank/v1beta1/authz");
const bank_5 = require("./types/cosmos/bank/v1beta1/bank");
const bank_6 = require("./types/cosmos/bank/v1beta1/bank");
const tx_4 = require("./types/cosmos/bank/v1beta1/tx");
const query_8 = require("./types/cosmos/bank/v1beta1/query");
const query_9 = require("./types/cosmos/bank/v1beta1/query");
const tx_5 = require("./types/cosmos/bank/v1beta1/tx");
const query_10 = require("./types/cosmos/bank/v1beta1/query");
const tx_6 = require("./types/cosmos/bank/v1beta1/tx");
const tx_7 = require("./types/cosmos/bank/v1beta1/tx");
const query_11 = require("./types/cosmos/bank/v1beta1/query");
const query_12 = require("./types/cosmos/bank/v1beta1/query");
const query_13 = require("./types/cosmos/bank/v1beta1/query");
const query_14 = require("./types/cosmos/bank/v1beta1/query");
const query_15 = require("./types/cosmos/bank/v1beta1/query");
const tx_8 = require("./types/cosmos/bank/v1beta1/tx");
const bank_7 = require("./types/cosmos/bank/v1beta1/bank");
const query_16 = require("./types/cosmos/bank/v1beta1/query");
const query_17 = require("./types/cosmos/bank/v1beta1/query");
const query_18 = require("./types/cosmos/bank/v1beta1/query");
const query_19 = require("./types/cosmos/bank/v1beta1/query");
const query_20 = require("./types/cosmos/bank/v1beta1/query");
const query_21 = require("./types/cosmos/bank/v1beta1/query");
const query_22 = require("./types/cosmos/bank/v1beta1/query");
const query_23 = require("./types/cosmos/bank/v1beta1/query");
const query_24 = require("./types/cosmos/bank/v1beta1/query");
const query_25 = require("./types/cosmos/bank/v1beta1/query");
const query_26 = require("./types/cosmos/bank/v1beta1/query");
const query_27 = require("./types/cosmos/bank/v1beta1/query");
const msgTypes = [
    ["/cosmos.bank.v1beta1.Output", bank_1.Output],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesResponse", query_1.QuerySpendableBalancesResponse],
    ["/cosmos.bank.v1beta1.MsgUpdateParamsResponse", tx_1.MsgUpdateParamsResponse],
    ["/cosmos.bank.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataResponse", query_2.QueryDenomsMetadataResponse],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse", query_3.QuerySpendableBalanceByDenomResponse],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataRequest", query_4.QueryDenomMetadataRequest],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersResponse", query_5.QueryDenomOwnersResponse],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabledResponse", tx_2.MsgSetSendEnabledResponse],
    ["/cosmos.bank.v1beta1.Balance", genesis_2.Balance],
    ["/cosmos.bank.v1beta1.Input", bank_2.Input],
    ["/cosmos.bank.v1beta1.QueryAllBalancesResponse", query_6.QueryAllBalancesResponse],
    ["/cosmos.bank.v1beta1.Supply", bank_3.Supply],
    ["/cosmos.bank.v1beta1.Metadata", bank_4.Metadata],
    ["/cosmos.bank.v1beta1.QuerySendEnabledRequest", query_7.QuerySendEnabledRequest],
    ["/cosmos.bank.v1beta1.MsgSend", tx_3.MsgSend],
    ["/cosmos.bank.v1beta1.SendAuthorization", authz_1.SendAuthorization],
    ["/cosmos.bank.v1beta1.Params", bank_5.Params],
    ["/cosmos.bank.v1beta1.DenomUnit", bank_6.DenomUnit],
    ["/cosmos.bank.v1beta1.MsgSendResponse", tx_4.MsgSendResponse],
    ["/cosmos.bank.v1beta1.QuerySupplyOfResponse", query_8.QuerySupplyOfResponse],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataRequest", query_9.QueryDenomsMetadataRequest],
    ["/cosmos.bank.v1beta1.MsgUpdateParams", tx_5.MsgUpdateParams],
    ["/cosmos.bank.v1beta1.QueryParamsRequest", query_10.QueryParamsRequest],
    ["/cosmos.bank.v1beta1.MsgMultiSendResponse", tx_6.MsgMultiSendResponse],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabled", tx_7.MsgSetSendEnabled],
    ["/cosmos.bank.v1beta1.QueryBalanceResponse", query_11.QueryBalanceResponse],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest", query_12.QueryDenomMetadataByQueryStringRequest],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyRequest", query_13.QueryTotalSupplyRequest],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataResponse", query_14.QueryDenomMetadataResponse],
    ["/cosmos.bank.v1beta1.DenomOwner", query_15.DenomOwner],
    ["/cosmos.bank.v1beta1.MsgMultiSend", tx_8.MsgMultiSend],
    ["/cosmos.bank.v1beta1.SendEnabled", bank_7.SendEnabled],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse", query_16.QueryDenomMetadataByQueryStringResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest", query_17.QueryDenomOwnersByQueryRequest],
    ["/cosmos.bank.v1beta1.QuerySupplyOfRequest", query_18.QuerySupplyOfRequest],
    ["/cosmos.bank.v1beta1.QueryParamsResponse", query_19.QueryParamsResponse],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyResponse", query_20.QueryTotalSupplyResponse],
    ["/cosmos.bank.v1beta1.QueryAllBalancesRequest", query_21.QueryAllBalancesRequest],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest", query_22.QuerySpendableBalanceByDenomRequest],
    ["/cosmos.bank.v1beta1.QueryBalanceRequest", query_23.QueryBalanceRequest],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersRequest", query_24.QueryDenomOwnersRequest],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse", query_25.QueryDenomOwnersByQueryResponse],
    ["/cosmos.bank.v1beta1.QuerySendEnabledResponse", query_26.QuerySendEnabledResponse],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesRequest", query_27.QuerySpendableBalancesRequest],
];
exports.msgTypes = msgTypes;
