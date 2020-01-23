import { FixButtercup } from '../buttercups/fixButtercups'
import { Uvaursi } from 'pollenium-uvaursi'

export class Address extends FixButtercup {

  private isNull: boolean | null = null

  constructor(uint8Array: Uint8Array) {
    super(20, uint8Array)
  }

  getIsNull(): boolean {
    if (this.isNull !== null) {
      return this.isNull
    }
    this.isNull = this.toUvaursi().every((byte) => {
      return byte === 0
    })
    return this.isNull
  }

  static genNull(): Address {
    const uvaursi = new Uvaursi(new Uint8Array(20).fill(0))
    return new Address(uvaursi)
  }

}
