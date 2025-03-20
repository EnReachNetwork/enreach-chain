"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const tx_2 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const query_1 = require("./types/ibc/applications/interchain_accounts/controller/v1/query");
const query_2 = require("./types/ibc/applications/interchain_accounts/controller/v1/query");
const tx_3 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const query_3 = require("./types/ibc/applications/interchain_accounts/controller/v1/query");
const tx_4 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const query_4 = require("./types/ibc/applications/interchain_accounts/controller/v1/query");
const tx_5 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const tx_6 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const controller_1 = require("./types/ibc/applications/interchain_accounts/controller/v1/controller");
const msgTypes = [
    ["/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse", tx_1.MsgRegisterInterchainAccountResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams", tx_2.MsgUpdateParams],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse", query_2.QueryParamsResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTx", tx_3.MsgSendTx],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse", query_3.QueryInterchainAccountResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest", query_4.QueryInterchainAccountRequest],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount", tx_5.MsgRegisterInterchainAccount],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse", tx_6.MsgSendTxResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.Params", controller_1.Params],
];
exports.msgTypes = msgTypes;
