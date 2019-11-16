import { Uint } from './classes/internals/Uint'
import * as from from './from'
import { External, Uintish, ExternalUintish } from './interfaces'

export function add<T extends ExternalUintish>(UintClass: T, a: T, b: T): T
 {
  return new UintClass(from.bn(a.getBn().add(b.getBn())))
}
