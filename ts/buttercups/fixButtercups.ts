import { Buttercup } from './Buttercup'
import { Uvaursi } from 'pollenium-uvaursi'

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
    super(length, new Uvaursi(uint8Array).uuGenPaddedLeft(length))
  }
}

export class FixRightButtercup extends FixButtercup {
  constructor(length: number, uint8Array: Uint8Array) {
    super(length, new Uvaursi(uint8Array).uuGenPaddedRight(length))
  }
}
