import { BytesX } from '../internals/BytesX'
import { External, Uintish } from '../interfaces'
import * as from from '../utils/from'
import * as uintMath from '../utils/uintMath'
import Bn from 'bn.js'

export const Bytes1: External = class Bytes1 extends BytesX {

  public static LENGTH: number = 1;

  constructor(uint8Array: Uint8Array) {
    super(Bytes1.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes1 {
    return from.uint8Array(exports.Bytes1, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes1 {
    return from.array(exports.Bytes1, array)
  }

  static fromBuffer(buffer: Buffer): Bytes1 {
    return from.buffer(exports.Bytes1, buffer)
  }

  static fromHexish(hexish: string): Bytes1 {
    return from.hexish(exports.Bytes1, hexish)
  }

}

export const Bytes2: External = class Bytes2 extends BytesX {

  public static LENGTH: number = 2;

  constructor(uint8Array: Uint8Array) {
    super(Bytes2.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes2 {
    return from.uint8Array(exports.Bytes2, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes2 {
    return from.array(exports.Bytes2, array)
  }

  static fromBuffer(buffer: Buffer): Bytes2 {
    return from.buffer(exports.Bytes2, buffer)
  }

  static fromHexish(hexish: string): Bytes2 {
    return from.hexish(exports.Bytes2, hexish)
  }

}

export const Bytes3: External = class Bytes3 extends BytesX {

  public static LENGTH: number = 3;

  constructor(uint8Array: Uint8Array) {
    super(Bytes3.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes3 {
    return from.uint8Array(exports.Bytes3, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes3 {
    return from.array(exports.Bytes3, array)
  }

  static fromBuffer(buffer: Buffer): Bytes3 {
    return from.buffer(exports.Bytes3, buffer)
  }

  static fromHexish(hexish: string): Bytes3 {
    return from.hexish(exports.Bytes3, hexish)
  }

}

export const Bytes4: External = class Bytes4 extends BytesX {

  public static LENGTH: number = 4;

  constructor(uint8Array: Uint8Array) {
    super(Bytes4.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes4 {
    return from.uint8Array(exports.Bytes4, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes4 {
    return from.array(exports.Bytes4, array)
  }

  static fromBuffer(buffer: Buffer): Bytes4 {
    return from.buffer(exports.Bytes4, buffer)
  }

  static fromHexish(hexish: string): Bytes4 {
    return from.hexish(exports.Bytes4, hexish)
  }

}

export const Bytes5: External = class Bytes5 extends BytesX {

  public static LENGTH: number = 5;

  constructor(uint8Array: Uint8Array) {
    super(Bytes5.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes5 {
    return from.uint8Array(exports.Bytes5, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes5 {
    return from.array(exports.Bytes5, array)
  }

  static fromBuffer(buffer: Buffer): Bytes5 {
    return from.buffer(exports.Bytes5, buffer)
  }

  static fromHexish(hexish: string): Bytes5 {
    return from.hexish(exports.Bytes5, hexish)
  }

}

export const Bytes6: External = class Bytes6 extends BytesX {

  public static LENGTH: number = 6;

  constructor(uint8Array: Uint8Array) {
    super(Bytes6.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes6 {
    return from.uint8Array(exports.Bytes6, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes6 {
    return from.array(exports.Bytes6, array)
  }

  static fromBuffer(buffer: Buffer): Bytes6 {
    return from.buffer(exports.Bytes6, buffer)
  }

  static fromHexish(hexish: string): Bytes6 {
    return from.hexish(exports.Bytes6, hexish)
  }

}

export const Bytes7: External = class Bytes7 extends BytesX {

  public static LENGTH: number = 7;

  constructor(uint8Array: Uint8Array) {
    super(Bytes7.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes7 {
    return from.uint8Array(exports.Bytes7, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes7 {
    return from.array(exports.Bytes7, array)
  }

  static fromBuffer(buffer: Buffer): Bytes7 {
    return from.buffer(exports.Bytes7, buffer)
  }

  static fromHexish(hexish: string): Bytes7 {
    return from.hexish(exports.Bytes7, hexish)
  }

}

export const Bytes8: External = class Bytes8 extends BytesX {

  public static LENGTH: number = 8;

  constructor(uint8Array: Uint8Array) {
    super(Bytes8.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes8 {
    return from.uint8Array(exports.Bytes8, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes8 {
    return from.array(exports.Bytes8, array)
  }

  static fromBuffer(buffer: Buffer): Bytes8 {
    return from.buffer(exports.Bytes8, buffer)
  }

  static fromHexish(hexish: string): Bytes8 {
    return from.hexish(exports.Bytes8, hexish)
  }

}

export const Bytes9: External = class Bytes9 extends BytesX {

  public static LENGTH: number = 9;

  constructor(uint8Array: Uint8Array) {
    super(Bytes9.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes9 {
    return from.uint8Array(exports.Bytes9, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes9 {
    return from.array(exports.Bytes9, array)
  }

  static fromBuffer(buffer: Buffer): Bytes9 {
    return from.buffer(exports.Bytes9, buffer)
  }

  static fromHexish(hexish: string): Bytes9 {
    return from.hexish(exports.Bytes9, hexish)
  }

}

export const Bytes10: External = class Bytes10 extends BytesX {

  public static LENGTH: number = 10;

  constructor(uint8Array: Uint8Array) {
    super(Bytes10.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes10 {
    return from.uint8Array(exports.Bytes10, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes10 {
    return from.array(exports.Bytes10, array)
  }

  static fromBuffer(buffer: Buffer): Bytes10 {
    return from.buffer(exports.Bytes10, buffer)
  }

  static fromHexish(hexish: string): Bytes10 {
    return from.hexish(exports.Bytes10, hexish)
  }

}

export const Bytes11: External = class Bytes11 extends BytesX {

  public static LENGTH: number = 11;

  constructor(uint8Array: Uint8Array) {
    super(Bytes11.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes11 {
    return from.uint8Array(exports.Bytes11, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes11 {
    return from.array(exports.Bytes11, array)
  }

  static fromBuffer(buffer: Buffer): Bytes11 {
    return from.buffer(exports.Bytes11, buffer)
  }

  static fromHexish(hexish: string): Bytes11 {
    return from.hexish(exports.Bytes11, hexish)
  }

}

export const Bytes12: External = class Bytes12 extends BytesX {

  public static LENGTH: number = 12;

  constructor(uint8Array: Uint8Array) {
    super(Bytes12.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes12 {
    return from.uint8Array(exports.Bytes12, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes12 {
    return from.array(exports.Bytes12, array)
  }

  static fromBuffer(buffer: Buffer): Bytes12 {
    return from.buffer(exports.Bytes12, buffer)
  }

  static fromHexish(hexish: string): Bytes12 {
    return from.hexish(exports.Bytes12, hexish)
  }

}

export const Bytes13: External = class Bytes13 extends BytesX {

  public static LENGTH: number = 13;

  constructor(uint8Array: Uint8Array) {
    super(Bytes13.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes13 {
    return from.uint8Array(exports.Bytes13, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes13 {
    return from.array(exports.Bytes13, array)
  }

  static fromBuffer(buffer: Buffer): Bytes13 {
    return from.buffer(exports.Bytes13, buffer)
  }

  static fromHexish(hexish: string): Bytes13 {
    return from.hexish(exports.Bytes13, hexish)
  }

}

export const Bytes14: External = class Bytes14 extends BytesX {

  public static LENGTH: number = 14;

  constructor(uint8Array: Uint8Array) {
    super(Bytes14.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes14 {
    return from.uint8Array(exports.Bytes14, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes14 {
    return from.array(exports.Bytes14, array)
  }

  static fromBuffer(buffer: Buffer): Bytes14 {
    return from.buffer(exports.Bytes14, buffer)
  }

  static fromHexish(hexish: string): Bytes14 {
    return from.hexish(exports.Bytes14, hexish)
  }

}

export const Bytes15: External = class Bytes15 extends BytesX {

  public static LENGTH: number = 15;

  constructor(uint8Array: Uint8Array) {
    super(Bytes15.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes15 {
    return from.uint8Array(exports.Bytes15, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes15 {
    return from.array(exports.Bytes15, array)
  }

  static fromBuffer(buffer: Buffer): Bytes15 {
    return from.buffer(exports.Bytes15, buffer)
  }

  static fromHexish(hexish: string): Bytes15 {
    return from.hexish(exports.Bytes15, hexish)
  }

}

export const Bytes16: External = class Bytes16 extends BytesX {

  public static LENGTH: number = 16;

  constructor(uint8Array: Uint8Array) {
    super(Bytes16.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes16 {
    return from.uint8Array(exports.Bytes16, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes16 {
    return from.array(exports.Bytes16, array)
  }

  static fromBuffer(buffer: Buffer): Bytes16 {
    return from.buffer(exports.Bytes16, buffer)
  }

  static fromHexish(hexish: string): Bytes16 {
    return from.hexish(exports.Bytes16, hexish)
  }

}

export const Bytes17: External = class Bytes17 extends BytesX {

  public static LENGTH: number = 17;

  constructor(uint8Array: Uint8Array) {
    super(Bytes17.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes17 {
    return from.uint8Array(exports.Bytes17, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes17 {
    return from.array(exports.Bytes17, array)
  }

  static fromBuffer(buffer: Buffer): Bytes17 {
    return from.buffer(exports.Bytes17, buffer)
  }

  static fromHexish(hexish: string): Bytes17 {
    return from.hexish(exports.Bytes17, hexish)
  }

}

export const Bytes18: External = class Bytes18 extends BytesX {

  public static LENGTH: number = 18;

  constructor(uint8Array: Uint8Array) {
    super(Bytes18.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes18 {
    return from.uint8Array(exports.Bytes18, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes18 {
    return from.array(exports.Bytes18, array)
  }

  static fromBuffer(buffer: Buffer): Bytes18 {
    return from.buffer(exports.Bytes18, buffer)
  }

  static fromHexish(hexish: string): Bytes18 {
    return from.hexish(exports.Bytes18, hexish)
  }

}

export const Bytes19: External = class Bytes19 extends BytesX {

  public static LENGTH: number = 19;

  constructor(uint8Array: Uint8Array) {
    super(Bytes19.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes19 {
    return from.uint8Array(exports.Bytes19, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes19 {
    return from.array(exports.Bytes19, array)
  }

  static fromBuffer(buffer: Buffer): Bytes19 {
    return from.buffer(exports.Bytes19, buffer)
  }

  static fromHexish(hexish: string): Bytes19 {
    return from.hexish(exports.Bytes19, hexish)
  }

}

export const Bytes20: External = class Bytes20 extends BytesX {

  public static LENGTH: number = 20;

  constructor(uint8Array: Uint8Array) {
    super(Bytes20.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes20 {
    return from.uint8Array(exports.Bytes20, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes20 {
    return from.array(exports.Bytes20, array)
  }

  static fromBuffer(buffer: Buffer): Bytes20 {
    return from.buffer(exports.Bytes20, buffer)
  }

  static fromHexish(hexish: string): Bytes20 {
    return from.hexish(exports.Bytes20, hexish)
  }

}

export const Bytes21: External = class Bytes21 extends BytesX {

  public static LENGTH: number = 21;

  constructor(uint8Array: Uint8Array) {
    super(Bytes21.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes21 {
    return from.uint8Array(exports.Bytes21, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes21 {
    return from.array(exports.Bytes21, array)
  }

  static fromBuffer(buffer: Buffer): Bytes21 {
    return from.buffer(exports.Bytes21, buffer)
  }

  static fromHexish(hexish: string): Bytes21 {
    return from.hexish(exports.Bytes21, hexish)
  }

}

export const Bytes22: External = class Bytes22 extends BytesX {

  public static LENGTH: number = 22;

  constructor(uint8Array: Uint8Array) {
    super(Bytes22.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes22 {
    return from.uint8Array(exports.Bytes22, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes22 {
    return from.array(exports.Bytes22, array)
  }

  static fromBuffer(buffer: Buffer): Bytes22 {
    return from.buffer(exports.Bytes22, buffer)
  }

  static fromHexish(hexish: string): Bytes22 {
    return from.hexish(exports.Bytes22, hexish)
  }

}

export const Bytes23: External = class Bytes23 extends BytesX {

  public static LENGTH: number = 23;

  constructor(uint8Array: Uint8Array) {
    super(Bytes23.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes23 {
    return from.uint8Array(exports.Bytes23, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes23 {
    return from.array(exports.Bytes23, array)
  }

  static fromBuffer(buffer: Buffer): Bytes23 {
    return from.buffer(exports.Bytes23, buffer)
  }

  static fromHexish(hexish: string): Bytes23 {
    return from.hexish(exports.Bytes23, hexish)
  }

}

export const Bytes24: External = class Bytes24 extends BytesX {

  public static LENGTH: number = 24;

  constructor(uint8Array: Uint8Array) {
    super(Bytes24.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes24 {
    return from.uint8Array(exports.Bytes24, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes24 {
    return from.array(exports.Bytes24, array)
  }

  static fromBuffer(buffer: Buffer): Bytes24 {
    return from.buffer(exports.Bytes24, buffer)
  }

  static fromHexish(hexish: string): Bytes24 {
    return from.hexish(exports.Bytes24, hexish)
  }

}

export const Bytes25: External = class Bytes25 extends BytesX {

  public static LENGTH: number = 25;

  constructor(uint8Array: Uint8Array) {
    super(Bytes25.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes25 {
    return from.uint8Array(exports.Bytes25, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes25 {
    return from.array(exports.Bytes25, array)
  }

  static fromBuffer(buffer: Buffer): Bytes25 {
    return from.buffer(exports.Bytes25, buffer)
  }

  static fromHexish(hexish: string): Bytes25 {
    return from.hexish(exports.Bytes25, hexish)
  }

}

export const Bytes26: External = class Bytes26 extends BytesX {

  public static LENGTH: number = 26;

  constructor(uint8Array: Uint8Array) {
    super(Bytes26.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes26 {
    return from.uint8Array(exports.Bytes26, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes26 {
    return from.array(exports.Bytes26, array)
  }

  static fromBuffer(buffer: Buffer): Bytes26 {
    return from.buffer(exports.Bytes26, buffer)
  }

  static fromHexish(hexish: string): Bytes26 {
    return from.hexish(exports.Bytes26, hexish)
  }

}

export const Bytes27: External = class Bytes27 extends BytesX {

  public static LENGTH: number = 27;

  constructor(uint8Array: Uint8Array) {
    super(Bytes27.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes27 {
    return from.uint8Array(exports.Bytes27, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes27 {
    return from.array(exports.Bytes27, array)
  }

  static fromBuffer(buffer: Buffer): Bytes27 {
    return from.buffer(exports.Bytes27, buffer)
  }

  static fromHexish(hexish: string): Bytes27 {
    return from.hexish(exports.Bytes27, hexish)
  }

}

export const Bytes28: External = class Bytes28 extends BytesX {

  public static LENGTH: number = 28;

  constructor(uint8Array: Uint8Array) {
    super(Bytes28.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes28 {
    return from.uint8Array(exports.Bytes28, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes28 {
    return from.array(exports.Bytes28, array)
  }

  static fromBuffer(buffer: Buffer): Bytes28 {
    return from.buffer(exports.Bytes28, buffer)
  }

  static fromHexish(hexish: string): Bytes28 {
    return from.hexish(exports.Bytes28, hexish)
  }

}

export const Bytes29: External = class Bytes29 extends BytesX {

  public static LENGTH: number = 29;

  constructor(uint8Array: Uint8Array) {
    super(Bytes29.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes29 {
    return from.uint8Array(exports.Bytes29, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes29 {
    return from.array(exports.Bytes29, array)
  }

  static fromBuffer(buffer: Buffer): Bytes29 {
    return from.buffer(exports.Bytes29, buffer)
  }

  static fromHexish(hexish: string): Bytes29 {
    return from.hexish(exports.Bytes29, hexish)
  }

}

export const Bytes30: External = class Bytes30 extends BytesX {

  public static LENGTH: number = 30;

  constructor(uint8Array: Uint8Array) {
    super(Bytes30.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes30 {
    return from.uint8Array(exports.Bytes30, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes30 {
    return from.array(exports.Bytes30, array)
  }

  static fromBuffer(buffer: Buffer): Bytes30 {
    return from.buffer(exports.Bytes30, buffer)
  }

  static fromHexish(hexish: string): Bytes30 {
    return from.hexish(exports.Bytes30, hexish)
  }

}

export const Bytes31: External = class Bytes31 extends BytesX {

  public static LENGTH: number = 31;

  constructor(uint8Array: Uint8Array) {
    super(Bytes31.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes31 {
    return from.uint8Array(exports.Bytes31, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes31 {
    return from.array(exports.Bytes31, array)
  }

  static fromBuffer(buffer: Buffer): Bytes31 {
    return from.buffer(exports.Bytes31, buffer)
  }

  static fromHexish(hexish: string): Bytes31 {
    return from.hexish(exports.Bytes31, hexish)
  }

}

export const Bytes32: External = class Bytes32 extends BytesX {

  public static LENGTH: number = 32;

  constructor(uint8Array: Uint8Array) {
    super(Bytes32.LENGTH, uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes32 {
    return from.uint8Array(exports.Bytes32, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes32 {
    return from.array(exports.Bytes32, array)
  }

  static fromBuffer(buffer: Buffer): Bytes32 {
    return from.buffer(exports.Bytes32, buffer)
  }

  static fromHexish(hexish: string): Bytes32 {
    return from.hexish(exports.Bytes32, hexish)
  }

}

