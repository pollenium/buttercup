import { Buttercup } from './buttercups/Buttercup'
import { Uish } from 'pollenium-uvaursi'

export interface External extends Buttercup {
  new(uish: Uish);
}

export interface ExternalClass<T> extends Function {
    new (uish: Uish): T;
}
