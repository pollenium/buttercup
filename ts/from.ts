import crypto from 'crypto'
import Bn from 'bn.js'
import { getIsValidHexish } from './utils'

const zeroBn = new Bn(0)

export class InvalidHexishError extends Error {
  constructor(hex) {
    super(`Invalid hexish: ${hex}` )
    Object.setPrototypeOf(this, InvalidHexishError.prototype)
  }
}

export function array(array: Array<number>): Uint8Array {
  return new Uint8Array(array)
}

export function buffer(buffer: Buffer): Uint8Array {
  return new Uint8Array(buffer)
}

export function hexish(hexish: string): Uint8Array {

  if (hexish.length === 0) {
    return new Uint8Array(0)
  }

  if (hexish.indexOf('0x') === 0) {
    return exports.hexish(hexish.substr(2))
  }

  if (!getIsValidHexish(hexish)) {
    throw new InvalidHexishError(hexish)
  }

  const array = hexish.match(/.{1,2}/g).map((byteHex) => {
    return parseInt(byteHex, 16)
  })

  return exports.array(array)

}


export function random(length: number): Uint8Array {
  return exports.buffer(crypto.randomBytes(length))
}

export function bn(bn: Bn): Uint8Array {
  /* TODO: Use interface */
  if (bn.eq(zeroBn)) {
    return new Uint8Array(0)
  }
  return exports.array(bn.toArray('be'))
}

export function number(number: number): Uint8Array {
  if (number === 0) {
    return new Uint8Array(0)
  }
  return exports.bn(new Bn(number))
}
