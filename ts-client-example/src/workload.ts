import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import { txClient } from 'enreach-client-ts/lib/enreach.workload';
import { queryClient } from "enreach-client-ts/lib/enreach.workload";
import { CHAIN_API_URL, CHAIN_PREFIX, CHAIN_RPC_URL } from './consts';
import { MsgCreateWorkload, QueryAllWorkloadResponse } from 'enreach-client-ts/lib/enreach.workload/module';

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

    async createWorkload(msg: MsgCreateWorkload) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgCreateWorkload({
            value: {
                ...msg,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async queryAllWorkload(): Promise<QueryAllWorkloadResponse> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const regions = await qClient.queryWorkloadAll();
        return regions.data;
    }
}
