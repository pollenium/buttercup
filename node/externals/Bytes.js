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
var DynButtercup_1 = require("../buttercups/DynButtercup");
var uvaursi = __importStar(require("pollenium-uvaursi"));
var Bytes = /** @class */ (function (_super) {
    __extends(Bytes, _super);
    function Bytes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bytes.genEmpty = function () {
        return Bytes.fromArray([]);
    };
    Bytes.fromArray = function (array) {
        return new Bytes(uvaursi.fromArray(array));
    };
    Bytes.fromHexish = function (hexish) {
        return new Bytes(uvaursi.fromHexish(hexish));
    };
    return Bytes;
}(DynButtercup_1.DynButtercup));
exports.Bytes = Bytes;
