"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/bank/v1beta1/query");
const query_2 = require("./types/cosmos/bank/v1beta1/query");
const genesis_1 = require("./types/cosmos/bank/v1beta1/genesis");
const authz_1 = require("./types/cosmos/bank/v1beta1/authz");
const query_3 = require("./types/cosmos/bank/v1beta1/query");
const query_4 = require("./types/cosmos/bank/v1beta1/query");
const query_5 = require("./types/cosmos/bank/v1beta1/query");
const tx_1 = require("./types/cosmos/bank/v1beta1/tx");
const query_6 = require("./types/cosmos/bank/v1beta1/query");
const query_7 = require("./types/cosmos/bank/v1beta1/query");
const tx_2 = require("./types/cosmos/bank/v1beta1/tx");
const query_8 = require("./types/cosmos/bank/v1beta1/query");
const tx_3 = require("./types/cosmos/bank/v1beta1/tx");
const query_9 = require("./types/cosmos/bank/v1beta1/query");
const query_10 = require("./types/cosmos/bank/v1beta1/query");
const query_11 = require("./types/cosmos/bank/v1beta1/query");
const genesis_2 = require("./types/cosmos/bank/v1beta1/genesis");
const query_12 = require("./types/cosmos/bank/v1beta1/query");
const query_13 = require("./types/cosmos/bank/v1beta1/query");
const query_14 = require("./types/cosmos/bank/v1beta1/query");
const tx_4 = require("./types/cosmos/bank/v1beta1/tx");
const bank_1 = require("./types/cosmos/bank/v1beta1/bank");
const query_15 = require("./types/cosmos/bank/v1beta1/query");
const query_16 = require("./types/cosmos/bank/v1beta1/query");
const tx_5 = require("./types/cosmos/bank/v1beta1/tx");
const bank_2 = require("./types/cosmos/bank/v1beta1/bank");
const bank_3 = require("./types/cosmos/bank/v1beta1/bank");
const bank_4 = require("./types/cosmos/bank/v1beta1/bank");
const bank_5 = require("./types/cosmos/bank/v1beta1/bank");
const bank_6 = require("./types/cosmos/bank/v1beta1/bank");
const tx_6 = require("./types/cosmos/bank/v1beta1/tx");
const query_17 = require("./types/cosmos/bank/v1beta1/query");
const query_18 = require("./types/cosmos/bank/v1beta1/query");
const query_19 = require("./types/cosmos/bank/v1beta1/query");
const query_20 = require("./types/cosmos/bank/v1beta1/query");
const tx_7 = require("./types/cosmos/bank/v1beta1/tx");
const query_21 = require("./types/cosmos/bank/v1beta1/query");
const query_22 = require("./types/cosmos/bank/v1beta1/query");
const query_23 = require("./types/cosmos/bank/v1beta1/query");
const tx_8 = require("./types/cosmos/bank/v1beta1/tx");
const query_24 = require("./types/cosmos/bank/v1beta1/query");
const query_25 = require("./types/cosmos/bank/v1beta1/query");
const bank_7 = require("./types/cosmos/bank/v1beta1/bank");
const query_26 = require("./types/cosmos/bank/v1beta1/query");
const query_27 = require("./types/cosmos/bank/v1beta1/query");
const msgTypes = [
    ["/cosmos.bank.v1beta1.QueryAllBalancesResponse", query_1.QueryAllBalancesResponse],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyResponse", query_2.QueryTotalSupplyResponse],
    ["/cosmos.bank.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.bank.v1beta1.SendAuthorization", authz_1.SendAuthorization],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataResponse", query_3.QueryDenomsMetadataResponse],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest", query_4.QueryDenomMetadataByQueryStringRequest],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest", query_5.QueryDenomOwnersByQueryRequest],
    ["/cosmos.bank.v1beta1.MsgMultiSendResponse", tx_1.MsgMultiSendResponse],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyRequest", query_6.QueryTotalSupplyRequest],
    ["/cosmos.bank.v1beta1.DenomOwner", query_7.DenomOwner],
    ["/cosmos.bank.v1beta1.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/cosmos.bank.v1beta1.QueryParamsRequest", query_8.QueryParamsRequest],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabledResponse", tx_3.MsgSetSendEnabledResponse],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesRequest", query_9.QuerySpendableBalancesRequest],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse", query_10.QuerySpendableBalanceByDenomResponse],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataRequest", query_11.QueryDenomsMetadataRequest],
    ["/cosmos.bank.v1beta1.Balance", genesis_2.Balance],
    ["/cosmos.bank.v1beta1.QueryParamsResponse", query_12.QueryParamsResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse", query_13.QueryDenomOwnersByQueryResponse],
    ["/cosmos.bank.v1beta1.QuerySendEnabledResponse", query_14.QuerySendEnabledResponse],
    ["/cosmos.bank.v1beta1.MsgMultiSend", tx_4.MsgMultiSend],
    ["/cosmos.bank.v1beta1.DenomUnit", bank_1.DenomUnit],
    ["/cosmos.bank.v1beta1.QueryBalanceRequest", query_15.QueryBalanceRequest],
    ["/cosmos.bank.v1beta1.QuerySendEnabledRequest", query_16.QuerySendEnabledRequest],
    ["/cosmos.bank.v1beta1.MsgSendResponse", tx_5.MsgSendResponse],
    ["/cosmos.bank.v1beta1.Input", bank_2.Input],
    ["/cosmos.bank.v1beta1.Output", bank_3.Output],
    ["/cosmos.bank.v1beta1.Supply", bank_4.Supply],
    ["/cosmos.bank.v1beta1.Params", bank_5.Params],
    ["/cosmos.bank.v1beta1.SendEnabled", bank_6.SendEnabled],
    ["/cosmos.bank.v1beta1.MsgUpdateParams", tx_6.MsgUpdateParams],
    ["/cosmos.bank.v1beta1.QuerySupplyOfRequest", query_17.QuerySupplyOfRequest],
    ["/cosmos.bank.v1beta1.QueryBalanceResponse", query_18.QueryBalanceResponse],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataResponse", query_19.QueryDenomMetadataResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersRequest", query_20.QueryDenomOwnersRequest],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabled", tx_7.MsgSetSendEnabled],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesResponse", query_21.QuerySpendableBalancesResponse],
    ["/cosmos.bank.v1beta1.QuerySupplyOfResponse", query_22.QuerySupplyOfResponse],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataRequest", query_23.QueryDenomMetadataRequest],
    ["/cosmos.bank.v1beta1.MsgSend", tx_8.MsgSend],
    ["/cosmos.bank.v1beta1.QueryAllBalancesRequest", query_24.QueryAllBalancesRequest],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse", query_25.QueryDenomMetadataByQueryStringResponse],
    ["/cosmos.bank.v1beta1.Metadata", bank_7.Metadata],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest", query_26.QuerySpendableBalanceByDenomRequest],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersResponse", query_27.QueryDenomOwnersResponse],
];
exports.msgTypes = msgTypes;
