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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fixButtercups_1 = require("../buttercups/fixButtercups");
var bn_js_1 = __importDefault(require("bn.js"));
var utils_1 = require("../utils");
var UintUnderflowError = /** @class */ (function (_super) {
    __extends(UintUnderflowError, _super);
    function UintUnderflowError() {
        var _this = _super.call(this, 'UnderflowError') || this;
        Object.setPrototypeOf(_this, UintUnderflowError.prototype);
        return _this;
    }
    return UintUnderflowError;
}(Error));
exports.UintUnderflowError = UintUnderflowError;
var UintOverflowError = /** @class */ (function (_super) {
    __extends(UintOverflowError, _super);
    function UintOverflowError() {
        var _this = _super.call(this, 'OverflowError') || this;
        Object.setPrototypeOf(_this, UintOverflowError.prototype);
        return _this;
    }
    return UintOverflowError;
}(Error));
exports.UintOverflowError = UintOverflowError;
var UintX = /** @class */ (function (_super) {
    __extends(UintX, _super);
    function UintX(length, uintable) {
        var _this = _super.call(this, length, utils_1.genBnFromUintable(uintable).toArrayLike(Uint8Array, 'be')) || this;
        _this.numberStringByBase = {};
        return _this;
    }
    UintX.prototype.toNumber = function () {
        this.number = new bn_js_1["default"](this.uu.u).toNumber();
        return this.number;
    };
    UintX.prototype.toNumberString = function (base) {
        if (this.numberStringByBase[base]) {
            return this.numberStringByBase[base];
        }
        this.numberStringByBase[base] = new bn_js_1["default"](this.uu.u).toString(base);
        return this.numberStringByBase[base];
    };
    UintX.prototype.getIsZero = function () {
        return this.uu.u.every(function (byte) {
            return byte === 0;
        });
    };
    UintX.prototype.compEq = function (value) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(value);
        return thisBn.eq(valueBn);
    };
    UintX.prototype.compGt = function (value) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(value);
        return thisBn.gt(valueBn);
    };
    UintX.prototype.compGte = function (value) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(value);
        return thisBn.gte(valueBn);
    };
    UintX.prototype.compLt = function (value) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(value);
        return thisBn.lt(valueBn);
    };
    UintX.prototype.compLte = function (value) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(value);
        return thisBn.lte(valueBn);
    };
    return UintX;
}(fixButtercups_1.FixLeftButtercup));
exports.UintX = UintX;
