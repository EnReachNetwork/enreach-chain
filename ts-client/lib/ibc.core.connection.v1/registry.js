"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/core/connection/v1/tx");
const tx_2 = require("./types/ibc/core/connection/v1/tx");
const query_1 = require("./types/ibc/core/connection/v1/query");
const query_2 = require("./types/ibc/core/connection/v1/query");
const query_3 = require("./types/ibc/core/connection/v1/query");
const query_4 = require("./types/ibc/core/connection/v1/query");
const connection_1 = require("./types/ibc/core/connection/v1/connection");
const tx_3 = require("./types/ibc/core/connection/v1/tx");
const connection_2 = require("./types/ibc/core/connection/v1/connection");
const tx_4 = require("./types/ibc/core/connection/v1/tx");
const tx_5 = require("./types/ibc/core/connection/v1/tx");
const connection_3 = require("./types/ibc/core/connection/v1/connection");
const query_5 = require("./types/ibc/core/connection/v1/query");
const query_6 = require("./types/ibc/core/connection/v1/query");
const connection_4 = require("./types/ibc/core/connection/v1/connection");
const connection_5 = require("./types/ibc/core/connection/v1/connection");
const genesis_1 = require("./types/ibc/core/connection/v1/genesis");
const tx_6 = require("./types/ibc/core/connection/v1/tx");
const connection_6 = require("./types/ibc/core/connection/v1/connection");
const query_7 = require("./types/ibc/core/connection/v1/query");
const query_8 = require("./types/ibc/core/connection/v1/query");
const tx_7 = require("./types/ibc/core/connection/v1/tx");
const tx_8 = require("./types/ibc/core/connection/v1/tx");
const query_9 = require("./types/ibc/core/connection/v1/query");
const query_10 = require("./types/ibc/core/connection/v1/query");
const tx_9 = require("./types/ibc/core/connection/v1/tx");
const query_11 = require("./types/ibc/core/connection/v1/query");
const connection_7 = require("./types/ibc/core/connection/v1/connection");
const tx_10 = require("./types/ibc/core/connection/v1/tx");
const query_12 = require("./types/ibc/core/connection/v1/query");
const msgTypes = [
    ["/ibc.core.connection.v1.MsgConnectionOpenTry", tx_1.MsgConnectionOpenTry],
    ["/ibc.core.connection.v1.MsgConnectionOpenTryResponse", tx_2.MsgConnectionOpenTryResponse],
    ["/ibc.core.connection.v1.QueryConnectionClientStateResponse", query_1.QueryConnectionClientStateResponse],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateResponse", query_2.QueryConnectionConsensusStateResponse],
    ["/ibc.core.connection.v1.QueryConnectionClientStateRequest", query_3.QueryConnectionClientStateRequest],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateRequest", query_4.QueryConnectionConsensusStateRequest],
    ["/ibc.core.connection.v1.ConnectionPaths", connection_1.ConnectionPaths],
    ["/ibc.core.connection.v1.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/ibc.core.connection.v1.ConnectionEnd", connection_2.ConnectionEnd],
    ["/ibc.core.connection.v1.MsgConnectionOpenAckResponse", tx_4.MsgConnectionOpenAckResponse],
    ["/ibc.core.connection.v1.MsgUpdateParamsResponse", tx_5.MsgUpdateParamsResponse],
    ["/ibc.core.connection.v1.IdentifiedConnection", connection_3.IdentifiedConnection],
    ["/ibc.core.connection.v1.QueryConnectionsResponse", query_5.QueryConnectionsResponse],
    ["/ibc.core.connection.v1.QueryConnectionParamsResponse", query_6.QueryConnectionParamsResponse],
    ["/ibc.core.connection.v1.Version", connection_4.Version],
    ["/ibc.core.connection.v1.Counterparty", connection_5.Counterparty],
    ["/ibc.core.connection.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", tx_6.MsgConnectionOpenConfirm],
    ["/ibc.core.connection.v1.Params", connection_6.Params],
    ["/ibc.core.connection.v1.QueryConnectionRequest", query_7.QueryConnectionRequest],
    ["/ibc.core.connection.v1.QueryConnectionResponse", query_8.QueryConnectionResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenInitResponse", tx_7.MsgConnectionOpenInitResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse", tx_8.MsgConnectionOpenConfirmResponse],
    ["/ibc.core.connection.v1.QueryClientConnectionsRequest", query_9.QueryClientConnectionsRequest],
    ["/ibc.core.connection.v1.QueryClientConnectionsResponse", query_10.QueryClientConnectionsResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenInit", tx_9.MsgConnectionOpenInit],
    ["/ibc.core.connection.v1.QueryConnectionsRequest", query_11.QueryConnectionsRequest],
    ["/ibc.core.connection.v1.ClientPaths", connection_7.ClientPaths],
    ["/ibc.core.connection.v1.MsgConnectionOpenAck", tx_10.MsgConnectionOpenAck],
    ["/ibc.core.connection.v1.QueryConnectionParamsRequest", query_12.QueryConnectionParamsRequest],
];
exports.msgTypes = msgTypes;
