"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/nft/v1beta1/tx");
const query_1 = require("./types/cosmos/nft/v1beta1/query");
const query_2 = require("./types/cosmos/nft/v1beta1/query");
const query_3 = require("./types/cosmos/nft/v1beta1/query");
const query_4 = require("./types/cosmos/nft/v1beta1/query");
const tx_2 = require("./types/cosmos/nft/v1beta1/tx");
const event_1 = require("./types/cosmos/nft/v1beta1/event");
const event_2 = require("./types/cosmos/nft/v1beta1/event");
const query_5 = require("./types/cosmos/nft/v1beta1/query");
const genesis_1 = require("./types/cosmos/nft/v1beta1/genesis");
const query_6 = require("./types/cosmos/nft/v1beta1/query");
const genesis_2 = require("./types/cosmos/nft/v1beta1/genesis");
const query_7 = require("./types/cosmos/nft/v1beta1/query");
const nft_1 = require("./types/cosmos/nft/v1beta1/nft");
const nft_2 = require("./types/cosmos/nft/v1beta1/nft");
const query_8 = require("./types/cosmos/nft/v1beta1/query");
const query_9 = require("./types/cosmos/nft/v1beta1/query");
const query_10 = require("./types/cosmos/nft/v1beta1/query");
const query_11 = require("./types/cosmos/nft/v1beta1/query");
const query_12 = require("./types/cosmos/nft/v1beta1/query");
const event_3 = require("./types/cosmos/nft/v1beta1/event");
const query_13 = require("./types/cosmos/nft/v1beta1/query");
const query_14 = require("./types/cosmos/nft/v1beta1/query");
const msgTypes = [
    ["/cosmos.nft.v1beta1.MsgSendResponse", tx_1.MsgSendResponse],
    ["/cosmos.nft.v1beta1.QuerySupplyRequest", query_1.QuerySupplyRequest],
    ["/cosmos.nft.v1beta1.QuerySupplyResponse", query_2.QuerySupplyResponse],
    ["/cosmos.nft.v1beta1.QueryNFTsRequest", query_3.QueryNFTsRequest],
    ["/cosmos.nft.v1beta1.QueryClassResponse", query_4.QueryClassResponse],
    ["/cosmos.nft.v1beta1.MsgSend", tx_2.MsgSend],
    ["/cosmos.nft.v1beta1.EventSend", event_1.EventSend],
    ["/cosmos.nft.v1beta1.EventBurn", event_2.EventBurn],
    ["/cosmos.nft.v1beta1.QueryBalanceRequest", query_5.QueryBalanceRequest],
    ["/cosmos.nft.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.nft.v1beta1.QueryNFTResponse", query_6.QueryNFTResponse],
    ["/cosmos.nft.v1beta1.Entry", genesis_2.Entry],
    ["/cosmos.nft.v1beta1.QueryNFTRequest", query_7.QueryNFTRequest],
    ["/cosmos.nft.v1beta1.Class", nft_1.Class],
    ["/cosmos.nft.v1beta1.NFT", nft_2.NFT],
    ["/cosmos.nft.v1beta1.QueryOwnerResponse", query_8.QueryOwnerResponse],
    ["/cosmos.nft.v1beta1.QueryClassesResponse", query_9.QueryClassesResponse],
    ["/cosmos.nft.v1beta1.QueryBalanceResponse", query_10.QueryBalanceResponse],
    ["/cosmos.nft.v1beta1.QueryOwnerRequest", query_11.QueryOwnerRequest],
    ["/cosmos.nft.v1beta1.QueryClassRequest", query_12.QueryClassRequest],
    ["/cosmos.nft.v1beta1.EventMint", event_3.EventMint],
    ["/cosmos.nft.v1beta1.QueryNFTsResponse", query_13.QueryNFTsResponse],
    ["/cosmos.nft.v1beta1.QueryClassesRequest", query_14.QueryClassesRequest],
];
exports.msgTypes = msgTypes;
