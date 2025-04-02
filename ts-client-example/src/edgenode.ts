import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import { txClient } from 'enreach-client-ts/lib/enreach.edgenode';
import { queryClient } from "enreach-client-ts/lib/enreach.edgenode";
import { CHAIN_API_URL, CHAIN_PREFIX, CHAIN_RPC_URL } from './consts';
import { MsgBindAndActivateNode, MsgBindUserEVMAccount, MsgCreateSuperior, MsgCreateUser, MsgRegisterNode, MsgUpdateNodeTrafficTypeBatch, QueryAllNodeResponse, QueryAllUserResponse } from 'enreach-client-ts/lib/enreach.edgenode/module';

export default class EdgenodeApi {
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

    async createUser(msg: MsgCreateUser) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgCreateUser({
            value: {
                ...msg,
                signer: this.account,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async registerNode(msg: MsgRegisterNode) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgRegisterNode({
            value: {
                ...msg,
                signer: this.account,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async bindAndActivateNode(msg: MsgBindAndActivateNode) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgBindAndActivateNode({
            value: {
                ...msg,
                signer: this.account,
            }
        })

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async bindUserEVMAccount(msg: MsgBindUserEVMAccount) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgBindUserEVMAccount({value: msg})

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async updateNodeTrafficTypeBatch(msg: MsgUpdateNodeTrafficTypeBatch) {
        let tClient = txClient({ signer: this.wallet, prefix: CHAIN_PREFIX, addr: CHAIN_RPC_URL });
        const result = await tClient.sendMsgUpdateNodeTrafficTypeBatch({value: msg})

        if (result.code != 0) {
            throw new Error(`Transaction failed: ${result.rawLog}`)
        }
    }

    async queryAllUser(): Promise<QueryAllUserResponse> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const regions = await qClient.queryUserAll();
        return regions.data;
    }

    async queryAllNode(): Promise<QueryAllNodeResponse> {
        let qClient = queryClient({ addr: CHAIN_API_URL });
        const regions = await qClient.queryNodeAll();
        return regions.data;
    }
}
