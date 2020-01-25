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
var Buttercup_1 = require("./Buttercup");
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
var InvalidLengthError = /** @class */ (function (_super) {
    __extends(InvalidLengthError, _super);
    function InvalidLengthError(length, uLength) {
        return _super.call(this, "Invalid length; Expected " + length + " received " + uLength) || this;
    }
    return InvalidLengthError;
}(Error));
exports.InvalidLengthError = InvalidLengthError;
var FixButtercup = /** @class */ (function (_super) {
    __extends(FixButtercup, _super);
    function FixButtercup(length, uish) {
        var _this = _super.call(this, uish) || this;
        if (_this.uu.u.length !== length) {
            throw new InvalidLengthError(length, _this.uu.u.length);
        }
        return _this;
    }
    return FixButtercup;
}(Buttercup_1.Buttercup));
exports.FixButtercup = FixButtercup;
var FixLeftButtercup = /** @class */ (function (_super) {
    __extends(FixLeftButtercup, _super);
    function FixLeftButtercup(length, uish) {
        return _super.call(this, length, pollenium_uvaursi_1.Uu.wrap(uish).genPaddedLeft(length)) || this;
    }
    return FixLeftButtercup;
}(FixButtercup));
exports.FixLeftButtercup = FixLeftButtercup;
var FixRightButtercup = /** @class */ (function (_super) {
    __extends(FixRightButtercup, _super);
    function FixRightButtercup(length, uish) {
        return _super.call(this, length, pollenium_uvaursi_1.Uu.wrap(uish).genPaddedRight(length)) || this;
    }
    return FixRightButtercup;
}(FixButtercup));
exports.FixRightButtercup = FixRightButtercup;
