"use strict";
exports.__esModule = true;
var _1 = require("./");
var fixtures = [
    ['add', _1.Uint8, 0, 0, 0],
    ['add', _1.Uint8, 0, 1, 1],
    ['add', _1.Uint8, 1, 0, 1],
    ['add', _1.Uint8, 1, 1, 2],
    ['add', _1.Uint8, 100, 100, 200]
];
fixtures.forEach(function (fixture, index) {
    var op = fixture[0];
    var External = fixture[1];
    var a = fixture[2];
    var b = fixture[3];
    var c = fixture[4];
    test("fixture " + index + " " + External.name + " " + op + " " + a + " " + b + " = " + c, function () {
        expect(_1.uintMath[op](External, _1.from.uintNumber(External, a), _1.from.uintNumber(External, b)).getNumber()).toBe(c);
    });
});
