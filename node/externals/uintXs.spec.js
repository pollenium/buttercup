"use strict";
exports.__esModule = true;
var __1 = require("../");
test('add', function () {
    var a = __1.Uint8.fromNumber(4);
    var b = __1.Uint8.fromNumber(5);
    expect(a.add(b).toNumber()).toBe(9);
});
test('add', function () {
    var a = __1.Uint16.fromNumber(15);
    var b = __1.Uint16.fromNumber(20);
    expect(a.add(b).toNumber()).toBe(35);
});
test('sub', function () {
    var a = __1.Uint16.fromNumber(100);
    var b = __1.Uint16.fromNumber(1);
    expect(a.sub(b).toNumber()).toBe(99);
});
test('mul', function () {
    var a = __1.Uint16.fromNumber(5);
    var b = __1.Uint16.fromNumber(2);
    expect(a.mul(b).toNumber()).toBe(10);
});
test('div', function () {
    var a = __1.Uint16.fromNumber(40);
    var b = __1.Uint16.fromNumber(5);
    expect(a.div(b).toNumber()).toBe(8);
});
test('div', function () {
    var a = __1.Uint16.fromNumber(40);
    var b = __1.Uint16.fromNumber(11);
    expect(a.div(b).toNumber()).toBe(3);
});
test('mod', function () {
    var a = __1.Uint16.fromNumber(4);
    var b = __1.Uint16.fromNumber(2);
    expect(a.mod(b).toNumber()).toBe(0);
});
test('mod', function () {
    var a = __1.Uint16.fromNumber(100);
    var b = __1.Uint16.fromNumber(65);
    expect(a.mod(b).toNumber()).toBe(35);
});
test('cast', function () {
    var a = __1.Uint8.fromNumber(4);
    var b = a.getCasted(__1.Bytes);
    expect(b).toBeInstanceOf(__1.Bytes);
    expect(b.toArray()).toStrictEqual([4]);
});
test('comparison', function () {
    var a = __1.Uint8.fromNumber(4);
    var b = __1.Uint16.fromNumber(4);
    expect(a.lt(b)).toBe(false);
    expect(a.lte(b)).toBe(true);
    expect(a.gt(b)).toBe(false);
    expect(a.gte(b)).toBe(true);
});
