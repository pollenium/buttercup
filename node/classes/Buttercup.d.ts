/// <reference types="node" />
export declare class Buttercup {
    private uint8Array;
    constructor(uint8Array: Uint8Array);
    getUint8Array(): Uint8Array;
    getLength(): number;
    strictEquals(buttercup: Buttercup): boolean;
    slice(start: number, end: number): Buttercup;
    getSha256Hash(): Buttercup;
    getHex(): string;
    getPhex(): string;
    getBuffer(): Buffer;
    getXor(buttercup: Buttercup): Buttercup;
    compare(buttercup: Buttercup): number;
}
