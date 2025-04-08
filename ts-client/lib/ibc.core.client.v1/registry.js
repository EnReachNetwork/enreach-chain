"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/core/client/v1/query");
const tx_1 = require("./types/ibc/core/client/v1/tx");
const query_2 = require("./types/ibc/core/client/v1/query");
const query_3 = require("./types/ibc/core/client/v1/query");
const tx_2 = require("./types/ibc/core/client/v1/tx");
const query_4 = require("./types/ibc/core/client/v1/query");
const client_1 = require("./types/ibc/core/client/v1/client");
const client_2 = require("./types/ibc/core/client/v1/client");
const query_5 = require("./types/ibc/core/client/v1/query");
const client_3 = require("./types/ibc/core/client/v1/client");
const client_4 = require("./types/ibc/core/client/v1/client");
const tx_3 = require("./types/ibc/core/client/v1/tx");
const query_6 = require("./types/ibc/core/client/v1/query");
const query_7 = require("./types/ibc/core/client/v1/query");
const query_8 = require("./types/ibc/core/client/v1/query");
const tx_4 = require("./types/ibc/core/client/v1/tx");
const client_5 = require("./types/ibc/core/client/v1/client");
const genesis_1 = require("./types/ibc/core/client/v1/genesis");
const genesis_2 = require("./types/ibc/core/client/v1/genesis");
const query_9 = require("./types/ibc/core/client/v1/query");
const tx_5 = require("./types/ibc/core/client/v1/tx");
const client_6 = require("./types/ibc/core/client/v1/client");
const tx_6 = require("./types/ibc/core/client/v1/tx");
const query_10 = require("./types/ibc/core/client/v1/query");
const query_11 = require("./types/ibc/core/client/v1/query");
const query_12 = require("./types/ibc/core/client/v1/query");
const tx_7 = require("./types/ibc/core/client/v1/tx");
const genesis_3 = require("./types/ibc/core/client/v1/genesis");
const query_13 = require("./types/ibc/core/client/v1/query");
const tx_8 = require("./types/ibc/core/client/v1/tx");
const query_14 = require("./types/ibc/core/client/v1/query");
const tx_9 = require("./types/ibc/core/client/v1/tx");
const query_15 = require("./types/ibc/core/client/v1/query");
const tx_10 = require("./types/ibc/core/client/v1/tx");
const tx_11 = require("./types/ibc/core/client/v1/tx");
const query_16 = require("./types/ibc/core/client/v1/query");
const query_17 = require("./types/ibc/core/client/v1/query");
const tx_12 = require("./types/ibc/core/client/v1/tx");
const client_7 = require("./types/ibc/core/client/v1/client");
const query_18 = require("./types/ibc/core/client/v1/query");
const tx_13 = require("./types/ibc/core/client/v1/tx");
const tx_14 = require("./types/ibc/core/client/v1/tx");
const msgTypes = [
    ["/ibc.core.client.v1.QueryUpgradedClientStateResponse", query_1.QueryUpgradedClientStateResponse],
    ["/ibc.core.client.v1.MsgRecoverClientResponse", tx_1.MsgRecoverClientResponse],
    ["/ibc.core.client.v1.QueryClientStatesResponse", query_2.QueryClientStatesResponse],
    ["/ibc.core.client.v1.QueryConsensusStatesResponse", query_3.QueryConsensusStatesResponse],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviour", tx_2.MsgSubmitMisbehaviour],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsRequest", query_4.QueryConsensusStateHeightsRequest],
    ["/ibc.core.client.v1.IdentifiedClientState", client_1.IdentifiedClientState],
    ["/ibc.core.client.v1.ConsensusStateWithHeight", client_2.ConsensusStateWithHeight],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateRequest", query_5.QueryUpgradedConsensusStateRequest],
    ["/ibc.core.client.v1.ClientConsensusStates", client_3.ClientConsensusStates],
    ["/ibc.core.client.v1.Params", client_4.Params],
    ["/ibc.core.client.v1.MsgCreateClient", tx_3.MsgCreateClient],
    ["/ibc.core.client.v1.QueryUpgradedClientStateRequest", query_6.QueryUpgradedClientStateRequest],
    ["/ibc.core.client.v1.QueryClientStatesRequest", query_7.QueryClientStatesRequest],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateResponse", query_8.QueryUpgradedConsensusStateResponse],
    ["/ibc.core.client.v1.MsgUpdateClientResponse", tx_4.MsgUpdateClientResponse],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_5.ClientUpdateProposal],
    ["/ibc.core.client.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.client.v1.GenesisMetadata", genesis_2.GenesisMetadata],
    ["/ibc.core.client.v1.QueryClientParamsResponse", query_9.QueryClientParamsResponse],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse", tx_5.MsgIBCSoftwareUpgradeResponse],
    ["/ibc.core.client.v1.Height", client_6.Height],
    ["/ibc.core.client.v1.MsgUpdateClient", tx_6.MsgUpdateClient],
    ["/ibc.core.client.v1.QueryClientParamsRequest", query_10.QueryClientParamsRequest],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsResponse", query_11.QueryConsensusStateHeightsResponse],
    ["/ibc.core.client.v1.QueryClientStatusRequest", query_12.QueryClientStatusRequest],
    ["/ibc.core.client.v1.MsgCreateClientResponse", tx_7.MsgCreateClientResponse],
    ["/ibc.core.client.v1.IdentifiedGenesisMetadata", genesis_3.IdentifiedGenesisMetadata],
    ["/ibc.core.client.v1.QueryClientStateResponse", query_13.QueryClientStateResponse],
    ["/ibc.core.client.v1.MsgUpgradeClient", tx_8.MsgUpgradeClient],
    ["/ibc.core.client.v1.QueryConsensusStateRequest", query_14.QueryConsensusStateRequest],
    ["/ibc.core.client.v1.MsgUpgradeClientResponse", tx_9.MsgUpgradeClientResponse],
    ["/ibc.core.client.v1.QueryClientStateRequest", query_15.QueryClientStateRequest],
    ["/ibc.core.client.v1.MsgUpdateParamsResponse", tx_10.MsgUpdateParamsResponse],
    ["/ibc.core.client.v1.MsgUpdateParams", tx_11.MsgUpdateParams],
    ["/ibc.core.client.v1.QueryConsensusStatesRequest", query_16.QueryConsensusStatesRequest],
    ["/ibc.core.client.v1.QueryClientStatusResponse", query_17.QueryClientStatusResponse],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviourResponse", tx_12.MsgSubmitMisbehaviourResponse],
    ["/ibc.core.client.v1.UpgradeProposal", client_7.UpgradeProposal],
    ["/ibc.core.client.v1.QueryConsensusStateResponse", query_18.QueryConsensusStateResponse],
    ["/ibc.core.client.v1.MsgRecoverClient", tx_13.MsgRecoverClient],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", tx_14.MsgIBCSoftwareUpgrade],
];
exports.msgTypes = msgTypes;
