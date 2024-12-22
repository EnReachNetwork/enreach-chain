import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryParamsRequest } from "./types/enreach/miner/query";
import { QueryGetMinerResponse } from "./types/enreach/miner/query";
import { QueryAllMinerResponse } from "./types/enreach/miner/query";
import { MsgUpdateParams } from "./types/enreach/miner/tx";
import { MsgCreateMinerResponse } from "./types/enreach/miner/tx";
import { MsgUpdateMinerResponse } from "./types/enreach/miner/tx";
import { GenesisState } from "./types/enreach/miner/genesis";
import { QueryParamsResponse } from "./types/enreach/miner/query";
import { MsgDeleteMiner } from "./types/enreach/miner/tx";
import { Miner } from "./types/enreach/miner/miner";
import { MsgUpdateMiner } from "./types/enreach/miner/tx";
import { QueryAllMinerRequest } from "./types/enreach/miner/query";
import { MsgUpdateParamsResponse } from "./types/enreach/miner/tx";
import { MsgCreateMiner } from "./types/enreach/miner/tx";
import { MsgDeleteMinerResponse } from "./types/enreach/miner/tx";
import { Params } from "./types/enreach/miner/params";
import { QueryGetMinerRequest } from "./types/enreach/miner/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.miner.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.miner.QueryGetMinerResponse", QueryGetMinerResponse],
    ["/enreach.miner.QueryAllMinerResponse", QueryAllMinerResponse],
    ["/enreach.miner.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.miner.MsgCreateMinerResponse", MsgCreateMinerResponse],
    ["/enreach.miner.MsgUpdateMinerResponse", MsgUpdateMinerResponse],
    ["/enreach.miner.GenesisState", GenesisState],
    ["/enreach.miner.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.miner.MsgDeleteMiner", MsgDeleteMiner],
    ["/enreach.miner.Miner", Miner],
    ["/enreach.miner.MsgUpdateMiner", MsgUpdateMiner],
    ["/enreach.miner.QueryAllMinerRequest", QueryAllMinerRequest],
    ["/enreach.miner.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.miner.MsgCreateMiner", MsgCreateMiner],
    ["/enreach.miner.MsgDeleteMinerResponse", MsgDeleteMinerResponse],
    ["/enreach.miner.Params", Params],
    ["/enreach.miner.QueryGetMinerRequest", QueryGetMinerRequest],
    
];

export { msgTypes }