"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/edgenode/query");
const tx_1 = require("./types/enreach/edgenode/tx");
const superior_1 = require("./types/enreach/edgenode/superior");
const params_1 = require("./types/enreach/edgenode/params");
const query_2 = require("./types/enreach/edgenode/query");
const query_3 = require("./types/enreach/edgenode/query");
const query_4 = require("./types/enreach/edgenode/query");
const tx_2 = require("./types/enreach/edgenode/tx");
const tx_3 = require("./types/enreach/edgenode/tx");
const query_5 = require("./types/enreach/edgenode/query");
const query_6 = require("./types/enreach/edgenode/query");
const tx_4 = require("./types/enreach/edgenode/tx");
const tx_5 = require("./types/enreach/edgenode/tx");
const tx_6 = require("./types/enreach/edgenode/tx");
const tx_7 = require("./types/enreach/edgenode/tx");
const tx_8 = require("./types/enreach/edgenode/tx");
const tx_9 = require("./types/enreach/edgenode/tx");
const query_7 = require("./types/enreach/edgenode/query");
const tx_10 = require("./types/enreach/edgenode/tx");
const tx_11 = require("./types/enreach/edgenode/tx");
const tx_12 = require("./types/enreach/edgenode/tx");
const tx_13 = require("./types/enreach/edgenode/tx");
const query_8 = require("./types/enreach/edgenode/query");
const tx_14 = require("./types/enreach/edgenode/tx");
const tx_15 = require("./types/enreach/edgenode/tx");
const tx_16 = require("./types/enreach/edgenode/tx");
const user_1 = require("./types/enreach/edgenode/user");
const query_9 = require("./types/enreach/edgenode/query");
const tx_17 = require("./types/enreach/edgenode/tx");
const node_1 = require("./types/enreach/edgenode/node");
const query_10 = require("./types/enreach/edgenode/query");
const genesis_1 = require("./types/enreach/edgenode/genesis");
const tx_18 = require("./types/enreach/edgenode/tx");
const query_11 = require("./types/enreach/edgenode/query");
const query_12 = require("./types/enreach/edgenode/query");
const msgTypes = [
    ["/enreach.edgenode.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_1.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.Params", params_1.Params],
    ["/enreach.edgenode.QueryGetNodeRequest", query_2.QueryGetNodeRequest],
    ["/enreach.edgenode.QueryGetNodeResponse", query_3.QueryGetNodeResponse],
    ["/enreach.edgenode.QueryAllNodeRequest", query_4.QueryAllNodeRequest],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_2.MsgBindAndActivateNode],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatchResponse", tx_3.MsgUpdateNodeTrafficTypeBatchResponse],
    ["/enreach.edgenode.QueryGetUserRequest", query_5.QueryGetUserRequest],
    ["/enreach.edgenode.QueryAllUserResponse", query_6.QueryAllUserResponse],
    ["/enreach.edgenode.MsgCreateSuperior", tx_4.MsgCreateSuperior],
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_5.MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_6.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.MsgUpdateSuperior", tx_7.MsgUpdateSuperior],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_8.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatch", tx_9.MsgUpdateNodeTrafficTypeBatch],
    ["/enreach.edgenode.QueryAllUserRequest", query_7.QueryAllUserRequest],
    ["/enreach.edgenode.MsgUnbindNode", tx_10.MsgUnbindNode],
    ["/enreach.edgenode.MsgCreateUser", tx_11.MsgCreateUser],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_12.MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_13.MsgUnbindNodeResponse],
    ["/enreach.edgenode.QueryGetUserResponse", query_8.QueryGetUserResponse],
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_14.MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgCreateUserResponse", tx_15.MsgCreateUserResponse],
    ["/enreach.edgenode.MsgRegisterNode", tx_16.MsgRegisterNode],
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.QueryAllNodeResponse", query_9.QueryAllNodeResponse],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_17.MsgBindUserEVMAccount],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_10.QueryGetSuperiorResponse],
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.MsgUpdateParams", tx_18.MsgUpdateParams],
    ["/enreach.edgenode.QueryParamsRequest", query_11.QueryParamsRequest],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_12.QueryGetSuperiorRequest],
];
exports.msgTypes = msgTypes;
