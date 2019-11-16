/// <reference types="node" />
export declare class Wrapper {
    private uint8Array;
    constructor(uint8Array: Uint8Array);
    getUint8Array(): Uint8Array;
    getLength(): number;
    getIsStrictEqual(buttercup: Wrapper): boolean;
    getArray(): Array<number>;
    getHex(): string;
    getPhex(): string;
    getBuffer(): Buffer;
    compare(buttercup: Wrapper): number;
}
