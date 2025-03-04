import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.circuit.v1";
/**
 * Permissions are the permissions that an account has to trip
 * or reset the circuit breaker.
 */
export interface Permissions {
    /** level is the level of permissions granted to this account. */
    level: Permissions_Level;
    /**
     * limit_type_urls is used with LEVEL_SOME_MSGS to limit the lists of Msg type
     * URLs that the account can trip. It is an error to use limit_type_urls with
     * a level other than LEVEL_SOME_MSGS.
     */
    limitTypeUrls: string[];
}
/** Level is the permission level. */
export declare enum Permissions_Level {
    /**
     * LEVEL_NONE_UNSPECIFIED - LEVEL_NONE_UNSPECIFIED indicates that the account will have no circuit
     * breaker permissions.
     */
    LEVEL_NONE_UNSPECIFIED = 0,
    /**
     * LEVEL_SOME_MSGS - LEVEL_SOME_MSGS indicates that the account will have permission to
     * trip or reset the circuit breaker for some Msg type URLs. If this level
     * is chosen, a non-empty list of Msg type URLs must be provided in
     * limit_type_urls.
     */
    LEVEL_SOME_MSGS = 1,
    /**
     * LEVEL_ALL_MSGS - LEVEL_ALL_MSGS indicates that the account can trip or reset the circuit
     * breaker for Msg's of all type URLs.
     */
    LEVEL_ALL_MSGS = 2,
    /**
     * LEVEL_SUPER_ADMIN - LEVEL_SUPER_ADMIN indicates that the account can take all circuit breaker
     * actions and can grant permissions to other accounts.
     */
    LEVEL_SUPER_ADMIN = 3,
    UNRECOGNIZED = -1
}
export declare function permissions_LevelFromJSON(object: any): Permissions_Level;
export declare function permissions_LevelToJSON(object: Permissions_Level): string;
/** GenesisAccountPermissions is the account permissions for the circuit breaker in genesis */
export interface GenesisAccountPermissions {
    address: string;
    permissions: Permissions | undefined;
}
/** GenesisState is the state that must be provided at genesis. */
export interface GenesisState {
    accountPermissions: GenesisAccountPermissions[];
    disabledTypeUrls: string[];
}
export declare const Permissions: {
    encode(message: Permissions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Permissions;
    fromJSON(object: any): Permissions;
    toJSON(message: Permissions): unknown;
    create<I extends Exact<DeepPartial<Permissions>, I>>(base?: I): Permissions;
    fromPartial<I extends Exact<DeepPartial<Permissions>, I>>(object: I): Permissions;
};
export declare const GenesisAccountPermissions: {
    encode(message: GenesisAccountPermissions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccountPermissions;
    fromJSON(object: any): GenesisAccountPermissions;
    toJSON(message: GenesisAccountPermissions): unknown;
    create<I extends Exact<DeepPartial<GenesisAccountPermissions>, I>>(base?: I): GenesisAccountPermissions;
    fromPartial<I extends Exact<DeepPartial<GenesisAccountPermissions>, I>>(object: I): GenesisAccountPermissions;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
