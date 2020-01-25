import { FixLeftButtercup } from '../buttercups/fixButtercups'
import Bn from 'bn.js'
import { Uintish } from '../interfaces'
import { Uish } from 'pollenium-uvaursi'

export class UintX extends FixLeftButtercup implements Uintish {

  private bn?: Bn;
  private number?: number;

  constructor(length: number, uish: Uish) {
    super(length, uish)
  }

  toNumber(): number {
    this.number = new Bn(this.uu.u).toNumber()
    return this.number
  }

  getIsZero(): boolean {
    return this.uu.u.every((byte) => {
      return byte === 0
    })
  }

  compEq(value: UintX): boolean {
    const thisBn = new Bn(this.uu.u)
    const valueBn = new Bn(value.uu.u)
    return thisBn.eq(valueBn)
  }

  compGt(value: UintX): boolean {
    const thisBn = new Bn(this.uu.u)
    const valueBn = new Bn(value.uu.u)
    return thisBn.gt(valueBn)
  }

  compGte(value: UintX): boolean {
    const thisBn = new Bn(this.uu.u)
    const valueBn = new Bn(value.uu.u)
    return thisBn.gte(valueBn)
  }

  compLt(value: UintX): boolean {
    const thisBn = new Bn(this.uu.u)
    const valueBn = new Bn(value.uu.u)
    return thisBn.lt(valueBn)
  }

  compLte(value: UintX): boolean {
    const thisBn = new Bn(this.uu.u)
    const valueBn = new Bn(value.uu.u)
    return thisBn.lte(valueBn)
  }

}
