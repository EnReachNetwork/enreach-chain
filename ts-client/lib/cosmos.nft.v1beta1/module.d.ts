import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { EventBurn } from "./types/cosmos/nft/v1beta1/event";
import { QueryBalanceRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryNFTsResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassResponse } from "./types/cosmos/nft/v1beta1/query";
import { GenesisState } from "./types/cosmos/nft/v1beta1/genesis";
import { NFT } from "./types/cosmos/nft/v1beta1/nft";
import { EventMint } from "./types/cosmos/nft/v1beta1/event";
import { MsgSend } from "./types/cosmos/nft/v1beta1/tx";
import { QuerySupplyResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryNFTsRequest } from "./types/cosmos/nft/v1beta1/query";
import { Class } from "./types/cosmos/nft/v1beta1/nft";
import { Entry } from "./types/cosmos/nft/v1beta1/genesis";
import { QueryClassRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassesResponse } from "./types/cosmos/nft/v1beta1/query";
import { MsgSendResponse } from "./types/cosmos/nft/v1beta1/tx";
import { QueryNFTRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryBalanceResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryNFTResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassesRequest } from "./types/cosmos/nft/v1beta1/query";
import { EventSend } from "./types/cosmos/nft/v1beta1/event";
import { QueryOwnerRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryOwnerResponse } from "./types/cosmos/nft/v1beta1/query";
import { QuerySupplyRequest } from "./types/cosmos/nft/v1beta1/query";
export { EventBurn, QueryBalanceRequest, QueryNFTsResponse, QueryClassResponse, GenesisState, NFT, EventMint, MsgSend, QuerySupplyResponse, QueryNFTsRequest, Class, Entry, QueryClassRequest, QueryClassesResponse, MsgSendResponse, QueryNFTRequest, QueryBalanceResponse, QueryNFTResponse, QueryClassesRequest, EventSend, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest };
type sendEventBurnParams = {
    value: EventBurn;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceRequestParams = {
    value: QueryBalanceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTsResponseParams = {
    value: QueryNFTsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassResponseParams = {
    value: QueryClassResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendNFTParams = {
    value: NFT;
    fee?: StdFee;
    memo?: string;
};
type sendEventMintParams = {
    value: EventMint;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendParams = {
    value: MsgSend;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyResponseParams = {
    value: QuerySupplyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTsRequestParams = {
    value: QueryNFTsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendClassParams = {
    value: Class;
    fee?: StdFee;
    memo?: string;
};
type sendEntryParams = {
    value: Entry;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassRequestParams = {
    value: QueryClassRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassesResponseParams = {
    value: QueryClassesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendResponseParams = {
    value: MsgSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTRequestParams = {
    value: QueryNFTRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceResponseParams = {
    value: QueryBalanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTResponseParams = {
    value: QueryNFTResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassesRequestParams = {
    value: QueryClassesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendEventSendParams = {
    value: EventSend;
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
type sendQuerySupplyRequestParams = {
    value: QuerySupplyRequest;
    fee?: StdFee;
    memo?: string;
};
type eventBurnParams = {
    value: EventBurn;
};
type queryBalanceRequestParams = {
    value: QueryBalanceRequest;
};
type queryNftsResponseParams = {
    value: QueryNFTsResponse;
};
type queryClassResponseParams = {
    value: QueryClassResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type nftParams = {
    value: NFT;
};
type eventMintParams = {
    value: EventMint;
};
type msgSendParams = {
    value: MsgSend;
};
type querySupplyResponseParams = {
    value: QuerySupplyResponse;
};
type queryNftsRequestParams = {
    value: QueryNFTsRequest;
};
type classParams = {
    value: Class;
};
type entryParams = {
    value: Entry;
};
type queryClassRequestParams = {
    value: QueryClassRequest;
};
type queryClassesResponseParams = {
    value: QueryClassesResponse;
};
type msgSendResponseParams = {
    value: MsgSendResponse;
};
type queryNftrequestParams = {
    value: QueryNFTRequest;
};
type queryBalanceResponseParams = {
    value: QueryBalanceResponse;
};
type queryNftresponseParams = {
    value: QueryNFTResponse;
};
type queryClassesRequestParams = {
    value: QueryClassesRequest;
};
type eventSendParams = {
    value: EventSend;
};
type queryOwnerRequestParams = {
    value: QueryOwnerRequest;
};
type queryOwnerResponseParams = {
    value: QueryOwnerResponse;
};
type querySupplyRequestParams = {
    value: QuerySupplyRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendEventBurn({ value, fee, memo }: sendEventBurnParams): Promise<DeliverTxResponse>;
    sendQueryBalanceRequest({ value, fee, memo }: sendQueryBalanceRequestParams): Promise<DeliverTxResponse>;
    sendQueryNFTsResponse({ value, fee, memo }: sendQueryNFTsResponseParams): Promise<DeliverTxResponse>;
    sendQueryClassResponse({ value, fee, memo }: sendQueryClassResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendNFT({ value, fee, memo }: sendNFTParams): Promise<DeliverTxResponse>;
    sendEventMint({ value, fee, memo }: sendEventMintParams): Promise<DeliverTxResponse>;
    sendMsgSend({ value, fee, memo }: sendMsgSendParams): Promise<DeliverTxResponse>;
    sendQuerySupplyResponse({ value, fee, memo }: sendQuerySupplyResponseParams): Promise<DeliverTxResponse>;
    sendQueryNFTsRequest({ value, fee, memo }: sendQueryNFTsRequestParams): Promise<DeliverTxResponse>;
    sendClass({ value, fee, memo }: sendClassParams): Promise<DeliverTxResponse>;
    sendEntry({ value, fee, memo }: sendEntryParams): Promise<DeliverTxResponse>;
    sendQueryClassRequest({ value, fee, memo }: sendQueryClassRequestParams): Promise<DeliverTxResponse>;
    sendQueryClassesResponse({ value, fee, memo }: sendQueryClassesResponseParams): Promise<DeliverTxResponse>;
    sendMsgSendResponse({ value, fee, memo }: sendMsgSendResponseParams): Promise<DeliverTxResponse>;
    sendQueryNFTRequest({ value, fee, memo }: sendQueryNFTRequestParams): Promise<DeliverTxResponse>;
    sendQueryBalanceResponse({ value, fee, memo }: sendQueryBalanceResponseParams): Promise<DeliverTxResponse>;
    sendQueryNFTResponse({ value, fee, memo }: sendQueryNFTResponseParams): Promise<DeliverTxResponse>;
    sendQueryClassesRequest({ value, fee, memo }: sendQueryClassesRequestParams): Promise<DeliverTxResponse>;
    sendEventSend({ value, fee, memo }: sendEventSendParams): Promise<DeliverTxResponse>;
    sendQueryOwnerRequest({ value, fee, memo }: sendQueryOwnerRequestParams): Promise<DeliverTxResponse>;
    sendQueryOwnerResponse({ value, fee, memo }: sendQueryOwnerResponseParams): Promise<DeliverTxResponse>;
    sendQuerySupplyRequest({ value, fee, memo }: sendQuerySupplyRequestParams): Promise<DeliverTxResponse>;
    eventBurn({ value }: eventBurnParams): EncodeObject;
    queryBalanceRequest({ value }: queryBalanceRequestParams): EncodeObject;
    queryNftsResponse({ value }: queryNftsResponseParams): EncodeObject;
    queryClassResponse({ value }: queryClassResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    nft({ value }: nftParams): EncodeObject;
    eventMint({ value }: eventMintParams): EncodeObject;
    msgSend({ value }: msgSendParams): EncodeObject;
    querySupplyResponse({ value }: querySupplyResponseParams): EncodeObject;
    queryNftsRequest({ value }: queryNftsRequestParams): EncodeObject;
    class({ value }: classParams): EncodeObject;
    entry({ value }: entryParams): EncodeObject;
    queryClassRequest({ value }: queryClassRequestParams): EncodeObject;
    queryClassesResponse({ value }: queryClassesResponseParams): EncodeObject;
    msgSendResponse({ value }: msgSendResponseParams): EncodeObject;
    queryNftrequest({ value }: queryNftrequestParams): EncodeObject;
    queryBalanceResponse({ value }: queryBalanceResponseParams): EncodeObject;
    queryNftresponse({ value }: queryNftresponseParams): EncodeObject;
    queryClassesRequest({ value }: queryClassesRequestParams): EncodeObject;
    eventSend({ value }: eventSendParams): EncodeObject;
    queryOwnerRequest({ value }: queryOwnerRequestParams): EncodeObject;
    queryOwnerResponse({ value }: queryOwnerResponseParams): EncodeObject;
    querySupplyRequest({ value }: querySupplyRequestParams): EncodeObject;
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
