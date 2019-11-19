import crypto from 'crypto'
import { External } from '../interfaces'

export class Buttercup {
  constructor(private uint8Array: Uint8Array) {}

  getUint8Array(): Uint8Array {
    return this.uint8Array.slice()
  }

  getLength(): number {
    return this.uint8Array.length
  }

  getIsEqual(wrapper: Buttercup): boolean {
    if (this.uint8Array.length !== wrapper.uint8Array.length) {
      return false
    }
    for (let i = 0; i < this.uint8Array.length; i++) {
      if (this.uint8Array[i] !== wrapper.uint8Array[i]) {
        return false
      }
    }
    return true
  }

  getSlice(start: number, end: number): Buttercup {
    return new Buttercup(this.uint8Array.slice(start, end))
  }

  getArray(): Array<number> {
    return Array.from(this.getUint8Array())
  }

  getHex(): string {
    let hex = ''

    this.uint8Array.forEach((byte) => {
      hex += byte.toString(16).padStart(2, '0')
    })

    return hex
  }

  getPhex(): string {
    return `0x${this.getHex()}`
  }

  getBuffer(): Buffer {
    return Buffer.from(this.uint8Array)
  }

  compare(wrapper: Buttercup): number {
    return this.getBuffer().compare(wrapper.getBuffer())
  }

  getCasted<T extends External>(ExternalClass: External): T {
    return new ExternalClass(this.getUint8Array())
  }

}
