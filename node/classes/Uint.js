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
exports.UINT_BITS_MIN = 8;
exports.UINT_BITS_MAX = 256;
var Uint = /** @class */ (function (_super) {
    __extends(Uint, _super);
    function Uint(bitsLength, uint8Array) {
        var _this = this;
        if (bitsLength % exports.UINT_BITS_MIN !== 0) {
            throw new Error("bitsLength must be multiple of " + exports.UINT_BITS_MIN);
        }
        if (bitsLength < exports.UINT_BITS_MIN) {
            throw new Error("bitsLength must be multiple of " + exports.UINT_BITS_MIN);
        }
        if (bitsLength > exports.UINT_BITS_MAX) {
            throw new Error("bitsLength must be multiple of " + exports.UINT_BITS_MAX);
        }
        _this = _super.call(this, bitsLength / 8, uint8Array) || this;
        return _this;
    }
    Uint.prototype.getBn = function () {
        if (this.bn) {
            return this.bn;
        }
        this.bn = new bn_js_1.Bn(this.uint8Array);
        return this.bn;
    };
    Uint.prototype.getNumber = function () {
        if (this.number) {
            return this.number;
        }
        this.number = this.getBn().toNumber();
        return this.number;
    };
    Uint.prototype.add = function (buttercup) {
        return Buttercup.fromBn(this.getBn().add(buttercup.getBn()));
    };
    Uint.prototype.sub = function (buttercup) {
        return Buttercup.fromBn(this.getBn().sub(buttercup.getBn()));
    };
    Uint.prototype.mul = function (buttercup) {
        return Buttercup.fromBn(this.getBn().mul(buttercup.getBn()));
    };
    Uint.prototype.divDn = function (buttercup) {
        return Buttercup.fromBn(this.getBn().divRound(buttercup.getBn()));
    };
    Uint.prototype.divUp = function (buttercup) {
        if (this.mod(buttercup).unstrictEquals(ZERO)) {
            return this.divDn(buttercup);
        }
        else {
            return this.divDn(buttercup).add(ONE);
        }
    };
    Uint.prototype.mod = function (buttercup) {
        return Buttercup.fromBn(this.getBn().mod(buttercup.getBn()));
    };
    Uint.prototype.gt = function (buttercup) {
        return Buttercup.fromBn(this.getBn().gt(buttercup.getBn()));
    };
    Uint.prototype.gte = function (buttercup) {
        return Buttercup.fromBn(this.getBn().gte(buttercup.getBn()));
    };
    Uint.prototype.lt = function (buttercup) {
        return Buttercup.fromBn(this.getBn().lt(buttercup.getBn()));
    };
    Uint.prototype.lte = function (buttercup) {
        return Buttercup.fromBn(this.getBn().lte(buttercup.getBn()));
    };
    Uint.fromBn = function (bitsLength, bn) {
        return Uint.fromArray(length, bn.toArray('le'));
    };
    Uint.getNow = function (bitsLength) {
        return Uint.getNowMs(length).divDn(Uint.fromNumber(exports.UINT_BITS_MAX, 1000));
    };
    Uint.getNowMs = function (bitsLength) {
        return Uint.fromNumber(exports.UINT_BITS_MAX, (new Date).getTime());
    };
    Uint.fromNumber = function (bitsLength) {
        return Uint.fromBn(bitsLength, new bn_js_1.Bn(number));
    };
    return Uint;
}(FixedButtercup_1.FixedButtercup));
exports.Uint = Uint;
