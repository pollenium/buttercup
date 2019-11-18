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
    this.bn = new Bn(this.cloneUint8Array())
    return this.bn
  }

  getNumber(): number {
    if (this.number) {
      return this.number
    }
    this.number = this.getBn().toNumber()
    return this.number
  }

  unstrictEquals(uint: UintX): boolean {
    return this.getBn().eq(uint.getBn())
  }

  gt(a: UintX, b: UintX): boolean {
    return a.getBn().gt(b.getBn())
  }

  gte(a: UintX, b: UintX): boolean {
    return a.getBn().gte(b.getBn())
  }

  lt(a: UintX, b: UintX): boolean {
    return a.getBn().lt(b.getBn())
  }

  lte(a: UintX, b: UintX): boolean {
    return a.getBn().lte(b.getBn())
  }

}
