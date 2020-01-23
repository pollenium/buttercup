import { FixLeftButtercup } from '../buttercups/fixButtercups'
import Bn from 'bn.js'
import { Uintish } from '../interfaces'

export class UintX extends FixLeftButtercup implements Uintish {

  private bn?: Bn;
  private number?: number;

  constructor(length: number, uint8Array: Uint8Array) {
    super(length, uint8Array)
  }

  toNumber(): number {
    this.number = new Bn(this.uint8Array).toNumber()
    return this.number
  }

  getIsZero(): boolean {
    return this.toUvaursi().every((byte) => {
      return byte === 0
    })
  }

  compEq(value: UintX): boolean {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    return thisBn.eq(valueBn)
  }

  compGt(value: UintX): boolean {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    return thisBn.gt(valueBn)
  }

  compGte(value: UintX): boolean {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    return thisBn.gte(valueBn)
  }

  compLt(value: UintX): boolean {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    return thisBn.lt(valueBn)
  }

  compLte(value: UintX): boolean {
    const thisBn = new Bn(this.uint8Array)
    const valueBn = new Bn(value.uint8Array)
    return thisBn.lte(valueBn)
  }

}
