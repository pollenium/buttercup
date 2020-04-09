import { FixLeftButtercup } from '../buttercups/fixButtercups'
import Bn from 'bn.js'
import { Uish } from 'pollenium-uvaursi'
import { genBnFromUintable } from '../utils'

export type Uintable = number | UintX | Uish

export class UintUnderflowError extends Error {
  constructor() {
    super('UintUnderflowError')
    Object.setPrototypeOf(this, UintUnderflowError.prototype)
  }
}

export class UintOverflowError extends Error {
  constructor() {
    super('UintOverflowError')
    Object.setPrototypeOf(this, UintOverflowError.prototype)
  }
}

export abstract class UintX extends FixLeftButtercup {

  private bn?: Bn;
  private number?: number;
  private numberStringByBase: Record<number, string> = {};

  constructor(length: number, uintable: Uintable) {
    super(length, genBnFromUintable(uintable).toArrayLike(Uint8Array, 'be'))
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
