"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var OverflowError = /** @class */ (function (_super) {
    __extends(OverflowError, _super);
    function OverflowError(length, uint8ArrayLength) {
        var _this = _super.call(this, "Overflow: Trying to put " + uint8ArrayLength + " length Uint8Array into " + length + " length Wrapper") || this;
        Object.setPrototypeOf(_this, OverflowError.prototype);
        return _this;
    }
    return OverflowError;
}(Error));
exports.OverflowError = OverflowError;
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
