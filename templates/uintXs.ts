import { UintX } from '../internals/UintX'
import Bn from 'bn.js'
import { Uish } from 'pollenium-uvaursi'

const zeroBn = new Bn(0)
const oneBn = new Bn(1)

{{#each classes}}
export class Uint{{bits}} extends UintX {

  public static LENGTH: number = {{length}};

  constructor(uish: Uish) {
    super(Uint{{bits}}.LENGTH, uish)
  }

  opAdd(value: {{className}}): {{className}} {
    const thisBn = new Bn(this.uu.u)
    const valueBn = new Bn(value.uu.u)
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  opSub(value: {{className}}): {{className}} {
    const thisBn = new Bn(this.uu.u)
    const valueBn = new Bn(value.uu.u)
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  opMul(value: {{className}}): {{className}} {
    const thisBn = new Bn(this.uu.u)
    const valueBn = new Bn(value.uu.u)
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  opDiv(value: {{className}}): {{className}} {
    const thisBn = new Bn(this.uu.u)
    const valueBn = new Bn(value.uu.u)
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  opMod(value: {{className}}): {{className}} {
    const thisBn = new Bn(this.uu.u)
    const valueBn = new Bn(value.uu.u)
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  opPow(value: {{className}}): {{className}} {
    const thisBn = new Bn(this.uu.u)
    const valueBn = new Bn(value.uu.u)
    const uint8Array = thisBn.pow(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  static fromNumber(number: number): {{className}} {
    const bn = new Bn(number)
    return new {{className}}(bn.toArrayLike(Uint8Array, 'be'))
  }

}

{{/each}}
