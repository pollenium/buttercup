"use strict";
exports.__esModule = true;
var __1 = require("../");
test('add', function () {
    var a = __1.Uint8.fromNumber(4);
    var b = __1.Uint8.fromNumber(5);
    expect(a.add(b).getNumber()).toBe(9);
});
var a = __1.Uint8.fromNumber(4);
var b = a.getCasted(__1.Bytes);
test('instance', function () {
    expect(b).toBeInstanceOf(__1.Bytes);
});
test('method', function () {
    expect(b.getArray()).toStrictEqual([4]);
});
