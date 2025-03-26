import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryConsensusStatesRequest } from "./types/ibc/core/client/v1/query";
import { QueryConsensusStateHeightsRequest } from "./types/ibc/core/client/v1/query";
import { QueryClientParamsRequest } from "./types/ibc/core/client/v1/query";
import { QueryClientParamsResponse } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedConsensusStateResponse } from "./types/ibc/core/client/v1/query";
import { ClientConsensusStates } from "./types/ibc/core/client/v1/client";
import { QueryClientStatesRequest } from "./types/ibc/core/client/v1/query";
import { MsgIBCSoftwareUpgradeResponse } from "./types/ibc/core/client/v1/tx";
import { ConsensusStateWithHeight } from "./types/ibc/core/client/v1/client";
import { QueryConsensusStateResponse } from "./types/ibc/core/client/v1/query";
import { QueryConsensusStateHeightsResponse } from "./types/ibc/core/client/v1/query";
import { ClientUpdateProposal } from "./types/ibc/core/client/v1/client";
import { MsgSubmitMisbehaviour } from "./types/ibc/core/client/v1/tx";
import { IdentifiedClientState } from "./types/ibc/core/client/v1/client";
import { MsgCreateClientResponse } from "./types/ibc/core/client/v1/tx";
import { UpgradeProposal } from "./types/ibc/core/client/v1/client";
import { MsgRecoverClient } from "./types/ibc/core/client/v1/tx";
import { MsgUpdateClientResponse } from "./types/ibc/core/client/v1/tx";
import { IdentifiedGenesisMetadata } from "./types/ibc/core/client/v1/genesis";
import { QueryConsensusStateRequest } from "./types/ibc/core/client/v1/query";
import { MsgIBCSoftwareUpgrade } from "./types/ibc/core/client/v1/tx";
import { Params } from "./types/ibc/core/client/v1/client";
import { QueryUpgradedConsensusStateRequest } from "./types/ibc/core/client/v1/query";
import { Height } from "./types/ibc/core/client/v1/client";
import { MsgRecoverClientResponse } from "./types/ibc/core/client/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/core/client/v1/tx";
import { GenesisMetadata } from "./types/ibc/core/client/v1/genesis";
import { QueryConsensusStatesResponse } from "./types/ibc/core/client/v1/query";
import { MsgUpdateClient } from "./types/ibc/core/client/v1/tx";
import { MsgUpgradeClient } from "./types/ibc/core/client/v1/tx";
import { MsgUpgradeClientResponse } from "./types/ibc/core/client/v1/tx";
import { QueryClientStatesResponse } from "./types/ibc/core/client/v1/query";
import { QueryClientStateResponse } from "./types/ibc/core/client/v1/query";
import { QueryClientStateRequest } from "./types/ibc/core/client/v1/query";
import { QueryClientStatusRequest } from "./types/ibc/core/client/v1/query";
import { QueryClientStatusResponse } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedClientStateResponse } from "./types/ibc/core/client/v1/query";
import { MsgCreateClient } from "./types/ibc/core/client/v1/tx";
import { GenesisState } from "./types/ibc/core/client/v1/genesis";
import { MsgUpdateParams } from "./types/ibc/core/client/v1/tx";
import { MsgSubmitMisbehaviourResponse } from "./types/ibc/core/client/v1/tx";
import { QueryUpgradedClientStateRequest } from "./types/ibc/core/client/v1/query";
export { QueryConsensusStatesRequest, QueryConsensusStateHeightsRequest, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedConsensusStateResponse, ClientConsensusStates, QueryClientStatesRequest, MsgIBCSoftwareUpgradeResponse, ConsensusStateWithHeight, QueryConsensusStateResponse, QueryConsensusStateHeightsResponse, ClientUpdateProposal, MsgSubmitMisbehaviour, IdentifiedClientState, MsgCreateClientResponse, UpgradeProposal, MsgRecoverClient, MsgUpdateClientResponse, IdentifiedGenesisMetadata, QueryConsensusStateRequest, MsgIBCSoftwareUpgrade, Params, QueryUpgradedConsensusStateRequest, Height, MsgRecoverClientResponse, MsgUpdateParamsResponse, GenesisMetadata, QueryConsensusStatesResponse, MsgUpdateClient, MsgUpgradeClient, MsgUpgradeClientResponse, QueryClientStatesResponse, QueryClientStateResponse, QueryClientStateRequest, QueryClientStatusRequest, QueryClientStatusResponse, QueryUpgradedClientStateResponse, MsgCreateClient, GenesisState, MsgUpdateParams, MsgSubmitMisbehaviourResponse, QueryUpgradedClientStateRequest };
type sendQueryConsensusStatesRequestParams = {
    value: QueryConsensusStatesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStateHeightsRequestParams = {
    value: QueryConsensusStateHeightsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientParamsRequestParams = {
    value: QueryClientParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientParamsResponseParams = {
    value: QueryClientParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedConsensusStateResponseParams = {
    value: QueryUpgradedConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendClientConsensusStatesParams = {
    value: ClientConsensusStates;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStatesRequestParams = {
    value: QueryClientStatesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgIBCSoftwareUpgradeResponseParams = {
    value: MsgIBCSoftwareUpgradeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendConsensusStateWithHeightParams = {
    value: ConsensusStateWithHeight;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStateResponseParams = {
    value: QueryConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStateHeightsResponseParams = {
    value: QueryConsensusStateHeightsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendClientUpdateProposalParams = {
    value: ClientUpdateProposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitMisbehaviourParams = {
    value: MsgSubmitMisbehaviour;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedClientStateParams = {
    value: IdentifiedClientState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateClientResponseParams = {
    value: MsgCreateClientResponse;
    fee?: StdFee;
    memo?: string;
};
type sendUpgradeProposalParams = {
    value: UpgradeProposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecoverClientParams = {
    value: MsgRecoverClient;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateClientResponseParams = {
    value: MsgUpdateClientResponse;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedGenesisMetadataParams = {
    value: IdentifiedGenesisMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStateRequestParams = {
    value: QueryConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgIBCSoftwareUpgradeParams = {
    value: MsgIBCSoftwareUpgrade;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedConsensusStateRequestParams = {
    value: QueryUpgradedConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendHeightParams = {
    value: Height;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecoverClientResponseParams = {
    value: MsgRecoverClientResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisMetadataParams = {
    value: GenesisMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStatesResponseParams = {
    value: QueryConsensusStatesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateClientParams = {
    value: MsgUpdateClient;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpgradeClientParams = {
    value: MsgUpgradeClient;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpgradeClientResponseParams = {
    value: MsgUpgradeClientResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStatesResponseParams = {
    value: QueryClientStatesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStateResponseParams = {
    value: QueryClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStateRequestParams = {
    value: QueryClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStatusRequestParams = {
    value: QueryClientStatusRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStatusResponseParams = {
    value: QueryClientStatusResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedClientStateResponseParams = {
    value: QueryUpgradedClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateClientParams = {
    value: MsgCreateClient;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitMisbehaviourResponseParams = {
    value: MsgSubmitMisbehaviourResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedClientStateRequestParams = {
    value: QueryUpgradedClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type queryConsensusStatesRequestParams = {
    value: QueryConsensusStatesRequest;
};
type queryConsensusStateHeightsRequestParams = {
    value: QueryConsensusStateHeightsRequest;
};
type queryClientParamsRequestParams = {
    value: QueryClientParamsRequest;
};
type queryClientParamsResponseParams = {
    value: QueryClientParamsResponse;
};
type queryUpgradedConsensusStateResponseParams = {
    value: QueryUpgradedConsensusStateResponse;
};
type clientConsensusStatesParams = {
    value: ClientConsensusStates;
};
type queryClientStatesRequestParams = {
    value: QueryClientStatesRequest;
};
type msgIbcsoftwareUpgradeResponseParams = {
    value: MsgIBCSoftwareUpgradeResponse;
};
type consensusStateWithHeightParams = {
    value: ConsensusStateWithHeight;
};
type queryConsensusStateResponseParams = {
    value: QueryConsensusStateResponse;
};
type queryConsensusStateHeightsResponseParams = {
    value: QueryConsensusStateHeightsResponse;
};
type clientUpdateProposalParams = {
    value: ClientUpdateProposal;
};
type msgSubmitMisbehaviourParams = {
    value: MsgSubmitMisbehaviour;
};
type identifiedClientStateParams = {
    value: IdentifiedClientState;
};
type msgCreateClientResponseParams = {
    value: MsgCreateClientResponse;
};
type upgradeProposalParams = {
    value: UpgradeProposal;
};
type msgRecoverClientParams = {
    value: MsgRecoverClient;
};
type msgUpdateClientResponseParams = {
    value: MsgUpdateClientResponse;
};
type identifiedGenesisMetadataParams = {
    value: IdentifiedGenesisMetadata;
};
type queryConsensusStateRequestParams = {
    value: QueryConsensusStateRequest;
};
type msgIbcsoftwareUpgradeParams = {
    value: MsgIBCSoftwareUpgrade;
};
type paramsParams = {
    value: Params;
};
type queryUpgradedConsensusStateRequestParams = {
    value: QueryUpgradedConsensusStateRequest;
};
type heightParams = {
    value: Height;
};
type msgRecoverClientResponseParams = {
    value: MsgRecoverClientResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type genesisMetadataParams = {
    value: GenesisMetadata;
};
type queryConsensusStatesResponseParams = {
    value: QueryConsensusStatesResponse;
};
type msgUpdateClientParams = {
    value: MsgUpdateClient;
};
type msgUpgradeClientParams = {
    value: MsgUpgradeClient;
};
type msgUpgradeClientResponseParams = {
    value: MsgUpgradeClientResponse;
};
type queryClientStatesResponseParams = {
    value: QueryClientStatesResponse;
};
type queryClientStateResponseParams = {
    value: QueryClientStateResponse;
};
type queryClientStateRequestParams = {
    value: QueryClientStateRequest;
};
type queryClientStatusRequestParams = {
    value: QueryClientStatusRequest;
};
type queryClientStatusResponseParams = {
    value: QueryClientStatusResponse;
};
type queryUpgradedClientStateResponseParams = {
    value: QueryUpgradedClientStateResponse;
};
type msgCreateClientParams = {
    value: MsgCreateClient;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgSubmitMisbehaviourResponseParams = {
    value: MsgSubmitMisbehaviourResponse;
};
type queryUpgradedClientStateRequestParams = {
    value: QueryUpgradedClientStateRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryConsensusStatesRequest({ value, fee, memo }: sendQueryConsensusStatesRequestParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStateHeightsRequest({ value, fee, memo }: sendQueryConsensusStateHeightsRequestParams): Promise<DeliverTxResponse>;
    sendQueryClientParamsRequest({ value, fee, memo }: sendQueryClientParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryClientParamsResponse({ value, fee, memo }: sendQueryClientParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedConsensusStateResponse({ value, fee, memo }: sendQueryUpgradedConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendClientConsensusStates({ value, fee, memo }: sendClientConsensusStatesParams): Promise<DeliverTxResponse>;
    sendQueryClientStatesRequest({ value, fee, memo }: sendQueryClientStatesRequestParams): Promise<DeliverTxResponse>;
    sendMsgIBCSoftwareUpgradeResponse({ value, fee, memo }: sendMsgIBCSoftwareUpgradeResponseParams): Promise<DeliverTxResponse>;
    sendConsensusStateWithHeight({ value, fee, memo }: sendConsensusStateWithHeightParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStateResponse({ value, fee, memo }: sendQueryConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStateHeightsResponse({ value, fee, memo }: sendQueryConsensusStateHeightsResponseParams): Promise<DeliverTxResponse>;
    sendClientUpdateProposal({ value, fee, memo }: sendClientUpdateProposalParams): Promise<DeliverTxResponse>;
    sendMsgSubmitMisbehaviour({ value, fee, memo }: sendMsgSubmitMisbehaviourParams): Promise<DeliverTxResponse>;
    sendIdentifiedClientState({ value, fee, memo }: sendIdentifiedClientStateParams): Promise<DeliverTxResponse>;
    sendMsgCreateClientResponse({ value, fee, memo }: sendMsgCreateClientResponseParams): Promise<DeliverTxResponse>;
    sendUpgradeProposal({ value, fee, memo }: sendUpgradeProposalParams): Promise<DeliverTxResponse>;
    sendMsgRecoverClient({ value, fee, memo }: sendMsgRecoverClientParams): Promise<DeliverTxResponse>;
    sendMsgUpdateClientResponse({ value, fee, memo }: sendMsgUpdateClientResponseParams): Promise<DeliverTxResponse>;
    sendIdentifiedGenesisMetadata({ value, fee, memo }: sendIdentifiedGenesisMetadataParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStateRequest({ value, fee, memo }: sendQueryConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendMsgIBCSoftwareUpgrade({ value, fee, memo }: sendMsgIBCSoftwareUpgradeParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedConsensusStateRequest({ value, fee, memo }: sendQueryUpgradedConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendHeight({ value, fee, memo }: sendHeightParams): Promise<DeliverTxResponse>;
    sendMsgRecoverClientResponse({ value, fee, memo }: sendMsgRecoverClientResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendGenesisMetadata({ value, fee, memo }: sendGenesisMetadataParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStatesResponse({ value, fee, memo }: sendQueryConsensusStatesResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateClient({ value, fee, memo }: sendMsgUpdateClientParams): Promise<DeliverTxResponse>;
    sendMsgUpgradeClient({ value, fee, memo }: sendMsgUpgradeClientParams): Promise<DeliverTxResponse>;
    sendMsgUpgradeClientResponse({ value, fee, memo }: sendMsgUpgradeClientResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientStatesResponse({ value, fee, memo }: sendQueryClientStatesResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientStateResponse({ value, fee, memo }: sendQueryClientStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientStateRequest({ value, fee, memo }: sendQueryClientStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryClientStatusRequest({ value, fee, memo }: sendQueryClientStatusRequestParams): Promise<DeliverTxResponse>;
    sendQueryClientStatusResponse({ value, fee, memo }: sendQueryClientStatusResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedClientStateResponse({ value, fee, memo }: sendQueryUpgradedClientStateResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateClient({ value, fee, memo }: sendMsgCreateClientParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgSubmitMisbehaviourResponse({ value, fee, memo }: sendMsgSubmitMisbehaviourResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedClientStateRequest({ value, fee, memo }: sendQueryUpgradedClientStateRequestParams): Promise<DeliverTxResponse>;
    queryConsensusStatesRequest({ value }: queryConsensusStatesRequestParams): EncodeObject;
    queryConsensusStateHeightsRequest({ value }: queryConsensusStateHeightsRequestParams): EncodeObject;
    queryClientParamsRequest({ value }: queryClientParamsRequestParams): EncodeObject;
    queryClientParamsResponse({ value }: queryClientParamsResponseParams): EncodeObject;
    queryUpgradedConsensusStateResponse({ value }: queryUpgradedConsensusStateResponseParams): EncodeObject;
    clientConsensusStates({ value }: clientConsensusStatesParams): EncodeObject;
    queryClientStatesRequest({ value }: queryClientStatesRequestParams): EncodeObject;
    msgIbcsoftwareUpgradeResponse({ value }: msgIbcsoftwareUpgradeResponseParams): EncodeObject;
    consensusStateWithHeight({ value }: consensusStateWithHeightParams): EncodeObject;
    queryConsensusStateResponse({ value }: queryConsensusStateResponseParams): EncodeObject;
    queryConsensusStateHeightsResponse({ value }: queryConsensusStateHeightsResponseParams): EncodeObject;
    clientUpdateProposal({ value }: clientUpdateProposalParams): EncodeObject;
    msgSubmitMisbehaviour({ value }: msgSubmitMisbehaviourParams): EncodeObject;
    identifiedClientState({ value }: identifiedClientStateParams): EncodeObject;
    msgCreateClientResponse({ value }: msgCreateClientResponseParams): EncodeObject;
    upgradeProposal({ value }: upgradeProposalParams): EncodeObject;
    msgRecoverClient({ value }: msgRecoverClientParams): EncodeObject;
    msgUpdateClientResponse({ value }: msgUpdateClientResponseParams): EncodeObject;
    identifiedGenesisMetadata({ value }: identifiedGenesisMetadataParams): EncodeObject;
    queryConsensusStateRequest({ value }: queryConsensusStateRequestParams): EncodeObject;
    msgIbcsoftwareUpgrade({ value }: msgIbcsoftwareUpgradeParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryUpgradedConsensusStateRequest({ value }: queryUpgradedConsensusStateRequestParams): EncodeObject;
    height({ value }: heightParams): EncodeObject;
    msgRecoverClientResponse({ value }: msgRecoverClientResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    genesisMetadata({ value }: genesisMetadataParams): EncodeObject;
    queryConsensusStatesResponse({ value }: queryConsensusStatesResponseParams): EncodeObject;
    msgUpdateClient({ value }: msgUpdateClientParams): EncodeObject;
    msgUpgradeClient({ value }: msgUpgradeClientParams): EncodeObject;
    msgUpgradeClientResponse({ value }: msgUpgradeClientResponseParams): EncodeObject;
    queryClientStatesResponse({ value }: queryClientStatesResponseParams): EncodeObject;
    queryClientStateResponse({ value }: queryClientStateResponseParams): EncodeObject;
    queryClientStateRequest({ value }: queryClientStateRequestParams): EncodeObject;
    queryClientStatusRequest({ value }: queryClientStatusRequestParams): EncodeObject;
    queryClientStatusResponse({ value }: queryClientStatusResponseParams): EncodeObject;
    queryUpgradedClientStateResponse({ value }: queryUpgradedClientStateResponseParams): EncodeObject;
    msgCreateClient({ value }: msgCreateClientParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgSubmitMisbehaviourResponse({ value }: msgSubmitMisbehaviourResponseParams): EncodeObject;
    queryUpgradedClientStateRequest({ value }: queryUpgradedClientStateRequestParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        IbcCoreClientV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
