import { Uvaursi } from 'pollenium-uvaursi';
export declare class InvalidLengthError extends Error {
    constructor(length: number, uint8Array: Uint8Array);
}
export declare class Fix extends Uvaursi {
    constructor(length: number, uint8Array: Uint8Array);
}
export declare class FixLeft extends Fix {
    constructor(length: number, uint8Array: Uint8Array);
}
export declare class FixRight extends Fix {
    constructor(length: number, uint8Array: Uint8Array);
}
