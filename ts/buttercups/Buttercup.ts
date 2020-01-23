import { ExternalClass } from '../interfaces'
import { Uvaursi } from 'pollenium-uvaursi'

export class Buttercup {

  private uvaursi: Uvaursi;

  constructor(readonly uint8Array: Uint8Array) {}

  genCasted<T>(ExternalClass: ExternalClass<T>): T {
    return new ExternalClass(this.uint8Array.slice())
  }

  protected toUvaursi(): Uvaursi {
    if (this.uvaursi) {
      return this.uvaursi
    }
    this.uvaursi = new Uvaursi(this.uint8Array)
    return this.uvaursi
  }

}
