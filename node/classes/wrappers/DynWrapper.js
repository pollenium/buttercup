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
var Wrapper_1 = require("./Wrapper");
var DynWrapper = /** @class */ (function (_super) {
    __extends(DynWrapper, _super);
    function DynWrapper(uint8Array) {
        return _super.call(this, uint8Array) || this;
    }
    return DynWrapper;
}(Wrapper_1.Wrapper));
exports.DynWrapper = DynWrapper;
