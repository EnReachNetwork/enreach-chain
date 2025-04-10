import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { IdentifiedPacketFees } from "./types/ibc/applications/fee/v1/fee";
import { MsgPayPacketFeeResponse } from "./types/ibc/applications/fee/v1/tx";
import { IncentivizedAcknowledgement } from "./types/ibc/applications/fee/v1/ack";
import { RegisteredPayee } from "./types/ibc/applications/fee/v1/genesis";
import { MsgRegisterPayee } from "./types/ibc/applications/fee/v1/tx";
import { MsgPayPacketFee } from "./types/ibc/applications/fee/v1/tx";
import { QueryIncentivizedPacketRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryFeeEnabledChannelRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalRecvFeesResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryFeeEnabledChannelResponse } from "./types/ibc/applications/fee/v1/query";
import { MsgRegisterCounterpartyPayeeResponse } from "./types/ibc/applications/fee/v1/tx";
import { QueryFeeEnabledChannelsResponse } from "./types/ibc/applications/fee/v1/query";
import { PacketFees } from "./types/ibc/applications/fee/v1/fee";
import { MsgPayPacketFeeAsync } from "./types/ibc/applications/fee/v1/tx";
import { Metadata } from "./types/ibc/applications/fee/v1/metadata";
import { QueryTotalRecvFeesRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalTimeoutFeesRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalTimeoutFeesResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryFeeEnabledChannelsRequest } from "./types/ibc/applications/fee/v1/query";
import { MsgPayPacketFeeAsyncResponse } from "./types/ibc/applications/fee/v1/tx";
import { ForwardRelayerAddress } from "./types/ibc/applications/fee/v1/genesis";
import { QueryIncentivizedPacketsForChannelResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalAckFeesRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryTotalAckFeesResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryCounterpartyPayeeRequest } from "./types/ibc/applications/fee/v1/query";
import { MsgRegisterPayeeResponse } from "./types/ibc/applications/fee/v1/tx";
import { FeeEnabledChannel } from "./types/ibc/applications/fee/v1/genesis";
import { RegisteredCounterpartyPayee } from "./types/ibc/applications/fee/v1/genesis";
import { MsgRegisterCounterpartyPayee } from "./types/ibc/applications/fee/v1/tx";
import { GenesisState } from "./types/ibc/applications/fee/v1/genesis";
import { QueryIncentivizedPacketResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryIncentivizedPacketsForChannelRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryPayeeResponse } from "./types/ibc/applications/fee/v1/query";
import { Fee } from "./types/ibc/applications/fee/v1/fee";
import { PacketFee } from "./types/ibc/applications/fee/v1/fee";
import { QueryIncentivizedPacketsRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryIncentivizedPacketsResponse } from "./types/ibc/applications/fee/v1/query";
import { QueryPayeeRequest } from "./types/ibc/applications/fee/v1/query";
import { QueryCounterpartyPayeeResponse } from "./types/ibc/applications/fee/v1/query";
export { IdentifiedPacketFees, MsgPayPacketFeeResponse, IncentivizedAcknowledgement, RegisteredPayee, MsgRegisterPayee, MsgPayPacketFee, QueryIncentivizedPacketRequest, QueryFeeEnabledChannelRequest, QueryTotalRecvFeesResponse, QueryFeeEnabledChannelResponse, MsgRegisterCounterpartyPayeeResponse, QueryFeeEnabledChannelsResponse, PacketFees, MsgPayPacketFeeAsync, Metadata, QueryTotalRecvFeesRequest, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryFeeEnabledChannelsRequest, MsgPayPacketFeeAsyncResponse, ForwardRelayerAddress, QueryIncentivizedPacketsForChannelResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryCounterpartyPayeeRequest, MsgRegisterPayeeResponse, FeeEnabledChannel, RegisteredCounterpartyPayee, MsgRegisterCounterpartyPayee, GenesisState, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryPayeeResponse, Fee, PacketFee, QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryPayeeRequest, QueryCounterpartyPayeeResponse };
type sendIdentifiedPacketFeesParams = {
    value: IdentifiedPacketFees;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeResponseParams = {
    value: MsgPayPacketFeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendIncentivizedAcknowledgementParams = {
    value: IncentivizedAcknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendRegisteredPayeeParams = {
    value: RegisteredPayee;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterPayeeParams = {
    value: MsgRegisterPayee;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeParams = {
    value: MsgPayPacketFee;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketRequestParams = {
    value: QueryIncentivizedPacketRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelRequestParams = {
    value: QueryFeeEnabledChannelRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalRecvFeesResponseParams = {
    value: QueryTotalRecvFeesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelResponseParams = {
    value: QueryFeeEnabledChannelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterCounterpartyPayeeResponseParams = {
    value: MsgRegisterCounterpartyPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelsResponseParams = {
    value: QueryFeeEnabledChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendPacketFeesParams = {
    value: PacketFees;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeAsyncParams = {
    value: MsgPayPacketFeeAsync;
    fee?: StdFee;
    memo?: string;
};
type sendMetadataParams = {
    value: Metadata;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalRecvFeesRequestParams = {
    value: QueryTotalRecvFeesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalTimeoutFeesRequestParams = {
    value: QueryTotalTimeoutFeesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalTimeoutFeesResponseParams = {
    value: QueryTotalTimeoutFeesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryFeeEnabledChannelsRequestParams = {
    value: QueryFeeEnabledChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPayPacketFeeAsyncResponseParams = {
    value: MsgPayPacketFeeAsyncResponse;
    fee?: StdFee;
    memo?: string;
};
type sendForwardRelayerAddressParams = {
    value: ForwardRelayerAddress;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketsForChannelResponseParams = {
    value: QueryIncentivizedPacketsForChannelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalAckFeesRequestParams = {
    value: QueryTotalAckFeesRequest;
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
type sendMsgRegisterPayeeResponseParams = {
    value: MsgRegisterPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendFeeEnabledChannelParams = {
    value: FeeEnabledChannel;
    fee?: StdFee;
    memo?: string;
};
type sendRegisteredCounterpartyPayeeParams = {
    value: RegisteredCounterpartyPayee;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterCounterpartyPayeeParams = {
    value: MsgRegisterCounterpartyPayee;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
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
type sendQueryPayeeResponseParams = {
    value: QueryPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendFeeParams = {
    value: Fee;
    fee?: StdFee;
    memo?: string;
};
type sendPacketFeeParams = {
    value: PacketFee;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketsRequestParams = {
    value: QueryIncentivizedPacketsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryIncentivizedPacketsResponseParams = {
    value: QueryIncentivizedPacketsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPayeeRequestParams = {
    value: QueryPayeeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCounterpartyPayeeResponseParams = {
    value: QueryCounterpartyPayeeResponse;
    fee?: StdFee;
    memo?: string;
};
type identifiedPacketFeesParams = {
    value: IdentifiedPacketFees;
};
type msgPayPacketFeeResponseParams = {
    value: MsgPayPacketFeeResponse;
};
type incentivizedAcknowledgementParams = {
    value: IncentivizedAcknowledgement;
};
type registeredPayeeParams = {
    value: RegisteredPayee;
};
type msgRegisterPayeeParams = {
    value: MsgRegisterPayee;
};
type msgPayPacketFeeParams = {
    value: MsgPayPacketFee;
};
type queryIncentivizedPacketRequestParams = {
    value: QueryIncentivizedPacketRequest;
};
type queryFeeEnabledChannelRequestParams = {
    value: QueryFeeEnabledChannelRequest;
};
type queryTotalRecvFeesResponseParams = {
    value: QueryTotalRecvFeesResponse;
};
type queryFeeEnabledChannelResponseParams = {
    value: QueryFeeEnabledChannelResponse;
};
type msgRegisterCounterpartyPayeeResponseParams = {
    value: MsgRegisterCounterpartyPayeeResponse;
};
type queryFeeEnabledChannelsResponseParams = {
    value: QueryFeeEnabledChannelsResponse;
};
type packetFeesParams = {
    value: PacketFees;
};
type msgPayPacketFeeAsyncParams = {
    value: MsgPayPacketFeeAsync;
};
type metadataParams = {
    value: Metadata;
};
type queryTotalRecvFeesRequestParams = {
    value: QueryTotalRecvFeesRequest;
};
type queryTotalTimeoutFeesRequestParams = {
    value: QueryTotalTimeoutFeesRequest;
};
type queryTotalTimeoutFeesResponseParams = {
    value: QueryTotalTimeoutFeesResponse;
};
type queryFeeEnabledChannelsRequestParams = {
    value: QueryFeeEnabledChannelsRequest;
};
type msgPayPacketFeeAsyncResponseParams = {
    value: MsgPayPacketFeeAsyncResponse;
};
type forwardRelayerAddressParams = {
    value: ForwardRelayerAddress;
};
type queryIncentivizedPacketsForChannelResponseParams = {
    value: QueryIncentivizedPacketsForChannelResponse;
};
type queryTotalAckFeesRequestParams = {
    value: QueryTotalAckFeesRequest;
};
type queryTotalAckFeesResponseParams = {
    value: QueryTotalAckFeesResponse;
};
type queryCounterpartyPayeeRequestParams = {
    value: QueryCounterpartyPayeeRequest;
};
type msgRegisterPayeeResponseParams = {
    value: MsgRegisterPayeeResponse;
};
type feeEnabledChannelParams = {
    value: FeeEnabledChannel;
};
type registeredCounterpartyPayeeParams = {
    value: RegisteredCounterpartyPayee;
};
type msgRegisterCounterpartyPayeeParams = {
    value: MsgRegisterCounterpartyPayee;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryIncentivizedPacketResponseParams = {
    value: QueryIncentivizedPacketResponse;
};
type queryIncentivizedPacketsForChannelRequestParams = {
    value: QueryIncentivizedPacketsForChannelRequest;
};
type queryPayeeResponseParams = {
    value: QueryPayeeResponse;
};
type feeParams = {
    value: Fee;
};
type packetFeeParams = {
    value: PacketFee;
};
type queryIncentivizedPacketsRequestParams = {
    value: QueryIncentivizedPacketsRequest;
};
type queryIncentivizedPacketsResponseParams = {
    value: QueryIncentivizedPacketsResponse;
};
type queryPayeeRequestParams = {
    value: QueryPayeeRequest;
};
type queryCounterpartyPayeeResponseParams = {
    value: QueryCounterpartyPayeeResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendIdentifiedPacketFees({ value, fee, memo }: sendIdentifiedPacketFeesParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFeeResponse({ value, fee, memo }: sendMsgPayPacketFeeResponseParams): Promise<DeliverTxResponse>;
    sendIncentivizedAcknowledgement({ value, fee, memo }: sendIncentivizedAcknowledgementParams): Promise<DeliverTxResponse>;
    sendRegisteredPayee({ value, fee, memo }: sendRegisteredPayeeParams): Promise<DeliverTxResponse>;
    sendMsgRegisterPayee({ value, fee, memo }: sendMsgRegisterPayeeParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFee({ value, fee, memo }: sendMsgPayPacketFeeParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketRequest({ value, fee, memo }: sendQueryIncentivizedPacketRequestParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelRequest({ value, fee, memo }: sendQueryFeeEnabledChannelRequestParams): Promise<DeliverTxResponse>;
    sendQueryTotalRecvFeesResponse({ value, fee, memo }: sendQueryTotalRecvFeesResponseParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelResponse({ value, fee, memo }: sendQueryFeeEnabledChannelResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterCounterpartyPayeeResponse({ value, fee, memo }: sendMsgRegisterCounterpartyPayeeResponseParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelsResponse({ value, fee, memo }: sendQueryFeeEnabledChannelsResponseParams): Promise<DeliverTxResponse>;
    sendPacketFees({ value, fee, memo }: sendPacketFeesParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFeeAsync({ value, fee, memo }: sendMsgPayPacketFeeAsyncParams): Promise<DeliverTxResponse>;
    sendMetadata({ value, fee, memo }: sendMetadataParams): Promise<DeliverTxResponse>;
    sendQueryTotalRecvFeesRequest({ value, fee, memo }: sendQueryTotalRecvFeesRequestParams): Promise<DeliverTxResponse>;
    sendQueryTotalTimeoutFeesRequest({ value, fee, memo }: sendQueryTotalTimeoutFeesRequestParams): Promise<DeliverTxResponse>;
    sendQueryTotalTimeoutFeesResponse({ value, fee, memo }: sendQueryTotalTimeoutFeesResponseParams): Promise<DeliverTxResponse>;
    sendQueryFeeEnabledChannelsRequest({ value, fee, memo }: sendQueryFeeEnabledChannelsRequestParams): Promise<DeliverTxResponse>;
    sendMsgPayPacketFeeAsyncResponse({ value, fee, memo }: sendMsgPayPacketFeeAsyncResponseParams): Promise<DeliverTxResponse>;
    sendForwardRelayerAddress({ value, fee, memo }: sendForwardRelayerAddressParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsForChannelResponse({ value, fee, memo }: sendQueryIncentivizedPacketsForChannelResponseParams): Promise<DeliverTxResponse>;
    sendQueryTotalAckFeesRequest({ value, fee, memo }: sendQueryTotalAckFeesRequestParams): Promise<DeliverTxResponse>;
    sendQueryTotalAckFeesResponse({ value, fee, memo }: sendQueryTotalAckFeesResponseParams): Promise<DeliverTxResponse>;
    sendQueryCounterpartyPayeeRequest({ value, fee, memo }: sendQueryCounterpartyPayeeRequestParams): Promise<DeliverTxResponse>;
    sendMsgRegisterPayeeResponse({ value, fee, memo }: sendMsgRegisterPayeeResponseParams): Promise<DeliverTxResponse>;
    sendFeeEnabledChannel({ value, fee, memo }: sendFeeEnabledChannelParams): Promise<DeliverTxResponse>;
    sendRegisteredCounterpartyPayee({ value, fee, memo }: sendRegisteredCounterpartyPayeeParams): Promise<DeliverTxResponse>;
    sendMsgRegisterCounterpartyPayee({ value, fee, memo }: sendMsgRegisterCounterpartyPayeeParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketResponse({ value, fee, memo }: sendQueryIncentivizedPacketResponseParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsForChannelRequest({ value, fee, memo }: sendQueryIncentivizedPacketsForChannelRequestParams): Promise<DeliverTxResponse>;
    sendQueryPayeeResponse({ value, fee, memo }: sendQueryPayeeResponseParams): Promise<DeliverTxResponse>;
    sendFee({ value, fee, memo }: sendFeeParams): Promise<DeliverTxResponse>;
    sendPacketFee({ value, fee, memo }: sendPacketFeeParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsRequest({ value, fee, memo }: sendQueryIncentivizedPacketsRequestParams): Promise<DeliverTxResponse>;
    sendQueryIncentivizedPacketsResponse({ value, fee, memo }: sendQueryIncentivizedPacketsResponseParams): Promise<DeliverTxResponse>;
    sendQueryPayeeRequest({ value, fee, memo }: sendQueryPayeeRequestParams): Promise<DeliverTxResponse>;
    sendQueryCounterpartyPayeeResponse({ value, fee, memo }: sendQueryCounterpartyPayeeResponseParams): Promise<DeliverTxResponse>;
    identifiedPacketFees({ value }: identifiedPacketFeesParams): EncodeObject;
    msgPayPacketFeeResponse({ value }: msgPayPacketFeeResponseParams): EncodeObject;
    incentivizedAcknowledgement({ value }: incentivizedAcknowledgementParams): EncodeObject;
    registeredPayee({ value }: registeredPayeeParams): EncodeObject;
    msgRegisterPayee({ value }: msgRegisterPayeeParams): EncodeObject;
    msgPayPacketFee({ value }: msgPayPacketFeeParams): EncodeObject;
    queryIncentivizedPacketRequest({ value }: queryIncentivizedPacketRequestParams): EncodeObject;
    queryFeeEnabledChannelRequest({ value }: queryFeeEnabledChannelRequestParams): EncodeObject;
    queryTotalRecvFeesResponse({ value }: queryTotalRecvFeesResponseParams): EncodeObject;
    queryFeeEnabledChannelResponse({ value }: queryFeeEnabledChannelResponseParams): EncodeObject;
    msgRegisterCounterpartyPayeeResponse({ value }: msgRegisterCounterpartyPayeeResponseParams): EncodeObject;
    queryFeeEnabledChannelsResponse({ value }: queryFeeEnabledChannelsResponseParams): EncodeObject;
    packetFees({ value }: packetFeesParams): EncodeObject;
    msgPayPacketFeeAsync({ value }: msgPayPacketFeeAsyncParams): EncodeObject;
    metadata({ value }: metadataParams): EncodeObject;
    queryTotalRecvFeesRequest({ value }: queryTotalRecvFeesRequestParams): EncodeObject;
    queryTotalTimeoutFeesRequest({ value }: queryTotalTimeoutFeesRequestParams): EncodeObject;
    queryTotalTimeoutFeesResponse({ value }: queryTotalTimeoutFeesResponseParams): EncodeObject;
    queryFeeEnabledChannelsRequest({ value }: queryFeeEnabledChannelsRequestParams): EncodeObject;
    msgPayPacketFeeAsyncResponse({ value }: msgPayPacketFeeAsyncResponseParams): EncodeObject;
    forwardRelayerAddress({ value }: forwardRelayerAddressParams): EncodeObject;
    queryIncentivizedPacketsForChannelResponse({ value }: queryIncentivizedPacketsForChannelResponseParams): EncodeObject;
    queryTotalAckFeesRequest({ value }: queryTotalAckFeesRequestParams): EncodeObject;
    queryTotalAckFeesResponse({ value }: queryTotalAckFeesResponseParams): EncodeObject;
    queryCounterpartyPayeeRequest({ value }: queryCounterpartyPayeeRequestParams): EncodeObject;
    msgRegisterPayeeResponse({ value }: msgRegisterPayeeResponseParams): EncodeObject;
    feeEnabledChannel({ value }: feeEnabledChannelParams): EncodeObject;
    registeredCounterpartyPayee({ value }: registeredCounterpartyPayeeParams): EncodeObject;
    msgRegisterCounterpartyPayee({ value }: msgRegisterCounterpartyPayeeParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryIncentivizedPacketResponse({ value }: queryIncentivizedPacketResponseParams): EncodeObject;
    queryIncentivizedPacketsForChannelRequest({ value }: queryIncentivizedPacketsForChannelRequestParams): EncodeObject;
    queryPayeeResponse({ value }: queryPayeeResponseParams): EncodeObject;
    fee({ value }: feeParams): EncodeObject;
    packetFee({ value }: packetFeeParams): EncodeObject;
    queryIncentivizedPacketsRequest({ value }: queryIncentivizedPacketsRequestParams): EncodeObject;
    queryIncentivizedPacketsResponse({ value }: queryIncentivizedPacketsResponseParams): EncodeObject;
    queryPayeeRequest({ value }: queryPayeeRequestParams): EncodeObject;
    queryCounterpartyPayeeResponse({ value }: queryCounterpartyPayeeResponseParams): EncodeObject;
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
