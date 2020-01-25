import { Buttercup } from './buttercups/Buttercup';
import { Uish } from 'pollenium-uvaursi';
export interface External extends Buttercup {
    new (uish: Uish): any;
}
export interface Uintish extends Buttercup {
    toNumber(): number;
}
export interface ExternalUintish extends External, Uintish {
}
export interface ExternalClass<T> extends Function {
    new (uish: Uish): T;
}
