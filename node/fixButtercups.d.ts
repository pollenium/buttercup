import { Uvaursi } from 'pollenium-uvaursi';
export declare class InvalidLengthError extends Error {
    constructor(length: number, uint8Array: Uint8Array);
}
export declare class Fix extends Uvaursi {
    constructor(length: number, uint8Array: Uint8Array);
}
export declare class FixLeftButtercup extends Uvaursi {
    constructor(length: number, uint8Array: Uint8Array);
}
export declare class FixRightButtercup extends Uvaursi {
    constructor(length: number, uint8Array: Uint8Array);
}
