"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/core/connection/v1/query");
const query_2 = require("./types/ibc/core/connection/v1/query");
const connection_1 = require("./types/ibc/core/connection/v1/connection");
const tx_1 = require("./types/ibc/core/connection/v1/tx");
const connection_2 = require("./types/ibc/core/connection/v1/connection");
const connection_3 = require("./types/ibc/core/connection/v1/connection");
const query_3 = require("./types/ibc/core/connection/v1/query");
const query_4 = require("./types/ibc/core/connection/v1/query");
const query_5 = require("./types/ibc/core/connection/v1/query");
const tx_2 = require("./types/ibc/core/connection/v1/tx");
const tx_3 = require("./types/ibc/core/connection/v1/tx");
const query_6 = require("./types/ibc/core/connection/v1/query");
const connection_4 = require("./types/ibc/core/connection/v1/connection");
const query_7 = require("./types/ibc/core/connection/v1/query");
const tx_4 = require("./types/ibc/core/connection/v1/tx");
const connection_5 = require("./types/ibc/core/connection/v1/connection");
const connection_6 = require("./types/ibc/core/connection/v1/connection");
const query_8 = require("./types/ibc/core/connection/v1/query");
const query_9 = require("./types/ibc/core/connection/v1/query");
const tx_5 = require("./types/ibc/core/connection/v1/tx");
const tx_6 = require("./types/ibc/core/connection/v1/tx");
const tx_7 = require("./types/ibc/core/connection/v1/tx");
const tx_8 = require("./types/ibc/core/connection/v1/tx");
const connection_7 = require("./types/ibc/core/connection/v1/connection");
const query_10 = require("./types/ibc/core/connection/v1/query");
const query_11 = require("./types/ibc/core/connection/v1/query");
const query_12 = require("./types/ibc/core/connection/v1/query");
const genesis_1 = require("./types/ibc/core/connection/v1/genesis");
const tx_9 = require("./types/ibc/core/connection/v1/tx");
const tx_10 = require("./types/ibc/core/connection/v1/tx");
const msgTypes = [
    ["/ibc.core.connection.v1.QueryConnectionClientStateResponse", query_1.QueryConnectionClientStateResponse],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateResponse", query_2.QueryConnectionConsensusStateResponse],
    ["/ibc.core.connection.v1.Params", connection_1.Params],
    ["/ibc.core.connection.v1.MsgConnectionOpenInitResponse", tx_1.MsgConnectionOpenInitResponse],
    ["/ibc.core.connection.v1.Counterparty", connection_2.Counterparty],
    ["/ibc.core.connection.v1.ConnectionPaths", connection_3.ConnectionPaths],
    ["/ibc.core.connection.v1.QueryConnectionsRequest", query_3.QueryConnectionsRequest],
    ["/ibc.core.connection.v1.QueryClientConnectionsRequest", query_4.QueryClientConnectionsRequest],
    ["/ibc.core.connection.v1.QueryConnectionParamsRequest", query_5.QueryConnectionParamsRequest],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", tx_2.MsgConnectionOpenConfirm],
    ["/ibc.core.connection.v1.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/ibc.core.connection.v1.QueryClientConnectionsResponse", query_6.QueryClientConnectionsResponse],
    ["/ibc.core.connection.v1.ClientPaths", connection_4.ClientPaths],
    ["/ibc.core.connection.v1.QueryConnectionRequest", query_7.QueryConnectionRequest],
    ["/ibc.core.connection.v1.MsgConnectionOpenAckResponse", tx_4.MsgConnectionOpenAckResponse],
    ["/ibc.core.connection.v1.Version", connection_5.Version],
    ["/ibc.core.connection.v1.ConnectionEnd", connection_6.ConnectionEnd],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateRequest", query_8.QueryConnectionConsensusStateRequest],
    ["/ibc.core.connection.v1.QueryConnectionsResponse", query_9.QueryConnectionsResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenInit", tx_5.MsgConnectionOpenInit],
    ["/ibc.core.connection.v1.MsgConnectionOpenAck", tx_6.MsgConnectionOpenAck],
    ["/ibc.core.connection.v1.MsgConnectionOpenTryResponse", tx_7.MsgConnectionOpenTryResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse", tx_8.MsgConnectionOpenConfirmResponse],
    ["/ibc.core.connection.v1.IdentifiedConnection", connection_7.IdentifiedConnection],
    ["/ibc.core.connection.v1.QueryConnectionClientStateRequest", query_10.QueryConnectionClientStateRequest],
    ["/ibc.core.connection.v1.QueryConnectionParamsResponse", query_11.QueryConnectionParamsResponse],
    ["/ibc.core.connection.v1.QueryConnectionResponse", query_12.QueryConnectionResponse],
    ["/ibc.core.connection.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.connection.v1.MsgConnectionOpenTry", tx_9.MsgConnectionOpenTry],
    ["/ibc.core.connection.v1.MsgUpdateParamsResponse", tx_10.MsgUpdateParamsResponse],
];
exports.msgTypes = msgTypes;
