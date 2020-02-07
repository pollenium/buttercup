import { UintX, Uintable } from './internals/UintX'
import Bn from 'bn.js'

export function genBnFromUintable(uintable: Uintable): Bn {
  if (uintable instanceof UintX) {
    return new Bn(uintable.u)
  }
  if (uintable instanceof Uint8Array ) {
    return new Bn(uintable)
  }
  if (typeof uintable === 'number') {
    return genBnFromNumber(uintable)
  }
  return new Bn(uintable.u)
}

export function genBnFromNumber(number: number): Bn {
  return new Bn(number)
}
