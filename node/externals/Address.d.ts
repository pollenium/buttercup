import { FixButtercup } from '../buttercups/fixButtercups';
import { Uish } from 'pollenium-uvaursi';
export declare class Address extends FixButtercup {
    private isNull;
    constructor(uish: Uish);
    getIsNull(): boolean;
    static genNull(): Address;
}
