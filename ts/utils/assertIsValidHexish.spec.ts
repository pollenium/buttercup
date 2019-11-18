import { assertIsValidHexish, InvalidHexishError } from './assertIsValidHexish'

const invalidHexishChar = [
  '\x2F',
  '/',
  '\x3A',
  ':',
  '\x40',
  '@',
  '\x47',
  'G',
  '\x60',
  '`',
  '\x67',
  'g',
  '\n',
  '\x00',
  '\xff'
]

const validHexishChars = ['0', '9', 'a', 'f', 'A', 'F']

invalidHexishChar.forEach((invalidHexishChar) => {
  validHexishChars.forEach((validHexishChar) => {
    const invalidHexishes = [
      `${invalidHexishChar}`,
      `${validHexishChar}${invalidHexishChar}`,
      `${invalidHexishChar}${validHexishChar}`,
      `${validHexishChar}${invalidHexishChar}${validHexishChar}`,
      `${validHexishChar}${validHexishChar}${invalidHexishChar}`,
      `${invalidHexishChar}${validHexishChar}${validHexishChar}`,
      `0x${invalidHexishChar}`,
      `0x${validHexishChar}${invalidHexishChar}`,
      `0x${invalidHexishChar}${validHexishChar}`,
      `0x${validHexishChar}${invalidHexishChar}${validHexishChar}`,
      `0x${validHexishChar}${validHexishChar}${invalidHexishChar}`,
      `0x${invalidHexishChar}${validHexishChar}${validHexishChar}`,

    ]
    const validHexishes = [
      `${validHexishChar}`,
      `${validHexishChar}${validHexishChar}`,
      `${validHexishChar}${validHexishChar}${validHexishChar}`,
      `0x${validHexishChar}`,
      `0x${validHexishChar}${validHexishChar}`,
      `0x${validHexishChar}${validHexishChar}${validHexishChar}`,
    ]
    invalidHexishes.forEach((invalidHexish) => {
      test(`invalidHexish: ${invalidHexish}`, () => {
        expect(() => {
          assertIsValidHexish(invalidHexish)
        }).toThrow(InvalidHexishError)
      })
    })
    validHexishes.forEach((validHexish) => {
      test(`validHexish: ${validHexish}`, () => {
        expect(() => {
          assertIsValidHexish(validHexish)
        }).not.toThrow()
      })
    })
  })
})
