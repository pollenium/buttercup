"use strict";
exports.__esModule = true;
var hexishCharCodesRanges = [
    [48, 57],
    [97, 102],
    [65, 70] // A-F
];
function getIsValidHexishChar(hexishChar) {
    var hexishCharCode = hexishChar.charCodeAt(0);
    for (var i = 0; i < hexishCharCodesRanges.length; i++) {
        var start = hexishCharCodesRanges[i][0];
        var end = hexishCharCodesRanges[i][1];
        if (hexishCharCode >= start && hexishCharCode <= end) {
            return true;
        }
    }
    return false;
}
exports.getIsValidHexishChar = getIsValidHexishChar;
function getIsValidHexish(hexish) {
    for (var i = 0; i < hexish.length; i++) {
        if (!getIsValidHexishChar(hexish[i])) {
            return false;
        }
    }
    return true;
}
exports.getIsValidHexish = getIsValidHexish;
