"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/cosmos/nft/v1beta1/genesis");
const query_1 = require("./types/cosmos/nft/v1beta1/query");
const query_2 = require("./types/cosmos/nft/v1beta1/query");
const query_3 = require("./types/cosmos/nft/v1beta1/query");
const query_4 = require("./types/cosmos/nft/v1beta1/query");
const event_1 = require("./types/cosmos/nft/v1beta1/event");
const nft_1 = require("./types/cosmos/nft/v1beta1/nft");
const tx_1 = require("./types/cosmos/nft/v1beta1/tx");
const query_5 = require("./types/cosmos/nft/v1beta1/query");
const query_6 = require("./types/cosmos/nft/v1beta1/query");
const query_7 = require("./types/cosmos/nft/v1beta1/query");
const query_8 = require("./types/cosmos/nft/v1beta1/query");
const query_9 = require("./types/cosmos/nft/v1beta1/query");
const query_10 = require("./types/cosmos/nft/v1beta1/query");
const query_11 = require("./types/cosmos/nft/v1beta1/query");
const genesis_2 = require("./types/cosmos/nft/v1beta1/genesis");
const query_12 = require("./types/cosmos/nft/v1beta1/query");
const query_13 = require("./types/cosmos/nft/v1beta1/query");
const event_2 = require("./types/cosmos/nft/v1beta1/event");
const event_3 = require("./types/cosmos/nft/v1beta1/event");
const nft_2 = require("./types/cosmos/nft/v1beta1/nft");
const tx_2 = require("./types/cosmos/nft/v1beta1/tx");
const query_14 = require("./types/cosmos/nft/v1beta1/query");
const msgTypes = [
    ["/cosmos.nft.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.nft.v1beta1.QueryBalanceResponse", query_1.QueryBalanceResponse],
    ["/cosmos.nft.v1beta1.QueryOwnerRequest", query_2.QueryOwnerRequest],
    ["/cosmos.nft.v1beta1.QueryNFTResponse", query_3.QueryNFTResponse],
    ["/cosmos.nft.v1beta1.QueryClassRequest", query_4.QueryClassRequest],
    ["/cosmos.nft.v1beta1.EventBurn", event_1.EventBurn],
    ["/cosmos.nft.v1beta1.Class", nft_1.Class],
    ["/cosmos.nft.v1beta1.MsgSend", tx_1.MsgSend],
    ["/cosmos.nft.v1beta1.QueryBalanceRequest", query_5.QueryBalanceRequest],
    ["/cosmos.nft.v1beta1.QuerySupplyRequest", query_6.QuerySupplyRequest],
    ["/cosmos.nft.v1beta1.QueryOwnerResponse", query_7.QueryOwnerResponse],
    ["/cosmos.nft.v1beta1.QueryNFTsRequest", query_8.QueryNFTsRequest],
    ["/cosmos.nft.v1beta1.QueryNFTsResponse", query_9.QueryNFTsResponse],
    ["/cosmos.nft.v1beta1.QueryNFTRequest", query_10.QueryNFTRequest],
    ["/cosmos.nft.v1beta1.QueryClassesResponse", query_11.QueryClassesResponse],
    ["/cosmos.nft.v1beta1.Entry", genesis_2.Entry],
    ["/cosmos.nft.v1beta1.QuerySupplyResponse", query_12.QuerySupplyResponse],
    ["/cosmos.nft.v1beta1.QueryClassResponse", query_13.QueryClassResponse],
    ["/cosmos.nft.v1beta1.EventSend", event_2.EventSend],
    ["/cosmos.nft.v1beta1.EventMint", event_3.EventMint],
    ["/cosmos.nft.v1beta1.NFT", nft_2.NFT],
    ["/cosmos.nft.v1beta1.MsgSendResponse", tx_2.MsgSendResponse],
    ["/cosmos.nft.v1beta1.QueryClassesRequest", query_14.QueryClassesRequest],
];
exports.msgTypes = msgTypes;
