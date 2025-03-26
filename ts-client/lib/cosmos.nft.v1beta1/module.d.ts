import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryClassesRequest } from "./types/cosmos/nft/v1beta1/query";
import { QuerySupplyRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassRequest } from "./types/cosmos/nft/v1beta1/query";
import { EventSend } from "./types/cosmos/nft/v1beta1/event";
import { EventMint } from "./types/cosmos/nft/v1beta1/event";
import { QueryNFTRequest } from "./types/cosmos/nft/v1beta1/query";
import { MsgSendResponse } from "./types/cosmos/nft/v1beta1/tx";
import { Class } from "./types/cosmos/nft/v1beta1/nft";
import { QuerySupplyResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryBalanceResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassesResponse } from "./types/cosmos/nft/v1beta1/query";
import { MsgSend } from "./types/cosmos/nft/v1beta1/tx";
import { EventBurn } from "./types/cosmos/nft/v1beta1/event";
import { GenesisState } from "./types/cosmos/nft/v1beta1/genesis";
import { QueryNFTResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryNFTsRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryNFTsResponse } from "./types/cosmos/nft/v1beta1/query";
import { Entry } from "./types/cosmos/nft/v1beta1/genesis";
import { QueryOwnerRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryOwnerResponse } from "./types/cosmos/nft/v1beta1/query";
import { NFT } from "./types/cosmos/nft/v1beta1/nft";
import { QueryBalanceRequest } from "./types/cosmos/nft/v1beta1/query";
export { QueryClassesRequest, QuerySupplyRequest, QueryClassRequest, EventSend, EventMint, QueryNFTRequest, MsgSendResponse, Class, QuerySupplyResponse, QueryBalanceResponse, QueryClassesResponse, MsgSend, EventBurn, GenesisState, QueryNFTResponse, QueryClassResponse, QueryNFTsRequest, QueryNFTsResponse, Entry, QueryOwnerRequest, QueryOwnerResponse, NFT, QueryBalanceRequest };
type sendQueryClassesRequestParams = {
    value: QueryClassesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyRequestParams = {
    value: QuerySupplyRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassRequestParams = {
    value: QueryClassRequest;
    fee?: StdFee;
    memo?: string;
};
type sendEventSendParams = {
    value: EventSend;
    fee?: StdFee;
    memo?: string;
};
type sendEventMintParams = {
    value: EventMint;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTRequestParams = {
    value: QueryNFTRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendResponseParams = {
    value: MsgSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendClassParams = {
    value: Class;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyResponseParams = {
    value: QuerySupplyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceResponseParams = {
    value: QueryBalanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassesResponseParams = {
    value: QueryClassesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendParams = {
    value: MsgSend;
    fee?: StdFee;
    memo?: string;
};
type sendEventBurnParams = {
    value: EventBurn;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTResponseParams = {
    value: QueryNFTResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassResponseParams = {
    value: QueryClassResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTsRequestParams = {
    value: QueryNFTsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTsResponseParams = {
    value: QueryNFTsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEntryParams = {
    value: Entry;
    fee?: StdFee;
    memo?: string;
};
type sendQueryOwnerRequestParams = {
    value: QueryOwnerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryOwnerResponseParams = {
    value: QueryOwnerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendNFTParams = {
    value: NFT;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceRequestParams = {
    value: QueryBalanceRequest;
    fee?: StdFee;
    memo?: string;
};
type queryClassesRequestParams = {
    value: QueryClassesRequest;
};
type querySupplyRequestParams = {
    value: QuerySupplyRequest;
};
type queryClassRequestParams = {
    value: QueryClassRequest;
};
type eventSendParams = {
    value: EventSend;
};
type eventMintParams = {
    value: EventMint;
};
type queryNftrequestParams = {
    value: QueryNFTRequest;
};
type msgSendResponseParams = {
    value: MsgSendResponse;
};
type classParams = {
    value: Class;
};
type querySupplyResponseParams = {
    value: QuerySupplyResponse;
};
type queryBalanceResponseParams = {
    value: QueryBalanceResponse;
};
type queryClassesResponseParams = {
    value: QueryClassesResponse;
};
type msgSendParams = {
    value: MsgSend;
};
type eventBurnParams = {
    value: EventBurn;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryNftresponseParams = {
    value: QueryNFTResponse;
};
type queryClassResponseParams = {
    value: QueryClassResponse;
};
type queryNftsRequestParams = {
    value: QueryNFTsRequest;
};
type queryNftsResponseParams = {
    value: QueryNFTsResponse;
};
type entryParams = {
    value: Entry;
};
type queryOwnerRequestParams = {
    value: QueryOwnerRequest;
};
type queryOwnerResponseParams = {
    value: QueryOwnerResponse;
};
type nftParams = {
    value: NFT;
};
type queryBalanceRequestParams = {
    value: QueryBalanceRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryClassesRequest({ value, fee, memo }: sendQueryClassesRequestParams): Promise<DeliverTxResponse>;
    sendQuerySupplyRequest({ value, fee, memo }: sendQuerySupplyRequestParams): Promise<DeliverTxResponse>;
    sendQueryClassRequest({ value, fee, memo }: sendQueryClassRequestParams): Promise<DeliverTxResponse>;
    sendEventSend({ value, fee, memo }: sendEventSendParams): Promise<DeliverTxResponse>;
    sendEventMint({ value, fee, memo }: sendEventMintParams): Promise<DeliverTxResponse>;
    sendQueryNFTRequest({ value, fee, memo }: sendQueryNFTRequestParams): Promise<DeliverTxResponse>;
    sendMsgSendResponse({ value, fee, memo }: sendMsgSendResponseParams): Promise<DeliverTxResponse>;
    sendClass({ value, fee, memo }: sendClassParams): Promise<DeliverTxResponse>;
    sendQuerySupplyResponse({ value, fee, memo }: sendQuerySupplyResponseParams): Promise<DeliverTxResponse>;
    sendQueryBalanceResponse({ value, fee, memo }: sendQueryBalanceResponseParams): Promise<DeliverTxResponse>;
    sendQueryClassesResponse({ value, fee, memo }: sendQueryClassesResponseParams): Promise<DeliverTxResponse>;
    sendMsgSend({ value, fee, memo }: sendMsgSendParams): Promise<DeliverTxResponse>;
    sendEventBurn({ value, fee, memo }: sendEventBurnParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryNFTResponse({ value, fee, memo }: sendQueryNFTResponseParams): Promise<DeliverTxResponse>;
    sendQueryClassResponse({ value, fee, memo }: sendQueryClassResponseParams): Promise<DeliverTxResponse>;
    sendQueryNFTsRequest({ value, fee, memo }: sendQueryNFTsRequestParams): Promise<DeliverTxResponse>;
    sendQueryNFTsResponse({ value, fee, memo }: sendQueryNFTsResponseParams): Promise<DeliverTxResponse>;
    sendEntry({ value, fee, memo }: sendEntryParams): Promise<DeliverTxResponse>;
    sendQueryOwnerRequest({ value, fee, memo }: sendQueryOwnerRequestParams): Promise<DeliverTxResponse>;
    sendQueryOwnerResponse({ value, fee, memo }: sendQueryOwnerResponseParams): Promise<DeliverTxResponse>;
    sendNFT({ value, fee, memo }: sendNFTParams): Promise<DeliverTxResponse>;
    sendQueryBalanceRequest({ value, fee, memo }: sendQueryBalanceRequestParams): Promise<DeliverTxResponse>;
    queryClassesRequest({ value }: queryClassesRequestParams): EncodeObject;
    querySupplyRequest({ value }: querySupplyRequestParams): EncodeObject;
    queryClassRequest({ value }: queryClassRequestParams): EncodeObject;
    eventSend({ value }: eventSendParams): EncodeObject;
    eventMint({ value }: eventMintParams): EncodeObject;
    queryNftrequest({ value }: queryNftrequestParams): EncodeObject;
    msgSendResponse({ value }: msgSendResponseParams): EncodeObject;
    class({ value }: classParams): EncodeObject;
    querySupplyResponse({ value }: querySupplyResponseParams): EncodeObject;
    queryBalanceResponse({ value }: queryBalanceResponseParams): EncodeObject;
    queryClassesResponse({ value }: queryClassesResponseParams): EncodeObject;
    msgSend({ value }: msgSendParams): EncodeObject;
    eventBurn({ value }: eventBurnParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryNftresponse({ value }: queryNftresponseParams): EncodeObject;
    queryClassResponse({ value }: queryClassResponseParams): EncodeObject;
    queryNftsRequest({ value }: queryNftsRequestParams): EncodeObject;
    queryNftsResponse({ value }: queryNftsResponseParams): EncodeObject;
    entry({ value }: entryParams): EncodeObject;
    queryOwnerRequest({ value }: queryOwnerRequestParams): EncodeObject;
    queryOwnerResponse({ value }: queryOwnerResponseParams): EncodeObject;
    nft({ value }: nftParams): EncodeObject;
    queryBalanceRequest({ value }: queryBalanceRequestParams): EncodeObject;
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
        CosmosNftV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
