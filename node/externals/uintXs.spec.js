"use strict";
exports.__esModule = true;
var __1 = require("../");
test('add', function () {
    var a = __1.Uint8.fromNumber(4);
    var b = __1.Uint8.fromNumber(5);
    expect(a.add(b).getNumber()).toBe(9);
});
test('cast', function () {
    var a = __1.Uint8.fromNumber(4);
    var b = a.getCasted(__1.Bytes);
    expect(b).toBeInstanceOf(__1.Bytes);
    expect(b.getArray()).toStrictEqual([4]);
});
test('comparison', function () {
    var a = __1.Uint8.fromNumber(4);
    var b = __1.Uint16.fromNumber(4);
    expect(a.lt(b)).toBe(false);
    expect(a.lte(b)).toBe(true);
    expect(a.gt(b)).toBe(false);
    expect(a.gte(b)).toBe(true);
});
