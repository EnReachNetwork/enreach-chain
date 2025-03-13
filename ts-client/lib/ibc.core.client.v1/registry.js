"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/core/client/v1/query");
const tx_1 = require("./types/ibc/core/client/v1/tx");
const client_1 = require("./types/ibc/core/client/v1/client");
const query_2 = require("./types/ibc/core/client/v1/query");
const tx_2 = require("./types/ibc/core/client/v1/tx");
const tx_3 = require("./types/ibc/core/client/v1/tx");
const query_3 = require("./types/ibc/core/client/v1/query");
const query_4 = require("./types/ibc/core/client/v1/query");
const client_2 = require("./types/ibc/core/client/v1/client");
const client_3 = require("./types/ibc/core/client/v1/client");
const tx_4 = require("./types/ibc/core/client/v1/tx");
const query_5 = require("./types/ibc/core/client/v1/query");
const query_6 = require("./types/ibc/core/client/v1/query");
const client_4 = require("./types/ibc/core/client/v1/client");
const query_7 = require("./types/ibc/core/client/v1/query");
const query_8 = require("./types/ibc/core/client/v1/query");
const query_9 = require("./types/ibc/core/client/v1/query");
const query_10 = require("./types/ibc/core/client/v1/query");
const query_11 = require("./types/ibc/core/client/v1/query");
const tx_5 = require("./types/ibc/core/client/v1/tx");
const query_12 = require("./types/ibc/core/client/v1/query");
const query_13 = require("./types/ibc/core/client/v1/query");
const tx_6 = require("./types/ibc/core/client/v1/tx");
const tx_7 = require("./types/ibc/core/client/v1/tx");
const client_5 = require("./types/ibc/core/client/v1/client");
const query_14 = require("./types/ibc/core/client/v1/query");
const tx_8 = require("./types/ibc/core/client/v1/tx");
const query_15 = require("./types/ibc/core/client/v1/query");
const tx_9 = require("./types/ibc/core/client/v1/tx");
const genesis_1 = require("./types/ibc/core/client/v1/genesis");
const genesis_2 = require("./types/ibc/core/client/v1/genesis");
const query_16 = require("./types/ibc/core/client/v1/query");
const tx_10 = require("./types/ibc/core/client/v1/tx");
const tx_11 = require("./types/ibc/core/client/v1/tx");
const tx_12 = require("./types/ibc/core/client/v1/tx");
const tx_13 = require("./types/ibc/core/client/v1/tx");
const query_17 = require("./types/ibc/core/client/v1/query");
const tx_14 = require("./types/ibc/core/client/v1/tx");
const genesis_3 = require("./types/ibc/core/client/v1/genesis");
const query_18 = require("./types/ibc/core/client/v1/query");
const client_6 = require("./types/ibc/core/client/v1/client");
const client_7 = require("./types/ibc/core/client/v1/client");
const msgTypes = [
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateResponse", query_1.QueryUpgradedConsensusStateResponse],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse", tx_1.MsgIBCSoftwareUpgradeResponse],
    ["/ibc.core.client.v1.ConsensusStateWithHeight", client_1.ConsensusStateWithHeight],
    ["/ibc.core.client.v1.QueryConsensusStatesResponse", query_2.QueryConsensusStatesResponse],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviour", tx_2.MsgSubmitMisbehaviour],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", tx_3.MsgIBCSoftwareUpgrade],
    ["/ibc.core.client.v1.QueryConsensusStatesRequest", query_3.QueryConsensusStatesRequest],
    ["/ibc.core.client.v1.QueryClientStatusRequest", query_4.QueryClientStatusRequest],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_2.ClientUpdateProposal],
    ["/ibc.core.client.v1.UpgradeProposal", client_3.UpgradeProposal],
    ["/ibc.core.client.v1.MsgRecoverClient", tx_4.MsgRecoverClient],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsRequest", query_5.QueryConsensusStateHeightsRequest],
    ["/ibc.core.client.v1.QueryClientParamsResponse", query_6.QueryClientParamsResponse],
    ["/ibc.core.client.v1.IdentifiedClientState", client_4.IdentifiedClientState],
    ["/ibc.core.client.v1.QueryClientStatesResponse", query_7.QueryClientStatesResponse],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsResponse", query_8.QueryConsensusStateHeightsResponse],
    ["/ibc.core.client.v1.QueryClientStatusResponse", query_9.QueryClientStatusResponse],
    ["/ibc.core.client.v1.QueryClientParamsRequest", query_10.QueryClientParamsRequest],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateRequest", query_11.QueryUpgradedConsensusStateRequest],
    ["/ibc.core.client.v1.MsgUpdateClient", tx_5.MsgUpdateClient],
    ["/ibc.core.client.v1.QueryClientStateRequest", query_12.QueryClientStateRequest],
    ["/ibc.core.client.v1.QueryClientStatesRequest", query_13.QueryClientStatesRequest],
    ["/ibc.core.client.v1.MsgUpgradeClient", tx_6.MsgUpgradeClient],
    ["/ibc.core.client.v1.MsgUpdateParamsResponse", tx_7.MsgUpdateParamsResponse],
    ["/ibc.core.client.v1.Params", client_5.Params],
    ["/ibc.core.client.v1.QueryUpgradedClientStateRequest", query_14.QueryUpgradedClientStateRequest],
    ["/ibc.core.client.v1.MsgUpdateClientResponse", tx_8.MsgUpdateClientResponse],
    ["/ibc.core.client.v1.QueryConsensusStateRequest", query_15.QueryConsensusStateRequest],
    ["/ibc.core.client.v1.MsgCreateClientResponse", tx_9.MsgCreateClientResponse],
    ["/ibc.core.client.v1.GenesisMetadata", genesis_1.GenesisMetadata],
    ["/ibc.core.client.v1.IdentifiedGenesisMetadata", genesis_2.IdentifiedGenesisMetadata],
    ["/ibc.core.client.v1.QueryClientStateResponse", query_16.QueryClientStateResponse],
    ["/ibc.core.client.v1.MsgCreateClient", tx_10.MsgCreateClient],
    ["/ibc.core.client.v1.MsgUpdateParams", tx_11.MsgUpdateParams],
    ["/ibc.core.client.v1.MsgUpgradeClientResponse", tx_12.MsgUpgradeClientResponse],
    ["/ibc.core.client.v1.MsgRecoverClientResponse", tx_13.MsgRecoverClientResponse],
    ["/ibc.core.client.v1.QueryUpgradedClientStateResponse", query_17.QueryUpgradedClientStateResponse],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviourResponse", tx_14.MsgSubmitMisbehaviourResponse],
    ["/ibc.core.client.v1.GenesisState", genesis_3.GenesisState],
    ["/ibc.core.client.v1.QueryConsensusStateResponse", query_18.QueryConsensusStateResponse],
    ["/ibc.core.client.v1.ClientConsensusStates", client_6.ClientConsensusStates],
    ["/ibc.core.client.v1.Height", client_7.Height],
];
exports.msgTypes = msgTypes;
