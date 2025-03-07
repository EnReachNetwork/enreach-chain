import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgUpdateMiner } from "./types/enreach/miner/tx";
import { MsgUpdateParamsResponse } from "./types/enreach/miner/tx";
import { Miner } from "./types/enreach/miner/miner";
import { QueryParamsResponse } from "./types/enreach/miner/query";
import { QueryAllMinerRequest } from "./types/enreach/miner/query";
import { GenesisState } from "./types/enreach/miner/genesis";
import { MsgCreateMinerResponse } from "./types/enreach/miner/tx";
import { MsgUpdateMinerResponse } from "./types/enreach/miner/tx";
import { QueryParamsRequest } from "./types/enreach/miner/query";
import { Params } from "./types/enreach/miner/params";
import { MsgCreateMiner } from "./types/enreach/miner/tx";
import { MsgDeleteMiner } from "./types/enreach/miner/tx";
import { MsgDeleteMinerResponse } from "./types/enreach/miner/tx";
import { QueryGetMinerRequest } from "./types/enreach/miner/query";
import { QueryGetMinerResponse } from "./types/enreach/miner/query";
import { MsgUpdateParams } from "./types/enreach/miner/tx";
import { QueryAllMinerResponse } from "./types/enreach/miner/query";
export { MsgUpdateMiner, MsgUpdateParamsResponse, Miner, QueryParamsResponse, QueryAllMinerRequest, GenesisState, MsgCreateMinerResponse, MsgUpdateMinerResponse, QueryParamsRequest, Params, MsgCreateMiner, MsgDeleteMiner, MsgDeleteMinerResponse, QueryGetMinerRequest, QueryGetMinerResponse, MsgUpdateParams, QueryAllMinerResponse };
type sendMsgUpdateMinerParams = {
    value: MsgUpdateMiner;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMinerParams = {
    value: Miner;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllMinerRequestParams = {
    value: QueryAllMinerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateMinerResponseParams = {
    value: MsgCreateMinerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateMinerResponseParams = {
    value: MsgUpdateMinerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateMinerParams = {
    value: MsgCreateMiner;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeleteMinerParams = {
    value: MsgDeleteMiner;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeleteMinerResponseParams = {
    value: MsgDeleteMinerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetMinerRequestParams = {
    value: QueryGetMinerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetMinerResponseParams = {
    value: QueryGetMinerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllMinerResponseParams = {
    value: QueryAllMinerResponse;
    fee?: StdFee;
    memo?: string;
};
type msgUpdateMinerParams = {
    value: MsgUpdateMiner;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type minerParams = {
    value: Miner;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryAllMinerRequestParams = {
    value: QueryAllMinerRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgCreateMinerResponseParams = {
    value: MsgCreateMinerResponse;
};
type msgUpdateMinerResponseParams = {
    value: MsgUpdateMinerResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type paramsParams = {
    value: Params;
};
type msgCreateMinerParams = {
    value: MsgCreateMiner;
};
type msgDeleteMinerParams = {
    value: MsgDeleteMiner;
};
type msgDeleteMinerResponseParams = {
    value: MsgDeleteMinerResponse;
};
type queryGetMinerRequestParams = {
    value: QueryGetMinerRequest;
};
type queryGetMinerResponseParams = {
    value: QueryGetMinerResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryAllMinerResponseParams = {
    value: QueryAllMinerResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgUpdateMiner({ value, fee, memo }: sendMsgUpdateMinerParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMiner({ value, fee, memo }: sendMinerParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllMinerRequest({ value, fee, memo }: sendQueryAllMinerRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgCreateMinerResponse({ value, fee, memo }: sendMsgCreateMinerResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateMinerResponse({ value, fee, memo }: sendMsgUpdateMinerResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgCreateMiner({ value, fee, memo }: sendMsgCreateMinerParams): Promise<DeliverTxResponse>;
    sendMsgDeleteMiner({ value, fee, memo }: sendMsgDeleteMinerParams): Promise<DeliverTxResponse>;
    sendMsgDeleteMinerResponse({ value, fee, memo }: sendMsgDeleteMinerResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetMinerRequest({ value, fee, memo }: sendQueryGetMinerRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetMinerResponse({ value, fee, memo }: sendQueryGetMinerResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryAllMinerResponse({ value, fee, memo }: sendQueryAllMinerResponseParams): Promise<DeliverTxResponse>;
    msgUpdateMiner({ value }: msgUpdateMinerParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    miner({ value }: minerParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryAllMinerRequest({ value }: queryAllMinerRequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgCreateMinerResponse({ value }: msgCreateMinerResponseParams): EncodeObject;
    msgUpdateMinerResponse({ value }: msgUpdateMinerResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgCreateMiner({ value }: msgCreateMinerParams): EncodeObject;
    msgDeleteMiner({ value }: msgDeleteMinerParams): EncodeObject;
    msgDeleteMinerResponse({ value }: msgDeleteMinerResponseParams): EncodeObject;
    queryGetMinerRequest({ value }: queryGetMinerRequestParams): EncodeObject;
    queryGetMinerResponse({ value }: queryGetMinerResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryAllMinerResponse({ value }: queryAllMinerResponseParams): EncodeObject;
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
        EnreachMiner: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
