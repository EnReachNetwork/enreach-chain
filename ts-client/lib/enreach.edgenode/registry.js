"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const user_1 = require("./types/enreach/edgenode/user");
const query_1 = require("./types/enreach/edgenode/query");
const tx_1 = require("./types/enreach/edgenode/tx");
const tx_2 = require("./types/enreach/edgenode/tx");
const query_2 = require("./types/enreach/edgenode/query");
const tx_3 = require("./types/enreach/edgenode/tx");
const query_3 = require("./types/enreach/edgenode/query");
const tx_4 = require("./types/enreach/edgenode/tx");
const tx_5 = require("./types/enreach/edgenode/tx");
const tx_6 = require("./types/enreach/edgenode/tx");
const genesis_1 = require("./types/enreach/edgenode/genesis");
const tx_7 = require("./types/enreach/edgenode/tx");
const tx_8 = require("./types/enreach/edgenode/tx");
const tx_9 = require("./types/enreach/edgenode/tx");
const query_4 = require("./types/enreach/edgenode/query");
const query_5 = require("./types/enreach/edgenode/query");
const query_6 = require("./types/enreach/edgenode/query");
const tx_10 = require("./types/enreach/edgenode/tx");
const tx_11 = require("./types/enreach/edgenode/tx");
const tx_12 = require("./types/enreach/edgenode/tx");
const tx_13 = require("./types/enreach/edgenode/tx");
const tx_14 = require("./types/enreach/edgenode/tx");
const params_1 = require("./types/enreach/edgenode/params");
const node_1 = require("./types/enreach/edgenode/node");
const superior_1 = require("./types/enreach/edgenode/superior");
const query_7 = require("./types/enreach/edgenode/query");
const query_8 = require("./types/enreach/edgenode/query");
const tx_15 = require("./types/enreach/edgenode/tx");
const tx_16 = require("./types/enreach/edgenode/tx");
const query_9 = require("./types/enreach/edgenode/query");
const query_10 = require("./types/enreach/edgenode/query");
const query_11 = require("./types/enreach/edgenode/query");
const query_12 = require("./types/enreach/edgenode/query");
const msgTypes = [
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.QueryGetNodeResponse", query_1.QueryGetNodeResponse],
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_1.MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgRegisterNode", tx_2.MsgRegisterNode],
    ["/enreach.edgenode.QueryAllUserResponse", query_2.QueryAllUserResponse],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_3.MsgUnbindNodeResponse],
    ["/enreach.edgenode.QueryAllUserRequest", query_3.QueryAllUserRequest],
    ["/enreach.edgenode.MsgUpdateSuperior", tx_4.MsgUpdateSuperior],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_5.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_6.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.MsgCreateUser", tx_7.MsgCreateUser],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_8.MsgBindUserEVMAccount],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_9.MsgBindAndActivateNode],
    ["/enreach.edgenode.QueryParamsResponse", query_4.QueryParamsResponse],
    ["/enreach.edgenode.QueryGetUserRequest", query_5.QueryGetUserRequest],
    ["/enreach.edgenode.QueryGetUserResponse", query_6.QueryGetUserResponse],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_10.MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.MsgCreateUserResponse", tx_11.MsgCreateUserResponse],
    ["/enreach.edgenode.MsgCreateSuperior", tx_12.MsgCreateSuperior],
    ["/enreach.edgenode.MsgUpdateParams", tx_13.MsgUpdateParams],
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_14.MsgRegisterNodeResponse],
    ["/enreach.edgenode.Params", params_1.Params],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.QueryAllNodeRequest", query_7.QueryAllNodeRequest],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_8.QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgUnbindNode", tx_15.MsgUnbindNode],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_16.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.QueryParamsRequest", query_9.QueryParamsRequest],
    ["/enreach.edgenode.QueryGetNodeRequest", query_10.QueryGetNodeRequest],
    ["/enreach.edgenode.QueryAllNodeResponse", query_11.QueryAllNodeResponse],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_12.QueryGetSuperiorRequest],
];
exports.msgTypes = msgTypes;
