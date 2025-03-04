import { Registry } from '@cosmjs/proto-signing';
import { IgniteClient } from "./client";
import { MissingWalletError } from "./helpers";
declare const Client: typeof IgniteClient & import("./helpers").Constructor<{
    CosmosBaseTendermintV1Beta1: {
        query: ReturnType<typeof import("./cosmos.base.tendermint.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.base.tendermint.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosBankV1Beta1: {
        query: ReturnType<typeof import("./cosmos.bank.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.bank.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosStakingV1Beta1: {
        query: ReturnType<typeof import("./cosmos.staking.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.staking.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosAuthV1Beta1: {
        query: ReturnType<typeof import("./cosmos.auth.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.auth.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosAuthzV1Beta1: {
        query: ReturnType<typeof import("./cosmos.authz.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.authz.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosBaseNodeV1Beta1: {
        query: ReturnType<typeof import("./cosmos.base.node.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.base.node.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosCircuitV1: {
        query: ReturnType<typeof import("./cosmos.circuit.v1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.circuit.v1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosConsensusV1: {
        query: ReturnType<typeof import("./cosmos.consensus.v1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.consensus.v1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosCrisisV1Beta1: {
        query: ReturnType<typeof import("./cosmos.crisis.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.crisis.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosDistributionV1Beta1: {
        query: ReturnType<typeof import("./cosmos.distribution.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.distribution.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosEvidenceV1Beta1: {
        query: ReturnType<typeof import("./cosmos.evidence.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.evidence.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosFeegrantV1Beta1: {
        query: ReturnType<typeof import("./cosmos.feegrant.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.feegrant.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosGovV1: {
        query: ReturnType<typeof import("./cosmos.gov.v1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.gov.v1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosGovV1Beta1: {
        query: ReturnType<typeof import("./cosmos.gov.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.gov.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosGroupV1: {
        query: ReturnType<typeof import("./cosmos.group.v1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.group.v1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosMintV1Beta1: {
        query: ReturnType<typeof import("./cosmos.mint.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.mint.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosNftV1Beta1: {
        query: ReturnType<typeof import("./cosmos.nft.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.nft.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosParamsV1Beta1: {
        query: ReturnType<typeof import("./cosmos.params.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.params.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosSlashingV1Beta1: {
        query: ReturnType<typeof import("./cosmos.slashing.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.slashing.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosTxV1Beta1: {
        query: ReturnType<typeof import("./cosmos.tx.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.tx.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosUpgradeV1Beta1: {
        query: ReturnType<typeof import("./cosmos.upgrade.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.upgrade.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosVestingV1Beta1: {
        query: ReturnType<typeof import("./cosmos.vesting.v1beta1").queryClient>;
        tx: ReturnType<typeof import("./cosmos.vesting.v1beta1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    EnreachManager: {
        query: ReturnType<typeof import("./enreach.manager").queryClient>;
        tx: ReturnType<typeof import("./enreach.manager").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    EnreachMiner: {
        query: ReturnType<typeof import("./enreach.miner").queryClient>;
        tx: ReturnType<typeof import("./enreach.miner").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    EnreachRegistry: {
        query: ReturnType<typeof import("./enreach.registry").queryClient>;
        tx: ReturnType<typeof import("./enreach.registry").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    EnreachWorkload: {
        query: ReturnType<typeof import("./enreach.workload").queryClient>;
        tx: ReturnType<typeof import("./enreach.workload").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    IbcApplicationsFeeV1: {
        query: ReturnType<typeof import("./ibc.applications.fee.v1").queryClient>;
        tx: ReturnType<typeof import("./ibc.applications.fee.v1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    IbcApplicationsInterchainAccountsControllerV1: {
        query: ReturnType<typeof import("./ibc.applications.interchain_accounts.controller.v1").queryClient>;
        tx: ReturnType<typeof import("./ibc.applications.interchain_accounts.controller.v1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    IbcApplicationsInterchainAccountsHostV1: {
        query: ReturnType<typeof import("./ibc.applications.interchain_accounts.host.v1").queryClient>;
        tx: ReturnType<typeof import("./ibc.applications.interchain_accounts.host.v1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    IbcApplicationsTransferV1: {
        query: ReturnType<typeof import("./ibc.applications.transfer.v1").queryClient>;
        tx: ReturnType<typeof import("./ibc.applications.transfer.v1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    IbcCoreChannelV1: {
        query: ReturnType<typeof import("./ibc.core.channel.v1").queryClient>;
        tx: ReturnType<typeof import("./ibc.core.channel.v1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    IbcCoreClientV1: {
        query: ReturnType<typeof import("./ibc.core.client.v1").queryClient>;
        tx: ReturnType<typeof import("./ibc.core.client.v1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
} & {
    IbcCoreConnectionV1: {
        query: ReturnType<typeof import("./ibc.core.connection.v1").queryClient>;
        tx: ReturnType<typeof import("./ibc.core.connection.v1").txClient>;
        structure: Record<string, unknown>;
        registry: Array<[string, Registry]>;
        updateTX(client: IgniteClient): void;
    };
}>;
declare const registry: any;
export { Client, registry, MissingWalletError };
