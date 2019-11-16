"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var from = __importStar(require("./from"));
function add(UintClass, a, b) {
    return new UintClass(from.bn(a.getBn().add(b.getBn())));
}
exports.add = add;
