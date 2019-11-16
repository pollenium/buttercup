import { FixButtercup } from '../internal/FixButtercup';
import { Bn } from 'bn.js';
export declare const BITS_MIN = 8;
export declare const BITS_MAX = 256;
export declare class Uint extends FixButtercup {
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
}
export declare const ZERO: Uint;
export declare const ONE: Uint;
