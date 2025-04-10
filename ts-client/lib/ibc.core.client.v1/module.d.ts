import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryClientStatesResponse } from "./types/ibc/core/client/v1/query";
import { QueryClientStateResponse } from "./types/ibc/core/client/v1/query";
import { QueryClientStatesRequest } from "./types/ibc/core/client/v1/query";
import { QueryClientParamsResponse } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedClientStateResponse } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedConsensusStateResponse } from "./types/ibc/core/client/v1/query";
import { MsgSubmitMisbehaviourResponse } from "./types/ibc/core/client/v1/tx";
import { MsgUpdateClient } from "./types/ibc/core/client/v1/tx";
import { ConsensusStateWithHeight } from "./types/ibc/core/client/v1/client";
import { IdentifiedGenesisMetadata } from "./types/ibc/core/client/v1/genesis";
import { QueryConsensusStatesRequest } from "./types/ibc/core/client/v1/query";
import { MsgUpgradeClientResponse } from "./types/ibc/core/client/v1/tx";
import { MsgRecoverClient } from "./types/ibc/core/client/v1/tx";
import { ClientConsensusStates } from "./types/ibc/core/client/v1/client";
import { MsgCreateClientResponse } from "./types/ibc/core/client/v1/tx";
import { MsgIBCSoftwareUpgrade } from "./types/ibc/core/client/v1/tx";
import { QueryClientParamsRequest } from "./types/ibc/core/client/v1/query";
import { MsgUpgradeClient } from "./types/ibc/core/client/v1/tx";
import { MsgUpdateParams } from "./types/ibc/core/client/v1/tx";
import { GenesisMetadata } from "./types/ibc/core/client/v1/genesis";
import { Height } from "./types/ibc/core/client/v1/client";
import { QueryConsensusStateResponse } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedClientStateRequest } from "./types/ibc/core/client/v1/query";
import { ClientUpdateProposal } from "./types/ibc/core/client/v1/client";
import { IdentifiedClientState } from "./types/ibc/core/client/v1/client";
import { QueryConsensusStateHeightsResponse } from "./types/ibc/core/client/v1/query";
import { QueryClientStatusResponse } from "./types/ibc/core/client/v1/query";
import { GenesisState } from "./types/ibc/core/client/v1/genesis";
import { QueryConsensusStateRequest } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedConsensusStateRequest } from "./types/ibc/core/client/v1/query";
import { MsgRecoverClientResponse } from "./types/ibc/core/client/v1/tx";
import { MsgIBCSoftwareUpgradeResponse } from "./types/ibc/core/client/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/core/client/v1/tx";
import { UpgradeProposal } from "./types/ibc/core/client/v1/client";
import { MsgCreateClient } from "./types/ibc/core/client/v1/tx";
import { MsgSubmitMisbehaviour } from "./types/ibc/core/client/v1/tx";
import { Params } from "./types/ibc/core/client/v1/client";
import { QueryConsensusStatesResponse } from "./types/ibc/core/client/v1/query";
import { QueryClientStateRequest } from "./types/ibc/core/client/v1/query";
import { QueryConsensusStateHeightsRequest } from "./types/ibc/core/client/v1/query";
import { QueryClientStatusRequest } from "./types/ibc/core/client/v1/query";
import { MsgUpdateClientResponse } from "./types/ibc/core/client/v1/tx";
export { QueryClientStatesResponse, QueryClientStateResponse, QueryClientStatesRequest, QueryClientParamsResponse, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateResponse, MsgSubmitMisbehaviourResponse, MsgUpdateClient, ConsensusStateWithHeight, IdentifiedGenesisMetadata, QueryConsensusStatesRequest, MsgUpgradeClientResponse, MsgRecoverClient, ClientConsensusStates, MsgCreateClientResponse, MsgIBCSoftwareUpgrade, QueryClientParamsRequest, MsgUpgradeClient, MsgUpdateParams, GenesisMetadata, Height, QueryConsensusStateResponse, QueryUpgradedClientStateRequest, ClientUpdateProposal, IdentifiedClientState, QueryConsensusStateHeightsResponse, QueryClientStatusResponse, GenesisState, QueryConsensusStateRequest, QueryUpgradedConsensusStateRequest, MsgRecoverClientResponse, MsgIBCSoftwareUpgradeResponse, MsgUpdateParamsResponse, UpgradeProposal, MsgCreateClient, MsgSubmitMisbehaviour, Params, QueryConsensusStatesResponse, QueryClientStateRequest, QueryConsensusStateHeightsRequest, QueryClientStatusRequest, MsgUpdateClientResponse };
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
type sendQueryClientStatesRequestParams = {
    value: QueryClientStatesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientParamsResponseParams = {
    value: QueryClientParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedClientStateResponseParams = {
    value: QueryUpgradedClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedConsensusStateResponseParams = {
    value: QueryUpgradedConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitMisbehaviourResponseParams = {
    value: MsgSubmitMisbehaviourResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateClientParams = {
    value: MsgUpdateClient;
    fee?: StdFee;
    memo?: string;
};
type sendConsensusStateWithHeightParams = {
    value: ConsensusStateWithHeight;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedGenesisMetadataParams = {
    value: IdentifiedGenesisMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStatesRequestParams = {
    value: QueryConsensusStatesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpgradeClientResponseParams = {
    value: MsgUpgradeClientResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecoverClientParams = {
    value: MsgRecoverClient;
    fee?: StdFee;
    memo?: string;
};
type sendClientConsensusStatesParams = {
    value: ClientConsensusStates;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateClientResponseParams = {
    value: MsgCreateClientResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgIBCSoftwareUpgradeParams = {
    value: MsgIBCSoftwareUpgrade;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientParamsRequestParams = {
    value: QueryClientParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpgradeClientParams = {
    value: MsgUpgradeClient;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisMetadataParams = {
    value: GenesisMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendHeightParams = {
    value: Height;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStateResponseParams = {
    value: QueryConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedClientStateRequestParams = {
    value: QueryUpgradedClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendClientUpdateProposalParams = {
    value: ClientUpdateProposal;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedClientStateParams = {
    value: IdentifiedClientState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStateHeightsResponseParams = {
    value: QueryConsensusStateHeightsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStatusResponseParams = {
    value: QueryClientStatusResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStateRequestParams = {
    value: QueryConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedConsensusStateRequestParams = {
    value: QueryUpgradedConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecoverClientResponseParams = {
    value: MsgRecoverClientResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgIBCSoftwareUpgradeResponseParams = {
    value: MsgIBCSoftwareUpgradeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendUpgradeProposalParams = {
    value: UpgradeProposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateClientParams = {
    value: MsgCreateClient;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitMisbehaviourParams = {
    value: MsgSubmitMisbehaviour;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStatesResponseParams = {
    value: QueryConsensusStatesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStateRequestParams = {
    value: QueryClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStateHeightsRequestParams = {
    value: QueryConsensusStateHeightsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStatusRequestParams = {
    value: QueryClientStatusRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateClientResponseParams = {
    value: MsgUpdateClientResponse;
    fee?: StdFee;
    memo?: string;
};
type queryClientStatesResponseParams = {
    value: QueryClientStatesResponse;
};
type queryClientStateResponseParams = {
    value: QueryClientStateResponse;
};
type queryClientStatesRequestParams = {
    value: QueryClientStatesRequest;
};
type queryClientParamsResponseParams = {
    value: QueryClientParamsResponse;
};
type queryUpgradedClientStateResponseParams = {
    value: QueryUpgradedClientStateResponse;
};
type queryUpgradedConsensusStateResponseParams = {
    value: QueryUpgradedConsensusStateResponse;
};
type msgSubmitMisbehaviourResponseParams = {
    value: MsgSubmitMisbehaviourResponse;
};
type msgUpdateClientParams = {
    value: MsgUpdateClient;
};
type consensusStateWithHeightParams = {
    value: ConsensusStateWithHeight;
};
type identifiedGenesisMetadataParams = {
    value: IdentifiedGenesisMetadata;
};
type queryConsensusStatesRequestParams = {
    value: QueryConsensusStatesRequest;
};
type msgUpgradeClientResponseParams = {
    value: MsgUpgradeClientResponse;
};
type msgRecoverClientParams = {
    value: MsgRecoverClient;
};
type clientConsensusStatesParams = {
    value: ClientConsensusStates;
};
type msgCreateClientResponseParams = {
    value: MsgCreateClientResponse;
};
type msgIbcsoftwareUpgradeParams = {
    value: MsgIBCSoftwareUpgrade;
};
type queryClientParamsRequestParams = {
    value: QueryClientParamsRequest;
};
type msgUpgradeClientParams = {
    value: MsgUpgradeClient;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type genesisMetadataParams = {
    value: GenesisMetadata;
};
type heightParams = {
    value: Height;
};
type queryConsensusStateResponseParams = {
    value: QueryConsensusStateResponse;
};
type queryUpgradedClientStateRequestParams = {
    value: QueryUpgradedClientStateRequest;
};
type clientUpdateProposalParams = {
    value: ClientUpdateProposal;
};
type identifiedClientStateParams = {
    value: IdentifiedClientState;
};
type queryConsensusStateHeightsResponseParams = {
    value: QueryConsensusStateHeightsResponse;
};
type queryClientStatusResponseParams = {
    value: QueryClientStatusResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryConsensusStateRequestParams = {
    value: QueryConsensusStateRequest;
};
type queryUpgradedConsensusStateRequestParams = {
    value: QueryUpgradedConsensusStateRequest;
};
type msgRecoverClientResponseParams = {
    value: MsgRecoverClientResponse;
};
type msgIbcsoftwareUpgradeResponseParams = {
    value: MsgIBCSoftwareUpgradeResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type upgradeProposalParams = {
    value: UpgradeProposal;
};
type msgCreateClientParams = {
    value: MsgCreateClient;
};
type msgSubmitMisbehaviourParams = {
    value: MsgSubmitMisbehaviour;
};
type paramsParams = {
    value: Params;
};
type queryConsensusStatesResponseParams = {
    value: QueryConsensusStatesResponse;
};
type queryClientStateRequestParams = {
    value: QueryClientStateRequest;
};
type queryConsensusStateHeightsRequestParams = {
    value: QueryConsensusStateHeightsRequest;
};
type queryClientStatusRequestParams = {
    value: QueryClientStatusRequest;
};
type msgUpdateClientResponseParams = {
    value: MsgUpdateClientResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryClientStatesResponse({ value, fee, memo }: sendQueryClientStatesResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientStateResponse({ value, fee, memo }: sendQueryClientStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientStatesRequest({ value, fee, memo }: sendQueryClientStatesRequestParams): Promise<DeliverTxResponse>;
    sendQueryClientParamsResponse({ value, fee, memo }: sendQueryClientParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedClientStateResponse({ value, fee, memo }: sendQueryUpgradedClientStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedConsensusStateResponse({ value, fee, memo }: sendQueryUpgradedConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitMisbehaviourResponse({ value, fee, memo }: sendMsgSubmitMisbehaviourResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateClient({ value, fee, memo }: sendMsgUpdateClientParams): Promise<DeliverTxResponse>;
    sendConsensusStateWithHeight({ value, fee, memo }: sendConsensusStateWithHeightParams): Promise<DeliverTxResponse>;
    sendIdentifiedGenesisMetadata({ value, fee, memo }: sendIdentifiedGenesisMetadataParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStatesRequest({ value, fee, memo }: sendQueryConsensusStatesRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpgradeClientResponse({ value, fee, memo }: sendMsgUpgradeClientResponseParams): Promise<DeliverTxResponse>;
    sendMsgRecoverClient({ value, fee, memo }: sendMsgRecoverClientParams): Promise<DeliverTxResponse>;
    sendClientConsensusStates({ value, fee, memo }: sendClientConsensusStatesParams): Promise<DeliverTxResponse>;
    sendMsgCreateClientResponse({ value, fee, memo }: sendMsgCreateClientResponseParams): Promise<DeliverTxResponse>;
    sendMsgIBCSoftwareUpgrade({ value, fee, memo }: sendMsgIBCSoftwareUpgradeParams): Promise<DeliverTxResponse>;
    sendQueryClientParamsRequest({ value, fee, memo }: sendQueryClientParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpgradeClient({ value, fee, memo }: sendMsgUpgradeClientParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendGenesisMetadata({ value, fee, memo }: sendGenesisMetadataParams): Promise<DeliverTxResponse>;
    sendHeight({ value, fee, memo }: sendHeightParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStateResponse({ value, fee, memo }: sendQueryConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedClientStateRequest({ value, fee, memo }: sendQueryUpgradedClientStateRequestParams): Promise<DeliverTxResponse>;
    sendClientUpdateProposal({ value, fee, memo }: sendClientUpdateProposalParams): Promise<DeliverTxResponse>;
    sendIdentifiedClientState({ value, fee, memo }: sendIdentifiedClientStateParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStateHeightsResponse({ value, fee, memo }: sendQueryConsensusStateHeightsResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientStatusResponse({ value, fee, memo }: sendQueryClientStatusResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStateRequest({ value, fee, memo }: sendQueryConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedConsensusStateRequest({ value, fee, memo }: sendQueryUpgradedConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendMsgRecoverClientResponse({ value, fee, memo }: sendMsgRecoverClientResponseParams): Promise<DeliverTxResponse>;
    sendMsgIBCSoftwareUpgradeResponse({ value, fee, memo }: sendMsgIBCSoftwareUpgradeResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendUpgradeProposal({ value, fee, memo }: sendUpgradeProposalParams): Promise<DeliverTxResponse>;
    sendMsgCreateClient({ value, fee, memo }: sendMsgCreateClientParams): Promise<DeliverTxResponse>;
    sendMsgSubmitMisbehaviour({ value, fee, memo }: sendMsgSubmitMisbehaviourParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStatesResponse({ value, fee, memo }: sendQueryConsensusStatesResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientStateRequest({ value, fee, memo }: sendQueryClientStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStateHeightsRequest({ value, fee, memo }: sendQueryConsensusStateHeightsRequestParams): Promise<DeliverTxResponse>;
    sendQueryClientStatusRequest({ value, fee, memo }: sendQueryClientStatusRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateClientResponse({ value, fee, memo }: sendMsgUpdateClientResponseParams): Promise<DeliverTxResponse>;
    queryClientStatesResponse({ value }: queryClientStatesResponseParams): EncodeObject;
    queryClientStateResponse({ value }: queryClientStateResponseParams): EncodeObject;
    queryClientStatesRequest({ value }: queryClientStatesRequestParams): EncodeObject;
    queryClientParamsResponse({ value }: queryClientParamsResponseParams): EncodeObject;
    queryUpgradedClientStateResponse({ value }: queryUpgradedClientStateResponseParams): EncodeObject;
    queryUpgradedConsensusStateResponse({ value }: queryUpgradedConsensusStateResponseParams): EncodeObject;
    msgSubmitMisbehaviourResponse({ value }: msgSubmitMisbehaviourResponseParams): EncodeObject;
    msgUpdateClient({ value }: msgUpdateClientParams): EncodeObject;
    consensusStateWithHeight({ value }: consensusStateWithHeightParams): EncodeObject;
    identifiedGenesisMetadata({ value }: identifiedGenesisMetadataParams): EncodeObject;
    queryConsensusStatesRequest({ value }: queryConsensusStatesRequestParams): EncodeObject;
    msgUpgradeClientResponse({ value }: msgUpgradeClientResponseParams): EncodeObject;
    msgRecoverClient({ value }: msgRecoverClientParams): EncodeObject;
    clientConsensusStates({ value }: clientConsensusStatesParams): EncodeObject;
    msgCreateClientResponse({ value }: msgCreateClientResponseParams): EncodeObject;
    msgIbcsoftwareUpgrade({ value }: msgIbcsoftwareUpgradeParams): EncodeObject;
    queryClientParamsRequest({ value }: queryClientParamsRequestParams): EncodeObject;
    msgUpgradeClient({ value }: msgUpgradeClientParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    genesisMetadata({ value }: genesisMetadataParams): EncodeObject;
    height({ value }: heightParams): EncodeObject;
    queryConsensusStateResponse({ value }: queryConsensusStateResponseParams): EncodeObject;
    queryUpgradedClientStateRequest({ value }: queryUpgradedClientStateRequestParams): EncodeObject;
    clientUpdateProposal({ value }: clientUpdateProposalParams): EncodeObject;
    identifiedClientState({ value }: identifiedClientStateParams): EncodeObject;
    queryConsensusStateHeightsResponse({ value }: queryConsensusStateHeightsResponseParams): EncodeObject;
    queryClientStatusResponse({ value }: queryClientStatusResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryConsensusStateRequest({ value }: queryConsensusStateRequestParams): EncodeObject;
    queryUpgradedConsensusStateRequest({ value }: queryUpgradedConsensusStateRequestParams): EncodeObject;
    msgRecoverClientResponse({ value }: msgRecoverClientResponseParams): EncodeObject;
    msgIbcsoftwareUpgradeResponse({ value }: msgIbcsoftwareUpgradeResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    upgradeProposal({ value }: upgradeProposalParams): EncodeObject;
    msgCreateClient({ value }: msgCreateClientParams): EncodeObject;
    msgSubmitMisbehaviour({ value }: msgSubmitMisbehaviourParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryConsensusStatesResponse({ value }: queryConsensusStatesResponseParams): EncodeObject;
    queryClientStateRequest({ value }: queryClientStateRequestParams): EncodeObject;
    queryConsensusStateHeightsRequest({ value }: queryConsensusStateHeightsRequestParams): EncodeObject;
    queryClientStatusRequest({ value }: queryClientStatusRequestParams): EncodeObject;
    msgUpdateClientResponse({ value }: msgUpdateClientResponseParams): EncodeObject;
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
