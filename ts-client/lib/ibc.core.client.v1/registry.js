"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/core/client/v1/tx");
const genesis_1 = require("./types/ibc/core/client/v1/genesis");
const query_1 = require("./types/ibc/core/client/v1/query");
const tx_2 = require("./types/ibc/core/client/v1/tx");
const tx_3 = require("./types/ibc/core/client/v1/tx");
const tx_4 = require("./types/ibc/core/client/v1/tx");
const client_1 = require("./types/ibc/core/client/v1/client");
const genesis_2 = require("./types/ibc/core/client/v1/genesis");
const query_2 = require("./types/ibc/core/client/v1/query");
const query_3 = require("./types/ibc/core/client/v1/query");
const query_4 = require("./types/ibc/core/client/v1/query");
const query_5 = require("./types/ibc/core/client/v1/query");
const query_6 = require("./types/ibc/core/client/v1/query");
const query_7 = require("./types/ibc/core/client/v1/query");
const tx_5 = require("./types/ibc/core/client/v1/tx");
const tx_6 = require("./types/ibc/core/client/v1/tx");
const genesis_3 = require("./types/ibc/core/client/v1/genesis");
const query_8 = require("./types/ibc/core/client/v1/query");
const query_9 = require("./types/ibc/core/client/v1/query");
const client_2 = require("./types/ibc/core/client/v1/client");
const query_10 = require("./types/ibc/core/client/v1/query");
const query_11 = require("./types/ibc/core/client/v1/query");
const tx_7 = require("./types/ibc/core/client/v1/tx");
const client_3 = require("./types/ibc/core/client/v1/client");
const tx_8 = require("./types/ibc/core/client/v1/tx");
const client_4 = require("./types/ibc/core/client/v1/client");
const query_12 = require("./types/ibc/core/client/v1/query");
const tx_9 = require("./types/ibc/core/client/v1/tx");
const tx_10 = require("./types/ibc/core/client/v1/tx");
const client_5 = require("./types/ibc/core/client/v1/client");
const query_13 = require("./types/ibc/core/client/v1/query");
const client_6 = require("./types/ibc/core/client/v1/client");
const client_7 = require("./types/ibc/core/client/v1/client");
const tx_11 = require("./types/ibc/core/client/v1/tx");
const tx_12 = require("./types/ibc/core/client/v1/tx");
const tx_13 = require("./types/ibc/core/client/v1/tx");
const query_14 = require("./types/ibc/core/client/v1/query");
const query_15 = require("./types/ibc/core/client/v1/query");
const query_16 = require("./types/ibc/core/client/v1/query");
const tx_14 = require("./types/ibc/core/client/v1/tx");
const query_17 = require("./types/ibc/core/client/v1/query");
const query_18 = require("./types/ibc/core/client/v1/query");
const msgTypes = [
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", tx_1.MsgIBCSoftwareUpgrade],
    ["/ibc.core.client.v1.GenesisMetadata", genesis_1.GenesisMetadata],
    ["/ibc.core.client.v1.QueryConsensusStatesResponse", query_1.QueryConsensusStatesResponse],
    ["/ibc.core.client.v1.MsgUpdateClient", tx_2.MsgUpdateClient],
    ["/ibc.core.client.v1.MsgUpgradeClient", tx_3.MsgUpgradeClient],
    ["/ibc.core.client.v1.MsgUpgradeClientResponse", tx_4.MsgUpgradeClientResponse],
    ["/ibc.core.client.v1.ConsensusStateWithHeight", client_1.ConsensusStateWithHeight],
    ["/ibc.core.client.v1.IdentifiedGenesisMetadata", genesis_2.IdentifiedGenesisMetadata],
    ["/ibc.core.client.v1.QueryClientStatusRequest", query_2.QueryClientStatusRequest],
    ["/ibc.core.client.v1.QueryClientStateResponse", query_3.QueryClientStateResponse],
    ["/ibc.core.client.v1.QueryClientStateRequest", query_4.QueryClientStateRequest],
    ["/ibc.core.client.v1.QueryConsensusStateRequest", query_5.QueryConsensusStateRequest],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsRequest", query_6.QueryConsensusStateHeightsRequest],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsResponse", query_7.QueryConsensusStateHeightsResponse],
    ["/ibc.core.client.v1.MsgUpdateClientResponse", tx_5.MsgUpdateClientResponse],
    ["/ibc.core.client.v1.MsgRecoverClientResponse", tx_6.MsgRecoverClientResponse],
    ["/ibc.core.client.v1.GenesisState", genesis_3.GenesisState],
    ["/ibc.core.client.v1.QueryClientParamsResponse", query_8.QueryClientParamsResponse],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateRequest", query_9.QueryUpgradedConsensusStateRequest],
    ["/ibc.core.client.v1.Params", client_2.Params],
    ["/ibc.core.client.v1.QueryClientParamsRequest", query_10.QueryClientParamsRequest],
    ["/ibc.core.client.v1.QueryUpgradedClientStateResponse", query_11.QueryUpgradedClientStateResponse],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviourResponse", tx_7.MsgSubmitMisbehaviourResponse],
    ["/ibc.core.client.v1.ClientConsensusStates", client_3.ClientConsensusStates],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviour", tx_8.MsgSubmitMisbehaviour],
    ["/ibc.core.client.v1.UpgradeProposal", client_4.UpgradeProposal],
    ["/ibc.core.client.v1.QueryClientStatesResponse", query_12.QueryClientStatesResponse],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse", tx_9.MsgIBCSoftwareUpgradeResponse],
    ["/ibc.core.client.v1.MsgUpdateParamsResponse", tx_10.MsgUpdateParamsResponse],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_5.ClientUpdateProposal],
    ["/ibc.core.client.v1.QueryConsensusStateResponse", query_13.QueryConsensusStateResponse],
    ["/ibc.core.client.v1.IdentifiedClientState", client_6.IdentifiedClientState],
    ["/ibc.core.client.v1.Height", client_7.Height],
    ["/ibc.core.client.v1.MsgCreateClientResponse", tx_11.MsgCreateClientResponse],
    ["/ibc.core.client.v1.MsgRecoverClient", tx_12.MsgRecoverClient],
    ["/ibc.core.client.v1.MsgUpdateParams", tx_13.MsgUpdateParams],
    ["/ibc.core.client.v1.QueryUpgradedClientStateRequest", query_14.QueryUpgradedClientStateRequest],
    ["/ibc.core.client.v1.QueryClientStatesRequest", query_15.QueryClientStatesRequest],
    ["/ibc.core.client.v1.QueryClientStatusResponse", query_16.QueryClientStatusResponse],
    ["/ibc.core.client.v1.MsgCreateClient", tx_14.MsgCreateClient],
    ["/ibc.core.client.v1.QueryConsensusStatesRequest", query_17.QueryConsensusStatesRequest],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateResponse", query_18.QueryUpgradedConsensusStateResponse],
];
exports.msgTypes = msgTypes;
