import Bn from 'bn.js';
export interface External {
    new (uint8Array: Uint8Array): any;
    fromArray(array: Array<number>): any;
}
export interface Uintish {
    getBn(): Bn;
    getNumber(): Number;
}
export interface ExternalUintish extends External, Uintish {
}
