import crypto from 'crypto'
import { External, ExternalClass } from '../interfaces'
import * as from from '../utils/from'

export class Buttercup {

  private isOnlyZeros: boolean;

  constructor(private uint8Array: Uint8Array) {}

  getUint8Array(): Uint8Array {
    return this.uint8Array.slice()
  }

  getLength(): number {
    return this.uint8Array.length
  }

  getIsEqual(buttercup: Buttercup): boolean {
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

  getComparison(buttercup: Buttercup): number {
    return this.getBuffer().compare(buttercup.getBuffer())
  }

  getCasted<T>(ExternalClass: ExternalClass<T>): T {
    return new ExternalClass(this.getUint8Array())
  }

  getIsOnlyZeroes(): boolean {
    if (this.isOnlyZeros) {
      return this.isOnlyZeros
    }
    for (let i = 0; i < this.uint8Array.length; i++) {
      if (this.uint8Array[i] !== 0) {
        return false
      }
    }
    return true
  }



}
