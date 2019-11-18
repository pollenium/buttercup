/// <reference types="node" />
export declare class Buttercup {
    private uint8Array;
    constructor(uint8Array: Uint8Array);
    cloneUint8Array(): Uint8Array;
    getLength(): number;
    getIsEqual(wrapper: Buttercup): boolean;
    getArray(): Array<number>;
    getHex(): string;
    getPhex(): string;
    getBuffer(): Buffer;
    compare(wrapper: Buttercup): number;
}
