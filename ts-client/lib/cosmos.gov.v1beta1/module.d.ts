import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryVoteResponse } from "./types/cosmos/gov/v1beta1/query";
import { QueryDepositsRequest } from "./types/cosmos/gov/v1beta1/query";
import { QueryTallyResultResponse } from "./types/cosmos/gov/v1beta1/query";
import { Deposit } from "./types/cosmos/gov/v1beta1/gov";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1beta1/tx";
import { MsgVoteResponse } from "./types/cosmos/gov/v1beta1/tx";
import { MsgVoteWeightedResponse } from "./types/cosmos/gov/v1beta1/tx";
import { QueryProposalResponse } from "./types/cosmos/gov/v1beta1/query";
import { QueryProposalsRequest } from "./types/cosmos/gov/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/gov/v1beta1/query";
import { QueryTallyResultRequest } from "./types/cosmos/gov/v1beta1/query";
import { QueryProposalsResponse } from "./types/cosmos/gov/v1beta1/query";
import { QueryVotesRequest } from "./types/cosmos/gov/v1beta1/query";
import { QueryDepositRequest } from "./types/cosmos/gov/v1beta1/query";
import { Proposal } from "./types/cosmos/gov/v1beta1/gov";
import { QueryProposalRequest } from "./types/cosmos/gov/v1beta1/query";
import { QueryDepositResponse } from "./types/cosmos/gov/v1beta1/query";
import { VotingParams } from "./types/cosmos/gov/v1beta1/gov";
import { MsgDeposit } from "./types/cosmos/gov/v1beta1/tx";
import { MsgDepositResponse } from "./types/cosmos/gov/v1beta1/tx";
import { QueryParamsResponse } from "./types/cosmos/gov/v1beta1/query";
import { WeightedVoteOption } from "./types/cosmos/gov/v1beta1/gov";
import { MsgSubmitProposalResponse } from "./types/cosmos/gov/v1beta1/tx";
import { MsgVote } from "./types/cosmos/gov/v1beta1/tx";
import { QueryVoteRequest } from "./types/cosmos/gov/v1beta1/query";
import { Vote } from "./types/cosmos/gov/v1beta1/gov";
import { DepositParams } from "./types/cosmos/gov/v1beta1/gov";
import { TallyParams } from "./types/cosmos/gov/v1beta1/gov";
import { QueryVotesResponse } from "./types/cosmos/gov/v1beta1/query";
import { QueryDepositsResponse } from "./types/cosmos/gov/v1beta1/query";
import { TallyResult } from "./types/cosmos/gov/v1beta1/gov";
import { TextProposal } from "./types/cosmos/gov/v1beta1/gov";
import { GenesisState } from "./types/cosmos/gov/v1beta1/genesis";
import { MsgVoteWeighted } from "./types/cosmos/gov/v1beta1/tx";
export { QueryVoteResponse, QueryDepositsRequest, QueryTallyResultResponse, Deposit, MsgSubmitProposal, MsgVoteResponse, MsgVoteWeightedResponse, QueryProposalResponse, QueryProposalsRequest, QueryParamsRequest, QueryTallyResultRequest, QueryProposalsResponse, QueryVotesRequest, QueryDepositRequest, Proposal, QueryProposalRequest, QueryDepositResponse, VotingParams, MsgDeposit, MsgDepositResponse, QueryParamsResponse, WeightedVoteOption, MsgSubmitProposalResponse, MsgVote, QueryVoteRequest, Vote, DepositParams, TallyParams, QueryVotesResponse, QueryDepositsResponse, TallyResult, TextProposal, GenesisState, MsgVoteWeighted };
type sendQueryVoteResponseParams = {
    value: QueryVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositsRequestParams = {
    value: QueryDepositsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDepositParams = {
    value: Deposit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalParams = {
    value: MsgSubmitProposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteResponseParams = {
    value: MsgVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteWeightedResponseParams = {
    value: MsgVoteWeightedResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalResponseParams = {
    value: QueryProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsRequestParams = {
    value: QueryProposalsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsResponseParams = {
    value: QueryProposalsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesRequestParams = {
    value: QueryVotesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositRequestParams = {
    value: QueryDepositRequest;
    fee?: StdFee;
    memo?: string;
};
type sendProposalParams = {
    value: Proposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalRequestParams = {
    value: QueryProposalRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositResponseParams = {
    value: QueryDepositResponse;
    fee?: StdFee;
    memo?: string;
};
type sendVotingParamsParams = {
    value: VotingParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositParams = {
    value: MsgDeposit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositResponseParams = {
    value: MsgDepositResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendWeightedVoteOptionParams = {
    value: WeightedVoteOption;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteParams = {
    value: MsgVote;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteRequestParams = {
    value: QueryVoteRequest;
    fee?: StdFee;
    memo?: string;
};
type sendVoteParams = {
    value: Vote;
    fee?: StdFee;
    memo?: string;
};
type sendDepositParamsParams = {
    value: DepositParams;
    fee?: StdFee;
    memo?: string;
};
type sendTallyParamsParams = {
    value: TallyParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesResponseParams = {
    value: QueryVotesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositsResponseParams = {
    value: QueryDepositsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTallyResultParams = {
    value: TallyResult;
    fee?: StdFee;
    memo?: string;
};
type sendTextProposalParams = {
    value: TextProposal;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteWeightedParams = {
    value: MsgVoteWeighted;
    fee?: StdFee;
    memo?: string;
};
type queryVoteResponseParams = {
    value: QueryVoteResponse;
};
type queryDepositsRequestParams = {
    value: QueryDepositsRequest;
};
type queryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
};
type depositParams = {
    value: Deposit;
};
type msgSubmitProposalParams = {
    value: MsgSubmitProposal;
};
type msgVoteResponseParams = {
    value: MsgVoteResponse;
};
type msgVoteWeightedResponseParams = {
    value: MsgVoteWeightedResponse;
};
type queryProposalResponseParams = {
    value: QueryProposalResponse;
};
type queryProposalsRequestParams = {
    value: QueryProposalsRequest;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
};
type queryProposalsResponseParams = {
    value: QueryProposalsResponse;
};
type queryVotesRequestParams = {
    value: QueryVotesRequest;
};
type queryDepositRequestParams = {
    value: QueryDepositRequest;
};
type proposalParams = {
    value: Proposal;
};
type queryProposalRequestParams = {
    value: QueryProposalRequest;
};
type queryDepositResponseParams = {
    value: QueryDepositResponse;
};
type votingParamsParams = {
    value: VotingParams;
};
type msgDepositParams = {
    value: MsgDeposit;
};
type msgDepositResponseParams = {
    value: MsgDepositResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type weightedVoteOptionParams = {
    value: WeightedVoteOption;
};
type msgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
};
type msgVoteParams = {
    value: MsgVote;
};
type queryVoteRequestParams = {
    value: QueryVoteRequest;
};
type voteParams = {
    value: Vote;
};
type depositParamsParams = {
    value: DepositParams;
};
type tallyParamsParams = {
    value: TallyParams;
};
type queryVotesResponseParams = {
    value: QueryVotesResponse;
};
type queryDepositsResponseParams = {
    value: QueryDepositsResponse;
};
type tallyResultParams = {
    value: TallyResult;
};
type textProposalParams = {
    value: TextProposal;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgVoteWeightedParams = {
    value: MsgVoteWeighted;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryVoteResponse({ value, fee, memo }: sendQueryVoteResponseParams): Promise<DeliverTxResponse>;
    sendQueryDepositsRequest({ value, fee, memo }: sendQueryDepositsRequestParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultResponse({ value, fee, memo }: sendQueryTallyResultResponseParams): Promise<DeliverTxResponse>;
    sendDeposit({ value, fee, memo }: sendDepositParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse>;
    sendMsgVoteResponse({ value, fee, memo }: sendMsgVoteResponseParams): Promise<DeliverTxResponse>;
    sendMsgVoteWeightedResponse({ value, fee, memo }: sendMsgVoteWeightedResponseParams): Promise<DeliverTxResponse>;
    sendQueryProposalResponse({ value, fee, memo }: sendQueryProposalResponseParams): Promise<DeliverTxResponse>;
    sendQueryProposalsRequest({ value, fee, memo }: sendQueryProposalsRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultRequest({ value, fee, memo }: sendQueryTallyResultRequestParams): Promise<DeliverTxResponse>;
    sendQueryProposalsResponse({ value, fee, memo }: sendQueryProposalsResponseParams): Promise<DeliverTxResponse>;
    sendQueryVotesRequest({ value, fee, memo }: sendQueryVotesRequestParams): Promise<DeliverTxResponse>;
    sendQueryDepositRequest({ value, fee, memo }: sendQueryDepositRequestParams): Promise<DeliverTxResponse>;
    sendProposal({ value, fee, memo }: sendProposalParams): Promise<DeliverTxResponse>;
    sendQueryProposalRequest({ value, fee, memo }: sendQueryProposalRequestParams): Promise<DeliverTxResponse>;
    sendQueryDepositResponse({ value, fee, memo }: sendQueryDepositResponseParams): Promise<DeliverTxResponse>;
    sendVotingParams({ value, fee, memo }: sendVotingParamsParams): Promise<DeliverTxResponse>;
    sendMsgDeposit({ value, fee, memo }: sendMsgDepositParams): Promise<DeliverTxResponse>;
    sendMsgDepositResponse({ value, fee, memo }: sendMsgDepositResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendWeightedVoteOption({ value, fee, memo }: sendWeightedVoteOptionParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposalResponse({ value, fee, memo }: sendMsgSubmitProposalResponseParams): Promise<DeliverTxResponse>;
    sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse>;
    sendQueryVoteRequest({ value, fee, memo }: sendQueryVoteRequestParams): Promise<DeliverTxResponse>;
    sendVote({ value, fee, memo }: sendVoteParams): Promise<DeliverTxResponse>;
    sendDepositParams({ value, fee, memo }: sendDepositParamsParams): Promise<DeliverTxResponse>;
    sendTallyParams({ value, fee, memo }: sendTallyParamsParams): Promise<DeliverTxResponse>;
    sendQueryVotesResponse({ value, fee, memo }: sendQueryVotesResponseParams): Promise<DeliverTxResponse>;
    sendQueryDepositsResponse({ value, fee, memo }: sendQueryDepositsResponseParams): Promise<DeliverTxResponse>;
    sendTallyResult({ value, fee, memo }: sendTallyResultParams): Promise<DeliverTxResponse>;
    sendTextProposal({ value, fee, memo }: sendTextProposalParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgVoteWeighted({ value, fee, memo }: sendMsgVoteWeightedParams): Promise<DeliverTxResponse>;
    queryVoteResponse({ value }: queryVoteResponseParams): EncodeObject;
    queryDepositsRequest({ value }: queryDepositsRequestParams): EncodeObject;
    queryTallyResultResponse({ value }: queryTallyResultResponseParams): EncodeObject;
    deposit({ value }: depositParams): EncodeObject;
    msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject;
    msgVoteResponse({ value }: msgVoteResponseParams): EncodeObject;
    msgVoteWeightedResponse({ value }: msgVoteWeightedResponseParams): EncodeObject;
    queryProposalResponse({ value }: queryProposalResponseParams): EncodeObject;
    queryProposalsRequest({ value }: queryProposalsRequestParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryTallyResultRequest({ value }: queryTallyResultRequestParams): EncodeObject;
    queryProposalsResponse({ value }: queryProposalsResponseParams): EncodeObject;
    queryVotesRequest({ value }: queryVotesRequestParams): EncodeObject;
    queryDepositRequest({ value }: queryDepositRequestParams): EncodeObject;
    proposal({ value }: proposalParams): EncodeObject;
    queryProposalRequest({ value }: queryProposalRequestParams): EncodeObject;
    queryDepositResponse({ value }: queryDepositResponseParams): EncodeObject;
    votingParams({ value }: votingParamsParams): EncodeObject;
    msgDeposit({ value }: msgDepositParams): EncodeObject;
    msgDepositResponse({ value }: msgDepositResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    weightedVoteOption({ value }: weightedVoteOptionParams): EncodeObject;
    msgSubmitProposalResponse({ value }: msgSubmitProposalResponseParams): EncodeObject;
    msgVote({ value }: msgVoteParams): EncodeObject;
    queryVoteRequest({ value }: queryVoteRequestParams): EncodeObject;
    vote({ value }: voteParams): EncodeObject;
    depositParams({ value }: depositParamsParams): EncodeObject;
    tallyParams({ value }: tallyParamsParams): EncodeObject;
    queryVotesResponse({ value }: queryVotesResponseParams): EncodeObject;
    queryDepositsResponse({ value }: queryDepositsResponseParams): EncodeObject;
    tallyResult({ value }: tallyResultParams): EncodeObject;
    textProposal({ value }: textProposalParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgVoteWeighted({ value }: msgVoteWeightedParams): EncodeObject;
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
        CosmosGovV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
