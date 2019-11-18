"use strict";
exports.__esModule = true;
var Buttercup = /** @class */ (function () {
    function Buttercup(uint8Array) {
        this.uint8Array = uint8Array;
    }
    Buttercup.prototype.cloneUint8Array = function () {
        return this.uint8Array.slice();
    };
    Buttercup.prototype.getLength = function () {
        return this.uint8Array.length;
    };
    Buttercup.prototype.getIsEqual = function (wrapper) {
        if (this.uint8Array.length !== wrapper.uint8Array.length) {
            return false;
        }
        for (var i = 0; i < this.uint8Array.length; i++) {
            if (this.uint8Array[i] !== wrapper.uint8Array[i]) {
                return false;
            }
        }
        return true;
    };
    Buttercup.prototype.getSlice = function (start, end) {
        return new Buttercup(this.cloneUint8Array().slice(start, end));
    };
    Buttercup.prototype.getArray = function () {
        return Array.from(this.cloneUint8Array());
    };
    Buttercup.prototype.getHex = function () {
        var hex = '';
        this.uint8Array.forEach(function (byte) {
            hex += byte.toString(16).padStart(2, '0');
        });
        return hex;
    };
    Buttercup.prototype.getPhex = function () {
        return "0x" + this.getHex();
    };
    Buttercup.prototype.getBuffer = function () {
        return Buffer.from(this.uint8Array);
    };
    // getXor(wrapper: Buttercup): Buttercup {
    //   if (this.getLength() !== wrapper.getLength()) {
    //     throw new Error('Cannot xor, length mismatch')
    //   }
    //
    //   const xorUint8Array = new Uint8Array(wrapper.getLength())
    //
    //   for (let i = 0; i < wrapper.getLength(); i++) {
    //     // eslint-disable-next-line no-bitwise
    //     xorUint8Array[i] = this.uint8Array[i] ^ wrapper.uint8Array[i]
    //   }
    //
    //   return new Buttercup(xorUint8Array)
    // }
    Buttercup.prototype.compare = function (wrapper) {
        return this.getBuffer().compare(wrapper.getBuffer());
    };
    return Buttercup;
}());
exports.Buttercup = Buttercup;
