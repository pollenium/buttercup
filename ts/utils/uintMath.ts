import { UintX } from '../internals/UintX'
import * as from from './from'
import { External, Uintish, ExternalUintish } from '../interfaces'
import Bn from 'bn.js'

export function add<T extends ExternalUintish>(UintClass: T, a: T, b: UintX): T
 {
  return from.uint8Array(UintClass, a.getBn().add(b.getBn()).toArrayLike(Uint8Array, 'be'))
}

export function sub<T extends ExternalUintish>(UintClass: T, a: T, b: UintX): T
 {
  return from.uint8Array(UintClass, a.getBn().sub(b.getBn()).toArrayLike(Uint8Array, 'be'))
}

export function mul<T extends ExternalUintish>(UintClass: T, a: T, b: UintX): T {
  return from.uint8Array(UintClass, a.getBn().mul(b.getBn()).toArrayLike(Uint8Array, 'be'))
}

const zeroBn = new Bn(0)
const oneBn = new Bn(1)

export function divRd<T extends ExternalUintish>(UintClass: T, a: T, b: UintX): T {
  return from.uint8Array(UintClass, a.getBn().divRound(b.getBn()).toArrayLike(Uint8Array, 'be'))
}

export function divDn<T extends ExternalUintish>(UintClass: T, a: T, b: UintX): T {
  return from.uint8Array(UintClass, a.getBn().div(b.getBn()).toArrayLike(Uint8Array, 'be'))
}

export function divUp<T extends ExternalUintish>(UintClass: T, a: T, b: UintX): T {
  const divided = a.getBn().div(b.getBn())
  const remainder = a.getBn().mod(b.getBn())
  if (remainder.eq(zeroBn)) {
    return from.uint8Array(UintClass, divided.toArrayLike(Uint8Array, 'be'))
  } else {
    return from.uint8Array(UintClass, divided.add(oneBn).toArrayLike(Uint8Array, 'be'))
  }
}

export function mod<T extends ExternalUintish>(UintClass: T, a: T, b: UintX): T {
  return from.uint8Array(UintClass, a.getBn().mod(b.getBn()).toArrayLike(Uint8Array, 'be'))
}
