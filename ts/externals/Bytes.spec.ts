import { Bytes } from '../'
import { Uu } from 'pollenium-uvaursi'

test('from hexish', () => {
  expect(new Bytes(Uu.fromHexish('ffff')).uu.toArray()).toStrictEqual([255, 255])
})
