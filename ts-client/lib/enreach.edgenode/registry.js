"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/edgenode/tx");
const tx_2 = require("./types/enreach/edgenode/tx");
const tx_3 = require("./types/enreach/edgenode/tx");
const tx_4 = require("./types/enreach/edgenode/tx");
const query_1 = require("./types/enreach/edgenode/query");
const query_2 = require("./types/enreach/edgenode/query");
const query_3 = require("./types/enreach/edgenode/query");
const query_4 = require("./types/enreach/edgenode/query");
const tx_5 = require("./types/enreach/edgenode/tx");
const tx_6 = require("./types/enreach/edgenode/tx");
const query_5 = require("./types/enreach/edgenode/query");
const query_6 = require("./types/enreach/edgenode/query");
const tx_7 = require("./types/enreach/edgenode/tx");
const tx_8 = require("./types/enreach/edgenode/tx");
const tx_9 = require("./types/enreach/edgenode/tx");
const query_7 = require("./types/enreach/edgenode/query");
const query_8 = require("./types/enreach/edgenode/query");
const tx_10 = require("./types/enreach/edgenode/tx");
const query_9 = require("./types/enreach/edgenode/query");
const query_10 = require("./types/enreach/edgenode/query");
const user_1 = require("./types/enreach/edgenode/user");
const tx_11 = require("./types/enreach/edgenode/tx");
const tx_12 = require("./types/enreach/edgenode/tx");
const tx_13 = require("./types/enreach/edgenode/tx");
const superior_1 = require("./types/enreach/edgenode/superior");
const tx_14 = require("./types/enreach/edgenode/tx");
const node_1 = require("./types/enreach/edgenode/node");
const query_11 = require("./types/enreach/edgenode/query");
const genesis_1 = require("./types/enreach/edgenode/genesis");
const params_1 = require("./types/enreach/edgenode/params");
const query_12 = require("./types/enreach/edgenode/query");
const tx_15 = require("./types/enreach/edgenode/tx");
const tx_16 = require("./types/enreach/edgenode/tx");
const msgTypes = [
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_1.MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgCreateUserResponse", tx_2.MsgCreateUserResponse],
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_3.MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_4.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/enreach.edgenode.QueryGetUserResponse", query_2.QueryGetUserResponse],
    ["/enreach.edgenode.QueryAllUserRequest", query_3.QueryAllUserRequest],
    ["/enreach.edgenode.QueryAllUserResponse", query_4.QueryAllUserResponse],
    ["/enreach.edgenode.MsgCreateUser", tx_5.MsgCreateUser],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_6.MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.QueryAllNodeResponse", query_5.QueryAllNodeResponse],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_6.QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgRegisterNode", tx_7.MsgRegisterNode],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_8.MsgBindAndActivateNode],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_9.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.QueryGetNodeRequest", query_7.QueryGetNodeRequest],
    ["/enreach.edgenode.QueryAllNodeRequest", query_8.QueryAllNodeRequest],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_10.MsgBindUserEVMAccount],
    ["/enreach.edgenode.QueryGetUserRequest", query_9.QueryGetUserRequest],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_10.QueryGetSuperiorRequest],
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.MsgCreateSuperior", tx_11.MsgCreateSuperior],
    ["/enreach.edgenode.MsgUpdateSuperior", tx_12.MsgUpdateSuperior],
    ["/enreach.edgenode.MsgUnbindNode", tx_13.MsgUnbindNode],
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_14.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.QueryGetNodeResponse", query_11.QueryGetNodeResponse],
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.Params", params_1.Params],
    ["/enreach.edgenode.QueryParamsRequest", query_12.QueryParamsRequest],
    ["/enreach.edgenode.MsgUpdateParams", tx_15.MsgUpdateParams],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_16.MsgUnbindNodeResponse],
];
exports.msgTypes = msgTypes;
