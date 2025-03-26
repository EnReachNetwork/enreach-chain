import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { BroadcastTxResponse } from "./types/cosmos/tx/v1beta1/service";
import { TxDecodeRequest } from "./types/cosmos/tx/v1beta1/service";
import { TxDecodeResponse } from "./types/cosmos/tx/v1beta1/service";
import { SignDocDirectAux } from "./types/cosmos/tx/v1beta1/tx";
import { TxBody } from "./types/cosmos/tx/v1beta1/tx";
import { BroadcastTxRequest } from "./types/cosmos/tx/v1beta1/service";
import { GetTxResponse } from "./types/cosmos/tx/v1beta1/service";
import { TxRaw } from "./types/cosmos/tx/v1beta1/tx";
import { ModeInfo_Single } from "./types/cosmos/tx/v1beta1/tx";
import { AuxSignerData } from "./types/cosmos/tx/v1beta1/tx";
import { GetBlockWithTxsRequest } from "./types/cosmos/tx/v1beta1/service";
import { TxEncodeAminoRequest } from "./types/cosmos/tx/v1beta1/service";
import { Tx } from "./types/cosmos/tx/v1beta1/tx";
import { Fee } from "./types/cosmos/tx/v1beta1/tx";
import { GetTxRequest } from "./types/cosmos/tx/v1beta1/service";
import { ModeInfo_Multi } from "./types/cosmos/tx/v1beta1/tx";
import { TxEncodeAminoResponse } from "./types/cosmos/tx/v1beta1/service";
import { SimulateResponse } from "./types/cosmos/tx/v1beta1/service";
import { TxEncodeRequest } from "./types/cosmos/tx/v1beta1/service";
import { SignDoc } from "./types/cosmos/tx/v1beta1/tx";
import { GetTxsEventResponse } from "./types/cosmos/tx/v1beta1/service";
import { SimulateRequest } from "./types/cosmos/tx/v1beta1/service";
import { GetBlockWithTxsResponse } from "./types/cosmos/tx/v1beta1/service";
import { TxEncodeResponse } from "./types/cosmos/tx/v1beta1/service";
import { AuthInfo } from "./types/cosmos/tx/v1beta1/tx";
import { Tip } from "./types/cosmos/tx/v1beta1/tx";
import { GetTxsEventRequest } from "./types/cosmos/tx/v1beta1/service";
import { TxDecodeAminoResponse } from "./types/cosmos/tx/v1beta1/service";
import { SignerInfo } from "./types/cosmos/tx/v1beta1/tx";
import { ModeInfo } from "./types/cosmos/tx/v1beta1/tx";
import { TxDecodeAminoRequest } from "./types/cosmos/tx/v1beta1/service";
export { BroadcastTxResponse, TxDecodeRequest, TxDecodeResponse, SignDocDirectAux, TxBody, BroadcastTxRequest, GetTxResponse, TxRaw, ModeInfo_Single, AuxSignerData, GetBlockWithTxsRequest, TxEncodeAminoRequest, Tx, Fee, GetTxRequest, ModeInfo_Multi, TxEncodeAminoResponse, SimulateResponse, TxEncodeRequest, SignDoc, GetTxsEventResponse, SimulateRequest, GetBlockWithTxsResponse, TxEncodeResponse, AuthInfo, Tip, GetTxsEventRequest, TxDecodeAminoResponse, SignerInfo, ModeInfo, TxDecodeAminoRequest };
type sendBroadcastTxResponseParams = {
    value: BroadcastTxResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTxDecodeRequestParams = {
    value: TxDecodeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendTxDecodeResponseParams = {
    value: TxDecodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSignDocDirectAuxParams = {
    value: SignDocDirectAux;
    fee?: StdFee;
    memo?: string;
};
type sendTxBodyParams = {
    value: TxBody;
    fee?: StdFee;
    memo?: string;
};
type sendBroadcastTxRequestParams = {
    value: BroadcastTxRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGetTxResponseParams = {
    value: GetTxResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTxRawParams = {
    value: TxRaw;
    fee?: StdFee;
    memo?: string;
};
type sendModeInfo_SingleParams = {
    value: ModeInfo_Single;
    fee?: StdFee;
    memo?: string;
};
type sendAuxSignerDataParams = {
    value: AuxSignerData;
    fee?: StdFee;
    memo?: string;
};
type sendGetBlockWithTxsRequestParams = {
    value: GetBlockWithTxsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendTxEncodeAminoRequestParams = {
    value: TxEncodeAminoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendTxParams = {
    value: Tx;
    fee?: StdFee;
    memo?: string;
};
type sendFeeParams = {
    value: Fee;
    fee?: StdFee;
    memo?: string;
};
type sendGetTxRequestParams = {
    value: GetTxRequest;
    fee?: StdFee;
    memo?: string;
};
type sendModeInfo_MultiParams = {
    value: ModeInfo_Multi;
    fee?: StdFee;
    memo?: string;
};
type sendTxEncodeAminoResponseParams = {
    value: TxEncodeAminoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSimulateResponseParams = {
    value: SimulateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTxEncodeRequestParams = {
    value: TxEncodeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendSignDocParams = {
    value: SignDoc;
    fee?: StdFee;
    memo?: string;
};
type sendGetTxsEventResponseParams = {
    value: GetTxsEventResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSimulateRequestParams = {
    value: SimulateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGetBlockWithTxsResponseParams = {
    value: GetBlockWithTxsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTxEncodeResponseParams = {
    value: TxEncodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendAuthInfoParams = {
    value: AuthInfo;
    fee?: StdFee;
    memo?: string;
};
type sendTipParams = {
    value: Tip;
    fee?: StdFee;
    memo?: string;
};
type sendGetTxsEventRequestParams = {
    value: GetTxsEventRequest;
    fee?: StdFee;
    memo?: string;
};
type sendTxDecodeAminoResponseParams = {
    value: TxDecodeAminoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSignerInfoParams = {
    value: SignerInfo;
    fee?: StdFee;
    memo?: string;
};
type sendModeInfoParams = {
    value: ModeInfo;
    fee?: StdFee;
    memo?: string;
};
type sendTxDecodeAminoRequestParams = {
    value: TxDecodeAminoRequest;
    fee?: StdFee;
    memo?: string;
};
type broadcastTxResponseParams = {
    value: BroadcastTxResponse;
};
type txDecodeRequestParams = {
    value: TxDecodeRequest;
};
type txDecodeResponseParams = {
    value: TxDecodeResponse;
};
type signDocDirectAuxParams = {
    value: SignDocDirectAux;
};
type txBodyParams = {
    value: TxBody;
};
type broadcastTxRequestParams = {
    value: BroadcastTxRequest;
};
type getTxResponseParams = {
    value: GetTxResponse;
};
type txRawParams = {
    value: TxRaw;
};
type modeInfoSingleParams = {
    value: ModeInfo_Single;
};
type auxSignerDataParams = {
    value: AuxSignerData;
};
type getBlockWithTxsRequestParams = {
    value: GetBlockWithTxsRequest;
};
type txEncodeAminoRequestParams = {
    value: TxEncodeAminoRequest;
};
type txParams = {
    value: Tx;
};
type feeParams = {
    value: Fee;
};
type getTxRequestParams = {
    value: GetTxRequest;
};
type modeInfoMultiParams = {
    value: ModeInfo_Multi;
};
type txEncodeAminoResponseParams = {
    value: TxEncodeAminoResponse;
};
type simulateResponseParams = {
    value: SimulateResponse;
};
type txEncodeRequestParams = {
    value: TxEncodeRequest;
};
type signDocParams = {
    value: SignDoc;
};
type getTxsEventResponseParams = {
    value: GetTxsEventResponse;
};
type simulateRequestParams = {
    value: SimulateRequest;
};
type getBlockWithTxsResponseParams = {
    value: GetBlockWithTxsResponse;
};
type txEncodeResponseParams = {
    value: TxEncodeResponse;
};
type authInfoParams = {
    value: AuthInfo;
};
type tipParams = {
    value: Tip;
};
type getTxsEventRequestParams = {
    value: GetTxsEventRequest;
};
type txDecodeAminoResponseParams = {
    value: TxDecodeAminoResponse;
};
type signerInfoParams = {
    value: SignerInfo;
};
type modeInfoParams = {
    value: ModeInfo;
};
type txDecodeAminoRequestParams = {
    value: TxDecodeAminoRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendBroadcastTxResponse({ value, fee, memo }: sendBroadcastTxResponseParams): Promise<DeliverTxResponse>;
    sendTxDecodeRequest({ value, fee, memo }: sendTxDecodeRequestParams): Promise<DeliverTxResponse>;
    sendTxDecodeResponse({ value, fee, memo }: sendTxDecodeResponseParams): Promise<DeliverTxResponse>;
    sendSignDocDirectAux({ value, fee, memo }: sendSignDocDirectAuxParams): Promise<DeliverTxResponse>;
    sendTxBody({ value, fee, memo }: sendTxBodyParams): Promise<DeliverTxResponse>;
    sendBroadcastTxRequest({ value, fee, memo }: sendBroadcastTxRequestParams): Promise<DeliverTxResponse>;
    sendGetTxResponse({ value, fee, memo }: sendGetTxResponseParams): Promise<DeliverTxResponse>;
    sendTxRaw({ value, fee, memo }: sendTxRawParams): Promise<DeliverTxResponse>;
    sendModeInfo_Single({ value, fee, memo }: sendModeInfo_SingleParams): Promise<DeliverTxResponse>;
    sendAuxSignerData({ value, fee, memo }: sendAuxSignerDataParams): Promise<DeliverTxResponse>;
    sendGetBlockWithTxsRequest({ value, fee, memo }: sendGetBlockWithTxsRequestParams): Promise<DeliverTxResponse>;
    sendTxEncodeAminoRequest({ value, fee, memo }: sendTxEncodeAminoRequestParams): Promise<DeliverTxResponse>;
    sendTx({ value, fee, memo }: sendTxParams): Promise<DeliverTxResponse>;
    sendFee({ value, fee, memo }: sendFeeParams): Promise<DeliverTxResponse>;
    sendGetTxRequest({ value, fee, memo }: sendGetTxRequestParams): Promise<DeliverTxResponse>;
    sendModeInfo_Multi({ value, fee, memo }: sendModeInfo_MultiParams): Promise<DeliverTxResponse>;
    sendTxEncodeAminoResponse({ value, fee, memo }: sendTxEncodeAminoResponseParams): Promise<DeliverTxResponse>;
    sendSimulateResponse({ value, fee, memo }: sendSimulateResponseParams): Promise<DeliverTxResponse>;
    sendTxEncodeRequest({ value, fee, memo }: sendTxEncodeRequestParams): Promise<DeliverTxResponse>;
    sendSignDoc({ value, fee, memo }: sendSignDocParams): Promise<DeliverTxResponse>;
    sendGetTxsEventResponse({ value, fee, memo }: sendGetTxsEventResponseParams): Promise<DeliverTxResponse>;
    sendSimulateRequest({ value, fee, memo }: sendSimulateRequestParams): Promise<DeliverTxResponse>;
    sendGetBlockWithTxsResponse({ value, fee, memo }: sendGetBlockWithTxsResponseParams): Promise<DeliverTxResponse>;
    sendTxEncodeResponse({ value, fee, memo }: sendTxEncodeResponseParams): Promise<DeliverTxResponse>;
    sendAuthInfo({ value, fee, memo }: sendAuthInfoParams): Promise<DeliverTxResponse>;
    sendTip({ value, fee, memo }: sendTipParams): Promise<DeliverTxResponse>;
    sendGetTxsEventRequest({ value, fee, memo }: sendGetTxsEventRequestParams): Promise<DeliverTxResponse>;
    sendTxDecodeAminoResponse({ value, fee, memo }: sendTxDecodeAminoResponseParams): Promise<DeliverTxResponse>;
    sendSignerInfo({ value, fee, memo }: sendSignerInfoParams): Promise<DeliverTxResponse>;
    sendModeInfo({ value, fee, memo }: sendModeInfoParams): Promise<DeliverTxResponse>;
    sendTxDecodeAminoRequest({ value, fee, memo }: sendTxDecodeAminoRequestParams): Promise<DeliverTxResponse>;
    broadcastTxResponse({ value }: broadcastTxResponseParams): EncodeObject;
    txDecodeRequest({ value }: txDecodeRequestParams): EncodeObject;
    txDecodeResponse({ value }: txDecodeResponseParams): EncodeObject;
    signDocDirectAux({ value }: signDocDirectAuxParams): EncodeObject;
    txBody({ value }: txBodyParams): EncodeObject;
    broadcastTxRequest({ value }: broadcastTxRequestParams): EncodeObject;
    getTxResponse({ value }: getTxResponseParams): EncodeObject;
    txRaw({ value }: txRawParams): EncodeObject;
    modeInfoSingle({ value }: modeInfoSingleParams): EncodeObject;
    auxSignerData({ value }: auxSignerDataParams): EncodeObject;
    getBlockWithTxsRequest({ value }: getBlockWithTxsRequestParams): EncodeObject;
    txEncodeAminoRequest({ value }: txEncodeAminoRequestParams): EncodeObject;
    tx({ value }: txParams): EncodeObject;
    fee({ value }: feeParams): EncodeObject;
    getTxRequest({ value }: getTxRequestParams): EncodeObject;
    modeInfoMulti({ value }: modeInfoMultiParams): EncodeObject;
    txEncodeAminoResponse({ value }: txEncodeAminoResponseParams): EncodeObject;
    simulateResponse({ value }: simulateResponseParams): EncodeObject;
    txEncodeRequest({ value }: txEncodeRequestParams): EncodeObject;
    signDoc({ value }: signDocParams): EncodeObject;
    getTxsEventResponse({ value }: getTxsEventResponseParams): EncodeObject;
    simulateRequest({ value }: simulateRequestParams): EncodeObject;
    getBlockWithTxsResponse({ value }: getBlockWithTxsResponseParams): EncodeObject;
    txEncodeResponse({ value }: txEncodeResponseParams): EncodeObject;
    authInfo({ value }: authInfoParams): EncodeObject;
    tip({ value }: tipParams): EncodeObject;
    getTxsEventRequest({ value }: getTxsEventRequestParams): EncodeObject;
    txDecodeAminoResponse({ value }: txDecodeAminoResponseParams): EncodeObject;
    signerInfo({ value }: signerInfoParams): EncodeObject;
    modeInfo({ value }: modeInfoParams): EncodeObject;
    txDecodeAminoRequest({ value }: txDecodeAminoRequestParams): EncodeObject;
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
        CosmosTxV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
