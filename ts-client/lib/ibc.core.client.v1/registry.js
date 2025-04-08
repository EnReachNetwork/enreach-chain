"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const client_1 = require("./types/ibc/core/client/v1/client");
const query_1 = require("./types/ibc/core/client/v1/query");
const query_2 = require("./types/ibc/core/client/v1/query");
const query_3 = require("./types/ibc/core/client/v1/query");
const query_4 = require("./types/ibc/core/client/v1/query");
const tx_1 = require("./types/ibc/core/client/v1/tx");
const tx_2 = require("./types/ibc/core/client/v1/tx");
const tx_3 = require("./types/ibc/core/client/v1/tx");
const tx_4 = require("./types/ibc/core/client/v1/tx");
const client_2 = require("./types/ibc/core/client/v1/client");
const client_3 = require("./types/ibc/core/client/v1/client");
const client_4 = require("./types/ibc/core/client/v1/client");
const query_5 = require("./types/ibc/core/client/v1/query");
const genesis_1 = require("./types/ibc/core/client/v1/genesis");
const tx_5 = require("./types/ibc/core/client/v1/tx");
const tx_6 = require("./types/ibc/core/client/v1/tx");
const tx_7 = require("./types/ibc/core/client/v1/tx");
const query_6 = require("./types/ibc/core/client/v1/query");
const tx_8 = require("./types/ibc/core/client/v1/tx");
const tx_9 = require("./types/ibc/core/client/v1/tx");
const tx_10 = require("./types/ibc/core/client/v1/tx");
const query_7 = require("./types/ibc/core/client/v1/query");
const query_8 = require("./types/ibc/core/client/v1/query");
const tx_11 = require("./types/ibc/core/client/v1/tx");
const query_9 = require("./types/ibc/core/client/v1/query");
const query_10 = require("./types/ibc/core/client/v1/query");
const client_5 = require("./types/ibc/core/client/v1/client");
const client_6 = require("./types/ibc/core/client/v1/client");
const query_11 = require("./types/ibc/core/client/v1/query");
const query_12 = require("./types/ibc/core/client/v1/query");
const query_13 = require("./types/ibc/core/client/v1/query");
const query_14 = require("./types/ibc/core/client/v1/query");
const query_15 = require("./types/ibc/core/client/v1/query");
const query_16 = require("./types/ibc/core/client/v1/query");
const tx_12 = require("./types/ibc/core/client/v1/tx");
const client_7 = require("./types/ibc/core/client/v1/client");
const query_17 = require("./types/ibc/core/client/v1/query");
const query_18 = require("./types/ibc/core/client/v1/query");
const genesis_2 = require("./types/ibc/core/client/v1/genesis");
const genesis_3 = require("./types/ibc/core/client/v1/genesis");
const tx_13 = require("./types/ibc/core/client/v1/tx");
const tx_14 = require("./types/ibc/core/client/v1/tx");
const msgTypes = [
    ["/ibc.core.client.v1.UpgradeProposal", client_1.UpgradeProposal],
    ["/ibc.core.client.v1.QueryClientStatesResponse", query_1.QueryClientStatesResponse],
    ["/ibc.core.client.v1.QueryConsensusStatesResponse", query_2.QueryConsensusStatesResponse],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsResponse", query_3.QueryConsensusStateHeightsResponse],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateRequest", query_4.QueryUpgradedConsensusStateRequest],
    ["/ibc.core.client.v1.MsgUpdateClient", tx_1.MsgUpdateClient],
    ["/ibc.core.client.v1.MsgUpgradeClient", tx_2.MsgUpgradeClient],
    ["/ibc.core.client.v1.MsgUpdateClientResponse", tx_3.MsgUpdateClientResponse],
    ["/ibc.core.client.v1.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/ibc.core.client.v1.IdentifiedClientState", client_2.IdentifiedClientState],
    ["/ibc.core.client.v1.ClientConsensusStates", client_3.ClientConsensusStates],
    ["/ibc.core.client.v1.Params", client_4.Params],
    ["/ibc.core.client.v1.QueryClientStatusRequest", query_5.QueryClientStatusRequest],
    ["/ibc.core.client.v1.IdentifiedGenesisMetadata", genesis_1.IdentifiedGenesisMetadata],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviour", tx_5.MsgSubmitMisbehaviour],
    ["/ibc.core.client.v1.MsgRecoverClient", tx_6.MsgRecoverClient],
    ["/ibc.core.client.v1.MsgUpdateParams", tx_7.MsgUpdateParams],
    ["/ibc.core.client.v1.QueryConsensusStateResponse", query_6.QueryConsensusStateResponse],
    ["/ibc.core.client.v1.MsgCreateClient", tx_8.MsgCreateClient],
    ["/ibc.core.client.v1.MsgCreateClientResponse", tx_9.MsgCreateClientResponse],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviourResponse", tx_10.MsgSubmitMisbehaviourResponse],
    ["/ibc.core.client.v1.QueryClientParamsResponse", query_7.QueryClientParamsResponse],
    ["/ibc.core.client.v1.QueryUpgradedClientStateResponse", query_8.QueryUpgradedClientStateResponse],
    ["/ibc.core.client.v1.MsgRecoverClientResponse", tx_11.MsgRecoverClientResponse],
    ["/ibc.core.client.v1.QueryClientStatesRequest", query_9.QueryClientStatesRequest],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsRequest", query_10.QueryConsensusStateHeightsRequest],
    ["/ibc.core.client.v1.ConsensusStateWithHeight", client_5.ConsensusStateWithHeight],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_6.ClientUpdateProposal],
    ["/ibc.core.client.v1.QueryClientStateRequest", query_11.QueryClientStateRequest],
    ["/ibc.core.client.v1.QueryConsensusStateRequest", query_12.QueryConsensusStateRequest],
    ["/ibc.core.client.v1.QueryConsensusStatesRequest", query_13.QueryConsensusStatesRequest],
    ["/ibc.core.client.v1.QueryClientStatusResponse", query_14.QueryClientStatusResponse],
    ["/ibc.core.client.v1.QueryClientParamsRequest", query_15.QueryClientParamsRequest],
    ["/ibc.core.client.v1.QueryUpgradedClientStateRequest", query_16.QueryUpgradedClientStateRequest],
    ["/ibc.core.client.v1.MsgUpgradeClientResponse", tx_12.MsgUpgradeClientResponse],
    ["/ibc.core.client.v1.Height", client_7.Height],
    ["/ibc.core.client.v1.QueryClientStateResponse", query_17.QueryClientStateResponse],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateResponse", query_18.QueryUpgradedConsensusStateResponse],
    ["/ibc.core.client.v1.GenesisState", genesis_2.GenesisState],
    ["/ibc.core.client.v1.GenesisMetadata", genesis_3.GenesisMetadata],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", tx_13.MsgIBCSoftwareUpgrade],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse", tx_14.MsgIBCSoftwareUpgradeResponse],
];
exports.msgTypes = msgTypes;
