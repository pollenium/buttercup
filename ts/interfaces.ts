import { Buttercup } from './buttercups/Buttercup'

export interface External extends Buttercup{
  new(uint8Array: Uint8Array);
}

export interface Uintish extends Buttercup {
  toNumber(): number;
}

export interface ExternalUintish extends External, Uintish {
}

export interface ExternalClass<T> extends Function {
    new (uint8Array: Uint8Array): T;
}
