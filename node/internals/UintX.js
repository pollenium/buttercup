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
var UintX = /** @class */ (function (_super) {
    __extends(UintX, _super);
    function UintX(length, uint8Array) {
        return _super.call(this, length, uint8Array) || this;
    }
    UintX.prototype.toNumber = function () {
        this.number = new bn_js_1["default"](this.toUint8Array()).toNumber();
        return this.number;
    };
    UintX.prototype.getIsZero = function () {
        return this.getIsOnlyZeroes();
    };
    UintX.prototype.eq = function (value) {
        var thisBn = new bn_js_1["default"](this.toUint8Array());
        var valueBn = new bn_js_1["default"](value.toUint8Array());
        return thisBn.eq(valueBn);
    };
    UintX.prototype.gt = function (value) {
        var thisBn = new bn_js_1["default"](this.toUint8Array());
        var valueBn = new bn_js_1["default"](value.toUint8Array());
        return thisBn.gt(valueBn);
    };
    UintX.prototype.gte = function (value) {
        var thisBn = new bn_js_1["default"](this.toUint8Array());
        var valueBn = new bn_js_1["default"](value.toUint8Array());
        return thisBn.gte(valueBn);
    };
    UintX.prototype.lt = function (value) {
        var thisBn = new bn_js_1["default"](this.toUint8Array());
        var valueBn = new bn_js_1["default"](value.toUint8Array());
        return thisBn.lt(valueBn);
    };
    UintX.prototype.lte = function (value) {
        var thisBn = new bn_js_1["default"](this.toUint8Array());
        var valueBn = new bn_js_1["default"](value.toUint8Array());
        return thisBn.lte(valueBn);
    };
    return UintX;
}(fixButtercups_1.FixLeftButtercup));
exports.UintX = UintX;
