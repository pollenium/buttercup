import { BytesX } from '../internals/BytesX'
import { External, Uintish } from '../interfaces'
import * as from from '../utils/from'
import * as uintMath from '../utils/uintMath'
import Bn from 'bn.js'

{{#each classes}}
export const Bytes{{length}}: External = class Bytes{{length}} extends BytesX {

  public static LENGTH: number = {{length}};

  constructor(uint8Array: Uint8Array) {
    super(Bytes{{length}}.LENGTH, uint8Array)
  }

  {{#each ops}}
  {{this}}(value: Bytes{{../length}}): Bytes{{../length}} {
    return uintMath.{{this}}(exports.Bytes{{../length}}, this, value);
  }

  {{/each}}
  {{#each staticFroms}}
  static {{{func}}}({{{arg}}}: {{{argClass}}}): Bytes{{../length}} {
    return from.{{{fromFunc}}}(exports.Bytes{{../length}}, {{{arg}}})
  }

  {{/each}}
}

{{/each}}
