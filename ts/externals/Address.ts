import { FixButtercup } from '../buttercups/fixButtercups'
import { Uu, Uish } from 'pollenium-uvaursi'

export class Address extends FixButtercup {

  private isNull: boolean | null = null

  constructor(uish: Uish) {
    super(20, uish)
  }

  getIsNull(): boolean {
    if (this.isNull !== null) {
      return this.isNull
    }
    this.isNull = this.uu.u.every((byte) => {
      return byte === 0
    })
    return this.isNull
  }

  static genNull(): Address {
    return new Address(Uu.genZeros(20))
  }

}
