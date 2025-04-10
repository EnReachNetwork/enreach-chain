"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/edgenode/query");
const query_2 = require("./types/enreach/edgenode/query");
const query_3 = require("./types/enreach/edgenode/query");
const tx_1 = require("./types/enreach/edgenode/tx");
const tx_2 = require("./types/enreach/edgenode/tx");
const tx_3 = require("./types/enreach/edgenode/tx");
const tx_4 = require("./types/enreach/edgenode/tx");
const query_4 = require("./types/enreach/edgenode/query");
const query_5 = require("./types/enreach/edgenode/query");
const query_6 = require("./types/enreach/edgenode/query");
const query_7 = require("./types/enreach/edgenode/query");
const tx_5 = require("./types/enreach/edgenode/tx");
const user_1 = require("./types/enreach/edgenode/user");
const tx_6 = require("./types/enreach/edgenode/tx");
const node_1 = require("./types/enreach/edgenode/node");
const tx_7 = require("./types/enreach/edgenode/tx");
const tx_8 = require("./types/enreach/edgenode/tx");
const tx_9 = require("./types/enreach/edgenode/tx");
const tx_10 = require("./types/enreach/edgenode/tx");
const tx_11 = require("./types/enreach/edgenode/tx");
const superior_1 = require("./types/enreach/edgenode/superior");
const tx_12 = require("./types/enreach/edgenode/tx");
const tx_13 = require("./types/enreach/edgenode/tx");
const params_1 = require("./types/enreach/edgenode/params");
const genesis_1 = require("./types/enreach/edgenode/genesis");
const query_8 = require("./types/enreach/edgenode/query");
const query_9 = require("./types/enreach/edgenode/query");
const tx_14 = require("./types/enreach/edgenode/tx");
const tx_15 = require("./types/enreach/edgenode/tx");
const tx_16 = require("./types/enreach/edgenode/tx");
const query_10 = require("./types/enreach/edgenode/query");
const query_11 = require("./types/enreach/edgenode/query");
const query_12 = require("./types/enreach/edgenode/query");
const tx_17 = require("./types/enreach/edgenode/tx");
const tx_18 = require("./types/enreach/edgenode/tx");
const msgTypes = [
    ["/enreach.edgenode.QueryAllNodeResponse", query_1.QueryAllNodeResponse],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_2.QueryGetSuperiorRequest],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_3.QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_1.MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatch", tx_2.MsgUpdateNodeTrafficTypeBatch],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_3.MsgUnbindNodeResponse],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_4.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.QueryGetUserRequest", query_4.QueryGetUserRequest],
    ["/enreach.edgenode.QueryGetNodeRequest", query_5.QueryGetNodeRequest],
    ["/enreach.edgenode.QueryGetNodeResponse", query_6.QueryGetNodeResponse],
    ["/enreach.edgenode.QueryAllNodeRequest", query_7.QueryAllNodeRequest],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_5.MsgBindUserEVMAccount],
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.MsgRegisterNode", tx_6.MsgRegisterNode],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_7.MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_8.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.MsgUpdateParams", tx_9.MsgUpdateParams],
    ["/enreach.edgenode.MsgCreateSuperior", tx_10.MsgCreateSuperior],
    ["/enreach.edgenode.MsgUpdateSuperior", tx_11.MsgUpdateSuperior],
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_12.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatchResponse", tx_13.MsgUpdateNodeTrafficTypeBatchResponse],
    ["/enreach.edgenode.Params", params_1.Params],
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.QueryAllUserRequest", query_8.QueryAllUserRequest],
    ["/enreach.edgenode.QueryAllUserResponse", query_9.QueryAllUserResponse],
    ["/enreach.edgenode.MsgCreateUser", tx_14.MsgCreateUser],
    ["/enreach.edgenode.MsgUnbindNode", tx_15.MsgUnbindNode],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_16.MsgBindAndActivateNode],
    ["/enreach.edgenode.QueryParamsRequest", query_10.QueryParamsRequest],
    ["/enreach.edgenode.QueryParamsResponse", query_11.QueryParamsResponse],
    ["/enreach.edgenode.QueryGetUserResponse", query_12.QueryGetUserResponse],
    ["/enreach.edgenode.MsgCreateUserResponse", tx_17.MsgCreateUserResponse],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_18.MsgBindAndActivateNodeResponse],
];
exports.msgTypes = msgTypes;
