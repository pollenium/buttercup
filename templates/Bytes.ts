import { DynWrapper } from '../wrappers/DynWrapper'
import { External } from '../interfaces'
import { getPaddedLeft, getPaddedRight } from '../utils/uint8Array'
import * as from from '../utils/from'

export const Bytes: External = class Bytes extends DynWrapper {

  getUtf8(): string {
    return this.getBuffer().toString('utf8')
  }

  getPaddedLeft(length: number): Bytes {
    return new Bytes(getPaddedLeft(length, this.cloneUint8Array()))
  }

  getPaddedRight(length: number): Bytes {
    return new Bytes(getPaddedRight(length, this.cloneUint8Array()))
  }

  getBytePrepended(byte: number): Bytes {
    const uint8Array = new Uint8Array(this.getLength() + 1)
    uint8Array[0] = byte
    uint8Array.set(this.cloneUint8Array(), 1)
    return new Bytes(uint8Array)
  }

  getByteAppended(byte: number): Bytes {
    const uint8Array = new Uint8Array(this.getLength() + 1)
    uint8Array.set(this.cloneUint8Array())
    uint8Array[this.getLength()] - byte
    return new Bytes(uint8Array)
  }

  getAppended(wrapper: Bytes): Bytes {
    const uint8Array = new Uint8Array(this.getLength() + wrapper.getLength())
    uint8Array.set(this.cloneUint8Array())
    uint8Array.set(wrapper.cloneUint8Array(), this.getLength())
    return new Bytes(uint8Array)
  }

  getPrepended(wrapper: Bytes): Bytes {
    const uint8Array = new Uint8Array(this.getLength() + wrapper.getLength())
    uint8Array.set(wrapper.cloneUint8Array())
    uint8Array.set(this.cloneUint8Array(), this.getLength())
    return new Bytes(uint8Array)
  }

  {{#each staticFroms}}
  static {{{func}}}({{{arg}}}: {{{argClass}}}): Bytes {
    return from.{{{fromFunc}}}(exports.Bytes, {{{arg}}})
  }

  {{/each}}
}
