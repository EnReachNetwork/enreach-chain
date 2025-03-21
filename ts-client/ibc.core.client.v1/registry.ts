import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateClient } from "./types/ibc/core/client/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/core/client/v1/tx";
import { QueryConsensusStatesResponse } from "./types/ibc/core/client/v1/query";
import { QueryClientStatesRequest } from "./types/ibc/core/client/v1/query";
import { QueryClientStatusRequest } from "./types/ibc/core/client/v1/query";
import { QueryConsensusStateResponse } from "./types/ibc/core/client/v1/query";
import { QueryConsensusStateHeightsRequest } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedClientStateRequest } from "./types/ibc/core/client/v1/query";
import { IdentifiedClientState } from "./types/ibc/core/client/v1/client";
import { MsgSubmitMisbehaviour } from "./types/ibc/core/client/v1/tx";
import { MsgIBCSoftwareUpgrade } from "./types/ibc/core/client/v1/tx";
import { MsgCreateClientResponse } from "./types/ibc/core/client/v1/tx";
import { QueryClientStatesResponse } from "./types/ibc/core/client/v1/query";
import { QueryClientStateResponse } from "./types/ibc/core/client/v1/query";
import { QueryClientStatusResponse } from "./types/ibc/core/client/v1/query";
import { MsgRecoverClient } from "./types/ibc/core/client/v1/tx";
import { MsgUpgradeClientResponse } from "./types/ibc/core/client/v1/tx";
import { ClientConsensusStates } from "./types/ibc/core/client/v1/client";
import { UpgradeProposal } from "./types/ibc/core/client/v1/client";
import { GenesisMetadata } from "./types/ibc/core/client/v1/genesis";
import { QueryClientStateRequest } from "./types/ibc/core/client/v1/query";
import { ConsensusStateWithHeight } from "./types/ibc/core/client/v1/client";
import { MsgUpdateClient } from "./types/ibc/core/client/v1/tx";
import { MsgUpgradeClient } from "./types/ibc/core/client/v1/tx";
import { MsgUpdateParams } from "./types/ibc/core/client/v1/tx";
import { QueryUpgradedClientStateResponse } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedConsensusStateRequest } from "./types/ibc/core/client/v1/query";
import { MsgUpdateClientResponse } from "./types/ibc/core/client/v1/tx";
import { IdentifiedGenesisMetadata } from "./types/ibc/core/client/v1/genesis";
import { QueryConsensusStateRequest } from "./types/ibc/core/client/v1/query";
import { QueryConsensusStatesRequest } from "./types/ibc/core/client/v1/query";
import { MsgIBCSoftwareUpgradeResponse } from "./types/ibc/core/client/v1/tx";
import { ClientUpdateProposal } from "./types/ibc/core/client/v1/client";
import { QueryClientParamsResponse } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedConsensusStateResponse } from "./types/ibc/core/client/v1/query";
import { Params } from "./types/ibc/core/client/v1/client";
import { GenesisState } from "./types/ibc/core/client/v1/genesis";
import { QueryConsensusStateHeightsResponse } from "./types/ibc/core/client/v1/query";
import { QueryClientParamsRequest } from "./types/ibc/core/client/v1/query";
import { Height } from "./types/ibc/core/client/v1/client";
import { MsgSubmitMisbehaviourResponse } from "./types/ibc/core/client/v1/tx";
import { MsgRecoverClientResponse } from "./types/ibc/core/client/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ibc.core.client.v1.MsgCreateClient", MsgCreateClient],
    ["/ibc.core.client.v1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/ibc.core.client.v1.QueryConsensusStatesResponse", QueryConsensusStatesResponse],
    ["/ibc.core.client.v1.QueryClientStatesRequest", QueryClientStatesRequest],
    ["/ibc.core.client.v1.QueryClientStatusRequest", QueryClientStatusRequest],
    ["/ibc.core.client.v1.QueryConsensusStateResponse", QueryConsensusStateResponse],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsRequest", QueryConsensusStateHeightsRequest],
    ["/ibc.core.client.v1.QueryUpgradedClientStateRequest", QueryUpgradedClientStateRequest],
    ["/ibc.core.client.v1.IdentifiedClientState", IdentifiedClientState],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviour", MsgSubmitMisbehaviour],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", MsgIBCSoftwareUpgrade],
    ["/ibc.core.client.v1.MsgCreateClientResponse", MsgCreateClientResponse],
    ["/ibc.core.client.v1.QueryClientStatesResponse", QueryClientStatesResponse],
    ["/ibc.core.client.v1.QueryClientStateResponse", QueryClientStateResponse],
    ["/ibc.core.client.v1.QueryClientStatusResponse", QueryClientStatusResponse],
    ["/ibc.core.client.v1.MsgRecoverClient", MsgRecoverClient],
    ["/ibc.core.client.v1.MsgUpgradeClientResponse", MsgUpgradeClientResponse],
    ["/ibc.core.client.v1.ClientConsensusStates", ClientConsensusStates],
    ["/ibc.core.client.v1.UpgradeProposal", UpgradeProposal],
    ["/ibc.core.client.v1.GenesisMetadata", GenesisMetadata],
    ["/ibc.core.client.v1.QueryClientStateRequest", QueryClientStateRequest],
    ["/ibc.core.client.v1.ConsensusStateWithHeight", ConsensusStateWithHeight],
    ["/ibc.core.client.v1.MsgUpdateClient", MsgUpdateClient],
    ["/ibc.core.client.v1.MsgUpgradeClient", MsgUpgradeClient],
    ["/ibc.core.client.v1.MsgUpdateParams", MsgUpdateParams],
    ["/ibc.core.client.v1.QueryUpgradedClientStateResponse", QueryUpgradedClientStateResponse],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateRequest", QueryUpgradedConsensusStateRequest],
    ["/ibc.core.client.v1.MsgUpdateClientResponse", MsgUpdateClientResponse],
    ["/ibc.core.client.v1.IdentifiedGenesisMetadata", IdentifiedGenesisMetadata],
    ["/ibc.core.client.v1.QueryConsensusStateRequest", QueryConsensusStateRequest],
    ["/ibc.core.client.v1.QueryConsensusStatesRequest", QueryConsensusStatesRequest],
    ["/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse", MsgIBCSoftwareUpgradeResponse],
    ["/ibc.core.client.v1.ClientUpdateProposal", ClientUpdateProposal],
    ["/ibc.core.client.v1.QueryClientParamsResponse", QueryClientParamsResponse],
    ["/ibc.core.client.v1.QueryUpgradedConsensusStateResponse", QueryUpgradedConsensusStateResponse],
    ["/ibc.core.client.v1.Params", Params],
    ["/ibc.core.client.v1.GenesisState", GenesisState],
    ["/ibc.core.client.v1.QueryConsensusStateHeightsResponse", QueryConsensusStateHeightsResponse],
    ["/ibc.core.client.v1.QueryClientParamsRequest", QueryClientParamsRequest],
    ["/ibc.core.client.v1.Height", Height],
    ["/ibc.core.client.v1.MsgSubmitMisbehaviourResponse", MsgSubmitMisbehaviourResponse],
    ["/ibc.core.client.v1.MsgRecoverClientResponse", MsgRecoverClientResponse],
    
];

export { msgTypes }