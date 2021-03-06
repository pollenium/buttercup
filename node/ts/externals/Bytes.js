"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var DynWrapper_1 = require("../wrappers/DynWrapper");
var uint8Array_1 = require("../utils/uint8Array");
var from = __importStar(require("../utils/from"));
exports.Bytes = /** @class */ (function (_super) {
    __extends(Bytes, _super);
    function Bytes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bytes.prototype.getUtf8 = function () {
        return this.getBuffer().toString('utf8');
    };
    Bytes.prototype.getPaddedLeft = function (length) {
        return new Bytes(uint8Array_1.getPaddedLeft(length, this.cloneUint8Array()));
    };
    Bytes.prototype.getPaddedRight = function (length) {
        return new Bytes(uint8Array_1.getPaddedRight(length, this.cloneUint8Array()));
    };
    Bytes.prototype.getBytePrepended = function (byte) {
        var uint8Array = new Uint8Array(this.getLength() + 1);
        uint8Array[0] = byte;
        uint8Array.set(this.cloneUint8Array(), 1);
        return new Bytes(uint8Array);
    };
    Bytes.prototype.getByteAppended = function (byte) {
        var uint8Array = new Uint8Array(this.getLength() + 1);
        uint8Array.set(this.cloneUint8Array());
        uint8Array[this.getLength()] - byte;
        return new Bytes(uint8Array);
    };
    Bytes.prototype.getAppended = function (wrapper) {
        var uint8Array = new Uint8Array(this.getLength() + wrapper.getLength());
        uint8Array.set(this.cloneUint8Array());
        uint8Array.set(wrapper.cloneUint8Array(), this.getLength());
        return new Bytes(uint8Array);
    };
    Bytes.prototype.getPrepended = function (wrapper) {
        var uint8Array = new Uint8Array(this.getLength() + wrapper.getLength());
        uint8Array.set(wrapper.cloneUint8Array());
        uint8Array.set(this.cloneUint8Array(), this.getLength());
        return new Bytes(uint8Array);
    };
    Bytes.fromUint8Array = function (uint8Array) {
        return from.uint8Array(exports.Bytes, uint8Array);
    };
    Bytes.fromArray = function (array) {
        return from.array(exports.Bytes, array);
    };
    return Bytes;
}(DynWrapper_1.DynWrapper));
