import Bn from 'bn.js'

export interface External {
  new(uint8Array: Uint8Array);
}

export interface Uintish {
  getBn(): Bn;
  getNumber(): Number;
}

export interface ExternalUintish extends External, Uintish {
}

export interface ExternalClass<T> extends Function {
    new (uint8Array: Uint8Array): T;
}
