import { Bytes } from '../'

test('from hexish', () => {
  expect(Bytes.fromHexish('ffff').getArray()).toStrictEqual([255, 255])
})
