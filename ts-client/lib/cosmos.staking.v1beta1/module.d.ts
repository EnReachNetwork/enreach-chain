import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { Validator } from "./types/cosmos/staking/v1beta1/staking";
import { RedelegationEntryResponse } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryPoolResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgDelegate } from "./types/cosmos/staking/v1beta1/tx";
import { QueryValidatorUnbondingDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryUnbondingDelegationResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorUnbondingDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgUpdateParamsResponse } from "./types/cosmos/staking/v1beta1/tx";
import { QueryUnbondingDelegationRequest } from "./types/cosmos/staking/v1beta1/query";
import { GenesisState } from "./types/cosmos/staking/v1beta1/genesis";
import { MsgCancelUnbondingDelegationResponse } from "./types/cosmos/staking/v1beta1/tx";
import { StakeAuthorization } from "./types/cosmos/staking/v1beta1/authz";
import { RedelegationEntry } from "./types/cosmos/staking/v1beta1/staking";
import { RedelegationResponse } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorsRequest } from "./types/cosmos/staking/v1beta1/query";
import { MsgCancelUnbondingDelegation } from "./types/cosmos/staking/v1beta1/tx";
import { DVPair } from "./types/cosmos/staking/v1beta1/staking";
import { DVVTriplet } from "./types/cosmos/staking/v1beta1/staking";
import { DelegationResponse } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryValidatorResponse } from "./types/cosmos/staking/v1beta1/query";
import { Delegation } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryRedelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryHistoricalInfoResponse } from "./types/cosmos/staking/v1beta1/query";
import { DVVTriplets } from "./types/cosmos/staking/v1beta1/staking";
import { ValidatorUpdates } from "./types/cosmos/staking/v1beta1/staking";
import { StakeAuthorization_Validators } from "./types/cosmos/staking/v1beta1/authz";
import { QueryDelegatorValidatorsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryPoolRequest } from "./types/cosmos/staking/v1beta1/query";
import { MsgEditValidatorResponse } from "./types/cosmos/staking/v1beta1/tx";
import { MsgBeginRedelegate } from "./types/cosmos/staking/v1beta1/tx";
import { LastValidatorPower } from "./types/cosmos/staking/v1beta1/genesis";
import { QueryDelegationRequest } from "./types/cosmos/staking/v1beta1/query";
import { MsgDelegateResponse } from "./types/cosmos/staking/v1beta1/tx";
import { MsgUndelegateResponse } from "./types/cosmos/staking/v1beta1/tx";
import { MsgCreateValidator } from "./types/cosmos/staking/v1beta1/tx";
import { Params } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorUnbondingDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorUnbondingDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { CommissionRates } from "./types/cosmos/staking/v1beta1/staking";
import { Commission } from "./types/cosmos/staking/v1beta1/staking";
import { Description } from "./types/cosmos/staking/v1beta1/staking";
import { Redelegation } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryRedelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryHistoricalInfoRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryParamsResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgEditValidator } from "./types/cosmos/staking/v1beta1/tx";
import { UnbondingDelegationEntry } from "./types/cosmos/staking/v1beta1/staking";
import { QueryDelegatorValidatorRequest } from "./types/cosmos/staking/v1beta1/query";
import { MsgBeginRedelegateResponse } from "./types/cosmos/staking/v1beta1/tx";
import { QueryParamsRequest } from "./types/cosmos/staking/v1beta1/query";
import { MsgCreateValidatorResponse } from "./types/cosmos/staking/v1beta1/tx";
import { DVPairs } from "./types/cosmos/staking/v1beta1/staking";
import { MsgUndelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgUpdateParams } from "./types/cosmos/staking/v1beta1/tx";
import { HistoricalInfo } from "./types/cosmos/staking/v1beta1/staking";
import { ValAddresses } from "./types/cosmos/staking/v1beta1/staking";
import { UnbondingDelegation } from "./types/cosmos/staking/v1beta1/staking";
import { Pool } from "./types/cosmos/staking/v1beta1/staking";
import { QueryDelegationResponse } from "./types/cosmos/staking/v1beta1/query";
export { Validator, RedelegationEntryResponse, QueryValidatorDelegationsRequest, QueryPoolResponse, MsgDelegate, QueryValidatorUnbondingDelegationsRequest, QueryUnbondingDelegationResponse, QueryDelegatorUnbondingDelegationsResponse, MsgUpdateParamsResponse, QueryUnbondingDelegationRequest, GenesisState, MsgCancelUnbondingDelegationResponse, StakeAuthorization, RedelegationEntry, RedelegationResponse, QueryValidatorsRequest, MsgCancelUnbondingDelegation, DVPair, DVVTriplet, DelegationResponse, QueryValidatorRequest, QueryValidatorResponse, Delegation, QueryValidatorDelegationsResponse, QueryDelegatorDelegationsResponse, QueryRedelegationsResponse, QueryHistoricalInfoResponse, DVVTriplets, ValidatorUpdates, StakeAuthorization_Validators, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorResponse, QueryPoolRequest, MsgEditValidatorResponse, MsgBeginRedelegate, LastValidatorPower, QueryDelegationRequest, MsgDelegateResponse, MsgUndelegateResponse, MsgCreateValidator, Params, QueryValidatorUnbondingDelegationsResponse, QueryDelegatorDelegationsRequest, QueryDelegatorUnbondingDelegationsRequest, CommissionRates, Commission, Description, Redelegation, QueryValidatorsResponse, QueryRedelegationsRequest, QueryHistoricalInfoRequest, QueryParamsResponse, MsgEditValidator, UnbondingDelegationEntry, QueryDelegatorValidatorRequest, MsgBeginRedelegateResponse, QueryParamsRequest, MsgCreateValidatorResponse, DVPairs, MsgUndelegate, MsgUpdateParams, HistoricalInfo, ValAddresses, UnbondingDelegation, Pool, QueryDelegationResponse };
type sendValidatorParams = {
    value: Validator;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationEntryResponseParams = {
    value: RedelegationEntryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDelegationsRequestParams = {
    value: QueryValidatorDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPoolResponseParams = {
    value: QueryPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDelegateParams = {
    value: MsgDelegate;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorUnbondingDelegationsRequestParams = {
    value: QueryValidatorUnbondingDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnbondingDelegationResponseParams = {
    value: QueryUnbondingDelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorUnbondingDelegationsResponseParams = {
    value: QueryDelegatorUnbondingDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnbondingDelegationRequestParams = {
    value: QueryUnbondingDelegationRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelUnbondingDelegationResponseParams = {
    value: MsgCancelUnbondingDelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendStakeAuthorizationParams = {
    value: StakeAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationEntryParams = {
    value: RedelegationEntry;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationResponseParams = {
    value: RedelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorsRequestParams = {
    value: QueryValidatorsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelUnbondingDelegationParams = {
    value: MsgCancelUnbondingDelegation;
    fee?: StdFee;
    memo?: string;
};
type sendDVPairParams = {
    value: DVPair;
    fee?: StdFee;
    memo?: string;
};
type sendDVVTripletParams = {
    value: DVVTriplet;
    fee?: StdFee;
    memo?: string;
};
type sendDelegationResponseParams = {
    value: DelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorRequestParams = {
    value: QueryValidatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorResponseParams = {
    value: QueryValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDelegationParams = {
    value: Delegation;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDelegationsResponseParams = {
    value: QueryValidatorDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorDelegationsResponseParams = {
    value: QueryDelegatorDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryRedelegationsResponseParams = {
    value: QueryRedelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryHistoricalInfoResponseParams = {
    value: QueryHistoricalInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDVVTripletsParams = {
    value: DVVTriplets;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorUpdatesParams = {
    value: ValidatorUpdates;
    fee?: StdFee;
    memo?: string;
};
type sendStakeAuthorization_ValidatorsParams = {
    value: StakeAuthorization_Validators;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorResponseParams = {
    value: QueryDelegatorValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPoolRequestParams = {
    value: QueryPoolRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgEditValidatorResponseParams = {
    value: MsgEditValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBeginRedelegateParams = {
    value: MsgBeginRedelegate;
    fee?: StdFee;
    memo?: string;
};
type sendLastValidatorPowerParams = {
    value: LastValidatorPower;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationRequestParams = {
    value: QueryDelegationRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDelegateResponseParams = {
    value: MsgDelegateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUndelegateResponseParams = {
    value: MsgUndelegateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateValidatorParams = {
    value: MsgCreateValidator;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorUnbondingDelegationsResponseParams = {
    value: QueryValidatorUnbondingDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorDelegationsRequestParams = {
    value: QueryDelegatorDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorUnbondingDelegationsRequestParams = {
    value: QueryDelegatorUnbondingDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendCommissionRatesParams = {
    value: CommissionRates;
    fee?: StdFee;
    memo?: string;
};
type sendCommissionParams = {
    value: Commission;
    fee?: StdFee;
    memo?: string;
};
type sendDescriptionParams = {
    value: Description;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationParams = {
    value: Redelegation;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorsResponseParams = {
    value: QueryValidatorsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryRedelegationsRequestParams = {
    value: QueryRedelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryHistoricalInfoRequestParams = {
    value: QueryHistoricalInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgEditValidatorParams = {
    value: MsgEditValidator;
    fee?: StdFee;
    memo?: string;
};
type sendUnbondingDelegationEntryParams = {
    value: UnbondingDelegationEntry;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorRequestParams = {
    value: QueryDelegatorValidatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBeginRedelegateResponseParams = {
    value: MsgBeginRedelegateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateValidatorResponseParams = {
    value: MsgCreateValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDVPairsParams = {
    value: DVPairs;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUndelegateParams = {
    value: MsgUndelegate;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendHistoricalInfoParams = {
    value: HistoricalInfo;
    fee?: StdFee;
    memo?: string;
};
type sendValAddressesParams = {
    value: ValAddresses;
    fee?: StdFee;
    memo?: string;
};
type sendUnbondingDelegationParams = {
    value: UnbondingDelegation;
    fee?: StdFee;
    memo?: string;
};
type sendPoolParams = {
    value: Pool;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationResponseParams = {
    value: QueryDelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type validatorParams = {
    value: Validator;
};
type redelegationEntryResponseParams = {
    value: RedelegationEntryResponse;
};
type queryValidatorDelegationsRequestParams = {
    value: QueryValidatorDelegationsRequest;
};
type queryPoolResponseParams = {
    value: QueryPoolResponse;
};
type msgDelegateParams = {
    value: MsgDelegate;
};
type queryValidatorUnbondingDelegationsRequestParams = {
    value: QueryValidatorUnbondingDelegationsRequest;
};
type queryUnbondingDelegationResponseParams = {
    value: QueryUnbondingDelegationResponse;
};
type queryDelegatorUnbondingDelegationsResponseParams = {
    value: QueryDelegatorUnbondingDelegationsResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryUnbondingDelegationRequestParams = {
    value: QueryUnbondingDelegationRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgCancelUnbondingDelegationResponseParams = {
    value: MsgCancelUnbondingDelegationResponse;
};
type stakeAuthorizationParams = {
    value: StakeAuthorization;
};
type redelegationEntryParams = {
    value: RedelegationEntry;
};
type redelegationResponseParams = {
    value: RedelegationResponse;
};
type queryValidatorsRequestParams = {
    value: QueryValidatorsRequest;
};
type msgCancelUnbondingDelegationParams = {
    value: MsgCancelUnbondingDelegation;
};
type dvpairParams = {
    value: DVPair;
};
type dvvtripletParams = {
    value: DVVTriplet;
};
type delegationResponseParams = {
    value: DelegationResponse;
};
type queryValidatorRequestParams = {
    value: QueryValidatorRequest;
};
type queryValidatorResponseParams = {
    value: QueryValidatorResponse;
};
type delegationParams = {
    value: Delegation;
};
type queryValidatorDelegationsResponseParams = {
    value: QueryValidatorDelegationsResponse;
};
type queryDelegatorDelegationsResponseParams = {
    value: QueryDelegatorDelegationsResponse;
};
type queryRedelegationsResponseParams = {
    value: QueryRedelegationsResponse;
};
type queryHistoricalInfoResponseParams = {
    value: QueryHistoricalInfoResponse;
};
type dvvtripletsParams = {
    value: DVVTriplets;
};
type validatorUpdatesParams = {
    value: ValidatorUpdates;
};
type stakeAuthorizationValidatorsParams = {
    value: StakeAuthorization_Validators;
};
type queryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
};
type queryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
};
type queryDelegatorValidatorResponseParams = {
    value: QueryDelegatorValidatorResponse;
};
type queryPoolRequestParams = {
    value: QueryPoolRequest;
};
type msgEditValidatorResponseParams = {
    value: MsgEditValidatorResponse;
};
type msgBeginRedelegateParams = {
    value: MsgBeginRedelegate;
};
type lastValidatorPowerParams = {
    value: LastValidatorPower;
};
type queryDelegationRequestParams = {
    value: QueryDelegationRequest;
};
type msgDelegateResponseParams = {
    value: MsgDelegateResponse;
};
type msgUndelegateResponseParams = {
    value: MsgUndelegateResponse;
};
type msgCreateValidatorParams = {
    value: MsgCreateValidator;
};
type paramsParams = {
    value: Params;
};
type queryValidatorUnbondingDelegationsResponseParams = {
    value: QueryValidatorUnbondingDelegationsResponse;
};
type queryDelegatorDelegationsRequestParams = {
    value: QueryDelegatorDelegationsRequest;
};
type queryDelegatorUnbondingDelegationsRequestParams = {
    value: QueryDelegatorUnbondingDelegationsRequest;
};
type commissionRatesParams = {
    value: CommissionRates;
};
type commissionParams = {
    value: Commission;
};
type descriptionParams = {
    value: Description;
};
type redelegationParams = {
    value: Redelegation;
};
type queryValidatorsResponseParams = {
    value: QueryValidatorsResponse;
};
type queryRedelegationsRequestParams = {
    value: QueryRedelegationsRequest;
};
type queryHistoricalInfoRequestParams = {
    value: QueryHistoricalInfoRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgEditValidatorParams = {
    value: MsgEditValidator;
};
type unbondingDelegationEntryParams = {
    value: UnbondingDelegationEntry;
};
type queryDelegatorValidatorRequestParams = {
    value: QueryDelegatorValidatorRequest;
};
type msgBeginRedelegateResponseParams = {
    value: MsgBeginRedelegateResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type msgCreateValidatorResponseParams = {
    value: MsgCreateValidatorResponse;
};
type dvpairsParams = {
    value: DVPairs;
};
type msgUndelegateParams = {
    value: MsgUndelegate;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type historicalInfoParams = {
    value: HistoricalInfo;
};
type valAddressesParams = {
    value: ValAddresses;
};
type unbondingDelegationParams = {
    value: UnbondingDelegation;
};
type poolParams = {
    value: Pool;
};
type queryDelegationResponseParams = {
    value: QueryDelegationResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendValidator({ value, fee, memo }: sendValidatorParams): Promise<DeliverTxResponse>;
    sendRedelegationEntryResponse({ value, fee, memo }: sendRedelegationEntryResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDelegationsRequest({ value, fee, memo }: sendQueryValidatorDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryPoolResponse({ value, fee, memo }: sendQueryPoolResponseParams): Promise<DeliverTxResponse>;
    sendMsgDelegate({ value, fee, memo }: sendMsgDelegateParams): Promise<DeliverTxResponse>;
    sendQueryValidatorUnbondingDelegationsRequest({ value, fee, memo }: sendQueryValidatorUnbondingDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryUnbondingDelegationResponse({ value, fee, memo }: sendQueryUnbondingDelegationResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorUnbondingDelegationsResponse({ value, fee, memo }: sendQueryDelegatorUnbondingDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryUnbondingDelegationRequest({ value, fee, memo }: sendQueryUnbondingDelegationRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgCancelUnbondingDelegationResponse({ value, fee, memo }: sendMsgCancelUnbondingDelegationResponseParams): Promise<DeliverTxResponse>;
    sendStakeAuthorization({ value, fee, memo }: sendStakeAuthorizationParams): Promise<DeliverTxResponse>;
    sendRedelegationEntry({ value, fee, memo }: sendRedelegationEntryParams): Promise<DeliverTxResponse>;
    sendRedelegationResponse({ value, fee, memo }: sendRedelegationResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorsRequest({ value, fee, memo }: sendQueryValidatorsRequestParams): Promise<DeliverTxResponse>;
    sendMsgCancelUnbondingDelegation({ value, fee, memo }: sendMsgCancelUnbondingDelegationParams): Promise<DeliverTxResponse>;
    sendDVPair({ value, fee, memo }: sendDVPairParams): Promise<DeliverTxResponse>;
    sendDVVTriplet({ value, fee, memo }: sendDVVTripletParams): Promise<DeliverTxResponse>;
    sendDelegationResponse({ value, fee, memo }: sendDelegationResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorRequest({ value, fee, memo }: sendQueryValidatorRequestParams): Promise<DeliverTxResponse>;
    sendQueryValidatorResponse({ value, fee, memo }: sendQueryValidatorResponseParams): Promise<DeliverTxResponse>;
    sendDelegation({ value, fee, memo }: sendDelegationParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDelegationsResponse({ value, fee, memo }: sendQueryValidatorDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorDelegationsResponse({ value, fee, memo }: sendQueryDelegatorDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryRedelegationsResponse({ value, fee, memo }: sendQueryRedelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryHistoricalInfoResponse({ value, fee, memo }: sendQueryHistoricalInfoResponseParams): Promise<DeliverTxResponse>;
    sendDVVTriplets({ value, fee, memo }: sendDVVTripletsParams): Promise<DeliverTxResponse>;
    sendValidatorUpdates({ value, fee, memo }: sendValidatorUpdatesParams): Promise<DeliverTxResponse>;
    sendStakeAuthorization_Validators({ value, fee, memo }: sendStakeAuthorization_ValidatorsParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsRequest({ value, fee, memo }: sendQueryDelegatorValidatorsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsResponse({ value, fee, memo }: sendQueryDelegatorValidatorsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorResponse({ value, fee, memo }: sendQueryDelegatorValidatorResponseParams): Promise<DeliverTxResponse>;
    sendQueryPoolRequest({ value, fee, memo }: sendQueryPoolRequestParams): Promise<DeliverTxResponse>;
    sendMsgEditValidatorResponse({ value, fee, memo }: sendMsgEditValidatorResponseParams): Promise<DeliverTxResponse>;
    sendMsgBeginRedelegate({ value, fee, memo }: sendMsgBeginRedelegateParams): Promise<DeliverTxResponse>;
    sendLastValidatorPower({ value, fee, memo }: sendLastValidatorPowerParams): Promise<DeliverTxResponse>;
    sendQueryDelegationRequest({ value, fee, memo }: sendQueryDelegationRequestParams): Promise<DeliverTxResponse>;
    sendMsgDelegateResponse({ value, fee, memo }: sendMsgDelegateResponseParams): Promise<DeliverTxResponse>;
    sendMsgUndelegateResponse({ value, fee, memo }: sendMsgUndelegateResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateValidator({ value, fee, memo }: sendMsgCreateValidatorParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryValidatorUnbondingDelegationsResponse({ value, fee, memo }: sendQueryValidatorUnbondingDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorDelegationsRequest({ value, fee, memo }: sendQueryDelegatorDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorUnbondingDelegationsRequest({ value, fee, memo }: sendQueryDelegatorUnbondingDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendCommissionRates({ value, fee, memo }: sendCommissionRatesParams): Promise<DeliverTxResponse>;
    sendCommission({ value, fee, memo }: sendCommissionParams): Promise<DeliverTxResponse>;
    sendDescription({ value, fee, memo }: sendDescriptionParams): Promise<DeliverTxResponse>;
    sendRedelegation({ value, fee, memo }: sendRedelegationParams): Promise<DeliverTxResponse>;
    sendQueryValidatorsResponse({ value, fee, memo }: sendQueryValidatorsResponseParams): Promise<DeliverTxResponse>;
    sendQueryRedelegationsRequest({ value, fee, memo }: sendQueryRedelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryHistoricalInfoRequest({ value, fee, memo }: sendQueryHistoricalInfoRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgEditValidator({ value, fee, memo }: sendMsgEditValidatorParams): Promise<DeliverTxResponse>;
    sendUnbondingDelegationEntry({ value, fee, memo }: sendUnbondingDelegationEntryParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorRequest({ value, fee, memo }: sendQueryDelegatorValidatorRequestParams): Promise<DeliverTxResponse>;
    sendMsgBeginRedelegateResponse({ value, fee, memo }: sendMsgBeginRedelegateResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateValidatorResponse({ value, fee, memo }: sendMsgCreateValidatorResponseParams): Promise<DeliverTxResponse>;
    sendDVPairs({ value, fee, memo }: sendDVPairsParams): Promise<DeliverTxResponse>;
    sendMsgUndelegate({ value, fee, memo }: sendMsgUndelegateParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendHistoricalInfo({ value, fee, memo }: sendHistoricalInfoParams): Promise<DeliverTxResponse>;
    sendValAddresses({ value, fee, memo }: sendValAddressesParams): Promise<DeliverTxResponse>;
    sendUnbondingDelegation({ value, fee, memo }: sendUnbondingDelegationParams): Promise<DeliverTxResponse>;
    sendPool({ value, fee, memo }: sendPoolParams): Promise<DeliverTxResponse>;
    sendQueryDelegationResponse({ value, fee, memo }: sendQueryDelegationResponseParams): Promise<DeliverTxResponse>;
    validator({ value }: validatorParams): EncodeObject;
    redelegationEntryResponse({ value }: redelegationEntryResponseParams): EncodeObject;
    queryValidatorDelegationsRequest({ value }: queryValidatorDelegationsRequestParams): EncodeObject;
    queryPoolResponse({ value }: queryPoolResponseParams): EncodeObject;
    msgDelegate({ value }: msgDelegateParams): EncodeObject;
    queryValidatorUnbondingDelegationsRequest({ value }: queryValidatorUnbondingDelegationsRequestParams): EncodeObject;
    queryUnbondingDelegationResponse({ value }: queryUnbondingDelegationResponseParams): EncodeObject;
    queryDelegatorUnbondingDelegationsResponse({ value }: queryDelegatorUnbondingDelegationsResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryUnbondingDelegationRequest({ value }: queryUnbondingDelegationRequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgCancelUnbondingDelegationResponse({ value }: msgCancelUnbondingDelegationResponseParams): EncodeObject;
    stakeAuthorization({ value }: stakeAuthorizationParams): EncodeObject;
    redelegationEntry({ value }: redelegationEntryParams): EncodeObject;
    redelegationResponse({ value }: redelegationResponseParams): EncodeObject;
    queryValidatorsRequest({ value }: queryValidatorsRequestParams): EncodeObject;
    msgCancelUnbondingDelegation({ value }: msgCancelUnbondingDelegationParams): EncodeObject;
    dvpair({ value }: dvpairParams): EncodeObject;
    dvvtriplet({ value }: dvvtripletParams): EncodeObject;
    delegationResponse({ value }: delegationResponseParams): EncodeObject;
    queryValidatorRequest({ value }: queryValidatorRequestParams): EncodeObject;
    queryValidatorResponse({ value }: queryValidatorResponseParams): EncodeObject;
    delegation({ value }: delegationParams): EncodeObject;
    queryValidatorDelegationsResponse({ value }: queryValidatorDelegationsResponseParams): EncodeObject;
    queryDelegatorDelegationsResponse({ value }: queryDelegatorDelegationsResponseParams): EncodeObject;
    queryRedelegationsResponse({ value }: queryRedelegationsResponseParams): EncodeObject;
    queryHistoricalInfoResponse({ value }: queryHistoricalInfoResponseParams): EncodeObject;
    dvvtriplets({ value }: dvvtripletsParams): EncodeObject;
    validatorUpdates({ value }: validatorUpdatesParams): EncodeObject;
    stakeAuthorizationValidators({ value }: stakeAuthorizationValidatorsParams): EncodeObject;
    queryDelegatorValidatorsRequest({ value }: queryDelegatorValidatorsRequestParams): EncodeObject;
    queryDelegatorValidatorsResponse({ value }: queryDelegatorValidatorsResponseParams): EncodeObject;
    queryDelegatorValidatorResponse({ value }: queryDelegatorValidatorResponseParams): EncodeObject;
    queryPoolRequest({ value }: queryPoolRequestParams): EncodeObject;
    msgEditValidatorResponse({ value }: msgEditValidatorResponseParams): EncodeObject;
    msgBeginRedelegate({ value }: msgBeginRedelegateParams): EncodeObject;
    lastValidatorPower({ value }: lastValidatorPowerParams): EncodeObject;
    queryDelegationRequest({ value }: queryDelegationRequestParams): EncodeObject;
    msgDelegateResponse({ value }: msgDelegateResponseParams): EncodeObject;
    msgUndelegateResponse({ value }: msgUndelegateResponseParams): EncodeObject;
    msgCreateValidator({ value }: msgCreateValidatorParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryValidatorUnbondingDelegationsResponse({ value }: queryValidatorUnbondingDelegationsResponseParams): EncodeObject;
    queryDelegatorDelegationsRequest({ value }: queryDelegatorDelegationsRequestParams): EncodeObject;
    queryDelegatorUnbondingDelegationsRequest({ value }: queryDelegatorUnbondingDelegationsRequestParams): EncodeObject;
    commissionRates({ value }: commissionRatesParams): EncodeObject;
    commission({ value }: commissionParams): EncodeObject;
    description({ value }: descriptionParams): EncodeObject;
    redelegation({ value }: redelegationParams): EncodeObject;
    queryValidatorsResponse({ value }: queryValidatorsResponseParams): EncodeObject;
    queryRedelegationsRequest({ value }: queryRedelegationsRequestParams): EncodeObject;
    queryHistoricalInfoRequest({ value }: queryHistoricalInfoRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgEditValidator({ value }: msgEditValidatorParams): EncodeObject;
    unbondingDelegationEntry({ value }: unbondingDelegationEntryParams): EncodeObject;
    queryDelegatorValidatorRequest({ value }: queryDelegatorValidatorRequestParams): EncodeObject;
    msgBeginRedelegateResponse({ value }: msgBeginRedelegateResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    msgCreateValidatorResponse({ value }: msgCreateValidatorResponseParams): EncodeObject;
    dvpairs({ value }: dvpairsParams): EncodeObject;
    msgUndelegate({ value }: msgUndelegateParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    historicalInfo({ value }: historicalInfoParams): EncodeObject;
    valAddresses({ value }: valAddressesParams): EncodeObject;
    unbondingDelegation({ value }: unbondingDelegationParams): EncodeObject;
    pool({ value }: poolParams): EncodeObject;
    queryDelegationResponse({ value }: queryDelegationResponseParams): EncodeObject;
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
        CosmosStakingV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
