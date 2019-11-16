"use strict";
exports.__esModule = true;
var _1 = require("./");
test('add', function () {
    expect(_1.uintMath.add(_1.Uint8, new _1.Uint8(_1.from.number(0)), new _1.Uint8(_1.from.number(0))).getNumber()).toBe(0);
});
