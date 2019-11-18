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
    return from.uintBn(UintClass, a.getBn().add(b.getBn()));
}
exports.add = add;
function sub(UintClass, a, b) {
    return from.uintBn(UintClass, a.getBn().sub(b.getBn()));
}
exports.sub = sub;
// sub(uint: Uint): Uint {
//   return new Uint(this.bitsLength, from.bn(
//     this.getBn().sub(uint.getBn())
//   ))
// }
//
// mul(uint: Uint): Uint {
//   return new Uint(this.bitsLength, from.bn(
//     this.getBn().mul(uint.getBn())
//   ))
// }
//
// divDn(uint: Uint): Uint {
//   return new Uint(this.bitsLength, from.bn(
//     this.getBn().divRound(uint.getBn())
//   ))
// }
//
// divUp(uint: Uint): Uint {
//   if (this.mod(uint).unstrictEquals(ZERO)) {
//     return this.divDn(uint)
//   } else {
//     return this.divDn(uint).add(ONE)
//   }
// }
//
// mod(uint: Uint): Uint {
//   return new Uint(this.bitsLength, from.bn(
//     this.getBn().mod(uint.getBn())
//   ))
// }
//
// gt(uint: Uint): Uint {
//   return new Uint(this.bitsLength, from.bn(
//     this.getBn().gt(uint.getBn())
//   ))
// }
//
// gte(uint: Uint): Uint {
//   return new Uint(this.bitsLength, from.bn(
//     this.getBn().gte(uint.getBn())
//   ))
// }
//
// lt(uint: Uint): Uint {
//   return new Uint(this.bitsLength, from.bn(
//     this.getBn().lt(uint.getBn())
//   ))
// }
//
// lte(uint: Uint): Uint {
//   return new Uint(this.bitsLength, from.bn(
//     this.getBn().lte(uint.getBn())
//   ))
// }
