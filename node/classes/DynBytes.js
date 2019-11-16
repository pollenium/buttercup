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
var FixedButtercup_1 = require("./classes/FixedButtercup");
var FixedBytes = /** @class */ (function (_super) {
    __extends(FixedBytes, _super);
    function FixedBytes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixedBytes.prototype.getUtf8 = function () {
        return this.getBuffer().toString('utf8');
    };
    FixedBytes.prototype.getPaddedLeft = function (length) {
        if (this.getLength() > length) {
            throw new Error("Cannot pad, buttercup.length (" + this.getLength() + ") > length (" + length + ")");
        }
        var uint8Array = (new Uint8Array(length)).fill(0);
        uint8Array.set(this.uint8Array, length - this.getLength());
        return new Buttercup(uint8Array);
    };
    FixedBytes.prototype.prependByte = function (byte) {
        var uint8Array = new Uint8Array(this.uint8Array.length + 1);
        uint8Array[0] = byte;
        uint8Array.set(this.uint8Array, 1);
        return new Buttercup(uint8Array);
    };
    FixedBytes.prototype.appendByte = function (byte) {
        var uint8Array = new Uint8Array(this.uint8Array.length + 1);
        uint8Array.set(this.uint8Array);
        uint8Array[this.uint8Array.length] - byte;
        return new Buttercup(uint8Array);
    };
    FixedBytes.prototype.append = function (buttercup) {
        var uint8Array = new Uint8Array(this.getLength() + buttercup.getLength());
        uint8Array.set(this.uint8Array);
        uint8Array.set(buttercup.uint8Array, this.getLength());
        return new Buttercup(uint8Array);
    };
    FixedBytes.prototype.prepend = function (buttercup) {
        var uint8Array = new Uint8Array(this.getLength() + buttercup.getLength());
        uint8Array.set(buttercup.uint8Array);
        uint8Array.set(this.uint8Array, this.getLength());
        return new Buttercup(uint8Array);
    };
    return FixedBytes;
}(FixedButtercup_1.FixedButtercup));
exports.FixedBytes = FixedBytes;
