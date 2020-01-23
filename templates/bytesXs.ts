import { BytesX } from '../internals/BytesX'
import Bn from 'bn.js'
import * as uvaursi from 'pollenium-uvaursi'

{{#each classes}}
export class Bytes{{length}} extends BytesX {

  public static LENGTH: number = {{length}};

  constructor(uint8Array: Uint8Array) {
    super(Bytes{{length}}.LENGTH, uint8Array)
  }
}

{{/each}}
