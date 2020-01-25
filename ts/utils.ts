import { Uintable } from './types'
import { UintX } from './internals/UintX'
import Bn from 'bn.js'

export function genBnFromUintable(uintable: Uintable): Bn {
  if (uintable instanceof UintX) {
    return new Bn(uintable.u)
  }
  if (!Number.isNaN(uintable)) {
    return genBnFromNumber(uintable)
  }
}

export function genBnFromNumber(number: number): Bn {
  return new Bn(number)
}
