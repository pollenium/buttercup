"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var from = __importStar(require("./from"));
var bn_js_1 = __importDefault(require("bn.js"));
function add(UintClass, a, b) {
    return from.uint8Array(UintClass, a.getBn().add(b.getBn()).toArrayLike(Uint8Array, 'be'));
}
exports.add = add;
function sub(UintClass, a, b) {
    return from.uint8Array(UintClass, a.getBn().sub(b.getBn()).toArrayLike(Uint8Array, 'be'));
}
exports.sub = sub;
function mul(UintClass, a, b) {
    return from.uint8Array(UintClass, a.getBn().mul(b.getBn()).toArrayLike(Uint8Array, 'be'));
}
exports.mul = mul;
var zeroBn = new bn_js_1["default"](0);
var oneBn = new bn_js_1["default"](1);
function divRd(UintClass, a, b) {
    return from.uint8Array(UintClass, a.getBn().divRound(b.getBn()).toArrayLike(Uint8Array, 'be'));
}
exports.divRd = divRd;
function divDn(UintClass, a, b) {
    return from.uint8Array(UintClass, a.getBn().div(b.getBn()).toArrayLike(Uint8Array, 'be'));
}
exports.divDn = divDn;
function divUp(UintClass, a, b) {
    var divided = a.getBn().div(b.getBn());
    var remainder = a.getBn().mod(b.getBn());
    if (remainder.eq(zeroBn)) {
        return from.uint8Array(UintClass, divided.toArrayLike(Uint8Array, 'be'));
    }
    else {
        return from.uint8Array(UintClass, divided.add(oneBn).toArrayLike(Uint8Array, 'be'));
    }
}
exports.divUp = divUp;
function mod(UintClass, a, b) {
    return from.uint8Array(UintClass, a.getBn().mod(b.getBn()).toArrayLike(Uint8Array, 'be'));
}
exports.mod = mod;
