"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var from = __importStar(require("./from"));
var __1 = require("../");
var bn_js_1 = __importDefault(require("bn.js"));
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var externals = {
    uintish: [
        __1.Uint8,
    ],
    bytish: [
        __1.Bytes
    ]
};
var fixtures = [
    {
        uint8Array: new Uint8Array(0),
        inputs: [
            { buffer: Buffer.from([]) },
            { array: [] },
            { hexish: '' },
            { hexish: '0x' },
            { uintNumber: 0 },
            { uintBn: new bn_js_1["default"](0) },
            { uintBignumber: new bignumber_js_1["default"](0) }
        ]
    },
    {
        uint8Array: new Uint8Array([0]),
        inputs: [
            { buffer: Buffer.from([0]) },
            { array: [0] },
            { hexish: '00' },
            { hexish: '0x00' }
        ]
    },
    {
        uint8Array: new Uint8Array([1]),
        inputs: [
            { buffer: Buffer.from([1]) },
            { array: [1] },
            { hexish: '01' },
            { hexish: '0x01' },
            { uintNumber: 1 },
            { uintBn: new bn_js_1["default"](1) },
            { uintBignumber: new bignumber_js_1["default"](1) }
        ]
    },
    {
        uint8Array: new Uint8Array([255]),
        inputs: [
            { buffer: Buffer.from([255]) },
            { array: [255] },
            { hexish: 'ff' },
            { hexish: '0xff' },
            { uintNumber: 255 },
            { uintBn: new bn_js_1["default"](255) },
            { uintBignumber: new bignumber_js_1["default"](255) }
        ]
    },
    {
        uint8Array: new Uint8Array([255, 1]),
        inputs: [
            { hexish: 'FF01' },
            { hexish: '0xff01' },
            { hexish: '0xFF01' },
            { hexish: '0xfF01' }
        ]
    },
    {
        uint8Array: new Uint8Array([1, 0]),
        inputs: [
            { buffer: Buffer.from([1, 0]) },
            { array: [1, 0] },
            { hexish: '0100' },
            { hexish: '0x0100' },
            { uintNumber: 256 },
            { uintBn: new bn_js_1["default"](256) },
            { uintBignumber: new bignumber_js_1["default"](256) }
        ]
    },
    {
        uint8Array: new Uint8Array([255, 255]),
        inputs: [
            { buffer: Buffer.from([255, 255]) },
            { array: [255, 255] },
            { hexish: 'ffff' },
            { hexish: 'fFFf' },
            { hexish: '0xffff' },
            { hexish: '0xFFFF' },
            { uintNumber: 256 * 256 - 1 },
            { uintBn: new bn_js_1["default"](256 * 256 - 1) },
            { uintBignumber: new bignumber_js_1["default"](256 * 256 - 1) }
        ]
    },
    {
        uint8Array: new Uint8Array([1, 0, 0]),
        inputs: [
            { buffer: Buffer.from([1, 0, 0]) },
            { array: [1, 0, 0] },
            { hexish: '010000' },
            { hexish: '0x010000' },
            { uintNumber: 256 * 256 },
            { uintBn: new bn_js_1["default"](256 * 256) },
            { uintBignumber: new bignumber_js_1["default"](256 * 256) }
        ]
    }
];
var lengthFixtures = fixtures.forEach(function (fixture, index) {
    var externalTypes = Object.keys(externals);
    externalTypes.forEach(function (externalType) {
        externals[externalType].forEach(function (External) {
            var uint8Array = fixture.uint8Array;
            if (uint8Array.length > External.LENGTH) {
                return;
            }
            var reference = from.uint8Array(External, fixture.uint8Array);
            fixture.inputs.forEach(function (input) {
                var fromKey = Object.keys(input)[0];
                var fromFunc = from[fromKey];
                var fromValue = input[fromKey];
                test("fixture " + External.name + " #" + index + " " + fromKey + ": '" + fromValue + "'", function () {
                    // console.log(`fixture ${External.name} #${index} ${fromKey}: '${fromValue}'`)
                    // console.log('External', External)
                    var fromInstance = fromFunc(External, fromValue);
                    // console.log('fromInstance', fromInstance)
                    expect(fromInstance.getUint8Array()).toBeInstanceOf(Uint8Array);
                    expect(fromInstance.getUint8Array()).toStrictEqual(reference.getUint8Array());
                });
            });
        });
    });
});
