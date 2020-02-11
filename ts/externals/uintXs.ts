import { UintX, Uintable } from '../internals/UintX'
import Bn from 'bn.js'
import { Uish } from 'pollenium-uvaursi'
import { genBnFromUintable } from '../utils'

const zeroBn = new Bn(0)
const oneBn = new Bn(1)

export class Uint8 extends UintX {

  public static LENGTH: number = 1;

  constructor(uintable: Uintable) {
    super(Uint8.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint8 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  opSub(uintable: Uintable): Uint8 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  opMul(uintable: Uintable): Uint8 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  opDiv(uintable: Uintable): Uint8 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  opMod(uintable: Uintable): Uint8 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  opPow(uintable: Uintable): Uint8 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint8(uint8Array)
  }

  static fromNumber(number: number): Uint8 {
    const bn = new Bn(number)
    return new Uint8(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint8 {
    const bn = new Bn(numberString, base)
    return new Uint8(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint16 extends UintX {

  public static LENGTH: number = 2;

  constructor(uintable: Uintable) {
    super(Uint16.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint16 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  opSub(uintable: Uintable): Uint16 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  opMul(uintable: Uintable): Uint16 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  opDiv(uintable: Uintable): Uint16 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  opMod(uintable: Uintable): Uint16 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  opPow(uintable: Uintable): Uint16 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint16(uint8Array)
  }

  static fromNumber(number: number): Uint16 {
    const bn = new Bn(number)
    return new Uint16(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint16 {
    const bn = new Bn(numberString, base)
    return new Uint16(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint24 extends UintX {

  public static LENGTH: number = 3;

  constructor(uintable: Uintable) {
    super(Uint24.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint24 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  opSub(uintable: Uintable): Uint24 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  opMul(uintable: Uintable): Uint24 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  opDiv(uintable: Uintable): Uint24 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  opMod(uintable: Uintable): Uint24 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  opPow(uintable: Uintable): Uint24 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint24(uint8Array)
  }

  static fromNumber(number: number): Uint24 {
    const bn = new Bn(number)
    return new Uint24(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint24 {
    const bn = new Bn(numberString, base)
    return new Uint24(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint32 extends UintX {

  public static LENGTH: number = 4;

  constructor(uintable: Uintable) {
    super(Uint32.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint32 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  opSub(uintable: Uintable): Uint32 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  opMul(uintable: Uintable): Uint32 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  opDiv(uintable: Uintable): Uint32 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  opMod(uintable: Uintable): Uint32 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  opPow(uintable: Uintable): Uint32 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint32(uint8Array)
  }

  static fromNumber(number: number): Uint32 {
    const bn = new Bn(number)
    return new Uint32(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint32 {
    const bn = new Bn(numberString, base)
    return new Uint32(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint40 extends UintX {

  public static LENGTH: number = 5;

  constructor(uintable: Uintable) {
    super(Uint40.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint40 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  opSub(uintable: Uintable): Uint40 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  opMul(uintable: Uintable): Uint40 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  opDiv(uintable: Uintable): Uint40 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  opMod(uintable: Uintable): Uint40 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  opPow(uintable: Uintable): Uint40 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint40(uint8Array)
  }

  static fromNumber(number: number): Uint40 {
    const bn = new Bn(number)
    return new Uint40(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint40 {
    const bn = new Bn(numberString, base)
    return new Uint40(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint48 extends UintX {

  public static LENGTH: number = 6;

  constructor(uintable: Uintable) {
    super(Uint48.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint48 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  opSub(uintable: Uintable): Uint48 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  opMul(uintable: Uintable): Uint48 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  opDiv(uintable: Uintable): Uint48 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  opMod(uintable: Uintable): Uint48 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  opPow(uintable: Uintable): Uint48 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint48(uint8Array)
  }

  static fromNumber(number: number): Uint48 {
    const bn = new Bn(number)
    return new Uint48(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint48 {
    const bn = new Bn(numberString, base)
    return new Uint48(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint56 extends UintX {

  public static LENGTH: number = 7;

  constructor(uintable: Uintable) {
    super(Uint56.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint56 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  opSub(uintable: Uintable): Uint56 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  opMul(uintable: Uintable): Uint56 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  opDiv(uintable: Uintable): Uint56 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  opMod(uintable: Uintable): Uint56 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  opPow(uintable: Uintable): Uint56 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint56(uint8Array)
  }

  static fromNumber(number: number): Uint56 {
    const bn = new Bn(number)
    return new Uint56(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint56 {
    const bn = new Bn(numberString, base)
    return new Uint56(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint64 extends UintX {

  public static LENGTH: number = 8;

  constructor(uintable: Uintable) {
    super(Uint64.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint64 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  opSub(uintable: Uintable): Uint64 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  opMul(uintable: Uintable): Uint64 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  opDiv(uintable: Uintable): Uint64 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  opMod(uintable: Uintable): Uint64 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  opPow(uintable: Uintable): Uint64 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint64(uint8Array)
  }

  static fromNumber(number: number): Uint64 {
    const bn = new Bn(number)
    return new Uint64(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint64 {
    const bn = new Bn(numberString, base)
    return new Uint64(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint72 extends UintX {

  public static LENGTH: number = 9;

  constructor(uintable: Uintable) {
    super(Uint72.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint72 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  opSub(uintable: Uintable): Uint72 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  opMul(uintable: Uintable): Uint72 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  opDiv(uintable: Uintable): Uint72 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  opMod(uintable: Uintable): Uint72 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  opPow(uintable: Uintable): Uint72 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint72(uint8Array)
  }

  static fromNumber(number: number): Uint72 {
    const bn = new Bn(number)
    return new Uint72(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint72 {
    const bn = new Bn(numberString, base)
    return new Uint72(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint80 extends UintX {

  public static LENGTH: number = 10;

  constructor(uintable: Uintable) {
    super(Uint80.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint80 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  opSub(uintable: Uintable): Uint80 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  opMul(uintable: Uintable): Uint80 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  opDiv(uintable: Uintable): Uint80 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  opMod(uintable: Uintable): Uint80 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  opPow(uintable: Uintable): Uint80 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint80(uint8Array)
  }

  static fromNumber(number: number): Uint80 {
    const bn = new Bn(number)
    return new Uint80(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint80 {
    const bn = new Bn(numberString, base)
    return new Uint80(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint88 extends UintX {

  public static LENGTH: number = 11;

  constructor(uintable: Uintable) {
    super(Uint88.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint88 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  opSub(uintable: Uintable): Uint88 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  opMul(uintable: Uintable): Uint88 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  opDiv(uintable: Uintable): Uint88 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  opMod(uintable: Uintable): Uint88 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  opPow(uintable: Uintable): Uint88 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint88(uint8Array)
  }

  static fromNumber(number: number): Uint88 {
    const bn = new Bn(number)
    return new Uint88(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint88 {
    const bn = new Bn(numberString, base)
    return new Uint88(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint96 extends UintX {

  public static LENGTH: number = 12;

  constructor(uintable: Uintable) {
    super(Uint96.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint96 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  opSub(uintable: Uintable): Uint96 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  opMul(uintable: Uintable): Uint96 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  opDiv(uintable: Uintable): Uint96 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  opMod(uintable: Uintable): Uint96 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  opPow(uintable: Uintable): Uint96 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint96(uint8Array)
  }

  static fromNumber(number: number): Uint96 {
    const bn = new Bn(number)
    return new Uint96(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint96 {
    const bn = new Bn(numberString, base)
    return new Uint96(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint104 extends UintX {

  public static LENGTH: number = 13;

  constructor(uintable: Uintable) {
    super(Uint104.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint104 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  opSub(uintable: Uintable): Uint104 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  opMul(uintable: Uintable): Uint104 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  opDiv(uintable: Uintable): Uint104 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  opMod(uintable: Uintable): Uint104 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  opPow(uintable: Uintable): Uint104 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint104(uint8Array)
  }

  static fromNumber(number: number): Uint104 {
    const bn = new Bn(number)
    return new Uint104(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint104 {
    const bn = new Bn(numberString, base)
    return new Uint104(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint112 extends UintX {

  public static LENGTH: number = 14;

  constructor(uintable: Uintable) {
    super(Uint112.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint112 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  opSub(uintable: Uintable): Uint112 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  opMul(uintable: Uintable): Uint112 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  opDiv(uintable: Uintable): Uint112 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  opMod(uintable: Uintable): Uint112 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  opPow(uintable: Uintable): Uint112 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint112(uint8Array)
  }

  static fromNumber(number: number): Uint112 {
    const bn = new Bn(number)
    return new Uint112(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint112 {
    const bn = new Bn(numberString, base)
    return new Uint112(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint120 extends UintX {

  public static LENGTH: number = 15;

  constructor(uintable: Uintable) {
    super(Uint120.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint120 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  opSub(uintable: Uintable): Uint120 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  opMul(uintable: Uintable): Uint120 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  opDiv(uintable: Uintable): Uint120 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  opMod(uintable: Uintable): Uint120 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  opPow(uintable: Uintable): Uint120 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint120(uint8Array)
  }

  static fromNumber(number: number): Uint120 {
    const bn = new Bn(number)
    return new Uint120(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint120 {
    const bn = new Bn(numberString, base)
    return new Uint120(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint128 extends UintX {

  public static LENGTH: number = 16;

  constructor(uintable: Uintable) {
    super(Uint128.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint128 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  opSub(uintable: Uintable): Uint128 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  opMul(uintable: Uintable): Uint128 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  opDiv(uintable: Uintable): Uint128 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  opMod(uintable: Uintable): Uint128 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  opPow(uintable: Uintable): Uint128 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint128(uint8Array)
  }

  static fromNumber(number: number): Uint128 {
    const bn = new Bn(number)
    return new Uint128(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint128 {
    const bn = new Bn(numberString, base)
    return new Uint128(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint136 extends UintX {

  public static LENGTH: number = 17;

  constructor(uintable: Uintable) {
    super(Uint136.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint136 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  opSub(uintable: Uintable): Uint136 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  opMul(uintable: Uintable): Uint136 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  opDiv(uintable: Uintable): Uint136 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  opMod(uintable: Uintable): Uint136 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  opPow(uintable: Uintable): Uint136 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint136(uint8Array)
  }

  static fromNumber(number: number): Uint136 {
    const bn = new Bn(number)
    return new Uint136(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint136 {
    const bn = new Bn(numberString, base)
    return new Uint136(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint144 extends UintX {

  public static LENGTH: number = 18;

  constructor(uintable: Uintable) {
    super(Uint144.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint144 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  opSub(uintable: Uintable): Uint144 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  opMul(uintable: Uintable): Uint144 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  opDiv(uintable: Uintable): Uint144 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  opMod(uintable: Uintable): Uint144 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  opPow(uintable: Uintable): Uint144 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint144(uint8Array)
  }

  static fromNumber(number: number): Uint144 {
    const bn = new Bn(number)
    return new Uint144(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint144 {
    const bn = new Bn(numberString, base)
    return new Uint144(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint152 extends UintX {

  public static LENGTH: number = 19;

  constructor(uintable: Uintable) {
    super(Uint152.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint152 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  opSub(uintable: Uintable): Uint152 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  opMul(uintable: Uintable): Uint152 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  opDiv(uintable: Uintable): Uint152 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  opMod(uintable: Uintable): Uint152 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  opPow(uintable: Uintable): Uint152 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint152(uint8Array)
  }

  static fromNumber(number: number): Uint152 {
    const bn = new Bn(number)
    return new Uint152(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint152 {
    const bn = new Bn(numberString, base)
    return new Uint152(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint160 extends UintX {

  public static LENGTH: number = 20;

  constructor(uintable: Uintable) {
    super(Uint160.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint160 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  opSub(uintable: Uintable): Uint160 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  opMul(uintable: Uintable): Uint160 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  opDiv(uintable: Uintable): Uint160 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  opMod(uintable: Uintable): Uint160 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  opPow(uintable: Uintable): Uint160 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint160(uint8Array)
  }

  static fromNumber(number: number): Uint160 {
    const bn = new Bn(number)
    return new Uint160(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint160 {
    const bn = new Bn(numberString, base)
    return new Uint160(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint168 extends UintX {

  public static LENGTH: number = 21;

  constructor(uintable: Uintable) {
    super(Uint168.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint168 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  opSub(uintable: Uintable): Uint168 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  opMul(uintable: Uintable): Uint168 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  opDiv(uintable: Uintable): Uint168 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  opMod(uintable: Uintable): Uint168 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  opPow(uintable: Uintable): Uint168 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint168(uint8Array)
  }

  static fromNumber(number: number): Uint168 {
    const bn = new Bn(number)
    return new Uint168(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint168 {
    const bn = new Bn(numberString, base)
    return new Uint168(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint176 extends UintX {

  public static LENGTH: number = 22;

  constructor(uintable: Uintable) {
    super(Uint176.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint176 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  opSub(uintable: Uintable): Uint176 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  opMul(uintable: Uintable): Uint176 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  opDiv(uintable: Uintable): Uint176 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  opMod(uintable: Uintable): Uint176 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  opPow(uintable: Uintable): Uint176 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint176(uint8Array)
  }

  static fromNumber(number: number): Uint176 {
    const bn = new Bn(number)
    return new Uint176(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint176 {
    const bn = new Bn(numberString, base)
    return new Uint176(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint184 extends UintX {

  public static LENGTH: number = 23;

  constructor(uintable: Uintable) {
    super(Uint184.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint184 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  opSub(uintable: Uintable): Uint184 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  opMul(uintable: Uintable): Uint184 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  opDiv(uintable: Uintable): Uint184 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  opMod(uintable: Uintable): Uint184 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  opPow(uintable: Uintable): Uint184 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint184(uint8Array)
  }

  static fromNumber(number: number): Uint184 {
    const bn = new Bn(number)
    return new Uint184(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint184 {
    const bn = new Bn(numberString, base)
    return new Uint184(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint192 extends UintX {

  public static LENGTH: number = 24;

  constructor(uintable: Uintable) {
    super(Uint192.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint192 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  opSub(uintable: Uintable): Uint192 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  opMul(uintable: Uintable): Uint192 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  opDiv(uintable: Uintable): Uint192 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  opMod(uintable: Uintable): Uint192 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  opPow(uintable: Uintable): Uint192 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint192(uint8Array)
  }

  static fromNumber(number: number): Uint192 {
    const bn = new Bn(number)
    return new Uint192(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint192 {
    const bn = new Bn(numberString, base)
    return new Uint192(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint200 extends UintX {

  public static LENGTH: number = 25;

  constructor(uintable: Uintable) {
    super(Uint200.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint200 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  opSub(uintable: Uintable): Uint200 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  opMul(uintable: Uintable): Uint200 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  opDiv(uintable: Uintable): Uint200 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  opMod(uintable: Uintable): Uint200 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  opPow(uintable: Uintable): Uint200 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint200(uint8Array)
  }

  static fromNumber(number: number): Uint200 {
    const bn = new Bn(number)
    return new Uint200(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint200 {
    const bn = new Bn(numberString, base)
    return new Uint200(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint208 extends UintX {

  public static LENGTH: number = 26;

  constructor(uintable: Uintable) {
    super(Uint208.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint208 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  opSub(uintable: Uintable): Uint208 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  opMul(uintable: Uintable): Uint208 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  opDiv(uintable: Uintable): Uint208 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  opMod(uintable: Uintable): Uint208 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  opPow(uintable: Uintable): Uint208 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint208(uint8Array)
  }

  static fromNumber(number: number): Uint208 {
    const bn = new Bn(number)
    return new Uint208(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint208 {
    const bn = new Bn(numberString, base)
    return new Uint208(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint216 extends UintX {

  public static LENGTH: number = 27;

  constructor(uintable: Uintable) {
    super(Uint216.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint216 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  opSub(uintable: Uintable): Uint216 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  opMul(uintable: Uintable): Uint216 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  opDiv(uintable: Uintable): Uint216 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  opMod(uintable: Uintable): Uint216 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  opPow(uintable: Uintable): Uint216 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint216(uint8Array)
  }

  static fromNumber(number: number): Uint216 {
    const bn = new Bn(number)
    return new Uint216(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint216 {
    const bn = new Bn(numberString, base)
    return new Uint216(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint224 extends UintX {

  public static LENGTH: number = 28;

  constructor(uintable: Uintable) {
    super(Uint224.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint224 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  opSub(uintable: Uintable): Uint224 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  opMul(uintable: Uintable): Uint224 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  opDiv(uintable: Uintable): Uint224 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  opMod(uintable: Uintable): Uint224 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  opPow(uintable: Uintable): Uint224 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint224(uint8Array)
  }

  static fromNumber(number: number): Uint224 {
    const bn = new Bn(number)
    return new Uint224(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint224 {
    const bn = new Bn(numberString, base)
    return new Uint224(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint232 extends UintX {

  public static LENGTH: number = 29;

  constructor(uintable: Uintable) {
    super(Uint232.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint232 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  opSub(uintable: Uintable): Uint232 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  opMul(uintable: Uintable): Uint232 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  opDiv(uintable: Uintable): Uint232 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  opMod(uintable: Uintable): Uint232 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  opPow(uintable: Uintable): Uint232 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint232(uint8Array)
  }

  static fromNumber(number: number): Uint232 {
    const bn = new Bn(number)
    return new Uint232(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint232 {
    const bn = new Bn(numberString, base)
    return new Uint232(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint240 extends UintX {

  public static LENGTH: number = 30;

  constructor(uintable: Uintable) {
    super(Uint240.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint240 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  opSub(uintable: Uintable): Uint240 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  opMul(uintable: Uintable): Uint240 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  opDiv(uintable: Uintable): Uint240 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  opMod(uintable: Uintable): Uint240 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  opPow(uintable: Uintable): Uint240 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint240(uint8Array)
  }

  static fromNumber(number: number): Uint240 {
    const bn = new Bn(number)
    return new Uint240(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint240 {
    const bn = new Bn(numberString, base)
    return new Uint240(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint248 extends UintX {

  public static LENGTH: number = 31;

  constructor(uintable: Uintable) {
    super(Uint248.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint248 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  opSub(uintable: Uintable): Uint248 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  opMul(uintable: Uintable): Uint248 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  opDiv(uintable: Uintable): Uint248 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  opMod(uintable: Uintable): Uint248 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  opPow(uintable: Uintable): Uint248 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint248(uint8Array)
  }

  static fromNumber(number: number): Uint248 {
    const bn = new Bn(number)
    return new Uint248(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint248 {
    const bn = new Bn(numberString, base)
    return new Uint248(bn.toArrayLike(Uint8Array, 'be'))
  }

}

export class Uint256 extends UintX {

  public static LENGTH: number = 32;

  constructor(uintable: Uintable) {
    super(Uint256.LENGTH, uintable)
  }

  opAdd(uintable: Uintable): Uint256 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  opSub(uintable: Uintable): Uint256 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  opMul(uintable: Uintable): Uint256 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  opDiv(uintable: Uintable): Uint256 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  opMod(uintable: Uintable): Uint256 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  opPow(uintable: Uintable): Uint256 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new Uint256(uint8Array)
  }

  static fromNumber(number: number): Uint256 {
    const bn = new Bn(number)
    return new Uint256(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromNumberString(base: number, numberString: string): Uint256 {
    const bn = new Bn(numberString, base)
    return new Uint256(bn.toArrayLike(Uint8Array, 'be'))
  }

}

