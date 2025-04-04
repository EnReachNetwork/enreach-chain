import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryConnectionConsensusStateResponse } from "./types/ibc/core/connection/v1/query";
import { MsgUpdateParamsResponse } from "./types/ibc/core/connection/v1/tx";
import { ConnectionEnd } from "./types/ibc/core/connection/v1/connection";
import { Version } from "./types/ibc/core/connection/v1/connection";
import { QueryConnectionRequest } from "./types/ibc/core/connection/v1/query";
import { ConnectionPaths } from "./types/ibc/core/connection/v1/connection";
import { MsgConnectionOpenAckResponse } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenAck } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionClientStateResponse } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionResponse } from "./types/ibc/core/connection/v1/query";
import { MsgConnectionOpenInit } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenTry } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenTryResponse } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionsResponse } from "./types/ibc/core/connection/v1/query";
import { IdentifiedConnection } from "./types/ibc/core/connection/v1/connection";
import { QueryConnectionsRequest } from "./types/ibc/core/connection/v1/query";
import { ClientPaths } from "./types/ibc/core/connection/v1/connection";
import { MsgUpdateParams } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenInitResponse } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionClientStateRequest } from "./types/ibc/core/connection/v1/query";
import { Params } from "./types/ibc/core/connection/v1/connection";
import { QueryClientConnectionsResponse } from "./types/ibc/core/connection/v1/query";
import { MsgConnectionOpenConfirmResponse } from "./types/ibc/core/connection/v1/tx";
import { Counterparty } from "./types/ibc/core/connection/v1/connection";
import { QueryClientConnectionsRequest } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionConsensusStateRequest } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionParamsRequest } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionParamsResponse } from "./types/ibc/core/connection/v1/query";
import { GenesisState } from "./types/ibc/core/connection/v1/genesis";
import { MsgConnectionOpenConfirm } from "./types/ibc/core/connection/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateResponse", QueryConnectionConsensusStateResponse],
    ["/ibc.core.connection.v1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/ibc.core.connection.v1.ConnectionEnd", ConnectionEnd],
    ["/ibc.core.connection.v1.Version", Version],
    ["/ibc.core.connection.v1.QueryConnectionRequest", QueryConnectionRequest],
    ["/ibc.core.connection.v1.ConnectionPaths", ConnectionPaths],
    ["/ibc.core.connection.v1.MsgConnectionOpenAckResponse", MsgConnectionOpenAckResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenAck", MsgConnectionOpenAck],
    ["/ibc.core.connection.v1.QueryConnectionClientStateResponse", QueryConnectionClientStateResponse],
    ["/ibc.core.connection.v1.QueryConnectionResponse", QueryConnectionResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenInit", MsgConnectionOpenInit],
    ["/ibc.core.connection.v1.MsgConnectionOpenTry", MsgConnectionOpenTry],
    ["/ibc.core.connection.v1.MsgConnectionOpenTryResponse", MsgConnectionOpenTryResponse],
    ["/ibc.core.connection.v1.QueryConnectionsResponse", QueryConnectionsResponse],
    ["/ibc.core.connection.v1.IdentifiedConnection", IdentifiedConnection],
    ["/ibc.core.connection.v1.QueryConnectionsRequest", QueryConnectionsRequest],
    ["/ibc.core.connection.v1.ClientPaths", ClientPaths],
    ["/ibc.core.connection.v1.MsgUpdateParams", MsgUpdateParams],
    ["/ibc.core.connection.v1.MsgConnectionOpenInitResponse", MsgConnectionOpenInitResponse],
    ["/ibc.core.connection.v1.QueryConnectionClientStateRequest", QueryConnectionClientStateRequest],
    ["/ibc.core.connection.v1.Params", Params],
    ["/ibc.core.connection.v1.QueryClientConnectionsResponse", QueryClientConnectionsResponse],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse", MsgConnectionOpenConfirmResponse],
    ["/ibc.core.connection.v1.Counterparty", Counterparty],
    ["/ibc.core.connection.v1.QueryClientConnectionsRequest", QueryClientConnectionsRequest],
    ["/ibc.core.connection.v1.QueryConnectionConsensusStateRequest", QueryConnectionConsensusStateRequest],
    ["/ibc.core.connection.v1.QueryConnectionParamsRequest", QueryConnectionParamsRequest],
    ["/ibc.core.connection.v1.QueryConnectionParamsResponse", QueryConnectionParamsResponse],
    ["/ibc.core.connection.v1.GenesisState", GenesisState],
    ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", MsgConnectionOpenConfirm],
    
];

export { msgTypes }