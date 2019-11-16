import { FixWrapper } from '../wrappers/FixWrapper'

export class FixBytes extends FixWrapper {

  constructor(length: number, uint8Array: Uint8Array) {
    super(length, uint8Array)
  }

}
