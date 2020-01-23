import { ExternalClass } from '../interfaces';
export declare class Buttercup {
    private uint8Array;
    private isOnlyZeros;
    constructor(uint8Array: Uint8Array);
    toUint8Array(): Uint8Array;
    getLength(): number;
    getIsEqual(buttercup: Buttercup): boolean;
    toArray(): Array<number>;
    toHex(): string;
    toPhex(): string;
    getCasted<T>(ExternalClass: ExternalClass<T>): T;
    getIsOnlyZeroes(): boolean;
}
