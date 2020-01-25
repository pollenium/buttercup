import { FixLeftButtercup } from '../buttercups/fixButtercups';
import { Uintish } from '../interfaces';
import { Uish } from 'pollenium-uvaursi';
export declare class UintX extends FixLeftButtercup implements Uintish {
    private bn?;
    private number?;
    constructor(length: number, uish: Uish);
    toNumber(): number;
    getIsZero(): boolean;
    compEq(value: UintX): boolean;
    compGt(value: UintX): boolean;
    compGte(value: UintX): boolean;
    compLt(value: UintX): boolean;
    compLte(value: UintX): boolean;
}
