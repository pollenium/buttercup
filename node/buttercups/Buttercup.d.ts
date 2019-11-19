/// <reference types="node" />
import { External } from '../interfaces';
export declare class Buttercup {
    private uint8Array;
    constructor(uint8Array: Uint8Array);
    getUint8Array(): Uint8Array;
    getLength(): number;
    getIsEqual(wrapper: Buttercup): boolean;
    getSlice(start: number, end: number): Buttercup;
    getArray(): Array<number>;
    getHex(): string;
    getPhex(): string;
    getBuffer(): Buffer;
    compare(wrapper: Buttercup): number;
    getCasted<T extends External>(ExternalClass: External): T;
}
