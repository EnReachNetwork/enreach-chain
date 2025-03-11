import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import { txClient } from 'enreach-client-ts/lib/enreach.manager';
import { queryClient } from "enreach-client-ts/lib/enreach.manager";
import { MsgGoWorking, MsgRegisterManager, QueryAllManagerResponse } from 'enreach-client-ts/lib/enreach.manager/module';
import { CHAIN_API_URL, CHAIN_PREFIX, CHAIN_RPC_URL } from './consts';

export default class ManagerApi {
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

    async registerManager(msg: MsgRegisterManager) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgRegisterManager({
            value: {
                ...msg,
                managerAccount: this.account,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async goWorking(msg: MsgGoWorking) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgGoWorking({
            value: {
                managerAccount: this.account,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async queryAllManager(): Promise<QueryAllManagerResponse> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const regions = await qClient.queryManagerAll();
        return regions.data;
    }
}
