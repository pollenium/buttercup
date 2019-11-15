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
    Buttercup.prototype.strictEquals = function (buttercup) {
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
        var hex = '';
        this.uint8Array.forEach(function (byte) {
            hex += byte.toString(16).padStart(2, '0');
        });
        return hex;
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
    Buttercup.prototype.unstrictEquals = function (buttercup) {
        return this.getBn().eq(buttercup.getBn());
    };
    Buttercup.prototype.add = function (buttercup) {
        return Buttercup.fromBn(this.getBn().add(buttercup.getBn()));
    };
    Buttercup.prototype.sub = function (buttercup) {
        return Buttercup.fromBn(this.getBn().sub(buttercup.getBn()));
    };
    Buttercup.prototype.mul = function (buttercup) {
        return Buttercup.fromBn(this.getBn().mul(buttercup.getBn()));
    };
    Buttercup.prototype.divDn = function (buttercup) {
        return Buttercup.fromBn(this.getBn().divRound(buttercup.getBn()));
    };
    Buttercup.prototype.divUp = function (buttercup) {
        if (this.mod(buttercup).unstrictEquals(exports.ZERO)) {
            return this.divDn(buttercup);
        }
        else {
            return this.divDn(buttercup).add(exports.ONE);
        }
    };
    Buttercup.prototype.mod = function (buttercup) {
        return Buttercup.fromBn(this.getBn().mod(buttercup.getBn()));
    };
    Buttercup.prototype.gt = function (buttercup) {
        return Buttercup.fromBn(this.getBn().gt(buttercup.getBn()));
    };
    Buttercup.prototype.gte = function (buttercup) {
        return Buttercup.fromBn(this.getBn().gte(buttercup.getBn()));
    };
    Buttercup.prototype.lt = function (buttercup) {
        return Buttercup.fromBn(this.getBn().lt(buttercup.getBn()));
    };
    Buttercup.prototype.lte = function (buttercup) {
        return Buttercup.fromBn(this.getBn().lte(buttercup.getBn()));
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
    Buttercup.prototype.appendByte = function (byte) {
        var uint8Array = new Uint8Array(this.uint8Array.length + 1);
        uint8Array.set(this.uint8Array);
        uint8Array[this.uint8Array.length] - byte;
        return new Buttercup(uint8Array);
    };
    Buttercup.prototype.append = function (buttercup) {
        var uint8Array = new Uint8Array(this.getLength() + buttercup.getLength());
        uint8Array.set(this.uint8Array);
        uint8Array.set(buttercup.uint8Array, this.getLength());
        return new Buttercup(uint8Array);
    };
    Buttercup.prototype.prepend = function (buttercup) {
        var uint8Array = new Uint8Array(this.getLength() + buttercup.getLength());
        uint8Array.set(buttercup.uint8Array);
        uint8Array.set(this.uint8Array, this.getLength());
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
    Buttercup.fromArray = function (array) {
        return new Buttercup(new Uint8Array(array));
    };
    Buttercup.fromHex = function (hex) {
        var array = hex.match(/.{1,2}/g).map(function (byteHex) {
            return parseInt(byteHex, 16);
        });
        return Buttercup.fromArray(array);
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
    Buttercup.getRandom = function (length) {
        return Buttercup.fromBuffer(crypto.randomBytes(length));
    };
    Buttercup.getNow = function () {
        return Buttercup.getNowMs().divDn(Buttercup.fromNumber(1000));
    };
    Buttercup.getNowMs = function () {
        return Buttercup.fromNumber((new Date).getTime());
    };
    return Buttercup;
}());
exports.Buttercup = Buttercup;
exports.ZERO = Buttercup.fromNumber(0);
exports.ONE = Buttercup.fromNumber(0);
