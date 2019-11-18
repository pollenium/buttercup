/// <reference types="node" />
export declare class Wrapper {
    private uint8Array;
    constructor(uint8Array: Uint8Array);
    cloneUint8Array(): Uint8Array;
    getLength(): number;
    getIsEqual(wrapper: Wrapper): boolean;
    getArray(): Array<number>;
    getHex(): string;
    getPhex(): string;
    getBuffer(): Buffer;
    compare(wrapper: Wrapper): number;
}
