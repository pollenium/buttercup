import { UintX } from '../internals/UintX'
import * as from from './from'
import { External, Uintish, ExternalUintish } from '../interfaces'
import Bn from 'bn.js'

export function add<T extends ExternalUintish>(UintClass: T, a: T, b: UintX): T
 {
  return from.uintBn(UintClass, a.getBn().add(b.getBn()))
}

export function sub<T extends ExternalUintish>(UintClass: T, a: T, b: UintX): T
 {
  return from.uintBn(UintClass, a.getBn().sub(b.getBn()))
}

export function mul<T extends ExternalUintish>(UintClass: T, a: T, b: UintX): T {
  return from.uintBn(UintClass, a.getBn().mul(b.getBn()))
}

const zeroBn = new Bn(0)
const oneBn = new Bn(1)

export function divRd<T extends ExternalUintish>(UintClass: T, a: T, b: UintX): T {
  return from.uintBn(UintClass, a.getBn().divRound(b.getBn()))
}

export function divDn<T extends ExternalUintish>(UintClass: T, a: T, b: UintX): T {
  return from.uintBn(UintClass, a.getBn().div(b.getBn()))
}

export function divUp<T extends ExternalUintish>(UintClass: T, a: T, b: UintX): T {
  const divided = a.getBn().div(b.getBn())
  const remainder = a.getBn().mod(b.getBn())
  if (remainder.eq(zeroBn)) {
    return from.uintBn(UintClass, divided)
  } else {
    return from.uintBn(UintClass, divided.add(oneBn))
  }
}

export function mod<T extends ExternalUintish>(UintClass: T, a: T, b: UintX): T {
  return from.uintBn(UintClass, a.getBn().mod(b.getBn()))
}
