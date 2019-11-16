import crypto from 'crypto'

export class Wrapper {
  constructor(private uint8Array: Uint8Array) {}

  getUint8Array(): Uint8Array {
    return this.uint8Array.slice()
  }

  getLength(): number {
    return this.uint8Array.length
  }

  getIsStrictEqual(buttercup: Wrapper): boolean {
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

  // slice(start: number, end: number): Wrapper {
  //   return new Wrapper(this.getUint8Array().slice(start, end))
  // }

  // getSha256Hash(): Wrapper {
  //   return Wrapper.fromBuffer(crypto.createHash('sha256').update(this.uint8Array).digest())
  // }

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

  // getXor(buttercup: Wrapper): Wrapper {
  //   if (this.getLength() !== buttercup.getLength()) {
  //     throw new Error('Cannot xor, length mismatch')
  //   }
  //
  //   const xorUint8Array = new Uint8Array(buttercup.getLength())
  //
  //   for (let i = 0; i < buttercup.getLength(); i++) {
  //     // eslint-disable-next-line no-bitwise
  //     xorUint8Array[i] = this.uint8Array[i] ^ buttercup.uint8Array[i]
  //   }
  //
  //   return new Wrapper(xorUint8Array)
  // }

  compare(buttercup: Wrapper): number {
    return this.getBuffer().compare(buttercup.getBuffer())
  }

}
