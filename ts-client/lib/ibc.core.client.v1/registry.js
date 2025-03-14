"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/core/client/v1/tx");
const client_1 = require("./types/ibc/core/client/v1/client");
const client_2 = require("./types/ibc/core/client/v1/client");
const client_3 = require("./types/ibc/core/client/v1/client");
const tx_2 = require("./types/ibc/core/client/v1/tx");
const tx_3 = require("./types/ibc/core/client/v1/tx");
const tx_4 = require("./types/ibc/core/client/v1/tx");
const client_4 = require("./types/ibc/core/client/v1/client");
const query_1 = require("./types/ibc/core/client/v1/query");
const query_2 = require("./types/ibc/core/client/v1/query");
const genesis_1 = require("./types/ibc/core/client/v1/genesis");
const tx_5 = require("./types/ibc/core/client/v1/tx");
const tx_6 = require("./types/ibc/core/client/v1/tx");
const tx_7 = require("./types/ibc/core/client/v1/tx");
const query_3 = require("./types/ibc/core/client/v1/query");
const query_4 = require("./types/ibc/core/client/v1/query");
const query_5 = require("./types/ibc/core/client/v1/query");
const query_6 = require("./types/ibc/core/client/v1/query");
const query_7 = require("./types/ibc/core/client/v1/query");
const tx_8 = require("./types/ibc/core/client/v1/tx");
const client_5 = require("./types/ibc/core/client/v1/client");
const genesis_2 = require("./types/ibc/core/client/v1/genesis");
const query_8 = require("./types/ibc/core/client/v1/query");
const client_6 = require("./types/ibc/core/client/v1/client");
const query_9 = require("./types/ibc/core/client/v1/query");
const query_10 = require("./types/ibc/core/client/v1/query");
const query_11 = require("./types/ibc/core/client/v1/query");
const tx_9 = require("./types/ibc/core/client/v1/tx");
const tx_10 = require("./types/ibc/core/client/v1/tx");
const query_12 = require("./types/ibc/core/client/v1/query");
const client_7 = require("./types/ibc/core/client/v1/client");
const tx_11 = require("./types/ibc/core/client/v1/tx");
const query_13 = require("./types/ibc/core/client/v1/query");
const query_14 = require("./types/ibc/core/client/v1/query");
const tx_12 = require("./types/ibc/core/client/v1/tx");
const query_15 = require("./types/ibc/core/client/v1/query");
const query_16 = require("./types/ibc/core/client/v1/query");
const query_17 = require("./types/ibc/core/client/v1/query");
const query_18 = require("./types/ibc/core/client/v1/query");
const tx_13 = require("./types/ibc/core/client/v1/tx");
const genesis_3 = require("./types/ibc/core/client/v1/genesis");
const tx_14 = require("./types/ibc/core/client/v1/tx");
const msgTypes = [
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", tx_1.MsgIBCSoftwareUpgrade],
    ["/ibc.core.client.v1.Height", client_1.Height],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_2.ClientUpdateProposal],
    ["/ibc.core.client.v1.UpgradeProposal", client_3.UpgradeProposal],
    ["/ibc.core.client.v1.MsgCreateClientResponse", tx_2.MsgCreateClientResponse],
    ["/ibc.core.client.v1.MsgRecoverClient", tx_3.MsgRecoverClient],
    ["/ibc.core.client.v1.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/ibc.core.client.v1.ConsensusStateWithHeight", client_4.ConsensusStateWithHeight],
    ["/ibc.core.client.v1.QueryClientStatusResponse", query_1.QueryClientStatusResponse],
    ["/ibc.core.client.v1.QueryUpgradedClientStateRequest", query_2.QueryUpgradedClientStateRequest],
    ["/ibc.core.client.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.client.v1.MsgUpdateClient", tx_5.MsgUpdateClient],
    ["/ibc.core.client.v1.MsgUpgradeClient", tx_6.MsgUpgradeClient],
    ["/ibc.core.client.v1.MsgUpgradeClientResponse", tx_7.MsgUpgradeClientResponse],
    ["/ibc.core.client.v1.QueryClientStateRequest", query_3.QueryClientStateRequest],
    ["/ibc.core.client.v1.QueryClientStatesRequest", query_4.QueryClientStatesRequest],
    ["/ibc.core.client.v1.QueryConsensusStatesRequest", query_5.QueryConsensusStatesRequest],
    ["/ibc.core.client.v1.QueryClientStatusRequest", query_6.QueryClientStatusRequest],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateRequest", query_7.QueryUpgradedConsensusStateRequest],
    ["/ibc.core.client.v1.MsgUpdateClientResponse", tx_8.MsgUpdateClientResponse],
    ["/ibc.core.client.v1.ClientConsensusStates", client_5.ClientConsensusStates],
    ["/ibc.core.client.v1.IdentifiedGenesisMetadata", genesis_2.IdentifiedGenesisMetadata],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateResponse", query_8.QueryUpgradedConsensusStateResponse],
    ["/ibc.core.client.v1.IdentifiedClientState", client_6.IdentifiedClientState],
    ["/ibc.core.client.v1.QueryClientStateResponse", query_9.QueryClientStateResponse],
    ["/ibc.core.client.v1.QueryClientStatesResponse", query_10.QueryClientStatesResponse],
    ["/ibc.core.client.v1.QueryUpgradedClientStateResponse", query_11.QueryUpgradedClientStateResponse],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse", tx_9.MsgIBCSoftwareUpgradeResponse],
    ["/ibc.core.client.v1.MsgRecoverClientResponse", tx_10.MsgRecoverClientResponse],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsResponse", query_12.QueryConsensusStateHeightsResponse],
    ["/ibc.core.client.v1.Params", client_7.Params],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviourResponse", tx_11.MsgSubmitMisbehaviourResponse],
    ["/ibc.core.client.v1.QueryConsensusStateResponse", query_13.QueryConsensusStateResponse],
    ["/ibc.core.client.v1.QueryClientParamsRequest", query_14.QueryClientParamsRequest],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviour", tx_12.MsgSubmitMisbehaviour],
    ["/ibc.core.client.v1.QueryConsensusStateRequest", query_15.QueryConsensusStateRequest],
    ["/ibc.core.client.v1.QueryConsensusStatesResponse", query_16.QueryConsensusStatesResponse],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsRequest", query_17.QueryConsensusStateHeightsRequest],
    ["/ibc.core.client.v1.QueryClientParamsResponse", query_18.QueryClientParamsResponse],
    ["/ibc.core.client.v1.MsgUpdateParamsResponse", tx_13.MsgUpdateParamsResponse],
    ["/ibc.core.client.v1.GenesisMetadata", genesis_3.GenesisMetadata],
    ["/ibc.core.client.v1.MsgCreateClient", tx_14.MsgCreateClient],
];
exports.msgTypes = msgTypes;
