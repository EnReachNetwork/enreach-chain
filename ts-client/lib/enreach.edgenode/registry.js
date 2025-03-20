"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/edgenode/tx");
const tx_2 = require("./types/enreach/edgenode/tx");
const genesis_1 = require("./types/enreach/edgenode/genesis");
const query_1 = require("./types/enreach/edgenode/query");
const user_1 = require("./types/enreach/edgenode/user");
const tx_3 = require("./types/enreach/edgenode/tx");
const tx_4 = require("./types/enreach/edgenode/tx");
const tx_5 = require("./types/enreach/edgenode/tx");
const superior_1 = require("./types/enreach/edgenode/superior");
const tx_6 = require("./types/enreach/edgenode/tx");
const tx_7 = require("./types/enreach/edgenode/tx");
const tx_8 = require("./types/enreach/edgenode/tx");
const tx_9 = require("./types/enreach/edgenode/tx");
const query_2 = require("./types/enreach/edgenode/query");
const tx_10 = require("./types/enreach/edgenode/tx");
const query_3 = require("./types/enreach/edgenode/query");
const query_4 = require("./types/enreach/edgenode/query");
const tx_11 = require("./types/enreach/edgenode/tx");
const node_1 = require("./types/enreach/edgenode/node");
const query_5 = require("./types/enreach/edgenode/query");
const query_6 = require("./types/enreach/edgenode/query");
const tx_12 = require("./types/enreach/edgenode/tx");
const tx_13 = require("./types/enreach/edgenode/tx");
const query_7 = require("./types/enreach/edgenode/query");
const query_8 = require("./types/enreach/edgenode/query");
const tx_14 = require("./types/enreach/edgenode/tx");
const tx_15 = require("./types/enreach/edgenode/tx");
const query_9 = require("./types/enreach/edgenode/query");
const tx_16 = require("./types/enreach/edgenode/tx");
const params_1 = require("./types/enreach/edgenode/params");
const query_10 = require("./types/enreach/edgenode/query");
const query_11 = require("./types/enreach/edgenode/query");
const query_12 = require("./types/enreach/edgenode/query");
const msgTypes = [
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_1.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_2.MsgUnbindNodeResponse],
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_1.QueryGetSuperiorRequest],
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_3.MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_4.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_5.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.MsgRegisterNode", tx_6.MsgRegisterNode],
    ["/enreach.edgenode.MsgCreateUserResponse", tx_7.MsgCreateUserResponse],
    ["/enreach.edgenode.MsgCreateSuperior", tx_8.MsgCreateSuperior],
    ["/enreach.edgenode.MsgUpdateSuperior", tx_9.MsgUpdateSuperior],
    ["/enreach.edgenode.QueryAllNodeResponse", query_2.QueryAllNodeResponse],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_10.MsgBindAndActivateNode],
    ["/enreach.edgenode.QueryGetUserResponse", query_3.QueryGetUserResponse],
    ["/enreach.edgenode.QueryAllUserRequest", query_4.QueryAllUserRequest],
    ["/enreach.edgenode.MsgUpdateParams", tx_11.MsgUpdateParams],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.QueryGetNodeRequest", query_5.QueryGetNodeRequest],
    ["/enreach.edgenode.QueryAllNodeRequest", query_6.QueryAllNodeRequest],
    ["/enreach.edgenode.MsgCreateUser", tx_12.MsgCreateUser],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_13.MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.QueryParamsRequest", query_7.QueryParamsRequest],
    ["/enreach.edgenode.QueryAllUserResponse", query_8.QueryAllUserResponse],
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_14.MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgUnbindNode", tx_15.MsgUnbindNode],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_9.QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_16.MsgBindUserEVMAccount],
    ["/enreach.edgenode.Params", params_1.Params],
    ["/enreach.edgenode.QueryParamsResponse", query_10.QueryParamsResponse],
    ["/enreach.edgenode.QueryGetUserRequest", query_11.QueryGetUserRequest],
    ["/enreach.edgenode.QueryGetNodeResponse", query_12.QueryGetNodeResponse],
];
exports.msgTypes = msgTypes;
