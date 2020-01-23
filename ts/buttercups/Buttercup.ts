import crypto from 'crypto'
import { External, ExternalClass } from '../interfaces'
import * as uvaursi from 'pollenium-uvaursi'

export class Buttercup {

  private isOnlyZeros: boolean;

  constructor(private uint8Array: Uint8Array) {}

  toUint8Array(): Uint8Array {
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

  toArray(): Array<number> {
    return Array.from(this.toUint8Array())
  }

  toHex(): string {
    return uvaursi.toHex(this.uint8Array)
  }

  toPhex(): string {
    return uvaursi.toPhex(this.uint8Array)
  }

  getCasted<T>(ExternalClass: ExternalClass<T>): T {
    return new ExternalClass(this.toUint8Array())
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
