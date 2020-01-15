/// <reference types="node" />
import Bn from 'bn.js';
import Bignumber from 'bignumber.js';
import { External, Uintish } from '../interfaces';
export declare function uint8Array<T extends External>(ExternalClass: T, uint8Array: Uint8Array): T;
export declare function buffer<T extends External>(ExternalClass: T, buffer: Buffer): T;
export declare function array<T extends External>(ExternalClass: T, array: Array<number>): T;
export declare function hexish<T extends External>(ExternalClass: T, hexish: string): T;
export declare function uintBn<T extends External & Uintish>(ExternalClass: T, bn: Bn): T;
export declare function uintBignumber<T extends External & Uintish>(ExternalClass: T, bignumber: Bignumber): T;
export declare function uintNumber<T extends External & Uintish>(ExternalClass: T, number: number): T;
