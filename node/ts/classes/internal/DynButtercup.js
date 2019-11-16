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
var Buttercup_1 = require("./Buttercup");
var DynButtercup = /** @class */ (function (_super) {
    __extends(DynButtercup, _super);
    function DynButtercup(uint8Array) {
        return _super.call(this, uint8Array) || this;
    }
    return DynButtercup;
}(Buttercup_1.Buttercup));
exports.DynButtercup = DynButtercup;
