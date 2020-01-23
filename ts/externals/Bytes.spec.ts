import { Bytes } from '../'

test('from hexish', () => {
  expect(Bytes.fromHexish('ffff').toArray()).toStrictEqual([255, 255])
})
