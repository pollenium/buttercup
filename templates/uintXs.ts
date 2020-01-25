import { UintX } from '../internals/UintX'
import Bn from 'bn.js'
import { Uish } from 'pollenium-uvaursi'
import { Uintable } from '../types'
import { genBnFromUintable } from '../utils'

const zeroBn = new Bn(0)
const oneBn = new Bn(1)

{{#each classes}}
export class Uint{{bits}} extends UintX {

  public static LENGTH: number = {{length}};

  constructor(uish: Uish) {
    super(Uint{{bits}}.LENGTH, uish)
  }

  opAdd(uintable: Uintable): {{className}} {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  opSub(uintable: Uintable): {{className}} {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  opMul(uintable: Uintable): {{className}} {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  opDiv(uintable: Uintable): {{className}} {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  opMod(uintable: Uintable): {{className}} {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  opPow(uintable: Uintable): {{className}} {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  static fromNumber(number: number): {{className}} {
    const bn = new Bn(number)
    return new {{className}}(bn.toArrayLike(Uint8Array, 'be'))
  }

  static fromUintable(uintable: Uintable): {{className}} {
    if (uintable instanceof UintX) {
      return new {{className}}(uintable.uu.genClone())
    }
    if (!Number.isNaN(uintable)) {
      return {{className}}.fromNumber(uintable)
    }
  }

}

{{/each}}
