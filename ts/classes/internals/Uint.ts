import { FixWrapper } from '../wrappers/FixWrapper'
import Bn from 'bn.js'
import * as from from '../../from'
import { Uintish } from '../../interfaces'

export const BITS_MIN = 8
export const BITS_MAX = 256

export class Uint extends FixWrapper implements Uintish {

  private bn?: Bn;
  private number?: number;

  constructor(private bitsLength: number, uint8Array: Uint8Array) {
    super(bitsLength / 8, uint8Array)
    if (bitsLength % BITS_MIN !== 0) {
      throw new Error(`bitsLength must be multiple of ${BITS_MIN}`)
    }
    if (bitsLength < BITS_MIN) {
      throw new Error(`bitsLength must be greater than or equal to ${BITS_MIN}`)
    }
    if (bitsLength > BITS_MAX) {
      throw new Error(`bitsLength must be less than or equal to ${BITS_MAX}`)
    }
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

  unstrictEquals(uint: Uint): boolean {
    return this.getBn().eq(uint.getBn())
  }


  // add(
  //   this: {
  //     new (uint8Array: Uint8Array): self,
  //     getBn() : Bn
  //   }, uint: Uint): this {
  //   return new this(from.bn(
  //     this.getBn().add(uint.getBn())
  //   ))
  // }

  // sub(uint: Uint): Uint {
  //   return new Uint(this.bitsLength, from.bn(
  //     this.getBn().sub(uint.getBn())
  //   ))
  // }
  //
  // mul(uint: Uint): Uint {
  //   return new Uint(this.bitsLength, from.bn(
  //     this.getBn().mul(uint.getBn())
  //   ))
  // }
  //
  // divDn(uint: Uint): Uint {
  //   return new Uint(this.bitsLength, from.bn(
  //     this.getBn().divRound(uint.getBn())
  //   ))
  // }
  //
  // divUp(uint: Uint): Uint {
  //   if (this.mod(uint).unstrictEquals(ZERO)) {
  //     return this.divDn(uint)
  //   } else {
  //     return this.divDn(uint).add(ONE)
  //   }
  // }
  //
  // mod(uint: Uint): Uint {
  //   return new Uint(this.bitsLength, from.bn(
  //     this.getBn().mod(uint.getBn())
  //   ))
  // }
  //
  // gt(uint: Uint): Uint {
  //   return new Uint(this.bitsLength, from.bn(
  //     this.getBn().gt(uint.getBn())
  //   ))
  // }
  //
  // gte(uint: Uint): Uint {
  //   return new Uint(this.bitsLength, from.bn(
  //     this.getBn().gte(uint.getBn())
  //   ))
  // }
  //
  // lt(uint: Uint): Uint {
  //   return new Uint(this.bitsLength, from.bn(
  //     this.getBn().lt(uint.getBn())
  //   ))
  // }
  //
  // lte(uint: Uint): Uint {
  //   return new Uint(this.bitsLength, from.bn(
  //     this.getBn().lte(uint.getBn())
  //   ))
  // }

  // static genNow(bitsLength: number): Uint {
  //   return Uint.genNowMs(bitsLength).divDn(Uint.fromNumber(BITS_MAX, 1000))
  // }
  //
  // static genNowMs(bitsLength: number): Uint {
  //   return Uint.fromNumber(bitsLength, (new Date).getTime())
  // }

}

export const ZERO = new Uint(8, from.number(0))
export const ONE = new Uint(8, from.number(1))
