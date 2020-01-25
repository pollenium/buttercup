import { ExternalClass } from '../interfaces'
import { Uu, Uish, UWrapper } from 'pollenium-uvaursi'

export class Buttercup implements UWrapper {

  readonly uu: Uu;
  readonly u: Uint8Array;

  constructor(uish: Uish) {
    this.uu = Uu.wrap(uish)
    this.u = this.uu.u
  }

  genCasted<T>(ExternalClass: ExternalClass<T>): T {
    return new ExternalClass(this.uu.u.slice())
  }

}
