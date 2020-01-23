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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var fixButtercups_1 = require("../buttercups/fixButtercups");
var uvaursi = __importStar(require("pollenium-uvaursi"));
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address(uint8Array) {
        return _super.call(this, 20, uint8Array) || this;
    }
    Address.prototype.getIsNull = function () {
        return this.getIsOnlyZeroes();
    };
    Address.genNull = function () {
        return new Address(new Uint8Array(20).fill(0));
    };
    Address.fromArray = function (array) {
        return new Address(uvaursi.fromArray(array));
    };
    Address.fromHexish = function (hexish) {
        return new Address(uvaursi.fromHexish(hexish));
    };
    return Address;
}(fixButtercups_1.FixButtercup));
exports.Address = Address;
