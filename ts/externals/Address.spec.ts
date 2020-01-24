import { Address } from './Address'

test('nullAddress', () => {
  expect(Address.genNull().getIsNull()).toBe(true)
})
