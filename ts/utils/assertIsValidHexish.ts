export class InvalidHexishError extends Error {
  constructor(hexish) {
    super(`Invalid hexish: ${hexish}` )
    Object.setPrototypeOf(this, InvalidHexishError.prototype)
  }
}

const hexishCharCodesRanges = [
  [48, 57],   // 0-9
  [97, 102],  // a-f
  [65, 70]    // A-F
]

function getIsValidHexishChar(hexishChar: string): boolean {
  const hexishCharCode = hexishChar.charCodeAt(0)
  for (let i = 0; i < hexishCharCodesRanges.length; i++) {
    const start = hexishCharCodesRanges[i][0]
    const end = hexishCharCodesRanges[i][1]
    if (hexishCharCode >= start && hexishCharCode <= end) {
      return true
    }
  }
  return false
}


function getIsValidHexish(hexish: string): boolean {
  if (hexish.indexOf('0x') === 0) {
    return getIsValidHexish(hexish.substr(2))
  }
  for (let i = 0; i < hexish.length; i++) {
    if (!getIsValidHexishChar(hexish[i])) {
      return false
    }
  }
  return true
}

export function assertIsValidHexish(hexish: string): void {
  if (!getIsValidHexish(hexish)) {
    throw new InvalidHexishError(hexish)
  }
}
