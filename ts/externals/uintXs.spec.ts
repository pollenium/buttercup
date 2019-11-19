import { Uint8, Uint16, Bytes } from '../'

test('add', () => {
  const a = Uint8.fromNumber(4)
  const b = Uint8.fromNumber(5)
  expect(a.add(b).getNumber()).toBe(9)
})

test('cast', () => {
  const a = Uint8.fromNumber(4)
  const b = a.getCasted(Bytes)

  expect(b).toBeInstanceOf(Bytes)
  expect(b.getArray()).toStrictEqual([4])
})

test('comparison', () => {
  const a = Uint8.fromNumber(4)
  const b = Uint16.fromNumber(4)

  expect(a.lt(b)).toBe(false)
  expect(a.lte(b)).toBe(true)
  expect(a.gt(b)).toBe(false)
  expect(a.gte(b)).toBe(true)
})
