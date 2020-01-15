import { assertIsValidHexish, InvalidHexishCharError, InvalidHexishParityError } from './assertIsValidHexish'

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
    const throwInvalidHexishCharErrors = [
      `${validHexishChar}${invalidHexishChar}`,
      `${invalidHexishChar}${validHexishChar}`,
      `${validHexishChar}${invalidHexishChar}${validHexishChar}${validHexishChar}`,
      `${validHexishChar}${validHexishChar}${validHexishChar}${invalidHexishChar}`,
      `${invalidHexishChar}${validHexishChar}${validHexishChar}${validHexishChar}`,
      `0x${validHexishChar}${invalidHexishChar}`,
      `0x${invalidHexishChar}${validHexishChar}`,
      `0x${validHexishChar}${validHexishChar}${invalidHexishChar}${validHexishChar}`,
      `0x${validHexishChar}${validHexishChar}${validHexishChar}${invalidHexishChar}`,
      `0x${invalidHexishChar}${validHexishChar}${validHexishChar}${validHexishChar}`
    ]
    const throwInvalidHexishParityErrors = [
      `${validHexishChar}`,
      `${validHexishChar}${validHexishChar}${validHexishChar}`,
      `0x${validHexishChar}`,
      `0x${validHexishChar}${validHexishChar}${validHexishChar}`,
    ]
    const validHexishes = [
      '',
      `${validHexishChar}${validHexishChar}`,
      `${validHexishChar}${validHexishChar}${validHexishChar}${validHexishChar}`,
      '0x',
      `0x${validHexishChar}${validHexishChar}`,
      `0x${validHexishChar}${validHexishChar}${validHexishChar}${validHexishChar}`
    ]
    throwInvalidHexishCharErrors.forEach((hexish) => {
      test(`invalidHexishChar: ${hexish}`, () => {
        expect(() => {
          assertIsValidHexish(hexish)
        }).toThrow(InvalidHexishCharError)
      })
    })
    throwInvalidHexishParityErrors.forEach((hexish) => {
      test(`invalidHexishParity: ${hexish}`, () => {
        expect(() => {
          assertIsValidHexish(hexish)
        }).toThrow(InvalidHexishParityError)
      })
    })
    validHexishes.forEach((hexish) => {
      test(`validHexish: ${hexish}`, () => {
        expect(() => {
          assertIsValidHexish(hexish)
        }).not.toThrow()
      })
    })
  })
})
