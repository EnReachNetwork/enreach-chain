import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgConnectionOpenInitResponse } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionConsensusStateRequest } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionParamsResponse } from "./types/ibc/core/connection/v1/query";
import { MsgConnectionOpenConfirmResponse } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionResponse } from "./types/ibc/core/connection/v1/query";
import { QueryClientConnectionsResponse } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionClientStateRequest } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionConsensusStateResponse } from "./types/ibc/core/connection/v1/query";
import { IdentifiedConnection } from "./types/ibc/core/connection/v1/connection";
import { GenesisState } from "./types/ibc/core/connection/v1/genesis";
import { MsgConnectionOpenAck } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenConfirm } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionsResponse } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionParamsRequest } from "./types/ibc/core/connection/v1/query";
import { MsgUpdateParams } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionClientStateResponse } from "./types/ibc/core/connection/v1/query";
import { Counterparty } from "./types/ibc/core/connection/v1/connection";
import { QueryConnectionRequest } from "./types/ibc/core/connection/v1/query";
import { Version } from "./types/ibc/core/connection/v1/connection";
import { ConnectionPaths } from "./types/ibc/core/connection/v1/connection";
import { MsgConnectionOpenInit } from "./types/ibc/core/connection/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/core/connection/v1/tx";
import { ConnectionEnd } from "./types/ibc/core/connection/v1/connection";
import { QueryConnectionsRequest } from "./types/ibc/core/connection/v1/query";
import { QueryClientConnectionsRequest } from "./types/ibc/core/connection/v1/query";
import { MsgConnectionOpenTry } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenTryResponse } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenAckResponse } from "./types/ibc/core/connection/v1/tx";
import { Params } from "./types/ibc/core/connection/v1/connection";
import { ClientPaths } from "./types/ibc/core/connection/v1/connection";
export { MsgConnectionOpenInitResponse, QueryConnectionConsensusStateRequest, QueryConnectionParamsResponse, MsgConnectionOpenConfirmResponse, QueryConnectionResponse, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionConsensusStateResponse, IdentifiedConnection, GenesisState, MsgConnectionOpenAck, MsgConnectionOpenConfirm, QueryConnectionsResponse, QueryConnectionParamsRequest, MsgUpdateParams, QueryConnectionClientStateResponse, Counterparty, QueryConnectionRequest, Version, ConnectionPaths, MsgConnectionOpenInit, MsgUpdateParamsResponse, ConnectionEnd, QueryConnectionsRequest, QueryClientConnectionsRequest, MsgConnectionOpenTry, MsgConnectionOpenTryResponse, MsgConnectionOpenAckResponse, Params, ClientPaths };
type sendMsgConnectionOpenInitResponseParams = {
    value: MsgConnectionOpenInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionConsensusStateRequestParams = {
    value: QueryConnectionConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionParamsResponseParams = {
    value: QueryConnectionParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenConfirmResponseParams = {
    value: MsgConnectionOpenConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionResponseParams = {
    value: QueryConnectionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientConnectionsResponseParams = {
    value: QueryClientConnectionsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionClientStateRequestParams = {
    value: QueryConnectionClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionConsensusStateResponseParams = {
    value: QueryConnectionConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedConnectionParams = {
    value: IdentifiedConnection;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenAckParams = {
    value: MsgConnectionOpenAck;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenConfirmParams = {
    value: MsgConnectionOpenConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionsResponseParams = {
    value: QueryConnectionsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionParamsRequestParams = {
    value: QueryConnectionParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionClientStateResponseParams = {
    value: QueryConnectionClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCounterpartyParams = {
    value: Counterparty;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionRequestParams = {
    value: QueryConnectionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendVersionParams = {
    value: Version;
    fee?: StdFee;
    memo?: string;
};
type sendConnectionPathsParams = {
    value: ConnectionPaths;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenInitParams = {
    value: MsgConnectionOpenInit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendConnectionEndParams = {
    value: ConnectionEnd;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionsRequestParams = {
    value: QueryConnectionsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientConnectionsRequestParams = {
    value: QueryClientConnectionsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenTryParams = {
    value: MsgConnectionOpenTry;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenTryResponseParams = {
    value: MsgConnectionOpenTryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenAckResponseParams = {
    value: MsgConnectionOpenAckResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendClientPathsParams = {
    value: ClientPaths;
    fee?: StdFee;
    memo?: string;
};
type msgConnectionOpenInitResponseParams = {
    value: MsgConnectionOpenInitResponse;
};
type queryConnectionConsensusStateRequestParams = {
    value: QueryConnectionConsensusStateRequest;
};
type queryConnectionParamsResponseParams = {
    value: QueryConnectionParamsResponse;
};
type msgConnectionOpenConfirmResponseParams = {
    value: MsgConnectionOpenConfirmResponse;
};
type queryConnectionResponseParams = {
    value: QueryConnectionResponse;
};
type queryClientConnectionsResponseParams = {
    value: QueryClientConnectionsResponse;
};
type queryConnectionClientStateRequestParams = {
    value: QueryConnectionClientStateRequest;
};
type queryConnectionConsensusStateResponseParams = {
    value: QueryConnectionConsensusStateResponse;
};
type identifiedConnectionParams = {
    value: IdentifiedConnection;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgConnectionOpenAckParams = {
    value: MsgConnectionOpenAck;
};
type msgConnectionOpenConfirmParams = {
    value: MsgConnectionOpenConfirm;
};
type queryConnectionsResponseParams = {
    value: QueryConnectionsResponse;
};
type queryConnectionParamsRequestParams = {
    value: QueryConnectionParamsRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryConnectionClientStateResponseParams = {
    value: QueryConnectionClientStateResponse;
};
type counterpartyParams = {
    value: Counterparty;
};
type queryConnectionRequestParams = {
    value: QueryConnectionRequest;
};
type versionParams = {
    value: Version;
};
type connectionPathsParams = {
    value: ConnectionPaths;
};
type msgConnectionOpenInitParams = {
    value: MsgConnectionOpenInit;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type connectionEndParams = {
    value: ConnectionEnd;
};
type queryConnectionsRequestParams = {
    value: QueryConnectionsRequest;
};
type queryClientConnectionsRequestParams = {
    value: QueryClientConnectionsRequest;
};
type msgConnectionOpenTryParams = {
    value: MsgConnectionOpenTry;
};
type msgConnectionOpenTryResponseParams = {
    value: MsgConnectionOpenTryResponse;
};
type msgConnectionOpenAckResponseParams = {
    value: MsgConnectionOpenAckResponse;
};
type paramsParams = {
    value: Params;
};
type clientPathsParams = {
    value: ClientPaths;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgConnectionOpenInitResponse({ value, fee, memo }: sendMsgConnectionOpenInitResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionConsensusStateRequest({ value, fee, memo }: sendQueryConnectionConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryConnectionParamsResponse({ value, fee, memo }: sendQueryConnectionParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenConfirmResponse({ value, fee, memo }: sendMsgConnectionOpenConfirmResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionResponse({ value, fee, memo }: sendQueryConnectionResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientConnectionsResponse({ value, fee, memo }: sendQueryClientConnectionsResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionClientStateRequest({ value, fee, memo }: sendQueryConnectionClientStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryConnectionConsensusStateResponse({ value, fee, memo }: sendQueryConnectionConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendIdentifiedConnection({ value, fee, memo }: sendIdentifiedConnectionParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenAck({ value, fee, memo }: sendMsgConnectionOpenAckParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenConfirm({ value, fee, memo }: sendMsgConnectionOpenConfirmParams): Promise<DeliverTxResponse>;
    sendQueryConnectionsResponse({ value, fee, memo }: sendQueryConnectionsResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionParamsRequest({ value, fee, memo }: sendQueryConnectionParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryConnectionClientStateResponse({ value, fee, memo }: sendQueryConnectionClientStateResponseParams): Promise<DeliverTxResponse>;
    sendCounterparty({ value, fee, memo }: sendCounterpartyParams): Promise<DeliverTxResponse>;
    sendQueryConnectionRequest({ value, fee, memo }: sendQueryConnectionRequestParams): Promise<DeliverTxResponse>;
    sendVersion({ value, fee, memo }: sendVersionParams): Promise<DeliverTxResponse>;
    sendConnectionPaths({ value, fee, memo }: sendConnectionPathsParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenInit({ value, fee, memo }: sendMsgConnectionOpenInitParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendConnectionEnd({ value, fee, memo }: sendConnectionEndParams): Promise<DeliverTxResponse>;
    sendQueryConnectionsRequest({ value, fee, memo }: sendQueryConnectionsRequestParams): Promise<DeliverTxResponse>;
    sendQueryClientConnectionsRequest({ value, fee, memo }: sendQueryClientConnectionsRequestParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenTry({ value, fee, memo }: sendMsgConnectionOpenTryParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenTryResponse({ value, fee, memo }: sendMsgConnectionOpenTryResponseParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenAckResponse({ value, fee, memo }: sendMsgConnectionOpenAckResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendClientPaths({ value, fee, memo }: sendClientPathsParams): Promise<DeliverTxResponse>;
    msgConnectionOpenInitResponse({ value }: msgConnectionOpenInitResponseParams): EncodeObject;
    queryConnectionConsensusStateRequest({ value }: queryConnectionConsensusStateRequestParams): EncodeObject;
    queryConnectionParamsResponse({ value }: queryConnectionParamsResponseParams): EncodeObject;
    msgConnectionOpenConfirmResponse({ value }: msgConnectionOpenConfirmResponseParams): EncodeObject;
    queryConnectionResponse({ value }: queryConnectionResponseParams): EncodeObject;
    queryClientConnectionsResponse({ value }: queryClientConnectionsResponseParams): EncodeObject;
    queryConnectionClientStateRequest({ value }: queryConnectionClientStateRequestParams): EncodeObject;
    queryConnectionConsensusStateResponse({ value }: queryConnectionConsensusStateResponseParams): EncodeObject;
    identifiedConnection({ value }: identifiedConnectionParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgConnectionOpenAck({ value }: msgConnectionOpenAckParams): EncodeObject;
    msgConnectionOpenConfirm({ value }: msgConnectionOpenConfirmParams): EncodeObject;
    queryConnectionsResponse({ value }: queryConnectionsResponseParams): EncodeObject;
    queryConnectionParamsRequest({ value }: queryConnectionParamsRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryConnectionClientStateResponse({ value }: queryConnectionClientStateResponseParams): EncodeObject;
    counterparty({ value }: counterpartyParams): EncodeObject;
    queryConnectionRequest({ value }: queryConnectionRequestParams): EncodeObject;
    version({ value }: versionParams): EncodeObject;
    connectionPaths({ value }: connectionPathsParams): EncodeObject;
    msgConnectionOpenInit({ value }: msgConnectionOpenInitParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    connectionEnd({ value }: connectionEndParams): EncodeObject;
    queryConnectionsRequest({ value }: queryConnectionsRequestParams): EncodeObject;
    queryClientConnectionsRequest({ value }: queryClientConnectionsRequestParams): EncodeObject;
    msgConnectionOpenTry({ value }: msgConnectionOpenTryParams): EncodeObject;
    msgConnectionOpenTryResponse({ value }: msgConnectionOpenTryResponseParams): EncodeObject;
    msgConnectionOpenAckResponse({ value }: msgConnectionOpenAckResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    clientPaths({ value }: clientPathsParams): EncodeObject;
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
        IbcCoreConnectionV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
