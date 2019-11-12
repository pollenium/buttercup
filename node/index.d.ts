/// <reference types="node" />
import Bn from 'bn.js';
export declare class Buttercup {
    uint8Array: Uint8Array;
    constructor(uint8Array: Uint8Array);
    getLength(): number;
    equals(bytes: Buttercup): boolean;
    slice(start: number, end: number): Buttercup;
    getHash(): Buttercup;
    getHex(): string;
    getPhex(): string;
    getUtf8(): string;
    getBuffer(): Buffer;
    getPaddedLeft(length: number): Buttercup;
    prependByte(byte: number): Buttercup;
    append(bytes: Buttercup): Buttercup;
    getBn(): Bn;
    getNumber(): number;
    getXor(bytes: Buttercup): Buttercup;
    compare(bytes: Buttercup): number;
    static fromUtf8(utf8: string): Buttercup;
    static fromBuffer(buffer: Buffer): Buttercup;
    static fromHex(hex: string): Buttercup;
    static fromBn(bn: Bn): Buttercup;
    static fromNumber(number: number): Buttercup;
    static random(length: number): Buttercup;
}
