import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { BaseVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { MsgCreateVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreateVestingAccountResponse } from "./types/cosmos/vesting/v1beta1/tx";
import { Period } from "./types/cosmos/vesting/v1beta1/vesting";
import { PeriodicVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { PermanentLockedAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { MsgCreatePeriodicVestingAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreatePeriodicVestingAccountResponse } from "./types/cosmos/vesting/v1beta1/tx";
import { ContinuousVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { DelayedVestingAccount } from "./types/cosmos/vesting/v1beta1/vesting";
import { MsgCreatePermanentLockedAccount } from "./types/cosmos/vesting/v1beta1/tx";
import { MsgCreatePermanentLockedAccountResponse } from "./types/cosmos/vesting/v1beta1/tx";
export { BaseVestingAccount, MsgCreateVestingAccount, MsgCreateVestingAccountResponse, Period, PeriodicVestingAccount, PermanentLockedAccount, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountResponse, ContinuousVestingAccount, DelayedVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountResponse };
type sendBaseVestingAccountParams = {
    value: BaseVestingAccount;
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
type sendPeriodParams = {
    value: Period;
    fee?: StdFee;
    memo?: string;
};
type sendPeriodicVestingAccountParams = {
    value: PeriodicVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendPermanentLockedAccountParams = {
    value: PermanentLockedAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePeriodicVestingAccountParams = {
    value: MsgCreatePeriodicVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePeriodicVestingAccountResponseParams = {
    value: MsgCreatePeriodicVestingAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendContinuousVestingAccountParams = {
    value: ContinuousVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendDelayedVestingAccountParams = {
    value: DelayedVestingAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePermanentLockedAccountParams = {
    value: MsgCreatePermanentLockedAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePermanentLockedAccountResponseParams = {
    value: MsgCreatePermanentLockedAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type baseVestingAccountParams = {
    value: BaseVestingAccount;
};
type msgCreateVestingAccountParams = {
    value: MsgCreateVestingAccount;
};
type msgCreateVestingAccountResponseParams = {
    value: MsgCreateVestingAccountResponse;
};
type periodParams = {
    value: Period;
};
type periodicVestingAccountParams = {
    value: PeriodicVestingAccount;
};
type permanentLockedAccountParams = {
    value: PermanentLockedAccount;
};
type msgCreatePeriodicVestingAccountParams = {
    value: MsgCreatePeriodicVestingAccount;
};
type msgCreatePeriodicVestingAccountResponseParams = {
    value: MsgCreatePeriodicVestingAccountResponse;
};
type continuousVestingAccountParams = {
    value: ContinuousVestingAccount;
};
type delayedVestingAccountParams = {
    value: DelayedVestingAccount;
};
type msgCreatePermanentLockedAccountParams = {
    value: MsgCreatePermanentLockedAccount;
};
type msgCreatePermanentLockedAccountResponseParams = {
    value: MsgCreatePermanentLockedAccountResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendBaseVestingAccount({ value, fee, memo }: sendBaseVestingAccountParams): Promise<DeliverTxResponse>;
    sendMsgCreateVestingAccount({ value, fee, memo }: sendMsgCreateVestingAccountParams): Promise<DeliverTxResponse>;
    sendMsgCreateVestingAccountResponse({ value, fee, memo }: sendMsgCreateVestingAccountResponseParams): Promise<DeliverTxResponse>;
    sendPeriod({ value, fee, memo }: sendPeriodParams): Promise<DeliverTxResponse>;
    sendPeriodicVestingAccount({ value, fee, memo }: sendPeriodicVestingAccountParams): Promise<DeliverTxResponse>;
    sendPermanentLockedAccount({ value, fee, memo }: sendPermanentLockedAccountParams): Promise<DeliverTxResponse>;
    sendMsgCreatePeriodicVestingAccount({ value, fee, memo }: sendMsgCreatePeriodicVestingAccountParams): Promise<DeliverTxResponse>;
    sendMsgCreatePeriodicVestingAccountResponse({ value, fee, memo }: sendMsgCreatePeriodicVestingAccountResponseParams): Promise<DeliverTxResponse>;
    sendContinuousVestingAccount({ value, fee, memo }: sendContinuousVestingAccountParams): Promise<DeliverTxResponse>;
    sendDelayedVestingAccount({ value, fee, memo }: sendDelayedVestingAccountParams): Promise<DeliverTxResponse>;
    sendMsgCreatePermanentLockedAccount({ value, fee, memo }: sendMsgCreatePermanentLockedAccountParams): Promise<DeliverTxResponse>;
    sendMsgCreatePermanentLockedAccountResponse({ value, fee, memo }: sendMsgCreatePermanentLockedAccountResponseParams): Promise<DeliverTxResponse>;
    baseVestingAccount({ value }: baseVestingAccountParams): EncodeObject;
    msgCreateVestingAccount({ value }: msgCreateVestingAccountParams): EncodeObject;
    msgCreateVestingAccountResponse({ value }: msgCreateVestingAccountResponseParams): EncodeObject;
    period({ value }: periodParams): EncodeObject;
    periodicVestingAccount({ value }: periodicVestingAccountParams): EncodeObject;
    permanentLockedAccount({ value }: permanentLockedAccountParams): EncodeObject;
    msgCreatePeriodicVestingAccount({ value }: msgCreatePeriodicVestingAccountParams): EncodeObject;
    msgCreatePeriodicVestingAccountResponse({ value }: msgCreatePeriodicVestingAccountResponseParams): EncodeObject;
    continuousVestingAccount({ value }: continuousVestingAccountParams): EncodeObject;
    delayedVestingAccount({ value }: delayedVestingAccountParams): EncodeObject;
    msgCreatePermanentLockedAccount({ value }: msgCreatePermanentLockedAccountParams): EncodeObject;
    msgCreatePermanentLockedAccountResponse({ value }: msgCreatePermanentLockedAccountResponseParams): EncodeObject;
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
