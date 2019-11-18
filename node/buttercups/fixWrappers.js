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
var FixLeftButtercup = /** @class */ (function (_super) {
    __extends(FixLeftButtercup, _super);
    function FixLeftButtercup(length, uint8Array) {
        var _this = _super.call(this, uint8Array_1.getPaddedLeft(length, uint8Array)) || this;
        _this.length = length;
        return _this;
    }
    return FixLeftButtercup;
}(Buttercup_1.Buttercup));
exports.FixLeftButtercup = FixLeftButtercup;
var FixRightButtercup = /** @class */ (function (_super) {
    __extends(FixRightButtercup, _super);
    function FixRightButtercup(length, uint8Array) {
        var _this = _super.call(this, uint8Array_1.getPaddedRight(length, uint8Array)) || this;
        _this.length = length;
        return _this;
    }
    return FixRightButtercup;
}(Buttercup_1.Buttercup));
exports.FixRightButtercup = FixRightButtercup;
