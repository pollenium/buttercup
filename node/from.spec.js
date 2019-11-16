"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var _1 = require("./");
var from_1 = require("./from");
var bn_js_1 = __importDefault(require("bn.js"));
var fixtures = [
    {
        uint8Array: new Uint8Array(0),
        inputs: [
            { buffer: Buffer.from([]) },
            { array: [] },
            { hexish: '' },
            { hexish: '0x' },
            { number: 0 },
            { bn: new bn_js_1["default"](0) }
        ]
    },
    {
        uint8Array: new Uint8Array([0]),
        inputs: [
            { buffer: Buffer.from([0]) },
            { array: [0] },
            { hexish: '0' },
            { hexish: '00' },
            { hexish: '0x0' },
            { hexish: '0x00' },
        ]
    },
    {
        uint8Array: new Uint8Array([1]),
        inputs: [
            { buffer: Buffer.from([1]) },
            { array: [1] },
            { hexish: '1' },
            { hexish: '01' },
            { hexish: '0x1' },
            { hexish: '0x01' },
            { number: 1 },
            { bn: new bn_js_1["default"](1) }
        ]
    },
    {
        uint8Array: new Uint8Array([255]),
        inputs: [
            { buffer: Buffer.from([255]) },
            { array: [255] },
            { hexish: 'ff' },
            { hexish: '0xff' },
            { number: 255 },
            { bn: new bn_js_1["default"](255) }
        ]
    },
    {
        uint8Array: new Uint8Array([255, 1]),
        inputs: [
            { hexish: 'ff1' },
            { hexish: 'FF1' },
            { hexish: 'FF01' },
            { hexish: '0xff1' },
            { hexish: '0xFF1' },
            { hexish: '0xfF1' }
        ]
    },
    {
        uint8Array: new Uint8Array([1, 0]),
        inputs: [
            { buffer: Buffer.from([1, 0]) },
            { array: [1, 0] },
            { hexish: '010' },
            { hexish: '0100' },
            { hexish: '0x010' },
            { hexish: '0x0100' },
            { number: 256 },
            { bn: new bn_js_1["default"](256) }
        ]
    },
    {
        uint8Array: new Uint8Array([255, 255]),
        inputs: [
            { buffer: Buffer.from([255, 255]) },
            { array: [255, 255] },
            { hexish: 'ffff' },
            { hexish: 'fFFf' },
            { hexish: '0xffff' },
            { hexish: '0xFFFF' },
            { number: 256 * 256 - 1 },
            { bn: new bn_js_1["default"](256 * 256 - 1) }
        ]
    },
    {
        uint8Array: new Uint8Array([1, 0, 0]),
        inputs: [
            { buffer: Buffer.from([1, 0, 0]) },
            { array: [1, 0, 0] },
            { hexish: '01000' },
            { hexish: '010000' },
            { hexish: '0x01000' },
            { hexish: '0x010000' },
            { number: 256 * 256 },
            { bn: new bn_js_1["default"](256 * 256) }
        ]
    },
];
fixtures.forEach(function (fixture, index) {
    fixture.inputs.forEach(function (input) {
        var fromKey = Object.keys(input)[0];
        var fromValue = input[fromKey];
        test("fixture #" + index + " " + fromKey, function () {
            expect(_1.from[fromKey](fromValue)).toStrictEqual(fixture.uint8Array);
        });
    });
});
var invalidHexishChar = [
    '\x2F',
    '/',
    '\x3A',
    ':',
    '\x40',
    '@',
    '\x47',
    'G',
    '\x60',
    '`',
    '\x67',
    'g',
    '\n',
    '\x00',
    '\xff'
];
var validHexishChars = ['0', '9', 'a', 'f', 'A', 'F'];
invalidHexishChar.forEach(function (invalidHexishChar) {
    validHexishChars.forEach(function (validHexishChar) {
        var invalidHexishes = [
            "" + invalidHexishChar,
            "" + validHexishChar + invalidHexishChar,
            "" + invalidHexishChar + validHexishChar,
            "" + validHexishChar + invalidHexishChar + validHexishChar,
            "" + validHexishChar + validHexishChar + invalidHexishChar,
            "" + invalidHexishChar + validHexishChar + validHexishChar,
            "0x" + invalidHexishChar,
            "0x" + validHexishChar + invalidHexishChar,
            "0x" + invalidHexishChar + validHexishChar,
            "0x" + validHexishChar + invalidHexishChar + validHexishChar,
            "0x" + validHexishChar + validHexishChar + invalidHexishChar,
            "0x" + invalidHexishChar + validHexishChar + validHexishChar,
        ];
        var validHexishes = [
            "" + validHexishChar,
            "" + validHexishChar + validHexishChar,
            "" + validHexishChar + validHexishChar + validHexishChar,
            "0x" + validHexishChar,
            "0x" + validHexishChar + validHexishChar,
            "0x" + validHexishChar + validHexishChar + validHexishChar,
        ];
        invalidHexishes.forEach(function (invalidHexish) {
            test("invalidHexish: " + invalidHexish, function () {
                expect(function () {
                    _1.from.hexish(invalidHexish);
                }).toThrow(from_1.InvalidHexishError);
            });
        });
        validHexishes.forEach(function (validHexish) {
            test("validHexish: " + validHexish, function () {
                expect(function () {
                    _1.from.hexish(validHexish);
                }).not.toThrow();
            });
        });
    });
});
