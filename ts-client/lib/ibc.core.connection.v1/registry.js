"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/core/connection/v1/tx");
const tx_2 = require("./types/ibc/core/connection/v1/tx");
const query_1 = require("./types/ibc/core/connection/v1/query");
const tx_3 = require("./types/ibc/core/connection/v1/tx");
const genesis_1 = require("./types/ibc/core/connection/v1/genesis");
const query_2 = require("./types/ibc/core/connection/v1/query");
const tx_4 = require("./types/ibc/core/connection/v1/tx");
const tx_5 = require("./types/ibc/core/connection/v1/tx");
const tx_6 = require("./types/ibc/core/connection/v1/tx");
const query_3 = require("./types/ibc/core/connection/v1/query");
const query_4 = require("./types/ibc/core/connection/v1/query");
const tx_7 = require("./types/ibc/core/connection/v1/tx");
const query_5 = require("./types/ibc/core/connection/v1/query");
const query_6 = require("./types/ibc/core/connection/v1/query");
const connection_1 = require("./types/ibc/core/connection/v1/connection");
const tx_8 = require("./types/ibc/core/connection/v1/tx");
const query_7 = require("./types/ibc/core/connection/v1/query");
const query_8 = require("./types/ibc/core/connection/v1/query");
const connection_2 = require("./types/ibc/core/connection/v1/connection");
const connection_3 = require("./types/ibc/core/connection/v1/connection");
const tx_9 = require("./types/ibc/core/connection/v1/tx");
const connection_4 = require("./types/ibc/core/connection/v1/connection");
const connection_5 = require("./types/ibc/core/connection/v1/connection");
const query_9 = require("./types/ibc/core/connection/v1/query");
const connection_6 = require("./types/ibc/core/connection/v1/connection");
const query_10 = require("./types/ibc/core/connection/v1/query");
const connection_7 = require("./types/ibc/core/connection/v1/connection");
const query_11 = require("./types/ibc/core/connection/v1/query");
const query_12 = require("./types/ibc/core/connection/v1/query");
const tx_10 = require("./types/ibc/core/connection/v1/tx");
const msgTypes = [
    ["/ibc.core.connection.v1.MsgConnectionOpenInitResponse", tx_1.MsgConnectionOpenInitResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse", tx_2.MsgConnectionOpenConfirmResponse],
    ["/ibc.core.connection.v1.QueryConnectionRequest", query_1.QueryConnectionRequest],
    ["/ibc.core.connection.v1.MsgConnectionOpenTryResponse", tx_3.MsgConnectionOpenTryResponse],
    ["/ibc.core.connection.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.connection.v1.QueryConnectionParamsRequest", query_2.QueryConnectionParamsRequest],
    ["/ibc.core.connection.v1.MsgConnectionOpenAck", tx_4.MsgConnectionOpenAck],
    ["/ibc.core.connection.v1.MsgConnectionOpenAckResponse", tx_5.MsgConnectionOpenAckResponse],
    ["/ibc.core.connection.v1.MsgUpdateParamsResponse", tx_6.MsgUpdateParamsResponse],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateRequest", query_3.QueryConnectionConsensusStateRequest],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateResponse", query_4.QueryConnectionConsensusStateResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenTry", tx_7.MsgConnectionOpenTry],
    ["/ibc.core.connection.v1.QueryConnectionsRequest", query_5.QueryConnectionsRequest],
    ["/ibc.core.connection.v1.QueryClientConnectionsResponse", query_6.QueryClientConnectionsResponse],
    ["/ibc.core.connection.v1.ConnectionEnd", connection_1.ConnectionEnd],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", tx_8.MsgConnectionOpenConfirm],
    ["/ibc.core.connection.v1.QueryConnectionResponse", query_7.QueryConnectionResponse],
    ["/ibc.core.connection.v1.QueryConnectionClientStateRequest", query_8.QueryConnectionClientStateRequest],
    ["/ibc.core.connection.v1.Counterparty", connection_2.Counterparty],
    ["/ibc.core.connection.v1.Params", connection_3.Params],
    ["/ibc.core.connection.v1.MsgConnectionOpenInit", tx_9.MsgConnectionOpenInit],
    ["/ibc.core.connection.v1.Version", connection_4.Version],
    ["/ibc.core.connection.v1.ClientPaths", connection_5.ClientPaths],
    ["/ibc.core.connection.v1.QueryConnectionParamsResponse", query_9.QueryConnectionParamsResponse],
    ["/ibc.core.connection.v1.IdentifiedConnection", connection_6.IdentifiedConnection],
    ["/ibc.core.connection.v1.QueryConnectionClientStateResponse", query_10.QueryConnectionClientStateResponse],
    ["/ibc.core.connection.v1.ConnectionPaths", connection_7.ConnectionPaths],
    ["/ibc.core.connection.v1.QueryConnectionsResponse", query_11.QueryConnectionsResponse],
    ["/ibc.core.connection.v1.QueryClientConnectionsRequest", query_12.QueryClientConnectionsRequest],
    ["/ibc.core.connection.v1.MsgUpdateParams", tx_10.MsgUpdateParams],
];
exports.msgTypes = msgTypes;
