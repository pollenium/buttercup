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
var Wrapper_1 = require("./Wrapper");
var utils_1 = require("../../utils");
var FixLeftWrapper = /** @class */ (function (_super) {
    __extends(FixLeftWrapper, _super);
    function FixLeftWrapper(length, uint8Array) {
        var _this = _super.call(this, utils_1.getPaddedLeft(length, uint8Array)) || this;
        _this.length = length;
        return _this;
    }
    return FixLeftWrapper;
}(Wrapper_1.Wrapper));
exports.FixLeftWrapper = FixLeftWrapper;
var FixRightWrapper = /** @class */ (function (_super) {
    __extends(FixRightWrapper, _super);
    function FixRightWrapper(length, uint8Array) {
        var _this = _super.call(this, utils_1.getPaddedRight(length, uint8Array)) || this;
        _this.length = length;
        return _this;
    }
    return FixRightWrapper;
}(Wrapper_1.Wrapper));
exports.FixRightWrapper = FixRightWrapper;
