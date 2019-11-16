import { Wrapper } from './Wrapper'
import crypto from 'crypto'

export class DynWrapper extends Wrapper {
  constructor(uint8Array: Uint8Array) {
    super(uint8Array)
  }
}
