import { Uint } from '../internals/Uint'
import { External } from '../../interfaces'

export const Uint8: External = class Uint8 extends Uint {
  constructor(uint8Array: Uint8Array) {
    super(8, uint8Array)
  }
}
