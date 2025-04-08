"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/core/connection/v1/query");
const query_2 = require("./types/ibc/core/connection/v1/query");
const query_3 = require("./types/ibc/core/connection/v1/query");
const connection_1 = require("./types/ibc/core/connection/v1/connection");
const connection_2 = require("./types/ibc/core/connection/v1/connection");
const tx_1 = require("./types/ibc/core/connection/v1/tx");
const connection_3 = require("./types/ibc/core/connection/v1/connection");
const query_4 = require("./types/ibc/core/connection/v1/query");
const query_5 = require("./types/ibc/core/connection/v1/query");
const connection_4 = require("./types/ibc/core/connection/v1/connection");
const tx_2 = require("./types/ibc/core/connection/v1/tx");
const query_6 = require("./types/ibc/core/connection/v1/query");
const tx_3 = require("./types/ibc/core/connection/v1/tx");
const query_7 = require("./types/ibc/core/connection/v1/query");
const connection_5 = require("./types/ibc/core/connection/v1/connection");
const tx_4 = require("./types/ibc/core/connection/v1/tx");
const query_8 = require("./types/ibc/core/connection/v1/query");
const query_9 = require("./types/ibc/core/connection/v1/query");
const tx_5 = require("./types/ibc/core/connection/v1/tx");
const tx_6 = require("./types/ibc/core/connection/v1/tx");
const query_10 = require("./types/ibc/core/connection/v1/query");
const genesis_1 = require("./types/ibc/core/connection/v1/genesis");
const connection_6 = require("./types/ibc/core/connection/v1/connection");
const query_11 = require("./types/ibc/core/connection/v1/query");
const tx_7 = require("./types/ibc/core/connection/v1/tx");
const query_12 = require("./types/ibc/core/connection/v1/query");
const connection_7 = require("./types/ibc/core/connection/v1/connection");
const tx_8 = require("./types/ibc/core/connection/v1/tx");
const tx_9 = require("./types/ibc/core/connection/v1/tx");
const tx_10 = require("./types/ibc/core/connection/v1/tx");
const msgTypes = [
    ["/ibc.core.connection.v1.QueryConnectionRequest", query_1.QueryConnectionRequest],
    ["/ibc.core.connection.v1.QueryConnectionResponse", query_2.QueryConnectionResponse],
    ["/ibc.core.connection.v1.QueryConnectionsRequest", query_3.QueryConnectionsRequest],
    ["/ibc.core.connection.v1.ConnectionPaths", connection_1.ConnectionPaths],
    ["/ibc.core.connection.v1.Version", connection_2.Version],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse", tx_1.MsgConnectionOpenConfirmResponse],
    ["/ibc.core.connection.v1.Params", connection_3.Params],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateResponse", query_4.QueryConnectionConsensusStateResponse],
    ["/ibc.core.connection.v1.QueryConnectionParamsRequest", query_5.QueryConnectionParamsRequest],
    ["/ibc.core.connection.v1.ClientPaths", connection_4.ClientPaths],
    ["/ibc.core.connection.v1.MsgConnectionOpenTryResponse", tx_2.MsgConnectionOpenTryResponse],
    ["/ibc.core.connection.v1.QueryConnectionClientStateRequest", query_6.QueryConnectionClientStateRequest],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", tx_3.MsgConnectionOpenConfirm],
    ["/ibc.core.connection.v1.QueryClientConnectionsResponse", query_7.QueryClientConnectionsResponse],
    ["/ibc.core.connection.v1.IdentifiedConnection", connection_5.IdentifiedConnection],
    ["/ibc.core.connection.v1.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/ibc.core.connection.v1.QueryClientConnectionsRequest", query_8.QueryClientConnectionsRequest],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateRequest", query_9.QueryConnectionConsensusStateRequest],
    ["/ibc.core.connection.v1.MsgConnectionOpenInit", tx_5.MsgConnectionOpenInit],
    ["/ibc.core.connection.v1.MsgConnectionOpenAckResponse", tx_6.MsgConnectionOpenAckResponse],
    ["/ibc.core.connection.v1.QueryConnectionsResponse", query_10.QueryConnectionsResponse],
    ["/ibc.core.connection.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.connection.v1.Counterparty", connection_6.Counterparty],
    ["/ibc.core.connection.v1.QueryConnectionParamsResponse", query_11.QueryConnectionParamsResponse],
    ["/ibc.core.connection.v1.MsgUpdateParamsResponse", tx_7.MsgUpdateParamsResponse],
    ["/ibc.core.connection.v1.QueryConnectionClientStateResponse", query_12.QueryConnectionClientStateResponse],
    ["/ibc.core.connection.v1.ConnectionEnd", connection_7.ConnectionEnd],
    ["/ibc.core.connection.v1.MsgConnectionOpenTry", tx_8.MsgConnectionOpenTry],
    ["/ibc.core.connection.v1.MsgConnectionOpenAck", tx_9.MsgConnectionOpenAck],
    ["/ibc.core.connection.v1.MsgConnectionOpenInitResponse", tx_10.MsgConnectionOpenInitResponse],
];
exports.msgTypes = msgTypes;
