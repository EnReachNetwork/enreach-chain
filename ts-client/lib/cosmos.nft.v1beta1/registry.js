"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/cosmos/nft/v1beta1/genesis");
const query_1 = require("./types/cosmos/nft/v1beta1/query");
const query_2 = require("./types/cosmos/nft/v1beta1/query");
const tx_1 = require("./types/cosmos/nft/v1beta1/tx");
const tx_2 = require("./types/cosmos/nft/v1beta1/tx");
const query_3 = require("./types/cosmos/nft/v1beta1/query");
const query_4 = require("./types/cosmos/nft/v1beta1/query");
const event_1 = require("./types/cosmos/nft/v1beta1/event");
const query_5 = require("./types/cosmos/nft/v1beta1/query");
const query_6 = require("./types/cosmos/nft/v1beta1/query");
const query_7 = require("./types/cosmos/nft/v1beta1/query");
const query_8 = require("./types/cosmos/nft/v1beta1/query");
const query_9 = require("./types/cosmos/nft/v1beta1/query");
const query_10 = require("./types/cosmos/nft/v1beta1/query");
const query_11 = require("./types/cosmos/nft/v1beta1/query");
const nft_1 = require("./types/cosmos/nft/v1beta1/nft");
const query_12 = require("./types/cosmos/nft/v1beta1/query");
const nft_2 = require("./types/cosmos/nft/v1beta1/nft");
const genesis_2 = require("./types/cosmos/nft/v1beta1/genesis");
const query_13 = require("./types/cosmos/nft/v1beta1/query");
const event_2 = require("./types/cosmos/nft/v1beta1/event");
const event_3 = require("./types/cosmos/nft/v1beta1/event");
const query_14 = require("./types/cosmos/nft/v1beta1/query");
const msgTypes = [
    ["/cosmos.nft.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.nft.v1beta1.QueryBalanceRequest", query_1.QueryBalanceRequest],
    ["/cosmos.nft.v1beta1.QueryNFTsResponse", query_2.QueryNFTsResponse],
    ["/cosmos.nft.v1beta1.MsgSend", tx_1.MsgSend],
    ["/cosmos.nft.v1beta1.MsgSendResponse", tx_2.MsgSendResponse],
    ["/cosmos.nft.v1beta1.QueryClassesRequest", query_3.QueryClassesRequest],
    ["/cosmos.nft.v1beta1.QueryClassesResponse", query_4.QueryClassesResponse],
    ["/cosmos.nft.v1beta1.EventBurn", event_1.EventBurn],
    ["/cosmos.nft.v1beta1.QuerySupplyRequest", query_5.QuerySupplyRequest],
    ["/cosmos.nft.v1beta1.QueryNFTsRequest", query_6.QueryNFTsRequest],
    ["/cosmos.nft.v1beta1.QueryNFTRequest", query_7.QueryNFTRequest],
    ["/cosmos.nft.v1beta1.QueryClassRequest", query_8.QueryClassRequest],
    ["/cosmos.nft.v1beta1.QueryBalanceResponse", query_9.QueryBalanceResponse],
    ["/cosmos.nft.v1beta1.QueryOwnerResponse", query_10.QueryOwnerResponse],
    ["/cosmos.nft.v1beta1.QuerySupplyResponse", query_11.QuerySupplyResponse],
    ["/cosmos.nft.v1beta1.Class", nft_1.Class],
    ["/cosmos.nft.v1beta1.QueryOwnerRequest", query_12.QueryOwnerRequest],
    ["/cosmos.nft.v1beta1.NFT", nft_2.NFT],
    ["/cosmos.nft.v1beta1.Entry", genesis_2.Entry],
    ["/cosmos.nft.v1beta1.QueryNFTResponse", query_13.QueryNFTResponse],
    ["/cosmos.nft.v1beta1.EventSend", event_2.EventSend],
    ["/cosmos.nft.v1beta1.EventMint", event_3.EventMint],
    ["/cosmos.nft.v1beta1.QueryClassResponse", query_14.QueryClassResponse],
];
exports.msgTypes = msgTypes;
