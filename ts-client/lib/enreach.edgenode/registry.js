"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/edgenode/tx");
const tx_2 = require("./types/enreach/edgenode/tx");
const tx_3 = require("./types/enreach/edgenode/tx");
const tx_4 = require("./types/enreach/edgenode/tx");
const node_1 = require("./types/enreach/edgenode/node");
const superior_1 = require("./types/enreach/edgenode/superior");
const user_1 = require("./types/enreach/edgenode/user");
const query_1 = require("./types/enreach/edgenode/query");
const query_2 = require("./types/enreach/edgenode/query");
const query_3 = require("./types/enreach/edgenode/query");
const params_1 = require("./types/enreach/edgenode/params");
const tx_5 = require("./types/enreach/edgenode/tx");
const tx_6 = require("./types/enreach/edgenode/tx");
const tx_7 = require("./types/enreach/edgenode/tx");
const tx_8 = require("./types/enreach/edgenode/tx");
const genesis_1 = require("./types/enreach/edgenode/genesis");
const query_4 = require("./types/enreach/edgenode/query");
const query_5 = require("./types/enreach/edgenode/query");
const tx_9 = require("./types/enreach/edgenode/tx");
const tx_10 = require("./types/enreach/edgenode/tx");
const tx_11 = require("./types/enreach/edgenode/tx");
const tx_12 = require("./types/enreach/edgenode/tx");
const query_6 = require("./types/enreach/edgenode/query");
const query_7 = require("./types/enreach/edgenode/query");
const query_8 = require("./types/enreach/edgenode/query");
const tx_13 = require("./types/enreach/edgenode/tx");
const query_9 = require("./types/enreach/edgenode/query");
const query_10 = require("./types/enreach/edgenode/query");
const tx_14 = require("./types/enreach/edgenode/tx");
const tx_15 = require("./types/enreach/edgenode/tx");
const tx_16 = require("./types/enreach/edgenode/tx");
const query_11 = require("./types/enreach/edgenode/query");
const query_12 = require("./types/enreach/edgenode/query");
const msgTypes = [
    ["/enreach.edgenode.MsgUpdateSuperior", tx_1.MsgUpdateSuperior],
    ["/enreach.edgenode.MsgCreateUserResponse", tx_2.MsgCreateUserResponse],
    ["/enreach.edgenode.MsgRegisterNode", tx_3.MsgRegisterNode],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_4.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/enreach.edgenode.QueryGetUserRequest", query_2.QueryGetUserRequest],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_3.QueryGetSuperiorResponse],
    ["/enreach.edgenode.Params", params_1.Params],
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_5.MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_6.MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_7.MsgUnbindNodeResponse],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_8.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.QueryAllUserRequest", query_4.QueryAllUserRequest],
    ["/enreach.edgenode.QueryAllNodeResponse", query_5.QueryAllNodeResponse],
    ["/enreach.edgenode.MsgCreateUser", tx_9.MsgCreateUser],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_10.MsgBindAndActivateNode],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_11.MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.MsgUnbindNode", tx_12.MsgUnbindNode],
    ["/enreach.edgenode.QueryParamsResponse", query_6.QueryParamsResponse],
    ["/enreach.edgenode.QueryGetUserResponse", query_7.QueryGetUserResponse],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_8.QueryGetSuperiorRequest],
    ["/enreach.edgenode.MsgUpdateParams", tx_13.MsgUpdateParams],
    ["/enreach.edgenode.QueryGetNodeRequest", query_9.QueryGetNodeRequest],
    ["/enreach.edgenode.QueryGetNodeResponse", query_10.QueryGetNodeResponse],
    ["/enreach.edgenode.MsgCreateSuperior", tx_14.MsgCreateSuperior],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_15.MsgBindUserEVMAccount],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_16.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.QueryAllUserResponse", query_11.QueryAllUserResponse],
    ["/enreach.edgenode.QueryAllNodeRequest", query_12.QueryAllNodeRequest],
];
exports.msgTypes = msgTypes;
