"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/edgenode/tx");
const tx_2 = require("./types/enreach/edgenode/tx");
const query_1 = require("./types/enreach/edgenode/query");
const query_2 = require("./types/enreach/edgenode/query");
const tx_3 = require("./types/enreach/edgenode/tx");
const tx_4 = require("./types/enreach/edgenode/tx");
const tx_5 = require("./types/enreach/edgenode/tx");
const query_3 = require("./types/enreach/edgenode/query");
const query_4 = require("./types/enreach/edgenode/query");
const node_1 = require("./types/enreach/edgenode/node");
const tx_6 = require("./types/enreach/edgenode/tx");
const user_1 = require("./types/enreach/edgenode/user");
const tx_7 = require("./types/enreach/edgenode/tx");
const query_5 = require("./types/enreach/edgenode/query");
const query_6 = require("./types/enreach/edgenode/query");
const tx_8 = require("./types/enreach/edgenode/tx");
const tx_9 = require("./types/enreach/edgenode/tx");
const tx_10 = require("./types/enreach/edgenode/tx");
const query_7 = require("./types/enreach/edgenode/query");
const superior_1 = require("./types/enreach/edgenode/superior");
const tx_11 = require("./types/enreach/edgenode/tx");
const tx_12 = require("./types/enreach/edgenode/tx");
const tx_13 = require("./types/enreach/edgenode/tx");
const tx_14 = require("./types/enreach/edgenode/tx");
const tx_15 = require("./types/enreach/edgenode/tx");
const query_8 = require("./types/enreach/edgenode/query");
const query_9 = require("./types/enreach/edgenode/query");
const params_1 = require("./types/enreach/edgenode/params");
const tx_16 = require("./types/enreach/edgenode/tx");
const genesis_1 = require("./types/enreach/edgenode/genesis");
const query_10 = require("./types/enreach/edgenode/query");
const tx_17 = require("./types/enreach/edgenode/tx");
const tx_18 = require("./types/enreach/edgenode/tx");
const query_11 = require("./types/enreach/edgenode/query");
const query_12 = require("./types/enreach/edgenode/query");
const msgTypes = [
    ["/enreach.edgenode.MsgRegisterNode", tx_1.MsgRegisterNode],
    ["/enreach.edgenode.MsgUnbindNode", tx_2.MsgUnbindNode],
    ["/enreach.edgenode.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_2.QueryGetSuperiorRequest],
    ["/enreach.edgenode.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_5.MsgUnbindNodeResponse],
    ["/enreach.edgenode.QueryParamsRequest", query_3.QueryParamsRequest],
    ["/enreach.edgenode.QueryAllNodeResponse", query_4.QueryAllNodeResponse],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.MsgCreateSuperior", tx_6.MsgCreateSuperior],
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_7.MsgBindAndActivateNode],
    ["/enreach.edgenode.QueryAllUserRequest", query_5.QueryAllUserRequest],
    ["/enreach.edgenode.QueryAllUserResponse", query_6.QueryAllUserResponse],
    ["/enreach.edgenode.MsgCreateUser", tx_8.MsgCreateUser],
    ["/enreach.edgenode.MsgCreateUserResponse", tx_9.MsgCreateUserResponse],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_10.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.QueryAllNodeRequest", query_7.QueryAllNodeRequest],
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.MsgUpdateSuperior", tx_11.MsgUpdateSuperior],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatchResponse", tx_12.MsgUpdateNodeTrafficTypeBatchResponse],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_13.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_14.MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_15.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.QueryGetUserResponse", query_8.QueryGetUserResponse],
    ["/enreach.edgenode.QueryGetNodeRequest", query_9.QueryGetNodeRequest],
    ["/enreach.edgenode.Params", params_1.Params],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_16.MsgBindUserEVMAccount],
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_10.QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_17.MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatch", tx_18.MsgUpdateNodeTrafficTypeBatch],
    ["/enreach.edgenode.QueryGetUserRequest", query_11.QueryGetUserRequest],
    ["/enreach.edgenode.QueryGetNodeResponse", query_12.QueryGetNodeResponse],
];
exports.msgTypes = msgTypes;
