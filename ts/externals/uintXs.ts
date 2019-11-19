import { UintX } from '../internals/UintX'
import { External, Uintish } from '../interfaces'
import * as from from '../utils/from'
import * as uintMath from '../utils/uintMath'
import Bn from 'bn.js'

export class Uint8 extends UintX implements Uintish {

  public static LENGTH: number = 1;

  constructor(uint8Array: Uint8Array) {
    super(Uint8.LENGTH, uint8Array)
  }

  add(value: Uint8): Uint8 {
    return uintMath.add(exports.Uint8, this, value);
  }

  sub(value: Uint8): Uint8 {
    return uintMath.sub(exports.Uint8, this, value);
  }

  mul(value: Uint8): Uint8 {
    return uintMath.mul(exports.Uint8, this, value);
  }

  divDn(value: Uint8): Uint8 {
    return uintMath.divDn(exports.Uint8, this, value);
  }

  divUp(value: Uint8): Uint8 {
    return uintMath.divUp(exports.Uint8, this, value);
  }

  divRd(value: Uint8): Uint8 {
    return uintMath.divRd(exports.Uint8, this, value);
  }

  mod(value: Uint8): Uint8 {
    return uintMath.mod(exports.Uint8, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint8 {
    return from.uint8Array(exports.Uint8, uint8Array)
  }

  static fromArray(array: Array<number>): Uint8 {
    return from.array(exports.Uint8, array)
  }

  static fromBuffer(buffer: Buffer): Uint8 {
    return from.buffer(exports.Uint8, buffer)
  }

  static fromHexish(hexish: string): Uint8 {
    return from.hexish(exports.Uint8, hexish)
  }

  static fromBn(bn: Bn): Uint8 {
    return from.uintBn(exports.Uint8, bn)
  }

  static fromNumber(number: number): Uint8 {
    return from.uintNumber(exports.Uint8, number)
  }

}

export class Uint16 extends UintX implements Uintish {

  public static LENGTH: number = 2;

  constructor(uint8Array: Uint8Array) {
    super(Uint16.LENGTH, uint8Array)
  }

  add(value: Uint16): Uint16 {
    return uintMath.add(exports.Uint16, this, value);
  }

  sub(value: Uint16): Uint16 {
    return uintMath.sub(exports.Uint16, this, value);
  }

  mul(value: Uint16): Uint16 {
    return uintMath.mul(exports.Uint16, this, value);
  }

  divDn(value: Uint16): Uint16 {
    return uintMath.divDn(exports.Uint16, this, value);
  }

  divUp(value: Uint16): Uint16 {
    return uintMath.divUp(exports.Uint16, this, value);
  }

  divRd(value: Uint16): Uint16 {
    return uintMath.divRd(exports.Uint16, this, value);
  }

  mod(value: Uint16): Uint16 {
    return uintMath.mod(exports.Uint16, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint16 {
    return from.uint8Array(exports.Uint16, uint8Array)
  }

  static fromArray(array: Array<number>): Uint16 {
    return from.array(exports.Uint16, array)
  }

  static fromBuffer(buffer: Buffer): Uint16 {
    return from.buffer(exports.Uint16, buffer)
  }

  static fromHexish(hexish: string): Uint16 {
    return from.hexish(exports.Uint16, hexish)
  }

  static fromBn(bn: Bn): Uint16 {
    return from.uintBn(exports.Uint16, bn)
  }

  static fromNumber(number: number): Uint16 {
    return from.uintNumber(exports.Uint16, number)
  }

}

export class Uint24 extends UintX implements Uintish {

  public static LENGTH: number = 3;

  constructor(uint8Array: Uint8Array) {
    super(Uint24.LENGTH, uint8Array)
  }

  add(value: Uint24): Uint24 {
    return uintMath.add(exports.Uint24, this, value);
  }

  sub(value: Uint24): Uint24 {
    return uintMath.sub(exports.Uint24, this, value);
  }

  mul(value: Uint24): Uint24 {
    return uintMath.mul(exports.Uint24, this, value);
  }

  divDn(value: Uint24): Uint24 {
    return uintMath.divDn(exports.Uint24, this, value);
  }

  divUp(value: Uint24): Uint24 {
    return uintMath.divUp(exports.Uint24, this, value);
  }

  divRd(value: Uint24): Uint24 {
    return uintMath.divRd(exports.Uint24, this, value);
  }

  mod(value: Uint24): Uint24 {
    return uintMath.mod(exports.Uint24, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint24 {
    return from.uint8Array(exports.Uint24, uint8Array)
  }

  static fromArray(array: Array<number>): Uint24 {
    return from.array(exports.Uint24, array)
  }

  static fromBuffer(buffer: Buffer): Uint24 {
    return from.buffer(exports.Uint24, buffer)
  }

  static fromHexish(hexish: string): Uint24 {
    return from.hexish(exports.Uint24, hexish)
  }

  static fromBn(bn: Bn): Uint24 {
    return from.uintBn(exports.Uint24, bn)
  }

  static fromNumber(number: number): Uint24 {
    return from.uintNumber(exports.Uint24, number)
  }

}

export class Uint32 extends UintX implements Uintish {

  public static LENGTH: number = 4;

  constructor(uint8Array: Uint8Array) {
    super(Uint32.LENGTH, uint8Array)
  }

  add(value: Uint32): Uint32 {
    return uintMath.add(exports.Uint32, this, value);
  }

  sub(value: Uint32): Uint32 {
    return uintMath.sub(exports.Uint32, this, value);
  }

  mul(value: Uint32): Uint32 {
    return uintMath.mul(exports.Uint32, this, value);
  }

  divDn(value: Uint32): Uint32 {
    return uintMath.divDn(exports.Uint32, this, value);
  }

  divUp(value: Uint32): Uint32 {
    return uintMath.divUp(exports.Uint32, this, value);
  }

  divRd(value: Uint32): Uint32 {
    return uintMath.divRd(exports.Uint32, this, value);
  }

  mod(value: Uint32): Uint32 {
    return uintMath.mod(exports.Uint32, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint32 {
    return from.uint8Array(exports.Uint32, uint8Array)
  }

  static fromArray(array: Array<number>): Uint32 {
    return from.array(exports.Uint32, array)
  }

  static fromBuffer(buffer: Buffer): Uint32 {
    return from.buffer(exports.Uint32, buffer)
  }

  static fromHexish(hexish: string): Uint32 {
    return from.hexish(exports.Uint32, hexish)
  }

  static fromBn(bn: Bn): Uint32 {
    return from.uintBn(exports.Uint32, bn)
  }

  static fromNumber(number: number): Uint32 {
    return from.uintNumber(exports.Uint32, number)
  }

}

export class Uint40 extends UintX implements Uintish {

  public static LENGTH: number = 5;

  constructor(uint8Array: Uint8Array) {
    super(Uint40.LENGTH, uint8Array)
  }

  add(value: Uint40): Uint40 {
    return uintMath.add(exports.Uint40, this, value);
  }

  sub(value: Uint40): Uint40 {
    return uintMath.sub(exports.Uint40, this, value);
  }

  mul(value: Uint40): Uint40 {
    return uintMath.mul(exports.Uint40, this, value);
  }

  divDn(value: Uint40): Uint40 {
    return uintMath.divDn(exports.Uint40, this, value);
  }

  divUp(value: Uint40): Uint40 {
    return uintMath.divUp(exports.Uint40, this, value);
  }

  divRd(value: Uint40): Uint40 {
    return uintMath.divRd(exports.Uint40, this, value);
  }

  mod(value: Uint40): Uint40 {
    return uintMath.mod(exports.Uint40, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint40 {
    return from.uint8Array(exports.Uint40, uint8Array)
  }

  static fromArray(array: Array<number>): Uint40 {
    return from.array(exports.Uint40, array)
  }

  static fromBuffer(buffer: Buffer): Uint40 {
    return from.buffer(exports.Uint40, buffer)
  }

  static fromHexish(hexish: string): Uint40 {
    return from.hexish(exports.Uint40, hexish)
  }

  static fromBn(bn: Bn): Uint40 {
    return from.uintBn(exports.Uint40, bn)
  }

  static fromNumber(number: number): Uint40 {
    return from.uintNumber(exports.Uint40, number)
  }

}

export class Uint48 extends UintX implements Uintish {

  public static LENGTH: number = 6;

  constructor(uint8Array: Uint8Array) {
    super(Uint48.LENGTH, uint8Array)
  }

  add(value: Uint48): Uint48 {
    return uintMath.add(exports.Uint48, this, value);
  }

  sub(value: Uint48): Uint48 {
    return uintMath.sub(exports.Uint48, this, value);
  }

  mul(value: Uint48): Uint48 {
    return uintMath.mul(exports.Uint48, this, value);
  }

  divDn(value: Uint48): Uint48 {
    return uintMath.divDn(exports.Uint48, this, value);
  }

  divUp(value: Uint48): Uint48 {
    return uintMath.divUp(exports.Uint48, this, value);
  }

  divRd(value: Uint48): Uint48 {
    return uintMath.divRd(exports.Uint48, this, value);
  }

  mod(value: Uint48): Uint48 {
    return uintMath.mod(exports.Uint48, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint48 {
    return from.uint8Array(exports.Uint48, uint8Array)
  }

  static fromArray(array: Array<number>): Uint48 {
    return from.array(exports.Uint48, array)
  }

  static fromBuffer(buffer: Buffer): Uint48 {
    return from.buffer(exports.Uint48, buffer)
  }

  static fromHexish(hexish: string): Uint48 {
    return from.hexish(exports.Uint48, hexish)
  }

  static fromBn(bn: Bn): Uint48 {
    return from.uintBn(exports.Uint48, bn)
  }

  static fromNumber(number: number): Uint48 {
    return from.uintNumber(exports.Uint48, number)
  }

}

export class Uint56 extends UintX implements Uintish {

  public static LENGTH: number = 7;

  constructor(uint8Array: Uint8Array) {
    super(Uint56.LENGTH, uint8Array)
  }

  add(value: Uint56): Uint56 {
    return uintMath.add(exports.Uint56, this, value);
  }

  sub(value: Uint56): Uint56 {
    return uintMath.sub(exports.Uint56, this, value);
  }

  mul(value: Uint56): Uint56 {
    return uintMath.mul(exports.Uint56, this, value);
  }

  divDn(value: Uint56): Uint56 {
    return uintMath.divDn(exports.Uint56, this, value);
  }

  divUp(value: Uint56): Uint56 {
    return uintMath.divUp(exports.Uint56, this, value);
  }

  divRd(value: Uint56): Uint56 {
    return uintMath.divRd(exports.Uint56, this, value);
  }

  mod(value: Uint56): Uint56 {
    return uintMath.mod(exports.Uint56, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint56 {
    return from.uint8Array(exports.Uint56, uint8Array)
  }

  static fromArray(array: Array<number>): Uint56 {
    return from.array(exports.Uint56, array)
  }

  static fromBuffer(buffer: Buffer): Uint56 {
    return from.buffer(exports.Uint56, buffer)
  }

  static fromHexish(hexish: string): Uint56 {
    return from.hexish(exports.Uint56, hexish)
  }

  static fromBn(bn: Bn): Uint56 {
    return from.uintBn(exports.Uint56, bn)
  }

  static fromNumber(number: number): Uint56 {
    return from.uintNumber(exports.Uint56, number)
  }

}

export class Uint64 extends UintX implements Uintish {

  public static LENGTH: number = 8;

  constructor(uint8Array: Uint8Array) {
    super(Uint64.LENGTH, uint8Array)
  }

  add(value: Uint64): Uint64 {
    return uintMath.add(exports.Uint64, this, value);
  }

  sub(value: Uint64): Uint64 {
    return uintMath.sub(exports.Uint64, this, value);
  }

  mul(value: Uint64): Uint64 {
    return uintMath.mul(exports.Uint64, this, value);
  }

  divDn(value: Uint64): Uint64 {
    return uintMath.divDn(exports.Uint64, this, value);
  }

  divUp(value: Uint64): Uint64 {
    return uintMath.divUp(exports.Uint64, this, value);
  }

  divRd(value: Uint64): Uint64 {
    return uintMath.divRd(exports.Uint64, this, value);
  }

  mod(value: Uint64): Uint64 {
    return uintMath.mod(exports.Uint64, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint64 {
    return from.uint8Array(exports.Uint64, uint8Array)
  }

  static fromArray(array: Array<number>): Uint64 {
    return from.array(exports.Uint64, array)
  }

  static fromBuffer(buffer: Buffer): Uint64 {
    return from.buffer(exports.Uint64, buffer)
  }

  static fromHexish(hexish: string): Uint64 {
    return from.hexish(exports.Uint64, hexish)
  }

  static fromBn(bn: Bn): Uint64 {
    return from.uintBn(exports.Uint64, bn)
  }

  static fromNumber(number: number): Uint64 {
    return from.uintNumber(exports.Uint64, number)
  }

}

export class Uint72 extends UintX implements Uintish {

  public static LENGTH: number = 9;

  constructor(uint8Array: Uint8Array) {
    super(Uint72.LENGTH, uint8Array)
  }

  add(value: Uint72): Uint72 {
    return uintMath.add(exports.Uint72, this, value);
  }

  sub(value: Uint72): Uint72 {
    return uintMath.sub(exports.Uint72, this, value);
  }

  mul(value: Uint72): Uint72 {
    return uintMath.mul(exports.Uint72, this, value);
  }

  divDn(value: Uint72): Uint72 {
    return uintMath.divDn(exports.Uint72, this, value);
  }

  divUp(value: Uint72): Uint72 {
    return uintMath.divUp(exports.Uint72, this, value);
  }

  divRd(value: Uint72): Uint72 {
    return uintMath.divRd(exports.Uint72, this, value);
  }

  mod(value: Uint72): Uint72 {
    return uintMath.mod(exports.Uint72, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint72 {
    return from.uint8Array(exports.Uint72, uint8Array)
  }

  static fromArray(array: Array<number>): Uint72 {
    return from.array(exports.Uint72, array)
  }

  static fromBuffer(buffer: Buffer): Uint72 {
    return from.buffer(exports.Uint72, buffer)
  }

  static fromHexish(hexish: string): Uint72 {
    return from.hexish(exports.Uint72, hexish)
  }

  static fromBn(bn: Bn): Uint72 {
    return from.uintBn(exports.Uint72, bn)
  }

  static fromNumber(number: number): Uint72 {
    return from.uintNumber(exports.Uint72, number)
  }

}

export class Uint80 extends UintX implements Uintish {

  public static LENGTH: number = 10;

  constructor(uint8Array: Uint8Array) {
    super(Uint80.LENGTH, uint8Array)
  }

  add(value: Uint80): Uint80 {
    return uintMath.add(exports.Uint80, this, value);
  }

  sub(value: Uint80): Uint80 {
    return uintMath.sub(exports.Uint80, this, value);
  }

  mul(value: Uint80): Uint80 {
    return uintMath.mul(exports.Uint80, this, value);
  }

  divDn(value: Uint80): Uint80 {
    return uintMath.divDn(exports.Uint80, this, value);
  }

  divUp(value: Uint80): Uint80 {
    return uintMath.divUp(exports.Uint80, this, value);
  }

  divRd(value: Uint80): Uint80 {
    return uintMath.divRd(exports.Uint80, this, value);
  }

  mod(value: Uint80): Uint80 {
    return uintMath.mod(exports.Uint80, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint80 {
    return from.uint8Array(exports.Uint80, uint8Array)
  }

  static fromArray(array: Array<number>): Uint80 {
    return from.array(exports.Uint80, array)
  }

  static fromBuffer(buffer: Buffer): Uint80 {
    return from.buffer(exports.Uint80, buffer)
  }

  static fromHexish(hexish: string): Uint80 {
    return from.hexish(exports.Uint80, hexish)
  }

  static fromBn(bn: Bn): Uint80 {
    return from.uintBn(exports.Uint80, bn)
  }

  static fromNumber(number: number): Uint80 {
    return from.uintNumber(exports.Uint80, number)
  }

}

export class Uint88 extends UintX implements Uintish {

  public static LENGTH: number = 11;

  constructor(uint8Array: Uint8Array) {
    super(Uint88.LENGTH, uint8Array)
  }

  add(value: Uint88): Uint88 {
    return uintMath.add(exports.Uint88, this, value);
  }

  sub(value: Uint88): Uint88 {
    return uintMath.sub(exports.Uint88, this, value);
  }

  mul(value: Uint88): Uint88 {
    return uintMath.mul(exports.Uint88, this, value);
  }

  divDn(value: Uint88): Uint88 {
    return uintMath.divDn(exports.Uint88, this, value);
  }

  divUp(value: Uint88): Uint88 {
    return uintMath.divUp(exports.Uint88, this, value);
  }

  divRd(value: Uint88): Uint88 {
    return uintMath.divRd(exports.Uint88, this, value);
  }

  mod(value: Uint88): Uint88 {
    return uintMath.mod(exports.Uint88, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint88 {
    return from.uint8Array(exports.Uint88, uint8Array)
  }

  static fromArray(array: Array<number>): Uint88 {
    return from.array(exports.Uint88, array)
  }

  static fromBuffer(buffer: Buffer): Uint88 {
    return from.buffer(exports.Uint88, buffer)
  }

  static fromHexish(hexish: string): Uint88 {
    return from.hexish(exports.Uint88, hexish)
  }

  static fromBn(bn: Bn): Uint88 {
    return from.uintBn(exports.Uint88, bn)
  }

  static fromNumber(number: number): Uint88 {
    return from.uintNumber(exports.Uint88, number)
  }

}

export class Uint96 extends UintX implements Uintish {

  public static LENGTH: number = 12;

  constructor(uint8Array: Uint8Array) {
    super(Uint96.LENGTH, uint8Array)
  }

  add(value: Uint96): Uint96 {
    return uintMath.add(exports.Uint96, this, value);
  }

  sub(value: Uint96): Uint96 {
    return uintMath.sub(exports.Uint96, this, value);
  }

  mul(value: Uint96): Uint96 {
    return uintMath.mul(exports.Uint96, this, value);
  }

  divDn(value: Uint96): Uint96 {
    return uintMath.divDn(exports.Uint96, this, value);
  }

  divUp(value: Uint96): Uint96 {
    return uintMath.divUp(exports.Uint96, this, value);
  }

  divRd(value: Uint96): Uint96 {
    return uintMath.divRd(exports.Uint96, this, value);
  }

  mod(value: Uint96): Uint96 {
    return uintMath.mod(exports.Uint96, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint96 {
    return from.uint8Array(exports.Uint96, uint8Array)
  }

  static fromArray(array: Array<number>): Uint96 {
    return from.array(exports.Uint96, array)
  }

  static fromBuffer(buffer: Buffer): Uint96 {
    return from.buffer(exports.Uint96, buffer)
  }

  static fromHexish(hexish: string): Uint96 {
    return from.hexish(exports.Uint96, hexish)
  }

  static fromBn(bn: Bn): Uint96 {
    return from.uintBn(exports.Uint96, bn)
  }

  static fromNumber(number: number): Uint96 {
    return from.uintNumber(exports.Uint96, number)
  }

}

export class Uint104 extends UintX implements Uintish {

  public static LENGTH: number = 13;

  constructor(uint8Array: Uint8Array) {
    super(Uint104.LENGTH, uint8Array)
  }

  add(value: Uint104): Uint104 {
    return uintMath.add(exports.Uint104, this, value);
  }

  sub(value: Uint104): Uint104 {
    return uintMath.sub(exports.Uint104, this, value);
  }

  mul(value: Uint104): Uint104 {
    return uintMath.mul(exports.Uint104, this, value);
  }

  divDn(value: Uint104): Uint104 {
    return uintMath.divDn(exports.Uint104, this, value);
  }

  divUp(value: Uint104): Uint104 {
    return uintMath.divUp(exports.Uint104, this, value);
  }

  divRd(value: Uint104): Uint104 {
    return uintMath.divRd(exports.Uint104, this, value);
  }

  mod(value: Uint104): Uint104 {
    return uintMath.mod(exports.Uint104, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint104 {
    return from.uint8Array(exports.Uint104, uint8Array)
  }

  static fromArray(array: Array<number>): Uint104 {
    return from.array(exports.Uint104, array)
  }

  static fromBuffer(buffer: Buffer): Uint104 {
    return from.buffer(exports.Uint104, buffer)
  }

  static fromHexish(hexish: string): Uint104 {
    return from.hexish(exports.Uint104, hexish)
  }

  static fromBn(bn: Bn): Uint104 {
    return from.uintBn(exports.Uint104, bn)
  }

  static fromNumber(number: number): Uint104 {
    return from.uintNumber(exports.Uint104, number)
  }

}

export class Uint112 extends UintX implements Uintish {

  public static LENGTH: number = 14;

  constructor(uint8Array: Uint8Array) {
    super(Uint112.LENGTH, uint8Array)
  }

  add(value: Uint112): Uint112 {
    return uintMath.add(exports.Uint112, this, value);
  }

  sub(value: Uint112): Uint112 {
    return uintMath.sub(exports.Uint112, this, value);
  }

  mul(value: Uint112): Uint112 {
    return uintMath.mul(exports.Uint112, this, value);
  }

  divDn(value: Uint112): Uint112 {
    return uintMath.divDn(exports.Uint112, this, value);
  }

  divUp(value: Uint112): Uint112 {
    return uintMath.divUp(exports.Uint112, this, value);
  }

  divRd(value: Uint112): Uint112 {
    return uintMath.divRd(exports.Uint112, this, value);
  }

  mod(value: Uint112): Uint112 {
    return uintMath.mod(exports.Uint112, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint112 {
    return from.uint8Array(exports.Uint112, uint8Array)
  }

  static fromArray(array: Array<number>): Uint112 {
    return from.array(exports.Uint112, array)
  }

  static fromBuffer(buffer: Buffer): Uint112 {
    return from.buffer(exports.Uint112, buffer)
  }

  static fromHexish(hexish: string): Uint112 {
    return from.hexish(exports.Uint112, hexish)
  }

  static fromBn(bn: Bn): Uint112 {
    return from.uintBn(exports.Uint112, bn)
  }

  static fromNumber(number: number): Uint112 {
    return from.uintNumber(exports.Uint112, number)
  }

}

export class Uint120 extends UintX implements Uintish {

  public static LENGTH: number = 15;

  constructor(uint8Array: Uint8Array) {
    super(Uint120.LENGTH, uint8Array)
  }

  add(value: Uint120): Uint120 {
    return uintMath.add(exports.Uint120, this, value);
  }

  sub(value: Uint120): Uint120 {
    return uintMath.sub(exports.Uint120, this, value);
  }

  mul(value: Uint120): Uint120 {
    return uintMath.mul(exports.Uint120, this, value);
  }

  divDn(value: Uint120): Uint120 {
    return uintMath.divDn(exports.Uint120, this, value);
  }

  divUp(value: Uint120): Uint120 {
    return uintMath.divUp(exports.Uint120, this, value);
  }

  divRd(value: Uint120): Uint120 {
    return uintMath.divRd(exports.Uint120, this, value);
  }

  mod(value: Uint120): Uint120 {
    return uintMath.mod(exports.Uint120, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint120 {
    return from.uint8Array(exports.Uint120, uint8Array)
  }

  static fromArray(array: Array<number>): Uint120 {
    return from.array(exports.Uint120, array)
  }

  static fromBuffer(buffer: Buffer): Uint120 {
    return from.buffer(exports.Uint120, buffer)
  }

  static fromHexish(hexish: string): Uint120 {
    return from.hexish(exports.Uint120, hexish)
  }

  static fromBn(bn: Bn): Uint120 {
    return from.uintBn(exports.Uint120, bn)
  }

  static fromNumber(number: number): Uint120 {
    return from.uintNumber(exports.Uint120, number)
  }

}

export class Uint128 extends UintX implements Uintish {

  public static LENGTH: number = 16;

  constructor(uint8Array: Uint8Array) {
    super(Uint128.LENGTH, uint8Array)
  }

  add(value: Uint128): Uint128 {
    return uintMath.add(exports.Uint128, this, value);
  }

  sub(value: Uint128): Uint128 {
    return uintMath.sub(exports.Uint128, this, value);
  }

  mul(value: Uint128): Uint128 {
    return uintMath.mul(exports.Uint128, this, value);
  }

  divDn(value: Uint128): Uint128 {
    return uintMath.divDn(exports.Uint128, this, value);
  }

  divUp(value: Uint128): Uint128 {
    return uintMath.divUp(exports.Uint128, this, value);
  }

  divRd(value: Uint128): Uint128 {
    return uintMath.divRd(exports.Uint128, this, value);
  }

  mod(value: Uint128): Uint128 {
    return uintMath.mod(exports.Uint128, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint128 {
    return from.uint8Array(exports.Uint128, uint8Array)
  }

  static fromArray(array: Array<number>): Uint128 {
    return from.array(exports.Uint128, array)
  }

  static fromBuffer(buffer: Buffer): Uint128 {
    return from.buffer(exports.Uint128, buffer)
  }

  static fromHexish(hexish: string): Uint128 {
    return from.hexish(exports.Uint128, hexish)
  }

  static fromBn(bn: Bn): Uint128 {
    return from.uintBn(exports.Uint128, bn)
  }

  static fromNumber(number: number): Uint128 {
    return from.uintNumber(exports.Uint128, number)
  }

}

export class Uint136 extends UintX implements Uintish {

  public static LENGTH: number = 17;

  constructor(uint8Array: Uint8Array) {
    super(Uint136.LENGTH, uint8Array)
  }

  add(value: Uint136): Uint136 {
    return uintMath.add(exports.Uint136, this, value);
  }

  sub(value: Uint136): Uint136 {
    return uintMath.sub(exports.Uint136, this, value);
  }

  mul(value: Uint136): Uint136 {
    return uintMath.mul(exports.Uint136, this, value);
  }

  divDn(value: Uint136): Uint136 {
    return uintMath.divDn(exports.Uint136, this, value);
  }

  divUp(value: Uint136): Uint136 {
    return uintMath.divUp(exports.Uint136, this, value);
  }

  divRd(value: Uint136): Uint136 {
    return uintMath.divRd(exports.Uint136, this, value);
  }

  mod(value: Uint136): Uint136 {
    return uintMath.mod(exports.Uint136, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint136 {
    return from.uint8Array(exports.Uint136, uint8Array)
  }

  static fromArray(array: Array<number>): Uint136 {
    return from.array(exports.Uint136, array)
  }

  static fromBuffer(buffer: Buffer): Uint136 {
    return from.buffer(exports.Uint136, buffer)
  }

  static fromHexish(hexish: string): Uint136 {
    return from.hexish(exports.Uint136, hexish)
  }

  static fromBn(bn: Bn): Uint136 {
    return from.uintBn(exports.Uint136, bn)
  }

  static fromNumber(number: number): Uint136 {
    return from.uintNumber(exports.Uint136, number)
  }

}

export class Uint144 extends UintX implements Uintish {

  public static LENGTH: number = 18;

  constructor(uint8Array: Uint8Array) {
    super(Uint144.LENGTH, uint8Array)
  }

  add(value: Uint144): Uint144 {
    return uintMath.add(exports.Uint144, this, value);
  }

  sub(value: Uint144): Uint144 {
    return uintMath.sub(exports.Uint144, this, value);
  }

  mul(value: Uint144): Uint144 {
    return uintMath.mul(exports.Uint144, this, value);
  }

  divDn(value: Uint144): Uint144 {
    return uintMath.divDn(exports.Uint144, this, value);
  }

  divUp(value: Uint144): Uint144 {
    return uintMath.divUp(exports.Uint144, this, value);
  }

  divRd(value: Uint144): Uint144 {
    return uintMath.divRd(exports.Uint144, this, value);
  }

  mod(value: Uint144): Uint144 {
    return uintMath.mod(exports.Uint144, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint144 {
    return from.uint8Array(exports.Uint144, uint8Array)
  }

  static fromArray(array: Array<number>): Uint144 {
    return from.array(exports.Uint144, array)
  }

  static fromBuffer(buffer: Buffer): Uint144 {
    return from.buffer(exports.Uint144, buffer)
  }

  static fromHexish(hexish: string): Uint144 {
    return from.hexish(exports.Uint144, hexish)
  }

  static fromBn(bn: Bn): Uint144 {
    return from.uintBn(exports.Uint144, bn)
  }

  static fromNumber(number: number): Uint144 {
    return from.uintNumber(exports.Uint144, number)
  }

}

export class Uint152 extends UintX implements Uintish {

  public static LENGTH: number = 19;

  constructor(uint8Array: Uint8Array) {
    super(Uint152.LENGTH, uint8Array)
  }

  add(value: Uint152): Uint152 {
    return uintMath.add(exports.Uint152, this, value);
  }

  sub(value: Uint152): Uint152 {
    return uintMath.sub(exports.Uint152, this, value);
  }

  mul(value: Uint152): Uint152 {
    return uintMath.mul(exports.Uint152, this, value);
  }

  divDn(value: Uint152): Uint152 {
    return uintMath.divDn(exports.Uint152, this, value);
  }

  divUp(value: Uint152): Uint152 {
    return uintMath.divUp(exports.Uint152, this, value);
  }

  divRd(value: Uint152): Uint152 {
    return uintMath.divRd(exports.Uint152, this, value);
  }

  mod(value: Uint152): Uint152 {
    return uintMath.mod(exports.Uint152, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint152 {
    return from.uint8Array(exports.Uint152, uint8Array)
  }

  static fromArray(array: Array<number>): Uint152 {
    return from.array(exports.Uint152, array)
  }

  static fromBuffer(buffer: Buffer): Uint152 {
    return from.buffer(exports.Uint152, buffer)
  }

  static fromHexish(hexish: string): Uint152 {
    return from.hexish(exports.Uint152, hexish)
  }

  static fromBn(bn: Bn): Uint152 {
    return from.uintBn(exports.Uint152, bn)
  }

  static fromNumber(number: number): Uint152 {
    return from.uintNumber(exports.Uint152, number)
  }

}

export class Uint160 extends UintX implements Uintish {

  public static LENGTH: number = 20;

  constructor(uint8Array: Uint8Array) {
    super(Uint160.LENGTH, uint8Array)
  }

  add(value: Uint160): Uint160 {
    return uintMath.add(exports.Uint160, this, value);
  }

  sub(value: Uint160): Uint160 {
    return uintMath.sub(exports.Uint160, this, value);
  }

  mul(value: Uint160): Uint160 {
    return uintMath.mul(exports.Uint160, this, value);
  }

  divDn(value: Uint160): Uint160 {
    return uintMath.divDn(exports.Uint160, this, value);
  }

  divUp(value: Uint160): Uint160 {
    return uintMath.divUp(exports.Uint160, this, value);
  }

  divRd(value: Uint160): Uint160 {
    return uintMath.divRd(exports.Uint160, this, value);
  }

  mod(value: Uint160): Uint160 {
    return uintMath.mod(exports.Uint160, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint160 {
    return from.uint8Array(exports.Uint160, uint8Array)
  }

  static fromArray(array: Array<number>): Uint160 {
    return from.array(exports.Uint160, array)
  }

  static fromBuffer(buffer: Buffer): Uint160 {
    return from.buffer(exports.Uint160, buffer)
  }

  static fromHexish(hexish: string): Uint160 {
    return from.hexish(exports.Uint160, hexish)
  }

  static fromBn(bn: Bn): Uint160 {
    return from.uintBn(exports.Uint160, bn)
  }

  static fromNumber(number: number): Uint160 {
    return from.uintNumber(exports.Uint160, number)
  }

}

export class Uint168 extends UintX implements Uintish {

  public static LENGTH: number = 21;

  constructor(uint8Array: Uint8Array) {
    super(Uint168.LENGTH, uint8Array)
  }

  add(value: Uint168): Uint168 {
    return uintMath.add(exports.Uint168, this, value);
  }

  sub(value: Uint168): Uint168 {
    return uintMath.sub(exports.Uint168, this, value);
  }

  mul(value: Uint168): Uint168 {
    return uintMath.mul(exports.Uint168, this, value);
  }

  divDn(value: Uint168): Uint168 {
    return uintMath.divDn(exports.Uint168, this, value);
  }

  divUp(value: Uint168): Uint168 {
    return uintMath.divUp(exports.Uint168, this, value);
  }

  divRd(value: Uint168): Uint168 {
    return uintMath.divRd(exports.Uint168, this, value);
  }

  mod(value: Uint168): Uint168 {
    return uintMath.mod(exports.Uint168, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint168 {
    return from.uint8Array(exports.Uint168, uint8Array)
  }

  static fromArray(array: Array<number>): Uint168 {
    return from.array(exports.Uint168, array)
  }

  static fromBuffer(buffer: Buffer): Uint168 {
    return from.buffer(exports.Uint168, buffer)
  }

  static fromHexish(hexish: string): Uint168 {
    return from.hexish(exports.Uint168, hexish)
  }

  static fromBn(bn: Bn): Uint168 {
    return from.uintBn(exports.Uint168, bn)
  }

  static fromNumber(number: number): Uint168 {
    return from.uintNumber(exports.Uint168, number)
  }

}

export class Uint176 extends UintX implements Uintish {

  public static LENGTH: number = 22;

  constructor(uint8Array: Uint8Array) {
    super(Uint176.LENGTH, uint8Array)
  }

  add(value: Uint176): Uint176 {
    return uintMath.add(exports.Uint176, this, value);
  }

  sub(value: Uint176): Uint176 {
    return uintMath.sub(exports.Uint176, this, value);
  }

  mul(value: Uint176): Uint176 {
    return uintMath.mul(exports.Uint176, this, value);
  }

  divDn(value: Uint176): Uint176 {
    return uintMath.divDn(exports.Uint176, this, value);
  }

  divUp(value: Uint176): Uint176 {
    return uintMath.divUp(exports.Uint176, this, value);
  }

  divRd(value: Uint176): Uint176 {
    return uintMath.divRd(exports.Uint176, this, value);
  }

  mod(value: Uint176): Uint176 {
    return uintMath.mod(exports.Uint176, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint176 {
    return from.uint8Array(exports.Uint176, uint8Array)
  }

  static fromArray(array: Array<number>): Uint176 {
    return from.array(exports.Uint176, array)
  }

  static fromBuffer(buffer: Buffer): Uint176 {
    return from.buffer(exports.Uint176, buffer)
  }

  static fromHexish(hexish: string): Uint176 {
    return from.hexish(exports.Uint176, hexish)
  }

  static fromBn(bn: Bn): Uint176 {
    return from.uintBn(exports.Uint176, bn)
  }

  static fromNumber(number: number): Uint176 {
    return from.uintNumber(exports.Uint176, number)
  }

}

export class Uint184 extends UintX implements Uintish {

  public static LENGTH: number = 23;

  constructor(uint8Array: Uint8Array) {
    super(Uint184.LENGTH, uint8Array)
  }

  add(value: Uint184): Uint184 {
    return uintMath.add(exports.Uint184, this, value);
  }

  sub(value: Uint184): Uint184 {
    return uintMath.sub(exports.Uint184, this, value);
  }

  mul(value: Uint184): Uint184 {
    return uintMath.mul(exports.Uint184, this, value);
  }

  divDn(value: Uint184): Uint184 {
    return uintMath.divDn(exports.Uint184, this, value);
  }

  divUp(value: Uint184): Uint184 {
    return uintMath.divUp(exports.Uint184, this, value);
  }

  divRd(value: Uint184): Uint184 {
    return uintMath.divRd(exports.Uint184, this, value);
  }

  mod(value: Uint184): Uint184 {
    return uintMath.mod(exports.Uint184, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint184 {
    return from.uint8Array(exports.Uint184, uint8Array)
  }

  static fromArray(array: Array<number>): Uint184 {
    return from.array(exports.Uint184, array)
  }

  static fromBuffer(buffer: Buffer): Uint184 {
    return from.buffer(exports.Uint184, buffer)
  }

  static fromHexish(hexish: string): Uint184 {
    return from.hexish(exports.Uint184, hexish)
  }

  static fromBn(bn: Bn): Uint184 {
    return from.uintBn(exports.Uint184, bn)
  }

  static fromNumber(number: number): Uint184 {
    return from.uintNumber(exports.Uint184, number)
  }

}

export class Uint192 extends UintX implements Uintish {

  public static LENGTH: number = 24;

  constructor(uint8Array: Uint8Array) {
    super(Uint192.LENGTH, uint8Array)
  }

  add(value: Uint192): Uint192 {
    return uintMath.add(exports.Uint192, this, value);
  }

  sub(value: Uint192): Uint192 {
    return uintMath.sub(exports.Uint192, this, value);
  }

  mul(value: Uint192): Uint192 {
    return uintMath.mul(exports.Uint192, this, value);
  }

  divDn(value: Uint192): Uint192 {
    return uintMath.divDn(exports.Uint192, this, value);
  }

  divUp(value: Uint192): Uint192 {
    return uintMath.divUp(exports.Uint192, this, value);
  }

  divRd(value: Uint192): Uint192 {
    return uintMath.divRd(exports.Uint192, this, value);
  }

  mod(value: Uint192): Uint192 {
    return uintMath.mod(exports.Uint192, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint192 {
    return from.uint8Array(exports.Uint192, uint8Array)
  }

  static fromArray(array: Array<number>): Uint192 {
    return from.array(exports.Uint192, array)
  }

  static fromBuffer(buffer: Buffer): Uint192 {
    return from.buffer(exports.Uint192, buffer)
  }

  static fromHexish(hexish: string): Uint192 {
    return from.hexish(exports.Uint192, hexish)
  }

  static fromBn(bn: Bn): Uint192 {
    return from.uintBn(exports.Uint192, bn)
  }

  static fromNumber(number: number): Uint192 {
    return from.uintNumber(exports.Uint192, number)
  }

}

export class Uint200 extends UintX implements Uintish {

  public static LENGTH: number = 25;

  constructor(uint8Array: Uint8Array) {
    super(Uint200.LENGTH, uint8Array)
  }

  add(value: Uint200): Uint200 {
    return uintMath.add(exports.Uint200, this, value);
  }

  sub(value: Uint200): Uint200 {
    return uintMath.sub(exports.Uint200, this, value);
  }

  mul(value: Uint200): Uint200 {
    return uintMath.mul(exports.Uint200, this, value);
  }

  divDn(value: Uint200): Uint200 {
    return uintMath.divDn(exports.Uint200, this, value);
  }

  divUp(value: Uint200): Uint200 {
    return uintMath.divUp(exports.Uint200, this, value);
  }

  divRd(value: Uint200): Uint200 {
    return uintMath.divRd(exports.Uint200, this, value);
  }

  mod(value: Uint200): Uint200 {
    return uintMath.mod(exports.Uint200, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint200 {
    return from.uint8Array(exports.Uint200, uint8Array)
  }

  static fromArray(array: Array<number>): Uint200 {
    return from.array(exports.Uint200, array)
  }

  static fromBuffer(buffer: Buffer): Uint200 {
    return from.buffer(exports.Uint200, buffer)
  }

  static fromHexish(hexish: string): Uint200 {
    return from.hexish(exports.Uint200, hexish)
  }

  static fromBn(bn: Bn): Uint200 {
    return from.uintBn(exports.Uint200, bn)
  }

  static fromNumber(number: number): Uint200 {
    return from.uintNumber(exports.Uint200, number)
  }

}

export class Uint208 extends UintX implements Uintish {

  public static LENGTH: number = 26;

  constructor(uint8Array: Uint8Array) {
    super(Uint208.LENGTH, uint8Array)
  }

  add(value: Uint208): Uint208 {
    return uintMath.add(exports.Uint208, this, value);
  }

  sub(value: Uint208): Uint208 {
    return uintMath.sub(exports.Uint208, this, value);
  }

  mul(value: Uint208): Uint208 {
    return uintMath.mul(exports.Uint208, this, value);
  }

  divDn(value: Uint208): Uint208 {
    return uintMath.divDn(exports.Uint208, this, value);
  }

  divUp(value: Uint208): Uint208 {
    return uintMath.divUp(exports.Uint208, this, value);
  }

  divRd(value: Uint208): Uint208 {
    return uintMath.divRd(exports.Uint208, this, value);
  }

  mod(value: Uint208): Uint208 {
    return uintMath.mod(exports.Uint208, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint208 {
    return from.uint8Array(exports.Uint208, uint8Array)
  }

  static fromArray(array: Array<number>): Uint208 {
    return from.array(exports.Uint208, array)
  }

  static fromBuffer(buffer: Buffer): Uint208 {
    return from.buffer(exports.Uint208, buffer)
  }

  static fromHexish(hexish: string): Uint208 {
    return from.hexish(exports.Uint208, hexish)
  }

  static fromBn(bn: Bn): Uint208 {
    return from.uintBn(exports.Uint208, bn)
  }

  static fromNumber(number: number): Uint208 {
    return from.uintNumber(exports.Uint208, number)
  }

}

export class Uint216 extends UintX implements Uintish {

  public static LENGTH: number = 27;

  constructor(uint8Array: Uint8Array) {
    super(Uint216.LENGTH, uint8Array)
  }

  add(value: Uint216): Uint216 {
    return uintMath.add(exports.Uint216, this, value);
  }

  sub(value: Uint216): Uint216 {
    return uintMath.sub(exports.Uint216, this, value);
  }

  mul(value: Uint216): Uint216 {
    return uintMath.mul(exports.Uint216, this, value);
  }

  divDn(value: Uint216): Uint216 {
    return uintMath.divDn(exports.Uint216, this, value);
  }

  divUp(value: Uint216): Uint216 {
    return uintMath.divUp(exports.Uint216, this, value);
  }

  divRd(value: Uint216): Uint216 {
    return uintMath.divRd(exports.Uint216, this, value);
  }

  mod(value: Uint216): Uint216 {
    return uintMath.mod(exports.Uint216, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint216 {
    return from.uint8Array(exports.Uint216, uint8Array)
  }

  static fromArray(array: Array<number>): Uint216 {
    return from.array(exports.Uint216, array)
  }

  static fromBuffer(buffer: Buffer): Uint216 {
    return from.buffer(exports.Uint216, buffer)
  }

  static fromHexish(hexish: string): Uint216 {
    return from.hexish(exports.Uint216, hexish)
  }

  static fromBn(bn: Bn): Uint216 {
    return from.uintBn(exports.Uint216, bn)
  }

  static fromNumber(number: number): Uint216 {
    return from.uintNumber(exports.Uint216, number)
  }

}

export class Uint224 extends UintX implements Uintish {

  public static LENGTH: number = 28;

  constructor(uint8Array: Uint8Array) {
    super(Uint224.LENGTH, uint8Array)
  }

  add(value: Uint224): Uint224 {
    return uintMath.add(exports.Uint224, this, value);
  }

  sub(value: Uint224): Uint224 {
    return uintMath.sub(exports.Uint224, this, value);
  }

  mul(value: Uint224): Uint224 {
    return uintMath.mul(exports.Uint224, this, value);
  }

  divDn(value: Uint224): Uint224 {
    return uintMath.divDn(exports.Uint224, this, value);
  }

  divUp(value: Uint224): Uint224 {
    return uintMath.divUp(exports.Uint224, this, value);
  }

  divRd(value: Uint224): Uint224 {
    return uintMath.divRd(exports.Uint224, this, value);
  }

  mod(value: Uint224): Uint224 {
    return uintMath.mod(exports.Uint224, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint224 {
    return from.uint8Array(exports.Uint224, uint8Array)
  }

  static fromArray(array: Array<number>): Uint224 {
    return from.array(exports.Uint224, array)
  }

  static fromBuffer(buffer: Buffer): Uint224 {
    return from.buffer(exports.Uint224, buffer)
  }

  static fromHexish(hexish: string): Uint224 {
    return from.hexish(exports.Uint224, hexish)
  }

  static fromBn(bn: Bn): Uint224 {
    return from.uintBn(exports.Uint224, bn)
  }

  static fromNumber(number: number): Uint224 {
    return from.uintNumber(exports.Uint224, number)
  }

}

export class Uint232 extends UintX implements Uintish {

  public static LENGTH: number = 29;

  constructor(uint8Array: Uint8Array) {
    super(Uint232.LENGTH, uint8Array)
  }

  add(value: Uint232): Uint232 {
    return uintMath.add(exports.Uint232, this, value);
  }

  sub(value: Uint232): Uint232 {
    return uintMath.sub(exports.Uint232, this, value);
  }

  mul(value: Uint232): Uint232 {
    return uintMath.mul(exports.Uint232, this, value);
  }

  divDn(value: Uint232): Uint232 {
    return uintMath.divDn(exports.Uint232, this, value);
  }

  divUp(value: Uint232): Uint232 {
    return uintMath.divUp(exports.Uint232, this, value);
  }

  divRd(value: Uint232): Uint232 {
    return uintMath.divRd(exports.Uint232, this, value);
  }

  mod(value: Uint232): Uint232 {
    return uintMath.mod(exports.Uint232, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint232 {
    return from.uint8Array(exports.Uint232, uint8Array)
  }

  static fromArray(array: Array<number>): Uint232 {
    return from.array(exports.Uint232, array)
  }

  static fromBuffer(buffer: Buffer): Uint232 {
    return from.buffer(exports.Uint232, buffer)
  }

  static fromHexish(hexish: string): Uint232 {
    return from.hexish(exports.Uint232, hexish)
  }

  static fromBn(bn: Bn): Uint232 {
    return from.uintBn(exports.Uint232, bn)
  }

  static fromNumber(number: number): Uint232 {
    return from.uintNumber(exports.Uint232, number)
  }

}

export class Uint240 extends UintX implements Uintish {

  public static LENGTH: number = 30;

  constructor(uint8Array: Uint8Array) {
    super(Uint240.LENGTH, uint8Array)
  }

  add(value: Uint240): Uint240 {
    return uintMath.add(exports.Uint240, this, value);
  }

  sub(value: Uint240): Uint240 {
    return uintMath.sub(exports.Uint240, this, value);
  }

  mul(value: Uint240): Uint240 {
    return uintMath.mul(exports.Uint240, this, value);
  }

  divDn(value: Uint240): Uint240 {
    return uintMath.divDn(exports.Uint240, this, value);
  }

  divUp(value: Uint240): Uint240 {
    return uintMath.divUp(exports.Uint240, this, value);
  }

  divRd(value: Uint240): Uint240 {
    return uintMath.divRd(exports.Uint240, this, value);
  }

  mod(value: Uint240): Uint240 {
    return uintMath.mod(exports.Uint240, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint240 {
    return from.uint8Array(exports.Uint240, uint8Array)
  }

  static fromArray(array: Array<number>): Uint240 {
    return from.array(exports.Uint240, array)
  }

  static fromBuffer(buffer: Buffer): Uint240 {
    return from.buffer(exports.Uint240, buffer)
  }

  static fromHexish(hexish: string): Uint240 {
    return from.hexish(exports.Uint240, hexish)
  }

  static fromBn(bn: Bn): Uint240 {
    return from.uintBn(exports.Uint240, bn)
  }

  static fromNumber(number: number): Uint240 {
    return from.uintNumber(exports.Uint240, number)
  }

}

export class Uint248 extends UintX implements Uintish {

  public static LENGTH: number = 31;

  constructor(uint8Array: Uint8Array) {
    super(Uint248.LENGTH, uint8Array)
  }

  add(value: Uint248): Uint248 {
    return uintMath.add(exports.Uint248, this, value);
  }

  sub(value: Uint248): Uint248 {
    return uintMath.sub(exports.Uint248, this, value);
  }

  mul(value: Uint248): Uint248 {
    return uintMath.mul(exports.Uint248, this, value);
  }

  divDn(value: Uint248): Uint248 {
    return uintMath.divDn(exports.Uint248, this, value);
  }

  divUp(value: Uint248): Uint248 {
    return uintMath.divUp(exports.Uint248, this, value);
  }

  divRd(value: Uint248): Uint248 {
    return uintMath.divRd(exports.Uint248, this, value);
  }

  mod(value: Uint248): Uint248 {
    return uintMath.mod(exports.Uint248, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint248 {
    return from.uint8Array(exports.Uint248, uint8Array)
  }

  static fromArray(array: Array<number>): Uint248 {
    return from.array(exports.Uint248, array)
  }

  static fromBuffer(buffer: Buffer): Uint248 {
    return from.buffer(exports.Uint248, buffer)
  }

  static fromHexish(hexish: string): Uint248 {
    return from.hexish(exports.Uint248, hexish)
  }

  static fromBn(bn: Bn): Uint248 {
    return from.uintBn(exports.Uint248, bn)
  }

  static fromNumber(number: number): Uint248 {
    return from.uintNumber(exports.Uint248, number)
  }

}

export class Uint256 extends UintX implements Uintish {

  public static LENGTH: number = 32;

  constructor(uint8Array: Uint8Array) {
    super(Uint256.LENGTH, uint8Array)
  }

  add(value: Uint256): Uint256 {
    return uintMath.add(exports.Uint256, this, value);
  }

  sub(value: Uint256): Uint256 {
    return uintMath.sub(exports.Uint256, this, value);
  }

  mul(value: Uint256): Uint256 {
    return uintMath.mul(exports.Uint256, this, value);
  }

  divDn(value: Uint256): Uint256 {
    return uintMath.divDn(exports.Uint256, this, value);
  }

  divUp(value: Uint256): Uint256 {
    return uintMath.divUp(exports.Uint256, this, value);
  }

  divRd(value: Uint256): Uint256 {
    return uintMath.divRd(exports.Uint256, this, value);
  }

  mod(value: Uint256): Uint256 {
    return uintMath.mod(exports.Uint256, this, value);
  }

  static fromUint8Array(uint8Array: Uint8Array): Uint256 {
    return from.uint8Array(exports.Uint256, uint8Array)
  }

  static fromArray(array: Array<number>): Uint256 {
    return from.array(exports.Uint256, array)
  }

  static fromBuffer(buffer: Buffer): Uint256 {
    return from.buffer(exports.Uint256, buffer)
  }

  static fromHexish(hexish: string): Uint256 {
    return from.hexish(exports.Uint256, hexish)
  }

  static fromBn(bn: Bn): Uint256 {
    return from.uintBn(exports.Uint256, bn)
  }

  static fromNumber(number: number): Uint256 {
    return from.uintNumber(exports.Uint256, number)
  }

}
