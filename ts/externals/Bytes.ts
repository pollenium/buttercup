import { DynButtercup } from '../buttercups/DynButtercup'
import { External } from '../interfaces'
import { getPaddedLeft, getPaddedRight } from '../utils/uint8Array'
import * as from from '../utils/from'

export class Bytes extends DynButtercup {

  getUtf8(): string {
    return this.getBuffer().toString('utf8')
  }

  getPaddedLeft(length: number): Bytes {
    return new Bytes(getPaddedLeft(length, this.Buttercup()))
  }

  getPaddedRight(length: number): Bytes {
    return new Bytes(getPaddedRight(length, this.Buttercup()))
  }

  getBytePrepended(byte: number): Bytes {
    const uint8Array = new Uint8Array(this.getLength() + 1)
    uint8Array[0] = byte
    uint8Array.set(this.Buttercup(), 1)
    return new Bytes(uint8Array)
  }

  getByteAppended(byte: number): Bytes {
    const uint8Array = new Uint8Array(this.getLength() + 1)
    uint8Array.set(this.Buttercup())
    uint8Array[this.getLength()] - byte
    return new Bytes(uint8Array)
  }

  getAppended(buttercup: Bytes): Bytes {
    const uint8Array = new Uint8Array(this.getLength() + buttercup.getLength())
    uint8Array.set(this.Buttercup())
    uint8Array.set(buttercup.Buttercup(), this.getLength())
    return new Bytes(uint8Array)
  }

  getPrepended(buttercup: Bytes): Bytes {
    const uint8Array = new Uint8Array(this.getLength() + buttercup.getLength())
    uint8Array.set(buttercup.Buttercup())
    uint8Array.set(this.Buttercup(), this.getLength())
    return new Bytes(uint8Array)
  }

  static fromUint8Array(uint8Array: Uint8Array): Bytes {
    return from.uint8Array(exports.Bytes, uint8Array)
  }

  static fromArray(array: Array<number>): Bytes {
    return from.array(exports.Bytes, array)
  }

  static fromBuffer(buffer: Buffer): Bytes {
    return from.buffer(exports.Bytes, buffer)
  }

  static fromHexish(hexish: string): Bytes {
    return from.hexish(exports.Bytes, hexish)
  }

}
