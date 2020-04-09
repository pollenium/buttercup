import { FixLeftButtercup } from '../buttercups/fixButtercups';
import { Uish } from 'pollenium-uvaursi';
export declare type Uintable = number | UintX | Uish;
export declare class UintUnderflowError extends Error {
    constructor();
}
export declare class UintOverflowError extends Error {
    constructor();
}
export declare abstract class UintX extends FixLeftButtercup {
    private bn?;
    private number?;
    private numberStringByBase;
    constructor(length: number, uintable: Uintable);
    toNumber(): number;
    toNumberString(base: number): string;
    getIsZero(): boolean;
    compEq(value: Uintable): boolean;
    compGt(value: Uintable): boolean;
    compGte(value: Uintable): boolean;
    compLt(value: Uintable): boolean;
    compLte(value: Uintable): boolean;
}
