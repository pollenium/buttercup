"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var crypto_1 = __importDefault(require("crypto"));
var bn_js_1 = __importDefault(require("bn.js"));
function array(array) {
    return new Uint8Array(array);
}
exports.array = array;
function buffer(buffer) {
    return new Uint8Array(buffer);
}
exports.buffer = buffer;
function hex(hex) {
    /* TODO: validate not phex */
    var array = hex.match(/.{1,2}/g).map(function (byteHex) {
        return parseInt(byteHex, 16);
    });
    return exports.array(array);
}
exports.hex = hex;
function phex(phex) {
    /* TODO: validate not hex */
    return exports.hex(phex.substr(2));
}
exports.phex = phex;
function random(length) {
    return exports.buffer(crypto_1["default"].randomBytes(length));
}
exports.random = random;
function bn(bn) {
    /* TODO: Use interface */
    return exports.array(bn.toArray('le'));
}
exports.bn = bn;
function number(number) {
    return exports.bn(new bn_js_1["default"](number));
}
exports.number = number;
