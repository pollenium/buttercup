import { Buttercup } from '../buttercups/Buttercup'
import { DynButtercup } from '../buttercups/DynButtercup'
import { External } from '../interfaces'
import * as uvaursi from 'pollenium-uvaursi'


export class Bytes extends DynButtercup {

  static genEmpty(): Bytes {
    return Bytes.fromArray([])
  }


  static fromArray(array: Array<number>): Bytes {
    return new Bytes(uvaursi.fromArray(array))
  }
  static fromHexish(hexish: string): Bytes {
    return new Bytes(uvaursi.fromHexish(hexish))
  }
}
