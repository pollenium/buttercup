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

  opAdd(value: Uint8): Uint8 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  opSub(value: Uint8): Uint8 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  opMul(value: Uint8): Uint8 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  opDiv(value: Uint8): Uint8 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  opMod(value: Uint8): Uint8 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  static fromNumber(number: number): Uint8 {
    const bn = new Bn(number)
    return new Uint8(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint16 extends UintX {

  public static LENGTH: number = 2;

  constructor(uint8Array: Uint8Array) {
    super(Uint16.LENGTH, uint8Array)
  }

  opAdd(value: Uint16): Uint16 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  opSub(value: Uint16): Uint16 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  opMul(value: Uint16): Uint16 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  opDiv(value: Uint16): Uint16 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  opMod(value: Uint16): Uint16 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  static fromNumber(number: number): Uint16 {
    const bn = new Bn(number)
    return new Uint16(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint24 extends UintX {

  public static LENGTH: number = 3;

  constructor(uint8Array: Uint8Array) {
    super(Uint24.LENGTH, uint8Array)
  }

  opAdd(value: Uint24): Uint24 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  opSub(value: Uint24): Uint24 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  opMul(value: Uint24): Uint24 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  opDiv(value: Uint24): Uint24 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  opMod(value: Uint24): Uint24 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  static fromNumber(number: number): Uint24 {
    const bn = new Bn(number)
    return new Uint24(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint32 extends UintX {

  public static LENGTH: number = 4;

  constructor(uint8Array: Uint8Array) {
    super(Uint32.LENGTH, uint8Array)
  }

  opAdd(value: Uint32): Uint32 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  opSub(value: Uint32): Uint32 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  opMul(value: Uint32): Uint32 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  opDiv(value: Uint32): Uint32 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  opMod(value: Uint32): Uint32 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  static fromNumber(number: number): Uint32 {
    const bn = new Bn(number)
    return new Uint32(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint40 extends UintX {

  public static LENGTH: number = 5;

  constructor(uint8Array: Uint8Array) {
    super(Uint40.LENGTH, uint8Array)
  }

  opAdd(value: Uint40): Uint40 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  opSub(value: Uint40): Uint40 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  opMul(value: Uint40): Uint40 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  opDiv(value: Uint40): Uint40 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  opMod(value: Uint40): Uint40 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  static fromNumber(number: number): Uint40 {
    const bn = new Bn(number)
    return new Uint40(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint48 extends UintX {

  public static LENGTH: number = 6;

  constructor(uint8Array: Uint8Array) {
    super(Uint48.LENGTH, uint8Array)
  }

  opAdd(value: Uint48): Uint48 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  opSub(value: Uint48): Uint48 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  opMul(value: Uint48): Uint48 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  opDiv(value: Uint48): Uint48 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  opMod(value: Uint48): Uint48 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  static fromNumber(number: number): Uint48 {
    const bn = new Bn(number)
    return new Uint48(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint56 extends UintX {

  public static LENGTH: number = 7;

  constructor(uint8Array: Uint8Array) {
    super(Uint56.LENGTH, uint8Array)
  }

  opAdd(value: Uint56): Uint56 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  opSub(value: Uint56): Uint56 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  opMul(value: Uint56): Uint56 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  opDiv(value: Uint56): Uint56 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  opMod(value: Uint56): Uint56 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  static fromNumber(number: number): Uint56 {
    const bn = new Bn(number)
    return new Uint56(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint64 extends UintX {

  public static LENGTH: number = 8;

  constructor(uint8Array: Uint8Array) {
    super(Uint64.LENGTH, uint8Array)
  }

  opAdd(value: Uint64): Uint64 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  opSub(value: Uint64): Uint64 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  opMul(value: Uint64): Uint64 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  opDiv(value: Uint64): Uint64 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  opMod(value: Uint64): Uint64 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  static fromNumber(number: number): Uint64 {
    const bn = new Bn(number)
    return new Uint64(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint72 extends UintX {

  public static LENGTH: number = 9;

  constructor(uint8Array: Uint8Array) {
    super(Uint72.LENGTH, uint8Array)
  }

  opAdd(value: Uint72): Uint72 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  opSub(value: Uint72): Uint72 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  opMul(value: Uint72): Uint72 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  opDiv(value: Uint72): Uint72 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  opMod(value: Uint72): Uint72 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  static fromNumber(number: number): Uint72 {
    const bn = new Bn(number)
    return new Uint72(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint80 extends UintX {

  public static LENGTH: number = 10;

  constructor(uint8Array: Uint8Array) {
    super(Uint80.LENGTH, uint8Array)
  }

  opAdd(value: Uint80): Uint80 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  opSub(value: Uint80): Uint80 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  opMul(value: Uint80): Uint80 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  opDiv(value: Uint80): Uint80 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  opMod(value: Uint80): Uint80 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  static fromNumber(number: number): Uint80 {
    const bn = new Bn(number)
    return new Uint80(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint88 extends UintX {

  public static LENGTH: number = 11;

  constructor(uint8Array: Uint8Array) {
    super(Uint88.LENGTH, uint8Array)
  }

  opAdd(value: Uint88): Uint88 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  opSub(value: Uint88): Uint88 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  opMul(value: Uint88): Uint88 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  opDiv(value: Uint88): Uint88 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  opMod(value: Uint88): Uint88 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  static fromNumber(number: number): Uint88 {
    const bn = new Bn(number)
    return new Uint88(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint96 extends UintX {

  public static LENGTH: number = 12;

  constructor(uint8Array: Uint8Array) {
    super(Uint96.LENGTH, uint8Array)
  }

  opAdd(value: Uint96): Uint96 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  opSub(value: Uint96): Uint96 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  opMul(value: Uint96): Uint96 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  opDiv(value: Uint96): Uint96 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  opMod(value: Uint96): Uint96 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  static fromNumber(number: number): Uint96 {
    const bn = new Bn(number)
    return new Uint96(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint104 extends UintX {

  public static LENGTH: number = 13;

  constructor(uint8Array: Uint8Array) {
    super(Uint104.LENGTH, uint8Array)
  }

  opAdd(value: Uint104): Uint104 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  opSub(value: Uint104): Uint104 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  opMul(value: Uint104): Uint104 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  opDiv(value: Uint104): Uint104 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  opMod(value: Uint104): Uint104 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  static fromNumber(number: number): Uint104 {
    const bn = new Bn(number)
    return new Uint104(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint112 extends UintX {

  public static LENGTH: number = 14;

  constructor(uint8Array: Uint8Array) {
    super(Uint112.LENGTH, uint8Array)
  }

  opAdd(value: Uint112): Uint112 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  opSub(value: Uint112): Uint112 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  opMul(value: Uint112): Uint112 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  opDiv(value: Uint112): Uint112 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  opMod(value: Uint112): Uint112 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  static fromNumber(number: number): Uint112 {
    const bn = new Bn(number)
    return new Uint112(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint120 extends UintX {

  public static LENGTH: number = 15;

  constructor(uint8Array: Uint8Array) {
    super(Uint120.LENGTH, uint8Array)
  }

  opAdd(value: Uint120): Uint120 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  opSub(value: Uint120): Uint120 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  opMul(value: Uint120): Uint120 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  opDiv(value: Uint120): Uint120 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  opMod(value: Uint120): Uint120 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  static fromNumber(number: number): Uint120 {
    const bn = new Bn(number)
    return new Uint120(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint128 extends UintX {

  public static LENGTH: number = 16;

  constructor(uint8Array: Uint8Array) {
    super(Uint128.LENGTH, uint8Array)
  }

  opAdd(value: Uint128): Uint128 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  opSub(value: Uint128): Uint128 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  opMul(value: Uint128): Uint128 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  opDiv(value: Uint128): Uint128 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  opMod(value: Uint128): Uint128 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  static fromNumber(number: number): Uint128 {
    const bn = new Bn(number)
    return new Uint128(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint136 extends UintX {

  public static LENGTH: number = 17;

  constructor(uint8Array: Uint8Array) {
    super(Uint136.LENGTH, uint8Array)
  }

  opAdd(value: Uint136): Uint136 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  opSub(value: Uint136): Uint136 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  opMul(value: Uint136): Uint136 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  opDiv(value: Uint136): Uint136 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  opMod(value: Uint136): Uint136 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  static fromNumber(number: number): Uint136 {
    const bn = new Bn(number)
    return new Uint136(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint144 extends UintX {

  public static LENGTH: number = 18;

  constructor(uint8Array: Uint8Array) {
    super(Uint144.LENGTH, uint8Array)
  }

  opAdd(value: Uint144): Uint144 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  opSub(value: Uint144): Uint144 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  opMul(value: Uint144): Uint144 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  opDiv(value: Uint144): Uint144 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  opMod(value: Uint144): Uint144 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  static fromNumber(number: number): Uint144 {
    const bn = new Bn(number)
    return new Uint144(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint152 extends UintX {

  public static LENGTH: number = 19;

  constructor(uint8Array: Uint8Array) {
    super(Uint152.LENGTH, uint8Array)
  }

  opAdd(value: Uint152): Uint152 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  opSub(value: Uint152): Uint152 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  opMul(value: Uint152): Uint152 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  opDiv(value: Uint152): Uint152 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  opMod(value: Uint152): Uint152 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  static fromNumber(number: number): Uint152 {
    const bn = new Bn(number)
    return new Uint152(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint160 extends UintX {

  public static LENGTH: number = 20;

  constructor(uint8Array: Uint8Array) {
    super(Uint160.LENGTH, uint8Array)
  }

  opAdd(value: Uint160): Uint160 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  opSub(value: Uint160): Uint160 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  opMul(value: Uint160): Uint160 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  opDiv(value: Uint160): Uint160 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  opMod(value: Uint160): Uint160 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  static fromNumber(number: number): Uint160 {
    const bn = new Bn(number)
    return new Uint160(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint168 extends UintX {

  public static LENGTH: number = 21;

  constructor(uint8Array: Uint8Array) {
    super(Uint168.LENGTH, uint8Array)
  }

  opAdd(value: Uint168): Uint168 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  opSub(value: Uint168): Uint168 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  opMul(value: Uint168): Uint168 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  opDiv(value: Uint168): Uint168 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  opMod(value: Uint168): Uint168 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  static fromNumber(number: number): Uint168 {
    const bn = new Bn(number)
    return new Uint168(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint176 extends UintX {

  public static LENGTH: number = 22;

  constructor(uint8Array: Uint8Array) {
    super(Uint176.LENGTH, uint8Array)
  }

  opAdd(value: Uint176): Uint176 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  opSub(value: Uint176): Uint176 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  opMul(value: Uint176): Uint176 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  opDiv(value: Uint176): Uint176 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  opMod(value: Uint176): Uint176 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  static fromNumber(number: number): Uint176 {
    const bn = new Bn(number)
    return new Uint176(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint184 extends UintX {

  public static LENGTH: number = 23;

  constructor(uint8Array: Uint8Array) {
    super(Uint184.LENGTH, uint8Array)
  }

  opAdd(value: Uint184): Uint184 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  opSub(value: Uint184): Uint184 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  opMul(value: Uint184): Uint184 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  opDiv(value: Uint184): Uint184 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  opMod(value: Uint184): Uint184 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  static fromNumber(number: number): Uint184 {
    const bn = new Bn(number)
    return new Uint184(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint192 extends UintX {

  public static LENGTH: number = 24;

  constructor(uint8Array: Uint8Array) {
    super(Uint192.LENGTH, uint8Array)
  }

  opAdd(value: Uint192): Uint192 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  opSub(value: Uint192): Uint192 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  opMul(value: Uint192): Uint192 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  opDiv(value: Uint192): Uint192 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  opMod(value: Uint192): Uint192 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  static fromNumber(number: number): Uint192 {
    const bn = new Bn(number)
    return new Uint192(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint200 extends UintX {

  public static LENGTH: number = 25;

  constructor(uint8Array: Uint8Array) {
    super(Uint200.LENGTH, uint8Array)
  }

  opAdd(value: Uint200): Uint200 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  opSub(value: Uint200): Uint200 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  opMul(value: Uint200): Uint200 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  opDiv(value: Uint200): Uint200 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  opMod(value: Uint200): Uint200 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  static fromNumber(number: number): Uint200 {
    const bn = new Bn(number)
    return new Uint200(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint208 extends UintX {

  public static LENGTH: number = 26;

  constructor(uint8Array: Uint8Array) {
    super(Uint208.LENGTH, uint8Array)
  }

  opAdd(value: Uint208): Uint208 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  opSub(value: Uint208): Uint208 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  opMul(value: Uint208): Uint208 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  opDiv(value: Uint208): Uint208 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  opMod(value: Uint208): Uint208 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  static fromNumber(number: number): Uint208 {
    const bn = new Bn(number)
    return new Uint208(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint216 extends UintX {

  public static LENGTH: number = 27;

  constructor(uint8Array: Uint8Array) {
    super(Uint216.LENGTH, uint8Array)
  }

  opAdd(value: Uint216): Uint216 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  opSub(value: Uint216): Uint216 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  opMul(value: Uint216): Uint216 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  opDiv(value: Uint216): Uint216 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  opMod(value: Uint216): Uint216 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  static fromNumber(number: number): Uint216 {
    const bn = new Bn(number)
    return new Uint216(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint224 extends UintX {

  public static LENGTH: number = 28;

  constructor(uint8Array: Uint8Array) {
    super(Uint224.LENGTH, uint8Array)
  }

  opAdd(value: Uint224): Uint224 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  opSub(value: Uint224): Uint224 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  opMul(value: Uint224): Uint224 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  opDiv(value: Uint224): Uint224 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  opMod(value: Uint224): Uint224 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  static fromNumber(number: number): Uint224 {
    const bn = new Bn(number)
    return new Uint224(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint232 extends UintX {

  public static LENGTH: number = 29;

  constructor(uint8Array: Uint8Array) {
    super(Uint232.LENGTH, uint8Array)
  }

  opAdd(value: Uint232): Uint232 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  opSub(value: Uint232): Uint232 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  opMul(value: Uint232): Uint232 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  opDiv(value: Uint232): Uint232 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  opMod(value: Uint232): Uint232 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  static fromNumber(number: number): Uint232 {
    const bn = new Bn(number)
    return new Uint232(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint240 extends UintX {

  public static LENGTH: number = 30;

  constructor(uint8Array: Uint8Array) {
    super(Uint240.LENGTH, uint8Array)
  }

  opAdd(value: Uint240): Uint240 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  opSub(value: Uint240): Uint240 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  opMul(value: Uint240): Uint240 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  opDiv(value: Uint240): Uint240 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  opMod(value: Uint240): Uint240 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  static fromNumber(number: number): Uint240 {
    const bn = new Bn(number)
    return new Uint240(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint248 extends UintX {

  public static LENGTH: number = 31;

  constructor(uint8Array: Uint8Array) {
    super(Uint248.LENGTH, uint8Array)
  }

  opAdd(value: Uint248): Uint248 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  opSub(value: Uint248): Uint248 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  opMul(value: Uint248): Uint248 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  opDiv(value: Uint248): Uint248 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  opMod(value: Uint248): Uint248 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  static fromNumber(number: number): Uint248 {
    const bn = new Bn(number)
    return new Uint248(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint256 extends UintX {

  public static LENGTH: number = 32;

  constructor(uint8Array: Uint8Array) {
    super(Uint256.LENGTH, uint8Array)
  }

  opAdd(value: Uint256): Uint256 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  opSub(value: Uint256): Uint256 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  opMul(value: Uint256): Uint256 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  opDiv(value: Uint256): Uint256 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  opMod(value: Uint256): Uint256 {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  static fromNumber(number: number): Uint256 {
    const bn = new Bn(number)
    return new Uint256(bn.toArrayLike(Uint8Array, 'be'))
  }

}

