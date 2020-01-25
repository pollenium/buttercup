import { UintX } from '../internals/UintX'
import Bn from 'bn.js'
import { Uish } from 'pollenium-uvaursi'
import { Uintable } from '../types'
import { genBnFromUintable } from '../utils'

const zeroBn = new Bn(0)
const oneBn = new Bn(1)

export class Uint8 extends UintX {

  public static LENGTH: number = 1;

  constructor(uish: Uish) {
    super(Uint8.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint8 {
    if (uintable instanceof UintX) {
      return new Uint8(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint8.fromNumber(uintable)
    }
  }

}

export class Uint16 extends UintX {

  public static LENGTH: number = 2;

  constructor(uish: Uish) {
    super(Uint16.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint16 {
    if (uintable instanceof UintX) {
      return new Uint16(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint16.fromNumber(uintable)
    }
  }

}

export class Uint24 extends UintX {

  public static LENGTH: number = 3;

  constructor(uish: Uish) {
    super(Uint24.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint24 {
    if (uintable instanceof UintX) {
      return new Uint24(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint24.fromNumber(uintable)
    }
  }

}

export class Uint32 extends UintX {

  public static LENGTH: number = 4;

  constructor(uish: Uish) {
    super(Uint32.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint32 {
    if (uintable instanceof UintX) {
      return new Uint32(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint32.fromNumber(uintable)
    }
  }

}

export class Uint40 extends UintX {

  public static LENGTH: number = 5;

  constructor(uish: Uish) {
    super(Uint40.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint40 {
    if (uintable instanceof UintX) {
      return new Uint40(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint40.fromNumber(uintable)
    }
  }

}

export class Uint48 extends UintX {

  public static LENGTH: number = 6;

  constructor(uish: Uish) {
    super(Uint48.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint48 {
    if (uintable instanceof UintX) {
      return new Uint48(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint48.fromNumber(uintable)
    }
  }

}

export class Uint56 extends UintX {

  public static LENGTH: number = 7;

  constructor(uish: Uish) {
    super(Uint56.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint56 {
    if (uintable instanceof UintX) {
      return new Uint56(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint56.fromNumber(uintable)
    }
  }

}

export class Uint64 extends UintX {

  public static LENGTH: number = 8;

  constructor(uish: Uish) {
    super(Uint64.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint64 {
    if (uintable instanceof UintX) {
      return new Uint64(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint64.fromNumber(uintable)
    }
  }

}

export class Uint72 extends UintX {

  public static LENGTH: number = 9;

  constructor(uish: Uish) {
    super(Uint72.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint72 {
    if (uintable instanceof UintX) {
      return new Uint72(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint72.fromNumber(uintable)
    }
  }

}

export class Uint80 extends UintX {

  public static LENGTH: number = 10;

  constructor(uish: Uish) {
    super(Uint80.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint80 {
    if (uintable instanceof UintX) {
      return new Uint80(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint80.fromNumber(uintable)
    }
  }

}

export class Uint88 extends UintX {

  public static LENGTH: number = 11;

  constructor(uish: Uish) {
    super(Uint88.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint88 {
    if (uintable instanceof UintX) {
      return new Uint88(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint88.fromNumber(uintable)
    }
  }

}

export class Uint96 extends UintX {

  public static LENGTH: number = 12;

  constructor(uish: Uish) {
    super(Uint96.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint96 {
    if (uintable instanceof UintX) {
      return new Uint96(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint96.fromNumber(uintable)
    }
  }

}

export class Uint104 extends UintX {

  public static LENGTH: number = 13;

  constructor(uish: Uish) {
    super(Uint104.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint104 {
    if (uintable instanceof UintX) {
      return new Uint104(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint104.fromNumber(uintable)
    }
  }

}

export class Uint112 extends UintX {

  public static LENGTH: number = 14;

  constructor(uish: Uish) {
    super(Uint112.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint112 {
    if (uintable instanceof UintX) {
      return new Uint112(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint112.fromNumber(uintable)
    }
  }

}

export class Uint120 extends UintX {

  public static LENGTH: number = 15;

  constructor(uish: Uish) {
    super(Uint120.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint120 {
    if (uintable instanceof UintX) {
      return new Uint120(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint120.fromNumber(uintable)
    }
  }

}

export class Uint128 extends UintX {

  public static LENGTH: number = 16;

  constructor(uish: Uish) {
    super(Uint128.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint128 {
    if (uintable instanceof UintX) {
      return new Uint128(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint128.fromNumber(uintable)
    }
  }

}

export class Uint136 extends UintX {

  public static LENGTH: number = 17;

  constructor(uish: Uish) {
    super(Uint136.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint136 {
    if (uintable instanceof UintX) {
      return new Uint136(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint136.fromNumber(uintable)
    }
  }

}

export class Uint144 extends UintX {

  public static LENGTH: number = 18;

  constructor(uish: Uish) {
    super(Uint144.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint144 {
    if (uintable instanceof UintX) {
      return new Uint144(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint144.fromNumber(uintable)
    }
  }

}

export class Uint152 extends UintX {

  public static LENGTH: number = 19;

  constructor(uish: Uish) {
    super(Uint152.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint152 {
    if (uintable instanceof UintX) {
      return new Uint152(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint152.fromNumber(uintable)
    }
  }

}

export class Uint160 extends UintX {

  public static LENGTH: number = 20;

  constructor(uish: Uish) {
    super(Uint160.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint160 {
    if (uintable instanceof UintX) {
      return new Uint160(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint160.fromNumber(uintable)
    }
  }

}

export class Uint168 extends UintX {

  public static LENGTH: number = 21;

  constructor(uish: Uish) {
    super(Uint168.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint168 {
    if (uintable instanceof UintX) {
      return new Uint168(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint168.fromNumber(uintable)
    }
  }

}

export class Uint176 extends UintX {

  public static LENGTH: number = 22;

  constructor(uish: Uish) {
    super(Uint176.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint176 {
    if (uintable instanceof UintX) {
      return new Uint176(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint176.fromNumber(uintable)
    }
  }

}

export class Uint184 extends UintX {

  public static LENGTH: number = 23;

  constructor(uish: Uish) {
    super(Uint184.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint184 {
    if (uintable instanceof UintX) {
      return new Uint184(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint184.fromNumber(uintable)
    }
  }

}

export class Uint192 extends UintX {

  public static LENGTH: number = 24;

  constructor(uish: Uish) {
    super(Uint192.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint192 {
    if (uintable instanceof UintX) {
      return new Uint192(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint192.fromNumber(uintable)
    }
  }

}

export class Uint200 extends UintX {

  public static LENGTH: number = 25;

  constructor(uish: Uish) {
    super(Uint200.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint200 {
    if (uintable instanceof UintX) {
      return new Uint200(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint200.fromNumber(uintable)
    }
  }

}

export class Uint208 extends UintX {

  public static LENGTH: number = 26;

  constructor(uish: Uish) {
    super(Uint208.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint208 {
    if (uintable instanceof UintX) {
      return new Uint208(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint208.fromNumber(uintable)
    }
  }

}

export class Uint216 extends UintX {

  public static LENGTH: number = 27;

  constructor(uish: Uish) {
    super(Uint216.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint216 {
    if (uintable instanceof UintX) {
      return new Uint216(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint216.fromNumber(uintable)
    }
  }

}

export class Uint224 extends UintX {

  public static LENGTH: number = 28;

  constructor(uish: Uish) {
    super(Uint224.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint224 {
    if (uintable instanceof UintX) {
      return new Uint224(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint224.fromNumber(uintable)
    }
  }

}

export class Uint232 extends UintX {

  public static LENGTH: number = 29;

  constructor(uish: Uish) {
    super(Uint232.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint232 {
    if (uintable instanceof UintX) {
      return new Uint232(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint232.fromNumber(uintable)
    }
  }

}

export class Uint240 extends UintX {

  public static LENGTH: number = 30;

  constructor(uish: Uish) {
    super(Uint240.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint240 {
    if (uintable instanceof UintX) {
      return new Uint240(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint240.fromNumber(uintable)
    }
  }

}

export class Uint248 extends UintX {

  public static LENGTH: number = 31;

  constructor(uish: Uish) {
    super(Uint248.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint248 {
    if (uintable instanceof UintX) {
      return new Uint248(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint248.fromNumber(uintable)
    }
  }

}

export class Uint256 extends UintX {

  public static LENGTH: number = 32;

  constructor(uish: Uish) {
    super(Uint256.LENGTH, uish)
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

  static fromUintable(uintable: Uintable): Uint256 {
    if (uintable instanceof UintX) {
      return new Uint256(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return Uint256.fromNumber(uintable)
    }
  }

}

