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
var crypto = __importStar(require("crypto"));
var bn_js_1 = __importDefault(require("bn.js"));
var Buttercup = /** @class */ (function () {
    function Buttercup(uint8Array) {
        this.uint8Array = uint8Array;
    }
    Buttercup.prototype.getLength = function () {
        return this.uint8Array.length;
    };
    Buttercup.prototype.equals = function (buttercup) {
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
    Buttercup.prototype.slice = function (start, end) {
        return new Buttercup(this.uint8Array.slice(start, end));
    };
    Buttercup.prototype.getHash = function () {
        return Buttercup.fromBuffer(crypto.createHash('sha256').update(this.uint8Array).digest());
    };
    Buttercup.prototype.getHex = function () {
        return this.getBuffer().toString('hex');
    };
    Buttercup.prototype.getPhex = function () {
        return "0x" + this.getHex();
    };
    Buttercup.prototype.getUtf8 = function () {
        return this.getBuffer().toString('utf8');
    };
    Buttercup.prototype.getBuffer = function () {
        return Buffer.from(this.uint8Array);
    };
    Buttercup.prototype.getPaddedLeft = function (length) {
        if (this.getLength() > length) {
            throw new Error("Cannot pad, buttercup.length (" + this.getLength() + ") > length (" + length + ")");
        }
        var uint8Array = (new Uint8Array(length)).fill(0);
        uint8Array.set(this.uint8Array, length - this.getLength());
        return new Buttercup(uint8Array);
    };
    Buttercup.prototype.prependByte = function (byte) {
        var uint8Array = new Uint8Array(this.uint8Array.length + 1);
        uint8Array[0] = byte;
        uint8Array.set(this.uint8Array, 1);
        return new Buttercup(uint8Array);
    };
    Buttercup.prototype.append = function (buttercup) {
        var uint8Array = new Uint8Array(this.getLength() + buttercup.getLength());
        uint8Array.set(this.uint8Array);
        uint8Array.set(buttercup.uint8Array, this.getLength());
        return new Buttercup(uint8Array);
    };
    Buttercup.prototype.getBn = function () {
        return new bn_js_1["default"](this.getHex(), 16);
    };
    Buttercup.prototype.getNumber = function () {
        return this.getBn().toNumber();
    };
    Buttercup.prototype.getXor = function (buttercup) {
        if (this.getLength() !== buttercup.getLength()) {
            throw new Error('Cannot xor, length mismatch');
        }
        var xorUint8Array = new Uint8Array(buttercup.getLength());
        for (var i = 0; i < buttercup.getLength(); i++) {
            // eslint-disable-next-line no-bitwise
            xorUint8Array[i] = this.uint8Array[i] ^ buttercup.uint8Array[i];
        }
        return new Buttercup(xorUint8Array);
    };
    Buttercup.prototype.compare = function (buttercup) {
        return this.getBuffer().compare(buttercup.getBuffer());
    };
    Buttercup.fromUtf8 = function (utf8) {
        return Buttercup.fromBuffer(Buffer.from(utf8, 'utf8'));
    };
    Buttercup.fromBuffer = function (buffer) {
        return new Buttercup(new Uint8Array(buffer));
    };
    Buttercup.fromHex = function (hex) {
        return Buttercup.fromBuffer(Buffer.from(hex, 'hex'));
    };
    Buttercup.fromPhex = function (phex) {
        return Buttercup.fromHex(phex.substr(2));
    };
    Buttercup.fromBn = function (bn) {
        return Buttercup.fromHex(bn.toString(16));
    };
    Buttercup.fromNumber = function (number) {
        return Buttercup.fromBn(new bn_js_1["default"](number));
    };
    Buttercup.random = function (length) {
        return Buttercup.fromBuffer(crypto.randomBytes(length));
    };
    return Buttercup;
}());
exports.Buttercup = Buttercup;
