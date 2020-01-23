"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var bn_js_1 = __importDefault(require("bn.js"));
function uintishToBn(uintish) {
    return new bn_js_1["default"](uintish.toUint8Array());
}
exports.uintishToBn = uintishToBn;
