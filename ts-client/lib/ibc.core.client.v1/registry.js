"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/core/client/v1/tx");
const query_1 = require("./types/ibc/core/client/v1/query");
const query_2 = require("./types/ibc/core/client/v1/query");
const query_3 = require("./types/ibc/core/client/v1/query");
const genesis_1 = require("./types/ibc/core/client/v1/genesis");
const query_4 = require("./types/ibc/core/client/v1/query");
const client_1 = require("./types/ibc/core/client/v1/client");
const tx_2 = require("./types/ibc/core/client/v1/tx");
const tx_3 = require("./types/ibc/core/client/v1/tx");
const tx_4 = require("./types/ibc/core/client/v1/tx");
const query_5 = require("./types/ibc/core/client/v1/query");
const query_6 = require("./types/ibc/core/client/v1/query");
const query_7 = require("./types/ibc/core/client/v1/query");
const client_2 = require("./types/ibc/core/client/v1/client");
const tx_5 = require("./types/ibc/core/client/v1/tx");
const tx_6 = require("./types/ibc/core/client/v1/tx");
const query_8 = require("./types/ibc/core/client/v1/query");
const query_9 = require("./types/ibc/core/client/v1/query");
const client_3 = require("./types/ibc/core/client/v1/client");
const tx_7 = require("./types/ibc/core/client/v1/tx");
const tx_8 = require("./types/ibc/core/client/v1/tx");
const tx_9 = require("./types/ibc/core/client/v1/tx");
const query_10 = require("./types/ibc/core/client/v1/query");
const client_4 = require("./types/ibc/core/client/v1/client");
const client_5 = require("./types/ibc/core/client/v1/client");
const genesis_2 = require("./types/ibc/core/client/v1/genesis");
const genesis_3 = require("./types/ibc/core/client/v1/genesis");
const tx_10 = require("./types/ibc/core/client/v1/tx");
const query_11 = require("./types/ibc/core/client/v1/query");
const query_12 = require("./types/ibc/core/client/v1/query");
const client_6 = require("./types/ibc/core/client/v1/client");
const client_7 = require("./types/ibc/core/client/v1/client");
const tx_11 = require("./types/ibc/core/client/v1/tx");
const tx_12 = require("./types/ibc/core/client/v1/tx");
const query_13 = require("./types/ibc/core/client/v1/query");
const query_14 = require("./types/ibc/core/client/v1/query");
const tx_13 = require("./types/ibc/core/client/v1/tx");
const tx_14 = require("./types/ibc/core/client/v1/tx");
const query_15 = require("./types/ibc/core/client/v1/query");
const query_16 = require("./types/ibc/core/client/v1/query");
const query_17 = require("./types/ibc/core/client/v1/query");
const query_18 = require("./types/ibc/core/client/v1/query");
const msgTypes = [
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", tx_1.MsgIBCSoftwareUpgrade],
    ["/ibc.core.client.v1.QueryClientStatesResponse", query_1.QueryClientStatesResponse],
    ["/ibc.core.client.v1.QueryUpgradedClientStateRequest", query_2.QueryUpgradedClientStateRequest],
    ["/ibc.core.client.v1.QueryUpgradedClientStateResponse", query_3.QueryUpgradedClientStateResponse],
    ["/ibc.core.client.v1.IdentifiedGenesisMetadata", genesis_1.IdentifiedGenesisMetadata],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsResponse", query_4.QueryConsensusStateHeightsResponse],
    ["/ibc.core.client.v1.UpgradeProposal", client_1.UpgradeProposal],
    ["/ibc.core.client.v1.MsgUpdateClient", tx_2.MsgUpdateClient],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviour", tx_3.MsgSubmitMisbehaviour],
    ["/ibc.core.client.v1.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/ibc.core.client.v1.QueryClientStateRequest", query_5.QueryClientStateRequest],
    ["/ibc.core.client.v1.QueryClientStatesRequest", query_6.QueryClientStatesRequest],
    ["/ibc.core.client.v1.QueryClientParamsRequest", query_7.QueryClientParamsRequest],
    ["/ibc.core.client.v1.Params", client_2.Params],
    ["/ibc.core.client.v1.MsgCreateClient", tx_5.MsgCreateClient],
    ["/ibc.core.client.v1.MsgUpdateParamsResponse", tx_6.MsgUpdateParamsResponse],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateRequest", query_8.QueryUpgradedConsensusStateRequest],
    ["/ibc.core.client.v1.QueryClientStatusRequest", query_9.QueryClientStatusRequest],
    ["/ibc.core.client.v1.IdentifiedClientState", client_3.IdentifiedClientState],
    ["/ibc.core.client.v1.MsgCreateClientResponse", tx_7.MsgCreateClientResponse],
    ["/ibc.core.client.v1.MsgUpdateClientResponse", tx_8.MsgUpdateClientResponse],
    ["/ibc.core.client.v1.MsgUpgradeClient", tx_9.MsgUpgradeClient],
    ["/ibc.core.client.v1.QueryConsensusStatesResponse", query_10.QueryConsensusStatesResponse],
    ["/ibc.core.client.v1.ConsensusStateWithHeight", client_4.ConsensusStateWithHeight],
    ["/ibc.core.client.v1.ClientConsensusStates", client_5.ClientConsensusStates],
    ["/ibc.core.client.v1.GenesisState", genesis_2.GenesisState],
    ["/ibc.core.client.v1.GenesisMetadata", genesis_3.GenesisMetadata],
    ["/ibc.core.client.v1.MsgUpgradeClientResponse", tx_10.MsgUpgradeClientResponse],
    ["/ibc.core.client.v1.QueryConsensusStateResponse", query_11.QueryConsensusStateResponse],
    ["/ibc.core.client.v1.QueryClientParamsResponse", query_12.QueryClientParamsResponse],
    ["/ibc.core.client.v1.Height", client_6.Height],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_7.ClientUpdateProposal],
    ["/ibc.core.client.v1.MsgRecoverClientResponse", tx_11.MsgRecoverClientResponse],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse", tx_12.MsgIBCSoftwareUpgradeResponse],
    ["/ibc.core.client.v1.QueryClientStateResponse", query_13.QueryClientStateResponse],
    ["/ibc.core.client.v1.QueryConsensusStateRequest", query_14.QueryConsensusStateRequest],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviourResponse", tx_13.MsgSubmitMisbehaviourResponse],
    ["/ibc.core.client.v1.MsgRecoverClient", tx_14.MsgRecoverClient],
    ["/ibc.core.client.v1.QueryConsensusStatesRequest", query_15.QueryConsensusStatesRequest],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsRequest", query_16.QueryConsensusStateHeightsRequest],
    ["/ibc.core.client.v1.QueryClientStatusResponse", query_17.QueryClientStatusResponse],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateResponse", query_18.QueryUpgradedConsensusStateResponse],
];
exports.msgTypes = msgTypes;
