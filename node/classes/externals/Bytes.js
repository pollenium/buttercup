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
exports.__esModule = true;
var DynWrapper_1 = require("../wrappers/DynWrapper");
exports.Bytes = /** @class */ (function (_super) {
    __extends(Bytes, _super);
    function Bytes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bytes.prototype.getUtf8 = function () {
        return this.getBuffer().toString('utf8');
    };
    Bytes.prototype.getPaddedLeft = function (length) {
        if (this.getLength() > length) {
            throw new Error("Cannot pad, wrapper.length (" + this.getLength() + ") > length (" + length + ")");
        }
        var uint8Array = (new Uint8Array(length)).fill(0);
        uint8Array.set(this.cloneUint8Array(), length - this.getLength());
        return new Bytes(uint8Array);
    };
    Bytes.prototype.prependByte = function (byte) {
        var uint8Array = new Uint8Array(this.getLength() + 1);
        uint8Array[0] = byte;
        uint8Array.set(this.cloneUint8Array(), 1);
        return new Bytes(uint8Array);
    };
    Bytes.prototype.appendByte = function (byte) {
        var uint8Array = new Uint8Array(this.getLength() + 1);
        uint8Array.set(this.cloneUint8Array());
        uint8Array[this.getLength()] - byte;
        return new Bytes(uint8Array);
    };
    Bytes.prototype.append = function (wrapper) {
        var uint8Array = new Uint8Array(this.getLength() + wrapper.getLength());
        uint8Array.set(this.cloneUint8Array());
        uint8Array.set(wrapper.cloneUint8Array(), this.getLength());
        return new Bytes(uint8Array);
    };
    Bytes.prototype.prepend = function (wrapper) {
        var uint8Array = new Uint8Array(this.getLength() + wrapper.getLength());
        uint8Array.set(wrapper.cloneUint8Array());
        uint8Array.set(this.cloneUint8Array(), this.getLength());
        return new Bytes(uint8Array);
    };
    return Bytes;
}(DynWrapper_1.DynWrapper));
