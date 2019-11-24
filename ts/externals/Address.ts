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


  static fromUint8Array(uint8Array: Uint8Array): Address {
    return from.uint8Array(exports.Address, uint8Array)
  }

  static fromArray(array: Array<number>): Address {
    return from.array(exports.Address, array)
  }

  static fromBuffer(buffer: Buffer): Address {
    return from.buffer(exports.Address, buffer)
  }

  static fromHexish(hexish: string): Address {
    return from.hexish(exports.Address, hexish)
  }

}
