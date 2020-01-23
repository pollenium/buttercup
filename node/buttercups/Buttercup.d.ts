import { ExternalClass } from '../interfaces';
import { Uvaursi } from 'pollenium-uvaursi';
export declare class Buttercup {
    readonly uint8Array: Uint8Array;
    private uvaursi;
    constructor(uint8Array: Uint8Array);
    genCasted<T>(ExternalClass: ExternalClass<T>): T;
    protected toUvaursi(): Uvaursi;
}
