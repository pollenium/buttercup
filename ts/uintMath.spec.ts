import { from, uintMath, Uint8 } from './'

test('add', () => {
  expect(uintMath.add(
    Uint8,
    new Uint8(from.number(0)),
    new Uint8(from.number(0))
  ).getNumber()).toBe(0)
})
