import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryBalanceResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryNFTRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryNFTResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassesRequest } from "./types/cosmos/nft/v1beta1/query";
import { EventMint } from "./types/cosmos/nft/v1beta1/event";
import { EventBurn } from "./types/cosmos/nft/v1beta1/event";
import { NFT } from "./types/cosmos/nft/v1beta1/nft";
import { QueryOwnerRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryNFTsRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassesResponse } from "./types/cosmos/nft/v1beta1/query";
import { GenesisState } from "./types/cosmos/nft/v1beta1/genesis";
import { QueryOwnerResponse } from "./types/cosmos/nft/v1beta1/query";
import { EventSend } from "./types/cosmos/nft/v1beta1/event";
import { Class } from "./types/cosmos/nft/v1beta1/nft";
import { QueryNFTsResponse } from "./types/cosmos/nft/v1beta1/query";
import { QuerySupplyRequest } from "./types/cosmos/nft/v1beta1/query";
import { QuerySupplyResponse } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassRequest } from "./types/cosmos/nft/v1beta1/query";
import { MsgSend } from "./types/cosmos/nft/v1beta1/tx";
import { QueryBalanceRequest } from "./types/cosmos/nft/v1beta1/query";
import { QueryClassResponse } from "./types/cosmos/nft/v1beta1/query";
import { Entry } from "./types/cosmos/nft/v1beta1/genesis";
import { MsgSendResponse } from "./types/cosmos/nft/v1beta1/tx";
export { QueryBalanceResponse, QueryNFTRequest, QueryNFTResponse, QueryClassesRequest, EventMint, EventBurn, NFT, QueryOwnerRequest, QueryNFTsRequest, QueryClassesResponse, GenesisState, QueryOwnerResponse, EventSend, Class, QueryNFTsResponse, QuerySupplyRequest, QuerySupplyResponse, QueryClassRequest, MsgSend, QueryBalanceRequest, QueryClassResponse, Entry, MsgSendResponse };
type sendQueryBalanceResponseParams = {
    value: QueryBalanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTRequestParams = {
    value: QueryNFTRequest;
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
type sendEventMintParams = {
    value: EventMint;
    fee?: StdFee;
    memo?: string;
};
type sendEventBurnParams = {
    value: EventBurn;
    fee?: StdFee;
    memo?: string;
};
type sendNFTParams = {
    value: NFT;
    fee?: StdFee;
    memo?: string;
};
type sendQueryOwnerRequestParams = {
    value: QueryOwnerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTsRequestParams = {
    value: QueryNFTsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassesResponseParams = {
    value: QueryClassesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryOwnerResponseParams = {
    value: QueryOwnerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEventSendParams = {
    value: EventSend;
    fee?: StdFee;
    memo?: string;
};
type sendClassParams = {
    value: Class;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNFTsResponseParams = {
    value: QueryNFTsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyRequestParams = {
    value: QuerySupplyRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyResponseParams = {
    value: QuerySupplyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassRequestParams = {
    value: QueryClassRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendParams = {
    value: MsgSend;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceRequestParams = {
    value: QueryBalanceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClassResponseParams = {
    value: QueryClassResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEntryParams = {
    value: Entry;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendResponseParams = {
    value: MsgSendResponse;
    fee?: StdFee;
    memo?: string;
};
type queryBalanceResponseParams = {
    value: QueryBalanceResponse;
};
type queryNftrequestParams = {
    value: QueryNFTRequest;
};
type queryNftresponseParams = {
    value: QueryNFTResponse;
};
type queryClassesRequestParams = {
    value: QueryClassesRequest;
};
type eventMintParams = {
    value: EventMint;
};
type eventBurnParams = {
    value: EventBurn;
};
type nftParams = {
    value: NFT;
};
type queryOwnerRequestParams = {
    value: QueryOwnerRequest;
};
type queryNftsRequestParams = {
    value: QueryNFTsRequest;
};
type queryClassesResponseParams = {
    value: QueryClassesResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryOwnerResponseParams = {
    value: QueryOwnerResponse;
};
type eventSendParams = {
    value: EventSend;
};
type classParams = {
    value: Class;
};
type queryNftsResponseParams = {
    value: QueryNFTsResponse;
};
type querySupplyRequestParams = {
    value: QuerySupplyRequest;
};
type querySupplyResponseParams = {
    value: QuerySupplyResponse;
};
type queryClassRequestParams = {
    value: QueryClassRequest;
};
type msgSendParams = {
    value: MsgSend;
};
type queryBalanceRequestParams = {
    value: QueryBalanceRequest;
};
type queryClassResponseParams = {
    value: QueryClassResponse;
};
type entryParams = {
    value: Entry;
};
type msgSendResponseParams = {
    value: MsgSendResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryBalanceResponse({ value, fee, memo }: sendQueryBalanceResponseParams): Promise<DeliverTxResponse>;
    sendQueryNFTRequest({ value, fee, memo }: sendQueryNFTRequestParams): Promise<DeliverTxResponse>;
    sendQueryNFTResponse({ value, fee, memo }: sendQueryNFTResponseParams): Promise<DeliverTxResponse>;
    sendQueryClassesRequest({ value, fee, memo }: sendQueryClassesRequestParams): Promise<DeliverTxResponse>;
    sendEventMint({ value, fee, memo }: sendEventMintParams): Promise<DeliverTxResponse>;
    sendEventBurn({ value, fee, memo }: sendEventBurnParams): Promise<DeliverTxResponse>;
    sendNFT({ value, fee, memo }: sendNFTParams): Promise<DeliverTxResponse>;
    sendQueryOwnerRequest({ value, fee, memo }: sendQueryOwnerRequestParams): Promise<DeliverTxResponse>;
    sendQueryNFTsRequest({ value, fee, memo }: sendQueryNFTsRequestParams): Promise<DeliverTxResponse>;
    sendQueryClassesResponse({ value, fee, memo }: sendQueryClassesResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryOwnerResponse({ value, fee, memo }: sendQueryOwnerResponseParams): Promise<DeliverTxResponse>;
    sendEventSend({ value, fee, memo }: sendEventSendParams): Promise<DeliverTxResponse>;
    sendClass({ value, fee, memo }: sendClassParams): Promise<DeliverTxResponse>;
    sendQueryNFTsResponse({ value, fee, memo }: sendQueryNFTsResponseParams): Promise<DeliverTxResponse>;
    sendQuerySupplyRequest({ value, fee, memo }: sendQuerySupplyRequestParams): Promise<DeliverTxResponse>;
    sendQuerySupplyResponse({ value, fee, memo }: sendQuerySupplyResponseParams): Promise<DeliverTxResponse>;
    sendQueryClassRequest({ value, fee, memo }: sendQueryClassRequestParams): Promise<DeliverTxResponse>;
    sendMsgSend({ value, fee, memo }: sendMsgSendParams): Promise<DeliverTxResponse>;
    sendQueryBalanceRequest({ value, fee, memo }: sendQueryBalanceRequestParams): Promise<DeliverTxResponse>;
    sendQueryClassResponse({ value, fee, memo }: sendQueryClassResponseParams): Promise<DeliverTxResponse>;
    sendEntry({ value, fee, memo }: sendEntryParams): Promise<DeliverTxResponse>;
    sendMsgSendResponse({ value, fee, memo }: sendMsgSendResponseParams): Promise<DeliverTxResponse>;
    queryBalanceResponse({ value }: queryBalanceResponseParams): EncodeObject;
    queryNftrequest({ value }: queryNftrequestParams): EncodeObject;
    queryNftresponse({ value }: queryNftresponseParams): EncodeObject;
    queryClassesRequest({ value }: queryClassesRequestParams): EncodeObject;
    eventMint({ value }: eventMintParams): EncodeObject;
    eventBurn({ value }: eventBurnParams): EncodeObject;
    nft({ value }: nftParams): EncodeObject;
    queryOwnerRequest({ value }: queryOwnerRequestParams): EncodeObject;
    queryNftsRequest({ value }: queryNftsRequestParams): EncodeObject;
    queryClassesResponse({ value }: queryClassesResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryOwnerResponse({ value }: queryOwnerResponseParams): EncodeObject;
    eventSend({ value }: eventSendParams): EncodeObject;
    class({ value }: classParams): EncodeObject;
    queryNftsResponse({ value }: queryNftsResponseParams): EncodeObject;
    querySupplyRequest({ value }: querySupplyRequestParams): EncodeObject;
    querySupplyResponse({ value }: querySupplyResponseParams): EncodeObject;
    queryClassRequest({ value }: queryClassRequestParams): EncodeObject;
    msgSend({ value }: msgSendParams): EncodeObject;
    queryBalanceRequest({ value }: queryBalanceRequestParams): EncodeObject;
    queryClassResponse({ value }: queryClassResponseParams): EncodeObject;
    entry({ value }: entryParams): EncodeObject;
    msgSendResponse({ value }: msgSendResponseParams): EncodeObject;
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
