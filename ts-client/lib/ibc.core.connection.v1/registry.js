"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const connection_1 = require("./types/ibc/core/connection/v1/connection");
const query_1 = require("./types/ibc/core/connection/v1/query");
const query_2 = require("./types/ibc/core/connection/v1/query");
const tx_1 = require("./types/ibc/core/connection/v1/tx");
const tx_2 = require("./types/ibc/core/connection/v1/tx");
const tx_3 = require("./types/ibc/core/connection/v1/tx");
const tx_4 = require("./types/ibc/core/connection/v1/tx");
const connection_2 = require("./types/ibc/core/connection/v1/connection");
const query_3 = require("./types/ibc/core/connection/v1/query");
const connection_3 = require("./types/ibc/core/connection/v1/connection");
const tx_5 = require("./types/ibc/core/connection/v1/tx");
const connection_4 = require("./types/ibc/core/connection/v1/connection");
const connection_5 = require("./types/ibc/core/connection/v1/connection");
const genesis_1 = require("./types/ibc/core/connection/v1/genesis");
const query_4 = require("./types/ibc/core/connection/v1/query");
const query_5 = require("./types/ibc/core/connection/v1/query");
const query_6 = require("./types/ibc/core/connection/v1/query");
const query_7 = require("./types/ibc/core/connection/v1/query");
const query_8 = require("./types/ibc/core/connection/v1/query");
const tx_6 = require("./types/ibc/core/connection/v1/tx");
const tx_7 = require("./types/ibc/core/connection/v1/tx");
const connection_6 = require("./types/ibc/core/connection/v1/connection");
const query_9 = require("./types/ibc/core/connection/v1/query");
const tx_8 = require("./types/ibc/core/connection/v1/tx");
const tx_9 = require("./types/ibc/core/connection/v1/tx");
const query_10 = require("./types/ibc/core/connection/v1/query");
const query_11 = require("./types/ibc/core/connection/v1/query");
const connection_7 = require("./types/ibc/core/connection/v1/connection");
const tx_10 = require("./types/ibc/core/connection/v1/tx");
const query_12 = require("./types/ibc/core/connection/v1/query");
const msgTypes = [
    ["/ibc.core.connection.v1.Counterparty", connection_1.Counterparty],
    ["/ibc.core.connection.v1.QueryConnectionRequest", query_1.QueryConnectionRequest],
    ["/ibc.core.connection.v1.QueryClientConnectionsResponse", query_2.QueryClientConnectionsResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenTryResponse", tx_1.MsgConnectionOpenTryResponse],
    ["/ibc.core.connection.v1.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenAck", tx_3.MsgConnectionOpenAck],
    ["/ibc.core.connection.v1.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/ibc.core.connection.v1.Params", connection_2.Params],
    ["/ibc.core.connection.v1.QueryConnectionsRequest", query_3.QueryConnectionsRequest],
    ["/ibc.core.connection.v1.Version", connection_3.Version],
    ["/ibc.core.connection.v1.MsgConnectionOpenTry", tx_5.MsgConnectionOpenTry],
    ["/ibc.core.connection.v1.ConnectionEnd", connection_4.ConnectionEnd],
    ["/ibc.core.connection.v1.ClientPaths", connection_5.ClientPaths],
    ["/ibc.core.connection.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.connection.v1.QueryConnectionsResponse", query_4.QueryConnectionsResponse],
    ["/ibc.core.connection.v1.QueryConnectionClientStateResponse", query_5.QueryConnectionClientStateResponse],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateResponse", query_6.QueryConnectionConsensusStateResponse],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateRequest", query_7.QueryConnectionConsensusStateRequest],
    ["/ibc.core.connection.v1.QueryConnectionParamsRequest", query_8.QueryConnectionParamsRequest],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse", tx_6.MsgConnectionOpenConfirmResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenInit", tx_7.MsgConnectionOpenInit],
    ["/ibc.core.connection.v1.IdentifiedConnection", connection_6.IdentifiedConnection],
    ["/ibc.core.connection.v1.QueryConnectionResponse", query_9.QueryConnectionResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenAckResponse", tx_8.MsgConnectionOpenAckResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenInitResponse", tx_9.MsgConnectionOpenInitResponse],
    ["/ibc.core.connection.v1.QueryConnectionClientStateRequest", query_10.QueryConnectionClientStateRequest],
    ["/ibc.core.connection.v1.QueryConnectionParamsResponse", query_11.QueryConnectionParamsResponse],
    ["/ibc.core.connection.v1.ConnectionPaths", connection_7.ConnectionPaths],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", tx_10.MsgConnectionOpenConfirm],
    ["/ibc.core.connection.v1.QueryClientConnectionsRequest", query_12.QueryClientConnectionsRequest],
];
exports.msgTypes = msgTypes;
