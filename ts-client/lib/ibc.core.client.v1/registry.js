"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/core/client/v1/tx");
const tx_2 = require("./types/ibc/core/client/v1/tx");
const query_1 = require("./types/ibc/core/client/v1/query");
const query_2 = require("./types/ibc/core/client/v1/query");
const query_3 = require("./types/ibc/core/client/v1/query");
const query_4 = require("./types/ibc/core/client/v1/query");
const query_5 = require("./types/ibc/core/client/v1/query");
const query_6 = require("./types/ibc/core/client/v1/query");
const client_1 = require("./types/ibc/core/client/v1/client");
const tx_3 = require("./types/ibc/core/client/v1/tx");
const tx_4 = require("./types/ibc/core/client/v1/tx");
const tx_5 = require("./types/ibc/core/client/v1/tx");
const query_7 = require("./types/ibc/core/client/v1/query");
const query_8 = require("./types/ibc/core/client/v1/query");
const query_9 = require("./types/ibc/core/client/v1/query");
const tx_6 = require("./types/ibc/core/client/v1/tx");
const tx_7 = require("./types/ibc/core/client/v1/tx");
const client_2 = require("./types/ibc/core/client/v1/client");
const client_3 = require("./types/ibc/core/client/v1/client");
const genesis_1 = require("./types/ibc/core/client/v1/genesis");
const query_10 = require("./types/ibc/core/client/v1/query");
const client_4 = require("./types/ibc/core/client/v1/client");
const tx_8 = require("./types/ibc/core/client/v1/tx");
const tx_9 = require("./types/ibc/core/client/v1/tx");
const tx_10 = require("./types/ibc/core/client/v1/tx");
const query_11 = require("./types/ibc/core/client/v1/query");
const query_12 = require("./types/ibc/core/client/v1/query");
const tx_11 = require("./types/ibc/core/client/v1/tx");
const genesis_2 = require("./types/ibc/core/client/v1/genesis");
const query_13 = require("./types/ibc/core/client/v1/query");
const query_14 = require("./types/ibc/core/client/v1/query");
const tx_12 = require("./types/ibc/core/client/v1/tx");
const client_5 = require("./types/ibc/core/client/v1/client");
const query_15 = require("./types/ibc/core/client/v1/query");
const query_16 = require("./types/ibc/core/client/v1/query");
const client_6 = require("./types/ibc/core/client/v1/client");
const genesis_3 = require("./types/ibc/core/client/v1/genesis");
const query_17 = require("./types/ibc/core/client/v1/query");
const query_18 = require("./types/ibc/core/client/v1/query");
const client_7 = require("./types/ibc/core/client/v1/client");
const tx_13 = require("./types/ibc/core/client/v1/tx");
const tx_14 = require("./types/ibc/core/client/v1/tx");
const msgTypes = [
    ["/ibc.core.client.v1.MsgCreateClient", tx_1.MsgCreateClient],
    ["/ibc.core.client.v1.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/ibc.core.client.v1.QueryConsensusStatesResponse", query_1.QueryConsensusStatesResponse],
    ["/ibc.core.client.v1.QueryClientStatesRequest", query_2.QueryClientStatesRequest],
    ["/ibc.core.client.v1.QueryClientStatusRequest", query_3.QueryClientStatusRequest],
    ["/ibc.core.client.v1.QueryConsensusStateResponse", query_4.QueryConsensusStateResponse],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsRequest", query_5.QueryConsensusStateHeightsRequest],
    ["/ibc.core.client.v1.QueryUpgradedClientStateRequest", query_6.QueryUpgradedClientStateRequest],
    ["/ibc.core.client.v1.IdentifiedClientState", client_1.IdentifiedClientState],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviour", tx_3.MsgSubmitMisbehaviour],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", tx_4.MsgIBCSoftwareUpgrade],
    ["/ibc.core.client.v1.MsgCreateClientResponse", tx_5.MsgCreateClientResponse],
    ["/ibc.core.client.v1.QueryClientStatesResponse", query_7.QueryClientStatesResponse],
    ["/ibc.core.client.v1.QueryClientStateResponse", query_8.QueryClientStateResponse],
    ["/ibc.core.client.v1.QueryClientStatusResponse", query_9.QueryClientStatusResponse],
    ["/ibc.core.client.v1.MsgRecoverClient", tx_6.MsgRecoverClient],
    ["/ibc.core.client.v1.MsgUpgradeClientResponse", tx_7.MsgUpgradeClientResponse],
    ["/ibc.core.client.v1.ClientConsensusStates", client_2.ClientConsensusStates],
    ["/ibc.core.client.v1.UpgradeProposal", client_3.UpgradeProposal],
    ["/ibc.core.client.v1.GenesisMetadata", genesis_1.GenesisMetadata],
    ["/ibc.core.client.v1.QueryClientStateRequest", query_10.QueryClientStateRequest],
    ["/ibc.core.client.v1.ConsensusStateWithHeight", client_4.ConsensusStateWithHeight],
    ["/ibc.core.client.v1.MsgUpdateClient", tx_8.MsgUpdateClient],
    ["/ibc.core.client.v1.MsgUpgradeClient", tx_9.MsgUpgradeClient],
    ["/ibc.core.client.v1.MsgUpdateParams", tx_10.MsgUpdateParams],
    ["/ibc.core.client.v1.QueryUpgradedClientStateResponse", query_11.QueryUpgradedClientStateResponse],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateRequest", query_12.QueryUpgradedConsensusStateRequest],
    ["/ibc.core.client.v1.MsgUpdateClientResponse", tx_11.MsgUpdateClientResponse],
    ["/ibc.core.client.v1.IdentifiedGenesisMetadata", genesis_2.IdentifiedGenesisMetadata],
    ["/ibc.core.client.v1.QueryConsensusStateRequest", query_13.QueryConsensusStateRequest],
    ["/ibc.core.client.v1.QueryConsensusStatesRequest", query_14.QueryConsensusStatesRequest],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse", tx_12.MsgIBCSoftwareUpgradeResponse],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_5.ClientUpdateProposal],
    ["/ibc.core.client.v1.QueryClientParamsResponse", query_15.QueryClientParamsResponse],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateResponse", query_16.QueryUpgradedConsensusStateResponse],
    ["/ibc.core.client.v1.Params", client_6.Params],
    ["/ibc.core.client.v1.GenesisState", genesis_3.GenesisState],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsResponse", query_17.QueryConsensusStateHeightsResponse],
    ["/ibc.core.client.v1.QueryClientParamsRequest", query_18.QueryClientParamsRequest],
    ["/ibc.core.client.v1.Height", client_7.Height],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviourResponse", tx_13.MsgSubmitMisbehaviourResponse],
    ["/ibc.core.client.v1.MsgRecoverClientResponse", tx_14.MsgRecoverClientResponse],
];
exports.msgTypes = msgTypes;
