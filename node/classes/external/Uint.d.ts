import { FixWrapper } from '../internal/FixWrapper';
import { Bn } from 'bn.js';
export declare const BITS_MIN = 8;
export declare const BITS_MAX = 256;
export declare class Uint extends FixWrapper {
    private bitsLength;
    private bn;
    private number;
    constructor(bitsLength: number, uint8Array: Uint8Array);
    getBn(): Bn;
    getNumber(): number;
    unstrictEquals(uint: Uint): boolean;
}
export declare const ZERO: Uint;
export declare const ONE: Uint;
