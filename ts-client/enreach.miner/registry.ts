import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateMiner } from "./types/enreach/miner/tx";
import { MsgUpdateParamsResponse } from "./types/enreach/miner/tx";
import { Miner } from "./types/enreach/miner/miner";
import { QueryParamsResponse } from "./types/enreach/miner/query";
import { QueryAllMinerRequest } from "./types/enreach/miner/query";
import { GenesisState } from "./types/enreach/miner/genesis";
import { MsgCreateMinerResponse } from "./types/enreach/miner/tx";
import { MsgUpdateMinerResponse } from "./types/enreach/miner/tx";
import { QueryParamsRequest } from "./types/enreach/miner/query";
import { Params } from "./types/enreach/miner/params";
import { MsgCreateMiner } from "./types/enreach/miner/tx";
import { MsgDeleteMiner } from "./types/enreach/miner/tx";
import { MsgDeleteMinerResponse } from "./types/enreach/miner/tx";
import { QueryGetMinerRequest } from "./types/enreach/miner/query";
import { QueryGetMinerResponse } from "./types/enreach/miner/query";
import { MsgUpdateParams } from "./types/enreach/miner/tx";
import { QueryAllMinerResponse } from "./types/enreach/miner/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.miner.MsgUpdateMiner", MsgUpdateMiner],
    ["/enreach.miner.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.miner.Miner", Miner],
    ["/enreach.miner.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.miner.QueryAllMinerRequest", QueryAllMinerRequest],
    ["/enreach.miner.GenesisState", GenesisState],
    ["/enreach.miner.MsgCreateMinerResponse", MsgCreateMinerResponse],
    ["/enreach.miner.MsgUpdateMinerResponse", MsgUpdateMinerResponse],
    ["/enreach.miner.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.miner.Params", Params],
    ["/enreach.miner.MsgCreateMiner", MsgCreateMiner],
    ["/enreach.miner.MsgDeleteMiner", MsgDeleteMiner],
    ["/enreach.miner.MsgDeleteMinerResponse", MsgDeleteMinerResponse],
    ["/enreach.miner.QueryGetMinerRequest", QueryGetMinerRequest],
    ["/enreach.miner.QueryGetMinerResponse", QueryGetMinerResponse],
    ["/enreach.miner.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.miner.QueryAllMinerResponse", QueryAllMinerResponse],
    
];

export { msgTypes }