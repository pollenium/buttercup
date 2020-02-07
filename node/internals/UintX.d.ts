import { FixLeftButtercup } from '../buttercups/fixButtercups';
import { Uish } from 'pollenium-uvaursi';
import { Uintable } from '../types';
export declare abstract class UintX extends FixLeftButtercup {
    private bn?;
    private number?;
    private numberStringByBase;
    constructor(length: number, uish: Uish);
    toNumber(): number;
    toNumberString(base: number): string;
    getIsZero(): boolean;
    compEq(value: Uintable): boolean;
    compGt(value: Uintable): boolean;
    compGte(value: Uintable): boolean;
    compLt(value: Uintable): boolean;
    compLte(value: Uintable): boolean;
}
