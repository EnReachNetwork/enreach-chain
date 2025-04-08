import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import { txClient } from 'enreach-client-ts/lib/enreach.workload';
import { queryClient } from "enreach-client-ts/lib/enreach.workload";
import { CHAIN_API_URL, CHAIN_PREFIX, CHAIN_RPC_URL } from './consts';
import { MsgSubmitReputationPointChangeData, MsgSubmitWorkreports, QueryGetAllEpochProcessDataResponse, 
    QueryGetAllEraProcessDataResponse, QueryGetAllManagerWRWorkloadByEpochResponse, QueryGetAllNodeWorkloadByEpochResponse, 
    QueryGetAllReputationPointResponse, QueryGetAllWorkreportByEpochResponse, QueryGetCurrentEpochResponse,
    QueryGetAllReputationDeltaPointByEraResponse, QueryGetCurrentEraResponse,
    QueryGetAllReputationPointChangeDataByEraResponse} from 'enreach-client-ts/lib/enreach.workload/module';

export default class WorkloadApi {
    private mnemonic: string;
    public wallet!: DirectSecp256k1HdWallet;
    public account!: string;

    constructor(mnemonic: string) {
        this.mnemonic = mnemonic;
    }

    async initApi():Promise<void> {
        this.wallet = await DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic, { prefix: CHAIN_PREFIX });
        const accounts = await this.wallet.getAccounts();
        this.account = accounts[0].address;
    }

    async submitWorkreports(msg: MsgSubmitWorkreports) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgSubmitWorkreports({
            value: {
                ...msg,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async submitReputationPointChangeData(msg: MsgSubmitReputationPointChangeData) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgSubmitReputationPointChangeData({
            value: {
                ...msg,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async queryAllWorkreporthByEpoch(epoch: number): Promise<QueryGetAllWorkreportByEpochResponse> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const regions = await qClient.queryAllWorkreportByEpoch(epoch.toString());
        return regions.data;
    }

    async queryAllEpochProcessData(): Promise<QueryGetAllEpochProcessDataResponse> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const regions = await qClient.queryAllEpochProcessData();
        return regions.data;
    }

    async queryAllNodeWorkloadByEpoch(epoch: number): Promise<QueryGetAllNodeWorkloadByEpochResponse> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const regions = await qClient.queryAllNodeWorkloadByEpoch(epoch.toString());
        return regions.data;
    }

    async queryAllManagerWRWorkloadByEpoch(epoch: number): Promise<QueryGetAllManagerWRWorkloadByEpochResponse> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const regions = await qClient.queryAllManagerWRWorkloadByEpoch(epoch.toString());
        return regions.data;
    }

    async queryAllReputationChangeDataByEra(era: number): Promise<QueryGetAllReputationPointChangeDataByEraResponse> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const regions = await qClient.queryAllReputationPointChangeDataByEra(era.toString());
        return regions.data;
    }

    async queryAllReputationDeltaPointByEra(era: number): Promise<QueryGetAllReputationDeltaPointByEraResponse> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const regions = await qClient.queryAllReputationDeltaPointByEra(era.toString());
        return regions.data;
    }

    async queryAllReputationPoint(): Promise<QueryGetAllReputationPointResponse> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const regions = await qClient.queryAllReputationPoint();
        return regions.data;
    }
    async queryAllEraProcessData(): Promise<QueryGetAllEraProcessDataResponse> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const regions = await qClient.queryAllEraProcessData();
        return regions.data;
    }

    async getCurrentEpoch(): Promise<number> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const resp = await qClient.queryCurrentEpoch();

        let currentEpochInfo = (resp.data as QueryGetCurrentEpochResponse).EpochInfo;
        if (currentEpochInfo === undefined) {
            console.error("Current epoch should not be undefined!");
            process.exit(1);
        }
        return currentEpochInfo.number;
    }

    async getCurrentEra(): Promise<number> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const resp = await qClient.queryCurrentEra();

        let currentEraInfo = (resp.data as QueryGetCurrentEraResponse).EraInfo;
        if (currentEraInfo === undefined) {
            console.error("Current era should not be undefined!");
            process.exit(1);
        }
        return currentEraInfo.number;
    }
}
