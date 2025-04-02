"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const connection_1 = require("./types/ibc/core/connection/v1/connection");
const connection_2 = require("./types/ibc/core/connection/v1/connection");
const query_1 = require("./types/ibc/core/connection/v1/query");
const query_2 = require("./types/ibc/core/connection/v1/query");
const connection_3 = require("./types/ibc/core/connection/v1/connection");
const connection_4 = require("./types/ibc/core/connection/v1/connection");
const tx_1 = require("./types/ibc/core/connection/v1/tx");
const tx_2 = require("./types/ibc/core/connection/v1/tx");
const query_3 = require("./types/ibc/core/connection/v1/query");
const tx_3 = require("./types/ibc/core/connection/v1/tx");
const connection_5 = require("./types/ibc/core/connection/v1/connection");
const query_4 = require("./types/ibc/core/connection/v1/query");
const tx_4 = require("./types/ibc/core/connection/v1/tx");
const tx_5 = require("./types/ibc/core/connection/v1/tx");
const tx_6 = require("./types/ibc/core/connection/v1/tx");
const tx_7 = require("./types/ibc/core/connection/v1/tx");
const connection_6 = require("./types/ibc/core/connection/v1/connection");
const query_5 = require("./types/ibc/core/connection/v1/query");
const query_6 = require("./types/ibc/core/connection/v1/query");
const query_7 = require("./types/ibc/core/connection/v1/query");
const genesis_1 = require("./types/ibc/core/connection/v1/genesis");
const tx_8 = require("./types/ibc/core/connection/v1/tx");
const connection_7 = require("./types/ibc/core/connection/v1/connection");
const query_8 = require("./types/ibc/core/connection/v1/query");
const query_9 = require("./types/ibc/core/connection/v1/query");
const query_10 = require("./types/ibc/core/connection/v1/query");
const tx_9 = require("./types/ibc/core/connection/v1/tx");
const tx_10 = require("./types/ibc/core/connection/v1/tx");
const query_11 = require("./types/ibc/core/connection/v1/query");
const query_12 = require("./types/ibc/core/connection/v1/query");
const msgTypes = [
    ["/ibc.core.connection.v1.ClientPaths", connection_1.ClientPaths],
    ["/ibc.core.connection.v1.ConnectionPaths", connection_2.ConnectionPaths],
    ["/ibc.core.connection.v1.QueryConnectionRequest", query_1.QueryConnectionRequest],
    ["/ibc.core.connection.v1.QueryConnectionClientStateRequest", query_2.QueryConnectionClientStateRequest],
    ["/ibc.core.connection.v1.Counterparty", connection_3.Counterparty],
    ["/ibc.core.connection.v1.Params", connection_4.Params],
    ["/ibc.core.connection.v1.MsgConnectionOpenTryResponse", tx_1.MsgConnectionOpenTryResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenAckResponse", tx_2.MsgConnectionOpenAckResponse],
    ["/ibc.core.connection.v1.QueryConnectionParamsRequest", query_3.QueryConnectionParamsRequest],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", tx_3.MsgConnectionOpenConfirm],
    ["/ibc.core.connection.v1.IdentifiedConnection", connection_5.IdentifiedConnection],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateRequest", query_4.QueryConnectionConsensusStateRequest],
    ["/ibc.core.connection.v1.MsgConnectionOpenInitResponse", tx_4.MsgConnectionOpenInitResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenAck", tx_5.MsgConnectionOpenAck],
    ["/ibc.core.connection.v1.MsgConnectionOpenTry", tx_6.MsgConnectionOpenTry],
    ["/ibc.core.connection.v1.MsgUpdateParams", tx_7.MsgUpdateParams],
    ["/ibc.core.connection.v1.Version", connection_6.Version],
    ["/ibc.core.connection.v1.QueryConnectionResponse", query_5.QueryConnectionResponse],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateResponse", query_6.QueryConnectionConsensusStateResponse],
    ["/ibc.core.connection.v1.QueryConnectionParamsResponse", query_7.QueryConnectionParamsResponse],
    ["/ibc.core.connection.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.connection.v1.MsgUpdateParamsResponse", tx_8.MsgUpdateParamsResponse],
    ["/ibc.core.connection.v1.ConnectionEnd", connection_7.ConnectionEnd],
    ["/ibc.core.connection.v1.QueryConnectionsRequest", query_8.QueryConnectionsRequest],
    ["/ibc.core.connection.v1.QueryConnectionsResponse", query_9.QueryConnectionsResponse],
    ["/ibc.core.connection.v1.QueryConnectionClientStateResponse", query_10.QueryConnectionClientStateResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenInit", tx_9.MsgConnectionOpenInit],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse", tx_10.MsgConnectionOpenConfirmResponse],
    ["/ibc.core.connection.v1.QueryClientConnectionsRequest", query_11.QueryClientConnectionsRequest],
    ["/ibc.core.connection.v1.QueryClientConnectionsResponse", query_12.QueryClientConnectionsResponse],
];
exports.msgTypes = msgTypes;
