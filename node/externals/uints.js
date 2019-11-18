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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
exports.__esModule = true;
var Uint_1 = require("../internals/Uint");
var from = __importStar(require("../utils/from"));
var uintMath = __importStar(require("../utils/uintMath"));
exports.Uint8 = (_a = /** @class */ (function (_super) {
        __extends(Uint8, _super);
        function Uint8(uint8Array) {
            return _super.call(this, Uint8.LENGTH, uint8Array) || this;
        }
        Uint8.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint8.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint8.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint8.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint8.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint8.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint8.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint8.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint8, uint8Array);
        };
        Uint8.fromArray = function (array) {
            return from.array(exports.Uint8, array);
        };
        Uint8.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint8, buffer);
        };
        Uint8.fromHexish = function (hexish) {
            return from.hexish(exports.Uint8, hexish);
        };
        Uint8.fromBn = function (bn) {
            return from.uintBn(exports.Uint8, bn);
        };
        Uint8.fromNumber = function (number) {
            return from.uintNumber(exports.Uint8, number);
        };
        return Uint8;
    }(Uint_1.Uint)),
    _a.LENGTH = 1,
    _a);
exports.Uint16 = (_b = /** @class */ (function (_super) {
        __extends(Uint16, _super);
        function Uint16(uint8Array) {
            return _super.call(this, Uint16.LENGTH, uint8Array) || this;
        }
        Uint16.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint16.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint16.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint16.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint16.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint16.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint16.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint16.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint16, uint8Array);
        };
        Uint16.fromArray = function (array) {
            return from.array(exports.Uint16, array);
        };
        Uint16.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint16, buffer);
        };
        Uint16.fromHexish = function (hexish) {
            return from.hexish(exports.Uint16, hexish);
        };
        Uint16.fromBn = function (bn) {
            return from.uintBn(exports.Uint16, bn);
        };
        Uint16.fromNumber = function (number) {
            return from.uintNumber(exports.Uint16, number);
        };
        return Uint16;
    }(Uint_1.Uint)),
    _b.LENGTH = 2,
    _b);
exports.Uint24 = (_c = /** @class */ (function (_super) {
        __extends(Uint24, _super);
        function Uint24(uint8Array) {
            return _super.call(this, Uint24.LENGTH, uint8Array) || this;
        }
        Uint24.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint24.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint24.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint24.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint24.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint24.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint24.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint24.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint24, uint8Array);
        };
        Uint24.fromArray = function (array) {
            return from.array(exports.Uint24, array);
        };
        Uint24.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint24, buffer);
        };
        Uint24.fromHexish = function (hexish) {
            return from.hexish(exports.Uint24, hexish);
        };
        Uint24.fromBn = function (bn) {
            return from.uintBn(exports.Uint24, bn);
        };
        Uint24.fromNumber = function (number) {
            return from.uintNumber(exports.Uint24, number);
        };
        return Uint24;
    }(Uint_1.Uint)),
    _c.LENGTH = 3,
    _c);
exports.Uint32 = (_d = /** @class */ (function (_super) {
        __extends(Uint32, _super);
        function Uint32(uint8Array) {
            return _super.call(this, Uint32.LENGTH, uint8Array) || this;
        }
        Uint32.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint32.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint32.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint32.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint32.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint32.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint32.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint32.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint32, uint8Array);
        };
        Uint32.fromArray = function (array) {
            return from.array(exports.Uint32, array);
        };
        Uint32.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint32, buffer);
        };
        Uint32.fromHexish = function (hexish) {
            return from.hexish(exports.Uint32, hexish);
        };
        Uint32.fromBn = function (bn) {
            return from.uintBn(exports.Uint32, bn);
        };
        Uint32.fromNumber = function (number) {
            return from.uintNumber(exports.Uint32, number);
        };
        return Uint32;
    }(Uint_1.Uint)),
    _d.LENGTH = 4,
    _d);
exports.Uint40 = (_e = /** @class */ (function (_super) {
        __extends(Uint40, _super);
        function Uint40(uint8Array) {
            return _super.call(this, Uint40.LENGTH, uint8Array) || this;
        }
        Uint40.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint40.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint40.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint40.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint40.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint40.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint40.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint40.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint40, uint8Array);
        };
        Uint40.fromArray = function (array) {
            return from.array(exports.Uint40, array);
        };
        Uint40.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint40, buffer);
        };
        Uint40.fromHexish = function (hexish) {
            return from.hexish(exports.Uint40, hexish);
        };
        Uint40.fromBn = function (bn) {
            return from.uintBn(exports.Uint40, bn);
        };
        Uint40.fromNumber = function (number) {
            return from.uintNumber(exports.Uint40, number);
        };
        return Uint40;
    }(Uint_1.Uint)),
    _e.LENGTH = 5,
    _e);
exports.Uint48 = (_f = /** @class */ (function (_super) {
        __extends(Uint48, _super);
        function Uint48(uint8Array) {
            return _super.call(this, Uint48.LENGTH, uint8Array) || this;
        }
        Uint48.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint48.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint48.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint48.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint48.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint48.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint48.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint48.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint48, uint8Array);
        };
        Uint48.fromArray = function (array) {
            return from.array(exports.Uint48, array);
        };
        Uint48.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint48, buffer);
        };
        Uint48.fromHexish = function (hexish) {
            return from.hexish(exports.Uint48, hexish);
        };
        Uint48.fromBn = function (bn) {
            return from.uintBn(exports.Uint48, bn);
        };
        Uint48.fromNumber = function (number) {
            return from.uintNumber(exports.Uint48, number);
        };
        return Uint48;
    }(Uint_1.Uint)),
    _f.LENGTH = 6,
    _f);
exports.Uint56 = (_g = /** @class */ (function (_super) {
        __extends(Uint56, _super);
        function Uint56(uint8Array) {
            return _super.call(this, Uint56.LENGTH, uint8Array) || this;
        }
        Uint56.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint56.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint56.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint56.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint56.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint56.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint56.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint56.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint56, uint8Array);
        };
        Uint56.fromArray = function (array) {
            return from.array(exports.Uint56, array);
        };
        Uint56.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint56, buffer);
        };
        Uint56.fromHexish = function (hexish) {
            return from.hexish(exports.Uint56, hexish);
        };
        Uint56.fromBn = function (bn) {
            return from.uintBn(exports.Uint56, bn);
        };
        Uint56.fromNumber = function (number) {
            return from.uintNumber(exports.Uint56, number);
        };
        return Uint56;
    }(Uint_1.Uint)),
    _g.LENGTH = 7,
    _g);
exports.Uint64 = (_h = /** @class */ (function (_super) {
        __extends(Uint64, _super);
        function Uint64(uint8Array) {
            return _super.call(this, Uint64.LENGTH, uint8Array) || this;
        }
        Uint64.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint64.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint64.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint64.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint64.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint64.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint64.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint64.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint64, uint8Array);
        };
        Uint64.fromArray = function (array) {
            return from.array(exports.Uint64, array);
        };
        Uint64.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint64, buffer);
        };
        Uint64.fromHexish = function (hexish) {
            return from.hexish(exports.Uint64, hexish);
        };
        Uint64.fromBn = function (bn) {
            return from.uintBn(exports.Uint64, bn);
        };
        Uint64.fromNumber = function (number) {
            return from.uintNumber(exports.Uint64, number);
        };
        return Uint64;
    }(Uint_1.Uint)),
    _h.LENGTH = 8,
    _h);
exports.Uint72 = (_j = /** @class */ (function (_super) {
        __extends(Uint72, _super);
        function Uint72(uint8Array) {
            return _super.call(this, Uint72.LENGTH, uint8Array) || this;
        }
        Uint72.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint72.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint72.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint72.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint72.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint72.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint72.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint72.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint72, uint8Array);
        };
        Uint72.fromArray = function (array) {
            return from.array(exports.Uint72, array);
        };
        Uint72.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint72, buffer);
        };
        Uint72.fromHexish = function (hexish) {
            return from.hexish(exports.Uint72, hexish);
        };
        Uint72.fromBn = function (bn) {
            return from.uintBn(exports.Uint72, bn);
        };
        Uint72.fromNumber = function (number) {
            return from.uintNumber(exports.Uint72, number);
        };
        return Uint72;
    }(Uint_1.Uint)),
    _j.LENGTH = 9,
    _j);
exports.Uint80 = (_k = /** @class */ (function (_super) {
        __extends(Uint80, _super);
        function Uint80(uint8Array) {
            return _super.call(this, Uint80.LENGTH, uint8Array) || this;
        }
        Uint80.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint80.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint80.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint80.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint80.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint80.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint80.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint80.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint80, uint8Array);
        };
        Uint80.fromArray = function (array) {
            return from.array(exports.Uint80, array);
        };
        Uint80.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint80, buffer);
        };
        Uint80.fromHexish = function (hexish) {
            return from.hexish(exports.Uint80, hexish);
        };
        Uint80.fromBn = function (bn) {
            return from.uintBn(exports.Uint80, bn);
        };
        Uint80.fromNumber = function (number) {
            return from.uintNumber(exports.Uint80, number);
        };
        return Uint80;
    }(Uint_1.Uint)),
    _k.LENGTH = 10,
    _k);
exports.Uint88 = (_l = /** @class */ (function (_super) {
        __extends(Uint88, _super);
        function Uint88(uint8Array) {
            return _super.call(this, Uint88.LENGTH, uint8Array) || this;
        }
        Uint88.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint88.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint88.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint88.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint88.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint88.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint88.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint88.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint88, uint8Array);
        };
        Uint88.fromArray = function (array) {
            return from.array(exports.Uint88, array);
        };
        Uint88.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint88, buffer);
        };
        Uint88.fromHexish = function (hexish) {
            return from.hexish(exports.Uint88, hexish);
        };
        Uint88.fromBn = function (bn) {
            return from.uintBn(exports.Uint88, bn);
        };
        Uint88.fromNumber = function (number) {
            return from.uintNumber(exports.Uint88, number);
        };
        return Uint88;
    }(Uint_1.Uint)),
    _l.LENGTH = 11,
    _l);
exports.Uint96 = (_m = /** @class */ (function (_super) {
        __extends(Uint96, _super);
        function Uint96(uint8Array) {
            return _super.call(this, Uint96.LENGTH, uint8Array) || this;
        }
        Uint96.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint96.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint96.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint96.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint96.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint96.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint96.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint96.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint96, uint8Array);
        };
        Uint96.fromArray = function (array) {
            return from.array(exports.Uint96, array);
        };
        Uint96.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint96, buffer);
        };
        Uint96.fromHexish = function (hexish) {
            return from.hexish(exports.Uint96, hexish);
        };
        Uint96.fromBn = function (bn) {
            return from.uintBn(exports.Uint96, bn);
        };
        Uint96.fromNumber = function (number) {
            return from.uintNumber(exports.Uint96, number);
        };
        return Uint96;
    }(Uint_1.Uint)),
    _m.LENGTH = 12,
    _m);
exports.Uint104 = (_o = /** @class */ (function (_super) {
        __extends(Uint104, _super);
        function Uint104(uint8Array) {
            return _super.call(this, Uint104.LENGTH, uint8Array) || this;
        }
        Uint104.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint104.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint104.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint104.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint104.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint104.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint104.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint104.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint104, uint8Array);
        };
        Uint104.fromArray = function (array) {
            return from.array(exports.Uint104, array);
        };
        Uint104.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint104, buffer);
        };
        Uint104.fromHexish = function (hexish) {
            return from.hexish(exports.Uint104, hexish);
        };
        Uint104.fromBn = function (bn) {
            return from.uintBn(exports.Uint104, bn);
        };
        Uint104.fromNumber = function (number) {
            return from.uintNumber(exports.Uint104, number);
        };
        return Uint104;
    }(Uint_1.Uint)),
    _o.LENGTH = 13,
    _o);
exports.Uint112 = (_p = /** @class */ (function (_super) {
        __extends(Uint112, _super);
        function Uint112(uint8Array) {
            return _super.call(this, Uint112.LENGTH, uint8Array) || this;
        }
        Uint112.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint112.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint112.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint112.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint112.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint112.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint112.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint112.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint112, uint8Array);
        };
        Uint112.fromArray = function (array) {
            return from.array(exports.Uint112, array);
        };
        Uint112.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint112, buffer);
        };
        Uint112.fromHexish = function (hexish) {
            return from.hexish(exports.Uint112, hexish);
        };
        Uint112.fromBn = function (bn) {
            return from.uintBn(exports.Uint112, bn);
        };
        Uint112.fromNumber = function (number) {
            return from.uintNumber(exports.Uint112, number);
        };
        return Uint112;
    }(Uint_1.Uint)),
    _p.LENGTH = 14,
    _p);
exports.Uint120 = (_q = /** @class */ (function (_super) {
        __extends(Uint120, _super);
        function Uint120(uint8Array) {
            return _super.call(this, Uint120.LENGTH, uint8Array) || this;
        }
        Uint120.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint120.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint120.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint120.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint120.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint120.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint120.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint120.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint120, uint8Array);
        };
        Uint120.fromArray = function (array) {
            return from.array(exports.Uint120, array);
        };
        Uint120.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint120, buffer);
        };
        Uint120.fromHexish = function (hexish) {
            return from.hexish(exports.Uint120, hexish);
        };
        Uint120.fromBn = function (bn) {
            return from.uintBn(exports.Uint120, bn);
        };
        Uint120.fromNumber = function (number) {
            return from.uintNumber(exports.Uint120, number);
        };
        return Uint120;
    }(Uint_1.Uint)),
    _q.LENGTH = 15,
    _q);
exports.Uint128 = (_r = /** @class */ (function (_super) {
        __extends(Uint128, _super);
        function Uint128(uint8Array) {
            return _super.call(this, Uint128.LENGTH, uint8Array) || this;
        }
        Uint128.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint128.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint128.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint128.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint128.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint128.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint128.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint128.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint128, uint8Array);
        };
        Uint128.fromArray = function (array) {
            return from.array(exports.Uint128, array);
        };
        Uint128.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint128, buffer);
        };
        Uint128.fromHexish = function (hexish) {
            return from.hexish(exports.Uint128, hexish);
        };
        Uint128.fromBn = function (bn) {
            return from.uintBn(exports.Uint128, bn);
        };
        Uint128.fromNumber = function (number) {
            return from.uintNumber(exports.Uint128, number);
        };
        return Uint128;
    }(Uint_1.Uint)),
    _r.LENGTH = 16,
    _r);
exports.Uint136 = (_s = /** @class */ (function (_super) {
        __extends(Uint136, _super);
        function Uint136(uint8Array) {
            return _super.call(this, Uint136.LENGTH, uint8Array) || this;
        }
        Uint136.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint136.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint136.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint136.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint136.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint136.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint136.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint136.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint136, uint8Array);
        };
        Uint136.fromArray = function (array) {
            return from.array(exports.Uint136, array);
        };
        Uint136.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint136, buffer);
        };
        Uint136.fromHexish = function (hexish) {
            return from.hexish(exports.Uint136, hexish);
        };
        Uint136.fromBn = function (bn) {
            return from.uintBn(exports.Uint136, bn);
        };
        Uint136.fromNumber = function (number) {
            return from.uintNumber(exports.Uint136, number);
        };
        return Uint136;
    }(Uint_1.Uint)),
    _s.LENGTH = 17,
    _s);
exports.Uint144 = (_t = /** @class */ (function (_super) {
        __extends(Uint144, _super);
        function Uint144(uint8Array) {
            return _super.call(this, Uint144.LENGTH, uint8Array) || this;
        }
        Uint144.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint144.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint144.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint144.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint144.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint144.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint144.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint144.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint144, uint8Array);
        };
        Uint144.fromArray = function (array) {
            return from.array(exports.Uint144, array);
        };
        Uint144.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint144, buffer);
        };
        Uint144.fromHexish = function (hexish) {
            return from.hexish(exports.Uint144, hexish);
        };
        Uint144.fromBn = function (bn) {
            return from.uintBn(exports.Uint144, bn);
        };
        Uint144.fromNumber = function (number) {
            return from.uintNumber(exports.Uint144, number);
        };
        return Uint144;
    }(Uint_1.Uint)),
    _t.LENGTH = 18,
    _t);
exports.Uint152 = (_u = /** @class */ (function (_super) {
        __extends(Uint152, _super);
        function Uint152(uint8Array) {
            return _super.call(this, Uint152.LENGTH, uint8Array) || this;
        }
        Uint152.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint152.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint152.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint152.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint152.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint152.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint152.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint152.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint152, uint8Array);
        };
        Uint152.fromArray = function (array) {
            return from.array(exports.Uint152, array);
        };
        Uint152.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint152, buffer);
        };
        Uint152.fromHexish = function (hexish) {
            return from.hexish(exports.Uint152, hexish);
        };
        Uint152.fromBn = function (bn) {
            return from.uintBn(exports.Uint152, bn);
        };
        Uint152.fromNumber = function (number) {
            return from.uintNumber(exports.Uint152, number);
        };
        return Uint152;
    }(Uint_1.Uint)),
    _u.LENGTH = 19,
    _u);
exports.Uint160 = (_v = /** @class */ (function (_super) {
        __extends(Uint160, _super);
        function Uint160(uint8Array) {
            return _super.call(this, Uint160.LENGTH, uint8Array) || this;
        }
        Uint160.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint160.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint160.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint160.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint160.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint160.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint160.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint160.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint160, uint8Array);
        };
        Uint160.fromArray = function (array) {
            return from.array(exports.Uint160, array);
        };
        Uint160.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint160, buffer);
        };
        Uint160.fromHexish = function (hexish) {
            return from.hexish(exports.Uint160, hexish);
        };
        Uint160.fromBn = function (bn) {
            return from.uintBn(exports.Uint160, bn);
        };
        Uint160.fromNumber = function (number) {
            return from.uintNumber(exports.Uint160, number);
        };
        return Uint160;
    }(Uint_1.Uint)),
    _v.LENGTH = 20,
    _v);
exports.Uint168 = (_w = /** @class */ (function (_super) {
        __extends(Uint168, _super);
        function Uint168(uint8Array) {
            return _super.call(this, Uint168.LENGTH, uint8Array) || this;
        }
        Uint168.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint168.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint168.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint168.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint168.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint168.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint168.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint168.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint168, uint8Array);
        };
        Uint168.fromArray = function (array) {
            return from.array(exports.Uint168, array);
        };
        Uint168.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint168, buffer);
        };
        Uint168.fromHexish = function (hexish) {
            return from.hexish(exports.Uint168, hexish);
        };
        Uint168.fromBn = function (bn) {
            return from.uintBn(exports.Uint168, bn);
        };
        Uint168.fromNumber = function (number) {
            return from.uintNumber(exports.Uint168, number);
        };
        return Uint168;
    }(Uint_1.Uint)),
    _w.LENGTH = 21,
    _w);
exports.Uint176 = (_x = /** @class */ (function (_super) {
        __extends(Uint176, _super);
        function Uint176(uint8Array) {
            return _super.call(this, Uint176.LENGTH, uint8Array) || this;
        }
        Uint176.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint176.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint176.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint176.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint176.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint176.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint176.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint176.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint176, uint8Array);
        };
        Uint176.fromArray = function (array) {
            return from.array(exports.Uint176, array);
        };
        Uint176.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint176, buffer);
        };
        Uint176.fromHexish = function (hexish) {
            return from.hexish(exports.Uint176, hexish);
        };
        Uint176.fromBn = function (bn) {
            return from.uintBn(exports.Uint176, bn);
        };
        Uint176.fromNumber = function (number) {
            return from.uintNumber(exports.Uint176, number);
        };
        return Uint176;
    }(Uint_1.Uint)),
    _x.LENGTH = 22,
    _x);
exports.Uint184 = (_y = /** @class */ (function (_super) {
        __extends(Uint184, _super);
        function Uint184(uint8Array) {
            return _super.call(this, Uint184.LENGTH, uint8Array) || this;
        }
        Uint184.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint184.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint184.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint184.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint184.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint184.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint184.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint184.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint184, uint8Array);
        };
        Uint184.fromArray = function (array) {
            return from.array(exports.Uint184, array);
        };
        Uint184.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint184, buffer);
        };
        Uint184.fromHexish = function (hexish) {
            return from.hexish(exports.Uint184, hexish);
        };
        Uint184.fromBn = function (bn) {
            return from.uintBn(exports.Uint184, bn);
        };
        Uint184.fromNumber = function (number) {
            return from.uintNumber(exports.Uint184, number);
        };
        return Uint184;
    }(Uint_1.Uint)),
    _y.LENGTH = 23,
    _y);
exports.Uint192 = (_z = /** @class */ (function (_super) {
        __extends(Uint192, _super);
        function Uint192(uint8Array) {
            return _super.call(this, Uint192.LENGTH, uint8Array) || this;
        }
        Uint192.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint192.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint192.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint192.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint192.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint192.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint192.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint192.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint192, uint8Array);
        };
        Uint192.fromArray = function (array) {
            return from.array(exports.Uint192, array);
        };
        Uint192.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint192, buffer);
        };
        Uint192.fromHexish = function (hexish) {
            return from.hexish(exports.Uint192, hexish);
        };
        Uint192.fromBn = function (bn) {
            return from.uintBn(exports.Uint192, bn);
        };
        Uint192.fromNumber = function (number) {
            return from.uintNumber(exports.Uint192, number);
        };
        return Uint192;
    }(Uint_1.Uint)),
    _z.LENGTH = 24,
    _z);
exports.Uint200 = (_0 = /** @class */ (function (_super) {
        __extends(Uint200, _super);
        function Uint200(uint8Array) {
            return _super.call(this, Uint200.LENGTH, uint8Array) || this;
        }
        Uint200.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint200.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint200.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint200.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint200.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint200.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint200.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint200.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint200, uint8Array);
        };
        Uint200.fromArray = function (array) {
            return from.array(exports.Uint200, array);
        };
        Uint200.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint200, buffer);
        };
        Uint200.fromHexish = function (hexish) {
            return from.hexish(exports.Uint200, hexish);
        };
        Uint200.fromBn = function (bn) {
            return from.uintBn(exports.Uint200, bn);
        };
        Uint200.fromNumber = function (number) {
            return from.uintNumber(exports.Uint200, number);
        };
        return Uint200;
    }(Uint_1.Uint)),
    _0.LENGTH = 25,
    _0);
exports.Uint208 = (_1 = /** @class */ (function (_super) {
        __extends(Uint208, _super);
        function Uint208(uint8Array) {
            return _super.call(this, Uint208.LENGTH, uint8Array) || this;
        }
        Uint208.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint208.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint208.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint208.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint208.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint208.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint208.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint208.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint208, uint8Array);
        };
        Uint208.fromArray = function (array) {
            return from.array(exports.Uint208, array);
        };
        Uint208.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint208, buffer);
        };
        Uint208.fromHexish = function (hexish) {
            return from.hexish(exports.Uint208, hexish);
        };
        Uint208.fromBn = function (bn) {
            return from.uintBn(exports.Uint208, bn);
        };
        Uint208.fromNumber = function (number) {
            return from.uintNumber(exports.Uint208, number);
        };
        return Uint208;
    }(Uint_1.Uint)),
    _1.LENGTH = 26,
    _1);
exports.Uint216 = (_2 = /** @class */ (function (_super) {
        __extends(Uint216, _super);
        function Uint216(uint8Array) {
            return _super.call(this, Uint216.LENGTH, uint8Array) || this;
        }
        Uint216.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint216.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint216.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint216.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint216.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint216.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint216.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint216.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint216, uint8Array);
        };
        Uint216.fromArray = function (array) {
            return from.array(exports.Uint216, array);
        };
        Uint216.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint216, buffer);
        };
        Uint216.fromHexish = function (hexish) {
            return from.hexish(exports.Uint216, hexish);
        };
        Uint216.fromBn = function (bn) {
            return from.uintBn(exports.Uint216, bn);
        };
        Uint216.fromNumber = function (number) {
            return from.uintNumber(exports.Uint216, number);
        };
        return Uint216;
    }(Uint_1.Uint)),
    _2.LENGTH = 27,
    _2);
exports.Uint224 = (_3 = /** @class */ (function (_super) {
        __extends(Uint224, _super);
        function Uint224(uint8Array) {
            return _super.call(this, Uint224.LENGTH, uint8Array) || this;
        }
        Uint224.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint224.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint224.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint224.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint224.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint224.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint224.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint224.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint224, uint8Array);
        };
        Uint224.fromArray = function (array) {
            return from.array(exports.Uint224, array);
        };
        Uint224.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint224, buffer);
        };
        Uint224.fromHexish = function (hexish) {
            return from.hexish(exports.Uint224, hexish);
        };
        Uint224.fromBn = function (bn) {
            return from.uintBn(exports.Uint224, bn);
        };
        Uint224.fromNumber = function (number) {
            return from.uintNumber(exports.Uint224, number);
        };
        return Uint224;
    }(Uint_1.Uint)),
    _3.LENGTH = 28,
    _3);
exports.Uint232 = (_4 = /** @class */ (function (_super) {
        __extends(Uint232, _super);
        function Uint232(uint8Array) {
            return _super.call(this, Uint232.LENGTH, uint8Array) || this;
        }
        Uint232.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint232.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint232.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint232.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint232.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint232.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint232.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint232.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint232, uint8Array);
        };
        Uint232.fromArray = function (array) {
            return from.array(exports.Uint232, array);
        };
        Uint232.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint232, buffer);
        };
        Uint232.fromHexish = function (hexish) {
            return from.hexish(exports.Uint232, hexish);
        };
        Uint232.fromBn = function (bn) {
            return from.uintBn(exports.Uint232, bn);
        };
        Uint232.fromNumber = function (number) {
            return from.uintNumber(exports.Uint232, number);
        };
        return Uint232;
    }(Uint_1.Uint)),
    _4.LENGTH = 29,
    _4);
exports.Uint240 = (_5 = /** @class */ (function (_super) {
        __extends(Uint240, _super);
        function Uint240(uint8Array) {
            return _super.call(this, Uint240.LENGTH, uint8Array) || this;
        }
        Uint240.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint240.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint240.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint240.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint240.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint240.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint240.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint240.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint240, uint8Array);
        };
        Uint240.fromArray = function (array) {
            return from.array(exports.Uint240, array);
        };
        Uint240.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint240, buffer);
        };
        Uint240.fromHexish = function (hexish) {
            return from.hexish(exports.Uint240, hexish);
        };
        Uint240.fromBn = function (bn) {
            return from.uintBn(exports.Uint240, bn);
        };
        Uint240.fromNumber = function (number) {
            return from.uintNumber(exports.Uint240, number);
        };
        return Uint240;
    }(Uint_1.Uint)),
    _5.LENGTH = 30,
    _5);
exports.Uint248 = (_6 = /** @class */ (function (_super) {
        __extends(Uint248, _super);
        function Uint248(uint8Array) {
            return _super.call(this, Uint248.LENGTH, uint8Array) || this;
        }
        Uint248.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint248.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint248.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint248.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint248.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint248.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint248.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint248.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint248, uint8Array);
        };
        Uint248.fromArray = function (array) {
            return from.array(exports.Uint248, array);
        };
        Uint248.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint248, buffer);
        };
        Uint248.fromHexish = function (hexish) {
            return from.hexish(exports.Uint248, hexish);
        };
        Uint248.fromBn = function (bn) {
            return from.uintBn(exports.Uint248, bn);
        };
        Uint248.fromNumber = function (number) {
            return from.uintNumber(exports.Uint248, number);
        };
        return Uint248;
    }(Uint_1.Uint)),
    _6.LENGTH = 31,
    _6);
exports.Uint256 = (_7 = /** @class */ (function (_super) {
        __extends(Uint256, _super);
        function Uint256(uint8Array) {
            return _super.call(this, Uint256.LENGTH, uint8Array) || this;
        }
        Uint256.prototype.add = function (value) {
            return uintMath.add(exports.Uint8, this, value);
        };
        Uint256.prototype.sub = function (value) {
            return uintMath.sub(exports.Uint8, this, value);
        };
        Uint256.prototype.mul = function (value) {
            return uintMath.mul(exports.Uint8, this, value);
        };
        Uint256.prototype.divDn = function (value) {
            return uintMath.divDn(exports.Uint8, this, value);
        };
        Uint256.prototype.divUp = function (value) {
            return uintMath.divUp(exports.Uint8, this, value);
        };
        Uint256.prototype.divRd = function (value) {
            return uintMath.divRd(exports.Uint8, this, value);
        };
        Uint256.prototype.mod = function (value) {
            return uintMath.mod(exports.Uint8, this, value);
        };
        Uint256.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Uint256, uint8Array);
        };
        Uint256.fromArray = function (array) {
            return from.array(exports.Uint256, array);
        };
        Uint256.fromBuffer = function (buffer) {
            return from.buffer(exports.Uint256, buffer);
        };
        Uint256.fromHexish = function (hexish) {
            return from.hexish(exports.Uint256, hexish);
        };
        Uint256.fromBn = function (bn) {
            return from.uintBn(exports.Uint256, bn);
        };
        Uint256.fromNumber = function (number) {
            return from.uintNumber(exports.Uint256, number);
        };
        return Uint256;
    }(Uint_1.Uint)),
    _7.LENGTH = 32,
    _7);
