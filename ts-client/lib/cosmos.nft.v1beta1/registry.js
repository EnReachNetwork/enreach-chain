"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/nft/v1beta1/query");
const event_1 = require("./types/cosmos/nft/v1beta1/event");
const query_2 = require("./types/cosmos/nft/v1beta1/query");
const query_3 = require("./types/cosmos/nft/v1beta1/query");
const query_4 = require("./types/cosmos/nft/v1beta1/query");
const nft_1 = require("./types/cosmos/nft/v1beta1/nft");
const genesis_1 = require("./types/cosmos/nft/v1beta1/genesis");
const query_5 = require("./types/cosmos/nft/v1beta1/query");
const query_6 = require("./types/cosmos/nft/v1beta1/query");
const query_7 = require("./types/cosmos/nft/v1beta1/query");
const nft_2 = require("./types/cosmos/nft/v1beta1/nft");
const event_2 = require("./types/cosmos/nft/v1beta1/event");
const tx_1 = require("./types/cosmos/nft/v1beta1/tx");
const query_8 = require("./types/cosmos/nft/v1beta1/query");
const query_9 = require("./types/cosmos/nft/v1beta1/query");
const event_3 = require("./types/cosmos/nft/v1beta1/event");
const genesis_2 = require("./types/cosmos/nft/v1beta1/genesis");
const query_10 = require("./types/cosmos/nft/v1beta1/query");
const tx_2 = require("./types/cosmos/nft/v1beta1/tx");
const query_11 = require("./types/cosmos/nft/v1beta1/query");
const query_12 = require("./types/cosmos/nft/v1beta1/query");
const query_13 = require("./types/cosmos/nft/v1beta1/query");
const query_14 = require("./types/cosmos/nft/v1beta1/query");
const msgTypes = [
    ["/cosmos.nft.v1beta1.QueryNFTResponse", query_1.QueryNFTResponse],
    ["/cosmos.nft.v1beta1.EventMint", event_1.EventMint],
    ["/cosmos.nft.v1beta1.QueryBalanceResponse", query_2.QueryBalanceResponse],
    ["/cosmos.nft.v1beta1.QueryOwnerResponse", query_3.QueryOwnerResponse],
    ["/cosmos.nft.v1beta1.QueryClassResponse", query_4.QueryClassResponse],
    ["/cosmos.nft.v1beta1.Class", nft_1.Class],
    ["/cosmos.nft.v1beta1.Entry", genesis_1.Entry],
    ["/cosmos.nft.v1beta1.QueryBalanceRequest", query_5.QueryBalanceRequest],
    ["/cosmos.nft.v1beta1.QueryClassRequest", query_6.QueryClassRequest],
    ["/cosmos.nft.v1beta1.QueryClassesRequest", query_7.QueryClassesRequest],
    ["/cosmos.nft.v1beta1.NFT", nft_2.NFT],
    ["/cosmos.nft.v1beta1.EventBurn", event_2.EventBurn],
    ["/cosmos.nft.v1beta1.MsgSendResponse", tx_1.MsgSendResponse],
    ["/cosmos.nft.v1beta1.QueryClassesResponse", query_8.QueryClassesResponse],
    ["/cosmos.nft.v1beta1.QueryOwnerRequest", query_9.QueryOwnerRequest],
    ["/cosmos.nft.v1beta1.EventSend", event_3.EventSend],
    ["/cosmos.nft.v1beta1.GenesisState", genesis_2.GenesisState],
    ["/cosmos.nft.v1beta1.QuerySupplyRequest", query_10.QuerySupplyRequest],
    ["/cosmos.nft.v1beta1.MsgSend", tx_2.MsgSend],
    ["/cosmos.nft.v1beta1.QueryNFTsRequest", query_11.QueryNFTsRequest],
    ["/cosmos.nft.v1beta1.QuerySupplyResponse", query_12.QuerySupplyResponse],
    ["/cosmos.nft.v1beta1.QueryNFTsResponse", query_13.QueryNFTsResponse],
    ["/cosmos.nft.v1beta1.QueryNFTRequest", query_14.QueryNFTRequest],
];
exports.msgTypes = msgTypes;
