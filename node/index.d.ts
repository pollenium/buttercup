/// <reference types="node" />
import Bn from 'bn.js';
export declare class Buttercup {
    uint8Array: Uint8Array;
    constructor(uint8Array: Uint8Array);
    getLength(): number;
    strictEquals(buttercup: Buttercup): boolean;
    slice(start: number, end: number): Buttercup;
    getHash(): Buttercup;
    getHex(): string;
    getPhex(): string;
    getUtf8(): string;
    getBuffer(): Buffer;
    unstrictEquals(buttercup: Buttercup): boolean;
    add(buttercup: Buttercup): Buttercup;
    sub(buttercup: Buttercup): Buttercup;
    mul(buttercup: Buttercup): Buttercup;
    div(buttercup: Buttercup): Buttercup;
    gt(buttercup: Buttercup): Buttercup;
    gte(buttercup: Buttercup): Buttercup;
    lt(buttercup: Buttercup): Buttercup;
    lte(buttercup: Buttercup): Buttercup;
    getPaddedLeft(length: number): Buttercup;
    prependByte(byte: number): Buttercup;
    append(buttercup: Buttercup): Buttercup;
    getBn(): Bn;
    getNumber(): number;
    getXor(buttercup: Buttercup): Buttercup;
    compare(buttercup: Buttercup): number;
    static fromUtf8(utf8: string): Buttercup;
    static fromBuffer(buffer: Buffer): Buttercup;
    static fromHex(hex: string): Buttercup;
    static fromPhex(phex: string): Buttercup;
    static fromBn(bn: Bn): Buttercup;
    static fromNumber(number: number): Buttercup;
    static random(length: number): Buttercup;
}
