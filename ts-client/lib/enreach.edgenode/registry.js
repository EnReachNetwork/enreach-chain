"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/edgenode/tx");
const tx_2 = require("./types/enreach/edgenode/tx");
const query_1 = require("./types/enreach/edgenode/query");
const node_1 = require("./types/enreach/edgenode/node");
const tx_3 = require("./types/enreach/edgenode/tx");
const tx_4 = require("./types/enreach/edgenode/tx");
const query_2 = require("./types/enreach/edgenode/query");
const query_3 = require("./types/enreach/edgenode/query");
const params_1 = require("./types/enreach/edgenode/params");
const tx_5 = require("./types/enreach/edgenode/tx");
const query_4 = require("./types/enreach/edgenode/query");
const tx_6 = require("./types/enreach/edgenode/tx");
const query_5 = require("./types/enreach/edgenode/query");
const query_6 = require("./types/enreach/edgenode/query");
const query_7 = require("./types/enreach/edgenode/query");
const query_8 = require("./types/enreach/edgenode/query");
const tx_7 = require("./types/enreach/edgenode/tx");
const tx_8 = require("./types/enreach/edgenode/tx");
const tx_9 = require("./types/enreach/edgenode/tx");
const tx_10 = require("./types/enreach/edgenode/tx");
const query_9 = require("./types/enreach/edgenode/query");
const query_10 = require("./types/enreach/edgenode/query");
const user_1 = require("./types/enreach/edgenode/user");
const superior_1 = require("./types/enreach/edgenode/superior");
const tx_11 = require("./types/enreach/edgenode/tx");
const tx_12 = require("./types/enreach/edgenode/tx");
const tx_13 = require("./types/enreach/edgenode/tx");
const tx_14 = require("./types/enreach/edgenode/tx");
const query_11 = require("./types/enreach/edgenode/query");
const tx_15 = require("./types/enreach/edgenode/tx");
const tx_16 = require("./types/enreach/edgenode/tx");
const tx_17 = require("./types/enreach/edgenode/tx");
const genesis_1 = require("./types/enreach/edgenode/genesis");
const query_12 = require("./types/enreach/edgenode/query");
const tx_18 = require("./types/enreach/edgenode/tx");
const msgTypes = [
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_1.MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_2.MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.QueryGetNodeRequest", query_1.QueryGetNodeRequest],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.MsgCreateUser", tx_3.MsgCreateUser],
    ["/enreach.edgenode.MsgCreateSuperior", tx_4.MsgCreateSuperior],
    ["/enreach.edgenode.QueryAllUserRequest", query_2.QueryAllUserRequest],
    ["/enreach.edgenode.QueryAllNodeResponse", query_3.QueryAllNodeResponse],
    ["/enreach.edgenode.Params", params_1.Params],
    ["/enreach.edgenode.MsgRegisterNode", tx_5.MsgRegisterNode],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_4.QueryGetSuperiorRequest],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_6.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.QueryParamsResponse", query_5.QueryParamsResponse],
    ["/enreach.edgenode.QueryGetUserResponse", query_6.QueryGetUserResponse],
    ["/enreach.edgenode.QueryAllNodeRequest", query_7.QueryAllNodeRequest],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_8.QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgUnbindNode", tx_7.MsgUnbindNode],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatch", tx_8.MsgUpdateNodeTrafficTypeBatch],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_9.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatchResponse", tx_10.MsgUpdateNodeTrafficTypeBatchResponse],
    ["/enreach.edgenode.QueryGetUserRequest", query_9.QueryGetUserRequest],
    ["/enreach.edgenode.QueryGetNodeResponse", query_10.QueryGetNodeResponse],
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_11.MsgUnbindNodeResponse],
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_12.MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_13.MsgBindAndActivateNode],
    ["/enreach.edgenode.MsgUpdateSuperior", tx_14.MsgUpdateSuperior],
    ["/enreach.edgenode.QueryAllUserResponse", query_11.QueryAllUserResponse],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_15.MsgBindUserEVMAccount],
    ["/enreach.edgenode.MsgUpdateParams", tx_16.MsgUpdateParams],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_17.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.QueryParamsRequest", query_12.QueryParamsRequest],
    ["/enreach.edgenode.MsgCreateUserResponse", tx_18.MsgCreateUserResponse],
];
exports.msgTypes = msgTypes;
