import { ExternalClass } from '../interfaces'
import { Uu, Uish } from 'pollenium-uvaursi'

export class Buttercup {

  readonly uu: Uu;

  constructor(uish: Uish) {
    this.uu = Uu.wrap(uish)
  }

  genCasted<T>(ExternalClass: ExternalClass<T>): T {
    return new ExternalClass(this.uu.u.slice())
  }

}
