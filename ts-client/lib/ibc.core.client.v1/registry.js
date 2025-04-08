"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const client_1 = require("./types/ibc/core/client/v1/client");
const genesis_1 = require("./types/ibc/core/client/v1/genesis");
const query_1 = require("./types/ibc/core/client/v1/query");
const query_2 = require("./types/ibc/core/client/v1/query");
const query_3 = require("./types/ibc/core/client/v1/query");
const tx_1 = require("./types/ibc/core/client/v1/tx");
const tx_2 = require("./types/ibc/core/client/v1/tx");
const client_2 = require("./types/ibc/core/client/v1/client");
const query_4 = require("./types/ibc/core/client/v1/query");
const query_5 = require("./types/ibc/core/client/v1/query");
const client_3 = require("./types/ibc/core/client/v1/client");
const genesis_2 = require("./types/ibc/core/client/v1/genesis");
const query_6 = require("./types/ibc/core/client/v1/query");
const tx_3 = require("./types/ibc/core/client/v1/tx");
const tx_4 = require("./types/ibc/core/client/v1/tx");
const tx_5 = require("./types/ibc/core/client/v1/tx");
const tx_6 = require("./types/ibc/core/client/v1/tx");
const query_7 = require("./types/ibc/core/client/v1/query");
const query_8 = require("./types/ibc/core/client/v1/query");
const query_9 = require("./types/ibc/core/client/v1/query");
const tx_7 = require("./types/ibc/core/client/v1/tx");
const tx_8 = require("./types/ibc/core/client/v1/tx");
const client_4 = require("./types/ibc/core/client/v1/client");
const tx_9 = require("./types/ibc/core/client/v1/tx");
const tx_10 = require("./types/ibc/core/client/v1/tx");
const query_10 = require("./types/ibc/core/client/v1/query");
const query_11 = require("./types/ibc/core/client/v1/query");
const query_12 = require("./types/ibc/core/client/v1/query");
const client_5 = require("./types/ibc/core/client/v1/client");
const query_13 = require("./types/ibc/core/client/v1/query");
const query_14 = require("./types/ibc/core/client/v1/query");
const query_15 = require("./types/ibc/core/client/v1/query");
const query_16 = require("./types/ibc/core/client/v1/query");
const tx_11 = require("./types/ibc/core/client/v1/tx");
const tx_12 = require("./types/ibc/core/client/v1/tx");
const client_6 = require("./types/ibc/core/client/v1/client");
const client_7 = require("./types/ibc/core/client/v1/client");
const tx_13 = require("./types/ibc/core/client/v1/tx");
const tx_14 = require("./types/ibc/core/client/v1/tx");
const genesis_3 = require("./types/ibc/core/client/v1/genesis");
const query_17 = require("./types/ibc/core/client/v1/query");
const query_18 = require("./types/ibc/core/client/v1/query");
const msgTypes = [
    ["/ibc.core.client.v1.ClientConsensusStates", client_1.ClientConsensusStates],
    ["/ibc.core.client.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.client.v1.QueryClientParamsResponse", query_1.QueryClientParamsResponse],
    ["/ibc.core.client.v1.QueryClientParamsRequest", query_2.QueryClientParamsRequest],
    ["/ibc.core.client.v1.QueryUpgradedClientStateResponse", query_3.QueryUpgradedClientStateResponse],
    ["/ibc.core.client.v1.MsgCreateClient", tx_1.MsgCreateClient],
    ["/ibc.core.client.v1.MsgRecoverClient", tx_2.MsgRecoverClient],
    ["/ibc.core.client.v1.ConsensusStateWithHeight", client_2.ConsensusStateWithHeight],
    ["/ibc.core.client.v1.QueryClientStatesResponse", query_4.QueryClientStatesResponse],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsRequest", query_5.QueryConsensusStateHeightsRequest],
    ["/ibc.core.client.v1.Height", client_3.Height],
    ["/ibc.core.client.v1.GenesisMetadata", genesis_2.GenesisMetadata],
    ["/ibc.core.client.v1.QueryConsensusStatesRequest", query_6.QueryConsensusStatesRequest],
    ["/ibc.core.client.v1.MsgUpdateClient", tx_3.MsgUpdateClient],
    ["/ibc.core.client.v1.MsgUpdateClientResponse", tx_4.MsgUpdateClientResponse],
    ["/ibc.core.client.v1.MsgUpgradeClient", tx_5.MsgUpgradeClient],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", tx_6.MsgIBCSoftwareUpgrade],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsResponse", query_7.QueryConsensusStateHeightsResponse],
    ["/ibc.core.client.v1.QueryClientStatusResponse", query_8.QueryClientStatusResponse],
    ["/ibc.core.client.v1.QueryUpgradedClientStateRequest", query_9.QueryUpgradedClientStateRequest],
    ["/ibc.core.client.v1.MsgRecoverClientResponse", tx_7.MsgRecoverClientResponse],
    ["/ibc.core.client.v1.MsgUpdateParams", tx_8.MsgUpdateParams],
    ["/ibc.core.client.v1.UpgradeProposal", client_4.UpgradeProposal],
    ["/ibc.core.client.v1.MsgUpgradeClientResponse", tx_9.MsgUpgradeClientResponse],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviour", tx_10.MsgSubmitMisbehaviour],
    ["/ibc.core.client.v1.QueryClientStateRequest", query_10.QueryClientStateRequest],
    ["/ibc.core.client.v1.QueryConsensusStatesResponse", query_11.QueryConsensusStatesResponse],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateResponse", query_12.QueryUpgradedConsensusStateResponse],
    ["/ibc.core.client.v1.IdentifiedClientState", client_5.IdentifiedClientState],
    ["/ibc.core.client.v1.QueryClientStateResponse", query_13.QueryClientStateResponse],
    ["/ibc.core.client.v1.QueryClientStatesRequest", query_14.QueryClientStatesRequest],
    ["/ibc.core.client.v1.QueryConsensusStateResponse", query_15.QueryConsensusStateResponse],
    ["/ibc.core.client.v1.QueryConsensusStateRequest", query_16.QueryConsensusStateRequest],
    ["/ibc.core.client.v1.MsgCreateClientResponse", tx_11.MsgCreateClientResponse],
    ["/ibc.core.client.v1.MsgUpdateParamsResponse", tx_12.MsgUpdateParamsResponse],
    ["/ibc.core.client.v1.Params", client_6.Params],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_7.ClientUpdateProposal],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviourResponse", tx_13.MsgSubmitMisbehaviourResponse],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse", tx_14.MsgIBCSoftwareUpgradeResponse],
    ["/ibc.core.client.v1.IdentifiedGenesisMetadata", genesis_3.IdentifiedGenesisMetadata],
    ["/ibc.core.client.v1.QueryClientStatusRequest", query_17.QueryClientStatusRequest],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateRequest", query_18.QueryUpgradedConsensusStateRequest],
];
exports.msgTypes = msgTypes;
