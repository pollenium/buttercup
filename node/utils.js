"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var UintX_1 = require("./internals/UintX");
var bn_js_1 = __importDefault(require("bn.js"));
function genBnFromUintable(uintable) {
    if (uintable instanceof UintX_1.UintX) {
        return new bn_js_1["default"](uintable.u);
    }
    if (!Number.isNaN(uintable)) {
        return genBnFromNumber(uintable);
    }
}
exports.genBnFromUintable = genBnFromUintable;
function genBnFromNumber(number) {
    return new bn_js_1["default"](number);
}
exports.genBnFromNumber = genBnFromNumber;
