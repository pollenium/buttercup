import { FixLeftButtercup } from '../buttercups/fixButtercups';
import { Uish } from 'pollenium-uvaursi';
import { Uintable } from '../types';
export declare class UintX extends FixLeftButtercup {
    private bn?;
    private number?;
    constructor(length: number, uish: Uish);
    toNumber(): number;
    getIsZero(): boolean;
    compEq(value: Uintable): boolean;
    compGt(value: Uintable): boolean;
    compGte(value: Uintable): boolean;
    compLt(value: Uintable): boolean;
    compLte(value: Uintable): boolean;
}
