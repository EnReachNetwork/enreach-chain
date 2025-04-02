"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/edgenode/tx");
const tx_2 = require("./types/enreach/edgenode/tx");
const query_1 = require("./types/enreach/edgenode/query");
const tx_3 = require("./types/enreach/edgenode/tx");
const query_2 = require("./types/enreach/edgenode/query");
const query_3 = require("./types/enreach/edgenode/query");
const query_4 = require("./types/enreach/edgenode/query");
const user_1 = require("./types/enreach/edgenode/user");
const query_5 = require("./types/enreach/edgenode/query");
const query_6 = require("./types/enreach/edgenode/query");
const query_7 = require("./types/enreach/edgenode/query");
const tx_4 = require("./types/enreach/edgenode/tx");
const tx_5 = require("./types/enreach/edgenode/tx");
const tx_6 = require("./types/enreach/edgenode/tx");
const tx_7 = require("./types/enreach/edgenode/tx");
const genesis_1 = require("./types/enreach/edgenode/genesis");
const query_8 = require("./types/enreach/edgenode/query");
const params_1 = require("./types/enreach/edgenode/params");
const query_9 = require("./types/enreach/edgenode/query");
const tx_8 = require("./types/enreach/edgenode/tx");
const tx_9 = require("./types/enreach/edgenode/tx");
const tx_10 = require("./types/enreach/edgenode/tx");
const tx_11 = require("./types/enreach/edgenode/tx");
const superior_1 = require("./types/enreach/edgenode/superior");
const tx_12 = require("./types/enreach/edgenode/tx");
const tx_13 = require("./types/enreach/edgenode/tx");
const tx_14 = require("./types/enreach/edgenode/tx");
const tx_15 = require("./types/enreach/edgenode/tx");
const query_10 = require("./types/enreach/edgenode/query");
const query_11 = require("./types/enreach/edgenode/query");
const node_1 = require("./types/enreach/edgenode/node");
const tx_16 = require("./types/enreach/edgenode/tx");
const tx_17 = require("./types/enreach/edgenode/tx");
const tx_18 = require("./types/enreach/edgenode/tx");
const query_12 = require("./types/enreach/edgenode/query");
const msgTypes = [
    ["/enreach.edgenode.MsgCreateUserResponse", tx_1.MsgCreateUserResponse],
    ["/enreach.edgenode.MsgUnbindNode", tx_2.MsgUnbindNode],
    ["/enreach.edgenode.QueryAllUserResponse", query_1.QueryAllUserResponse],
    ["/enreach.edgenode.MsgCreateUser", tx_3.MsgCreateUser],
    ["/enreach.edgenode.QueryGetUserRequest", query_2.QueryGetUserRequest],
    ["/enreach.edgenode.QueryGetSuperiorRequest", query_3.QueryGetSuperiorRequest],
    ["/enreach.edgenode.QueryAllNodeResponse", query_4.QueryAllNodeResponse],
    ["/enreach.edgenode.User", user_1.User],
    ["/enreach.edgenode.QueryAllUserRequest", query_5.QueryAllUserRequest],
    ["/enreach.edgenode.QueryGetNodeResponse", query_6.QueryGetNodeResponse],
    ["/enreach.edgenode.QueryGetUserResponse", query_7.QueryGetUserResponse],
    ["/enreach.edgenode.MsgCreateSuperior", tx_4.MsgCreateSuperior],
    ["/enreach.edgenode.MsgUpdateSuperior", tx_5.MsgUpdateSuperior],
    ["/enreach.edgenode.MsgRegisterNode", tx_6.MsgRegisterNode],
    ["/enreach.edgenode.MsgUnbindNodeResponse", tx_7.MsgUnbindNodeResponse],
    ["/enreach.edgenode.GenesisState", genesis_1.GenesisState],
    ["/enreach.edgenode.QueryParamsRequest", query_8.QueryParamsRequest],
    ["/enreach.edgenode.Params", params_1.Params],
    ["/enreach.edgenode.QueryAllNodeRequest", query_9.QueryAllNodeRequest],
    ["/enreach.edgenode.MsgBindUserEVMAccount", tx_8.MsgBindUserEVMAccount],
    ["/enreach.edgenode.MsgRegisterNodeResponse", tx_9.MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", tx_10.MsgCreateSuperiorResponse],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", tx_11.MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.Superior", superior_1.Superior],
    ["/enreach.edgenode.MsgUpdateParamsResponse", tx_12.MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", tx_13.MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatch", tx_14.MsgUpdateNodeTrafficTypeBatch],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatchResponse", tx_15.MsgUpdateNodeTrafficTypeBatchResponse],
    ["/enreach.edgenode.QueryGetNodeRequest", query_10.QueryGetNodeRequest],
    ["/enreach.edgenode.QueryGetSuperiorResponse", query_11.QueryGetSuperiorResponse],
    ["/enreach.edgenode.Node", node_1.Node],
    ["/enreach.edgenode.MsgUpdateParams", tx_16.MsgUpdateParams],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", tx_17.MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.MsgBindAndActivateNode", tx_18.MsgBindAndActivateNode],
    ["/enreach.edgenode.QueryParamsResponse", query_12.QueryParamsResponse],
];
exports.msgTypes = msgTypes;
