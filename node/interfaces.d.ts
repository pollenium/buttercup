import { Buttercup } from './buttercups/Buttercup';
import { Uish } from 'pollenium-uvaursi';
export interface External extends Buttercup {
    new (uish: Uish): any;
}
export interface ExternalClass<T> extends Function {
    new (uish: Uish): T;
}
