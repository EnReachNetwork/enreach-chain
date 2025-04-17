/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { EpochInfo } from "./epoch_info";
import { EraInfo } from "./era_info";
import { Params } from "./params";
import { Superior } from "./superior";

export const protobufPackage = "enreach.workload";

/** GenesisState defines the workload module's genesis state. */
export interface GenesisState {
  adminAccount: string;
  /** params defines all the parameters of the module. */
  params: Params | undefined;
  superior: Superior | undefined;
  currentEpoch: EpochInfo | undefined;
  pendingNextEpoch: EpochInfo | undefined;
  currentEra: EraInfo | undefined;
  pendingNextEra: EraInfo | undefined;
}

function createBaseGenesisState(): GenesisState {
  return {
    adminAccount: "",
    params: undefined,
    superior: undefined,
    currentEpoch: undefined,
    pendingNextEpoch: undefined,
    currentEra: undefined,
    pendingNextEra: undefined,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adminAccount !== "") {
      writer.uint32(10).string(message.adminAccount);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    if (message.superior !== undefined) {
      Superior.encode(message.superior, writer.uint32(26).fork()).ldelim();
    }
    if (message.currentEpoch !== undefined) {
      EpochInfo.encode(message.currentEpoch, writer.uint32(34).fork()).ldelim();
    }
    if (message.pendingNextEpoch !== undefined) {
      EpochInfo.encode(message.pendingNextEpoch, writer.uint32(42).fork()).ldelim();
    }
    if (message.currentEra !== undefined) {
      EraInfo.encode(message.currentEra, writer.uint32(50).fork()).ldelim();
    }
    if (message.pendingNextEra !== undefined) {
      EraInfo.encode(message.pendingNextEra, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.adminAccount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.superior = Superior.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.currentEpoch = EpochInfo.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.pendingNextEpoch = EpochInfo.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.currentEra = EraInfo.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.pendingNextEra = EraInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      adminAccount: isSet(object.adminAccount) ? String(object.adminAccount) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      superior: isSet(object.superior) ? Superior.fromJSON(object.superior) : undefined,
      currentEpoch: isSet(object.currentEpoch) ? EpochInfo.fromJSON(object.currentEpoch) : undefined,
      pendingNextEpoch: isSet(object.pendingNextEpoch) ? EpochInfo.fromJSON(object.pendingNextEpoch) : undefined,
      currentEra: isSet(object.currentEra) ? EraInfo.fromJSON(object.currentEra) : undefined,
      pendingNextEra: isSet(object.pendingNextEra) ? EraInfo.fromJSON(object.pendingNextEra) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.adminAccount !== "") {
      obj.adminAccount = message.adminAccount;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.superior !== undefined) {
      obj.superior = Superior.toJSON(message.superior);
    }
    if (message.currentEpoch !== undefined) {
      obj.currentEpoch = EpochInfo.toJSON(message.currentEpoch);
    }
    if (message.pendingNextEpoch !== undefined) {
      obj.pendingNextEpoch = EpochInfo.toJSON(message.pendingNextEpoch);
    }
    if (message.currentEra !== undefined) {
      obj.currentEra = EraInfo.toJSON(message.currentEra);
    }
    if (message.pendingNextEra !== undefined) {
      obj.pendingNextEra = EraInfo.toJSON(message.pendingNextEra);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.adminAccount = object.adminAccount ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.superior = (object.superior !== undefined && object.superior !== null)
      ? Superior.fromPartial(object.superior)
      : undefined;
    message.currentEpoch = (object.currentEpoch !== undefined && object.currentEpoch !== null)
      ? EpochInfo.fromPartial(object.currentEpoch)
      : undefined;
    message.pendingNextEpoch = (object.pendingNextEpoch !== undefined && object.pendingNextEpoch !== null)
      ? EpochInfo.fromPartial(object.pendingNextEpoch)
      : undefined;
    message.currentEra = (object.currentEra !== undefined && object.currentEra !== null)
      ? EraInfo.fromPartial(object.currentEra)
      : undefined;
    message.pendingNextEra = (object.pendingNextEra !== undefined && object.pendingNextEra !== null)
      ? EraInfo.fromPartial(object.pendingNextEra)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
