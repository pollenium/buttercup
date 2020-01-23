"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var uvaursi = __importStar(require("pollenium-uvaursi"));
var Buttercup = /** @class */ (function () {
    function Buttercup(uint8Array) {
        this.uint8Array = uint8Array;
    }
    Buttercup.prototype.toUint8Array = function () {
        return this.uint8Array.slice();
    };
    Buttercup.prototype.getLength = function () {
        return this.uint8Array.length;
    };
    Buttercup.prototype.getIsEqual = function (buttercup) {
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
    Buttercup.prototype.toArray = function () {
        return Array.from(this.toUint8Array());
    };
    Buttercup.prototype.toHex = function () {
        return uvaursi.toHex(this.uint8Array);
    };
    Buttercup.prototype.toPhex = function () {
        return uvaursi.toPhex(this.uint8Array);
    };
    Buttercup.prototype.getCasted = function (ExternalClass) {
        return new ExternalClass(this.toUint8Array());
    };
    Buttercup.prototype.getIsOnlyZeroes = function () {
        if (this.isOnlyZeros) {
            return this.isOnlyZeros;
        }
        for (var i = 0; i < this.uint8Array.length; i++) {
            if (this.uint8Array[i] !== 0) {
                return false;
            }
        }
        return true;
    };
    return Buttercup;
}());
exports.Buttercup = Buttercup;
