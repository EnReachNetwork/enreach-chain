import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgVerifyInvariant } from "./types/cosmos/crisis/v1beta1/tx";
import { GenesisState } from "./types/cosmos/crisis/v1beta1/genesis";
import { MsgVerifyInvariantResponse } from "./types/cosmos/crisis/v1beta1/tx";
import { MsgUpdateParams } from "./types/cosmos/crisis/v1beta1/tx";
import { MsgUpdateParamsResponse } from "./types/cosmos/crisis/v1beta1/tx";
export { MsgVerifyInvariant, GenesisState, MsgVerifyInvariantResponse, MsgUpdateParams, MsgUpdateParamsResponse };
type sendMsgVerifyInvariantParams = {
    value: MsgVerifyInvariant;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVerifyInvariantResponseParams = {
    value: MsgVerifyInvariantResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type msgVerifyInvariantParams = {
    value: MsgVerifyInvariant;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgVerifyInvariantResponseParams = {
    value: MsgVerifyInvariantResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgVerifyInvariant({ value, fee, memo }: sendMsgVerifyInvariantParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgVerifyInvariantResponse({ value, fee, memo }: sendMsgVerifyInvariantResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    msgVerifyInvariant({ value }: msgVerifyInvariantParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgVerifyInvariantResponse({ value }: msgVerifyInvariantResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
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
        CosmosCrisisV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
