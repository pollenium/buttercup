"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var bn_js_1 = __importDefault(require("bn.js"));
var uint8Array_1 = require("./uint8Array");
var zeroBn = new bn_js_1["default"](0);
function uint8Array(ExternalClass, uint8Array) {
    /* TODO: Validate Uint8Array */
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
    return exports.uint8Array(ExternalClass, uint8Array_1.fromHexish(hexish));
}
exports.hexish = hexish;
function uintNumber(ExternalClass, number) {
    /* TODO: Validate uintish number */
    if (number === 0) {
        return exports.uint8Array(ExternalClass, new Uint8Array([]));
    }
    return exports.uint8Array(ExternalClass, new bn_js_1["default"](number).toArrayLike(Uint8Array, 'be'));
}
exports.uintNumber = uintNumber;
