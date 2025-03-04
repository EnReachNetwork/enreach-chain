"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.IgniteClient = void 0;
/// <reference path="./types.d.ts" />
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const events_1 = require("events");
const defaultFee = {
    amount: [],
    gas: "200000",
};
class IgniteClient extends events_1.EventEmitter {
    static plugin(plugin) {
        const currentPlugins = this.plugins;
        class AugmentedClient extends this {
        }
        AugmentedClient.plugins = currentPlugins.concat(plugin);
        if (Array.isArray(plugin)) {
            return AugmentedClient;
        }
        return AugmentedClient;
    }
    async signAndBroadcast(msgs, fee, memo) {
        if (this.signer) {
            const { address } = (await this.signer.getAccounts())[0];
            const signingClient = await stargate_1.SigningStargateClient.connectWithSigner(this.env.rpcURL, this.signer, { registry: new proto_signing_1.Registry(this.registry) });
            return await signingClient.signAndBroadcast(address, msgs, fee ? fee : defaultFee, memo);
        }
        else {
            throw new Error(" Signer is not present.");
        }
    }
    constructor(env, signer) {
        super();
        this.registry = [];
        this.env = env;
        this.setMaxListeners(0);
        this.signer = signer;
        const classConstructor = this.constructor;
        classConstructor.plugins.forEach(plugin => {
            const pluginInstance = plugin(this);
            Object.assign(this, pluginInstance.module);
            if (this.registry) {
                this.registry = this.registry.concat(pluginInstance.registry);
            }
        });
    }
    useSigner(signer) {
        this.signer = signer;
        this.emit("signer-changed", this.signer);
    }
    removeSigner() {
        this.signer = undefined;
        this.emit("signer-changed", this.signer);
    }
    async useKeplr(keplrChainInfo = {}) {
        // Using queryClients directly because BaseClient has no knowledge of the modules at this stage
        try {
            const queryClient = (await Promise.resolve().then(() => __importStar(require("./cosmos.base.tendermint.v1beta1/module")))).queryClient;
            const bankQueryClient = (await Promise.resolve().then(() => __importStar(require("./cosmos.bank.v1beta1/module"))))
                .queryClient;
            const stakingQueryClient = (await Promise.resolve().then(() => __importStar(require("./cosmos.staking.v1beta1/module")))).queryClient;
            const stakingqc = stakingQueryClient({ addr: this.env.apiURL });
            const staking = await (await stakingqc.queryParams()).data;
            const qc = queryClient({ addr: this.env.apiURL });
            const node_info = await (await qc.serviceGetNodeInfo()).data;
            const chainId = node_info.default_node_info?.network ?? "";
            const chainName = chainId?.toUpperCase() + " Network";
            const bankqc = bankQueryClient({ addr: this.env.apiURL });
            const tokens = await (await bankqc.queryTotalSupply()).data;
            const addrPrefix = this.env.prefix ?? "cosmos";
            const rpc = this.env.rpcURL;
            const rest = this.env.apiURL;
            let bip44 = {
                coinType: 118,
            };
            let bech32Config = {
                bech32PrefixAccAddr: addrPrefix,
                bech32PrefixAccPub: addrPrefix + "pub",
                bech32PrefixValAddr: addrPrefix + "valoper",
                bech32PrefixValPub: addrPrefix + "valoperpub",
                bech32PrefixConsAddr: addrPrefix + "valcons",
                bech32PrefixConsPub: addrPrefix + "valconspub",
            };
            let currencies = tokens.supply?.map((x) => {
                const y = {
                    coinDenom: x.denom?.toUpperCase() ?? "",
                    coinMinimalDenom: x.denom ?? "",
                    coinDecimals: 0,
                };
                return y;
            }) ?? [];
            let stakeCurrency = {
                coinDenom: staking.params?.bond_denom?.toUpperCase() ?? "",
                coinMinimalDenom: staking.params?.bond_denom ?? "",
                coinDecimals: 0,
            };
            let feeCurrencies = tokens.supply?.map((x) => {
                const y = {
                    coinDenom: x.denom?.toUpperCase() ?? "",
                    coinMinimalDenom: x.denom ?? "",
                    coinDecimals: 0,
                };
                return y;
            }) ?? [];
            if (chainId) {
                const suggestOptions = {
                    chainId,
                    chainName,
                    rpc,
                    rest,
                    stakeCurrency,
                    bip44,
                    bech32Config,
                    currencies,
                    feeCurrencies,
                    ...keplrChainInfo,
                };
                await window.keplr.experimentalSuggestChain(suggestOptions);
                window.keplr.defaultOptions = {
                    sign: {
                        preferNoSetFee: true,
                        preferNoSetMemo: true,
                    },
                };
            }
            await window.keplr.enable(chainId);
            this.signer = window.keplr.getOfflineSigner(chainId);
            this.emit("signer-changed", this.signer);
        }
        catch (e) {
            throw new Error("Could not load tendermint, staking and bank modules. Please ensure your client loads them to use useKeplr()");
        }
    }
}
exports.IgniteClient = IgniteClient;
IgniteClient.plugins = [];
