import { FixLeftButtercup } from '../buttercups/fixButtercups';
import { Uintish } from '../interfaces';
export declare class UintX extends FixLeftButtercup implements Uintish {
    private bn?;
    private number?;
    constructor(length: number, uint8Array: Uint8Array);
    toNumber(): number;
    getIsZero(): boolean;
    eq(value: UintX): boolean;
    gt(value: UintX): boolean;
    gte(value: UintX): boolean;
    lt(value: UintX): boolean;
    lte(value: UintX): boolean;
}
