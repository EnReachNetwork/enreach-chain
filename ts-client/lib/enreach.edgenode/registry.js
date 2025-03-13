"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const superior_1 = require("./types/enreach/edgenode/superior");
const tx_1 = require("./types/enreach/edgenode/tx");
const query_1 = require("./types/enreach/edgenode/query");
const tx_2 = require("./types/enreach/edgenode/tx");
const tx_3 = require("./types/enreach/edgenode/tx");
const query_2 = require("./types/enreach/edgenode/query");
const tx_4 = require("./types/enreach/edgenode/tx");
const node_1 = require("./types/enreach/edgenode/node");
const tx_5 = require("./types/enreach/edgenode/tx");
const query_3 = require("./types/enreach/edgenode/query");
const tx_6 = require("./types/enreach/edgenode/tx");
const user_1 = require("./types/enreach/edgenode/user");
const tx_7 = require("./types/enreach/edgenode/tx");
const params_1 = require("./types/enreach/edgenode/params");
const query_4 = require("./types/enreach/edgenode/query");
const query_5 = require("./types/enreach/edgenode/query");
const query_6 = require("./types/enreach/edgenode/query");
const tx_8 = require("./types/enreach/edgenode/tx");
const tx_9 = require("./types/enreach/edgenode/tx");
const tx_10 = require("./types/enreach/edgenode/tx");
const tx_11 = require("./types/enreach/edgenode/tx");
const genesis_1 = require("./types/enreach/edgenode/genesis");
const query_7 = require("./types/enreach/edgenode/query");
const tx_12 = require("./types/enreach/edgenode/tx");
const tx_13 = require("./types/enreach/edgenode/tx");
const tx_14 = require("./types/enreach/edgenode/tx");
const tx_15 = require("./types/enreach/edgenode/tx");
const tx_16 = require("./types/enreach/edgenode/tx");
const query_8 = require("./types/enreach/edgenode/query");
const query_9 = require("./types/enreach/edgenode/query");
const query_10 = require("./types/enreach/edgenode/query");
const query_11 = require("./types/enreach/edgenode/query");
const query_12 = require("./types/enreach/edgenode/query");
const msgTypes = [
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.MsgCreateSuperior", tx_1.MsgCreateSuperior],
    ["/enreach.edgenode.QueryAllNodeRequest", query_1.QueryAllNodeRequest],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_2.MsgBindAndActivateNode],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_3.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_2.QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgCreateUser", tx_4.MsgCreateUser],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.MsgCreateUserResponse", tx_5.MsgCreateUserResponse],
    ["/enreach.edgenode.QueryAllUserResponse", query_3.QueryAllUserResponse],
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_6.MsgRegisterNodeResponse],
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.MsgUpdateSuperior", tx_7.MsgUpdateSuperior],
    ["/enreach.edgenode.Params", params_1.Params],
    ["/enreach.edgenode.QueryParamsResponse", query_4.QueryParamsResponse],
    ["/enreach.edgenode.QueryGetUserResponse", query_5.QueryGetUserResponse],
    ["/enreach.edgenode.QueryGetNodeRequest", query_6.QueryGetNodeRequest],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_8.MsgBindUserEVMAccount],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_9.MsgUnbindNodeResponse],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_10.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.MsgUnbindNode", tx_11.MsgUnbindNode],
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.QueryParamsRequest", query_7.QueryParamsRequest],
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_12.MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_13.MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.MsgRegisterNode", tx_14.MsgRegisterNode],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_15.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.MsgUpdateParams", tx_16.MsgUpdateParams],
    ["/enreach.edgenode.QueryGetUserRequest", query_8.QueryGetUserRequest],
    ["/enreach.edgenode.QueryGetNodeResponse", query_9.QueryGetNodeResponse],
    ["/enreach.edgenode.QueryAllNodeResponse", query_10.QueryAllNodeResponse],
    ["/enreach.edgenode.QueryAllUserRequest", query_11.QueryAllUserRequest],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_12.QueryGetSuperiorRequest],
];
exports.msgTypes = msgTypes;
