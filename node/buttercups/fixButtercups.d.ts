import { Buttercup } from './Buttercup';
export declare class InvalidLengthError extends Error {
    constructor(length: number, uint8Array: Uint8Array);
}
export declare class FixButtercup extends Buttercup {
    constructor(length: number, uint8Array: Uint8Array);
}
export declare class FixLeftButtercup extends FixButtercup {
    constructor(length: number, uint8Array: Uint8Array);
}
export declare class FixRightButtercup extends FixButtercup {
    constructor(length: number, uint8Array: Uint8Array);
}
