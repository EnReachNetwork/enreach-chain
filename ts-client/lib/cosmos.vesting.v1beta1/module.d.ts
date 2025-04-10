import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgCreatePermanentLockedAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { PermanentLockedAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { PeriodicVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { DelayedVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { MsgCreateVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreateVestingAccountResponse } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreatePermanentLockedAccountResponse } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreatePeriodicVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { Period } from "./types/cosmos/vesting/v1beta1/vesting";
import { BaseVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { ContinuousVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { MsgCreatePeriodicVestingAccountResponse } from "./types/cosmos/vesting/v1beta1/tx";
export { MsgCreatePermanentLockedAccount, PermanentLockedAccount, PeriodicVestingAccount, DelayedVestingAccount, MsgCreateVestingAccount, MsgCreateVestingAccountResponse, MsgCreatePermanentLockedAccountResponse, MsgCreatePeriodicVestingAccount, Period, BaseVestingAccount, ContinuousVestingAccount, MsgCreatePeriodicVestingAccountResponse };
type sendMsgCreatePermanentLockedAccountParams = {
    value: MsgCreatePermanentLockedAccount;
    fee?: StdFee;
    memo?: string;
};
type sendPermanentLockedAccountParams = {
    value: PermanentLockedAccount;
    fee?: StdFee;
    memo?: string;
};
type sendPeriodicVestingAccountParams = {
    value: PeriodicVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendDelayedVestingAccountParams = {
    value: DelayedVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateVestingAccountParams = {
    value: MsgCreateVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateVestingAccountResponseParams = {
    value: MsgCreateVestingAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePermanentLockedAccountResponseParams = {
    value: MsgCreatePermanentLockedAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePeriodicVestingAccountParams = {
    value: MsgCreatePeriodicVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendPeriodParams = {
    value: Period;
    fee?: StdFee;
    memo?: string;
};
type sendBaseVestingAccountParams = {
    value: BaseVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendContinuousVestingAccountParams = {
    value: ContinuousVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePeriodicVestingAccountResponseParams = {
    value: MsgCreatePeriodicVestingAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type msgCreatePermanentLockedAccountParams = {
    value: MsgCreatePermanentLockedAccount;
};
type permanentLockedAccountParams = {
    value: PermanentLockedAccount;
};
type periodicVestingAccountParams = {
    value: PeriodicVestingAccount;
};
type delayedVestingAccountParams = {
    value: DelayedVestingAccount;
};
type msgCreateVestingAccountParams = {
    value: MsgCreateVestingAccount;
};
type msgCreateVestingAccountResponseParams = {
    value: MsgCreateVestingAccountResponse;
};
type msgCreatePermanentLockedAccountResponseParams = {
    value: MsgCreatePermanentLockedAccountResponse;
};
type msgCreatePeriodicVestingAccountParams = {
    value: MsgCreatePeriodicVestingAccount;
};
type periodParams = {
    value: Period;
};
type baseVestingAccountParams = {
    value: BaseVestingAccount;
};
type continuousVestingAccountParams = {
    value: ContinuousVestingAccount;
};
type msgCreatePeriodicVestingAccountResponseParams = {
    value: MsgCreatePeriodicVestingAccountResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgCreatePermanentLockedAccount({ value, fee, memo }: sendMsgCreatePermanentLockedAccountParams): Promise<DeliverTxResponse>;
    sendPermanentLockedAccount({ value, fee, memo }: sendPermanentLockedAccountParams): Promise<DeliverTxResponse>;
    sendPeriodicVestingAccount({ value, fee, memo }: sendPeriodicVestingAccountParams): Promise<DeliverTxResponse>;
    sendDelayedVestingAccount({ value, fee, memo }: sendDelayedVestingAccountParams): Promise<DeliverTxResponse>;
    sendMsgCreateVestingAccount({ value, fee, memo }: sendMsgCreateVestingAccountParams): Promise<DeliverTxResponse>;
    sendMsgCreateVestingAccountResponse({ value, fee, memo }: sendMsgCreateVestingAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreatePermanentLockedAccountResponse({ value, fee, memo }: sendMsgCreatePermanentLockedAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreatePeriodicVestingAccount({ value, fee, memo }: sendMsgCreatePeriodicVestingAccountParams): Promise<DeliverTxResponse>;
    sendPeriod({ value, fee, memo }: sendPeriodParams): Promise<DeliverTxResponse>;
    sendBaseVestingAccount({ value, fee, memo }: sendBaseVestingAccountParams): Promise<DeliverTxResponse>;
    sendContinuousVestingAccount({ value, fee, memo }: sendContinuousVestingAccountParams): Promise<DeliverTxResponse>;
    sendMsgCreatePeriodicVestingAccountResponse({ value, fee, memo }: sendMsgCreatePeriodicVestingAccountResponseParams): Promise<DeliverTxResponse>;
    msgCreatePermanentLockedAccount({ value }: msgCreatePermanentLockedAccountParams): EncodeObject;
    permanentLockedAccount({ value }: permanentLockedAccountParams): EncodeObject;
    periodicVestingAccount({ value }: periodicVestingAccountParams): EncodeObject;
    delayedVestingAccount({ value }: delayedVestingAccountParams): EncodeObject;
    msgCreateVestingAccount({ value }: msgCreateVestingAccountParams): EncodeObject;
    msgCreateVestingAccountResponse({ value }: msgCreateVestingAccountResponseParams): EncodeObject;
    msgCreatePermanentLockedAccountResponse({ value }: msgCreatePermanentLockedAccountResponseParams): EncodeObject;
    msgCreatePeriodicVestingAccount({ value }: msgCreatePeriodicVestingAccountParams): EncodeObject;
    period({ value }: periodParams): EncodeObject;
    baseVestingAccount({ value }: baseVestingAccountParams): EncodeObject;
    continuousVestingAccount({ value }: continuousVestingAccountParams): EncodeObject;
    msgCreatePeriodicVestingAccountResponse({ value }: msgCreatePeriodicVestingAccountResponseParams): EncodeObject;
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
        CosmosVestingV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
