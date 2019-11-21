/// <reference types="node" />
import { FixButtercup } from '../buttercups/fixButtercups';
export declare class Address extends FixButtercup {
    constructor(uint8Array: Uint8Array);
    static fromUint8Array(uint8Array: Uint8Array): Address;
    static fromArray(array: Array<number>): Address;
    static fromBuffer(buffer: Buffer): Address;
    static fromHexish(hexish: string): Address;
}
