import { Uint8, Uint16, Uint256, Bytes } from '../'
import { UintUnderflowError, UintOverflowError } from '../internals/UintX'
import { Uu } from 'pollenium-uvaursi'

test('add', () => {
  const a = new Uint8(4)
  const b = new Uint8(5)
  expect(a.opAdd(b).toNumber()).toBe(9)
})

test('add', () => {
  const a = new Uint16(15)
  const b = new Uint16(20)
  expect(a.opAdd(b).toNumber()).toBe(35)
})

test('add', () => {
  const a = new Uint8(100)
  const b = 27
  expect(a.opAdd(b).toNumber()).toBe(127)
})

test('sub', () => {
  const a = new Uint16(100)
  const b = new Uint16(1)
  expect(a.opSub(b).toNumber()).toBe(99)
})

test('mul', () => {
  const a = new Uint16(5)
  const b = new Uint16(2)
  expect(a.opMul(b).toNumber()).toBe(10)
})

test('div', () => {
  const a = new Uint16(40)
  const b = new Uint16(5)
  expect(a.opDiv(b).toNumber()).toBe(8)
})

test('div', () => {
  const a = new Uint16(40)
  const b = new Uint16(11)
  expect(a.opDiv(b).toNumber()).toBe(3)
})


test('mod', () => {
  const a = new Uint16(4)
  const b = new Uint16(2)
  expect(a.opMod(b).toNumber()).toBe(0)
})

test('mod', () => {
  const a = new Uint16(100)
  const b = new Uint16(65)
  expect(a.opMod(b).toNumber()).toBe(35)
})

test('pow', () => {
  const a = new Uint16(3)
  const b = new Uint16(2)
  expect(a.opPow(b).toNumber()).toBe(9)
})

test('pow', () => {
  const a = new Uint16(4)
  const b = new Uint16(3)
  expect(a.opPow(b).toNumber()).toBe(64)
})

test('UintUnderflowError', () => {
  expect.assertions(1)
  const a = new Uint16(1)
  const b = new Uint16(2)
  try {
    a.opSub(b)
  } catch(error) {
    expect(error).toBeInstanceOf(UintUnderflowError)
  }
})

test('UintOverflowError', () => {
  expect.assertions(1)
  const a = new Uint8(255)
  const b = new Uint8(1)
  try {
    a.opAdd(b)
  } catch(error) {
    expect(error).toBeInstanceOf(UintOverflowError)
  }
})

test('cast', () => {
  const a = new Uint8(4)
  const b = a.genCasted(Bytes)

  expect(b).toBeInstanceOf(Bytes)
  expect(b.uu.toArray()).toStrictEqual([4])
})

test('fromUintable', () => {
  expect(new Uint8(4).toNumber()).toBe(4)
  expect(new Uint16(new Uint8(5)).toNumber()).toBe(5)
})

test('toNumberString', () => {
  const a = new Uint16(43)
  expect(a.toNumberString(10)).toBe('43')
  expect(a.toNumberString(10)).toBe('43')
})

test('fromNumberString', () => {
  const a = Uint256.fromNumberString(16, 'dead');
  const b = Uint256.fromNumberString(2, '101010');
  const c = a.opAdd(b)
  expect(c.toNumberString(10)).toBe('57047')
})


test('comparison', () => {
  const a = new Uint8(4)
  const b = new Uint16(4)

  expect(a.compLt(b)).toBe(false)
  expect(a.compLte(b)).toBe(true)
  expect(a.compGt(b)).toBe(false)
  expect(a.compGte(b)).toBe(true)
})

test('comparison', () => {
  const a = new Uint8(7)
  const b = 6

  expect(a.compLt(b)).toBe(false)
  expect(a.compLte(b)).toBe(false)
  expect(a.compGt(b)).toBe(true)
  expect(a.compGte(b)).toBe(true)
})
