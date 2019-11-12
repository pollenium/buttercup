import * as crypto from 'crypto'
import Bn from 'bn.js'

export class Buttercup {
  constructor(public uint8Array: Uint8Array) {}

  getLength(): number {
    return this.uint8Array.length
  }

  equals(buttercup: Buttercup): boolean {
    if (this.uint8Array.length !== buttercup.uint8Array.length) {
      return false
    }
    for (let i = 0; i < this.uint8Array.length; i++) {
      if (this.uint8Array[i] !== buttercup.uint8Array[i]) {
        return false
      }
    }
    return true
  }

  slice(start: number, end: number): Buttercup {
    return new Buttercup(this.uint8Array.slice(start, end))
  }

  getHash(): Buttercup {
    return Buttercup.fromBuffer(crypto.createHash('sha256').update(this.uint8Array).digest())
  }

  getHex(): string {
    return this.getBuffer().toString('hex')
  }

  getPhex(): string {
    return `0x${this.getHex()}`
  }

  getUtf8(): string {
    return this.getBuffer().toString('utf8')
  }

  getBuffer(): Buffer {
    return Buffer.from(this.uint8Array)
  }

  getPaddedLeft(length: number): Buttercup {
    if (this.getLength() > length) {
      throw new Error(`Cannot pad, buttercup.length (${this.getLength()}) > length (${length})`)
    }
    const uint8Array = (new Uint8Array(length)).fill(0)
    uint8Array.set(this.uint8Array, length - this.getLength())
    return new Buttercup(uint8Array)
  }

  prependByte(byte: number): Buttercup {
    const uint8Array = new Uint8Array(this.uint8Array.length + 1)
    uint8Array[0] = byte
    uint8Array.set(this.uint8Array, 1)
    return new Buttercup(uint8Array)
  }

  append(buttercup: Buttercup): Buttercup {
    const uint8Array = new Uint8Array(this.getLength() + buttercup.getLength())
    uint8Array.set(this.uint8Array)
    uint8Array.set(buttercup.uint8Array, this.getLength())
    return new Buttercup(uint8Array)
  }

  getBn(): Bn {
    return new Bn(this.getHex(), 16)
  }

  getNumber(): number {
    return this.getBn().toNumber()
  }

  getXor(buttercup: Buttercup): Buttercup {
    if (this.getLength() !== buttercup.getLength()) {
      throw new Error('Cannot xor, length mismatch')
    }

    const xorUint8Array = new Uint8Array(buttercup.getLength())

    for (let i = 0; i < buttercup.getLength(); i++) {
      // eslint-disable-next-line no-bitwise
      xorUint8Array[i] = this.uint8Array[i] ^ buttercup.uint8Array[i]
    }

    return new Buttercup(xorUint8Array)
  }

  compare(buttercup: Buttercup): number {
    return this.getBuffer().compare(buttercup.getBuffer())
  }

  static fromUtf8(utf8: string): Buttercup {
    return Buttercup.fromBuffer(Buffer.from(utf8, 'utf8'))
  }

  static fromBuffer(buffer: Buffer): Buttercup {
    return new Buttercup(new Uint8Array(buffer))
  }

  static fromHex(hex: string): Buttercup {
    return Buttercup.fromBuffer(Buffer.from(hex, 'hex'))
  }

  static fromBn(bn: Bn): Buttercup {
    return Buttercup.fromHex(bn.toString(16))
  }

  static fromNumber(number: number): Buttercup {
    return Buttercup.fromBn(new Bn(number))
  }

  static random(length: number): Buttercup {
    return Buttercup.fromBuffer(crypto.randomBytes(length))
  }
}
