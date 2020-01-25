"use strict";
exports.__esModule = true;
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
var Buttercup = /** @class */ (function () {
    function Buttercup(uish) {
        this.uu = pollenium_uvaursi_1.Uu.wrap(uish);
    }
    Buttercup.prototype.genCasted = function (ExternalClass) {
        return new ExternalClass(this.uu.u.slice());
    };
    return Buttercup;
}());
exports.Buttercup = Buttercup;
