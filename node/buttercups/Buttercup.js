"use strict";
exports.__esModule = true;
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
var Buttercup = /** @class */ (function () {
    function Buttercup(uint8Array) {
        this.uint8Array = uint8Array;
    }
    Buttercup.prototype.genCasted = function (ExternalClass) {
        return new ExternalClass(this.uint8Array.slice());
    };
    Buttercup.prototype.toUvaursi = function () {
        if (this.uvaursi) {
            return this.uvaursi;
        }
        this.uvaursi = new pollenium_uvaursi_1.Uvaursi(this.uint8Array);
        return this.uvaursi;
    };
    return Buttercup;
}());
exports.Buttercup = Buttercup;
