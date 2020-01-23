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
    this.number = new Bn(this.toUint8Array()).toNumber()
    return this.number
  }

  getIsZero(): boolean {
    return this.getIsOnlyZeroes()
  }

  eq(value: UintX): boolean {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    return thisBn.eq(valueBn)
  }

  gt(value: UintX): boolean {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    return thisBn.gt(valueBn)
  }

  gte(value: UintX): boolean {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    return thisBn.gte(valueBn)
  }

  lt(value: UintX): boolean {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    return thisBn.lt(valueBn)
  }

  lte(value: UintX): boolean {
    const thisBn = new Bn(this.toUint8Array())
    const valueBn = new Bn(value.toUint8Array())
    return thisBn.lte(valueBn)
  }

}
