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
var uint8Array_1 = require("../utils/uint8Array");
var InvalidLengthError = /** @class */ (function (_super) {
    __extends(InvalidLengthError, _super);
    function InvalidLengthError(length, uint8Array) {
        return _super.call(this, "Invalid length; Expected " + length + " received " + uint8Array.length) || this;
    }
    return InvalidLengthError;
}(Error));
exports.InvalidLengthError = InvalidLengthError;
var FixButtercup = /** @class */ (function (_super) {
    __extends(FixButtercup, _super);
    function FixButtercup(length, uint8Array) {
        var _this = _super.call(this, uint8Array) || this;
        if (uint8Array.length !== length) {
            throw new InvalidLengthError(length, uint8Array);
        }
        return _this;
    }
    return FixButtercup;
}(Buttercup_1.Buttercup));
exports.FixButtercup = FixButtercup;
var FixLeftButtercup = /** @class */ (function (_super) {
    __extends(FixLeftButtercup, _super);
    function FixLeftButtercup(length, uint8Array) {
        return _super.call(this, length, uint8Array_1.getPaddedLeft(length, uint8Array)) || this;
    }
    return FixLeftButtercup;
}(FixButtercup));
exports.FixLeftButtercup = FixLeftButtercup;
var FixRightButtercup = /** @class */ (function (_super) {
    __extends(FixRightButtercup, _super);
    function FixRightButtercup(length, uint8Array) {
        return _super.call(this, length, uint8Array_1.getPaddedRight(length, uint8Array)) || this;
    }
    return FixRightButtercup;
}(FixButtercup));
exports.FixRightButtercup = FixRightButtercup;
