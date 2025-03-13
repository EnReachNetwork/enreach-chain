"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/enreach/edgenode/genesis");
const tx_1 = require("./types/enreach/edgenode/tx");
const node_1 = require("./types/enreach/edgenode/node");
const query_1 = require("./types/enreach/edgenode/query");
const query_2 = require("./types/enreach/edgenode/query");
const tx_2 = require("./types/enreach/edgenode/tx");
const query_3 = require("./types/enreach/edgenode/query");
const query_4 = require("./types/enreach/edgenode/query");
const query_5 = require("./types/enreach/edgenode/query");
const query_6 = require("./types/enreach/edgenode/query");
const params_1 = require("./types/enreach/edgenode/params");
const tx_3 = require("./types/enreach/edgenode/tx");
const tx_4 = require("./types/enreach/edgenode/tx");
const tx_5 = require("./types/enreach/edgenode/tx");
const tx_6 = require("./types/enreach/edgenode/tx");
const superior_1 = require("./types/enreach/edgenode/superior");
const user_1 = require("./types/enreach/edgenode/user");
const tx_7 = require("./types/enreach/edgenode/tx");
const tx_8 = require("./types/enreach/edgenode/tx");
const tx_9 = require("./types/enreach/edgenode/tx");
const query_7 = require("./types/enreach/edgenode/query");
const query_8 = require("./types/enreach/edgenode/query");
const query_9 = require("./types/enreach/edgenode/query");
const query_10 = require("./types/enreach/edgenode/query");
const query_11 = require("./types/enreach/edgenode/query");
const tx_10 = require("./types/enreach/edgenode/tx");
const tx_11 = require("./types/enreach/edgenode/tx");
const tx_12 = require("./types/enreach/edgenode/tx");
const tx_13 = require("./types/enreach/edgenode/tx");
const tx_14 = require("./types/enreach/edgenode/tx");
const tx_15 = require("./types/enreach/edgenode/tx");
const tx_16 = require("./types/enreach/edgenode/tx");
const query_12 = require("./types/enreach/edgenode/query");
const msgTypes = [
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.MsgUpdateSuperior", tx_1.MsgUpdateSuperior],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.QueryGetUserResponse", query_1.QueryGetUserResponse],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_2.QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_2.MsgUnbindNodeResponse],
    ["/enreach.edgenode.QueryParamsRequest", query_3.QueryParamsRequest],
    ["/enreach.edgenode.QueryParamsResponse", query_4.QueryParamsResponse],
    ["/enreach.edgenode.QueryGetNodeResponse", query_5.QueryGetNodeResponse],
    ["/enreach.edgenode.QueryAllNodeResponse", query_6.QueryAllNodeResponse],
    ["/enreach.edgenode.Params", params_1.Params],
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_3.MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_4.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.MsgCreateSuperior", tx_5.MsgCreateSuperior],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_6.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_7.MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_8.MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.MsgUnbindNode", tx_9.MsgUnbindNode],
    ["/enreach.edgenode.QueryGetNodeRequest", query_7.QueryGetNodeRequest],
    ["/enreach.edgenode.QueryAllNodeRequest", query_8.QueryAllNodeRequest],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_9.QueryGetSuperiorRequest],
    ["/enreach.edgenode.QueryAllUserRequest", query_10.QueryAllUserRequest],
    ["/enreach.edgenode.QueryAllUserResponse", query_11.QueryAllUserResponse],
    ["/enreach.edgenode.MsgCreateUser", tx_10.MsgCreateUser],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_11.MsgBindUserEVMAccount],
    ["/enreach.edgenode.MsgUpdateParams", tx_12.MsgUpdateParams],
    ["/enreach.edgenode.MsgRegisterNode", tx_13.MsgRegisterNode],
    ["/enreach.edgenode.MsgCreateUserResponse", tx_14.MsgCreateUserResponse],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_15.MsgBindAndActivateNode],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_16.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.QueryGetUserRequest", query_12.QueryGetUserRequest],
];
exports.msgTypes = msgTypes;
