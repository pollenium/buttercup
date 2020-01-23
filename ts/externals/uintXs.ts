import { UintX } from '../internals/UintX'
import Bn from 'bn.js'
import * as uvaursi from 'pollenium-uvaursi'

const zeroBn = new Bn(0)
const oneBn = new Bn(1)

export class Uint8 extends UintX {

  public static LENGTH: number = 1;

  constructor(uint8Array: Uint8Array) {
    super(Uint8.LENGTH, uint8Array)
  }

  add(value: Uint8): Uint8 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  sub(value: Uint8): Uint8 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  mul(value: Uint8): Uint8 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  div(value: Uint8): Uint8 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  mod(value: Uint8): Uint8 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  static fromNumber(number: number): Uint8 {
    const bn = new Bn(number)
    return new Uint8(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint8 {
    return new Uint8(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint8 {
    return new Uint8(uvaursi.fromHexish(hexish))
  }

}

export class Uint16 extends UintX {

  public static LENGTH: number = 2;

  constructor(uint8Array: Uint8Array) {
    super(Uint16.LENGTH, uint8Array)
  }

  add(value: Uint16): Uint16 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  sub(value: Uint16): Uint16 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  mul(value: Uint16): Uint16 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  div(value: Uint16): Uint16 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  mod(value: Uint16): Uint16 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  static fromNumber(number: number): Uint16 {
    const bn = new Bn(number)
    return new Uint16(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint16 {
    return new Uint16(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint16 {
    return new Uint16(uvaursi.fromHexish(hexish))
  }

}

export class Uint24 extends UintX {

  public static LENGTH: number = 3;

  constructor(uint8Array: Uint8Array) {
    super(Uint24.LENGTH, uint8Array)
  }

  add(value: Uint24): Uint24 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  sub(value: Uint24): Uint24 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  mul(value: Uint24): Uint24 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  div(value: Uint24): Uint24 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  mod(value: Uint24): Uint24 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  static fromNumber(number: number): Uint24 {
    const bn = new Bn(number)
    return new Uint24(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint24 {
    return new Uint24(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint24 {
    return new Uint24(uvaursi.fromHexish(hexish))
  }

}

export class Uint32 extends UintX {

  public static LENGTH: number = 4;

  constructor(uint8Array: Uint8Array) {
    super(Uint32.LENGTH, uint8Array)
  }

  add(value: Uint32): Uint32 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  sub(value: Uint32): Uint32 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  mul(value: Uint32): Uint32 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  div(value: Uint32): Uint32 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  mod(value: Uint32): Uint32 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  static fromNumber(number: number): Uint32 {
    const bn = new Bn(number)
    return new Uint32(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint32 {
    return new Uint32(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint32 {
    return new Uint32(uvaursi.fromHexish(hexish))
  }

}

export class Uint40 extends UintX {

  public static LENGTH: number = 5;

  constructor(uint8Array: Uint8Array) {
    super(Uint40.LENGTH, uint8Array)
  }

  add(value: Uint40): Uint40 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  sub(value: Uint40): Uint40 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  mul(value: Uint40): Uint40 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  div(value: Uint40): Uint40 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  mod(value: Uint40): Uint40 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  static fromNumber(number: number): Uint40 {
    const bn = new Bn(number)
    return new Uint40(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint40 {
    return new Uint40(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint40 {
    return new Uint40(uvaursi.fromHexish(hexish))
  }

}

export class Uint48 extends UintX {

  public static LENGTH: number = 6;

  constructor(uint8Array: Uint8Array) {
    super(Uint48.LENGTH, uint8Array)
  }

  add(value: Uint48): Uint48 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  sub(value: Uint48): Uint48 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  mul(value: Uint48): Uint48 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  div(value: Uint48): Uint48 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  mod(value: Uint48): Uint48 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  static fromNumber(number: number): Uint48 {
    const bn = new Bn(number)
    return new Uint48(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint48 {
    return new Uint48(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint48 {
    return new Uint48(uvaursi.fromHexish(hexish))
  }

}

export class Uint56 extends UintX {

  public static LENGTH: number = 7;

  constructor(uint8Array: Uint8Array) {
    super(Uint56.LENGTH, uint8Array)
  }

  add(value: Uint56): Uint56 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  sub(value: Uint56): Uint56 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  mul(value: Uint56): Uint56 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  div(value: Uint56): Uint56 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  mod(value: Uint56): Uint56 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  static fromNumber(number: number): Uint56 {
    const bn = new Bn(number)
    return new Uint56(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint56 {
    return new Uint56(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint56 {
    return new Uint56(uvaursi.fromHexish(hexish))
  }

}

export class Uint64 extends UintX {

  public static LENGTH: number = 8;

  constructor(uint8Array: Uint8Array) {
    super(Uint64.LENGTH, uint8Array)
  }

  add(value: Uint64): Uint64 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  sub(value: Uint64): Uint64 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  mul(value: Uint64): Uint64 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  div(value: Uint64): Uint64 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  mod(value: Uint64): Uint64 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  static fromNumber(number: number): Uint64 {
    const bn = new Bn(number)
    return new Uint64(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint64 {
    return new Uint64(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint64 {
    return new Uint64(uvaursi.fromHexish(hexish))
  }

}

export class Uint72 extends UintX {

  public static LENGTH: number = 9;

  constructor(uint8Array: Uint8Array) {
    super(Uint72.LENGTH, uint8Array)
  }

  add(value: Uint72): Uint72 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  sub(value: Uint72): Uint72 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  mul(value: Uint72): Uint72 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  div(value: Uint72): Uint72 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  mod(value: Uint72): Uint72 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  static fromNumber(number: number): Uint72 {
    const bn = new Bn(number)
    return new Uint72(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint72 {
    return new Uint72(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint72 {
    return new Uint72(uvaursi.fromHexish(hexish))
  }

}

export class Uint80 extends UintX {

  public static LENGTH: number = 10;

  constructor(uint8Array: Uint8Array) {
    super(Uint80.LENGTH, uint8Array)
  }

  add(value: Uint80): Uint80 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  sub(value: Uint80): Uint80 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  mul(value: Uint80): Uint80 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  div(value: Uint80): Uint80 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  mod(value: Uint80): Uint80 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  static fromNumber(number: number): Uint80 {
    const bn = new Bn(number)
    return new Uint80(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint80 {
    return new Uint80(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint80 {
    return new Uint80(uvaursi.fromHexish(hexish))
  }

}

export class Uint88 extends UintX {

  public static LENGTH: number = 11;

  constructor(uint8Array: Uint8Array) {
    super(Uint88.LENGTH, uint8Array)
  }

  add(value: Uint88): Uint88 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  sub(value: Uint88): Uint88 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  mul(value: Uint88): Uint88 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  div(value: Uint88): Uint88 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  mod(value: Uint88): Uint88 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  static fromNumber(number: number): Uint88 {
    const bn = new Bn(number)
    return new Uint88(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint88 {
    return new Uint88(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint88 {
    return new Uint88(uvaursi.fromHexish(hexish))
  }

}

export class Uint96 extends UintX {

  public static LENGTH: number = 12;

  constructor(uint8Array: Uint8Array) {
    super(Uint96.LENGTH, uint8Array)
  }

  add(value: Uint96): Uint96 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  sub(value: Uint96): Uint96 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  mul(value: Uint96): Uint96 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  div(value: Uint96): Uint96 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  mod(value: Uint96): Uint96 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  static fromNumber(number: number): Uint96 {
    const bn = new Bn(number)
    return new Uint96(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint96 {
    return new Uint96(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint96 {
    return new Uint96(uvaursi.fromHexish(hexish))
  }

}

export class Uint104 extends UintX {

  public static LENGTH: number = 13;

  constructor(uint8Array: Uint8Array) {
    super(Uint104.LENGTH, uint8Array)
  }

  add(value: Uint104): Uint104 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  sub(value: Uint104): Uint104 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  mul(value: Uint104): Uint104 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  div(value: Uint104): Uint104 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  mod(value: Uint104): Uint104 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  static fromNumber(number: number): Uint104 {
    const bn = new Bn(number)
    return new Uint104(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint104 {
    return new Uint104(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint104 {
    return new Uint104(uvaursi.fromHexish(hexish))
  }

}

export class Uint112 extends UintX {

  public static LENGTH: number = 14;

  constructor(uint8Array: Uint8Array) {
    super(Uint112.LENGTH, uint8Array)
  }

  add(value: Uint112): Uint112 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  sub(value: Uint112): Uint112 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  mul(value: Uint112): Uint112 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  div(value: Uint112): Uint112 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  mod(value: Uint112): Uint112 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  static fromNumber(number: number): Uint112 {
    const bn = new Bn(number)
    return new Uint112(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint112 {
    return new Uint112(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint112 {
    return new Uint112(uvaursi.fromHexish(hexish))
  }

}

export class Uint120 extends UintX {

  public static LENGTH: number = 15;

  constructor(uint8Array: Uint8Array) {
    super(Uint120.LENGTH, uint8Array)
  }

  add(value: Uint120): Uint120 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  sub(value: Uint120): Uint120 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  mul(value: Uint120): Uint120 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  div(value: Uint120): Uint120 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  mod(value: Uint120): Uint120 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  static fromNumber(number: number): Uint120 {
    const bn = new Bn(number)
    return new Uint120(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint120 {
    return new Uint120(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint120 {
    return new Uint120(uvaursi.fromHexish(hexish))
  }

}

export class Uint128 extends UintX {

  public static LENGTH: number = 16;

  constructor(uint8Array: Uint8Array) {
    super(Uint128.LENGTH, uint8Array)
  }

  add(value: Uint128): Uint128 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  sub(value: Uint128): Uint128 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  mul(value: Uint128): Uint128 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  div(value: Uint128): Uint128 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  mod(value: Uint128): Uint128 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  static fromNumber(number: number): Uint128 {
    const bn = new Bn(number)
    return new Uint128(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint128 {
    return new Uint128(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint128 {
    return new Uint128(uvaursi.fromHexish(hexish))
  }

}

export class Uint136 extends UintX {

  public static LENGTH: number = 17;

  constructor(uint8Array: Uint8Array) {
    super(Uint136.LENGTH, uint8Array)
  }

  add(value: Uint136): Uint136 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  sub(value: Uint136): Uint136 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  mul(value: Uint136): Uint136 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  div(value: Uint136): Uint136 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  mod(value: Uint136): Uint136 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  static fromNumber(number: number): Uint136 {
    const bn = new Bn(number)
    return new Uint136(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint136 {
    return new Uint136(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint136 {
    return new Uint136(uvaursi.fromHexish(hexish))
  }

}

export class Uint144 extends UintX {

  public static LENGTH: number = 18;

  constructor(uint8Array: Uint8Array) {
    super(Uint144.LENGTH, uint8Array)
  }

  add(value: Uint144): Uint144 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  sub(value: Uint144): Uint144 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  mul(value: Uint144): Uint144 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  div(value: Uint144): Uint144 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  mod(value: Uint144): Uint144 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  static fromNumber(number: number): Uint144 {
    const bn = new Bn(number)
    return new Uint144(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint144 {
    return new Uint144(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint144 {
    return new Uint144(uvaursi.fromHexish(hexish))
  }

}

export class Uint152 extends UintX {

  public static LENGTH: number = 19;

  constructor(uint8Array: Uint8Array) {
    super(Uint152.LENGTH, uint8Array)
  }

  add(value: Uint152): Uint152 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  sub(value: Uint152): Uint152 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  mul(value: Uint152): Uint152 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  div(value: Uint152): Uint152 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  mod(value: Uint152): Uint152 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  static fromNumber(number: number): Uint152 {
    const bn = new Bn(number)
    return new Uint152(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint152 {
    return new Uint152(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint152 {
    return new Uint152(uvaursi.fromHexish(hexish))
  }

}

export class Uint160 extends UintX {

  public static LENGTH: number = 20;

  constructor(uint8Array: Uint8Array) {
    super(Uint160.LENGTH, uint8Array)
  }

  add(value: Uint160): Uint160 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  sub(value: Uint160): Uint160 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  mul(value: Uint160): Uint160 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  div(value: Uint160): Uint160 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  mod(value: Uint160): Uint160 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  static fromNumber(number: number): Uint160 {
    const bn = new Bn(number)
    return new Uint160(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint160 {
    return new Uint160(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint160 {
    return new Uint160(uvaursi.fromHexish(hexish))
  }

}

export class Uint168 extends UintX {

  public static LENGTH: number = 21;

  constructor(uint8Array: Uint8Array) {
    super(Uint168.LENGTH, uint8Array)
  }

  add(value: Uint168): Uint168 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  sub(value: Uint168): Uint168 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  mul(value: Uint168): Uint168 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  div(value: Uint168): Uint168 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  mod(value: Uint168): Uint168 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  static fromNumber(number: number): Uint168 {
    const bn = new Bn(number)
    return new Uint168(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint168 {
    return new Uint168(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint168 {
    return new Uint168(uvaursi.fromHexish(hexish))
  }

}

export class Uint176 extends UintX {

  public static LENGTH: number = 22;

  constructor(uint8Array: Uint8Array) {
    super(Uint176.LENGTH, uint8Array)
  }

  add(value: Uint176): Uint176 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  sub(value: Uint176): Uint176 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  mul(value: Uint176): Uint176 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  div(value: Uint176): Uint176 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  mod(value: Uint176): Uint176 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  static fromNumber(number: number): Uint176 {
    const bn = new Bn(number)
    return new Uint176(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint176 {
    return new Uint176(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint176 {
    return new Uint176(uvaursi.fromHexish(hexish))
  }

}

export class Uint184 extends UintX {

  public static LENGTH: number = 23;

  constructor(uint8Array: Uint8Array) {
    super(Uint184.LENGTH, uint8Array)
  }

  add(value: Uint184): Uint184 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  sub(value: Uint184): Uint184 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  mul(value: Uint184): Uint184 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  div(value: Uint184): Uint184 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  mod(value: Uint184): Uint184 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  static fromNumber(number: number): Uint184 {
    const bn = new Bn(number)
    return new Uint184(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint184 {
    return new Uint184(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint184 {
    return new Uint184(uvaursi.fromHexish(hexish))
  }

}

export class Uint192 extends UintX {

  public static LENGTH: number = 24;

  constructor(uint8Array: Uint8Array) {
    super(Uint192.LENGTH, uint8Array)
  }

  add(value: Uint192): Uint192 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  sub(value: Uint192): Uint192 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  mul(value: Uint192): Uint192 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  div(value: Uint192): Uint192 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  mod(value: Uint192): Uint192 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  static fromNumber(number: number): Uint192 {
    const bn = new Bn(number)
    return new Uint192(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint192 {
    return new Uint192(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint192 {
    return new Uint192(uvaursi.fromHexish(hexish))
  }

}

export class Uint200 extends UintX {

  public static LENGTH: number = 25;

  constructor(uint8Array: Uint8Array) {
    super(Uint200.LENGTH, uint8Array)
  }

  add(value: Uint200): Uint200 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  sub(value: Uint200): Uint200 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  mul(value: Uint200): Uint200 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  div(value: Uint200): Uint200 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  mod(value: Uint200): Uint200 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  static fromNumber(number: number): Uint200 {
    const bn = new Bn(number)
    return new Uint200(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint200 {
    return new Uint200(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint200 {
    return new Uint200(uvaursi.fromHexish(hexish))
  }

}

export class Uint208 extends UintX {

  public static LENGTH: number = 26;

  constructor(uint8Array: Uint8Array) {
    super(Uint208.LENGTH, uint8Array)
  }

  add(value: Uint208): Uint208 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  sub(value: Uint208): Uint208 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  mul(value: Uint208): Uint208 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  div(value: Uint208): Uint208 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  mod(value: Uint208): Uint208 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  static fromNumber(number: number): Uint208 {
    const bn = new Bn(number)
    return new Uint208(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint208 {
    return new Uint208(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint208 {
    return new Uint208(uvaursi.fromHexish(hexish))
  }

}

export class Uint216 extends UintX {

  public static LENGTH: number = 27;

  constructor(uint8Array: Uint8Array) {
    super(Uint216.LENGTH, uint8Array)
  }

  add(value: Uint216): Uint216 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  sub(value: Uint216): Uint216 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  mul(value: Uint216): Uint216 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  div(value: Uint216): Uint216 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  mod(value: Uint216): Uint216 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  static fromNumber(number: number): Uint216 {
    const bn = new Bn(number)
    return new Uint216(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint216 {
    return new Uint216(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint216 {
    return new Uint216(uvaursi.fromHexish(hexish))
  }

}

export class Uint224 extends UintX {

  public static LENGTH: number = 28;

  constructor(uint8Array: Uint8Array) {
    super(Uint224.LENGTH, uint8Array)
  }

  add(value: Uint224): Uint224 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  sub(value: Uint224): Uint224 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  mul(value: Uint224): Uint224 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  div(value: Uint224): Uint224 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  mod(value: Uint224): Uint224 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  static fromNumber(number: number): Uint224 {
    const bn = new Bn(number)
    return new Uint224(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint224 {
    return new Uint224(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint224 {
    return new Uint224(uvaursi.fromHexish(hexish))
  }

}

export class Uint232 extends UintX {

  public static LENGTH: number = 29;

  constructor(uint8Array: Uint8Array) {
    super(Uint232.LENGTH, uint8Array)
  }

  add(value: Uint232): Uint232 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  sub(value: Uint232): Uint232 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  mul(value: Uint232): Uint232 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  div(value: Uint232): Uint232 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  mod(value: Uint232): Uint232 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  static fromNumber(number: number): Uint232 {
    const bn = new Bn(number)
    return new Uint232(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint232 {
    return new Uint232(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint232 {
    return new Uint232(uvaursi.fromHexish(hexish))
  }

}

export class Uint240 extends UintX {

  public static LENGTH: number = 30;

  constructor(uint8Array: Uint8Array) {
    super(Uint240.LENGTH, uint8Array)
  }

  add(value: Uint240): Uint240 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  sub(value: Uint240): Uint240 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  mul(value: Uint240): Uint240 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  div(value: Uint240): Uint240 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  mod(value: Uint240): Uint240 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  static fromNumber(number: number): Uint240 {
    const bn = new Bn(number)
    return new Uint240(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint240 {
    return new Uint240(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint240 {
    return new Uint240(uvaursi.fromHexish(hexish))
  }

}

export class Uint248 extends UintX {

  public static LENGTH: number = 31;

  constructor(uint8Array: Uint8Array) {
    super(Uint248.LENGTH, uint8Array)
  }

  add(value: Uint248): Uint248 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  sub(value: Uint248): Uint248 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  mul(value: Uint248): Uint248 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  div(value: Uint248): Uint248 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  mod(value: Uint248): Uint248 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  static fromNumber(number: number): Uint248 {
    const bn = new Bn(number)
    return new Uint248(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint248 {
    return new Uint248(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint248 {
    return new Uint248(uvaursi.fromHexish(hexish))
  }

}

export class Uint256 extends UintX {

  public static LENGTH: number = 32;

  constructor(uint8Array: Uint8Array) {
    super(Uint256.LENGTH, uint8Array)
  }

  add(value: Uint256): Uint256 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  sub(value: Uint256): Uint256 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  mul(value: Uint256): Uint256 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  div(value: Uint256): Uint256 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  mod(value: Uint256): Uint256 {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  static fromNumber(number: number): Uint256 {
    const bn = new Bn(number)
    return new Uint256(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromArray(array: Array<number>): Uint256 {
    return new Uint256(uvaursi.fromArray(array))
  }

  static fromHexish(hexish: string): Uint256 {
    return new Uint256(uvaursi.fromHexish(hexish))
  }

}

