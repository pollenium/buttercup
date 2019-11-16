import { FixedButtercup } from './classes/FixedButtercup';
import { Bn } from 'bn.js';
export declare const BITS_MIN = 8;
export declare const BITS_MAX = 256;
export declare const ZERO: any;
export declare const ONE: any;
export declare class Uint extends FixedButtercup {
    private bitsLength;
    private bn;
    private number;
    constructor(bitsLength: number, uint8Array: Uint8Array);
    getBn(): Bn;
    getNumber(): number;
    unstrictEquals(uint: Uint): boolean;
    add(uint: Uint): Uint;
    sub(uint: Uint): Uint;
    mul(uint: Uint): Uint;
    divDn(uint: Uint): Uint;
    divUp(uint: Uint): Uint;
    mod(uint: Uint): Uint;
    gt(uint: Uint): Uint;
    gte(uint: Uint): Uint;
    lt(uint: Uint): Uint;
    lte(uint: Uint): Uint;
    static fromArray(bitsLength: number, array: Array<number>): Uint;
    static fromBn(bitsLength: number, bn: Bn): Uint;
}
