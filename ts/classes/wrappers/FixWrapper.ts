import { Wrapper } from './Wrapper'

export class FixWrapper extends Wrapper {
  constructor(private length: number, uint8Array: Uint8Array) {
    super(uint8Array)
  }

}
