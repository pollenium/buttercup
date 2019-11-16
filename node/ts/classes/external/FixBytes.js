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
var FixButtercup_1 = require("../internal/FixButtercup");
var FixBytes = /** @class */ (function (_super) {
    __extends(FixBytes, _super);
    function FixBytes(length, uint8Array) {
        return _super.call(this, length, uint8Array) || this;
    }
    return FixBytes;
}(FixButtercup_1.FixButtercup));
exports.FixBytes = FixBytes;
