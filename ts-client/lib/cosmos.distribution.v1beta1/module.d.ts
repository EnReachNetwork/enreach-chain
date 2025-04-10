import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { ValidatorSlashEventRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { MsgWithdrawDelegatorRewardResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgDepositValidatorRewardsPool } from "./types/cosmos/distribution/v1beta1/tx";
import { ValidatorAccumulatedCommission } from "./types/cosmos/distribution/v1beta1/distribution";
import { ValidatorSlashEvents } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryValidatorDistributionInfoRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegationRewardsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegatorWithdrawAddressRequest } from "./types/cosmos/distribution/v1beta1/query";
import { MsgWithdrawValidatorCommissionResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { QueryParamsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegationRewardsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegationTotalRewardsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegatorValidatorsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegatorWithdrawAddressResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryCommunityPoolRequest } from "./types/cosmos/distribution/v1beta1/query";
import { ValidatorOutstandingRewards } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryValidatorOutstandingRewardsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { ValidatorSlashEvent } from "./types/cosmos/distribution/v1beta1/distribution";
import { CommunityPoolSpendProposal } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryValidatorCommissionRequest } from "./types/cosmos/distribution/v1beta1/query";
import { ValidatorCurrentRewardsRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { DelegatorStartingInfoRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { MsgUpdateParamsResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgSetWithdrawAddressResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgUpdateParams } from "./types/cosmos/distribution/v1beta1/tx";
import { QueryValidatorOutstandingRewardsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { Params } from "./types/cosmos/distribution/v1beta1/distribution";
import { ValidatorCurrentRewards } from "./types/cosmos/distribution/v1beta1/distribution";
import { GenesisState } from "./types/cosmos/distribution/v1beta1/genesis";
import { FeePool } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryValidatorSlashesRequest } from "./types/cosmos/distribution/v1beta1/query";
import { CommunityPoolSpendProposalWithDeposit } from "./types/cosmos/distribution/v1beta1/distribution";
import { MsgWithdrawDelegatorReward } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgCommunityPoolSpend } from "./types/cosmos/distribution/v1beta1/tx";
import { ValidatorAccumulatedCommissionRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { MsgCommunityPoolSpendResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgDepositValidatorRewardsPoolResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { ValidatorHistoricalRewards } from "./types/cosmos/distribution/v1beta1/distribution";
import { DelegationDelegatorReward } from "./types/cosmos/distribution/v1beta1/distribution";
import { DelegatorWithdrawInfo } from "./types/cosmos/distribution/v1beta1/genesis";
import { ValidatorHistoricalRewardsRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { QueryParamsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryValidatorCommissionResponse } from "./types/cosmos/distribution/v1beta1/query";
import { DelegatorStartingInfo } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryValidatorDistributionInfoResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryValidatorSlashesResponse } from "./types/cosmos/distribution/v1beta1/query";
import { MsgSetWithdrawAddress } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgWithdrawValidatorCommission } from "./types/cosmos/distribution/v1beta1/tx";
import { QueryDelegationTotalRewardsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegatorValidatorsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryCommunityPoolResponse } from "./types/cosmos/distribution/v1beta1/query";
import { ValidatorOutstandingRewardsRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { MsgFundCommunityPoolResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgFundCommunityPool } from "./types/cosmos/distribution/v1beta1/tx";
export { ValidatorSlashEventRecord, MsgWithdrawDelegatorRewardResponse, MsgDepositValidatorRewardsPool, ValidatorAccumulatedCommission, ValidatorSlashEvents, QueryValidatorDistributionInfoRequest, QueryDelegationRewardsResponse, QueryDelegatorWithdrawAddressRequest, MsgWithdrawValidatorCommissionResponse, QueryParamsResponse, QueryDelegationRewardsRequest, QueryDelegationTotalRewardsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, ValidatorOutstandingRewards, QueryValidatorOutstandingRewardsRequest, ValidatorSlashEvent, CommunityPoolSpendProposal, QueryValidatorCommissionRequest, ValidatorCurrentRewardsRecord, DelegatorStartingInfoRecord, MsgUpdateParamsResponse, MsgSetWithdrawAddressResponse, MsgUpdateParams, QueryValidatorOutstandingRewardsResponse, Params, ValidatorCurrentRewards, GenesisState, FeePool, QueryValidatorSlashesRequest, CommunityPoolSpendProposalWithDeposit, MsgWithdrawDelegatorReward, MsgCommunityPoolSpend, ValidatorAccumulatedCommissionRecord, MsgCommunityPoolSpendResponse, MsgDepositValidatorRewardsPoolResponse, ValidatorHistoricalRewards, DelegationDelegatorReward, DelegatorWithdrawInfo, ValidatorHistoricalRewardsRecord, QueryParamsRequest, QueryValidatorCommissionResponse, DelegatorStartingInfo, QueryValidatorDistributionInfoResponse, QueryValidatorSlashesResponse, MsgSetWithdrawAddress, MsgWithdrawValidatorCommission, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryCommunityPoolResponse, ValidatorOutstandingRewardsRecord, MsgFundCommunityPoolResponse, MsgFundCommunityPool };
type sendValidatorSlashEventRecordParams = {
    value: ValidatorSlashEventRecord;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawDelegatorRewardResponseParams = {
    value: MsgWithdrawDelegatorRewardResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositValidatorRewardsPoolParams = {
    value: MsgDepositValidatorRewardsPool;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorAccumulatedCommissionParams = {
    value: ValidatorAccumulatedCommission;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorSlashEventsParams = {
    value: ValidatorSlashEvents;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDistributionInfoRequestParams = {
    value: QueryValidatorDistributionInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationRewardsResponseParams = {
    value: QueryDelegationRewardsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorWithdrawAddressRequestParams = {
    value: QueryDelegatorWithdrawAddressRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawValidatorCommissionResponseParams = {
    value: MsgWithdrawValidatorCommissionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationRewardsRequestParams = {
    value: QueryDelegationRewardsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationTotalRewardsRequestParams = {
    value: QueryDelegationTotalRewardsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorWithdrawAddressResponseParams = {
    value: QueryDelegatorWithdrawAddressResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCommunityPoolRequestParams = {
    value: QueryCommunityPoolRequest;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorOutstandingRewardsParams = {
    value: ValidatorOutstandingRewards;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorOutstandingRewardsRequestParams = {
    value: QueryValidatorOutstandingRewardsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorSlashEventParams = {
    value: ValidatorSlashEvent;
    fee?: StdFee;
    memo?: string;
};
type sendCommunityPoolSpendProposalParams = {
    value: CommunityPoolSpendProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorCommissionRequestParams = {
    value: QueryValidatorCommissionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorCurrentRewardsRecordParams = {
    value: ValidatorCurrentRewardsRecord;
    fee?: StdFee;
    memo?: string;
};
type sendDelegatorStartingInfoRecordParams = {
    value: DelegatorStartingInfoRecord;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetWithdrawAddressResponseParams = {
    value: MsgSetWithdrawAddressResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorOutstandingRewardsResponseParams = {
    value: QueryValidatorOutstandingRewardsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorCurrentRewardsParams = {
    value: ValidatorCurrentRewards;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendFeePoolParams = {
    value: FeePool;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorSlashesRequestParams = {
    value: QueryValidatorSlashesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendCommunityPoolSpendProposalWithDepositParams = {
    value: CommunityPoolSpendProposalWithDeposit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawDelegatorRewardParams = {
    value: MsgWithdrawDelegatorReward;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCommunityPoolSpendParams = {
    value: MsgCommunityPoolSpend;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorAccumulatedCommissionRecordParams = {
    value: ValidatorAccumulatedCommissionRecord;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCommunityPoolSpendResponseParams = {
    value: MsgCommunityPoolSpendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositValidatorRewardsPoolResponseParams = {
    value: MsgDepositValidatorRewardsPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorHistoricalRewardsParams = {
    value: ValidatorHistoricalRewards;
    fee?: StdFee;
    memo?: string;
};
type sendDelegationDelegatorRewardParams = {
    value: DelegationDelegatorReward;
    fee?: StdFee;
    memo?: string;
};
type sendDelegatorWithdrawInfoParams = {
    value: DelegatorWithdrawInfo;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorHistoricalRewardsRecordParams = {
    value: ValidatorHistoricalRewardsRecord;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorCommissionResponseParams = {
    value: QueryValidatorCommissionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDelegatorStartingInfoParams = {
    value: DelegatorStartingInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDistributionInfoResponseParams = {
    value: QueryValidatorDistributionInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorSlashesResponseParams = {
    value: QueryValidatorSlashesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetWithdrawAddressParams = {
    value: MsgSetWithdrawAddress;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawValidatorCommissionParams = {
    value: MsgWithdrawValidatorCommission;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationTotalRewardsResponseParams = {
    value: QueryDelegationTotalRewardsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCommunityPoolResponseParams = {
    value: QueryCommunityPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorOutstandingRewardsRecordParams = {
    value: ValidatorOutstandingRewardsRecord;
    fee?: StdFee;
    memo?: string;
};
type sendMsgFundCommunityPoolResponseParams = {
    value: MsgFundCommunityPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgFundCommunityPoolParams = {
    value: MsgFundCommunityPool;
    fee?: StdFee;
    memo?: string;
};
type validatorSlashEventRecordParams = {
    value: ValidatorSlashEventRecord;
};
type msgWithdrawDelegatorRewardResponseParams = {
    value: MsgWithdrawDelegatorRewardResponse;
};
type msgDepositValidatorRewardsPoolParams = {
    value: MsgDepositValidatorRewardsPool;
};
type validatorAccumulatedCommissionParams = {
    value: ValidatorAccumulatedCommission;
};
type validatorSlashEventsParams = {
    value: ValidatorSlashEvents;
};
type queryValidatorDistributionInfoRequestParams = {
    value: QueryValidatorDistributionInfoRequest;
};
type queryDelegationRewardsResponseParams = {
    value: QueryDelegationRewardsResponse;
};
type queryDelegatorWithdrawAddressRequestParams = {
    value: QueryDelegatorWithdrawAddressRequest;
};
type msgWithdrawValidatorCommissionResponseParams = {
    value: MsgWithdrawValidatorCommissionResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryDelegationRewardsRequestParams = {
    value: QueryDelegationRewardsRequest;
};
type queryDelegationTotalRewardsRequestParams = {
    value: QueryDelegationTotalRewardsRequest;
};
type queryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
};
type queryDelegatorWithdrawAddressResponseParams = {
    value: QueryDelegatorWithdrawAddressResponse;
};
type queryCommunityPoolRequestParams = {
    value: QueryCommunityPoolRequest;
};
type validatorOutstandingRewardsParams = {
    value: ValidatorOutstandingRewards;
};
type queryValidatorOutstandingRewardsRequestParams = {
    value: QueryValidatorOutstandingRewardsRequest;
};
type validatorSlashEventParams = {
    value: ValidatorSlashEvent;
};
type communityPoolSpendProposalParams = {
    value: CommunityPoolSpendProposal;
};
type queryValidatorCommissionRequestParams = {
    value: QueryValidatorCommissionRequest;
};
type validatorCurrentRewardsRecordParams = {
    value: ValidatorCurrentRewardsRecord;
};
type delegatorStartingInfoRecordParams = {
    value: DelegatorStartingInfoRecord;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgSetWithdrawAddressResponseParams = {
    value: MsgSetWithdrawAddressResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryValidatorOutstandingRewardsResponseParams = {
    value: QueryValidatorOutstandingRewardsResponse;
};
type paramsParams = {
    value: Params;
};
type validatorCurrentRewardsParams = {
    value: ValidatorCurrentRewards;
};
type genesisStateParams = {
    value: GenesisState;
};
type feePoolParams = {
    value: FeePool;
};
type queryValidatorSlashesRequestParams = {
    value: QueryValidatorSlashesRequest;
};
type communityPoolSpendProposalWithDepositParams = {
    value: CommunityPoolSpendProposalWithDeposit;
};
type msgWithdrawDelegatorRewardParams = {
    value: MsgWithdrawDelegatorReward;
};
type msgCommunityPoolSpendParams = {
    value: MsgCommunityPoolSpend;
};
type validatorAccumulatedCommissionRecordParams = {
    value: ValidatorAccumulatedCommissionRecord;
};
type msgCommunityPoolSpendResponseParams = {
    value: MsgCommunityPoolSpendResponse;
};
type msgDepositValidatorRewardsPoolResponseParams = {
    value: MsgDepositValidatorRewardsPoolResponse;
};
type validatorHistoricalRewardsParams = {
    value: ValidatorHistoricalRewards;
};
type delegationDelegatorRewardParams = {
    value: DelegationDelegatorReward;
};
type delegatorWithdrawInfoParams = {
    value: DelegatorWithdrawInfo;
};
type validatorHistoricalRewardsRecordParams = {
    value: ValidatorHistoricalRewardsRecord;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryValidatorCommissionResponseParams = {
    value: QueryValidatorCommissionResponse;
};
type delegatorStartingInfoParams = {
    value: DelegatorStartingInfo;
};
type queryValidatorDistributionInfoResponseParams = {
    value: QueryValidatorDistributionInfoResponse;
};
type queryValidatorSlashesResponseParams = {
    value: QueryValidatorSlashesResponse;
};
type msgSetWithdrawAddressParams = {
    value: MsgSetWithdrawAddress;
};
type msgWithdrawValidatorCommissionParams = {
    value: MsgWithdrawValidatorCommission;
};
type queryDelegationTotalRewardsResponseParams = {
    value: QueryDelegationTotalRewardsResponse;
};
type queryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
};
type queryCommunityPoolResponseParams = {
    value: QueryCommunityPoolResponse;
};
type validatorOutstandingRewardsRecordParams = {
    value: ValidatorOutstandingRewardsRecord;
};
type msgFundCommunityPoolResponseParams = {
    value: MsgFundCommunityPoolResponse;
};
type msgFundCommunityPoolParams = {
    value: MsgFundCommunityPool;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendValidatorSlashEventRecord({ value, fee, memo }: sendValidatorSlashEventRecordParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawDelegatorRewardResponse({ value, fee, memo }: sendMsgWithdrawDelegatorRewardResponseParams): Promise<DeliverTxResponse>;
    sendMsgDepositValidatorRewardsPool({ value, fee, memo }: sendMsgDepositValidatorRewardsPoolParams): Promise<DeliverTxResponse>;
    sendValidatorAccumulatedCommission({ value, fee, memo }: sendValidatorAccumulatedCommissionParams): Promise<DeliverTxResponse>;
    sendValidatorSlashEvents({ value, fee, memo }: sendValidatorSlashEventsParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDistributionInfoRequest({ value, fee, memo }: sendQueryValidatorDistributionInfoRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegationRewardsResponse({ value, fee, memo }: sendQueryDelegationRewardsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorWithdrawAddressRequest({ value, fee, memo }: sendQueryDelegatorWithdrawAddressRequestParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawValidatorCommissionResponse({ value, fee, memo }: sendMsgWithdrawValidatorCommissionResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegationRewardsRequest({ value, fee, memo }: sendQueryDelegationRewardsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegationTotalRewardsRequest({ value, fee, memo }: sendQueryDelegationTotalRewardsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsResponse({ value, fee, memo }: sendQueryDelegatorValidatorsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorWithdrawAddressResponse({ value, fee, memo }: sendQueryDelegatorWithdrawAddressResponseParams): Promise<DeliverTxResponse>;
    sendQueryCommunityPoolRequest({ value, fee, memo }: sendQueryCommunityPoolRequestParams): Promise<DeliverTxResponse>;
    sendValidatorOutstandingRewards({ value, fee, memo }: sendValidatorOutstandingRewardsParams): Promise<DeliverTxResponse>;
    sendQueryValidatorOutstandingRewardsRequest({ value, fee, memo }: sendQueryValidatorOutstandingRewardsRequestParams): Promise<DeliverTxResponse>;
    sendValidatorSlashEvent({ value, fee, memo }: sendValidatorSlashEventParams): Promise<DeliverTxResponse>;
    sendCommunityPoolSpendProposal({ value, fee, memo }: sendCommunityPoolSpendProposalParams): Promise<DeliverTxResponse>;
    sendQueryValidatorCommissionRequest({ value, fee, memo }: sendQueryValidatorCommissionRequestParams): Promise<DeliverTxResponse>;
    sendValidatorCurrentRewardsRecord({ value, fee, memo }: sendValidatorCurrentRewardsRecordParams): Promise<DeliverTxResponse>;
    sendDelegatorStartingInfoRecord({ value, fee, memo }: sendDelegatorStartingInfoRecordParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgSetWithdrawAddressResponse({ value, fee, memo }: sendMsgSetWithdrawAddressResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryValidatorOutstandingRewardsResponse({ value, fee, memo }: sendQueryValidatorOutstandingRewardsResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendValidatorCurrentRewards({ value, fee, memo }: sendValidatorCurrentRewardsParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendFeePool({ value, fee, memo }: sendFeePoolParams): Promise<DeliverTxResponse>;
    sendQueryValidatorSlashesRequest({ value, fee, memo }: sendQueryValidatorSlashesRequestParams): Promise<DeliverTxResponse>;
    sendCommunityPoolSpendProposalWithDeposit({ value, fee, memo }: sendCommunityPoolSpendProposalWithDepositParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawDelegatorReward({ value, fee, memo }: sendMsgWithdrawDelegatorRewardParams): Promise<DeliverTxResponse>;
    sendMsgCommunityPoolSpend({ value, fee, memo }: sendMsgCommunityPoolSpendParams): Promise<DeliverTxResponse>;
    sendValidatorAccumulatedCommissionRecord({ value, fee, memo }: sendValidatorAccumulatedCommissionRecordParams): Promise<DeliverTxResponse>;
    sendMsgCommunityPoolSpendResponse({ value, fee, memo }: sendMsgCommunityPoolSpendResponseParams): Promise<DeliverTxResponse>;
    sendMsgDepositValidatorRewardsPoolResponse({ value, fee, memo }: sendMsgDepositValidatorRewardsPoolResponseParams): Promise<DeliverTxResponse>;
    sendValidatorHistoricalRewards({ value, fee, memo }: sendValidatorHistoricalRewardsParams): Promise<DeliverTxResponse>;
    sendDelegationDelegatorReward({ value, fee, memo }: sendDelegationDelegatorRewardParams): Promise<DeliverTxResponse>;
    sendDelegatorWithdrawInfo({ value, fee, memo }: sendDelegatorWithdrawInfoParams): Promise<DeliverTxResponse>;
    sendValidatorHistoricalRewardsRecord({ value, fee, memo }: sendValidatorHistoricalRewardsRecordParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryValidatorCommissionResponse({ value, fee, memo }: sendQueryValidatorCommissionResponseParams): Promise<DeliverTxResponse>;
    sendDelegatorStartingInfo({ value, fee, memo }: sendDelegatorStartingInfoParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDistributionInfoResponse({ value, fee, memo }: sendQueryValidatorDistributionInfoResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorSlashesResponse({ value, fee, memo }: sendQueryValidatorSlashesResponseParams): Promise<DeliverTxResponse>;
    sendMsgSetWithdrawAddress({ value, fee, memo }: sendMsgSetWithdrawAddressParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawValidatorCommission({ value, fee, memo }: sendMsgWithdrawValidatorCommissionParams): Promise<DeliverTxResponse>;
    sendQueryDelegationTotalRewardsResponse({ value, fee, memo }: sendQueryDelegationTotalRewardsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsRequest({ value, fee, memo }: sendQueryDelegatorValidatorsRequestParams): Promise<DeliverTxResponse>;
    sendQueryCommunityPoolResponse({ value, fee, memo }: sendQueryCommunityPoolResponseParams): Promise<DeliverTxResponse>;
    sendValidatorOutstandingRewardsRecord({ value, fee, memo }: sendValidatorOutstandingRewardsRecordParams): Promise<DeliverTxResponse>;
    sendMsgFundCommunityPoolResponse({ value, fee, memo }: sendMsgFundCommunityPoolResponseParams): Promise<DeliverTxResponse>;
    sendMsgFundCommunityPool({ value, fee, memo }: sendMsgFundCommunityPoolParams): Promise<DeliverTxResponse>;
    validatorSlashEventRecord({ value }: validatorSlashEventRecordParams): EncodeObject;
    msgWithdrawDelegatorRewardResponse({ value }: msgWithdrawDelegatorRewardResponseParams): EncodeObject;
    msgDepositValidatorRewardsPool({ value }: msgDepositValidatorRewardsPoolParams): EncodeObject;
    validatorAccumulatedCommission({ value }: validatorAccumulatedCommissionParams): EncodeObject;
    validatorSlashEvents({ value }: validatorSlashEventsParams): EncodeObject;
    queryValidatorDistributionInfoRequest({ value }: queryValidatorDistributionInfoRequestParams): EncodeObject;
    queryDelegationRewardsResponse({ value }: queryDelegationRewardsResponseParams): EncodeObject;
    queryDelegatorWithdrawAddressRequest({ value }: queryDelegatorWithdrawAddressRequestParams): EncodeObject;
    msgWithdrawValidatorCommissionResponse({ value }: msgWithdrawValidatorCommissionResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryDelegationRewardsRequest({ value }: queryDelegationRewardsRequestParams): EncodeObject;
    queryDelegationTotalRewardsRequest({ value }: queryDelegationTotalRewardsRequestParams): EncodeObject;
    queryDelegatorValidatorsResponse({ value }: queryDelegatorValidatorsResponseParams): EncodeObject;
    queryDelegatorWithdrawAddressResponse({ value }: queryDelegatorWithdrawAddressResponseParams): EncodeObject;
    queryCommunityPoolRequest({ value }: queryCommunityPoolRequestParams): EncodeObject;
    validatorOutstandingRewards({ value }: validatorOutstandingRewardsParams): EncodeObject;
    queryValidatorOutstandingRewardsRequest({ value }: queryValidatorOutstandingRewardsRequestParams): EncodeObject;
    validatorSlashEvent({ value }: validatorSlashEventParams): EncodeObject;
    communityPoolSpendProposal({ value }: communityPoolSpendProposalParams): EncodeObject;
    queryValidatorCommissionRequest({ value }: queryValidatorCommissionRequestParams): EncodeObject;
    validatorCurrentRewardsRecord({ value }: validatorCurrentRewardsRecordParams): EncodeObject;
    delegatorStartingInfoRecord({ value }: delegatorStartingInfoRecordParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgSetWithdrawAddressResponse({ value }: msgSetWithdrawAddressResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryValidatorOutstandingRewardsResponse({ value }: queryValidatorOutstandingRewardsResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    validatorCurrentRewards({ value }: validatorCurrentRewardsParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    feePool({ value }: feePoolParams): EncodeObject;
    queryValidatorSlashesRequest({ value }: queryValidatorSlashesRequestParams): EncodeObject;
    communityPoolSpendProposalWithDeposit({ value }: communityPoolSpendProposalWithDepositParams): EncodeObject;
    msgWithdrawDelegatorReward({ value }: msgWithdrawDelegatorRewardParams): EncodeObject;
    msgCommunityPoolSpend({ value }: msgCommunityPoolSpendParams): EncodeObject;
    validatorAccumulatedCommissionRecord({ value }: validatorAccumulatedCommissionRecordParams): EncodeObject;
    msgCommunityPoolSpendResponse({ value }: msgCommunityPoolSpendResponseParams): EncodeObject;
    msgDepositValidatorRewardsPoolResponse({ value }: msgDepositValidatorRewardsPoolResponseParams): EncodeObject;
    validatorHistoricalRewards({ value }: validatorHistoricalRewardsParams): EncodeObject;
    delegationDelegatorReward({ value }: delegationDelegatorRewardParams): EncodeObject;
    delegatorWithdrawInfo({ value }: delegatorWithdrawInfoParams): EncodeObject;
    validatorHistoricalRewardsRecord({ value }: validatorHistoricalRewardsRecordParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryValidatorCommissionResponse({ value }: queryValidatorCommissionResponseParams): EncodeObject;
    delegatorStartingInfo({ value }: delegatorStartingInfoParams): EncodeObject;
    queryValidatorDistributionInfoResponse({ value }: queryValidatorDistributionInfoResponseParams): EncodeObject;
    queryValidatorSlashesResponse({ value }: queryValidatorSlashesResponseParams): EncodeObject;
    msgSetWithdrawAddress({ value }: msgSetWithdrawAddressParams): EncodeObject;
    msgWithdrawValidatorCommission({ value }: msgWithdrawValidatorCommissionParams): EncodeObject;
    queryDelegationTotalRewardsResponse({ value }: queryDelegationTotalRewardsResponseParams): EncodeObject;
    queryDelegatorValidatorsRequest({ value }: queryDelegatorValidatorsRequestParams): EncodeObject;
    queryCommunityPoolResponse({ value }: queryCommunityPoolResponseParams): EncodeObject;
    validatorOutstandingRewardsRecord({ value }: validatorOutstandingRewardsRecordParams): EncodeObject;
    msgFundCommunityPoolResponse({ value }: msgFundCommunityPoolResponseParams): EncodeObject;
    msgFundCommunityPool({ value }: msgFundCommunityPoolParams): EncodeObject;
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
        CosmosDistributionV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
