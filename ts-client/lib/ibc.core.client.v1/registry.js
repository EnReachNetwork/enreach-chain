"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/core/client/v1/tx");
const tx_2 = require("./types/ibc/core/client/v1/tx");
const query_1 = require("./types/ibc/core/client/v1/query");
const client_1 = require("./types/ibc/core/client/v1/client");
const client_2 = require("./types/ibc/core/client/v1/client");
const query_2 = require("./types/ibc/core/client/v1/query");
const query_3 = require("./types/ibc/core/client/v1/query");
const tx_3 = require("./types/ibc/core/client/v1/tx");
const client_3 = require("./types/ibc/core/client/v1/client");
const query_4 = require("./types/ibc/core/client/v1/query");
const client_4 = require("./types/ibc/core/client/v1/client");
const client_5 = require("./types/ibc/core/client/v1/client");
const tx_4 = require("./types/ibc/core/client/v1/tx");
const tx_5 = require("./types/ibc/core/client/v1/tx");
const tx_6 = require("./types/ibc/core/client/v1/tx");
const query_5 = require("./types/ibc/core/client/v1/query");
const query_6 = require("./types/ibc/core/client/v1/query");
const tx_7 = require("./types/ibc/core/client/v1/tx");
const tx_8 = require("./types/ibc/core/client/v1/tx");
const query_7 = require("./types/ibc/core/client/v1/query");
const tx_9 = require("./types/ibc/core/client/v1/tx");
const query_8 = require("./types/ibc/core/client/v1/query");
const query_9 = require("./types/ibc/core/client/v1/query");
const tx_10 = require("./types/ibc/core/client/v1/tx");
const genesis_1 = require("./types/ibc/core/client/v1/genesis");
const query_10 = require("./types/ibc/core/client/v1/query");
const query_11 = require("./types/ibc/core/client/v1/query");
const tx_11 = require("./types/ibc/core/client/v1/tx");
const query_12 = require("./types/ibc/core/client/v1/query");
const query_13 = require("./types/ibc/core/client/v1/query");
const query_14 = require("./types/ibc/core/client/v1/query");
const genesis_2 = require("./types/ibc/core/client/v1/genesis");
const genesis_3 = require("./types/ibc/core/client/v1/genesis");
const client_6 = require("./types/ibc/core/client/v1/client");
const query_15 = require("./types/ibc/core/client/v1/query");
const query_16 = require("./types/ibc/core/client/v1/query");
const tx_12 = require("./types/ibc/core/client/v1/tx");
const query_17 = require("./types/ibc/core/client/v1/query");
const client_7 = require("./types/ibc/core/client/v1/client");
const query_18 = require("./types/ibc/core/client/v1/query");
const tx_13 = require("./types/ibc/core/client/v1/tx");
const tx_14 = require("./types/ibc/core/client/v1/tx");
const msgTypes = [
    ["/ibc.core.client.v1.MsgCreateClientResponse", tx_1.MsgCreateClientResponse],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviourResponse", tx_2.MsgSubmitMisbehaviourResponse],
    ["/ibc.core.client.v1.QueryConsensusStateResponse", query_1.QueryConsensusStateResponse],
    ["/ibc.core.client.v1.ClientConsensusStates", client_1.ClientConsensusStates],
    ["/ibc.core.client.v1.IdentifiedClientState", client_2.IdentifiedClientState],
    ["/ibc.core.client.v1.QueryClientStatusRequest", query_2.QueryClientStatusRequest],
    ["/ibc.core.client.v1.QueryUpgradedClientStateResponse", query_3.QueryUpgradedClientStateResponse],
    ["/ibc.core.client.v1.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/ibc.core.client.v1.ConsensusStateWithHeight", client_3.ConsensusStateWithHeight],
    ["/ibc.core.client.v1.QueryConsensusStatesResponse", query_4.QueryConsensusStatesResponse],
    ["/ibc.core.client.v1.Params", client_4.Params],
    ["/ibc.core.client.v1.UpgradeProposal", client_5.UpgradeProposal],
    ["/ibc.core.client.v1.MsgCreateClient", tx_4.MsgCreateClient],
    ["/ibc.core.client.v1.MsgUpdateClient", tx_5.MsgUpdateClient],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviour", tx_6.MsgSubmitMisbehaviour],
    ["/ibc.core.client.v1.QueryClientParamsResponse", query_5.QueryClientParamsResponse],
    ["/ibc.core.client.v1.QueryUpgradedClientStateRequest", query_6.QueryUpgradedClientStateRequest],
    ["/ibc.core.client.v1.MsgUpgradeClientResponse", tx_7.MsgUpgradeClientResponse],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse", tx_8.MsgIBCSoftwareUpgradeResponse],
    ["/ibc.core.client.v1.QueryClientStateResponse", query_7.QueryClientStateResponse],
    ["/ibc.core.client.v1.MsgUpgradeClient", tx_9.MsgUpgradeClient],
    ["/ibc.core.client.v1.QueryClientParamsRequest", query_8.QueryClientParamsRequest],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateResponse", query_9.QueryUpgradedConsensusStateResponse],
    ["/ibc.core.client.v1.MsgRecoverClientResponse", tx_10.MsgRecoverClientResponse],
    ["/ibc.core.client.v1.GenesisMetadata", genesis_1.GenesisMetadata],
    ["/ibc.core.client.v1.QueryConsensusStateRequest", query_10.QueryConsensusStateRequest],
    ["/ibc.core.client.v1.QueryClientStatesResponse", query_11.QueryClientStatesResponse],
    ["/ibc.core.client.v1.MsgRecoverClient", tx_11.MsgRecoverClient],
    ["/ibc.core.client.v1.QueryClientStateRequest", query_12.QueryClientStateRequest],
    ["/ibc.core.client.v1.QueryClientStatesRequest", query_13.QueryClientStatesRequest],
    ["/ibc.core.client.v1.QueryClientStatusResponse", query_14.QueryClientStatusResponse],
    ["/ibc.core.client.v1.GenesisState", genesis_2.GenesisState],
    ["/ibc.core.client.v1.IdentifiedGenesisMetadata", genesis_3.IdentifiedGenesisMetadata],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_6.ClientUpdateProposal],
    ["/ibc.core.client.v1.QueryConsensusStatesRequest", query_15.QueryConsensusStatesRequest],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateRequest", query_16.QueryUpgradedConsensusStateRequest],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", tx_12.MsgIBCSoftwareUpgrade],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsRequest", query_17.QueryConsensusStateHeightsRequest],
    ["/ibc.core.client.v1.Height", client_7.Height],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsResponse", query_18.QueryConsensusStateHeightsResponse],
    ["/ibc.core.client.v1.MsgUpdateClientResponse", tx_13.MsgUpdateClientResponse],
    ["/ibc.core.client.v1.MsgUpdateParamsResponse", tx_14.MsgUpdateParamsResponse],
];
exports.msgTypes = msgTypes;
