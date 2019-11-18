/// <reference types="node" />
import { DynButtercup } from '../buttercups/DynButtercup';
export declare class Bytes extends DynButtercup {
    getUtf8(): string;
    getPaddedLeft(length: number): Bytes;
    getPaddedRight(length: number): Bytes;
    getBytePrepended(byte: number): Bytes;
    getByteAppended(byte: number): Bytes;
    getAppended(wrapper: Bytes): Bytes;
    getPrepended(wrapper: Bytes): Bytes;
    static fromUint8Array(uint8Array: Uint8Array): Bytes;
    static fromArray(array: Array<number>): Bytes;
    static fromBuffer(buffer: Buffer): Bytes;
    static fromHexish(hexish: string): Bytes;
}
