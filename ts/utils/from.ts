import crypto from 'crypto'
import Bn from 'bn.js'
import { External, Uintish } from '../interfaces'
import { fromHexish } from './uint8Array'

const zeroBn = new Bn(0)

export function uint8Array<T extends External>(ExternalClass: T, uint8Array: Uint8Array): T
 {
   /* TODO: Validate Uint8Array */
  return new ExternalClass(uint8Array)
}

export function buffer<T extends External>(ExternalClass: T, buffer: Buffer): T {
  return exports.uint8Array(ExternalClass, new Uint8Array(buffer))
}

export function array<T extends External>(ExternalClass: T, array: Array<number>): T {
  return exports.uint8Array(ExternalClass, new Uint8Array(array))
}

export function hexish<T extends External>(ExternalClass: T, hexish: string): T {
  return exports.uint8Array(ExternalClass, fromHexish(hexish))
}

export function uintNumber<T extends External & Uintish>(ExternalClass: T, number: number): T {
  /* TODO: Validate uintish number */
  if (number === 0) {
    return exports.uint8Array(ExternalClass, new Uint8Array([]))
  }
  return exports.uint8Array(ExternalClass, new Bn(number).toArrayLike(Uint8Array, 'be'))
}
