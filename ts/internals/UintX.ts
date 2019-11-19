import { FixLeftButtercup } from '../buttercups/fixButtercups'
import Bn from 'bn.js'
import * as from from '../utils/from'
import { Uintish } from '../interfaces'

export class UintX extends FixLeftButtercup implements Uintish {

  private bn?: Bn;
  private number?: number;

  constructor(length: number, uint8Array: Uint8Array) {
    super(length, uint8Array)
  }

  getBn(): Bn {
    if (this.bn) {
      return this.bn
    }
    this.bn = new Bn(this.getUint8Array())
    return this.bn
  }

  getNumber(): number {
    if (this.number) {
      return this.number
    }
    this.number = this.getBn().toNumber()
    return this.number
  }

  unstrictEquals(uintX: UintX): boolean {
    return this.getBn().eq(uintX.getBn())
  }

  gt(uintX: UintX): boolean {
    return this.getBn().gt(uintX.getBn())
  }

  gte(uintX: UintX): boolean {
    return this.getBn().gte(uintX.getBn())
  }

  lt(uintX: UintX): boolean {
    return this.getBn().lt(uintX.getBn())
  }

  lte(uintX: UintX): boolean {
    return this.getBn().lte(uintX.getBn())
  }

}
