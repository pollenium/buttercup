import { FixRightWrapper } from '../wrappers/fixWrappers'

export class BytesX extends FixRightWrapper {

  constructor(length: number, uint8Array: Uint8Array) {
    super(length, uint8Array)
  }

}
