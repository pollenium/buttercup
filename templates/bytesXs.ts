import { BytesX } from '../internals/BytesX'
import Bn from 'bn.js'
import { Uish } from 'pollenium-uvaursi'

{{#each classes}}
export class Bytes{{length}} extends BytesX {

  public static LENGTH: number = {{length}};

  constructor(uish: Uish) {
    super(Bytes{{length}}.LENGTH, uish)
  }
}

{{/each}}
