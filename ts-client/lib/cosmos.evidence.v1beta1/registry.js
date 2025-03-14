"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/evidence/v1beta1/query");
const evidence_1 = require("./types/cosmos/evidence/v1beta1/evidence");
const query_2 = require("./types/cosmos/evidence/v1beta1/query");
const tx_1 = require("./types/cosmos/evidence/v1beta1/tx");
const query_3 = require("./types/cosmos/evidence/v1beta1/query");
const query_4 = require("./types/cosmos/evidence/v1beta1/query");
const tx_2 = require("./types/cosmos/evidence/v1beta1/tx");
const genesis_1 = require("./types/cosmos/evidence/v1beta1/genesis");
const msgTypes = [
    ["/cosmos.evidence.v1beta1.QueryAllEvidenceResponse", query_1.QueryAllEvidenceResponse],
    ["/cosmos.evidence.v1beta1.Equivocation", evidence_1.Equivocation],
    ["/cosmos.evidence.v1beta1.QueryEvidenceRequest", query_2.QueryEvidenceRequest],
    ["/cosmos.evidence.v1beta1.MsgSubmitEvidence", tx_1.MsgSubmitEvidence],
    ["/cosmos.evidence.v1beta1.QueryEvidenceResponse", query_3.QueryEvidenceResponse],
    ["/cosmos.evidence.v1beta1.QueryAllEvidenceRequest", query_4.QueryAllEvidenceRequest],
    ["/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse", tx_2.MsgSubmitEvidenceResponse],
    ["/cosmos.evidence.v1beta1.GenesisState", genesis_1.GenesisState],
];
exports.msgTypes = msgTypes;
