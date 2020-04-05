import { UintX, Uintable, UintUnderflowError, UintOverflowError } from '../internals/UintX'
import Bn from 'bn.js'
import { Uish } from 'pollenium-uvaursi'
import { Bnish } from '../interfaces'
import { genBnFromUintable } from '../utils'

const zeroBn = new Bn(0)
const oneBn = new Bn(1)

{{#each classes}}
export class {{className}} extends UintX {

  public static LENGTH: number = {{length}};

  constructor(uintable: Uintable) {
    super({{length}}, uintable)
  }

  opAdd(uintable: Uintable): {{className}} {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.add(valueBn)
    return {{className}}.fromBnish(bn)
  }

  opSub(uintable: Uintable): {{className}} {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.sub(valueBn)
    return {{className}}.fromBnish(bn)
  }

  opMul(uintable: Uintable): {{className}} {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mul(valueBn)
    return {{className}}.fromBnish(bn)
  }

  opDiv(uintable: Uintable): {{className}} {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.div(valueBn)
    return {{className}}.fromBnish(bn)
  }

  opMod(uintable: Uintable): {{className}} {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.mod(valueBn)
    return {{className}}.fromBnish(bn)
  }

  opPow(uintable: Uintable): {{className}} {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(uintable)
    const bn = thisBn.pow(valueBn)
    return {{className}}.fromBnish(bn)
  }

  static fromNumber(number: number): {{className}} {
    const bn = new Bn(number)
    return {{className}}.fromBnish(bn)
  }

  static fromNumberString(base: number, numberString: string): {{className}} {
    const bn = new Bn(numberString, base)
    return {{className}}.fromBnish(bn)
  }

  static fromBnish(bnish: Bnish): {{className}} {
    if (bnish.isNeg()) { throw new UintUnderflowError }
    const array = bnish.toArray('be')
    if (array.length > {{length}}) { throw new UintOverflowError }
    const uint8Array = new Uint8Array(array)
    return new {{className}}(uint8Array)
  }

}

{{/each}}
