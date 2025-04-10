import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryConstitutionRequest } from "./types/cosmos/gov/v1/query";
import { DepositParams } from "./types/cosmos/gov/v1/gov";
import { VotingParams } from "./types/cosmos/gov/v1/gov";
import { TallyParams } from "./types/cosmos/gov/v1/gov";
import { QueryVotesResponse } from "./types/cosmos/gov/v1/query";
import { QueryParamsResponse } from "./types/cosmos/gov/v1/query";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1/tx";
import { QueryProposalsRequest } from "./types/cosmos/gov/v1/query";
import { QueryDepositsResponse } from "./types/cosmos/gov/v1/query";
import { QueryVotesRequest } from "./types/cosmos/gov/v1/query";
import { MsgVoteWeightedResponse } from "./types/cosmos/gov/v1/tx";
import { MsgDeposit } from "./types/cosmos/gov/v1/tx";
import { QueryVoteRequest } from "./types/cosmos/gov/v1/query";
import { QueryDepositRequest } from "./types/cosmos/gov/v1/query";
import { MsgUpdateParams } from "./types/cosmos/gov/v1/tx";
import { QueryParamsRequest } from "./types/cosmos/gov/v1/query";
import { QueryDepositsRequest } from "./types/cosmos/gov/v1/query";
import { QueryProposalsResponse } from "./types/cosmos/gov/v1/query";
import { QueryTallyResultRequest } from "./types/cosmos/gov/v1/query";
import { MsgSubmitProposalResponse } from "./types/cosmos/gov/v1/tx";
import { Deposit } from "./types/cosmos/gov/v1/gov";
import { TallyResult } from "./types/cosmos/gov/v1/gov";
import { QueryProposalResponse } from "./types/cosmos/gov/v1/query";
import { MsgVote } from "./types/cosmos/gov/v1/tx";
import { MsgVoteWeighted } from "./types/cosmos/gov/v1/tx";
import { GenesisState } from "./types/cosmos/gov/v1/genesis";
import { QueryConstitutionResponse } from "./types/cosmos/gov/v1/query";
import { MsgDepositResponse } from "./types/cosmos/gov/v1/tx";
import { MsgCancelProposal } from "./types/cosmos/gov/v1/tx";
import { MsgCancelProposalResponse } from "./types/cosmos/gov/v1/tx";
import { Vote } from "./types/cosmos/gov/v1/gov";
import { MsgExecLegacyContent } from "./types/cosmos/gov/v1/tx";
import { QueryVoteResponse } from "./types/cosmos/gov/v1/query";
import { Proposal } from "./types/cosmos/gov/v1/gov";
import { WeightedVoteOption } from "./types/cosmos/gov/v1/gov";
import { MsgExecLegacyContentResponse } from "./types/cosmos/gov/v1/tx";
import { MsgVoteResponse } from "./types/cosmos/gov/v1/tx";
import { QueryDepositResponse } from "./types/cosmos/gov/v1/query";
import { MsgUpdateParamsResponse } from "./types/cosmos/gov/v1/tx";
import { Params } from "./types/cosmos/gov/v1/gov";
import { QueryProposalRequest } from "./types/cosmos/gov/v1/query";
import { QueryTallyResultResponse } from "./types/cosmos/gov/v1/query";
export { QueryConstitutionRequest, DepositParams, VotingParams, TallyParams, QueryVotesResponse, QueryParamsResponse, MsgSubmitProposal, QueryProposalsRequest, QueryDepositsResponse, QueryVotesRequest, MsgVoteWeightedResponse, MsgDeposit, QueryVoteRequest, QueryDepositRequest, MsgUpdateParams, QueryParamsRequest, QueryDepositsRequest, QueryProposalsResponse, QueryTallyResultRequest, MsgSubmitProposalResponse, Deposit, TallyResult, QueryProposalResponse, MsgVote, MsgVoteWeighted, GenesisState, QueryConstitutionResponse, MsgDepositResponse, MsgCancelProposal, MsgCancelProposalResponse, Vote, MsgExecLegacyContent, QueryVoteResponse, Proposal, WeightedVoteOption, MsgExecLegacyContentResponse, MsgVoteResponse, QueryDepositResponse, MsgUpdateParamsResponse, Params, QueryProposalRequest, QueryTallyResultResponse };
type sendQueryConstitutionRequestParams = {
    value: QueryConstitutionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendDepositParamsParams = {
    value: DepositParams;
    fee?: StdFee;
    memo?: string;
};
type sendVotingParamsParams = {
    value: VotingParams;
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
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalParams = {
    value: MsgSubmitProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsRequestParams = {
    value: QueryProposalsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositsResponseParams = {
    value: QueryDepositsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesRequestParams = {
    value: QueryVotesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteWeightedResponseParams = {
    value: MsgVoteWeightedResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositParams = {
    value: MsgDeposit;
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
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositsRequestParams = {
    value: QueryDepositsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsResponseParams = {
    value: QueryProposalsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDepositParams = {
    value: Deposit;
    fee?: StdFee;
    memo?: string;
};
type sendTallyResultParams = {
    value: TallyResult;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalResponseParams = {
    value: QueryProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteParams = {
    value: MsgVote;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteWeightedParams = {
    value: MsgVoteWeighted;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConstitutionResponseParams = {
    value: QueryConstitutionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositResponseParams = {
    value: MsgDepositResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelProposalParams = {
    value: MsgCancelProposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelProposalResponseParams = {
    value: MsgCancelProposalResponse;
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
type sendQueryVoteResponseParams = {
    value: QueryVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendProposalParams = {
    value: Proposal;
    fee?: StdFee;
    memo?: string;
};
type sendWeightedVoteOptionParams = {
    value: WeightedVoteOption;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecLegacyContentResponseParams = {
    value: MsgExecLegacyContentResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteResponseParams = {
    value: MsgVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositResponseParams = {
    value: QueryDepositResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalRequestParams = {
    value: QueryProposalRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
    fee?: StdFee;
    memo?: string;
};
type queryConstitutionRequestParams = {
    value: QueryConstitutionRequest;
};
type depositParamsParams = {
    value: DepositParams;
};
type votingParamsParams = {
    value: VotingParams;
};
type tallyParamsParams = {
    value: TallyParams;
};
type queryVotesResponseParams = {
    value: QueryVotesResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgSubmitProposalParams = {
    value: MsgSubmitProposal;
};
type queryProposalsRequestParams = {
    value: QueryProposalsRequest;
};
type queryDepositsResponseParams = {
    value: QueryDepositsResponse;
};
type queryVotesRequestParams = {
    value: QueryVotesRequest;
};
type msgVoteWeightedResponseParams = {
    value: MsgVoteWeightedResponse;
};
type msgDepositParams = {
    value: MsgDeposit;
};
type queryVoteRequestParams = {
    value: QueryVoteRequest;
};
type queryDepositRequestParams = {
    value: QueryDepositRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryDepositsRequestParams = {
    value: QueryDepositsRequest;
};
type queryProposalsResponseParams = {
    value: QueryProposalsResponse;
};
type queryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
};
type msgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
};
type depositParams = {
    value: Deposit;
};
type tallyResultParams = {
    value: TallyResult;
};
type queryProposalResponseParams = {
    value: QueryProposalResponse;
};
type msgVoteParams = {
    value: MsgVote;
};
type msgVoteWeightedParams = {
    value: MsgVoteWeighted;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryConstitutionResponseParams = {
    value: QueryConstitutionResponse;
};
type msgDepositResponseParams = {
    value: MsgDepositResponse;
};
type msgCancelProposalParams = {
    value: MsgCancelProposal;
};
type msgCancelProposalResponseParams = {
    value: MsgCancelProposalResponse;
};
type voteParams = {
    value: Vote;
};
type msgExecLegacyContentParams = {
    value: MsgExecLegacyContent;
};
type queryVoteResponseParams = {
    value: QueryVoteResponse;
};
type proposalParams = {
    value: Proposal;
};
type weightedVoteOptionParams = {
    value: WeightedVoteOption;
};
type msgExecLegacyContentResponseParams = {
    value: MsgExecLegacyContentResponse;
};
type msgVoteResponseParams = {
    value: MsgVoteResponse;
};
type queryDepositResponseParams = {
    value: QueryDepositResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type paramsParams = {
    value: Params;
};
type queryProposalRequestParams = {
    value: QueryProposalRequest;
};
type queryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryConstitutionRequest({ value, fee, memo }: sendQueryConstitutionRequestParams): Promise<DeliverTxResponse>;
    sendDepositParams({ value, fee, memo }: sendDepositParamsParams): Promise<DeliverTxResponse>;
    sendVotingParams({ value, fee, memo }: sendVotingParamsParams): Promise<DeliverTxResponse>;
    sendTallyParams({ value, fee, memo }: sendTallyParamsParams): Promise<DeliverTxResponse>;
    sendQueryVotesResponse({ value, fee, memo }: sendQueryVotesResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse>;
    sendQueryProposalsRequest({ value, fee, memo }: sendQueryProposalsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDepositsResponse({ value, fee, memo }: sendQueryDepositsResponseParams): Promise<DeliverTxResponse>;
    sendQueryVotesRequest({ value, fee, memo }: sendQueryVotesRequestParams): Promise<DeliverTxResponse>;
    sendMsgVoteWeightedResponse({ value, fee, memo }: sendMsgVoteWeightedResponseParams): Promise<DeliverTxResponse>;
    sendMsgDeposit({ value, fee, memo }: sendMsgDepositParams): Promise<DeliverTxResponse>;
    sendQueryVoteRequest({ value, fee, memo }: sendQueryVoteRequestParams): Promise<DeliverTxResponse>;
    sendQueryDepositRequest({ value, fee, memo }: sendQueryDepositRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDepositsRequest({ value, fee, memo }: sendQueryDepositsRequestParams): Promise<DeliverTxResponse>;
    sendQueryProposalsResponse({ value, fee, memo }: sendQueryProposalsResponseParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultRequest({ value, fee, memo }: sendQueryTallyResultRequestParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposalResponse({ value, fee, memo }: sendMsgSubmitProposalResponseParams): Promise<DeliverTxResponse>;
    sendDeposit({ value, fee, memo }: sendDepositParams): Promise<DeliverTxResponse>;
    sendTallyResult({ value, fee, memo }: sendTallyResultParams): Promise<DeliverTxResponse>;
    sendQueryProposalResponse({ value, fee, memo }: sendQueryProposalResponseParams): Promise<DeliverTxResponse>;
    sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse>;
    sendMsgVoteWeighted({ value, fee, memo }: sendMsgVoteWeightedParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryConstitutionResponse({ value, fee, memo }: sendQueryConstitutionResponseParams): Promise<DeliverTxResponse>;
    sendMsgDepositResponse({ value, fee, memo }: sendMsgDepositResponseParams): Promise<DeliverTxResponse>;
    sendMsgCancelProposal({ value, fee, memo }: sendMsgCancelProposalParams): Promise<DeliverTxResponse>;
    sendMsgCancelProposalResponse({ value, fee, memo }: sendMsgCancelProposalResponseParams): Promise<DeliverTxResponse>;
    sendVote({ value, fee, memo }: sendVoteParams): Promise<DeliverTxResponse>;
    sendMsgExecLegacyContent({ value, fee, memo }: sendMsgExecLegacyContentParams): Promise<DeliverTxResponse>;
    sendQueryVoteResponse({ value, fee, memo }: sendQueryVoteResponseParams): Promise<DeliverTxResponse>;
    sendProposal({ value, fee, memo }: sendProposalParams): Promise<DeliverTxResponse>;
    sendWeightedVoteOption({ value, fee, memo }: sendWeightedVoteOptionParams): Promise<DeliverTxResponse>;
    sendMsgExecLegacyContentResponse({ value, fee, memo }: sendMsgExecLegacyContentResponseParams): Promise<DeliverTxResponse>;
    sendMsgVoteResponse({ value, fee, memo }: sendMsgVoteResponseParams): Promise<DeliverTxResponse>;
    sendQueryDepositResponse({ value, fee, memo }: sendQueryDepositResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryProposalRequest({ value, fee, memo }: sendQueryProposalRequestParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultResponse({ value, fee, memo }: sendQueryTallyResultResponseParams): Promise<DeliverTxResponse>;
    queryConstitutionRequest({ value }: queryConstitutionRequestParams): EncodeObject;
    depositParams({ value }: depositParamsParams): EncodeObject;
    votingParams({ value }: votingParamsParams): EncodeObject;
    tallyParams({ value }: tallyParamsParams): EncodeObject;
    queryVotesResponse({ value }: queryVotesResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject;
    queryProposalsRequest({ value }: queryProposalsRequestParams): EncodeObject;
    queryDepositsResponse({ value }: queryDepositsResponseParams): EncodeObject;
    queryVotesRequest({ value }: queryVotesRequestParams): EncodeObject;
    msgVoteWeightedResponse({ value }: msgVoteWeightedResponseParams): EncodeObject;
    msgDeposit({ value }: msgDepositParams): EncodeObject;
    queryVoteRequest({ value }: queryVoteRequestParams): EncodeObject;
    queryDepositRequest({ value }: queryDepositRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryDepositsRequest({ value }: queryDepositsRequestParams): EncodeObject;
    queryProposalsResponse({ value }: queryProposalsResponseParams): EncodeObject;
    queryTallyResultRequest({ value }: queryTallyResultRequestParams): EncodeObject;
    msgSubmitProposalResponse({ value }: msgSubmitProposalResponseParams): EncodeObject;
    deposit({ value }: depositParams): EncodeObject;
    tallyResult({ value }: tallyResultParams): EncodeObject;
    queryProposalResponse({ value }: queryProposalResponseParams): EncodeObject;
    msgVote({ value }: msgVoteParams): EncodeObject;
    msgVoteWeighted({ value }: msgVoteWeightedParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryConstitutionResponse({ value }: queryConstitutionResponseParams): EncodeObject;
    msgDepositResponse({ value }: msgDepositResponseParams): EncodeObject;
    msgCancelProposal({ value }: msgCancelProposalParams): EncodeObject;
    msgCancelProposalResponse({ value }: msgCancelProposalResponseParams): EncodeObject;
    vote({ value }: voteParams): EncodeObject;
    msgExecLegacyContent({ value }: msgExecLegacyContentParams): EncodeObject;
    queryVoteResponse({ value }: queryVoteResponseParams): EncodeObject;
    proposal({ value }: proposalParams): EncodeObject;
    weightedVoteOption({ value }: weightedVoteOptionParams): EncodeObject;
    msgExecLegacyContentResponse({ value }: msgExecLegacyContentResponseParams): EncodeObject;
    msgVoteResponse({ value }: msgVoteResponseParams): EncodeObject;
    queryDepositResponse({ value }: queryDepositResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryProposalRequest({ value }: queryProposalRequestParams): EncodeObject;
    queryTallyResultResponse({ value }: queryTallyResultResponseParams): EncodeObject;
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
