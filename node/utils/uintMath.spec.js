"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var uintMath = __importStar(require("./uintMath"));
var __1 = require("../");
var fixtures = [
    ['add', __1.Uint8, 0, 0, 0],
    ['add', __1.Uint8, 0, 1, 1],
    ['add', __1.Uint8, 1, 0, 1],
    ['add', __1.Uint8, 1, 1, 2],
    ['add', __1.Uint8, 100, 100, 200],
    ['sub', __1.Uint8, 0, 0, 0],
    ['sub', __1.Uint8, 100, 100, 0],
    ['mul', __1.Uint8, 0, 0, 0],
    ['mul', __1.Uint8, 0, 1, 0],
    ['mul', __1.Uint8, 2, 3, 6],
    ['mul', __1.Uint8, 100, 2, 200],
    ['divRd', __1.Uint8, 0, 1, 0],
    ['divRd', __1.Uint8, 2, 1, 2],
    ['divRd', __1.Uint8, 2, 2, 1],
    ['divRd', __1.Uint8, 5, 2, 3],
    ['divRd', __1.Uint8, 5, 3, 2],
    ['divDn', __1.Uint8, 0, 1, 0],
    ['divDn', __1.Uint8, 2, 1, 2],
    ['divDn', __1.Uint8, 2, 2, 1],
    ['divDn', __1.Uint8, 5, 2, 2],
    ['divDn', __1.Uint8, 5, 3, 1],
    ['divUp', __1.Uint8, 0, 1, 0],
    ['divUp', __1.Uint8, 2, 1, 2],
    ['divUp', __1.Uint8, 2, 2, 1],
    ['divUp', __1.Uint8, 5, 2, 3],
    ['divUp', __1.Uint8, 5, 3, 2],
    ['divDn', __1.Uint8, 5, 3, 1],
    ['mod', __1.Uint8, 0, 1, 0],
    ['mod', __1.Uint8, 1, 1, 0],
    ['mod', __1.Uint8, 1, 2, 1],
    ['mod', __1.Uint8, 2, 1, 0],
    ['mod', __1.Uint8, 2, 2, 0],
    ['mod', __1.Uint8, 5, 3, 2],
];
fixtures.forEach(function (fixture, index) {
    var op = fixture[0];
    var External = fixture[1];
    var a = fixture[2];
    var b = fixture[3];
    var c = fixture[4];
    test("fixture " + index + " " + External.name + ": " + a + " " + op + " " + b + " = " + c, function () {
        expect(uintMath[op](External, External.fromNumber(a), External.fromNumber(b)).getNumber()).toBe(c);
    });
});
