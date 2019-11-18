import { Buttercup } from './Buttercup'
import { getPaddedLeft, getPaddedRight } from '../utils/uint8Array'

export class FixLeftButtercup extends Buttercup {
  constructor(private length: number, uint8Array: Uint8Array) {
    super(getPaddedLeft(length, uint8Array))
  }
}

export class FixRightButtercup extends Buttercup {
  constructor(private length: number, uint8Array: Uint8Array) {
    super(getPaddedRight(length, uint8Array))
  }
}
