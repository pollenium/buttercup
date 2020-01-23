import { Uint8, Uint16, Bytes } from '../'

test('add', () => {
  const a = Uint8.fromNumber(4)
  const b = Uint8.fromNumber(5)
  expect(a.add(b).toNumber()).toBe(9)
})

test('add', () => {
  const a = Uint16.fromNumber(15)
  const b = Uint16.fromNumber(20)
  expect(a.add(b).toNumber()).toBe(35)
})

test('sub', () => {
  const a = Uint16.fromNumber(100)
  const b = Uint16.fromNumber(1)
  expect(a.sub(b).toNumber()).toBe(99)
})


test('mul', () => {
  const a = Uint16.fromNumber(5)
  const b = Uint16.fromNumber(2)
  expect(a.mul(b).toNumber()).toBe(10)
})

test('div', () => {
  const a = Uint16.fromNumber(40)
  const b = Uint16.fromNumber(5)
  expect(a.div(b).toNumber()).toBe(8)
})

test('div', () => {
  const a = Uint16.fromNumber(40)
  const b = Uint16.fromNumber(11)
  expect(a.div(b).toNumber()).toBe(3)
})


test('mod', () => {
  const a = Uint16.fromNumber(4)
  const b = Uint16.fromNumber(2)
  expect(a.mod(b).toNumber()).toBe(0)
})

test('mod', () => {
  const a = Uint16.fromNumber(100)
  const b = Uint16.fromNumber(65)
  expect(a.mod(b).toNumber()).toBe(35)
})

test('cast', () => {
  const a = Uint8.fromNumber(4)
  const b = a.getCasted(Bytes)

  expect(b).toBeInstanceOf(Bytes)
  expect(b.toArray()).toStrictEqual([4])
})

test('comparison', () => {
  const a = Uint8.fromNumber(4)
  const b = Uint16.fromNumber(4)

  expect(a.lt(b)).toBe(false)
  expect(a.lte(b)).toBe(true)
  expect(a.gt(b)).toBe(false)
  expect(a.gte(b)).toBe(true)
})
