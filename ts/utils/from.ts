import crypto from 'crypto'
import Bn from 'bn.js'
import { External, Uintish } from '../interfaces'
import { fromHexish } from './uint8Array'

const zeroBn = new Bn(0)

export function uint8Array<T extends External>(ExternalClass: T, uint8Array: Uint8Array): T
 {
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

export function uintBn<T extends External & Uintish>(ExternalClass: T, bn: Bn): T {
  /* TODO: Use interface for Bn */
  /* TODO: Validate uintish bn */
  if (bn.eq(zeroBn)) {
    return exports.array(ExternalClass, [])
  }
  return exports.array(ExternalClass, bn.toArray('be'))
}

export function uintNumber<T extends External & Uintish>(ExternalClass: T, number: number): T {
  /* TODO: Validate uintish number */
  if (number === 0) {
    return exports.array(ExternalClass, [])
  }
  return exports.uintBn(ExternalClass, new Bn(number))
}
