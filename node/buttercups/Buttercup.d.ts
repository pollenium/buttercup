import { ExternalClass } from '../interfaces';
import { Uu, Uish } from 'pollenium-uvaursi';
export declare class Buttercup {
    readonly uu: Uu;
    constructor(uish: Uish);
    genCasted<T>(ExternalClass: ExternalClass<T>): T;
}
