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
    UintX.prototype.getBn = function () {
        if (this.bn) {
            return this.bn;
        }
        this.bn = new bn_js_1["default"](this.cloneUint8Array());
        return this.bn;
    };
    UintX.prototype.getNumber = function () {
        if (this.number) {
            return this.number;
        }
        this.number = this.getBn().toNumber();
        return this.number;
    };
    UintX.prototype.unstrictEquals = function (uint) {
        return this.getBn().eq(uint.getBn());
    };
    UintX.prototype.gt = function (a, b) {
        return a.getBn().gt(b.getBn());
    };
    UintX.prototype.gte = function (a, b) {
        return a.getBn().gte(b.getBn());
    };
    UintX.prototype.lt = function (a, b) {
        return a.getBn().lt(b.getBn());
    };
    UintX.prototype.lte = function (a, b) {
        return a.getBn().lte(b.getBn());
    };
    return UintX;
}(fixButtercups_1.FixLeftButtercup));
exports.UintX = UintX;
