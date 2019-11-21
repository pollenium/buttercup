import { Buttercup } from './Buttercup'
import { getPaddedLeft, getPaddedRight } from '../utils/uint8Array'

export class InvalidLengthError extends Error {
  constructor(length: number, uint8Array: Uint8Array) {
    super(`Invalid length; Expected ${length} received ${uint8Array.length}`)
  }
}

export class FixButtercup extends Buttercup {
  constructor(length: number, uint8Array: Uint8Array) {
    super(uint8Array)
    if (uint8Array.length !== length) {
      throw new InvalidLengthError(length, uint8Array)
    }
  }
}

export class FixLeftButtercup extends FixButtercup {
  constructor(length: number, uint8Array: Uint8Array) {
    super(length, getPaddedLeft(length, uint8Array))
  }
}

export class FixRightButtercup extends FixButtercup {
  constructor(length: number, uint8Array: Uint8Array) {
    super(length, getPaddedRight(length, uint8Array))
  }
}
