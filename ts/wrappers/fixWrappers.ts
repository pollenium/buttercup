import { Wrapper } from './Wrapper'
import { getPaddedLeft, getPaddedRight } from '../utils/uint8Array'

export class FixLeftWrapper extends Wrapper {
  constructor(private length: number, uint8Array: Uint8Array) {
    super(getPaddedLeft(length, uint8Array))
  }
}

export class FixRightWrapper extends Wrapper {
  constructor(private length: number, uint8Array: Uint8Array) {
    super(getPaddedRight(length, uint8Array))
  }
}
