/// <reference types="node" />
import { UintX } from '../internals/UintX';
import { Uintish } from '../interfaces';
export declare class Uint8 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint8): Uint8;
    sub(value: Uint8): Uint8;
    mul(value: Uint8): Uint8;
    divDn(value: Uint8): Uint8;
    divUp(value: Uint8): Uint8;
    divRd(value: Uint8): Uint8;
    mod(value: Uint8): Uint8;
    static fromUint8Array(uint8Array: Uint8Array): Uint8;
    static fromArray(array: Array<number>): Uint8;
    static fromBuffer(buffer: Buffer): Uint8;
    static fromHexish(hexish: string): Uint8;
    static fromNumber(number: number): Uint8;
}
export declare class Uint16 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint16): Uint16;
    sub(value: Uint16): Uint16;
    mul(value: Uint16): Uint16;
    divDn(value: Uint16): Uint16;
    divUp(value: Uint16): Uint16;
    divRd(value: Uint16): Uint16;
    mod(value: Uint16): Uint16;
    static fromUint8Array(uint8Array: Uint8Array): Uint16;
    static fromArray(array: Array<number>): Uint16;
    static fromBuffer(buffer: Buffer): Uint16;
    static fromHexish(hexish: string): Uint16;
    static fromNumber(number: number): Uint16;
}
export declare class Uint24 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint24): Uint24;
    sub(value: Uint24): Uint24;
    mul(value: Uint24): Uint24;
    divDn(value: Uint24): Uint24;
    divUp(value: Uint24): Uint24;
    divRd(value: Uint24): Uint24;
    mod(value: Uint24): Uint24;
    static fromUint8Array(uint8Array: Uint8Array): Uint24;
    static fromArray(array: Array<number>): Uint24;
    static fromBuffer(buffer: Buffer): Uint24;
    static fromHexish(hexish: string): Uint24;
    static fromNumber(number: number): Uint24;
}
export declare class Uint32 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint32): Uint32;
    sub(value: Uint32): Uint32;
    mul(value: Uint32): Uint32;
    divDn(value: Uint32): Uint32;
    divUp(value: Uint32): Uint32;
    divRd(value: Uint32): Uint32;
    mod(value: Uint32): Uint32;
    static fromUint8Array(uint8Array: Uint8Array): Uint32;
    static fromArray(array: Array<number>): Uint32;
    static fromBuffer(buffer: Buffer): Uint32;
    static fromHexish(hexish: string): Uint32;
    static fromNumber(number: number): Uint32;
}
export declare class Uint40 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint40): Uint40;
    sub(value: Uint40): Uint40;
    mul(value: Uint40): Uint40;
    divDn(value: Uint40): Uint40;
    divUp(value: Uint40): Uint40;
    divRd(value: Uint40): Uint40;
    mod(value: Uint40): Uint40;
    static fromUint8Array(uint8Array: Uint8Array): Uint40;
    static fromArray(array: Array<number>): Uint40;
    static fromBuffer(buffer: Buffer): Uint40;
    static fromHexish(hexish: string): Uint40;
    static fromNumber(number: number): Uint40;
}
export declare class Uint48 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint48): Uint48;
    sub(value: Uint48): Uint48;
    mul(value: Uint48): Uint48;
    divDn(value: Uint48): Uint48;
    divUp(value: Uint48): Uint48;
    divRd(value: Uint48): Uint48;
    mod(value: Uint48): Uint48;
    static fromUint8Array(uint8Array: Uint8Array): Uint48;
    static fromArray(array: Array<number>): Uint48;
    static fromBuffer(buffer: Buffer): Uint48;
    static fromHexish(hexish: string): Uint48;
    static fromNumber(number: number): Uint48;
}
export declare class Uint56 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint56): Uint56;
    sub(value: Uint56): Uint56;
    mul(value: Uint56): Uint56;
    divDn(value: Uint56): Uint56;
    divUp(value: Uint56): Uint56;
    divRd(value: Uint56): Uint56;
    mod(value: Uint56): Uint56;
    static fromUint8Array(uint8Array: Uint8Array): Uint56;
    static fromArray(array: Array<number>): Uint56;
    static fromBuffer(buffer: Buffer): Uint56;
    static fromHexish(hexish: string): Uint56;
    static fromNumber(number: number): Uint56;
}
export declare class Uint64 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint64): Uint64;
    sub(value: Uint64): Uint64;
    mul(value: Uint64): Uint64;
    divDn(value: Uint64): Uint64;
    divUp(value: Uint64): Uint64;
    divRd(value: Uint64): Uint64;
    mod(value: Uint64): Uint64;
    static fromUint8Array(uint8Array: Uint8Array): Uint64;
    static fromArray(array: Array<number>): Uint64;
    static fromBuffer(buffer: Buffer): Uint64;
    static fromHexish(hexish: string): Uint64;
    static fromNumber(number: number): Uint64;
}
export declare class Uint72 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint72): Uint72;
    sub(value: Uint72): Uint72;
    mul(value: Uint72): Uint72;
    divDn(value: Uint72): Uint72;
    divUp(value: Uint72): Uint72;
    divRd(value: Uint72): Uint72;
    mod(value: Uint72): Uint72;
    static fromUint8Array(uint8Array: Uint8Array): Uint72;
    static fromArray(array: Array<number>): Uint72;
    static fromBuffer(buffer: Buffer): Uint72;
    static fromHexish(hexish: string): Uint72;
    static fromNumber(number: number): Uint72;
}
export declare class Uint80 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint80): Uint80;
    sub(value: Uint80): Uint80;
    mul(value: Uint80): Uint80;
    divDn(value: Uint80): Uint80;
    divUp(value: Uint80): Uint80;
    divRd(value: Uint80): Uint80;
    mod(value: Uint80): Uint80;
    static fromUint8Array(uint8Array: Uint8Array): Uint80;
    static fromArray(array: Array<number>): Uint80;
    static fromBuffer(buffer: Buffer): Uint80;
    static fromHexish(hexish: string): Uint80;
    static fromNumber(number: number): Uint80;
}
export declare class Uint88 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint88): Uint88;
    sub(value: Uint88): Uint88;
    mul(value: Uint88): Uint88;
    divDn(value: Uint88): Uint88;
    divUp(value: Uint88): Uint88;
    divRd(value: Uint88): Uint88;
    mod(value: Uint88): Uint88;
    static fromUint8Array(uint8Array: Uint8Array): Uint88;
    static fromArray(array: Array<number>): Uint88;
    static fromBuffer(buffer: Buffer): Uint88;
    static fromHexish(hexish: string): Uint88;
    static fromNumber(number: number): Uint88;
}
export declare class Uint96 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint96): Uint96;
    sub(value: Uint96): Uint96;
    mul(value: Uint96): Uint96;
    divDn(value: Uint96): Uint96;
    divUp(value: Uint96): Uint96;
    divRd(value: Uint96): Uint96;
    mod(value: Uint96): Uint96;
    static fromUint8Array(uint8Array: Uint8Array): Uint96;
    static fromArray(array: Array<number>): Uint96;
    static fromBuffer(buffer: Buffer): Uint96;
    static fromHexish(hexish: string): Uint96;
    static fromNumber(number: number): Uint96;
}
export declare class Uint104 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint104): Uint104;
    sub(value: Uint104): Uint104;
    mul(value: Uint104): Uint104;
    divDn(value: Uint104): Uint104;
    divUp(value: Uint104): Uint104;
    divRd(value: Uint104): Uint104;
    mod(value: Uint104): Uint104;
    static fromUint8Array(uint8Array: Uint8Array): Uint104;
    static fromArray(array: Array<number>): Uint104;
    static fromBuffer(buffer: Buffer): Uint104;
    static fromHexish(hexish: string): Uint104;
    static fromNumber(number: number): Uint104;
}
export declare class Uint112 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint112): Uint112;
    sub(value: Uint112): Uint112;
    mul(value: Uint112): Uint112;
    divDn(value: Uint112): Uint112;
    divUp(value: Uint112): Uint112;
    divRd(value: Uint112): Uint112;
    mod(value: Uint112): Uint112;
    static fromUint8Array(uint8Array: Uint8Array): Uint112;
    static fromArray(array: Array<number>): Uint112;
    static fromBuffer(buffer: Buffer): Uint112;
    static fromHexish(hexish: string): Uint112;
    static fromNumber(number: number): Uint112;
}
export declare class Uint120 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint120): Uint120;
    sub(value: Uint120): Uint120;
    mul(value: Uint120): Uint120;
    divDn(value: Uint120): Uint120;
    divUp(value: Uint120): Uint120;
    divRd(value: Uint120): Uint120;
    mod(value: Uint120): Uint120;
    static fromUint8Array(uint8Array: Uint8Array): Uint120;
    static fromArray(array: Array<number>): Uint120;
    static fromBuffer(buffer: Buffer): Uint120;
    static fromHexish(hexish: string): Uint120;
    static fromNumber(number: number): Uint120;
}
export declare class Uint128 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint128): Uint128;
    sub(value: Uint128): Uint128;
    mul(value: Uint128): Uint128;
    divDn(value: Uint128): Uint128;
    divUp(value: Uint128): Uint128;
    divRd(value: Uint128): Uint128;
    mod(value: Uint128): Uint128;
    static fromUint8Array(uint8Array: Uint8Array): Uint128;
    static fromArray(array: Array<number>): Uint128;
    static fromBuffer(buffer: Buffer): Uint128;
    static fromHexish(hexish: string): Uint128;
    static fromNumber(number: number): Uint128;
}
export declare class Uint136 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint136): Uint136;
    sub(value: Uint136): Uint136;
    mul(value: Uint136): Uint136;
    divDn(value: Uint136): Uint136;
    divUp(value: Uint136): Uint136;
    divRd(value: Uint136): Uint136;
    mod(value: Uint136): Uint136;
    static fromUint8Array(uint8Array: Uint8Array): Uint136;
    static fromArray(array: Array<number>): Uint136;
    static fromBuffer(buffer: Buffer): Uint136;
    static fromHexish(hexish: string): Uint136;
    static fromNumber(number: number): Uint136;
}
export declare class Uint144 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint144): Uint144;
    sub(value: Uint144): Uint144;
    mul(value: Uint144): Uint144;
    divDn(value: Uint144): Uint144;
    divUp(value: Uint144): Uint144;
    divRd(value: Uint144): Uint144;
    mod(value: Uint144): Uint144;
    static fromUint8Array(uint8Array: Uint8Array): Uint144;
    static fromArray(array: Array<number>): Uint144;
    static fromBuffer(buffer: Buffer): Uint144;
    static fromHexish(hexish: string): Uint144;
    static fromNumber(number: number): Uint144;
}
export declare class Uint152 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint152): Uint152;
    sub(value: Uint152): Uint152;
    mul(value: Uint152): Uint152;
    divDn(value: Uint152): Uint152;
    divUp(value: Uint152): Uint152;
    divRd(value: Uint152): Uint152;
    mod(value: Uint152): Uint152;
    static fromUint8Array(uint8Array: Uint8Array): Uint152;
    static fromArray(array: Array<number>): Uint152;
    static fromBuffer(buffer: Buffer): Uint152;
    static fromHexish(hexish: string): Uint152;
    static fromNumber(number: number): Uint152;
}
export declare class Uint160 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint160): Uint160;
    sub(value: Uint160): Uint160;
    mul(value: Uint160): Uint160;
    divDn(value: Uint160): Uint160;
    divUp(value: Uint160): Uint160;
    divRd(value: Uint160): Uint160;
    mod(value: Uint160): Uint160;
    static fromUint8Array(uint8Array: Uint8Array): Uint160;
    static fromArray(array: Array<number>): Uint160;
    static fromBuffer(buffer: Buffer): Uint160;
    static fromHexish(hexish: string): Uint160;
    static fromNumber(number: number): Uint160;
}
export declare class Uint168 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint168): Uint168;
    sub(value: Uint168): Uint168;
    mul(value: Uint168): Uint168;
    divDn(value: Uint168): Uint168;
    divUp(value: Uint168): Uint168;
    divRd(value: Uint168): Uint168;
    mod(value: Uint168): Uint168;
    static fromUint8Array(uint8Array: Uint8Array): Uint168;
    static fromArray(array: Array<number>): Uint168;
    static fromBuffer(buffer: Buffer): Uint168;
    static fromHexish(hexish: string): Uint168;
    static fromNumber(number: number): Uint168;
}
export declare class Uint176 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint176): Uint176;
    sub(value: Uint176): Uint176;
    mul(value: Uint176): Uint176;
    divDn(value: Uint176): Uint176;
    divUp(value: Uint176): Uint176;
    divRd(value: Uint176): Uint176;
    mod(value: Uint176): Uint176;
    static fromUint8Array(uint8Array: Uint8Array): Uint176;
    static fromArray(array: Array<number>): Uint176;
    static fromBuffer(buffer: Buffer): Uint176;
    static fromHexish(hexish: string): Uint176;
    static fromNumber(number: number): Uint176;
}
export declare class Uint184 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint184): Uint184;
    sub(value: Uint184): Uint184;
    mul(value: Uint184): Uint184;
    divDn(value: Uint184): Uint184;
    divUp(value: Uint184): Uint184;
    divRd(value: Uint184): Uint184;
    mod(value: Uint184): Uint184;
    static fromUint8Array(uint8Array: Uint8Array): Uint184;
    static fromArray(array: Array<number>): Uint184;
    static fromBuffer(buffer: Buffer): Uint184;
    static fromHexish(hexish: string): Uint184;
    static fromNumber(number: number): Uint184;
}
export declare class Uint192 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint192): Uint192;
    sub(value: Uint192): Uint192;
    mul(value: Uint192): Uint192;
    divDn(value: Uint192): Uint192;
    divUp(value: Uint192): Uint192;
    divRd(value: Uint192): Uint192;
    mod(value: Uint192): Uint192;
    static fromUint8Array(uint8Array: Uint8Array): Uint192;
    static fromArray(array: Array<number>): Uint192;
    static fromBuffer(buffer: Buffer): Uint192;
    static fromHexish(hexish: string): Uint192;
    static fromNumber(number: number): Uint192;
}
export declare class Uint200 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint200): Uint200;
    sub(value: Uint200): Uint200;
    mul(value: Uint200): Uint200;
    divDn(value: Uint200): Uint200;
    divUp(value: Uint200): Uint200;
    divRd(value: Uint200): Uint200;
    mod(value: Uint200): Uint200;
    static fromUint8Array(uint8Array: Uint8Array): Uint200;
    static fromArray(array: Array<number>): Uint200;
    static fromBuffer(buffer: Buffer): Uint200;
    static fromHexish(hexish: string): Uint200;
    static fromNumber(number: number): Uint200;
}
export declare class Uint208 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint208): Uint208;
    sub(value: Uint208): Uint208;
    mul(value: Uint208): Uint208;
    divDn(value: Uint208): Uint208;
    divUp(value: Uint208): Uint208;
    divRd(value: Uint208): Uint208;
    mod(value: Uint208): Uint208;
    static fromUint8Array(uint8Array: Uint8Array): Uint208;
    static fromArray(array: Array<number>): Uint208;
    static fromBuffer(buffer: Buffer): Uint208;
    static fromHexish(hexish: string): Uint208;
    static fromNumber(number: number): Uint208;
}
export declare class Uint216 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint216): Uint216;
    sub(value: Uint216): Uint216;
    mul(value: Uint216): Uint216;
    divDn(value: Uint216): Uint216;
    divUp(value: Uint216): Uint216;
    divRd(value: Uint216): Uint216;
    mod(value: Uint216): Uint216;
    static fromUint8Array(uint8Array: Uint8Array): Uint216;
    static fromArray(array: Array<number>): Uint216;
    static fromBuffer(buffer: Buffer): Uint216;
    static fromHexish(hexish: string): Uint216;
    static fromNumber(number: number): Uint216;
}
export declare class Uint224 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint224): Uint224;
    sub(value: Uint224): Uint224;
    mul(value: Uint224): Uint224;
    divDn(value: Uint224): Uint224;
    divUp(value: Uint224): Uint224;
    divRd(value: Uint224): Uint224;
    mod(value: Uint224): Uint224;
    static fromUint8Array(uint8Array: Uint8Array): Uint224;
    static fromArray(array: Array<number>): Uint224;
    static fromBuffer(buffer: Buffer): Uint224;
    static fromHexish(hexish: string): Uint224;
    static fromNumber(number: number): Uint224;
}
export declare class Uint232 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint232): Uint232;
    sub(value: Uint232): Uint232;
    mul(value: Uint232): Uint232;
    divDn(value: Uint232): Uint232;
    divUp(value: Uint232): Uint232;
    divRd(value: Uint232): Uint232;
    mod(value: Uint232): Uint232;
    static fromUint8Array(uint8Array: Uint8Array): Uint232;
    static fromArray(array: Array<number>): Uint232;
    static fromBuffer(buffer: Buffer): Uint232;
    static fromHexish(hexish: string): Uint232;
    static fromNumber(number: number): Uint232;
}
export declare class Uint240 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint240): Uint240;
    sub(value: Uint240): Uint240;
    mul(value: Uint240): Uint240;
    divDn(value: Uint240): Uint240;
    divUp(value: Uint240): Uint240;
    divRd(value: Uint240): Uint240;
    mod(value: Uint240): Uint240;
    static fromUint8Array(uint8Array: Uint8Array): Uint240;
    static fromArray(array: Array<number>): Uint240;
    static fromBuffer(buffer: Buffer): Uint240;
    static fromHexish(hexish: string): Uint240;
    static fromNumber(number: number): Uint240;
}
export declare class Uint248 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint248): Uint248;
    sub(value: Uint248): Uint248;
    mul(value: Uint248): Uint248;
    divDn(value: Uint248): Uint248;
    divUp(value: Uint248): Uint248;
    divRd(value: Uint248): Uint248;
    mod(value: Uint248): Uint248;
    static fromUint8Array(uint8Array: Uint8Array): Uint248;
    static fromArray(array: Array<number>): Uint248;
    static fromBuffer(buffer: Buffer): Uint248;
    static fromHexish(hexish: string): Uint248;
    static fromNumber(number: number): Uint248;
}
export declare class Uint256 extends UintX implements Uintish {
    static LENGTH: number;
    constructor(uint8Array: Uint8Array);
    add(value: Uint256): Uint256;
    sub(value: Uint256): Uint256;
    mul(value: Uint256): Uint256;
    divDn(value: Uint256): Uint256;
    divUp(value: Uint256): Uint256;
    divRd(value: Uint256): Uint256;
    mod(value: Uint256): Uint256;
    static fromUint8Array(uint8Array: Uint8Array): Uint256;
    static fromArray(array: Array<number>): Uint256;
    static fromBuffer(buffer: Buffer): Uint256;
    static fromHexish(hexish: string): Uint256;
    static fromNumber(number: number): Uint256;
}
