import { FixLeftButtercup } from '../buttercups/fixButtercups';
import Bn from 'bn.js';
import { Uintish } from '../interfaces';
export declare class UintX extends FixLeftButtercup implements Uintish {
    private bn?;
    private number?;
    constructor(length: number, uint8Array: Uint8Array);
    getBn(): Bn;
    getNumber(): number;
    getIsZero(): boolean;
    eq(uintX: UintX): boolean;
    gt(uintX: UintX): boolean;
    gte(uintX: UintX): boolean;
    lt(uintX: UintX): boolean;
    lte(uintX: UintX): boolean;
}
