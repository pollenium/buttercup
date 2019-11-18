"use strict";
exports.__esModule = true;
var Wrapper = /** @class */ (function () {
    function Wrapper(uint8Array) {
        this.uint8Array = uint8Array;
    }
    Wrapper.prototype.cloneUint8Array = function () {
        return this.uint8Array.slice();
    };
    Wrapper.prototype.getLength = function () {
        return this.uint8Array.length;
    };
    Wrapper.prototype.getIsEqual = function (wrapper) {
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
    // slice(start: number, end: number): Wrapper {
    //   return new Wrapper(this.cloneUint8Array().slice(start, end))
    // }
    // getSha256Hash(): Wrapper {
    //   return Wrapper.fromBuffer(crypto.createHash('sha256').update(this.uint8Array).digest())
    // }
    Wrapper.prototype.getArray = function () {
        return Array.from(this.cloneUint8Array());
    };
    Wrapper.prototype.getHex = function () {
        var hex = '';
        this.uint8Array.forEach(function (byte) {
            hex += byte.toString(16).padStart(2, '0');
        });
        return hex;
    };
    Wrapper.prototype.getPhex = function () {
        return "0x" + this.getHex();
    };
    Wrapper.prototype.getBuffer = function () {
        return Buffer.from(this.uint8Array);
    };
    // getXor(wrapper: Wrapper): Wrapper {
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
    //   return new Wrapper(xorUint8Array)
    // }
    Wrapper.prototype.compare = function (wrapper) {
        return this.getBuffer().compare(wrapper.getBuffer());
    };
    return Wrapper;
}());
exports.Wrapper = Wrapper;
