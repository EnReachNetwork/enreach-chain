import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import { CHAIN_API_URL, CHAIN_PREFIX, CHAIN_RPC_URL } from './consts';
import { txClient } from 'enreach-client-ts/lib/cosmos.bank.v1beta1';
import { MsgSend, queryClient } from 'enreach-client-ts/lib/cosmos.bank.v1beta1/module';

export default class BankApi {
    private mnemonic: string;
    private wallet!: DirectSecp256k1HdWallet;
    public account!: string;

    constructor(mnemonic: string) {
        this.mnemonic = mnemonic;
    }

    async initApi(): Promise<void> {
        this.wallet = await DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic, { prefix: CHAIN_PREFIX });
        const accounts = await this.wallet.getAccounts();
        this.account = accounts[0].address;
    }

    async sendToken(msg: MsgSend) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgSend({
            value: {
                ...msg,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }

        return result;
    }

    async queryBalance(address: string) {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const resp = await qClient.queryAllBalances(address);
        return resp.data;
    }
}
