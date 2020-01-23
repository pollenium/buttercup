import { Buttercup } from '../buttercups/Buttercup'
import { DynButtercup } from '../buttercups/DynButtercup'
import { External } from '../interfaces'
import * as uvaursi from 'pollenium-uvaursi'


export class Bytes extends DynButtercup {

  static genEmpty(): Bytes {
    return Bytes.fromArray([])
  }


  {{#each uvaursiFroms}}
  static {{{func}}}({{{arg}}}: {{{argClass}}}): Bytes {
    return new Bytes(uvaursi.{{{func}}}({{{arg}}}))
  }
  {{/each}}
}
