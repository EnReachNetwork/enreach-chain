"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const client_1 = require("./types/ibc/core/client/v1/client");
const query_1 = require("./types/ibc/core/client/v1/query");
const client_2 = require("./types/ibc/core/client/v1/client");
const genesis_1 = require("./types/ibc/core/client/v1/genesis");
const tx_1 = require("./types/ibc/core/client/v1/tx");
const tx_2 = require("./types/ibc/core/client/v1/tx");
const query_2 = require("./types/ibc/core/client/v1/query");
const genesis_2 = require("./types/ibc/core/client/v1/genesis");
const tx_3 = require("./types/ibc/core/client/v1/tx");
const query_3 = require("./types/ibc/core/client/v1/query");
const query_4 = require("./types/ibc/core/client/v1/query");
const query_5 = require("./types/ibc/core/client/v1/query");
const tx_4 = require("./types/ibc/core/client/v1/tx");
const tx_5 = require("./types/ibc/core/client/v1/tx");
const tx_6 = require("./types/ibc/core/client/v1/tx");
const client_3 = require("./types/ibc/core/client/v1/client");
const tx_7 = require("./types/ibc/core/client/v1/tx");
const tx_8 = require("./types/ibc/core/client/v1/tx");
const client_4 = require("./types/ibc/core/client/v1/client");
const client_5 = require("./types/ibc/core/client/v1/client");
const query_6 = require("./types/ibc/core/client/v1/query");
const query_7 = require("./types/ibc/core/client/v1/query");
const query_8 = require("./types/ibc/core/client/v1/query");
const tx_9 = require("./types/ibc/core/client/v1/tx");
const tx_10 = require("./types/ibc/core/client/v1/tx");
const tx_11 = require("./types/ibc/core/client/v1/tx");
const query_9 = require("./types/ibc/core/client/v1/query");
const query_10 = require("./types/ibc/core/client/v1/query");
const genesis_3 = require("./types/ibc/core/client/v1/genesis");
const tx_12 = require("./types/ibc/core/client/v1/tx");
const query_11 = require("./types/ibc/core/client/v1/query");
const query_12 = require("./types/ibc/core/client/v1/query");
const query_13 = require("./types/ibc/core/client/v1/query");
const query_14 = require("./types/ibc/core/client/v1/query");
const query_15 = require("./types/ibc/core/client/v1/query");
const tx_13 = require("./types/ibc/core/client/v1/tx");
const client_6 = require("./types/ibc/core/client/v1/client");
const query_16 = require("./types/ibc/core/client/v1/query");
const tx_14 = require("./types/ibc/core/client/v1/tx");
const client_7 = require("./types/ibc/core/client/v1/client");
const query_17 = require("./types/ibc/core/client/v1/query");
const query_18 = require("./types/ibc/core/client/v1/query");
const msgTypes = [
    ["/ibc.core.client.v1.Params", client_1.Params],
    ["/ibc.core.client.v1.QueryConsensusStateRequest", query_1.QueryConsensusStateRequest],
    ["/ibc.core.client.v1.ClientConsensusStates", client_2.ClientConsensusStates],
    ["/ibc.core.client.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.client.v1.MsgUpgradeClient", tx_1.MsgUpgradeClient],
    ["/ibc.core.client.v1.MsgRecoverClient", tx_2.MsgRecoverClient],
    ["/ibc.core.client.v1.QueryClientStatesResponse", query_2.QueryClientStatesResponse],
    ["/ibc.core.client.v1.GenesisMetadata", genesis_2.GenesisMetadata],
    ["/ibc.core.client.v1.MsgUpdateClientResponse", tx_3.MsgUpdateClientResponse],
    ["/ibc.core.client.v1.QueryConsensusStatesResponse", query_3.QueryConsensusStatesResponse],
    ["/ibc.core.client.v1.QueryConsensusStatesRequest", query_4.QueryConsensusStatesRequest],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsRequest", query_5.QueryConsensusStateHeightsRequest],
    ["/ibc.core.client.v1.MsgCreateClient", tx_4.MsgCreateClient],
    ["/ibc.core.client.v1.MsgCreateClientResponse", tx_5.MsgCreateClientResponse],
    ["/ibc.core.client.v1.MsgUpdateClient", tx_6.MsgUpdateClient],
    ["/ibc.core.client.v1.UpgradeProposal", client_3.UpgradeProposal],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse", tx_7.MsgIBCSoftwareUpgradeResponse],
    ["/ibc.core.client.v1.MsgUpdateParamsResponse", tx_8.MsgUpdateParamsResponse],
    ["/ibc.core.client.v1.ConsensusStateWithHeight", client_4.ConsensusStateWithHeight],
    ["/ibc.core.client.v1.Height", client_5.Height],
    ["/ibc.core.client.v1.QueryClientStatusRequest", query_6.QueryClientStatusRequest],
    ["/ibc.core.client.v1.QueryClientParamsRequest", query_7.QueryClientParamsRequest],
    ["/ibc.core.client.v1.QueryClientParamsResponse", query_8.QueryClientParamsResponse],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviour", tx_9.MsgSubmitMisbehaviour],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviourResponse", tx_10.MsgSubmitMisbehaviourResponse],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", tx_11.MsgIBCSoftwareUpgrade],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateRequest", query_9.QueryUpgradedConsensusStateRequest],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateResponse", query_10.QueryUpgradedConsensusStateResponse],
    ["/ibc.core.client.v1.IdentifiedGenesisMetadata", genesis_3.IdentifiedGenesisMetadata],
    ["/ibc.core.client.v1.MsgUpgradeClientResponse", tx_12.MsgUpgradeClientResponse],
    ["/ibc.core.client.v1.QueryConsensusStateResponse", query_11.QueryConsensusStateResponse],
    ["/ibc.core.client.v1.QueryUpgradedClientStateRequest", query_12.QueryUpgradedClientStateRequest],
    ["/ibc.core.client.v1.QueryUpgradedClientStateResponse", query_13.QueryUpgradedClientStateResponse],
    ["/ibc.core.client.v1.QueryClientStatesRequest", query_14.QueryClientStatesRequest],
    ["/ibc.core.client.v1.QueryClientStatusResponse", query_15.QueryClientStatusResponse],
    ["/ibc.core.client.v1.MsgUpdateParams", tx_13.MsgUpdateParams],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_6.ClientUpdateProposal],
    ["/ibc.core.client.v1.QueryClientStateResponse", query_16.QueryClientStateResponse],
    ["/ibc.core.client.v1.MsgRecoverClientResponse", tx_14.MsgRecoverClientResponse],
    ["/ibc.core.client.v1.IdentifiedClientState", client_7.IdentifiedClientState],
    ["/ibc.core.client.v1.QueryClientStateRequest", query_17.QueryClientStateRequest],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsResponse", query_18.QueryConsensusStateHeightsResponse],
];
exports.msgTypes = msgTypes;
