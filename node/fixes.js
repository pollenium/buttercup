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
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
var InvalidLengthError = /** @class */ (function (_super) {
    __extends(InvalidLengthError, _super);
    function InvalidLengthError(length, uint8Array) {
        return _super.call(this, "Invalid length; Expected " + length + " received " + uint8Array.length) || this;
    }
    return InvalidLengthError;
}(Error));
exports.InvalidLengthError = InvalidLengthError;
var Fix = /** @class */ (function (_super) {
    __extends(Fix, _super);
    function Fix(length, uint8Array) {
        var _this = _super.call(this, uint8Array) || this;
        if (uint8Array.length !== length) {
            throw new InvalidLengthError(length, uint8Array);
        }
        return _this;
    }
    return Fix;
}(pollenium_uvaursi_1.Uu));
exports.Fix = Fix;
var FixLeft = /** @class */ (function (_super) {
    __extends(FixLeft, _super);
    function FixLeft(length, uint8Array) {
        return _super.call(this, length, new pollenium_uvaursi_1.Uu(uint8Array).uuGenPaddedLeft(length)) || this;
    }
    return FixLeft;
}(Fix));
exports.FixLeft = FixLeft;
var FixRight = /** @class */ (function (_super) {
    __extends(FixRight, _super);
    function FixRight(length, uint8Array) {
        return _super.call(this, length, new pollenium_uvaursi_1.Uu(uint8Array).uuGenPaddedRight(length)) || this;
    }
    return FixRight;
}(Fix));
exports.FixRight = FixRight;
