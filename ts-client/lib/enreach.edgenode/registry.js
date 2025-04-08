"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/edgenode/tx");
const query_1 = require("./types/enreach/edgenode/query");
const query_2 = require("./types/enreach/edgenode/query");
const tx_2 = require("./types/enreach/edgenode/tx");
const tx_3 = require("./types/enreach/edgenode/tx");
const tx_4 = require("./types/enreach/edgenode/tx");
const tx_5 = require("./types/enreach/edgenode/tx");
const query_3 = require("./types/enreach/edgenode/query");
const query_4 = require("./types/enreach/edgenode/query");
const tx_6 = require("./types/enreach/edgenode/tx");
const tx_7 = require("./types/enreach/edgenode/tx");
const user_1 = require("./types/enreach/edgenode/user");
const node_1 = require("./types/enreach/edgenode/node");
const query_5 = require("./types/enreach/edgenode/query");
const tx_8 = require("./types/enreach/edgenode/tx");
const tx_9 = require("./types/enreach/edgenode/tx");
const superior_1 = require("./types/enreach/edgenode/superior");
const tx_10 = require("./types/enreach/edgenode/tx");
const query_6 = require("./types/enreach/edgenode/query");
const query_7 = require("./types/enreach/edgenode/query");
const query_8 = require("./types/enreach/edgenode/query");
const tx_11 = require("./types/enreach/edgenode/tx");
const genesis_1 = require("./types/enreach/edgenode/genesis");
const query_9 = require("./types/enreach/edgenode/query");
const tx_12 = require("./types/enreach/edgenode/tx");
const query_10 = require("./types/enreach/edgenode/query");
const query_11 = require("./types/enreach/edgenode/query");
const query_12 = require("./types/enreach/edgenode/query");
const tx_13 = require("./types/enreach/edgenode/tx");
const tx_14 = require("./types/enreach/edgenode/tx");
const tx_15 = require("./types/enreach/edgenode/tx");
const tx_16 = require("./types/enreach/edgenode/tx");
const tx_17 = require("./types/enreach/edgenode/tx");
const tx_18 = require("./types/enreach/edgenode/tx");
const params_1 = require("./types/enreach/edgenode/params");
const msgTypes = [
    ["/enreach.edgenode.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/enreach.edgenode.QueryGetNodeResponse", query_1.QueryGetNodeResponse],
    ["/enreach.edgenode.QueryAllNodeRequest", query_2.QueryAllNodeRequest],
    ["/enreach.edgenode.MsgCreateSuperior", tx_2.MsgCreateSuperior],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_3.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_4.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_5.MsgBindUserEVMAccount],
    ["/enreach.edgenode.QueryGetNodeRequest", query_3.QueryGetNodeRequest],
    ["/enreach.edgenode.QueryAllNodeResponse", query_4.QueryAllNodeResponse],
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_6.MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_7.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.QueryGetUserRequest", query_5.QueryGetUserRequest],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_8.MsgUnbindNodeResponse],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatchResponse", tx_9.MsgUpdateNodeTrafficTypeBatchResponse],
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.MsgCreateUser", tx_10.MsgCreateUser],
    ["/enreach.edgenode.QueryGetUserResponse", query_6.QueryGetUserResponse],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_7.QueryGetSuperiorRequest],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_8.QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_11.MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.QueryParamsRequest", query_9.QueryParamsRequest],
    ["/enreach.edgenode.MsgUpdateSuperior", tx_12.MsgUpdateSuperior],
    ["/enreach.edgenode.QueryParamsResponse", query_10.QueryParamsResponse],
    ["/enreach.edgenode.QueryAllUserRequest", query_11.QueryAllUserRequest],
    ["/enreach.edgenode.QueryAllUserResponse", query_12.QueryAllUserResponse],
    ["/enreach.edgenode.MsgCreateUserResponse", tx_13.MsgCreateUserResponse],
    ["/enreach.edgenode.MsgRegisterNode", tx_14.MsgRegisterNode],
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_15.MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_16.MsgBindAndActivateNode],
    ["/enreach.edgenode.MsgUnbindNode", tx_17.MsgUnbindNode],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatch", tx_18.MsgUpdateNodeTrafficTypeBatch],
    ["/enreach.edgenode.Params", params_1.Params],
];
exports.msgTypes = msgTypes;
