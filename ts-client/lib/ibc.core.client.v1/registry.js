"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/core/client/v1/query");
const genesis_1 = require("./types/ibc/core/client/v1/genesis");
const tx_1 = require("./types/ibc/core/client/v1/tx");
const tx_2 = require("./types/ibc/core/client/v1/tx");
const tx_3 = require("./types/ibc/core/client/v1/tx");
const query_2 = require("./types/ibc/core/client/v1/query");
const client_1 = require("./types/ibc/core/client/v1/client");
const tx_4 = require("./types/ibc/core/client/v1/tx");
const tx_5 = require("./types/ibc/core/client/v1/tx");
const query_3 = require("./types/ibc/core/client/v1/query");
const query_4 = require("./types/ibc/core/client/v1/query");
const query_5 = require("./types/ibc/core/client/v1/query");
const client_2 = require("./types/ibc/core/client/v1/client");
const tx_6 = require("./types/ibc/core/client/v1/tx");
const tx_7 = require("./types/ibc/core/client/v1/tx");
const tx_8 = require("./types/ibc/core/client/v1/tx");
const query_6 = require("./types/ibc/core/client/v1/query");
const query_7 = require("./types/ibc/core/client/v1/query");
const query_8 = require("./types/ibc/core/client/v1/query");
const genesis_2 = require("./types/ibc/core/client/v1/genesis");
const tx_9 = require("./types/ibc/core/client/v1/tx");
const query_9 = require("./types/ibc/core/client/v1/query");
const query_10 = require("./types/ibc/core/client/v1/query");
const tx_10 = require("./types/ibc/core/client/v1/tx");
const tx_11 = require("./types/ibc/core/client/v1/tx");
const query_11 = require("./types/ibc/core/client/v1/query");
const client_3 = require("./types/ibc/core/client/v1/client");
const query_12 = require("./types/ibc/core/client/v1/query");
const client_4 = require("./types/ibc/core/client/v1/client");
const query_13 = require("./types/ibc/core/client/v1/query");
const query_14 = require("./types/ibc/core/client/v1/query");
const client_5 = require("./types/ibc/core/client/v1/client");
const tx_12 = require("./types/ibc/core/client/v1/tx");
const query_15 = require("./types/ibc/core/client/v1/query");
const query_16 = require("./types/ibc/core/client/v1/query");
const client_6 = require("./types/ibc/core/client/v1/client");
const tx_13 = require("./types/ibc/core/client/v1/tx");
const query_17 = require("./types/ibc/core/client/v1/query");
const genesis_3 = require("./types/ibc/core/client/v1/genesis");
const tx_14 = require("./types/ibc/core/client/v1/tx");
const client_7 = require("./types/ibc/core/client/v1/client");
const query_18 = require("./types/ibc/core/client/v1/query");
const msgTypes = [
    ["/ibc.core.client.v1.QueryConsensusStatesResponse", query_1.QueryConsensusStatesResponse],
    ["/ibc.core.client.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.client.v1.MsgCreateClient", tx_1.MsgCreateClient],
    ["/ibc.core.client.v1.MsgUpdateClient", tx_2.MsgUpdateClient],
    ["/ibc.core.client.v1.MsgUpdateParamsResponse", tx_3.MsgUpdateParamsResponse],
    ["/ibc.core.client.v1.QueryClientStateRequest", query_2.QueryClientStateRequest],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_1.ClientUpdateProposal],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviourResponse", tx_4.MsgSubmitMisbehaviourResponse],
    ["/ibc.core.client.v1.MsgRecoverClientResponse", tx_5.MsgRecoverClientResponse],
    ["/ibc.core.client.v1.QueryUpgradedClientStateRequest", query_3.QueryUpgradedClientStateRequest],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateResponse", query_4.QueryUpgradedConsensusStateResponse],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateRequest", query_5.QueryUpgradedConsensusStateRequest],
    ["/ibc.core.client.v1.Params", client_2.Params],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviour", tx_6.MsgSubmitMisbehaviour],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", tx_7.MsgIBCSoftwareUpgrade],
    ["/ibc.core.client.v1.MsgUpdateParams", tx_8.MsgUpdateParams],
    ["/ibc.core.client.v1.QueryClientStatusRequest", query_6.QueryClientStatusRequest],
    ["/ibc.core.client.v1.QueryClientParamsRequest", query_7.QueryClientParamsRequest],
    ["/ibc.core.client.v1.QueryClientParamsResponse", query_8.QueryClientParamsResponse],
    ["/ibc.core.client.v1.IdentifiedGenesisMetadata", genesis_2.IdentifiedGenesisMetadata],
    ["/ibc.core.client.v1.MsgUpdateClientResponse", tx_9.MsgUpdateClientResponse],
    ["/ibc.core.client.v1.QueryClientStatesRequest", query_9.QueryClientStatesRequest],
    ["/ibc.core.client.v1.QueryClientStatesResponse", query_10.QueryClientStatesResponse],
    ["/ibc.core.client.v1.MsgUpgradeClient", tx_10.MsgUpgradeClient],
    ["/ibc.core.client.v1.MsgCreateClientResponse", tx_11.MsgCreateClientResponse],
    ["/ibc.core.client.v1.QueryConsensusStateRequest", query_11.QueryConsensusStateRequest],
    ["/ibc.core.client.v1.ConsensusStateWithHeight", client_3.ConsensusStateWithHeight],
    ["/ibc.core.client.v1.QueryUpgradedClientStateResponse", query_12.QueryUpgradedClientStateResponse],
    ["/ibc.core.client.v1.Height", client_4.Height],
    ["/ibc.core.client.v1.QueryClientStateResponse", query_13.QueryClientStateResponse],
    ["/ibc.core.client.v1.QueryConsensusStateResponse", query_14.QueryConsensusStateResponse],
    ["/ibc.core.client.v1.UpgradeProposal", client_5.UpgradeProposal],
    ["/ibc.core.client.v1.MsgRecoverClient", tx_12.MsgRecoverClient],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsResponse", query_15.QueryConsensusStateHeightsResponse],
    ["/ibc.core.client.v1.QueryClientStatusResponse", query_16.QueryClientStatusResponse],
    ["/ibc.core.client.v1.IdentifiedClientState", client_6.IdentifiedClientState],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse", tx_13.MsgIBCSoftwareUpgradeResponse],
    ["/ibc.core.client.v1.QueryConsensusStatesRequest", query_17.QueryConsensusStatesRequest],
    ["/ibc.core.client.v1.GenesisMetadata", genesis_3.GenesisMetadata],
    ["/ibc.core.client.v1.MsgUpgradeClientResponse", tx_14.MsgUpgradeClientResponse],
    ["/ibc.core.client.v1.ClientConsensusStates", client_7.ClientConsensusStates],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsRequest", query_18.QueryConsensusStateHeightsRequest],
];
exports.msgTypes = msgTypes;
