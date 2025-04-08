"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/edgenode/tx");
const tx_2 = require("./types/enreach/edgenode/tx");
const params_1 = require("./types/enreach/edgenode/params");
const tx_3 = require("./types/enreach/edgenode/tx");
const tx_4 = require("./types/enreach/edgenode/tx");
const tx_5 = require("./types/enreach/edgenode/tx");
const query_1 = require("./types/enreach/edgenode/query");
const node_1 = require("./types/enreach/edgenode/node");
const tx_6 = require("./types/enreach/edgenode/tx");
const user_1 = require("./types/enreach/edgenode/user");
const tx_7 = require("./types/enreach/edgenode/tx");
const tx_8 = require("./types/enreach/edgenode/tx");
const tx_9 = require("./types/enreach/edgenode/tx");
const query_2 = require("./types/enreach/edgenode/query");
const query_3 = require("./types/enreach/edgenode/query");
const query_4 = require("./types/enreach/edgenode/query");
const genesis_1 = require("./types/enreach/edgenode/genesis");
const tx_10 = require("./types/enreach/edgenode/tx");
const tx_11 = require("./types/enreach/edgenode/tx");
const tx_12 = require("./types/enreach/edgenode/tx");
const query_5 = require("./types/enreach/edgenode/query");
const query_6 = require("./types/enreach/edgenode/query");
const tx_13 = require("./types/enreach/edgenode/tx");
const tx_14 = require("./types/enreach/edgenode/tx");
const tx_15 = require("./types/enreach/edgenode/tx");
const query_7 = require("./types/enreach/edgenode/query");
const query_8 = require("./types/enreach/edgenode/query");
const superior_1 = require("./types/enreach/edgenode/superior");
const tx_16 = require("./types/enreach/edgenode/tx");
const tx_17 = require("./types/enreach/edgenode/tx");
const tx_18 = require("./types/enreach/edgenode/tx");
const query_9 = require("./types/enreach/edgenode/query");
const query_10 = require("./types/enreach/edgenode/query");
const query_11 = require("./types/enreach/edgenode/query");
const query_12 = require("./types/enreach/edgenode/query");
const msgTypes = [
    ["/enreach.edgenode.MsgUpdateSuperior", tx_1.MsgUpdateSuperior],
    ["/enreach.edgenode.MsgCreateUserResponse", tx_2.MsgCreateUserResponse],
    ["/enreach.edgenode.Params", params_1.Params],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_3.MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_4.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatchResponse", tx_5.MsgUpdateNodeTrafficTypeBatchResponse],
    ["/enreach.edgenode.QueryAllNodeRequest", query_1.QueryAllNodeRequest],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_6.MsgBindUserEVMAccount],
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_7.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.MsgUpdateParams", tx_8.MsgUpdateParams],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_9.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.QueryAllNodeResponse", query_2.QueryAllNodeResponse],
    ["/enreach.edgenode.QueryAllUserRequest", query_3.QueryAllUserRequest],
    ["/enreach.edgenode.QueryGetNodeRequest", query_4.QueryGetNodeRequest],
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.MsgCreateSuperior", tx_10.MsgCreateSuperior],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_11.MsgBindAndActivateNode],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatch", tx_12.MsgUpdateNodeTrafficTypeBatch],
    ["/enreach.edgenode.QueryParamsResponse", query_5.QueryParamsResponse],
    ["/enreach.edgenode.QueryGetUserRequest", query_6.QueryGetUserRequest],
    ["/enreach.edgenode.MsgCreateUser", tx_13.MsgCreateUser],
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_14.MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgRegisterNode", tx_15.MsgRegisterNode],
    ["/enreach.edgenode.QueryAllUserResponse", query_7.QueryAllUserResponse],
    ["/enreach.edgenode.QueryGetNodeResponse", query_8.QueryGetNodeResponse],
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_16.MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgUnbindNode", tx_17.MsgUnbindNode],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_18.MsgUnbindNodeResponse],
    ["/enreach.edgenode.QueryParamsRequest", query_9.QueryParamsRequest],
    ["/enreach.edgenode.QueryGetUserResponse", query_10.QueryGetUserResponse],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_11.QueryGetSuperiorRequest],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_12.QueryGetSuperiorResponse],
];
exports.msgTypes = msgTypes;
