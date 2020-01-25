import { Uint8, Uint16, Bytes } from '../'
import { Uu } from 'pollenium-uvaursi'

test('add', () => {
  const a = Uint8.fromNumber(4)
  const b = Uint8.fromNumber(5)
  expect(a.opAdd(b).toNumber()).toBe(9)
})

test('add', () => {
  const a = Uint16.fromNumber(15)
  const b = Uint16.fromNumber(20)
  expect(a.opAdd(b).toNumber()).toBe(35)
})

test('sub', () => {
  const a = Uint16.fromNumber(100)
  const b = Uint16.fromNumber(1)
  expect(a.opSub(b).toNumber()).toBe(99)
})


test('mul', () => {
  const a = Uint16.fromNumber(5)
  const b = Uint16.fromNumber(2)
  expect(a.opMul(b).toNumber()).toBe(10)
})

test('div', () => {
  const a = Uint16.fromNumber(40)
  const b = Uint16.fromNumber(5)
  expect(a.opDiv(b).toNumber()).toBe(8)
})

test('div', () => {
  const a = Uint16.fromNumber(40)
  const b = Uint16.fromNumber(11)
  expect(a.opDiv(b).toNumber()).toBe(3)
})


test('mod', () => {
  const a = Uint16.fromNumber(4)
  const b = Uint16.fromNumber(2)
  expect(a.opMod(b).toNumber()).toBe(0)
})

test('mod', () => {
  const a = Uint16.fromNumber(100)
  const b = Uint16.fromNumber(65)
  expect(a.opMod(b).toNumber()).toBe(35)
})

test('pow', () => {
  const a = Uint16.fromNumber(3)
  const b = Uint16.fromNumber(2)
  expect(a.opPow(b).toNumber()).toBe(9)
})

test('pow', () => {
  const a = Uint16.fromNumber(4)
  const b = Uint16.fromNumber(3)
  expect(a.opPow(b).toNumber()).toBe(64)
})



test('cast', () => {
  const a = Uint8.fromNumber(4)
  const b = a.genCasted(Bytes)

  expect(b).toBeInstanceOf(Bytes)
  expect(b.uu.toArray()).toStrictEqual([4])
})

test('comparison', () => {
  const a = Uint8.fromNumber(4)
  const b = Uint16.fromNumber(4)

  expect(a.compLt(b)).toBe(false)
  expect(a.compLte(b)).toBe(true)
  expect(a.compGt(b)).toBe(false)
  expect(a.compGte(b)).toBe(true)
})
