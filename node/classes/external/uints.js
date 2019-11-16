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
var Uint_1 = require("../internal/Uint");
exports.Uint8 = /** @class */ (function (_super) {
    __extends(Uint8, _super);
    function Uint8(uint8Array) {
        return _super.call(this, 8, uint8Array) || this;
    }
    return Uint8;
}(Uint_1.Uint));
