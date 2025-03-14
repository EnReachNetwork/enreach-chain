"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/edgenode/tx");
const query_1 = require("./types/enreach/edgenode/query");
const genesis_1 = require("./types/enreach/edgenode/genesis");
const params_1 = require("./types/enreach/edgenode/params");
const tx_2 = require("./types/enreach/edgenode/tx");
const tx_3 = require("./types/enreach/edgenode/tx");
const tx_4 = require("./types/enreach/edgenode/tx");
const query_2 = require("./types/enreach/edgenode/query");
const user_1 = require("./types/enreach/edgenode/user");
const tx_5 = require("./types/enreach/edgenode/tx");
const query_3 = require("./types/enreach/edgenode/query");
const superior_1 = require("./types/enreach/edgenode/superior");
const tx_6 = require("./types/enreach/edgenode/tx");
const tx_7 = require("./types/enreach/edgenode/tx");
const tx_8 = require("./types/enreach/edgenode/tx");
const query_4 = require("./types/enreach/edgenode/query");
const tx_9 = require("./types/enreach/edgenode/tx");
const query_5 = require("./types/enreach/edgenode/query");
const query_6 = require("./types/enreach/edgenode/query");
const tx_10 = require("./types/enreach/edgenode/tx");
const query_7 = require("./types/enreach/edgenode/query");
const tx_11 = require("./types/enreach/edgenode/tx");
const query_8 = require("./types/enreach/edgenode/query");
const node_1 = require("./types/enreach/edgenode/node");
const tx_12 = require("./types/enreach/edgenode/tx");
const tx_13 = require("./types/enreach/edgenode/tx");
const tx_14 = require("./types/enreach/edgenode/tx");
const query_9 = require("./types/enreach/edgenode/query");
const query_10 = require("./types/enreach/edgenode/query");
const tx_15 = require("./types/enreach/edgenode/tx");
const tx_16 = require("./types/enreach/edgenode/tx");
const query_11 = require("./types/enreach/edgenode/query");
const query_12 = require("./types/enreach/edgenode/query");
const msgTypes = [
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_1.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.QueryGetNodeRequest", query_1.QueryGetNodeRequest],
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.Params", params_1.Params],
    ["/enreach.edgenode.MsgCreateUserResponse", tx_2.MsgCreateUserResponse],
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_3.MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_4.MsgBindUserEVMAccount],
    ["/enreach.edgenode.QueryAllNodeRequest", query_2.QueryAllNodeRequest],
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.MsgUpdateSuperior", tx_5.MsgUpdateSuperior],
    ["/enreach.edgenode.QueryParamsRequest", query_3.QueryParamsRequest],
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.MsgRegisterNode", tx_6.MsgRegisterNode],
    ["/enreach.edgenode.MsgUnbindNode", tx_7.MsgUnbindNode],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_8.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_4.QueryGetSuperiorRequest],
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_9.MsgUpdateParamsResponse],
    ["/enreach.edgenode.QueryParamsResponse", query_5.QueryParamsResponse],
    ["/enreach.edgenode.QueryAllUserRequest", query_6.QueryAllUserRequest],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_10.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.QueryAllUserResponse", query_7.QueryAllUserResponse],
    ["/enreach.edgenode.MsgCreateSuperior", tx_11.MsgCreateSuperior],
    ["/enreach.edgenode.QueryGetUserRequest", query_8.QueryGetUserRequest],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.MsgUpdateParams", tx_12.MsgUpdateParams],
    ["/enreach.edgenode.MsgCreateUser", tx_13.MsgCreateUser],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_14.MsgBindAndActivateNode],
    ["/enreach.edgenode.QueryAllNodeResponse", query_9.QueryAllNodeResponse],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_10.QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_15.MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_16.MsgUnbindNodeResponse],
    ["/enreach.edgenode.QueryGetUserResponse", query_11.QueryGetUserResponse],
    ["/enreach.edgenode.QueryGetNodeResponse", query_12.QueryGetNodeResponse],
];
exports.msgTypes = msgTypes;
