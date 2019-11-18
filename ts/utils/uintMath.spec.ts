import * as from from './from'
import * as uintMath from './uintMath'
import { Uint8 } from '../'
import { External, Uintish } from '../interfaces'

const fixtures: Array<[string, any, number, number, number]> = [
  ['add', Uint8, 0, 0, 0],
  ['add', Uint8, 0, 1, 1],
  ['add', Uint8, 1, 0, 1],
  ['add', Uint8, 1, 1, 2],
  ['add', Uint8, 100, 100, 200],
  ['sub', Uint8, 0, 0, 0],
  ['sub', Uint8, 100, 100, 0],
  ['mul', Uint8, 0, 0, 0],
  ['mul', Uint8, 0, 1, 0],
  ['mul', Uint8, 2, 3, 6],
  ['mul', Uint8, 100, 2, 200],
  ['divRd', Uint8, 0, 1, 0],
  ['divRd', Uint8, 2, 1, 2],
  ['divRd', Uint8, 2, 2, 1],
  ['divRd', Uint8, 5, 2, 3],
  ['divRd', Uint8, 5, 3, 2],
  ['divDn', Uint8, 0, 1, 0],
  ['divDn', Uint8, 2, 1, 2],
  ['divDn', Uint8, 2, 2, 1],
  ['divDn', Uint8, 5, 2, 2],
  ['divDn', Uint8, 5, 3, 1],
  ['divUp', Uint8, 0, 1, 0],
  ['divUp', Uint8, 2, 1, 2],
  ['divUp', Uint8, 2, 2, 1],
  ['divUp', Uint8, 5, 2, 3],
  ['divUp', Uint8, 5, 3, 2],
  ['divDn', Uint8, 5, 3, 1],
  ['mod', Uint8, 0, 1, 0],
  ['mod', Uint8, 1, 1, 0],
  ['mod', Uint8, 1, 2, 1],
  ['mod', Uint8, 2, 1, 0],
  ['mod', Uint8, 2, 2, 0],
  ['mod', Uint8, 5, 3, 2],
]

fixtures.forEach((fixture, index) => {
  const op = fixture[0]
  const External = fixture[1]
  const a = fixture[2]
  const b = fixture[3]
  const c = fixture[4]

  test(`fixture ${index} ${External.name}: ${a} ${op} ${b} = ${c}`, () => {
    expect(uintMath[op](
      External,
      from.uintNumber(External, a),
      from.uintNumber(External, b)
    ).getNumber()).toBe(c)
  })

})
