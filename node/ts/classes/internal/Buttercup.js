"use strict";
exports.__esModule = true;
var Buttercup = /** @class */ (function () {
    function Buttercup(uint8Array) {
        this.uint8Array = uint8Array;
    }
    Buttercup.prototype.getUint8Array = function () {
        return this.uint8Array.slice();
    };
    Buttercup.prototype.getLength = function () {
        return this.uint8Array.length;
    };
    Buttercup.prototype.getIsStrictEqual = function (buttercup) {
        if (this.uint8Array.length !== buttercup.uint8Array.length) {
            return false;
        }
        for (var i = 0; i < this.uint8Array.length; i++) {
            if (this.uint8Array[i] !== buttercup.uint8Array[i]) {
                return false;
            }
        }
        return true;
    };
    // slice(start: number, end: number): Buttercup {
    //   return new Buttercup(this.getUint8Array().slice(start, end))
    // }
    // getSha256Hash(): Buttercup {
    //   return Buttercup.fromBuffer(crypto.createHash('sha256').update(this.uint8Array).digest())
    // }
    Buttercup.prototype.getArray = function () {
        return Array.from(this.getUint8Array());
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
    // getXor(buttercup: Buttercup): Buttercup {
    //   if (this.getLength() !== buttercup.getLength()) {
    //     throw new Error('Cannot xor, length mismatch')
    //   }
    //
    //   const xorUint8Array = new Uint8Array(buttercup.getLength())
    //
    //   for (let i = 0; i < buttercup.getLength(); i++) {
    //     // eslint-disable-next-line no-bitwise
    //     xorUint8Array[i] = this.uint8Array[i] ^ buttercup.uint8Array[i]
    //   }
    //
    //   return new Buttercup(xorUint8Array)
    // }
    Buttercup.prototype.compare = function (buttercup) {
        return this.getBuffer().compare(buttercup.getBuffer());
    };
    return Buttercup;
}());
exports.Buttercup = Buttercup;
