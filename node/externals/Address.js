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
var fixButtercups_1 = require("../buttercups/fixButtercups");
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address(uish) {
        var _this = _super.call(this, 20, uish) || this;
        _this.isNull = null;
        return _this;
    }
    Address.prototype.getIsNull = function () {
        if (this.isNull !== null) {
            return this.isNull;
        }
        this.isNull = this.uu.u.every(function (byte) {
            return byte === 0;
        });
        return this.isNull;
    };
    Address.genNull = function () {
        return new Address(pollenium_uvaursi_1.Uu.genZeros(20));
    };
    return Address;
}(fixButtercups_1.FixButtercup));
exports.Address = Address;
