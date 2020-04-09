import { UintX, Uintable, UintUnderflowError, UintOverflowError, UintNotIntegerError } from '../internals/UintX'
import Bn from 'bn.js'
import { Uish } from 'pollenium-uvaursi'
import { Bnish, Bignumberish } from '../interfaces'
import { genBnFromUintable } from '../utils'

const zeroBn = new Bn(0)
const oneBn = new Bn(1)

export class Uint8 extends UintX {

  public static LENGTH: number = 1;

  constructor(uintable: Uintable) {
    super(1, uintable)
  }

  opAdd(uintable: Uintable): Uint8 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint8.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint8 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint8.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint8 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint8.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint8 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint8.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint8 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint8.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint8 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint8.fromBnish(bn)
  }

  static fromNumber(number: number): Uint8 {
    const bn = new Bn(number)
    return Uint8.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint8 {
    const bn = new Bn(numberString, base)
    return Uint8.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint8 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 1) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint8(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint8 {
    return Uint8.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint16 extends UintX {

  public static LENGTH: number = 2;

  constructor(uintable: Uintable) {
    super(2, uintable)
  }

  opAdd(uintable: Uintable): Uint16 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint16.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint16 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint16.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint16 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint16.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint16 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint16.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint16 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint16.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint16 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint16.fromBnish(bn)
  }

  static fromNumber(number: number): Uint16 {
    const bn = new Bn(number)
    return Uint16.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint16 {
    const bn = new Bn(numberString, base)
    return Uint16.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint16 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 2) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint16(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint16 {
    return Uint16.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint24 extends UintX {

  public static LENGTH: number = 3;

  constructor(uintable: Uintable) {
    super(3, uintable)
  }

  opAdd(uintable: Uintable): Uint24 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint24.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint24 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint24.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint24 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint24.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint24 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint24.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint24 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint24.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint24 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint24.fromBnish(bn)
  }

  static fromNumber(number: number): Uint24 {
    const bn = new Bn(number)
    return Uint24.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint24 {
    const bn = new Bn(numberString, base)
    return Uint24.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint24 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 3) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint24(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint24 {
    return Uint24.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint32 extends UintX {

  public static LENGTH: number = 4;

  constructor(uintable: Uintable) {
    super(4, uintable)
  }

  opAdd(uintable: Uintable): Uint32 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint32.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint32 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint32.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint32 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint32.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint32 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint32.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint32 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint32.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint32 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint32.fromBnish(bn)
  }

  static fromNumber(number: number): Uint32 {
    const bn = new Bn(number)
    return Uint32.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint32 {
    const bn = new Bn(numberString, base)
    return Uint32.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint32 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 4) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint32(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint32 {
    return Uint32.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint40 extends UintX {

  public static LENGTH: number = 5;

  constructor(uintable: Uintable) {
    super(5, uintable)
  }

  opAdd(uintable: Uintable): Uint40 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint40.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint40 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint40.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint40 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint40.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint40 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint40.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint40 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint40.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint40 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint40.fromBnish(bn)
  }

  static fromNumber(number: number): Uint40 {
    const bn = new Bn(number)
    return Uint40.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint40 {
    const bn = new Bn(numberString, base)
    return Uint40.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint40 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 5) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint40(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint40 {
    return Uint40.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint48 extends UintX {

  public static LENGTH: number = 6;

  constructor(uintable: Uintable) {
    super(6, uintable)
  }

  opAdd(uintable: Uintable): Uint48 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint48.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint48 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint48.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint48 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint48.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint48 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint48.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint48 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint48.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint48 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint48.fromBnish(bn)
  }

  static fromNumber(number: number): Uint48 {
    const bn = new Bn(number)
    return Uint48.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint48 {
    const bn = new Bn(numberString, base)
    return Uint48.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint48 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 6) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint48(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint48 {
    return Uint48.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint56 extends UintX {

  public static LENGTH: number = 7;

  constructor(uintable: Uintable) {
    super(7, uintable)
  }

  opAdd(uintable: Uintable): Uint56 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint56.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint56 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint56.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint56 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint56.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint56 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint56.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint56 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint56.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint56 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint56.fromBnish(bn)
  }

  static fromNumber(number: number): Uint56 {
    const bn = new Bn(number)
    return Uint56.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint56 {
    const bn = new Bn(numberString, base)
    return Uint56.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint56 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 7) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint56(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint56 {
    return Uint56.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint64 extends UintX {

  public static LENGTH: number = 8;

  constructor(uintable: Uintable) {
    super(8, uintable)
  }

  opAdd(uintable: Uintable): Uint64 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint64.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint64 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint64.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint64 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint64.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint64 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint64.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint64 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint64.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint64 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint64.fromBnish(bn)
  }

  static fromNumber(number: number): Uint64 {
    const bn = new Bn(number)
    return Uint64.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint64 {
    const bn = new Bn(numberString, base)
    return Uint64.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint64 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 8) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint64(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint64 {
    return Uint64.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint72 extends UintX {

  public static LENGTH: number = 9;

  constructor(uintable: Uintable) {
    super(9, uintable)
  }

  opAdd(uintable: Uintable): Uint72 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint72.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint72 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint72.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint72 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint72.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint72 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint72.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint72 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint72.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint72 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint72.fromBnish(bn)
  }

  static fromNumber(number: number): Uint72 {
    const bn = new Bn(number)
    return Uint72.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint72 {
    const bn = new Bn(numberString, base)
    return Uint72.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint72 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 9) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint72(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint72 {
    return Uint72.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint80 extends UintX {

  public static LENGTH: number = 10;

  constructor(uintable: Uintable) {
    super(10, uintable)
  }

  opAdd(uintable: Uintable): Uint80 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint80.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint80 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint80.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint80 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint80.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint80 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint80.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint80 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint80.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint80 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint80.fromBnish(bn)
  }

  static fromNumber(number: number): Uint80 {
    const bn = new Bn(number)
    return Uint80.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint80 {
    const bn = new Bn(numberString, base)
    return Uint80.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint80 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 10) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint80(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint80 {
    return Uint80.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint88 extends UintX {

  public static LENGTH: number = 11;

  constructor(uintable: Uintable) {
    super(11, uintable)
  }

  opAdd(uintable: Uintable): Uint88 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint88.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint88 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint88.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint88 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint88.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint88 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint88.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint88 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint88.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint88 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint88.fromBnish(bn)
  }

  static fromNumber(number: number): Uint88 {
    const bn = new Bn(number)
    return Uint88.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint88 {
    const bn = new Bn(numberString, base)
    return Uint88.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint88 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 11) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint88(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint88 {
    return Uint88.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint96 extends UintX {

  public static LENGTH: number = 12;

  constructor(uintable: Uintable) {
    super(12, uintable)
  }

  opAdd(uintable: Uintable): Uint96 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint96.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint96 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint96.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint96 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint96.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint96 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint96.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint96 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint96.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint96 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint96.fromBnish(bn)
  }

  static fromNumber(number: number): Uint96 {
    const bn = new Bn(number)
    return Uint96.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint96 {
    const bn = new Bn(numberString, base)
    return Uint96.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint96 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 12) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint96(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint96 {
    return Uint96.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint104 extends UintX {

  public static LENGTH: number = 13;

  constructor(uintable: Uintable) {
    super(13, uintable)
  }

  opAdd(uintable: Uintable): Uint104 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint104.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint104 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint104.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint104 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint104.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint104 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint104.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint104 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint104.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint104 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint104.fromBnish(bn)
  }

  static fromNumber(number: number): Uint104 {
    const bn = new Bn(number)
    return Uint104.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint104 {
    const bn = new Bn(numberString, base)
    return Uint104.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint104 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 13) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint104(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint104 {
    return Uint104.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint112 extends UintX {

  public static LENGTH: number = 14;

  constructor(uintable: Uintable) {
    super(14, uintable)
  }

  opAdd(uintable: Uintable): Uint112 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint112.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint112 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint112.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint112 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint112.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint112 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint112.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint112 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint112.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint112 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint112.fromBnish(bn)
  }

  static fromNumber(number: number): Uint112 {
    const bn = new Bn(number)
    return Uint112.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint112 {
    const bn = new Bn(numberString, base)
    return Uint112.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint112 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 14) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint112(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint112 {
    return Uint112.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint120 extends UintX {

  public static LENGTH: number = 15;

  constructor(uintable: Uintable) {
    super(15, uintable)
  }

  opAdd(uintable: Uintable): Uint120 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint120.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint120 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint120.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint120 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint120.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint120 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint120.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint120 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint120.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint120 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint120.fromBnish(bn)
  }

  static fromNumber(number: number): Uint120 {
    const bn = new Bn(number)
    return Uint120.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint120 {
    const bn = new Bn(numberString, base)
    return Uint120.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint120 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 15) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint120(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint120 {
    return Uint120.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint128 extends UintX {

  public static LENGTH: number = 16;

  constructor(uintable: Uintable) {
    super(16, uintable)
  }

  opAdd(uintable: Uintable): Uint128 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint128.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint128 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint128.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint128 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint128.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint128 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint128.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint128 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint128.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint128 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint128.fromBnish(bn)
  }

  static fromNumber(number: number): Uint128 {
    const bn = new Bn(number)
    return Uint128.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint128 {
    const bn = new Bn(numberString, base)
    return Uint128.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint128 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 16) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint128(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint128 {
    return Uint128.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint136 extends UintX {

  public static LENGTH: number = 17;

  constructor(uintable: Uintable) {
    super(17, uintable)
  }

  opAdd(uintable: Uintable): Uint136 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint136.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint136 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint136.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint136 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint136.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint136 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint136.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint136 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint136.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint136 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint136.fromBnish(bn)
  }

  static fromNumber(number: number): Uint136 {
    const bn = new Bn(number)
    return Uint136.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint136 {
    const bn = new Bn(numberString, base)
    return Uint136.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint136 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 17) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint136(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint136 {
    return Uint136.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint144 extends UintX {

  public static LENGTH: number = 18;

  constructor(uintable: Uintable) {
    super(18, uintable)
  }

  opAdd(uintable: Uintable): Uint144 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint144.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint144 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint144.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint144 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint144.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint144 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint144.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint144 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint144.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint144 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint144.fromBnish(bn)
  }

  static fromNumber(number: number): Uint144 {
    const bn = new Bn(number)
    return Uint144.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint144 {
    const bn = new Bn(numberString, base)
    return Uint144.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint144 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 18) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint144(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint144 {
    return Uint144.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint152 extends UintX {

  public static LENGTH: number = 19;

  constructor(uintable: Uintable) {
    super(19, uintable)
  }

  opAdd(uintable: Uintable): Uint152 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint152.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint152 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint152.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint152 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint152.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint152 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint152.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint152 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint152.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint152 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint152.fromBnish(bn)
  }

  static fromNumber(number: number): Uint152 {
    const bn = new Bn(number)
    return Uint152.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint152 {
    const bn = new Bn(numberString, base)
    return Uint152.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint152 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 19) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint152(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint152 {
    return Uint152.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint160 extends UintX {

  public static LENGTH: number = 20;

  constructor(uintable: Uintable) {
    super(20, uintable)
  }

  opAdd(uintable: Uintable): Uint160 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint160.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint160 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint160.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint160 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint160.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint160 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint160.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint160 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint160.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint160 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint160.fromBnish(bn)
  }

  static fromNumber(number: number): Uint160 {
    const bn = new Bn(number)
    return Uint160.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint160 {
    const bn = new Bn(numberString, base)
    return Uint160.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint160 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 20) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint160(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint160 {
    return Uint160.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint168 extends UintX {

  public static LENGTH: number = 21;

  constructor(uintable: Uintable) {
    super(21, uintable)
  }

  opAdd(uintable: Uintable): Uint168 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint168.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint168 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint168.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint168 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint168.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint168 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint168.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint168 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint168.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint168 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint168.fromBnish(bn)
  }

  static fromNumber(number: number): Uint168 {
    const bn = new Bn(number)
    return Uint168.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint168 {
    const bn = new Bn(numberString, base)
    return Uint168.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint168 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 21) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint168(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint168 {
    return Uint168.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint176 extends UintX {

  public static LENGTH: number = 22;

  constructor(uintable: Uintable) {
    super(22, uintable)
  }

  opAdd(uintable: Uintable): Uint176 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint176.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint176 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint176.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint176 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint176.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint176 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint176.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint176 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint176.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint176 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint176.fromBnish(bn)
  }

  static fromNumber(number: number): Uint176 {
    const bn = new Bn(number)
    return Uint176.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint176 {
    const bn = new Bn(numberString, base)
    return Uint176.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint176 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 22) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint176(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint176 {
    return Uint176.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint184 extends UintX {

  public static LENGTH: number = 23;

  constructor(uintable: Uintable) {
    super(23, uintable)
  }

  opAdd(uintable: Uintable): Uint184 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint184.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint184 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint184.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint184 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint184.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint184 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint184.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint184 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint184.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint184 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint184.fromBnish(bn)
  }

  static fromNumber(number: number): Uint184 {
    const bn = new Bn(number)
    return Uint184.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint184 {
    const bn = new Bn(numberString, base)
    return Uint184.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint184 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 23) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint184(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint184 {
    return Uint184.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint192 extends UintX {

  public static LENGTH: number = 24;

  constructor(uintable: Uintable) {
    super(24, uintable)
  }

  opAdd(uintable: Uintable): Uint192 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint192.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint192 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint192.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint192 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint192.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint192 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint192.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint192 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint192.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint192 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint192.fromBnish(bn)
  }

  static fromNumber(number: number): Uint192 {
    const bn = new Bn(number)
    return Uint192.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint192 {
    const bn = new Bn(numberString, base)
    return Uint192.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint192 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 24) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint192(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint192 {
    return Uint192.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint200 extends UintX {

  public static LENGTH: number = 25;

  constructor(uintable: Uintable) {
    super(25, uintable)
  }

  opAdd(uintable: Uintable): Uint200 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint200.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint200 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint200.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint200 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint200.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint200 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint200.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint200 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint200.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint200 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint200.fromBnish(bn)
  }

  static fromNumber(number: number): Uint200 {
    const bn = new Bn(number)
    return Uint200.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint200 {
    const bn = new Bn(numberString, base)
    return Uint200.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint200 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 25) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint200(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint200 {
    return Uint200.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint208 extends UintX {

  public static LENGTH: number = 26;

  constructor(uintable: Uintable) {
    super(26, uintable)
  }

  opAdd(uintable: Uintable): Uint208 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint208.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint208 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint208.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint208 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint208.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint208 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint208.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint208 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint208.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint208 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint208.fromBnish(bn)
  }

  static fromNumber(number: number): Uint208 {
    const bn = new Bn(number)
    return Uint208.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint208 {
    const bn = new Bn(numberString, base)
    return Uint208.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint208 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 26) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint208(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint208 {
    return Uint208.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint216 extends UintX {

  public static LENGTH: number = 27;

  constructor(uintable: Uintable) {
    super(27, uintable)
  }

  opAdd(uintable: Uintable): Uint216 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint216.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint216 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint216.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint216 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint216.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint216 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint216.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint216 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint216.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint216 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint216.fromBnish(bn)
  }

  static fromNumber(number: number): Uint216 {
    const bn = new Bn(number)
    return Uint216.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint216 {
    const bn = new Bn(numberString, base)
    return Uint216.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint216 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 27) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint216(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint216 {
    return Uint216.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint224 extends UintX {

  public static LENGTH: number = 28;

  constructor(uintable: Uintable) {
    super(28, uintable)
  }

  opAdd(uintable: Uintable): Uint224 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint224.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint224 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint224.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint224 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint224.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint224 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint224.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint224 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint224.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint224 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint224.fromBnish(bn)
  }

  static fromNumber(number: number): Uint224 {
    const bn = new Bn(number)
    return Uint224.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint224 {
    const bn = new Bn(numberString, base)
    return Uint224.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint224 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 28) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint224(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint224 {
    return Uint224.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint232 extends UintX {

  public static LENGTH: number = 29;

  constructor(uintable: Uintable) {
    super(29, uintable)
  }

  opAdd(uintable: Uintable): Uint232 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint232.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint232 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint232.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint232 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint232.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint232 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint232.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint232 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint232.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint232 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint232.fromBnish(bn)
  }

  static fromNumber(number: number): Uint232 {
    const bn = new Bn(number)
    return Uint232.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint232 {
    const bn = new Bn(numberString, base)
    return Uint232.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint232 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 29) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint232(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint232 {
    return Uint232.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint240 extends UintX {

  public static LENGTH: number = 30;

  constructor(uintable: Uintable) {
    super(30, uintable)
  }

  opAdd(uintable: Uintable): Uint240 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint240.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint240 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint240.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint240 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint240.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint240 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint240.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint240 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint240.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint240 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint240.fromBnish(bn)
  }

  static fromNumber(number: number): Uint240 {
    const bn = new Bn(number)
    return Uint240.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint240 {
    const bn = new Bn(numberString, base)
    return Uint240.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint240 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 30) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint240(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint240 {
    return Uint240.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint248 extends UintX {

  public static LENGTH: number = 31;

  constructor(uintable: Uintable) {
    super(31, uintable)
  }

  opAdd(uintable: Uintable): Uint248 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint248.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint248 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint248.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint248 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint248.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint248 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint248.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint248 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint248.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint248 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint248.fromBnish(bn)
  }

  static fromNumber(number: number): Uint248 {
    const bn = new Bn(number)
    return Uint248.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint248 {
    const bn = new Bn(numberString, base)
    return Uint248.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint248 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 31) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint248(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint248 {
    return Uint248.fromNumberString(10, bignumberish.toString(10))
  }

}

export class Uint256 extends UintX {

  public static LENGTH: number = 32;

  constructor(uintable: Uintable) {
    super(32, uintable)
  }

  opAdd(uintable: Uintable): Uint256 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return Uint256.fromBnish(bn)
  }

  opSub(uintable: Uintable): Uint256 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return Uint256.fromBnish(bn)
  }

  opMul(uintable: Uintable): Uint256 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return Uint256.fromBnish(bn)
  }

  opDiv(uintable: Uintable): Uint256 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return Uint256.fromBnish(bn)
  }

  opMod(uintable: Uintable): Uint256 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return Uint256.fromBnish(bn)
  }

  opPow(uintable: Uintable): Uint256 {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return Uint256.fromBnish(bn)
  }

  static fromNumber(number: number): Uint256 {
    const bn = new Bn(number)
    return Uint256.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): Uint256 {
    const bn = new Bn(numberString, base)
    return Uint256.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): Uint256 {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > 32) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new Uint256(uint8Array)
  }

  static fromBignumberish(bignumberish: Bignumberish): Uint256 {
    return Uint256.fromNumberString(10, bignumberish.toString(10))
  }

}

