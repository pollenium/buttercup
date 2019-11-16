/// <reference types="node" />
import Bn from 'bn.js';
export declare function array(array: Array<number>): Uint8Array;
export declare function buffer(buffer: Buffer): Uint8Array;
export declare function hex(hex: string): Uint8Array;
export declare function phex(phex: string): Uint8Array;
export declare function random(length: number): Uint8Array;
export declare function bn(bn: Bn): Uint8Array;
export declare function number(number: number): Uint8Array;
