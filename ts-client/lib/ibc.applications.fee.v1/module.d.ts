import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgRegisterPayee } from "./types/ibc/applications/fee/v1/tx";
import { MsgRegisterCounterpartyPayeeResponse } from "./types/ibc/applications/fee/v1/tx";
import { MsgPayPacketFeeResponse } from "./types/ibc/applications/fee/v1/tx";
import { QueryIncentivizedPacketsRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryIncentivizedPacketsForChannelResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryPayeeResponse } from "./types/ibc/applications/fee/v1/query";
import { FeeEnabledChannel } from "./types/ibc/applications/fee/v1/genesis";
import { MsgPayPacketFeeAsyncResponse } from "./types/ibc/applications/fee/v1/tx";
import { QueryTotalAckFeesResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryCounterpartyPayeeRequest } from "./types/ibc/applications/fee/v1/query";
import { ForwardRelayerAddress } from "./types/ibc/applications/fee/v1/genesis";
import { IncentivizedAcknowledgement } from "./types/ibc/applications/fee/v1/ack";
import { MsgRegisterCounterpartyPayee } from "./types/ibc/applications/fee/v1/tx";
import { MsgPayPacketFeeAsync } from "./types/ibc/applications/fee/v1/tx";
import { GenesisState } from "./types/ibc/applications/fee/v1/genesis";
import { QueryTotalRecvFeesResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryPayeeRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryFeeEnabledChannelsRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryFeeEnabledChannelsResponse } from "./types/ibc/applications/fee/v1/query";
import { RegisteredCounterpartyPayee } from "./types/ibc/applications/fee/v1/genesis";
import { PacketFees } from "./types/ibc/applications/fee/v1/fee";
import { IdentifiedPacketFees } from "./types/ibc/applications/fee/v1/fee";
import { QueryIncentivizedPacketRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryIncentivizedPacketResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryIncentivizedPacketsForChannelRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalRecvFeesRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalAckFeesRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalTimeoutFeesRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryCounterpartyPayeeResponse } from "./types/ibc/applications/fee/v1/query";
import { Fee } from "./types/ibc/applications/fee/v1/fee";
import { Metadata } from "./types/ibc/applications/fee/v1/metadata";
import { QueryFeeEnabledChannelRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryFeeEnabledChannelResponse } from "./types/ibc/applications/fee/v1/query";
import { RegisteredPayee } from "./types/ibc/applications/fee/v1/genesis";
import { MsgPayPacketFee } from "./types/ibc/applications/fee/v1/tx";
import { QueryIncentivizedPacketsResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalTimeoutFeesResponse } from "./types/ibc/applications/fee/v1/query";
import { PacketFee } from "./types/ibc/applications/fee/v1/fee";
import { MsgRegisterPayeeResponse } from "./types/ibc/applications/fee/v1/tx";
export { MsgRegisterPayee, MsgRegisterCounterpartyPayeeResponse, MsgPayPacketFeeResponse, QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsForChannelResponse, QueryPayeeResponse, FeeEnabledChannel, MsgPayPacketFeeAsyncResponse, QueryTotalAckFeesResponse, QueryCounterpartyPayeeRequest, ForwardRelayerAddress, IncentivizedAcknowledgement, MsgRegisterCounterpartyPayee, MsgPayPacketFeeAsync, GenesisState, QueryTotalRecvFeesResponse, QueryPayeeRequest, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, RegisteredCounterpartyPayee, PacketFees, IdentifiedPacketFees, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryTotalRecvFeesRequest, QueryTotalAckFeesRequest, QueryTotalTimeoutFeesRequest, QueryCounterpartyPayeeResponse, Fee, Metadata, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse, RegisteredPayee, MsgPayPacketFee, QueryIncentivizedPacketsResponse, QueryTotalTimeoutFeesResponse, PacketFee, MsgRegisterPayeeResponse };
type sendMsgRegisterPayeeParams = {
    value: MsgRegisterPayee;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterCounterpartyPayeeResponseParams = {
    value: MsgRegisterCounterpartyPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeResponseParams = {
    value: MsgPayPacketFeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketsRequestParams = {
    value: QueryIncentivizedPacketsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketsForChannelResponseParams = {
    value: QueryIncentivizedPacketsForChannelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPayeeResponseParams = {
    value: QueryPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendFeeEnabledChannelParams = {
    value: FeeEnabledChannel;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeAsyncResponseParams = {
    value: MsgPayPacketFeeAsyncResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalAckFeesResponseParams = {
    value: QueryTotalAckFeesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCounterpartyPayeeRequestParams = {
    value: QueryCounterpartyPayeeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendForwardRelayerAddressParams = {
    value: ForwardRelayerAddress;
    fee?: StdFee;
    memo?: string;
};
type sendIncentivizedAcknowledgementParams = {
    value: IncentivizedAcknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterCounterpartyPayeeParams = {
    value: MsgRegisterCounterpartyPayee;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeAsyncParams = {
    value: MsgPayPacketFeeAsync;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalRecvFeesResponseParams = {
    value: QueryTotalRecvFeesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPayeeRequestParams = {
    value: QueryPayeeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelsRequestParams = {
    value: QueryFeeEnabledChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelsResponseParams = {
    value: QueryFeeEnabledChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendRegisteredCounterpartyPayeeParams = {
    value: RegisteredCounterpartyPayee;
    fee?: StdFee;
    memo?: string;
};
type sendPacketFeesParams = {
    value: PacketFees;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedPacketFeesParams = {
    value: IdentifiedPacketFees;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketRequestParams = {
    value: QueryIncentivizedPacketRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketResponseParams = {
    value: QueryIncentivizedPacketResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketsForChannelRequestParams = {
    value: QueryIncentivizedPacketsForChannelRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalRecvFeesRequestParams = {
    value: QueryTotalRecvFeesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalAckFeesRequestParams = {
    value: QueryTotalAckFeesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalTimeoutFeesRequestParams = {
    value: QueryTotalTimeoutFeesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCounterpartyPayeeResponseParams = {
    value: QueryCounterpartyPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendFeeParams = {
    value: Fee;
    fee?: StdFee;
    memo?: string;
};
type sendMetadataParams = {
    value: Metadata;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelRequestParams = {
    value: QueryFeeEnabledChannelRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelResponseParams = {
    value: QueryFeeEnabledChannelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendRegisteredPayeeParams = {
    value: RegisteredPayee;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeParams = {
    value: MsgPayPacketFee;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketsResponseParams = {
    value: QueryIncentivizedPacketsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalTimeoutFeesResponseParams = {
    value: QueryTotalTimeoutFeesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendPacketFeeParams = {
    value: PacketFee;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterPayeeResponseParams = {
    value: MsgRegisterPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type msgRegisterPayeeParams = {
    value: MsgRegisterPayee;
};
type msgRegisterCounterpartyPayeeResponseParams = {
    value: MsgRegisterCounterpartyPayeeResponse;
};
type msgPayPacketFeeResponseParams = {
    value: MsgPayPacketFeeResponse;
};
type queryIncentivizedPacketsRequestParams = {
    value: QueryIncentivizedPacketsRequest;
};
type queryIncentivizedPacketsForChannelResponseParams = {
    value: QueryIncentivizedPacketsForChannelResponse;
};
type queryPayeeResponseParams = {
    value: QueryPayeeResponse;
};
type feeEnabledChannelParams = {
    value: FeeEnabledChannel;
};
type msgPayPacketFeeAsyncResponseParams = {
    value: MsgPayPacketFeeAsyncResponse;
};
type queryTotalAckFeesResponseParams = {
    value: QueryTotalAckFeesResponse;
};
type queryCounterpartyPayeeRequestParams = {
    value: QueryCounterpartyPayeeRequest;
};
type forwardRelayerAddressParams = {
    value: ForwardRelayerAddress;
};
type incentivizedAcknowledgementParams = {
    value: IncentivizedAcknowledgement;
};
type msgRegisterCounterpartyPayeeParams = {
    value: MsgRegisterCounterpartyPayee;
};
type msgPayPacketFeeAsyncParams = {
    value: MsgPayPacketFeeAsync;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryTotalRecvFeesResponseParams = {
    value: QueryTotalRecvFeesResponse;
};
type queryPayeeRequestParams = {
    value: QueryPayeeRequest;
};
type queryFeeEnabledChannelsRequestParams = {
    value: QueryFeeEnabledChannelsRequest;
};
type queryFeeEnabledChannelsResponseParams = {
    value: QueryFeeEnabledChannelsResponse;
};
type registeredCounterpartyPayeeParams = {
    value: RegisteredCounterpartyPayee;
};
type packetFeesParams = {
    value: PacketFees;
};
type identifiedPacketFeesParams = {
    value: IdentifiedPacketFees;
};
type queryIncentivizedPacketRequestParams = {
    value: QueryIncentivizedPacketRequest;
};
type queryIncentivizedPacketResponseParams = {
    value: QueryIncentivizedPacketResponse;
};
type queryIncentivizedPacketsForChannelRequestParams = {
    value: QueryIncentivizedPacketsForChannelRequest;
};
type queryTotalRecvFeesRequestParams = {
    value: QueryTotalRecvFeesRequest;
};
type queryTotalAckFeesRequestParams = {
    value: QueryTotalAckFeesRequest;
};
type queryTotalTimeoutFeesRequestParams = {
    value: QueryTotalTimeoutFeesRequest;
};
type queryCounterpartyPayeeResponseParams = {
    value: QueryCounterpartyPayeeResponse;
};
type feeParams = {
    value: Fee;
};
type metadataParams = {
    value: Metadata;
};
type queryFeeEnabledChannelRequestParams = {
    value: QueryFeeEnabledChannelRequest;
};
type queryFeeEnabledChannelResponseParams = {
    value: QueryFeeEnabledChannelResponse;
};
type registeredPayeeParams = {
    value: RegisteredPayee;
};
type msgPayPacketFeeParams = {
    value: MsgPayPacketFee;
};
type queryIncentivizedPacketsResponseParams = {
    value: QueryIncentivizedPacketsResponse;
};
type queryTotalTimeoutFeesResponseParams = {
    value: QueryTotalTimeoutFeesResponse;
};
type packetFeeParams = {
    value: PacketFee;
};
type msgRegisterPayeeResponseParams = {
    value: MsgRegisterPayeeResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgRegisterPayee({ value, fee, memo }: sendMsgRegisterPayeeParams): Promise<DeliverTxResponse>;
    sendMsgRegisterCounterpartyPayeeResponse({ value, fee, memo }: sendMsgRegisterCounterpartyPayeeResponseParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFeeResponse({ value, fee, memo }: sendMsgPayPacketFeeResponseParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsRequest({ value, fee, memo }: sendQueryIncentivizedPacketsRequestParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsForChannelResponse({ value, fee, memo }: sendQueryIncentivizedPacketsForChannelResponseParams): Promise<DeliverTxResponse>;
    sendQueryPayeeResponse({ value, fee, memo }: sendQueryPayeeResponseParams): Promise<DeliverTxResponse>;
    sendFeeEnabledChannel({ value, fee, memo }: sendFeeEnabledChannelParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFeeAsyncResponse({ value, fee, memo }: sendMsgPayPacketFeeAsyncResponseParams): Promise<DeliverTxResponse>;
    sendQueryTotalAckFeesResponse({ value, fee, memo }: sendQueryTotalAckFeesResponseParams): Promise<DeliverTxResponse>;
    sendQueryCounterpartyPayeeRequest({ value, fee, memo }: sendQueryCounterpartyPayeeRequestParams): Promise<DeliverTxResponse>;
    sendForwardRelayerAddress({ value, fee, memo }: sendForwardRelayerAddressParams): Promise<DeliverTxResponse>;
    sendIncentivizedAcknowledgement({ value, fee, memo }: sendIncentivizedAcknowledgementParams): Promise<DeliverTxResponse>;
    sendMsgRegisterCounterpartyPayee({ value, fee, memo }: sendMsgRegisterCounterpartyPayeeParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFeeAsync({ value, fee, memo }: sendMsgPayPacketFeeAsyncParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryTotalRecvFeesResponse({ value, fee, memo }: sendQueryTotalRecvFeesResponseParams): Promise<DeliverTxResponse>;
    sendQueryPayeeRequest({ value, fee, memo }: sendQueryPayeeRequestParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelsRequest({ value, fee, memo }: sendQueryFeeEnabledChannelsRequestParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelsResponse({ value, fee, memo }: sendQueryFeeEnabledChannelsResponseParams): Promise<DeliverTxResponse>;
    sendRegisteredCounterpartyPayee({ value, fee, memo }: sendRegisteredCounterpartyPayeeParams): Promise<DeliverTxResponse>;
    sendPacketFees({ value, fee, memo }: sendPacketFeesParams): Promise<DeliverTxResponse>;
    sendIdentifiedPacketFees({ value, fee, memo }: sendIdentifiedPacketFeesParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketRequest({ value, fee, memo }: sendQueryIncentivizedPacketRequestParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketResponse({ value, fee, memo }: sendQueryIncentivizedPacketResponseParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsForChannelRequest({ value, fee, memo }: sendQueryIncentivizedPacketsForChannelRequestParams): Promise<DeliverTxResponse>;
    sendQueryTotalRecvFeesRequest({ value, fee, memo }: sendQueryTotalRecvFeesRequestParams): Promise<DeliverTxResponse>;
    sendQueryTotalAckFeesRequest({ value, fee, memo }: sendQueryTotalAckFeesRequestParams): Promise<DeliverTxResponse>;
    sendQueryTotalTimeoutFeesRequest({ value, fee, memo }: sendQueryTotalTimeoutFeesRequestParams): Promise<DeliverTxResponse>;
    sendQueryCounterpartyPayeeResponse({ value, fee, memo }: sendQueryCounterpartyPayeeResponseParams): Promise<DeliverTxResponse>;
    sendFee({ value, fee, memo }: sendFeeParams): Promise<DeliverTxResponse>;
    sendMetadata({ value, fee, memo }: sendMetadataParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelRequest({ value, fee, memo }: sendQueryFeeEnabledChannelRequestParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelResponse({ value, fee, memo }: sendQueryFeeEnabledChannelResponseParams): Promise<DeliverTxResponse>;
    sendRegisteredPayee({ value, fee, memo }: sendRegisteredPayeeParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFee({ value, fee, memo }: sendMsgPayPacketFeeParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsResponse({ value, fee, memo }: sendQueryIncentivizedPacketsResponseParams): Promise<DeliverTxResponse>;
    sendQueryTotalTimeoutFeesResponse({ value, fee, memo }: sendQueryTotalTimeoutFeesResponseParams): Promise<DeliverTxResponse>;
    sendPacketFee({ value, fee, memo }: sendPacketFeeParams): Promise<DeliverTxResponse>;
    sendMsgRegisterPayeeResponse({ value, fee, memo }: sendMsgRegisterPayeeResponseParams): Promise<DeliverTxResponse>;
    msgRegisterPayee({ value }: msgRegisterPayeeParams): EncodeObject;
    msgRegisterCounterpartyPayeeResponse({ value }: msgRegisterCounterpartyPayeeResponseParams): EncodeObject;
    msgPayPacketFeeResponse({ value }: msgPayPacketFeeResponseParams): EncodeObject;
    queryIncentivizedPacketsRequest({ value }: queryIncentivizedPacketsRequestParams): EncodeObject;
    queryIncentivizedPacketsForChannelResponse({ value }: queryIncentivizedPacketsForChannelResponseParams): EncodeObject;
    queryPayeeResponse({ value }: queryPayeeResponseParams): EncodeObject;
    feeEnabledChannel({ value }: feeEnabledChannelParams): EncodeObject;
    msgPayPacketFeeAsyncResponse({ value }: msgPayPacketFeeAsyncResponseParams): EncodeObject;
    queryTotalAckFeesResponse({ value }: queryTotalAckFeesResponseParams): EncodeObject;
    queryCounterpartyPayeeRequest({ value }: queryCounterpartyPayeeRequestParams): EncodeObject;
    forwardRelayerAddress({ value }: forwardRelayerAddressParams): EncodeObject;
    incentivizedAcknowledgement({ value }: incentivizedAcknowledgementParams): EncodeObject;
    msgRegisterCounterpartyPayee({ value }: msgRegisterCounterpartyPayeeParams): EncodeObject;
    msgPayPacketFeeAsync({ value }: msgPayPacketFeeAsyncParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryTotalRecvFeesResponse({ value }: queryTotalRecvFeesResponseParams): EncodeObject;
    queryPayeeRequest({ value }: queryPayeeRequestParams): EncodeObject;
    queryFeeEnabledChannelsRequest({ value }: queryFeeEnabledChannelsRequestParams): EncodeObject;
    queryFeeEnabledChannelsResponse({ value }: queryFeeEnabledChannelsResponseParams): EncodeObject;
    registeredCounterpartyPayee({ value }: registeredCounterpartyPayeeParams): EncodeObject;
    packetFees({ value }: packetFeesParams): EncodeObject;
    identifiedPacketFees({ value }: identifiedPacketFeesParams): EncodeObject;
    queryIncentivizedPacketRequest({ value }: queryIncentivizedPacketRequestParams): EncodeObject;
    queryIncentivizedPacketResponse({ value }: queryIncentivizedPacketResponseParams): EncodeObject;
    queryIncentivizedPacketsForChannelRequest({ value }: queryIncentivizedPacketsForChannelRequestParams): EncodeObject;
    queryTotalRecvFeesRequest({ value }: queryTotalRecvFeesRequestParams): EncodeObject;
    queryTotalAckFeesRequest({ value }: queryTotalAckFeesRequestParams): EncodeObject;
    queryTotalTimeoutFeesRequest({ value }: queryTotalTimeoutFeesRequestParams): EncodeObject;
    queryCounterpartyPayeeResponse({ value }: queryCounterpartyPayeeResponseParams): EncodeObject;
    fee({ value }: feeParams): EncodeObject;
    metadata({ value }: metadataParams): EncodeObject;
    queryFeeEnabledChannelRequest({ value }: queryFeeEnabledChannelRequestParams): EncodeObject;
    queryFeeEnabledChannelResponse({ value }: queryFeeEnabledChannelResponseParams): EncodeObject;
    registeredPayee({ value }: registeredPayeeParams): EncodeObject;
    msgPayPacketFee({ value }: msgPayPacketFeeParams): EncodeObject;
    queryIncentivizedPacketsResponse({ value }: queryIncentivizedPacketsResponseParams): EncodeObject;
    queryTotalTimeoutFeesResponse({ value }: queryTotalTimeoutFeesResponseParams): EncodeObject;
    packetFee({ value }: packetFeeParams): EncodeObject;
    msgRegisterPayeeResponse({ value }: msgRegisterPayeeResponseParams): EncodeObject;
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
        IbcApplicationsFeeV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
