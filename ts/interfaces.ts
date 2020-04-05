import { Buttercup } from './buttercups/Buttercup'
import { Uish } from 'pollenium-uvaursi'
import Bn from 'bn.js'

export interface External extends Buttercup {
  new(uish: Uish);
}

export interface ExternalClass<T> extends Function {
    new (uish: Uish): T;
}

export interface Bnish extends Pick<Bn, 'toArray' | 'isNeg'> { }
