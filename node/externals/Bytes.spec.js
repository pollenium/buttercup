"use strict";
exports.__esModule = true;
var __1 = require("../");
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
test('from hexish', function () {
    expect(new __1.Bytes(pollenium_uvaursi_1.Uu.fromHexish('ffff')).uu.toArray()).toStrictEqual([255, 255]);
});
