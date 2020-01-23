"use strict";
exports.__esModule = true;
var __1 = require("../");
test('add', function () {
    var a = __1.Uint8.fromNumber(4);
    var b = __1.Uint8.fromNumber(5);
    expect(a.opAdd(b).toNumber()).toBe(9);
});
test('add', function () {
    var a = __1.Uint16.fromNumber(15);
    var b = __1.Uint16.fromNumber(20);
    expect(a.opAdd(b).toNumber()).toBe(35);
});
test('sub', function () {
    var a = __1.Uint16.fromNumber(100);
    var b = __1.Uint16.fromNumber(1);
    expect(a.opSub(b).toNumber()).toBe(99);
});
test('mul', function () {
    var a = __1.Uint16.fromNumber(5);
    var b = __1.Uint16.fromNumber(2);
    expect(a.opMul(b).toNumber()).toBe(10);
});
test('div', function () {
    var a = __1.Uint16.fromNumber(40);
    var b = __1.Uint16.fromNumber(5);
    expect(a.opDiv(b).toNumber()).toBe(8);
});
test('div', function () {
    var a = __1.Uint16.fromNumber(40);
    var b = __1.Uint16.fromNumber(11);
    expect(a.opDiv(b).toNumber()).toBe(3);
});
test('mod', function () {
    var a = __1.Uint16.fromNumber(4);
    var b = __1.Uint16.fromNumber(2);
    expect(a.opMod(b).toNumber()).toBe(0);
});
test('mod', function () {
    var a = __1.Uint16.fromNumber(100);
    var b = __1.Uint16.fromNumber(65);
    expect(a.opMod(b).toNumber()).toBe(35);
});
test('cast', function () {
    var a = __1.Uint8.fromNumber(4);
    var b = a.genCasted(__1.Bytes);
    expect(b).toBeInstanceOf(__1.Bytes);
    expect(b.uint8Array).toStrictEqual([4]);
});
test('comparison', function () {
    var a = __1.Uint8.fromNumber(4);
    var b = __1.Uint16.fromNumber(4);
    expect(a.compLt(b)).toBe(false);
    expect(a.compLte(b)).toBe(true);
    expect(a.compGt(b)).toBe(false);
    expect(a.compGte(b)).toBe(true);
});
