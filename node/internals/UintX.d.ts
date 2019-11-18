import { FixLeftButtercup } from '../buttercups/fixButtercups';
import Bn from 'bn.js';
import { Uintish } from '../interfaces';
export declare class UintX extends FixLeftButtercup implements Uintish {
    private bn?;
    private number?;
    constructor(length: number, uint8Array: Uint8Array);
    getBn(): Bn;
    getNumber(): number;
    unstrictEquals(uint: UintX): boolean;
    gt(a: UintX, b: UintX): boolean;
    gte(a: UintX, b: UintX): boolean;
    lt(a: UintX, b: UintX): boolean;
    lte(a: UintX, b: UintX): boolean;
}
