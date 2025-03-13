import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import { txClient } from 'enreach-client-ts/lib/enreach.registry';
import { queryClient } from "enreach-client-ts/lib/enreach.registry";
import { MsgCreateRegion, MsgCreateSuperior, MsgDeleteRegion, QueryAllRegionResponse } from 'enreach-client-ts/lib/enreach.registry/module';
import { CHAIN_API_URL, CHAIN_PREFIX, CHAIN_RPC_URL } from './consts';

export default class RegionAPI {
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

    async createRegion(msg: MsgCreateRegion) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgCreateRegion({
            value: {
                ...msg,
                signer: this.account,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async deleteRegion(msg: MsgDeleteRegion) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgDeleteRegion({
            value: {
                ...msg,
                signer: this.account,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async createSuperior(msg: MsgCreateSuperior) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgCreateSuperior({
            value: {
                ...msg,
                signer: this.account,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async queryAllRegion(): Promise<QueryAllRegionResponse> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const regions = await qClient.queryRegionAll();
        return regions.data;
    }
}
