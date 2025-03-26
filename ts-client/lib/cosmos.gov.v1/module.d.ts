import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgCancelProposalResponse } from "./types/cosmos/gov/v1/tx";
import { QueryParamsRequest } from "./types/cosmos/gov/v1/query";
import { QueryProposalsRequest } from "./types/cosmos/gov/v1/query";
import { MsgUpdateParamsResponse } from "./types/cosmos/gov/v1/tx";
import { QueryProposalRequest } from "./types/cosmos/gov/v1/query";
import { MsgExecLegacyContentResponse } from "./types/cosmos/gov/v1/tx";
import { Params } from "./types/cosmos/gov/v1/gov";
import { QueryDepositsRequest } from "./types/cosmos/gov/v1/query";
import { QueryParamsResponse } from "./types/cosmos/gov/v1/query";
import { QueryDepositsResponse } from "./types/cosmos/gov/v1/query";
import { MsgSubmitProposalResponse } from "./types/cosmos/gov/v1/tx";
import { QueryVoteResponse } from "./types/cosmos/gov/v1/query";
import { MsgVoteWeightedResponse } from "./types/cosmos/gov/v1/tx";
import { Deposit } from "./types/cosmos/gov/v1/gov";
import { QueryTallyResultResponse } from "./types/cosmos/gov/v1/query";
import { MsgVoteResponse } from "./types/cosmos/gov/v1/tx";
import { MsgDeposit } from "./types/cosmos/gov/v1/tx";
import { QueryConstitutionResponse } from "./types/cosmos/gov/v1/query";
import { MsgVoteWeighted } from "./types/cosmos/gov/v1/tx";
import { DepositParams } from "./types/cosmos/gov/v1/gov";
import { QueryVotesResponse } from "./types/cosmos/gov/v1/query";
import { MsgVote } from "./types/cosmos/gov/v1/tx";
import { WeightedVoteOption } from "./types/cosmos/gov/v1/gov";
import { QueryProposalsResponse } from "./types/cosmos/gov/v1/query";
import { TallyParams } from "./types/cosmos/gov/v1/gov";
import { QueryConstitutionRequest } from "./types/cosmos/gov/v1/query";
import { Proposal } from "./types/cosmos/gov/v1/gov";
import { TallyResult } from "./types/cosmos/gov/v1/gov";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1/tx";
import { QueryVoteRequest } from "./types/cosmos/gov/v1/query";
import { QueryDepositRequest } from "./types/cosmos/gov/v1/query";
import { MsgDepositResponse } from "./types/cosmos/gov/v1/tx";
import { MsgUpdateParams } from "./types/cosmos/gov/v1/tx";
import { QueryProposalResponse } from "./types/cosmos/gov/v1/query";
import { VotingParams } from "./types/cosmos/gov/v1/gov";
import { QueryDepositResponse } from "./types/cosmos/gov/v1/query";
import { QueryVotesRequest } from "./types/cosmos/gov/v1/query";
import { MsgCancelProposal } from "./types/cosmos/gov/v1/tx";
import { Vote } from "./types/cosmos/gov/v1/gov";
import { MsgExecLegacyContent } from "./types/cosmos/gov/v1/tx";
import { QueryTallyResultRequest } from "./types/cosmos/gov/v1/query";
import { GenesisState } from "./types/cosmos/gov/v1/genesis";
export { MsgCancelProposalResponse, QueryParamsRequest, QueryProposalsRequest, MsgUpdateParamsResponse, QueryProposalRequest, MsgExecLegacyContentResponse, Params, QueryDepositsRequest, QueryParamsResponse, QueryDepositsResponse, MsgSubmitProposalResponse, QueryVoteResponse, MsgVoteWeightedResponse, Deposit, QueryTallyResultResponse, MsgVoteResponse, MsgDeposit, QueryConstitutionResponse, MsgVoteWeighted, DepositParams, QueryVotesResponse, MsgVote, WeightedVoteOption, QueryProposalsResponse, TallyParams, QueryConstitutionRequest, Proposal, TallyResult, MsgSubmitProposal, QueryVoteRequest, QueryDepositRequest, MsgDepositResponse, MsgUpdateParams, QueryProposalResponse, VotingParams, QueryDepositResponse, QueryVotesRequest, MsgCancelProposal, Vote, MsgExecLegacyContent, QueryTallyResultRequest, GenesisState };
type sendMsgCancelProposalResponseParams = {
    value: MsgCancelProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsRequestParams = {
    value: QueryProposalsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalRequestParams = {
    value: QueryProposalRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecLegacyContentResponseParams = {
    value: MsgExecLegacyContentResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositsRequestParams = {
    value: QueryDepositsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositsResponseParams = {
    value: QueryDepositsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteResponseParams = {
    value: QueryVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteWeightedResponseParams = {
    value: MsgVoteWeightedResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDepositParams = {
    value: Deposit;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteResponseParams = {
    value: MsgVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositParams = {
    value: MsgDeposit;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConstitutionResponseParams = {
    value: QueryConstitutionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteWeightedParams = {
    value: MsgVoteWeighted;
    fee?: StdFee;
    memo?: string;
};
type sendDepositParamsParams = {
    value: DepositParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesResponseParams = {
    value: QueryVotesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteParams = {
    value: MsgVote;
    fee?: StdFee;
    memo?: string;
};
type sendWeightedVoteOptionParams = {
    value: WeightedVoteOption;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsResponseParams = {
    value: QueryProposalsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTallyParamsParams = {
    value: TallyParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConstitutionRequestParams = {
    value: QueryConstitutionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendProposalParams = {
    value: Proposal;
    fee?: StdFee;
    memo?: string;
};
type sendTallyResultParams = {
    value: TallyResult;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalParams = {
    value: MsgSubmitProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteRequestParams = {
    value: QueryVoteRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositRequestParams = {
    value: QueryDepositRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositResponseParams = {
    value: MsgDepositResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalResponseParams = {
    value: QueryProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendVotingParamsParams = {
    value: VotingParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositResponseParams = {
    value: QueryDepositResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesRequestParams = {
    value: QueryVotesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelProposalParams = {
    value: MsgCancelProposal;
    fee?: StdFee;
    memo?: string;
};
type sendVoteParams = {
    value: Vote;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecLegacyContentParams = {
    value: MsgExecLegacyContent;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type msgCancelProposalResponseParams = {
    value: MsgCancelProposalResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryProposalsRequestParams = {
    value: QueryProposalsRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryProposalRequestParams = {
    value: QueryProposalRequest;
};
type msgExecLegacyContentResponseParams = {
    value: MsgExecLegacyContentResponse;
};
type paramsParams = {
    value: Params;
};
type queryDepositsRequestParams = {
    value: QueryDepositsRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryDepositsResponseParams = {
    value: QueryDepositsResponse;
};
type msgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
};
type queryVoteResponseParams = {
    value: QueryVoteResponse;
};
type msgVoteWeightedResponseParams = {
    value: MsgVoteWeightedResponse;
};
type depositParams = {
    value: Deposit;
};
type queryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
};
type msgVoteResponseParams = {
    value: MsgVoteResponse;
};
type msgDepositParams = {
    value: MsgDeposit;
};
type queryConstitutionResponseParams = {
    value: QueryConstitutionResponse;
};
type msgVoteWeightedParams = {
    value: MsgVoteWeighted;
};
type depositParamsParams = {
    value: DepositParams;
};
type queryVotesResponseParams = {
    value: QueryVotesResponse;
};
type msgVoteParams = {
    value: MsgVote;
};
type weightedVoteOptionParams = {
    value: WeightedVoteOption;
};
type queryProposalsResponseParams = {
    value: QueryProposalsResponse;
};
type tallyParamsParams = {
    value: TallyParams;
};
type queryConstitutionRequestParams = {
    value: QueryConstitutionRequest;
};
type proposalParams = {
    value: Proposal;
};
type tallyResultParams = {
    value: TallyResult;
};
type msgSubmitProposalParams = {
    value: MsgSubmitProposal;
};
type queryVoteRequestParams = {
    value: QueryVoteRequest;
};
type queryDepositRequestParams = {
    value: QueryDepositRequest;
};
type msgDepositResponseParams = {
    value: MsgDepositResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryProposalResponseParams = {
    value: QueryProposalResponse;
};
type votingParamsParams = {
    value: VotingParams;
};
type queryDepositResponseParams = {
    value: QueryDepositResponse;
};
type queryVotesRequestParams = {
    value: QueryVotesRequest;
};
type msgCancelProposalParams = {
    value: MsgCancelProposal;
};
type voteParams = {
    value: Vote;
};
type msgExecLegacyContentParams = {
    value: MsgExecLegacyContent;
};
type queryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgCancelProposalResponse({ value, fee, memo }: sendMsgCancelProposalResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryProposalsRequest({ value, fee, memo }: sendQueryProposalsRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryProposalRequest({ value, fee, memo }: sendQueryProposalRequestParams): Promise<DeliverTxResponse>;
    sendMsgExecLegacyContentResponse({ value, fee, memo }: sendMsgExecLegacyContentResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryDepositsRequest({ value, fee, memo }: sendQueryDepositsRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDepositsResponse({ value, fee, memo }: sendQueryDepositsResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposalResponse({ value, fee, memo }: sendMsgSubmitProposalResponseParams): Promise<DeliverTxResponse>;
    sendQueryVoteResponse({ value, fee, memo }: sendQueryVoteResponseParams): Promise<DeliverTxResponse>;
    sendMsgVoteWeightedResponse({ value, fee, memo }: sendMsgVoteWeightedResponseParams): Promise<DeliverTxResponse>;
    sendDeposit({ value, fee, memo }: sendDepositParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultResponse({ value, fee, memo }: sendQueryTallyResultResponseParams): Promise<DeliverTxResponse>;
    sendMsgVoteResponse({ value, fee, memo }: sendMsgVoteResponseParams): Promise<DeliverTxResponse>;
    sendMsgDeposit({ value, fee, memo }: sendMsgDepositParams): Promise<DeliverTxResponse>;
    sendQueryConstitutionResponse({ value, fee, memo }: sendQueryConstitutionResponseParams): Promise<DeliverTxResponse>;
    sendMsgVoteWeighted({ value, fee, memo }: sendMsgVoteWeightedParams): Promise<DeliverTxResponse>;
    sendDepositParams({ value, fee, memo }: sendDepositParamsParams): Promise<DeliverTxResponse>;
    sendQueryVotesResponse({ value, fee, memo }: sendQueryVotesResponseParams): Promise<DeliverTxResponse>;
    sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse>;
    sendWeightedVoteOption({ value, fee, memo }: sendWeightedVoteOptionParams): Promise<DeliverTxResponse>;
    sendQueryProposalsResponse({ value, fee, memo }: sendQueryProposalsResponseParams): Promise<DeliverTxResponse>;
    sendTallyParams({ value, fee, memo }: sendTallyParamsParams): Promise<DeliverTxResponse>;
    sendQueryConstitutionRequest({ value, fee, memo }: sendQueryConstitutionRequestParams): Promise<DeliverTxResponse>;
    sendProposal({ value, fee, memo }: sendProposalParams): Promise<DeliverTxResponse>;
    sendTallyResult({ value, fee, memo }: sendTallyResultParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse>;
    sendQueryVoteRequest({ value, fee, memo }: sendQueryVoteRequestParams): Promise<DeliverTxResponse>;
    sendQueryDepositRequest({ value, fee, memo }: sendQueryDepositRequestParams): Promise<DeliverTxResponse>;
    sendMsgDepositResponse({ value, fee, memo }: sendMsgDepositResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryProposalResponse({ value, fee, memo }: sendQueryProposalResponseParams): Promise<DeliverTxResponse>;
    sendVotingParams({ value, fee, memo }: sendVotingParamsParams): Promise<DeliverTxResponse>;
    sendQueryDepositResponse({ value, fee, memo }: sendQueryDepositResponseParams): Promise<DeliverTxResponse>;
    sendQueryVotesRequest({ value, fee, memo }: sendQueryVotesRequestParams): Promise<DeliverTxResponse>;
    sendMsgCancelProposal({ value, fee, memo }: sendMsgCancelProposalParams): Promise<DeliverTxResponse>;
    sendVote({ value, fee, memo }: sendVoteParams): Promise<DeliverTxResponse>;
    sendMsgExecLegacyContent({ value, fee, memo }: sendMsgExecLegacyContentParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultRequest({ value, fee, memo }: sendQueryTallyResultRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    msgCancelProposalResponse({ value }: msgCancelProposalResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryProposalsRequest({ value }: queryProposalsRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryProposalRequest({ value }: queryProposalRequestParams): EncodeObject;
    msgExecLegacyContentResponse({ value }: msgExecLegacyContentResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryDepositsRequest({ value }: queryDepositsRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryDepositsResponse({ value }: queryDepositsResponseParams): EncodeObject;
    msgSubmitProposalResponse({ value }: msgSubmitProposalResponseParams): EncodeObject;
    queryVoteResponse({ value }: queryVoteResponseParams): EncodeObject;
    msgVoteWeightedResponse({ value }: msgVoteWeightedResponseParams): EncodeObject;
    deposit({ value }: depositParams): EncodeObject;
    queryTallyResultResponse({ value }: queryTallyResultResponseParams): EncodeObject;
    msgVoteResponse({ value }: msgVoteResponseParams): EncodeObject;
    msgDeposit({ value }: msgDepositParams): EncodeObject;
    queryConstitutionResponse({ value }: queryConstitutionResponseParams): EncodeObject;
    msgVoteWeighted({ value }: msgVoteWeightedParams): EncodeObject;
    depositParams({ value }: depositParamsParams): EncodeObject;
    queryVotesResponse({ value }: queryVotesResponseParams): EncodeObject;
    msgVote({ value }: msgVoteParams): EncodeObject;
    weightedVoteOption({ value }: weightedVoteOptionParams): EncodeObject;
    queryProposalsResponse({ value }: queryProposalsResponseParams): EncodeObject;
    tallyParams({ value }: tallyParamsParams): EncodeObject;
    queryConstitutionRequest({ value }: queryConstitutionRequestParams): EncodeObject;
    proposal({ value }: proposalParams): EncodeObject;
    tallyResult({ value }: tallyResultParams): EncodeObject;
    msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject;
    queryVoteRequest({ value }: queryVoteRequestParams): EncodeObject;
    queryDepositRequest({ value }: queryDepositRequestParams): EncodeObject;
    msgDepositResponse({ value }: msgDepositResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryProposalResponse({ value }: queryProposalResponseParams): EncodeObject;
    votingParams({ value }: votingParamsParams): EncodeObject;
    queryDepositResponse({ value }: queryDepositResponseParams): EncodeObject;
    queryVotesRequest({ value }: queryVotesRequestParams): EncodeObject;
    msgCancelProposal({ value }: msgCancelProposalParams): EncodeObject;
    vote({ value }: voteParams): EncodeObject;
    msgExecLegacyContent({ value }: msgExecLegacyContentParams): EncodeObject;
    queryTallyResultRequest({ value }: queryTallyResultRequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
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
        CosmosGovV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
