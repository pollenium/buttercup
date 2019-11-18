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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
exports.__esModule = true;
var Uint_1 = require("../internals/Uint");
exports.Uint8 = (_a = /** @class */ (function (_super) {
        __extends(Uint8, _super);
        function Uint8(uint8Array) {
            return _super.call(this, Uint8.LENGTH, uint8Array) || this;
        }
        return Uint8;
    }(Uint_1.Uint)),
    _a.LENGTH = 1,
    _a);
exports.Uint16 = (_b = /** @class */ (function (_super) {
        __extends(Uint16, _super);
        function Uint16(uint8Array) {
            return _super.call(this, Uint16.LENGTH, uint8Array) || this;
        }
        return Uint16;
    }(Uint_1.Uint)),
    _b.LENGTH = 2,
    _b);
exports.Uint24 = (_c = /** @class */ (function (_super) {
        __extends(Uint24, _super);
        function Uint24(uint8Array) {
            return _super.call(this, Uint24.LENGTH, uint8Array) || this;
        }
        return Uint24;
    }(Uint_1.Uint)),
    _c.LENGTH = 3,
    _c);
exports.Uint32 = (_d = /** @class */ (function (_super) {
        __extends(Uint32, _super);
        function Uint32(uint8Array) {
            return _super.call(this, Uint32.LENGTH, uint8Array) || this;
        }
        return Uint32;
    }(Uint_1.Uint)),
    _d.LENGTH = 4,
    _d);
exports.Uint40 = (_e = /** @class */ (function (_super) {
        __extends(Uint40, _super);
        function Uint40(uint8Array) {
            return _super.call(this, Uint40.LENGTH, uint8Array) || this;
        }
        return Uint40;
    }(Uint_1.Uint)),
    _e.LENGTH = 5,
    _e);
exports.Uint48 = (_f = /** @class */ (function (_super) {
        __extends(Uint48, _super);
        function Uint48(uint8Array) {
            return _super.call(this, Uint48.LENGTH, uint8Array) || this;
        }
        return Uint48;
    }(Uint_1.Uint)),
    _f.LENGTH = 6,
    _f);
exports.Uint56 = (_g = /** @class */ (function (_super) {
        __extends(Uint56, _super);
        function Uint56(uint8Array) {
            return _super.call(this, Uint56.LENGTH, uint8Array) || this;
        }
        return Uint56;
    }(Uint_1.Uint)),
    _g.LENGTH = 7,
    _g);
exports.Uint64 = (_h = /** @class */ (function (_super) {
        __extends(Uint64, _super);
        function Uint64(uint8Array) {
            return _super.call(this, Uint64.LENGTH, uint8Array) || this;
        }
        return Uint64;
    }(Uint_1.Uint)),
    _h.LENGTH = 8,
    _h);
exports.Uint72 = (_j = /** @class */ (function (_super) {
        __extends(Uint72, _super);
        function Uint72(uint8Array) {
            return _super.call(this, Uint72.LENGTH, uint8Array) || this;
        }
        return Uint72;
    }(Uint_1.Uint)),
    _j.LENGTH = 9,
    _j);
exports.Uint80 = (_k = /** @class */ (function (_super) {
        __extends(Uint80, _super);
        function Uint80(uint8Array) {
            return _super.call(this, Uint80.LENGTH, uint8Array) || this;
        }
        return Uint80;
    }(Uint_1.Uint)),
    _k.LENGTH = 10,
    _k);
exports.Uint88 = (_l = /** @class */ (function (_super) {
        __extends(Uint88, _super);
        function Uint88(uint8Array) {
            return _super.call(this, Uint88.LENGTH, uint8Array) || this;
        }
        return Uint88;
    }(Uint_1.Uint)),
    _l.LENGTH = 11,
    _l);
exports.Uint96 = (_m = /** @class */ (function (_super) {
        __extends(Uint96, _super);
        function Uint96(uint8Array) {
            return _super.call(this, Uint96.LENGTH, uint8Array) || this;
        }
        return Uint96;
    }(Uint_1.Uint)),
    _m.LENGTH = 12,
    _m);
exports.Uint104 = (_o = /** @class */ (function (_super) {
        __extends(Uint104, _super);
        function Uint104(uint8Array) {
            return _super.call(this, Uint104.LENGTH, uint8Array) || this;
        }
        return Uint104;
    }(Uint_1.Uint)),
    _o.LENGTH = 13,
    _o);
exports.Uint112 = (_p = /** @class */ (function (_super) {
        __extends(Uint112, _super);
        function Uint112(uint8Array) {
            return _super.call(this, Uint112.LENGTH, uint8Array) || this;
        }
        return Uint112;
    }(Uint_1.Uint)),
    _p.LENGTH = 14,
    _p);
exports.Uint120 = (_q = /** @class */ (function (_super) {
        __extends(Uint120, _super);
        function Uint120(uint8Array) {
            return _super.call(this, Uint120.LENGTH, uint8Array) || this;
        }
        return Uint120;
    }(Uint_1.Uint)),
    _q.LENGTH = 15,
    _q);
exports.Uint128 = (_r = /** @class */ (function (_super) {
        __extends(Uint128, _super);
        function Uint128(uint8Array) {
            return _super.call(this, Uint128.LENGTH, uint8Array) || this;
        }
        return Uint128;
    }(Uint_1.Uint)),
    _r.LENGTH = 16,
    _r);
exports.Uint136 = (_s = /** @class */ (function (_super) {
        __extends(Uint136, _super);
        function Uint136(uint8Array) {
            return _super.call(this, Uint136.LENGTH, uint8Array) || this;
        }
        return Uint136;
    }(Uint_1.Uint)),
    _s.LENGTH = 17,
    _s);
exports.Uint144 = (_t = /** @class */ (function (_super) {
        __extends(Uint144, _super);
        function Uint144(uint8Array) {
            return _super.call(this, Uint144.LENGTH, uint8Array) || this;
        }
        return Uint144;
    }(Uint_1.Uint)),
    _t.LENGTH = 18,
    _t);
exports.Uint152 = (_u = /** @class */ (function (_super) {
        __extends(Uint152, _super);
        function Uint152(uint8Array) {
            return _super.call(this, Uint152.LENGTH, uint8Array) || this;
        }
        return Uint152;
    }(Uint_1.Uint)),
    _u.LENGTH = 19,
    _u);
exports.Uint160 = (_v = /** @class */ (function (_super) {
        __extends(Uint160, _super);
        function Uint160(uint8Array) {
            return _super.call(this, Uint160.LENGTH, uint8Array) || this;
        }
        return Uint160;
    }(Uint_1.Uint)),
    _v.LENGTH = 20,
    _v);
exports.Uint168 = (_w = /** @class */ (function (_super) {
        __extends(Uint168, _super);
        function Uint168(uint8Array) {
            return _super.call(this, Uint168.LENGTH, uint8Array) || this;
        }
        return Uint168;
    }(Uint_1.Uint)),
    _w.LENGTH = 21,
    _w);
exports.Uint176 = (_x = /** @class */ (function (_super) {
        __extends(Uint176, _super);
        function Uint176(uint8Array) {
            return _super.call(this, Uint176.LENGTH, uint8Array) || this;
        }
        return Uint176;
    }(Uint_1.Uint)),
    _x.LENGTH = 22,
    _x);
exports.Uint184 = (_y = /** @class */ (function (_super) {
        __extends(Uint184, _super);
        function Uint184(uint8Array) {
            return _super.call(this, Uint184.LENGTH, uint8Array) || this;
        }
        return Uint184;
    }(Uint_1.Uint)),
    _y.LENGTH = 23,
    _y);
exports.Uint192 = (_z = /** @class */ (function (_super) {
        __extends(Uint192, _super);
        function Uint192(uint8Array) {
            return _super.call(this, Uint192.LENGTH, uint8Array) || this;
        }
        return Uint192;
    }(Uint_1.Uint)),
    _z.LENGTH = 24,
    _z);
exports.Uint200 = (_0 = /** @class */ (function (_super) {
        __extends(Uint200, _super);
        function Uint200(uint8Array) {
            return _super.call(this, Uint200.LENGTH, uint8Array) || this;
        }
        return Uint200;
    }(Uint_1.Uint)),
    _0.LENGTH = 25,
    _0);
exports.Uint208 = (_1 = /** @class */ (function (_super) {
        __extends(Uint208, _super);
        function Uint208(uint8Array) {
            return _super.call(this, Uint208.LENGTH, uint8Array) || this;
        }
        return Uint208;
    }(Uint_1.Uint)),
    _1.LENGTH = 26,
    _1);
exports.Uint216 = (_2 = /** @class */ (function (_super) {
        __extends(Uint216, _super);
        function Uint216(uint8Array) {
            return _super.call(this, Uint216.LENGTH, uint8Array) || this;
        }
        return Uint216;
    }(Uint_1.Uint)),
    _2.LENGTH = 27,
    _2);
exports.Uint224 = (_3 = /** @class */ (function (_super) {
        __extends(Uint224, _super);
        function Uint224(uint8Array) {
            return _super.call(this, Uint224.LENGTH, uint8Array) || this;
        }
        return Uint224;
    }(Uint_1.Uint)),
    _3.LENGTH = 28,
    _3);
exports.Uint232 = (_4 = /** @class */ (function (_super) {
        __extends(Uint232, _super);
        function Uint232(uint8Array) {
            return _super.call(this, Uint232.LENGTH, uint8Array) || this;
        }
        return Uint232;
    }(Uint_1.Uint)),
    _4.LENGTH = 29,
    _4);
exports.Uint240 = (_5 = /** @class */ (function (_super) {
        __extends(Uint240, _super);
        function Uint240(uint8Array) {
            return _super.call(this, Uint240.LENGTH, uint8Array) || this;
        }
        return Uint240;
    }(Uint_1.Uint)),
    _5.LENGTH = 30,
    _5);
exports.Uint248 = (_6 = /** @class */ (function (_super) {
        __extends(Uint248, _super);
        function Uint248(uint8Array) {
            return _super.call(this, Uint248.LENGTH, uint8Array) || this;
        }
        return Uint248;
    }(Uint_1.Uint)),
    _6.LENGTH = 31,
    _6);
exports.Uint256 = (_7 = /** @class */ (function (_super) {
        __extends(Uint256, _super);
        function Uint256(uint8Array) {
            return _super.call(this, Uint256.LENGTH, uint8Array) || this;
        }
        return Uint256;
    }(Uint_1.Uint)),
    _7.LENGTH = 32,
    _7);
