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
var crypto_1 = __importDefault(require("crypto"));
var bn_js_1 = __importDefault(require("bn.js"));
var utils_1 = require("./utils");
var zeroBn = new bn_js_1["default"](0);
var InvalidHexishError = /** @class */ (function (_super) {
    __extends(InvalidHexishError, _super);
    function InvalidHexishError(hex) {
        var _this = _super.call(this, "Invalid hexish: " + hex) || this;
        Object.setPrototypeOf(_this, InvalidHexishError.prototype);
        return _this;
    }
    return InvalidHexishError;
}(Error));
exports.InvalidHexishError = InvalidHexishError;
function array(array) {
    return new Uint8Array(array);
}
exports.array = array;
function buffer(buffer) {
    return new Uint8Array(buffer);
}
exports.buffer = buffer;
function hexish(hexish) {
    if (hexish.length === 0) {
        return new Uint8Array(0);
    }
    if (hexish.indexOf('0x') === 0) {
        return exports.hexish(hexish.substr(2));
    }
    if (!utils_1.getIsValidHexish(hexish)) {
        throw new InvalidHexishError(hexish);
    }
    var array = hexish.match(/.{1,2}/g).map(function (byteHex) {
        return parseInt(byteHex, 16);
    });
    return exports.array(array);
}
exports.hexish = hexish;
function random(length) {
    return exports.buffer(crypto_1["default"].randomBytes(length));
}
exports.random = random;
function bn(bn) {
    /* TODO: Use interface */
    if (bn.eq(zeroBn)) {
        return new Uint8Array(0);
    }
    return exports.array(bn.toArray('be'));
}
exports.bn = bn;
function number(number) {
    if (number === 0) {
        return new Uint8Array(0);
    }
    return exports.bn(new bn_js_1["default"](number));
}
exports.number = number;
