import { Uint8 } from '../'

test('add', () => {
  const a = Uint8.fromNumber(4)
  const b = Uint8.fromNumber(5)
  expect(a.add(b).getNumber()).toBe(9)
})
