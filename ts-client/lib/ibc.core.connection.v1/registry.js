"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/core/connection/v1/tx");
const tx_2 = require("./types/ibc/core/connection/v1/tx");
const query_1 = require("./types/ibc/core/connection/v1/query");
const connection_1 = require("./types/ibc/core/connection/v1/connection");
const connection_2 = require("./types/ibc/core/connection/v1/connection");
const tx_3 = require("./types/ibc/core/connection/v1/tx");
const query_2 = require("./types/ibc/core/connection/v1/query");
const query_3 = require("./types/ibc/core/connection/v1/query");
const query_4 = require("./types/ibc/core/connection/v1/query");
const connection_3 = require("./types/ibc/core/connection/v1/connection");
const connection_4 = require("./types/ibc/core/connection/v1/connection");
const tx_4 = require("./types/ibc/core/connection/v1/tx");
const tx_5 = require("./types/ibc/core/connection/v1/tx");
const query_5 = require("./types/ibc/core/connection/v1/query");
const query_6 = require("./types/ibc/core/connection/v1/query");
const connection_5 = require("./types/ibc/core/connection/v1/connection");
const genesis_1 = require("./types/ibc/core/connection/v1/genesis");
const tx_6 = require("./types/ibc/core/connection/v1/tx");
const tx_7 = require("./types/ibc/core/connection/v1/tx");
const query_7 = require("./types/ibc/core/connection/v1/query");
const query_8 = require("./types/ibc/core/connection/v1/query");
const query_9 = require("./types/ibc/core/connection/v1/query");
const tx_8 = require("./types/ibc/core/connection/v1/tx");
const query_10 = require("./types/ibc/core/connection/v1/query");
const tx_9 = require("./types/ibc/core/connection/v1/tx");
const tx_10 = require("./types/ibc/core/connection/v1/tx");
const connection_6 = require("./types/ibc/core/connection/v1/connection");
const connection_7 = require("./types/ibc/core/connection/v1/connection");
const query_11 = require("./types/ibc/core/connection/v1/query");
const query_12 = require("./types/ibc/core/connection/v1/query");
const msgTypes = [
    ["/ibc.core.connection.v1.MsgConnectionOpenAck", tx_1.MsgConnectionOpenAck],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", tx_2.MsgConnectionOpenConfirm],
    ["/ibc.core.connection.v1.QueryClientConnectionsResponse", query_1.QueryClientConnectionsResponse],
    ["/ibc.core.connection.v1.ClientPaths", connection_1.ClientPaths],
    ["/ibc.core.connection.v1.Params", connection_2.Params],
    ["/ibc.core.connection.v1.MsgConnectionOpenInitResponse", tx_3.MsgConnectionOpenInitResponse],
    ["/ibc.core.connection.v1.QueryConnectionParamsResponse", query_2.QueryConnectionParamsResponse],
    ["/ibc.core.connection.v1.QueryConnectionResponse", query_3.QueryConnectionResponse],
    ["/ibc.core.connection.v1.QueryConnectionClientStateRequest", query_4.QueryConnectionClientStateRequest],
    ["/ibc.core.connection.v1.IdentifiedConnection", connection_3.IdentifiedConnection],
    ["/ibc.core.connection.v1.Counterparty", connection_4.Counterparty],
    ["/ibc.core.connection.v1.MsgConnectionOpenTry", tx_4.MsgConnectionOpenTry],
    ["/ibc.core.connection.v1.MsgConnectionOpenTryResponse", tx_5.MsgConnectionOpenTryResponse],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateResponse", query_5.QueryConnectionConsensusStateResponse],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateRequest", query_6.QueryConnectionConsensusStateRequest],
    ["/ibc.core.connection.v1.ConnectionPaths", connection_5.ConnectionPaths],
    ["/ibc.core.connection.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.connection.v1.MsgConnectionOpenAckResponse", tx_6.MsgConnectionOpenAckResponse],
    ["/ibc.core.connection.v1.MsgUpdateParams", tx_7.MsgUpdateParams],
    ["/ibc.core.connection.v1.QueryClientConnectionsRequest", query_7.QueryClientConnectionsRequest],
    ["/ibc.core.connection.v1.QueryConnectionRequest", query_8.QueryConnectionRequest],
    ["/ibc.core.connection.v1.QueryConnectionsResponse", query_9.QueryConnectionsResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse", tx_8.MsgConnectionOpenConfirmResponse],
    ["/ibc.core.connection.v1.QueryConnectionClientStateResponse", query_10.QueryConnectionClientStateResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenInit", tx_9.MsgConnectionOpenInit],
    ["/ibc.core.connection.v1.MsgUpdateParamsResponse", tx_10.MsgUpdateParamsResponse],
    ["/ibc.core.connection.v1.ConnectionEnd", connection_6.ConnectionEnd],
    ["/ibc.core.connection.v1.Version", connection_7.Version],
    ["/ibc.core.connection.v1.QueryConnectionsRequest", query_11.QueryConnectionsRequest],
    ["/ibc.core.connection.v1.QueryConnectionParamsRequest", query_12.QueryConnectionParamsRequest],
];
exports.msgTypes = msgTypes;
