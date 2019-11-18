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
var bn_js_1 = __importDefault(require("bn.js"));
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
function uint8Array(ExternalClass, uint8Array) {
    return new ExternalClass(uint8Array);
}
exports.uint8Array = uint8Array;
function buffer(ExternalClass, buffer) {
    return exports.uint8Array(ExternalClass, new Uint8Array(buffer));
}
exports.buffer = buffer;
function array(ExternalClass, array) {
    return exports.uint8Array(ExternalClass, new Uint8Array(array));
}
exports.array = array;
function hexish(ExternalClass, hexish) {
    return exports.uint8Array(ExternalClass, hexish);
}
exports.hexish = hexish;
function uintBn(ExternalClass, bn) {
    /* TODO: Use interface for Bn */
    /* TODO: Validate uintish bn */
    if (bn.eq(zeroBn)) {
        return exports.array(ExternalClass, []);
    }
    return exports.array(ExternalClass, bn.toArray('be'));
}
exports.uintBn = uintBn;
function uintNumber(ExternalClass, number) {
    /* TODO: Validate uintish number */
    if (number === 0) {
        return exports.array(ExternalClass, []);
    }
    return exports.uintBn(ExternalClass, new bn_js_1["default"](number));
}
exports.uintNumber = uintNumber;
