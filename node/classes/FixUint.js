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
var FixedButtercup_1 = require("./classes/FixedButtercup");
var bn_js_1 = require("bn.js");
exports.BITS_MIN = 8;
exports.BITS_MAX = 256;
exports.ZERO = Uint.fromNumber(8, 0);
exports.ONE = Uint.fromNumber(8, 1);
var Uint = /** @class */ (function (_super) {
    __extends(Uint, _super);
    function Uint(bitsLength, uint8Array) {
        var _this = _super.call(this, bitsLength / 8, uint8Array) || this;
        _this.bitsLength = bitsLength;
        if (bitsLength % exports.BITS_MIN !== 0) {
            throw new Error("bitsLength must be multiple of " + exports.BITS_MIN);
        }
        if (bitsLength < exports.BITS_MIN) {
            throw new Error("bitsLength must be multiple of " + exports.BITS_MIN);
        }
        if (bitsLength > exports.BITS_MAX) {
            throw new Error("bitsLength must be multiple of " + exports.BITS_MAX);
        }
        return _this;
    }
    Uint.prototype.getBn = function () {
        if (this.bn) {
            return this.bn;
        }
        this.bn = new bn_js_1.Bn(this.getUint8Array());
        return this.bn;
    };
    Uint.prototype.getNumber = function () {
        if (this.number) {
            return this.number;
        }
        this.number = this.bitsLength, this.getBn().toNumber();
        return this.number;
    };
    Uint.prototype.unstrictEquals = function (uint) {
        return this.getBn().eq(uint.getBn());
    };
    Uint.prototype.add = function (uint) {
        return Uint.fromBn(this.bitsLength, this.getBn().add(uint.getBn()));
    };
    Uint.prototype.sub = function (uint) {
        return Uint.fromBn(this.bitsLength, this.getBn().sub(uint.getBn()));
    };
    Uint.prototype.mul = function (uint) {
        return Uint.fromBn(this.bitsLength, this.getBn().mul(uint.getBn()));
    };
    Uint.prototype.divDn = function (uint) {
        return Uint.fromBn(this.bitsLength, this.getBn().divRound(uint.getBn()));
    };
    Uint.prototype.divUp = function (uint) {
        if (this.mod(uint).unstrictEquals(exports.ZERO)) {
            return this.divDn(uint);
        }
        else {
            return this.divDn(uint).add(exports.ONE);
        }
    };
    Uint.prototype.mod = function (uint) {
        return Uint.fromBn(this.bitsLength, this.getBn().mod(uint.getBn()));
    };
    Uint.prototype.gt = function (uint) {
        return Uint.fromBn(this.bitsLength, this.getBn().gt(uint.getBn()));
    };
    Uint.prototype.gte = function (uint) {
        return Uint.fromBn(this.bitsLength, this.getBn().gte(uint.getBn()));
    };
    Uint.prototype.lt = function (uint) {
        return Uint.fromBn(this.bitsLength, this.getBn().lt(uint.getBn()));
    };
    Uint.prototype.lte = function (uint) {
        return Uint.fromBn(this.bitsLength, this.getBn().lte(uint.getBn()));
    };
    Uint.fromArray = function (bitsLength, array) {
        return new Uint(bitsLength, new Uint8Array(array));
    };
    Uint.fromBn = function (bitsLength, bn) {
        return Uint.fromArray(bitsLength, bn.toArray('le'));
    };
    return Uint;
}(FixedButtercup_1.FixedButtercup));
exports.Uint = Uint;
