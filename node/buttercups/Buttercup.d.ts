import { ExternalClass } from '../interfaces';
import { Uu, Uish, UWrapper } from 'pollenium-uvaursi';
export declare class Buttercup implements UWrapper {
    readonly uu: Uu;
    readonly u: Uint8Array;
    constructor(uish: Uish);
    genCasted<T>(ExternalClass: ExternalClass<T>): T;
}
