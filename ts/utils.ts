const hexishCharCodesRanges = [
  [48, 57],   // 0-9
  [97, 102],  // a-f
  [65, 70]    // A-F
]

export function getIsValidHexishChar(hexishChar): boolean {
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


export function getIsValidHexish(hexish): boolean {
  for (let i = 0; i < hexish.length; i++) {
    if (!getIsValidHexishChar(hexish[i])) {
      return false
    }
  }
  return true
}
