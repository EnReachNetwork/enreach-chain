import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import { txClient } from 'enreach-client-ts/lib/enreach.manager';
import { queryClient } from "enreach-client-ts/lib/enreach.manager";
import { MsgActivateManager, MsgBindOperatorManagerAccount, MsgCreateOperator, MsgSetManagerRegion, QueryAllOperatorResponse } from 'enreach-client-ts/lib/enreach.manager/module';
import { CHAIN_API_URL, CHAIN_PREFIX, CHAIN_RPC_URL } from './consts';

export default class OperatorApi {
    private mnemonic: string;
    private wallet!: DirectSecp256k1HdWallet;
    public account!: string;

    constructor(mnemonic: string) {
        this.mnemonic = mnemonic;
    }

    async initApi():Promise<void> {
        this.wallet = await DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic, { prefix: CHAIN_PREFIX });
        const accounts = await this.wallet.getAccounts();
        this.account = accounts[0].address;
    }

    async createOperator(msg: MsgCreateOperator) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgCreateOperator({
            value: {
                ...msg,
                operatorAccount: this.account,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async bindOperatorManagerAccount(msg: MsgBindOperatorManagerAccount) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgBindOperatorManagerAccount({
            value: {
                ...msg,
                operatorAccount: this.account,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async setManagerRegion(msg: MsgSetManagerRegion) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgSetManagerRegion({
            value: {
                ...msg,
                operatorAccount: this.account,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async activateManager(msg: MsgActivateManager) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgActivateManager({
            value: {
                ...msg,
                operatorAccount: this.account,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async queryAllOperator(): Promise<QueryAllOperatorResponse> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const regions = await qClient.queryOperatorAll();
        return regions.data;
    }
}
