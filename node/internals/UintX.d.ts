import { FixLeftButtercup } from '../buttercups/fixButtercups';
import Bn from 'bn.js';
import Bignumber from 'bignumber.js';
import { Uish } from 'pollenium-uvaursi';
export declare type Uintable = number | UintX | Uish;
export declare class UintUnderflowError extends Error {
    constructor();
}
export declare class UintOverflowError extends Error {
    constructor();
}
export declare abstract class UintX extends FixLeftButtercup {
    private number?;
    private numberStringByBase;
    constructor(length: number, uintable: Uintable);
    toNumber(): number;
    toNumberString(base: number): string;
    toBn(): Bn;
    toBignumber(): Bignumber;
    getIsZero(): boolean;
    compEq(value: Uintable): boolean;
    compGt(value: Uintable): boolean;
    compGte(value: Uintable): boolean;
    compLt(value: Uintable): boolean;
    compLte(value: Uintable): boolean;
}
