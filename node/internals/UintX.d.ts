import { FixLeftButtercup } from '../buttercups/fixButtercups';
import { Uintish } from '../interfaces';
export declare class UintX extends FixLeftButtercup implements Uintish {
    private bn?;
    private number?;
    constructor(length: number, uint8Array: Uint8Array);
    toNumber(): number;
    getIsZero(): boolean;
    compEq(value: UintX): boolean;
    compGt(value: UintX): boolean;
    compGte(value: UintX): boolean;
    compLt(value: UintX): boolean;
    compLte(value: UintX): boolean;
}
