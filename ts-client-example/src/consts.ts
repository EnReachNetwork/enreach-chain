import { QueryGetAllEraCheatStatusProcessDataRequest } from "enreach-client-ts/lib/enreach.workload/module"

export const CHAIN_PREFIX = "enreach"
export const CHAIN_API_URL = "http://localhost:1317"
export const CHAIN_RPC_URL = "http://localhost:26657"
export const CHAIN_WS_URL = "ws://localhost:26657"

export const ADMIN_MNEMONIC = "autumn churn regular flee grid category remember put dish uniform age pepper armor portion wait tribe memory inform fine photo work problem blast enforce"
export const SUPERIOR_MENMONIC = "fitness marine video shine dose garlic senior throw room metal seek address stable abstract salmon traffic multiply erode category brass maid joy usual round"
export const OPERATOR_A_MNEMONIC = "frame blame asset doctor below parrot cross latin camp cruel trumpet fix income impose dose culture amused health sniff poem risk ask twenty zone"
export const OPERATOR_B_MNEMONIC = "gather dawn ethics hurdle employ business dad divorce question cable spoil kiss ritual adapt punch divorce invest bench game believe couple useful truly step"
export const OPERATOR_C_MNEMONIC = "crisp flame remain custom cool stable host detail uncle immense tennis shoot eight hello illegal message pause property whip elevator lock beef raccoon drink"
export const MANAGER_A_MNEMONIC = "swallow asthma famous gasp wear velvet actor addict option poem vacuum box path creek slender lamp such inform cable interest quit exchange exclude hurt"
export const MANAGER_B_MNEMONIC = "arch coin juice arrest skill wear engine hobby sniff enforce gloom dance wood volume program bridge slot juice typical chat basic better limit easy"
export const MANAGER_C_MNEMONIC = "grant about cake lady sing work just breeze outdoor candy lazy envelope love penalty ready remember note flip assist immune echo pill mouse core"

const gasPrice = 0.01 // unit in uekc
const gasLimit = 200000
export const stdFee = {
    amount: [{ denom: "uekc", amount: (gasLimit*gasPrice).toString() }],
    gas: gasLimit.toString(),
}