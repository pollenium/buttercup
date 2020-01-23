import { UintX } from '../internals/UintX'
import Bn from 'bn.js'
import * as uvaursi from 'pollenium-uvaursi'

const zeroBn = new Bn(0)
const oneBn = new Bn(1)

{{#each classes}}
export class Uint{{bits}} extends UintX {

  public static LENGTH: number = {{length}};

  constructor(uint8Array: Uint8Array) {
    super(Uint{{bits}}.LENGTH, uint8Array)
  }

  add(value: {{className}}): {{className}} {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  sub(value: {{className}}): {{className}} {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  mul(value: {{className}}): {{className}} {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  div(value: {{className}}): {{className}} {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  mod(value: {{className}}): {{className}} {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    const uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be')
    return new {{className}}(uint8Array)
  }

  static fromNumber(number: number): {{className}} {
    const bn = new Bn(number)
    return new {{className}}(bn.toArrayLike(Uint8Array, 'be'))
  }

  {{#each uvaursiFroms}}
  static {{{func}}}({{{arg}}}: {{{argClass}}}): {{../className}} {
    return new {{../className}}(uvaursi.{{{func}}}({{{arg}}}))
  }

  {{/each}}
}

{{/each}}
