"use strict";
exports.__esModule = true;
var __1 = require("../");
test('from hexish', function () {
    expect(__1.Bytes.fromHexish('ffff').getArray()).toStrictEqual([255, 255]);
});