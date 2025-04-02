"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/edgenode/tx");
const query_1 = require("./types/enreach/edgenode/query");
const tx_2 = require("./types/enreach/edgenode/tx");
const tx_3 = require("./types/enreach/edgenode/tx");
const query_2 = require("./types/enreach/edgenode/query");
const query_3 = require("./types/enreach/edgenode/query");
const query_4 = require("./types/enreach/edgenode/query");
const tx_4 = require("./types/enreach/edgenode/tx");
const tx_5 = require("./types/enreach/edgenode/tx");
const params_1 = require("./types/enreach/edgenode/params");
const query_5 = require("./types/enreach/edgenode/query");
const tx_6 = require("./types/enreach/edgenode/tx");
const tx_7 = require("./types/enreach/edgenode/tx");
const tx_8 = require("./types/enreach/edgenode/tx");
const tx_9 = require("./types/enreach/edgenode/tx");
const genesis_1 = require("./types/enreach/edgenode/genesis");
const query_6 = require("./types/enreach/edgenode/query");
const tx_10 = require("./types/enreach/edgenode/tx");
const tx_11 = require("./types/enreach/edgenode/tx");
const query_7 = require("./types/enreach/edgenode/query");
const tx_12 = require("./types/enreach/edgenode/tx");
const tx_13 = require("./types/enreach/edgenode/tx");
const node_1 = require("./types/enreach/edgenode/node");
const query_8 = require("./types/enreach/edgenode/query");
const query_9 = require("./types/enreach/edgenode/query");
const query_10 = require("./types/enreach/edgenode/query");
const tx_14 = require("./types/enreach/edgenode/tx");
const query_11 = require("./types/enreach/edgenode/query");
const user_1 = require("./types/enreach/edgenode/user");
const superior_1 = require("./types/enreach/edgenode/superior");
const tx_15 = require("./types/enreach/edgenode/tx");
const tx_16 = require("./types/enreach/edgenode/tx");
const query_12 = require("./types/enreach/edgenode/query");
const msgTypes = [
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_1.MsgUpdateParamsResponse],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_1.QueryGetSuperiorRequest],
    ["/enreach.edgenode.MsgUpdateParams", tx_2.MsgUpdateParams],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_3.MsgUnbindNodeResponse],
    ["/enreach.edgenode.QueryGetUserResponse", query_2.QueryGetUserResponse],
    ["/enreach.edgenode.QueryGetNodeRequest", query_3.QueryGetNodeRequest],
    ["/enreach.edgenode.QueryAllNodeResponse", query_4.QueryAllNodeResponse],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_4.MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.MsgUpdateSuperior", tx_5.MsgUpdateSuperior],
    ["/enreach.edgenode.Params", params_1.Params],
    ["/enreach.edgenode.QueryParamsRequest", query_5.QueryParamsRequest],
    ["/enreach.edgenode.MsgCreateUser", tx_6.MsgCreateUser],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_7.MsgBindUserEVMAccount],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_8.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_9.MsgBindAndActivateNode],
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_6.QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_10.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_11.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.QueryAllUserRequest", query_7.QueryAllUserRequest],
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_12.MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgCreateSuperior", tx_13.MsgCreateSuperior],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.QueryAllUserResponse", query_8.QueryAllUserResponse],
    ["/enreach.edgenode.QueryGetNodeResponse", query_9.QueryGetNodeResponse],
    ["/enreach.edgenode.QueryAllNodeRequest", query_10.QueryAllNodeRequest],
    ["/enreach.edgenode.MsgUnbindNode", tx_14.MsgUnbindNode],
    ["/enreach.edgenode.QueryParamsResponse", query_11.QueryParamsResponse],
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.MsgCreateUserResponse", tx_15.MsgCreateUserResponse],
    ["/enreach.edgenode.MsgRegisterNode", tx_16.MsgRegisterNode],
    ["/enreach.edgenode.QueryGetUserRequest", query_12.QueryGetUserRequest],
];
exports.msgTypes = msgTypes;
