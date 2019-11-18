import { assertIsValidHexish } from './assertIsValidHexish'

export class OverflowError extends Error {
  constructor(length: number, uint8ArrayLength: number) {
    super(`Overflow: Trying to put ${uint8ArrayLength} length Uint8Array into ${length} length Wrapper` )
    Object.setPrototypeOf(this, OverflowError.prototype)
  }
}

export function getPaddedLeft(length: number, unpadded: Uint8Array): Uint8Array {
  if (length < unpadded.length) {
    throw new OverflowError(length, unpadded.length)
  }
  const padded = (new Uint8Array(length)).fill(0)
  padded.set(unpadded, length - unpadded.length)
  return padded
}

export function getPaddedRight(length: number, unpadded: Uint8Array): Uint8Array {
  if (length < unpadded.length) {
    throw new OverflowError(length, unpadded.length)
  }
  const padded = (new Uint8Array(length)).fill(0)
  padded.set(unpadded)
  return padded
}

export function fromHexish(hexish: string): Uint8Array {
  if (hexish.length === 0) {
    return new Uint8Array([])
  }

  if (hexish.indexOf('0x') === 0) {
    return fromHexish(hexish.substr(2))
  }

  assertIsValidHexish(hexish)

  const array = hexish.match(/.{1,2}/g).map((byteHex) => {
    return parseInt(byteHex, 16)
  })

  return new Uint8Array(array)

}
