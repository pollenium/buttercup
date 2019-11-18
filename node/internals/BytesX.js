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
var fixWrappers_1 = require("../wrappers/fixWrappers");
var BytesX = /** @class */ (function (_super) {
    __extends(BytesX, _super);
    function BytesX(length, uint8Array) {
        return _super.call(this, length, uint8Array) || this;
    }
    return BytesX;
}(fixWrappers_1.FixRightWrapper));
exports.BytesX = BytesX;
