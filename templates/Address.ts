import { FixButtercup } from '../buttercups/fixButtercups'
import { External } from '../interfaces'
import { getPaddedLeft, getPaddedRight } from '../utils/uint8Array'
import * as from from '../utils/from'

export class Address extends FixButtercup {

  constructor(uint8Array: Uint8Array) {
    super(20, uint8Array)
  }

  getIsNull(): boolean {
    return this.getIsOnlyZeroes()
  }

  static genNull(): Address {
    return Address.fromUint8Array(
      new Uint8Array(20).fill(0)
    )
  }

  {{#each staticFroms}}
  static {{{func}}}({{{arg}}}: {{{argClass}}}): Address {
    return from.{{{fromFunc}}}(exports.Address, {{{arg}}})
  }

  {{/each}}
}
