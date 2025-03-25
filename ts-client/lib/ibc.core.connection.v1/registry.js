"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/core/connection/v1/tx");
const query_1 = require("./types/ibc/core/connection/v1/query");
const query_2 = require("./types/ibc/core/connection/v1/query");
const tx_2 = require("./types/ibc/core/connection/v1/tx");
const connection_1 = require("./types/ibc/core/connection/v1/connection");
const connection_2 = require("./types/ibc/core/connection/v1/connection");
const tx_3 = require("./types/ibc/core/connection/v1/tx");
const query_3 = require("./types/ibc/core/connection/v1/query");
const connection_3 = require("./types/ibc/core/connection/v1/connection");
const connection_4 = require("./types/ibc/core/connection/v1/connection");
const genesis_1 = require("./types/ibc/core/connection/v1/genesis");
const query_4 = require("./types/ibc/core/connection/v1/query");
const query_5 = require("./types/ibc/core/connection/v1/query");
const tx_4 = require("./types/ibc/core/connection/v1/tx");
const tx_5 = require("./types/ibc/core/connection/v1/tx");
const query_6 = require("./types/ibc/core/connection/v1/query");
const tx_6 = require("./types/ibc/core/connection/v1/tx");
const tx_7 = require("./types/ibc/core/connection/v1/tx");
const query_7 = require("./types/ibc/core/connection/v1/query");
const query_8 = require("./types/ibc/core/connection/v1/query");
const query_9 = require("./types/ibc/core/connection/v1/query");
const tx_8 = require("./types/ibc/core/connection/v1/tx");
const query_10 = require("./types/ibc/core/connection/v1/query");
const query_11 = require("./types/ibc/core/connection/v1/query");
const tx_9 = require("./types/ibc/core/connection/v1/tx");
const tx_10 = require("./types/ibc/core/connection/v1/tx");
const query_12 = require("./types/ibc/core/connection/v1/query");
const connection_5 = require("./types/ibc/core/connection/v1/connection");
const connection_6 = require("./types/ibc/core/connection/v1/connection");
const connection_7 = require("./types/ibc/core/connection/v1/connection");
const msgTypes = [
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", tx_1.MsgConnectionOpenConfirm],
    ["/ibc.core.connection.v1.QueryConnectionClientStateResponse", query_1.QueryConnectionClientStateResponse],
    ["/ibc.core.connection.v1.QueryConnectionClientStateRequest", query_2.QueryConnectionClientStateRequest],
    ["/ibc.core.connection.v1.MsgConnectionOpenInit", tx_2.MsgConnectionOpenInit],
    ["/ibc.core.connection.v1.ConnectionEnd", connection_1.ConnectionEnd],
    ["/ibc.core.connection.v1.ClientPaths", connection_2.ClientPaths],
    ["/ibc.core.connection.v1.MsgConnectionOpenTry", tx_3.MsgConnectionOpenTry],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateRequest", query_3.QueryConnectionConsensusStateRequest],
    ["/ibc.core.connection.v1.Counterparty", connection_3.Counterparty],
    ["/ibc.core.connection.v1.Params", connection_4.Params],
    ["/ibc.core.connection.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateResponse", query_4.QueryConnectionConsensusStateResponse],
    ["/ibc.core.connection.v1.QueryConnectionResponse", query_5.QueryConnectionResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenAckResponse", tx_4.MsgConnectionOpenAckResponse],
    ["/ibc.core.connection.v1.MsgUpdateParamsResponse", tx_5.MsgUpdateParamsResponse],
    ["/ibc.core.connection.v1.QueryConnectionRequest", query_6.QueryConnectionRequest],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse", tx_6.MsgConnectionOpenConfirmResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenTryResponse", tx_7.MsgConnectionOpenTryResponse],
    ["/ibc.core.connection.v1.QueryConnectionsResponse", query_7.QueryConnectionsResponse],
    ["/ibc.core.connection.v1.QueryClientConnectionsRequest", query_8.QueryClientConnectionsRequest],
    ["/ibc.core.connection.v1.QueryClientConnectionsResponse", query_9.QueryClientConnectionsResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenInitResponse", tx_8.MsgConnectionOpenInitResponse],
    ["/ibc.core.connection.v1.QueryConnectionsRequest", query_10.QueryConnectionsRequest],
    ["/ibc.core.connection.v1.QueryConnectionParamsResponse", query_11.QueryConnectionParamsResponse],
    ["/ibc.core.connection.v1.MsgUpdateParams", tx_9.MsgUpdateParams],
    ["/ibc.core.connection.v1.MsgConnectionOpenAck", tx_10.MsgConnectionOpenAck],
    ["/ibc.core.connection.v1.QueryConnectionParamsRequest", query_12.QueryConnectionParamsRequest],
    ["/ibc.core.connection.v1.IdentifiedConnection", connection_5.IdentifiedConnection],
    ["/ibc.core.connection.v1.ConnectionPaths", connection_6.ConnectionPaths],
    ["/ibc.core.connection.v1.Version", connection_7.Version],
];
exports.msgTypes = msgTypes;
