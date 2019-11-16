"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var _1 = require("./");
var bn_js_1 = __importDefault(require("bn.js"));
var fixtures = [
    {
        uint8Array: new Uint8Array(0),
        as: {
            buffer: Buffer.from([]),
            array: [],
            hex: '',
            phex: '0x',
            number: 0,
            bn: new bn_js_1["default"](0)
        }
    }
];
console.log(fixtures);
fixtures.forEach(function (fixture, index) {
    console.log(fixture);
    var asKeys = Object.keys(fixture.as);
    asKeys.forEach(function (asKey) {
        var asValue = fixture.as[asKey];
        test("fixture #" + index + " " + asKey, function () {
            expect(_1.from[asKey](asValue)).toBe(fixture.uint8Array);
        });
    });
});
