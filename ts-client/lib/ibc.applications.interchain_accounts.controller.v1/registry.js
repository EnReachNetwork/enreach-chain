"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const controller_1 = require("./types/ibc/applications/interchain_accounts/controller/v1/controller");
const tx_1 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const tx_2 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const tx_3 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const query_1 = require("./types/ibc/applications/interchain_accounts/controller/v1/query");
const query_2 = require("./types/ibc/applications/interchain_accounts/controller/v1/query");
const tx_4 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const tx_5 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const query_3 = require("./types/ibc/applications/interchain_accounts/controller/v1/query");
const tx_6 = require("./types/ibc/applications/interchain_accounts/controller/v1/tx");
const query_4 = require("./types/ibc/applications/interchain_accounts/controller/v1/query");
const msgTypes = [
    ["/ibc.applications.interchain_accounts.controller.v1.Params", controller_1.Params],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse", tx_1.MsgSendTxResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams", tx_2.MsgUpdateParams],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParamsResponse", tx_3.MsgUpdateParamsResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest", query_2.QueryParamsRequest],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount", tx_4.MsgRegisterInterchainAccount],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTx", tx_5.MsgSendTx],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest", query_3.QueryInterchainAccountRequest],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse", tx_6.MsgRegisterInterchainAccountResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse", query_4.QueryInterchainAccountResponse],
];
exports.msgTypes = msgTypes;
