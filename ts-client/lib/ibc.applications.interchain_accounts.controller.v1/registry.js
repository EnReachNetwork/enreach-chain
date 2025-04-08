"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const tx_2 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const tx_3 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const query_1 = require("./types/ibc/applications/interchain_accounts/controller/v1/query");
const tx_4 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const query_2 = require("./types/ibc/applications/interchain_accounts/controller/v1/query");
const query_3 = require("./types/ibc/applications/interchain_accounts/controller/v1/query");
const controller_1 = require("./types/ibc/applications/interchain_accounts/controller/v1/controller");
const tx_5 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const tx_6 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const query_4 = require("./types/ibc/applications/interchain_accounts/controller/v1/query");
const msgTypes = [
    ["/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse", tx_1.MsgRegisterInterchainAccountResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTx", tx_2.MsgSendTx],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse", tx_3.MsgSendTxResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse", query_2.QueryInterchainAccountResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest", query_3.QueryParamsRequest],
    ["/ibc.applications.interchain_accounts.controller.v1.Params", controller_1.Params],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount", tx_5.MsgRegisterInterchainAccount],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParamsResponse", tx_6.MsgUpdateParamsResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest", query_4.QueryInterchainAccountRequest],
];
exports.msgTypes = msgTypes;
