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
var FixedBytes = /** @class */ (function (_super) {
    __extends(FixedBytes, _super);
    function FixedBytes(length, uint8Array) {
        return _super.call(this, uint8Array) || this;
    }
    FixedBytes.prototype.getUtf8 = function () {
        return this.getBuffer().toString('utf8');
    };
    FixedBytes.prototype.equals = function (buttercup) {
        throw new Error('Use either unstrict equals or strict equals');
    };
    FixedBytes.prototype.strictEquals = function (buttercup) {
        return this.getBn().eq(buttercup.getBn());
    };
    return FixedBytes;
}(FixedButtercup));
exports.FixedBytes = FixedBytes;
