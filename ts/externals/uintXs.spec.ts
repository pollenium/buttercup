import { Uint8, Uint16, Bytes } from '../'

test('add', () => {
  const a = Uint8.fromNumber(4)
  const b = Uint8.fromNumber(5)
  expect(a.add(b).getNumber()).toBe(9)
})

const a = Uint8.fromNumber(4)
const b = a.getCasted(Bytes)

test('instance', () => {
  expect(b).toBeInstanceOf(Bytes)
})

test('method', () => {
  expect(b.getArray()).toStrictEqual([4])
})
