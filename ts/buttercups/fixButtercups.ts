import { Buttercup } from './Buttercup'
import { Uu, Uish } from 'pollenium-uvaursi'

export class InvalidLengthError extends Error {
  constructor(length: number, uLength: number) {
    super(`Invalid length; Expected ${length} received ${uLength}`)
  }
}

export class FixButtercup extends Buttercup {
  constructor(length: number, uish: Uish) {
    super(uish)
    if (this.uu.u.length !== length) {
      throw new InvalidLengthError(length, this.uu.u.length)
    }
  }
}

export class FixLeftButtercup extends FixButtercup {
  constructor(length: number, uish: Uish) {
    super(length, Uu.wrap(uish).genPaddedLeft(length))
  }
}

export class FixRightButtercup extends FixButtercup {
  constructor(length: number, uish: Uish) {
    super(length, Uu.wrap(uish).genPaddedRight(length))
  }
}
