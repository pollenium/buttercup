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
        var throwInvalidHexishCharErrors = [
            "" + validHexishChar + invalidHexishChar,
            "" + invalidHexishChar + validHexishChar,
            "" + validHexishChar + invalidHexishChar + validHexishChar + validHexishChar,
            "" + validHexishChar + validHexishChar + validHexishChar + invalidHexishChar,
            "" + invalidHexishChar + validHexishChar + validHexishChar + validHexishChar,
            "0x" + validHexishChar + invalidHexishChar,
            "0x" + invalidHexishChar + validHexishChar,
            "0x" + validHexishChar + validHexishChar + invalidHexishChar + validHexishChar,
            "0x" + validHexishChar + validHexishChar + validHexishChar + invalidHexishChar,
            "0x" + invalidHexishChar + validHexishChar + validHexishChar + validHexishChar
        ];
        var throwInvalidHexishParityErrors = [
            "" + validHexishChar,
            "" + validHexishChar + validHexishChar + validHexishChar,
            "0x" + validHexishChar,
            "0x" + validHexishChar + validHexishChar + validHexishChar,
        ];
        var validHexishes = [
            '',
            "" + validHexishChar + validHexishChar,
            "" + validHexishChar + validHexishChar + validHexishChar + validHexishChar,
            '0x',
            "0x" + validHexishChar + validHexishChar,
            "0x" + validHexishChar + validHexishChar + validHexishChar + validHexishChar
        ];
        throwInvalidHexishCharErrors.forEach(function (hexish) {
            test("invalidHexishChar: " + hexish, function () {
                expect(function () {
                    assertIsValidHexish_1.assertIsValidHexish(hexish);
                }).toThrow(assertIsValidHexish_1.InvalidHexishCharError);
            });
        });
        throwInvalidHexishParityErrors.forEach(function (hexish) {
            test("invalidHexishParity: " + hexish, function () {
                expect(function () {
                    assertIsValidHexish_1.assertIsValidHexish(hexish);
                }).toThrow(assertIsValidHexish_1.InvalidHexishParityError);
            });
        });
        validHexishes.forEach(function (hexish) {
            test("validHexish: " + hexish, function () {
                expect(function () {
                    assertIsValidHexish_1.assertIsValidHexish(hexish);
                }).not.toThrow();
            });
        });
    });
});
