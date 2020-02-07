import { FixLeftButtercup } from '../buttercups/fixButtercups'
import Bn from 'bn.js'
import { Uish } from 'pollenium-uvaursi'
import { Uintable } from '../types'
import { genBnFromUintable } from '../utils'

export abstract class UintX extends FixLeftButtercup {

  private bn?: Bn;
  private number?: number;
  private numberStringByBase: Record<number, string> = {};

  constructor(length: number, uish: Uish) {
    super(length, uish)
  }

  toNumber(): number {
    this.number = new Bn(this.uu.u).toNumber()
    return this.number
  }

  toNumberString(base: number): string {
    if (this.numberStringByBase[base]) {
      return this.numberStringByBase[base]
    }
    this.numberStringByBase[base] = new Bn(this.uu.u).toString(base)
    return this.numberStringByBase[base]
  }

  getIsZero(): boolean {
    return this.uu.u.every((byte) => {
      return byte === 0
    })
  }

  compEq(value: Uintable): boolean {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(value)
    return thisBn.eq(valueBn)
  }

  compGt(value: Uintable): boolean {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(value)
    return thisBn.gt(valueBn)
  }

  compGte(value: Uintable): boolean {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(value)
    return thisBn.gte(valueBn)
  }

  compLt(value: Uintable): boolean {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(value)
    return thisBn.lt(valueBn)
  }

  compLte(value: Uintable): boolean {
    const thisBn = genBnFromUintable(this)
    const valueBn = genBnFromUintable(value)
    return thisBn.lte(valueBn)
  }

}
