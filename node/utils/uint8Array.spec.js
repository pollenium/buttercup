"use strict";
exports.__esModule = true;
var assertIsValidHexish_1 = require("./assertIsValidHexish");
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
                    assertIsValidHexish(invalidHexish);
                }).toThrow(assertIsValidHexish_1.InvalidHexishError);
            });
        });
        validHexishes.forEach(function (validHexish) {
            test("validHexish: " + validHexish, function () {
                expect(function () {
                    assertIsValidHexish(validHexish);
                }).not.toThrow();
            });
        });
    });
});
