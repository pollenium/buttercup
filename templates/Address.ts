import { FixButtercup } from '../buttercups/fixButtercups'
import * as uvaursi from 'pollenium-uvaursi'

export class Address extends FixButtercup {

  constructor(uint8Array: Uint8Array) {
    super(20, uint8Array)
  }

  getIsNull(): boolean {
    return this.getIsOnlyZeroes()
  }

  static genNull(): Address {
    return new Address(new Uint8Array(20).fill(0))
  }

  {{#each uvaursiFroms}}
  static {{{func}}}({{{arg}}}: {{{argClass}}}): Address {
    return new Address(uvaursi.{{{func}}}({{{arg}}}))
  }
  {{/each}}
}
