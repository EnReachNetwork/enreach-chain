import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryGetMinerRequest } from "./types/enreach/miner/query";
import { GenesisState } from "./types/enreach/miner/genesis";
import { MsgDeleteMinerResponse } from "./types/enreach/miner/tx";
import { QueryParamsRequest } from "./types/enreach/miner/query";
import { MsgUpdateMiner } from "./types/enreach/miner/tx";
import { QueryAllMinerResponse } from "./types/enreach/miner/query";
import { MsgUpdateParams } from "./types/enreach/miner/tx";
import { MsgCreateMinerResponse } from "./types/enreach/miner/tx";
import { MsgCreateMiner } from "./types/enreach/miner/tx";
import { QueryGetMinerResponse } from "./types/enreach/miner/query";
import { QueryAllMinerRequest } from "./types/enreach/miner/query";
import { MsgDeleteMiner } from "./types/enreach/miner/tx";
import { QueryParamsResponse } from "./types/enreach/miner/query";
import { Miner } from "./types/enreach/miner/miner";
import { MsgUpdateParamsResponse } from "./types/enreach/miner/tx";
import { MsgUpdateMinerResponse } from "./types/enreach/miner/tx";
import { Params } from "./types/enreach/miner/params";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.miner.QueryGetMinerRequest", QueryGetMinerRequest],
    ["/enreach.miner.GenesisState", GenesisState],
    ["/enreach.miner.MsgDeleteMinerResponse", MsgDeleteMinerResponse],
    ["/enreach.miner.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.miner.MsgUpdateMiner", MsgUpdateMiner],
    ["/enreach.miner.QueryAllMinerResponse", QueryAllMinerResponse],
    ["/enreach.miner.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.miner.MsgCreateMinerResponse", MsgCreateMinerResponse],
    ["/enreach.miner.MsgCreateMiner", MsgCreateMiner],
    ["/enreach.miner.QueryGetMinerResponse", QueryGetMinerResponse],
    ["/enreach.miner.QueryAllMinerRequest", QueryAllMinerRequest],
    ["/enreach.miner.MsgDeleteMiner", MsgDeleteMiner],
    ["/enreach.miner.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.miner.Miner", Miner],
    ["/enreach.miner.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.miner.MsgUpdateMinerResponse", MsgUpdateMinerResponse],
    ["/enreach.miner.Params", Params],
    
];

export { msgTypes }