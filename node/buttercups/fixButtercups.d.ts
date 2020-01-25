import { Buttercup } from './Buttercup';
import { Uish } from 'pollenium-uvaursi';
export declare class InvalidLengthError extends Error {
    constructor(length: number, uLength: number);
}
export declare class FixButtercup extends Buttercup {
    constructor(length: number, uish: Uish);
}
export declare class FixLeftButtercup extends FixButtercup {
    constructor(length: number, uish: Uish);
}
export declare class FixRightButtercup extends FixButtercup {
    constructor(length: number, uish: Uish);
}
