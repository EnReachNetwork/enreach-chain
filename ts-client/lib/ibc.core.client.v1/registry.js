"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/core/client/v1/query");
const query_2 = require("./types/ibc/core/client/v1/query");
const query_3 = require("./types/ibc/core/client/v1/query");
const query_4 = require("./types/ibc/core/client/v1/query");
const query_5 = require("./types/ibc/core/client/v1/query");
const client_1 = require("./types/ibc/core/client/v1/client");
const query_6 = require("./types/ibc/core/client/v1/query");
const tx_1 = require("./types/ibc/core/client/v1/tx");
const client_2 = require("./types/ibc/core/client/v1/client");
const query_7 = require("./types/ibc/core/client/v1/query");
const query_8 = require("./types/ibc/core/client/v1/query");
const client_3 = require("./types/ibc/core/client/v1/client");
const tx_2 = require("./types/ibc/core/client/v1/tx");
const client_4 = require("./types/ibc/core/client/v1/client");
const tx_3 = require("./types/ibc/core/client/v1/tx");
const client_5 = require("./types/ibc/core/client/v1/client");
const tx_4 = require("./types/ibc/core/client/v1/tx");
const tx_5 = require("./types/ibc/core/client/v1/tx");
const genesis_1 = require("./types/ibc/core/client/v1/genesis");
const query_9 = require("./types/ibc/core/client/v1/query");
const tx_6 = require("./types/ibc/core/client/v1/tx");
const client_6 = require("./types/ibc/core/client/v1/client");
const query_10 = require("./types/ibc/core/client/v1/query");
const client_7 = require("./types/ibc/core/client/v1/client");
const tx_7 = require("./types/ibc/core/client/v1/tx");
const tx_8 = require("./types/ibc/core/client/v1/tx");
const genesis_2 = require("./types/ibc/core/client/v1/genesis");
const query_11 = require("./types/ibc/core/client/v1/query");
const tx_9 = require("./types/ibc/core/client/v1/tx");
const tx_10 = require("./types/ibc/core/client/v1/tx");
const tx_11 = require("./types/ibc/core/client/v1/tx");
const query_12 = require("./types/ibc/core/client/v1/query");
const query_13 = require("./types/ibc/core/client/v1/query");
const query_14 = require("./types/ibc/core/client/v1/query");
const query_15 = require("./types/ibc/core/client/v1/query");
const query_16 = require("./types/ibc/core/client/v1/query");
const query_17 = require("./types/ibc/core/client/v1/query");
const tx_12 = require("./types/ibc/core/client/v1/tx");
const genesis_3 = require("./types/ibc/core/client/v1/genesis");
const tx_13 = require("./types/ibc/core/client/v1/tx");
const tx_14 = require("./types/ibc/core/client/v1/tx");
const query_18 = require("./types/ibc/core/client/v1/query");
const msgTypes = [
    ["/ibc.core.client.v1.QueryConsensusStatesRequest", query_1.QueryConsensusStatesRequest],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsRequest", query_2.QueryConsensusStateHeightsRequest],
    ["/ibc.core.client.v1.QueryClientParamsRequest", query_3.QueryClientParamsRequest],
    ["/ibc.core.client.v1.QueryClientParamsResponse", query_4.QueryClientParamsResponse],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateResponse", query_5.QueryUpgradedConsensusStateResponse],
    ["/ibc.core.client.v1.ClientConsensusStates", client_1.ClientConsensusStates],
    ["/ibc.core.client.v1.QueryClientStatesRequest", query_6.QueryClientStatesRequest],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse", tx_1.MsgIBCSoftwareUpgradeResponse],
    ["/ibc.core.client.v1.ConsensusStateWithHeight", client_2.ConsensusStateWithHeight],
    ["/ibc.core.client.v1.QueryConsensusStateResponse", query_7.QueryConsensusStateResponse],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsResponse", query_8.QueryConsensusStateHeightsResponse],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_3.ClientUpdateProposal],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviour", tx_2.MsgSubmitMisbehaviour],
    ["/ibc.core.client.v1.IdentifiedClientState", client_4.IdentifiedClientState],
    ["/ibc.core.client.v1.MsgCreateClientResponse", tx_3.MsgCreateClientResponse],
    ["/ibc.core.client.v1.UpgradeProposal", client_5.UpgradeProposal],
    ["/ibc.core.client.v1.MsgRecoverClient", tx_4.MsgRecoverClient],
    ["/ibc.core.client.v1.MsgUpdateClientResponse", tx_5.MsgUpdateClientResponse],
    ["/ibc.core.client.v1.IdentifiedGenesisMetadata", genesis_1.IdentifiedGenesisMetadata],
    ["/ibc.core.client.v1.QueryConsensusStateRequest", query_9.QueryConsensusStateRequest],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", tx_6.MsgIBCSoftwareUpgrade],
    ["/ibc.core.client.v1.Params", client_6.Params],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateRequest", query_10.QueryUpgradedConsensusStateRequest],
    ["/ibc.core.client.v1.Height", client_7.Height],
    ["/ibc.core.client.v1.MsgRecoverClientResponse", tx_7.MsgRecoverClientResponse],
    ["/ibc.core.client.v1.MsgUpdateParamsResponse", tx_8.MsgUpdateParamsResponse],
    ["/ibc.core.client.v1.GenesisMetadata", genesis_2.GenesisMetadata],
    ["/ibc.core.client.v1.QueryConsensusStatesResponse", query_11.QueryConsensusStatesResponse],
    ["/ibc.core.client.v1.MsgUpdateClient", tx_9.MsgUpdateClient],
    ["/ibc.core.client.v1.MsgUpgradeClient", tx_10.MsgUpgradeClient],
    ["/ibc.core.client.v1.MsgUpgradeClientResponse", tx_11.MsgUpgradeClientResponse],
    ["/ibc.core.client.v1.QueryClientStatesResponse", query_12.QueryClientStatesResponse],
    ["/ibc.core.client.v1.QueryClientStateResponse", query_13.QueryClientStateResponse],
    ["/ibc.core.client.v1.QueryClientStateRequest", query_14.QueryClientStateRequest],
    ["/ibc.core.client.v1.QueryClientStatusRequest", query_15.QueryClientStatusRequest],
    ["/ibc.core.client.v1.QueryClientStatusResponse", query_16.QueryClientStatusResponse],
    ["/ibc.core.client.v1.QueryUpgradedClientStateResponse", query_17.QueryUpgradedClientStateResponse],
    ["/ibc.core.client.v1.MsgCreateClient", tx_12.MsgCreateClient],
    ["/ibc.core.client.v1.GenesisState", genesis_3.GenesisState],
    ["/ibc.core.client.v1.MsgUpdateParams", tx_13.MsgUpdateParams],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviourResponse", tx_14.MsgSubmitMisbehaviourResponse],
    ["/ibc.core.client.v1.QueryUpgradedClientStateRequest", query_18.QueryUpgradedClientStateRequest],
];
exports.msgTypes = msgTypes;
