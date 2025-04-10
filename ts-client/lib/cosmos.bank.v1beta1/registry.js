"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/bank/v1beta1/query");
const query_2 = require("./types/cosmos/bank/v1beta1/query");
const tx_1 = require("./types/cosmos/bank/v1beta1/tx");
const query_3 = require("./types/cosmos/bank/v1beta1/query");
const genesis_1 = require("./types/cosmos/bank/v1beta1/genesis");
const bank_1 = require("./types/cosmos/bank/v1beta1/bank");
const query_4 = require("./types/cosmos/bank/v1beta1/query");
const query_5 = require("./types/cosmos/bank/v1beta1/query");
const bank_2 = require("./types/cosmos/bank/v1beta1/bank");
const tx_2 = require("./types/cosmos/bank/v1beta1/tx");
const tx_3 = require("./types/cosmos/bank/v1beta1/tx");
const bank_3 = require("./types/cosmos/bank/v1beta1/bank");
const bank_4 = require("./types/cosmos/bank/v1beta1/bank");
const query_6 = require("./types/cosmos/bank/v1beta1/query");
const query_7 = require("./types/cosmos/bank/v1beta1/query");
const query_8 = require("./types/cosmos/bank/v1beta1/query");
const query_9 = require("./types/cosmos/bank/v1beta1/query");
const bank_5 = require("./types/cosmos/bank/v1beta1/bank");
const query_10 = require("./types/cosmos/bank/v1beta1/query");
const query_11 = require("./types/cosmos/bank/v1beta1/query");
const query_12 = require("./types/cosmos/bank/v1beta1/query");
const query_13 = require("./types/cosmos/bank/v1beta1/query");
const tx_4 = require("./types/cosmos/bank/v1beta1/tx");
const authz_1 = require("./types/cosmos/bank/v1beta1/authz");
const tx_5 = require("./types/cosmos/bank/v1beta1/tx");
const genesis_2 = require("./types/cosmos/bank/v1beta1/genesis");
const query_14 = require("./types/cosmos/bank/v1beta1/query");
const query_15 = require("./types/cosmos/bank/v1beta1/query");
const query_16 = require("./types/cosmos/bank/v1beta1/query");
const tx_6 = require("./types/cosmos/bank/v1beta1/tx");
const query_17 = require("./types/cosmos/bank/v1beta1/query");
const query_18 = require("./types/cosmos/bank/v1beta1/query");
const query_19 = require("./types/cosmos/bank/v1beta1/query");
const query_20 = require("./types/cosmos/bank/v1beta1/query");
const tx_7 = require("./types/cosmos/bank/v1beta1/tx");
const bank_6 = require("./types/cosmos/bank/v1beta1/bank");
const query_21 = require("./types/cosmos/bank/v1beta1/query");
const bank_7 = require("./types/cosmos/bank/v1beta1/bank");
const query_22 = require("./types/cosmos/bank/v1beta1/query");
const tx_8 = require("./types/cosmos/bank/v1beta1/tx");
const query_23 = require("./types/cosmos/bank/v1beta1/query");
const query_24 = require("./types/cosmos/bank/v1beta1/query");
const query_25 = require("./types/cosmos/bank/v1beta1/query");
const query_26 = require("./types/cosmos/bank/v1beta1/query");
const query_27 = require("./types/cosmos/bank/v1beta1/query");
const msgTypes = [
    ["/cosmos.bank.v1beta1.QuerySupplyOfResponse", query_1.QuerySupplyOfResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersRequest", query_2.QueryDenomOwnersRequest],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabledResponse", tx_1.MsgSetSendEnabledResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse", query_3.QueryDenomOwnersByQueryResponse],
    ["/cosmos.bank.v1beta1.Balance", genesis_1.Balance],
    ["/cosmos.bank.v1beta1.Metadata", bank_1.Metadata],
    ["/cosmos.bank.v1beta1.QueryParamsRequest", query_4.QueryParamsRequest],
    ["/cosmos.bank.v1beta1.DenomOwner", query_5.DenomOwner],
    ["/cosmos.bank.v1beta1.Input", bank_2.Input],
    ["/cosmos.bank.v1beta1.MsgMultiSend", tx_2.MsgMultiSend],
    ["/cosmos.bank.v1beta1.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/cosmos.bank.v1beta1.Params", bank_3.Params],
    ["/cosmos.bank.v1beta1.Output", bank_4.Output],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse", query_6.QueryDenomMetadataByQueryStringResponse],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataResponse", query_7.QueryDenomsMetadataResponse],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest", query_8.QueryDenomMetadataByQueryStringRequest],
    ["/cosmos.bank.v1beta1.QuerySendEnabledRequest", query_9.QuerySendEnabledRequest],
    ["/cosmos.bank.v1beta1.SendEnabled", bank_5.SendEnabled],
    ["/cosmos.bank.v1beta1.QueryAllBalancesResponse", query_10.QueryAllBalancesResponse],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest", query_11.QuerySpendableBalanceByDenomRequest],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersResponse", query_12.QueryDenomOwnersResponse],
    ["/cosmos.bank.v1beta1.QueryBalanceRequest", query_13.QueryBalanceRequest],
    ["/cosmos.bank.v1beta1.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/cosmos.bank.v1beta1.SendAuthorization", authz_1.SendAuthorization],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabled", tx_5.MsgSetSendEnabled],
    ["/cosmos.bank.v1beta1.GenesisState", genesis_2.GenesisState],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyRequest", query_14.QueryTotalSupplyRequest],
    ["/cosmos.bank.v1beta1.QuerySupplyOfRequest", query_15.QuerySupplyOfRequest],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataRequest", query_16.QueryDenomMetadataRequest],
    ["/cosmos.bank.v1beta1.MsgMultiSendResponse", tx_6.MsgMultiSendResponse],
    ["/cosmos.bank.v1beta1.QueryBalanceResponse", query_17.QueryBalanceResponse],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesRequest", query_18.QuerySpendableBalancesRequest],
    ["/cosmos.bank.v1beta1.QueryParamsResponse", query_19.QueryParamsResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest", query_20.QueryDenomOwnersByQueryRequest],
    ["/cosmos.bank.v1beta1.MsgSendResponse", tx_7.MsgSendResponse],
    ["/cosmos.bank.v1beta1.Supply", bank_6.Supply],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataRequest", query_21.QueryDenomsMetadataRequest],
    ["/cosmos.bank.v1beta1.DenomUnit", bank_7.DenomUnit],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse", query_22.QuerySpendableBalanceByDenomResponse],
    ["/cosmos.bank.v1beta1.MsgSend", tx_8.MsgSend],
    ["/cosmos.bank.v1beta1.QueryAllBalancesRequest", query_23.QueryAllBalancesRequest],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyResponse", query_24.QueryTotalSupplyResponse],
    ["/cosmos.bank.v1beta1.QuerySendEnabledResponse", query_25.QuerySendEnabledResponse],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesResponse", query_26.QuerySpendableBalancesResponse],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataResponse", query_27.QueryDenomMetadataResponse],
];
exports.msgTypes = msgTypes;
