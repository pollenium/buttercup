"use strict";
exports.__esModule = true;
var __1 = require("../");
test('add', function () {
    var a = new __1.Uint8(4);
    var b = new __1.Uint8(5);
    expect(a.opAdd(b).toNumber()).toBe(9);
});
test('add', function () {
    var a = new __1.Uint16(15);
    var b = new __1.Uint16(20);
    expect(a.opAdd(b).toNumber()).toBe(35);
});
test('add', function () {
    var a = new __1.Uint8(100);
    var b = 27;
    expect(a.opAdd(b).toNumber()).toBe(127);
});
test('sub', function () {
    var a = new __1.Uint16(100);
    var b = new __1.Uint16(1);
    expect(a.opSub(b).toNumber()).toBe(99);
});
test('mul', function () {
    var a = new __1.Uint16(5);
    var b = new __1.Uint16(2);
    expect(a.opMul(b).toNumber()).toBe(10);
});
test('div', function () {
    var a = new __1.Uint16(40);
    var b = new __1.Uint16(5);
    expect(a.opDiv(b).toNumber()).toBe(8);
});
test('div', function () {
    var a = new __1.Uint16(40);
    var b = new __1.Uint16(11);
    expect(a.opDiv(b).toNumber()).toBe(3);
});
test('mod', function () {
    var a = new __1.Uint16(4);
    var b = new __1.Uint16(2);
    expect(a.opMod(b).toNumber()).toBe(0);
});
test('mod', function () {
    var a = new __1.Uint16(100);
    var b = new __1.Uint16(65);
    expect(a.opMod(b).toNumber()).toBe(35);
});
test('pow', function () {
    var a = new __1.Uint16(3);
    var b = new __1.Uint16(2);
    expect(a.opPow(b).toNumber()).toBe(9);
});
test('pow', function () {
    var a = new __1.Uint16(4);
    var b = new __1.Uint16(3);
    expect(a.opPow(b).toNumber()).toBe(64);
});
test('cast', function () {
    var a = new __1.Uint8(4);
    var b = a.genCasted(__1.Bytes);
    expect(b).toBeInstanceOf(__1.Bytes);
    expect(b.uu.toArray()).toStrictEqual([4]);
});
test('fromUintable', function () {
    expect(new __1.Uint8(4).toNumber()).toBe(4);
    expect(new __1.Uint16(new __1.Uint8(5)).toNumber()).toBe(5);
});
test('toNumberString', function () {
    var a = new __1.Uint16(43);
    expect(a.toNumberString(10)).toBe('43');
    expect(a.toNumberString(10)).toBe('43');
});
test('comparison', function () {
    var a = new __1.Uint8(4);
    var b = new __1.Uint16(4);
    expect(a.compLt(b)).toBe(false);
    expect(a.compLte(b)).toBe(true);
    expect(a.compGt(b)).toBe(false);
    expect(a.compGte(b)).toBe(true);
});
test('comparison', function () {
    var a = new __1.Uint8(7);
    var b = 6;
    expect(a.compLt(b)).toBe(false);
    expect(a.compLte(b)).toBe(false);
    expect(a.compGt(b)).toBe(true);
    expect(a.compGte(b)).toBe(true);
});
