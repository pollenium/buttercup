import { Bytes } from '../'
import { Uvaursi } from 'pollenium-uvaursi'

test('from hexish', () => {
  expect(new Bytes(Uvaursi.uuFromHexish('ffff')).uint8Array).toStrictEqual([255, 255])
})
