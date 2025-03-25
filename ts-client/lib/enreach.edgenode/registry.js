"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const superior_1 = require("./types/enreach/edgenode/superior");
const genesis_1 = require("./types/enreach/edgenode/genesis");
const query_1 = require("./types/enreach/edgenode/query");
const query_2 = require("./types/enreach/edgenode/query");
const query_3 = require("./types/enreach/edgenode/query");
const tx_1 = require("./types/enreach/edgenode/tx");
const tx_2 = require("./types/enreach/edgenode/tx");
const tx_3 = require("./types/enreach/edgenode/tx");
const node_1 = require("./types/enreach/edgenode/node");
const query_4 = require("./types/enreach/edgenode/query");
const tx_4 = require("./types/enreach/edgenode/tx");
const tx_5 = require("./types/enreach/edgenode/tx");
const query_5 = require("./types/enreach/edgenode/query");
const params_1 = require("./types/enreach/edgenode/params");
const tx_6 = require("./types/enreach/edgenode/tx");
const tx_7 = require("./types/enreach/edgenode/tx");
const tx_8 = require("./types/enreach/edgenode/tx");
const query_6 = require("./types/enreach/edgenode/query");
const tx_9 = require("./types/enreach/edgenode/tx");
const query_7 = require("./types/enreach/edgenode/query");
const tx_10 = require("./types/enreach/edgenode/tx");
const query_8 = require("./types/enreach/edgenode/query");
const tx_11 = require("./types/enreach/edgenode/tx");
const query_9 = require("./types/enreach/edgenode/query");
const query_10 = require("./types/enreach/edgenode/query");
const query_11 = require("./types/enreach/edgenode/query");
const tx_12 = require("./types/enreach/edgenode/tx");
const tx_13 = require("./types/enreach/edgenode/tx");
const tx_14 = require("./types/enreach/edgenode/tx");
const tx_15 = require("./types/enreach/edgenode/tx");
const user_1 = require("./types/enreach/edgenode/user");
const query_12 = require("./types/enreach/edgenode/query");
const tx_16 = require("./types/enreach/edgenode/tx");
const msgTypes = [
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/enreach.edgenode.QueryAllNodeRequest", query_2.QueryAllNodeRequest],
    ["/enreach.edgenode.QueryAllNodeResponse", query_3.QueryAllNodeResponse],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_1.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_2.MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_3.MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_4.QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgRegisterNode", tx_4.MsgRegisterNode],
    ["/enreach.edgenode.MsgCreateSuperior", tx_5.MsgCreateSuperior],
    ["/enreach.edgenode.QueryAllUserRequest", query_5.QueryAllUserRequest],
    ["/enreach.edgenode.Params", params_1.Params],
    ["/enreach.edgenode.MsgUnbindNode", tx_6.MsgUnbindNode],
    ["/enreach.edgenode.MsgUpdateSuperior", tx_7.MsgUpdateSuperior],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_8.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.QueryParamsResponse", query_6.QueryParamsResponse],
    ["/enreach.edgenode.MsgCreateUserResponse", tx_9.MsgCreateUserResponse],
    ["/enreach.edgenode.QueryGetNodeRequest", query_7.QueryGetNodeRequest],
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_10.MsgUpdateParamsResponse],
    ["/enreach.edgenode.QueryGetNodeResponse", query_8.QueryGetNodeResponse],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_11.MsgBindAndActivateNode],
    ["/enreach.edgenode.QueryGetUserRequest", query_9.QueryGetUserRequest],
    ["/enreach.edgenode.QueryAllUserResponse", query_10.QueryAllUserResponse],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_11.QueryGetSuperiorRequest],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_12.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.MsgCreateUser", tx_13.MsgCreateUser],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_14.MsgBindUserEVMAccount],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_15.MsgUnbindNodeResponse],
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.QueryGetUserResponse", query_12.QueryGetUserResponse],
    ["/enreach.edgenode.MsgUpdateParams", tx_16.MsgUpdateParams],
];
exports.msgTypes = msgTypes;
