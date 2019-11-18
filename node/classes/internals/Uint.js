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
var fixWrappers_1 = require("../wrappers/fixWrappers");
var bn_js_1 = __importDefault(require("bn.js"));
var Uint = /** @class */ (function (_super) {
    __extends(Uint, _super);
    function Uint(length, uint8Array) {
        return _super.call(this, length, uint8Array) || this;
    }
    Uint.prototype.getBn = function () {
        if (this.bn) {
            return this.bn;
        }
        this.bn = new bn_js_1["default"](this.cloneUint8Array());
        return this.bn;
    };
    Uint.prototype.getNumber = function () {
        if (this.number) {
            return this.number;
        }
        this.number = this.getBn().toNumber();
        return this.number;
    };
    Uint.prototype.unstrictEquals = function (uint) {
        return this.getBn().eq(uint.getBn());
    };
    return Uint;
}(fixWrappers_1.FixLeftWrapper));
exports.Uint = Uint;
// export const ZERO = new Uint(8, from.number(0))
// export const ONE = new Uint(8, from.number(1))
