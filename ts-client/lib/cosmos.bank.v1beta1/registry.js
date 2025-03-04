"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const bank_1 = require("./types/cosmos/bank/v1beta1/bank");
const query_1 = require("./types/cosmos/bank/v1beta1/query");
const tx_1 = require("./types/cosmos/bank/v1beta1/tx");
const query_2 = require("./types/cosmos/bank/v1beta1/query");
const query_3 = require("./types/cosmos/bank/v1beta1/query");
const query_4 = require("./types/cosmos/bank/v1beta1/query");
const query_5 = require("./types/cosmos/bank/v1beta1/query");
const bank_2 = require("./types/cosmos/bank/v1beta1/bank");
const query_6 = require("./types/cosmos/bank/v1beta1/query");
const tx_2 = require("./types/cosmos/bank/v1beta1/tx");
const query_7 = require("./types/cosmos/bank/v1beta1/query");
const query_8 = require("./types/cosmos/bank/v1beta1/query");
const authz_1 = require("./types/cosmos/bank/v1beta1/authz");
const query_9 = require("./types/cosmos/bank/v1beta1/query");
const bank_3 = require("./types/cosmos/bank/v1beta1/bank");
const tx_3 = require("./types/cosmos/bank/v1beta1/tx");
const tx_4 = require("./types/cosmos/bank/v1beta1/tx");
const bank_4 = require("./types/cosmos/bank/v1beta1/bank");
const tx_5 = require("./types/cosmos/bank/v1beta1/tx");
const tx_6 = require("./types/cosmos/bank/v1beta1/tx");
const query_10 = require("./types/cosmos/bank/v1beta1/query");
const query_11 = require("./types/cosmos/bank/v1beta1/query");
const query_12 = require("./types/cosmos/bank/v1beta1/query");
const genesis_1 = require("./types/cosmos/bank/v1beta1/genesis");
const tx_7 = require("./types/cosmos/bank/v1beta1/tx");
const bank_5 = require("./types/cosmos/bank/v1beta1/bank");
const bank_6 = require("./types/cosmos/bank/v1beta1/bank");
const query_13 = require("./types/cosmos/bank/v1beta1/query");
const query_14 = require("./types/cosmos/bank/v1beta1/query");
const query_15 = require("./types/cosmos/bank/v1beta1/query");
const query_16 = require("./types/cosmos/bank/v1beta1/query");
const query_17 = require("./types/cosmos/bank/v1beta1/query");
const query_18 = require("./types/cosmos/bank/v1beta1/query");
const query_19 = require("./types/cosmos/bank/v1beta1/query");
const query_20 = require("./types/cosmos/bank/v1beta1/query");
const genesis_2 = require("./types/cosmos/bank/v1beta1/genesis");
const query_21 = require("./types/cosmos/bank/v1beta1/query");
const query_22 = require("./types/cosmos/bank/v1beta1/query");
const query_23 = require("./types/cosmos/bank/v1beta1/query");
const bank_7 = require("./types/cosmos/bank/v1beta1/bank");
const tx_8 = require("./types/cosmos/bank/v1beta1/tx");
const query_24 = require("./types/cosmos/bank/v1beta1/query");
const query_25 = require("./types/cosmos/bank/v1beta1/query");
const query_26 = require("./types/cosmos/bank/v1beta1/query");
const query_27 = require("./types/cosmos/bank/v1beta1/query");
const msgTypes = [
    ["/cosmos.bank.v1beta1.Params", bank_1.Params],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse", query_1.QuerySpendableBalanceByDenomResponse],
    ["/cosmos.bank.v1beta1.MsgMultiSend", tx_1.MsgMultiSend],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest", query_2.QuerySpendableBalanceByDenomRequest],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesRequest", query_3.QuerySpendableBalancesRequest],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyResponse", query_4.QueryTotalSupplyResponse],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse", query_5.QueryDenomMetadataByQueryStringResponse],
    ["/cosmos.bank.v1beta1.DenomUnit", bank_2.DenomUnit],
    ["/cosmos.bank.v1beta1.QueryAllBalancesRequest", query_6.QueryAllBalancesRequest],
    ["/cosmos.bank.v1beta1.MsgUpdateParams", tx_2.MsgUpdateParams],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataResponse", query_7.QueryDenomMetadataResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest", query_8.QueryDenomOwnersByQueryRequest],
    ["/cosmos.bank.v1beta1.SendAuthorization", authz_1.SendAuthorization],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesResponse", query_9.QuerySpendableBalancesResponse],
    ["/cosmos.bank.v1beta1.Output", bank_3.Output],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabled", tx_3.MsgSetSendEnabled],
    ["/cosmos.bank.v1beta1.MsgMultiSendResponse", tx_4.MsgMultiSendResponse],
    ["/cosmos.bank.v1beta1.Input", bank_4.Input],
    ["/cosmos.bank.v1beta1.MsgSend", tx_5.MsgSend],
    ["/cosmos.bank.v1beta1.MsgUpdateParamsResponse", tx_6.MsgUpdateParamsResponse],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataRequest", query_10.QueryDenomsMetadataRequest],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersRequest", query_11.QueryDenomOwnersRequest],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersResponse", query_12.QueryDenomOwnersResponse],
    ["/cosmos.bank.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.bank.v1beta1.MsgSendResponse", tx_7.MsgSendResponse],
    ["/cosmos.bank.v1beta1.SendEnabled", bank_5.SendEnabled],
    ["/cosmos.bank.v1beta1.Metadata", bank_6.Metadata],
    ["/cosmos.bank.v1beta1.QueryAllBalancesResponse", query_13.QueryAllBalancesResponse],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest", query_14.QueryDenomMetadataByQueryStringRequest],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyRequest", query_15.QueryTotalSupplyRequest],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataResponse", query_16.QueryDenomsMetadataResponse],
    ["/cosmos.bank.v1beta1.QueryBalanceRequest", query_17.QueryBalanceRequest],
    ["/cosmos.bank.v1beta1.QuerySupplyOfResponse", query_18.QuerySupplyOfResponse],
    ["/cosmos.bank.v1beta1.QueryParamsResponse", query_19.QueryParamsResponse],
    ["/cosmos.bank.v1beta1.QuerySendEnabledRequest", query_20.QuerySendEnabledRequest],
    ["/cosmos.bank.v1beta1.Balance", genesis_2.Balance],
    ["/cosmos.bank.v1beta1.QueryBalanceResponse", query_21.QueryBalanceResponse],
    ["/cosmos.bank.v1beta1.DenomOwner", query_22.DenomOwner],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse", query_23.QueryDenomOwnersByQueryResponse],
    ["/cosmos.bank.v1beta1.Supply", bank_7.Supply],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabledResponse", tx_8.MsgSetSendEnabledResponse],
    ["/cosmos.bank.v1beta1.QuerySupplyOfRequest", query_24.QuerySupplyOfRequest],
    ["/cosmos.bank.v1beta1.QueryParamsRequest", query_25.QueryParamsRequest],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataRequest", query_26.QueryDenomMetadataRequest],
    ["/cosmos.bank.v1beta1.QuerySendEnabledResponse", query_27.QuerySendEnabledResponse],
];
exports.msgTypes = msgTypes;
