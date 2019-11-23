/// <reference types="node" />
import { Buttercup } from '../buttercups/Buttercup';
import { DynButtercup } from '../buttercups/DynButtercup';
export declare class Bytes extends DynButtercup {
    getUtf8(): string;
    getPaddedLeft(length: number): Bytes;
    getPaddedRight(length: number): Bytes;
    getBytePrepended(byte: number): Bytes;
    getByteAppended(byte: number): Bytes;
    getAppended(buttercup: Buttercup): Bytes;
    getPrepended(buttercup: Buttercup): Bytes;
    getSlice(start: number, end: number): Bytes;
    static fromUint8Array(uint8Array: Uint8Array): Bytes;
    static fromArray(array: Array<number>): Bytes;
    static fromBuffer(buffer: Buffer): Bytes;
    static fromHexish(hexish: string): Bytes;
}
