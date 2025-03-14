"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/bank/v1beta1/query");
const query_2 = require("./types/cosmos/bank/v1beta1/query");
const query_3 = require("./types/cosmos/bank/v1beta1/query");
const query_4 = require("./types/cosmos/bank/v1beta1/query");
const query_5 = require("./types/cosmos/bank/v1beta1/query");
const query_6 = require("./types/cosmos/bank/v1beta1/query");
const query_7 = require("./types/cosmos/bank/v1beta1/query");
const query_8 = require("./types/cosmos/bank/v1beta1/query");
const query_9 = require("./types/cosmos/bank/v1beta1/query");
const tx_1 = require("./types/cosmos/bank/v1beta1/tx");
const authz_1 = require("./types/cosmos/bank/v1beta1/authz");
const query_10 = require("./types/cosmos/bank/v1beta1/query");
const query_11 = require("./types/cosmos/bank/v1beta1/query");
const query_12 = require("./types/cosmos/bank/v1beta1/query");
const tx_2 = require("./types/cosmos/bank/v1beta1/tx");
const tx_3 = require("./types/cosmos/bank/v1beta1/tx");
const bank_1 = require("./types/cosmos/bank/v1beta1/bank");
const bank_2 = require("./types/cosmos/bank/v1beta1/bank");
const query_13 = require("./types/cosmos/bank/v1beta1/query");
const genesis_1 = require("./types/cosmos/bank/v1beta1/genesis");
const tx_4 = require("./types/cosmos/bank/v1beta1/tx");
const bank_3 = require("./types/cosmos/bank/v1beta1/bank");
const bank_4 = require("./types/cosmos/bank/v1beta1/bank");
const query_14 = require("./types/cosmos/bank/v1beta1/query");
const query_15 = require("./types/cosmos/bank/v1beta1/query");
const bank_5 = require("./types/cosmos/bank/v1beta1/bank");
const query_16 = require("./types/cosmos/bank/v1beta1/query");
const query_17 = require("./types/cosmos/bank/v1beta1/query");
const query_18 = require("./types/cosmos/bank/v1beta1/query");
const tx_5 = require("./types/cosmos/bank/v1beta1/tx");
const bank_6 = require("./types/cosmos/bank/v1beta1/bank");
const query_19 = require("./types/cosmos/bank/v1beta1/query");
const tx_6 = require("./types/cosmos/bank/v1beta1/tx");
const tx_7 = require("./types/cosmos/bank/v1beta1/tx");
const query_20 = require("./types/cosmos/bank/v1beta1/query");
const query_21 = require("./types/cosmos/bank/v1beta1/query");
const query_22 = require("./types/cosmos/bank/v1beta1/query");
const tx_8 = require("./types/cosmos/bank/v1beta1/tx");
const query_23 = require("./types/cosmos/bank/v1beta1/query");
const query_24 = require("./types/cosmos/bank/v1beta1/query");
const query_25 = require("./types/cosmos/bank/v1beta1/query");
const bank_7 = require("./types/cosmos/bank/v1beta1/bank");
const query_26 = require("./types/cosmos/bank/v1beta1/query");
const query_27 = require("./types/cosmos/bank/v1beta1/query");
const genesis_2 = require("./types/cosmos/bank/v1beta1/genesis");
const msgTypes = [
    ["/cosmos.bank.v1beta1.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest", query_2.QueryDenomOwnersByQueryRequest],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesRequest", query_3.QuerySpendableBalancesRequest],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesResponse", query_4.QuerySpendableBalancesResponse],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse", query_5.QueryDenomMetadataByQueryStringResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersResponse", query_6.QueryDenomOwnersResponse],
    ["/cosmos.bank.v1beta1.QueryAllBalancesRequest", query_7.QueryAllBalancesRequest],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse", query_8.QuerySpendableBalanceByDenomResponse],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest", query_9.QuerySpendableBalanceByDenomRequest],
    ["/cosmos.bank.v1beta1.MsgMultiSendResponse", tx_1.MsgMultiSendResponse],
    ["/cosmos.bank.v1beta1.SendAuthorization", authz_1.SendAuthorization],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataResponse", query_10.QueryDenomsMetadataResponse],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyResponse", query_11.QueryTotalSupplyResponse],
    ["/cosmos.bank.v1beta1.QuerySendEnabledResponse", query_12.QuerySendEnabledResponse],
    ["/cosmos.bank.v1beta1.MsgSendResponse", tx_2.MsgSendResponse],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabledResponse", tx_3.MsgSetSendEnabledResponse],
    ["/cosmos.bank.v1beta1.DenomUnit", bank_1.DenomUnit],
    ["/cosmos.bank.v1beta1.Output", bank_2.Output],
    ["/cosmos.bank.v1beta1.QuerySendEnabledRequest", query_13.QuerySendEnabledRequest],
    ["/cosmos.bank.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.bank.v1beta1.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/cosmos.bank.v1beta1.Metadata", bank_3.Metadata],
    ["/cosmos.bank.v1beta1.SendEnabled", bank_4.SendEnabled],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataRequest", query_14.QueryDenomMetadataRequest],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse", query_15.QueryDenomOwnersByQueryResponse],
    ["/cosmos.bank.v1beta1.Params", bank_5.Params],
    ["/cosmos.bank.v1beta1.QueryBalanceRequest", query_16.QueryBalanceRequest],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataRequest", query_17.QueryDenomsMetadataRequest],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest", query_18.QueryDenomMetadataByQueryStringRequest],
    ["/cosmos.bank.v1beta1.MsgMultiSend", tx_5.MsgMultiSend],
    ["/cosmos.bank.v1beta1.Input", bank_6.Input],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataResponse", query_19.QueryDenomMetadataResponse],
    ["/cosmos.bank.v1beta1.MsgSend", tx_6.MsgSend],
    ["/cosmos.bank.v1beta1.MsgUpdateParamsResponse", tx_7.MsgUpdateParamsResponse],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyRequest", query_20.QueryTotalSupplyRequest],
    ["/cosmos.bank.v1beta1.QueryBalanceResponse", query_21.QueryBalanceResponse],
    ["/cosmos.bank.v1beta1.DenomOwner", query_22.DenomOwner],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabled", tx_8.MsgSetSendEnabled],
    ["/cosmos.bank.v1beta1.QuerySupplyOfRequest", query_23.QuerySupplyOfRequest],
    ["/cosmos.bank.v1beta1.QuerySupplyOfResponse", query_24.QuerySupplyOfResponse],
    ["/cosmos.bank.v1beta1.QueryParamsResponse", query_25.QueryParamsResponse],
    ["/cosmos.bank.v1beta1.Supply", bank_7.Supply],
    ["/cosmos.bank.v1beta1.QueryAllBalancesResponse", query_26.QueryAllBalancesResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersRequest", query_27.QueryDenomOwnersRequest],
    ["/cosmos.bank.v1beta1.Balance", genesis_2.Balance],
];
exports.msgTypes = msgTypes;
