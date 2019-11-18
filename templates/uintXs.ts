import { UintX } from '../internals/UintX'
import { External, Uintish } from '../interfaces'
import * as from from '../utils/from'
import * as uintMath from '../utils/uintMath'
import Bn from 'bn.js'

{{#each classes}}
export const Uint{{bits}}: External = class Uint{{bits}} extends UintX implements Uintish {

  public static LENGTH: number = {{length}};

  constructor(uint8Array: Uint8Array) {
    super(Uint{{bits}}.LENGTH, uint8Array)
  }

  {{#each ops}}
  {{this}}(value: Uint{{../bits}}): Uint{{../bits}} {
    return uintMath.{{this}}(exports.Uint{{../bits}}, this, value);
  }

  {{/each}}
  {{#each staticFroms}}
  static {{{func}}}({{{arg}}}: {{{argClass}}}): Uint{{../bits}} {
    return from.{{{fromFunc}}}(exports.Uint{{../bits}}, {{{arg}}})
  }

  {{/each}}
}

{{/each}}
