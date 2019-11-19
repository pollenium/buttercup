import { Buttercup } from '../buttercups/Buttercup'
import { DynButtercup } from '../buttercups/DynButtercup'
import { External } from '../interfaces'
import { getPaddedLeft, getPaddedRight } from '../utils/uint8Array'
import * as from from '../utils/from'

export class Bytes extends DynButtercup {

  getUtf8(): string {
    return this.getBuffer().toString('utf8')
  }

  getPaddedLeft(length: number): Bytes {
    return new Bytes(getPaddedLeft(length, this.getUint8Array()))
  }

  getPaddedRight(length: number): Bytes {
    return new Bytes(getPaddedRight(length, this.getUint8Array()))
  }

  getBytePrepended(byte: number): Bytes {
    const uint8Array = new Uint8Array(this.getLength() + 1)
    uint8Array[0] = byte
    uint8Array.set(this.getUint8Array(), 1)
    return new Bytes(uint8Array)
  }

  getByteAppended(byte: number): Bytes {
    const uint8Array = new Uint8Array(this.getLength() + 1)
    uint8Array.set(this.getUint8Array())
    uint8Array[this.getLength()] - byte
    return new Bytes(uint8Array)
  }

  getAppended(buttercup: Buttercup): Bytes {
    const uint8Array = new Uint8Array(this.getLength() + buttercup.getLength())
    uint8Array.set(this.getUint8Array())
    uint8Array.set(buttercup.getUint8Array(), this.getLength())
    return new Bytes(uint8Array)
  }

  getPrepended(buttercup: Buttercup): Bytes {
    const uint8Array = new Uint8Array(this.getLength() + buttercup.getLength())
    uint8Array.set(buttercup.getUint8Array())
    uint8Array.set(this.getUint8Array(), this.getLength())
    return new Bytes(uint8Array)
  }

  {{#each staticFroms}}
  static {{{func}}}({{{arg}}}: {{{argClass}}}): Bytes {
    return from.{{{fromFunc}}}(exports.Bytes, {{{arg}}})
  }

  {{/each}}
}
