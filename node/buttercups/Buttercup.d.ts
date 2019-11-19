/// <reference types="node" />
import { ExternalClass } from '../interfaces';
export declare class Buttercup {
    private uint8Array;
    constructor(uint8Array: Uint8Array);
    getUint8Array(): Uint8Array;
    getLength(): number;
    getIsEqual(buttercup: Buttercup): boolean;
    getSlice(start: number, end: number): Buttercup;
    getArray(): Array<number>;
    getHex(): string;
    getPhex(): string;
    getBuffer(): Buffer;
    compare(buttercup: Buttercup): number;
    getCasted<T>(ExternalClass: ExternalClass<T>): T;
}
