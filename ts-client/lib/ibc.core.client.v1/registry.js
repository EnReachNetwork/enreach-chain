"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/core/client/v1/query");
const genesis_1 = require("./types/ibc/core/client/v1/genesis");
const client_1 = require("./types/ibc/core/client/v1/client");
const tx_1 = require("./types/ibc/core/client/v1/tx");
const tx_2 = require("./types/ibc/core/client/v1/tx");
const query_2 = require("./types/ibc/core/client/v1/query");
const genesis_2 = require("./types/ibc/core/client/v1/genesis");
const tx_3 = require("./types/ibc/core/client/v1/tx");
const tx_4 = require("./types/ibc/core/client/v1/tx");
const query_3 = require("./types/ibc/core/client/v1/query");
const query_4 = require("./types/ibc/core/client/v1/query");
const tx_5 = require("./types/ibc/core/client/v1/tx");
const tx_6 = require("./types/ibc/core/client/v1/tx");
const tx_7 = require("./types/ibc/core/client/v1/tx");
const query_5 = require("./types/ibc/core/client/v1/query");
const query_6 = require("./types/ibc/core/client/v1/query");
const genesis_3 = require("./types/ibc/core/client/v1/genesis");
const client_2 = require("./types/ibc/core/client/v1/client");
const query_7 = require("./types/ibc/core/client/v1/query");
const query_8 = require("./types/ibc/core/client/v1/query");
const query_9 = require("./types/ibc/core/client/v1/query");
const query_10 = require("./types/ibc/core/client/v1/query");
const query_11 = require("./types/ibc/core/client/v1/query");
const query_12 = require("./types/ibc/core/client/v1/query");
const client_3 = require("./types/ibc/core/client/v1/client");
const client_4 = require("./types/ibc/core/client/v1/client");
const tx_8 = require("./types/ibc/core/client/v1/tx");
const client_5 = require("./types/ibc/core/client/v1/client");
const client_6 = require("./types/ibc/core/client/v1/client");
const query_13 = require("./types/ibc/core/client/v1/query");
const tx_9 = require("./types/ibc/core/client/v1/tx");
const tx_10 = require("./types/ibc/core/client/v1/tx");
const tx_11 = require("./types/ibc/core/client/v1/tx");
const query_14 = require("./types/ibc/core/client/v1/query");
const query_15 = require("./types/ibc/core/client/v1/query");
const query_16 = require("./types/ibc/core/client/v1/query");
const query_17 = require("./types/ibc/core/client/v1/query");
const tx_12 = require("./types/ibc/core/client/v1/tx");
const client_7 = require("./types/ibc/core/client/v1/client");
const query_18 = require("./types/ibc/core/client/v1/query");
const tx_13 = require("./types/ibc/core/client/v1/tx");
const tx_14 = require("./types/ibc/core/client/v1/tx");
const msgTypes = [
    ["/ibc.core.client.v1.QueryClientStateResponse", query_1.QueryClientStateResponse],
    ["/ibc.core.client.v1.IdentifiedGenesisMetadata", genesis_1.IdentifiedGenesisMetadata],
    ["/ibc.core.client.v1.ClientConsensusStates", client_1.ClientConsensusStates],
    ["/ibc.core.client.v1.MsgCreateClientResponse", tx_1.MsgCreateClientResponse],
    ["/ibc.core.client.v1.MsgUpdateClientResponse", tx_2.MsgUpdateClientResponse],
    ["/ibc.core.client.v1.QueryConsensusStateResponse", query_2.QueryConsensusStateResponse],
    ["/ibc.core.client.v1.GenesisState", genesis_2.GenesisState],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", tx_3.MsgIBCSoftwareUpgrade],
    ["/ibc.core.client.v1.MsgRecoverClientResponse", tx_4.MsgRecoverClientResponse],
    ["/ibc.core.client.v1.QueryUpgradedClientStateRequest", query_3.QueryUpgradedClientStateRequest],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateRequest", query_4.QueryUpgradedConsensusStateRequest],
    ["/ibc.core.client.v1.MsgUpdateParams", tx_5.MsgUpdateParams],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse", tx_6.MsgIBCSoftwareUpgradeResponse],
    ["/ibc.core.client.v1.MsgUpdateParamsResponse", tx_7.MsgUpdateParamsResponse],
    ["/ibc.core.client.v1.QueryConsensusStateRequest", query_5.QueryConsensusStateRequest],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsRequest", query_6.QueryConsensusStateHeightsRequest],
    ["/ibc.core.client.v1.GenesisMetadata", genesis_3.GenesisMetadata],
    ["/ibc.core.client.v1.UpgradeProposal", client_2.UpgradeProposal],
    ["/ibc.core.client.v1.QueryClientStatesResponse", query_7.QueryClientStatesResponse],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsResponse", query_8.QueryConsensusStateHeightsResponse],
    ["/ibc.core.client.v1.QueryClientStatusRequest", query_9.QueryClientStatusRequest],
    ["/ibc.core.client.v1.QueryClientStatusResponse", query_10.QueryClientStatusResponse],
    ["/ibc.core.client.v1.QueryClientParamsRequest", query_11.QueryClientParamsRequest],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateResponse", query_12.QueryUpgradedConsensusStateResponse],
    ["/ibc.core.client.v1.Height", client_3.Height],
    ["/ibc.core.client.v1.Params", client_4.Params],
    ["/ibc.core.client.v1.MsgCreateClient", tx_8.MsgCreateClient],
    ["/ibc.core.client.v1.IdentifiedClientState", client_5.IdentifiedClientState],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_6.ClientUpdateProposal],
    ["/ibc.core.client.v1.QueryClientStateRequest", query_13.QueryClientStateRequest],
    ["/ibc.core.client.v1.MsgUpgradeClient", tx_9.MsgUpgradeClient],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviourResponse", tx_10.MsgSubmitMisbehaviourResponse],
    ["/ibc.core.client.v1.MsgUpgradeClientResponse", tx_11.MsgUpgradeClientResponse],
    ["/ibc.core.client.v1.QueryClientStatesRequest", query_14.QueryClientStatesRequest],
    ["/ibc.core.client.v1.QueryConsensusStatesRequest", query_15.QueryConsensusStatesRequest],
    ["/ibc.core.client.v1.QueryClientParamsResponse", query_16.QueryClientParamsResponse],
    ["/ibc.core.client.v1.QueryUpgradedClientStateResponse", query_17.QueryUpgradedClientStateResponse],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviour", tx_12.MsgSubmitMisbehaviour],
    ["/ibc.core.client.v1.ConsensusStateWithHeight", client_7.ConsensusStateWithHeight],
    ["/ibc.core.client.v1.QueryConsensusStatesResponse", query_18.QueryConsensusStatesResponse],
    ["/ibc.core.client.v1.MsgUpdateClient", tx_13.MsgUpdateClient],
    ["/ibc.core.client.v1.MsgRecoverClient", tx_14.MsgRecoverClient],
];
exports.msgTypes = msgTypes;
