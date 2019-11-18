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
var BytesX_1 = require("../internals/BytesX");
var from = __importStar(require("../utils/from"));
exports.Bytes1 = (_a = /** @class */ (function (_super) {
        __extends(Bytes1, _super);
        function Bytes1(uint8Array) {
            return _super.call(this, Bytes1.LENGTH, uint8Array) || this;
        }
        Bytes1.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes1, uint8Array);
        };
        Bytes1.fromArray = function (array) {
            return from.array(exports.Bytes1, array);
        };
        Bytes1.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes1, buffer);
        };
        Bytes1.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes1, hexish);
        };
        return Bytes1;
    }(BytesX_1.BytesX)),
    _a.LENGTH = 1,
    _a);
exports.Bytes2 = (_b = /** @class */ (function (_super) {
        __extends(Bytes2, _super);
        function Bytes2(uint8Array) {
            return _super.call(this, Bytes2.LENGTH, uint8Array) || this;
        }
        Bytes2.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes2, uint8Array);
        };
        Bytes2.fromArray = function (array) {
            return from.array(exports.Bytes2, array);
        };
        Bytes2.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes2, buffer);
        };
        Bytes2.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes2, hexish);
        };
        return Bytes2;
    }(BytesX_1.BytesX)),
    _b.LENGTH = 2,
    _b);
exports.Bytes3 = (_c = /** @class */ (function (_super) {
        __extends(Bytes3, _super);
        function Bytes3(uint8Array) {
            return _super.call(this, Bytes3.LENGTH, uint8Array) || this;
        }
        Bytes3.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes3, uint8Array);
        };
        Bytes3.fromArray = function (array) {
            return from.array(exports.Bytes3, array);
        };
        Bytes3.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes3, buffer);
        };
        Bytes3.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes3, hexish);
        };
        return Bytes3;
    }(BytesX_1.BytesX)),
    _c.LENGTH = 3,
    _c);
exports.Bytes4 = (_d = /** @class */ (function (_super) {
        __extends(Bytes4, _super);
        function Bytes4(uint8Array) {
            return _super.call(this, Bytes4.LENGTH, uint8Array) || this;
        }
        Bytes4.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes4, uint8Array);
        };
        Bytes4.fromArray = function (array) {
            return from.array(exports.Bytes4, array);
        };
        Bytes4.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes4, buffer);
        };
        Bytes4.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes4, hexish);
        };
        return Bytes4;
    }(BytesX_1.BytesX)),
    _d.LENGTH = 4,
    _d);
exports.Bytes5 = (_e = /** @class */ (function (_super) {
        __extends(Bytes5, _super);
        function Bytes5(uint8Array) {
            return _super.call(this, Bytes5.LENGTH, uint8Array) || this;
        }
        Bytes5.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes5, uint8Array);
        };
        Bytes5.fromArray = function (array) {
            return from.array(exports.Bytes5, array);
        };
        Bytes5.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes5, buffer);
        };
        Bytes5.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes5, hexish);
        };
        return Bytes5;
    }(BytesX_1.BytesX)),
    _e.LENGTH = 5,
    _e);
exports.Bytes6 = (_f = /** @class */ (function (_super) {
        __extends(Bytes6, _super);
        function Bytes6(uint8Array) {
            return _super.call(this, Bytes6.LENGTH, uint8Array) || this;
        }
        Bytes6.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes6, uint8Array);
        };
        Bytes6.fromArray = function (array) {
            return from.array(exports.Bytes6, array);
        };
        Bytes6.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes6, buffer);
        };
        Bytes6.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes6, hexish);
        };
        return Bytes6;
    }(BytesX_1.BytesX)),
    _f.LENGTH = 6,
    _f);
exports.Bytes7 = (_g = /** @class */ (function (_super) {
        __extends(Bytes7, _super);
        function Bytes7(uint8Array) {
            return _super.call(this, Bytes7.LENGTH, uint8Array) || this;
        }
        Bytes7.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes7, uint8Array);
        };
        Bytes7.fromArray = function (array) {
            return from.array(exports.Bytes7, array);
        };
        Bytes7.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes7, buffer);
        };
        Bytes7.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes7, hexish);
        };
        return Bytes7;
    }(BytesX_1.BytesX)),
    _g.LENGTH = 7,
    _g);
exports.Bytes8 = (_h = /** @class */ (function (_super) {
        __extends(Bytes8, _super);
        function Bytes8(uint8Array) {
            return _super.call(this, Bytes8.LENGTH, uint8Array) || this;
        }
        Bytes8.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes8, uint8Array);
        };
        Bytes8.fromArray = function (array) {
            return from.array(exports.Bytes8, array);
        };
        Bytes8.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes8, buffer);
        };
        Bytes8.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes8, hexish);
        };
        return Bytes8;
    }(BytesX_1.BytesX)),
    _h.LENGTH = 8,
    _h);
exports.Bytes9 = (_j = /** @class */ (function (_super) {
        __extends(Bytes9, _super);
        function Bytes9(uint8Array) {
            return _super.call(this, Bytes9.LENGTH, uint8Array) || this;
        }
        Bytes9.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes9, uint8Array);
        };
        Bytes9.fromArray = function (array) {
            return from.array(exports.Bytes9, array);
        };
        Bytes9.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes9, buffer);
        };
        Bytes9.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes9, hexish);
        };
        return Bytes9;
    }(BytesX_1.BytesX)),
    _j.LENGTH = 9,
    _j);
exports.Bytes10 = (_k = /** @class */ (function (_super) {
        __extends(Bytes10, _super);
        function Bytes10(uint8Array) {
            return _super.call(this, Bytes10.LENGTH, uint8Array) || this;
        }
        Bytes10.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes10, uint8Array);
        };
        Bytes10.fromArray = function (array) {
            return from.array(exports.Bytes10, array);
        };
        Bytes10.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes10, buffer);
        };
        Bytes10.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes10, hexish);
        };
        return Bytes10;
    }(BytesX_1.BytesX)),
    _k.LENGTH = 10,
    _k);
exports.Bytes11 = (_l = /** @class */ (function (_super) {
        __extends(Bytes11, _super);
        function Bytes11(uint8Array) {
            return _super.call(this, Bytes11.LENGTH, uint8Array) || this;
        }
        Bytes11.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes11, uint8Array);
        };
        Bytes11.fromArray = function (array) {
            return from.array(exports.Bytes11, array);
        };
        Bytes11.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes11, buffer);
        };
        Bytes11.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes11, hexish);
        };
        return Bytes11;
    }(BytesX_1.BytesX)),
    _l.LENGTH = 11,
    _l);
exports.Bytes12 = (_m = /** @class */ (function (_super) {
        __extends(Bytes12, _super);
        function Bytes12(uint8Array) {
            return _super.call(this, Bytes12.LENGTH, uint8Array) || this;
        }
        Bytes12.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes12, uint8Array);
        };
        Bytes12.fromArray = function (array) {
            return from.array(exports.Bytes12, array);
        };
        Bytes12.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes12, buffer);
        };
        Bytes12.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes12, hexish);
        };
        return Bytes12;
    }(BytesX_1.BytesX)),
    _m.LENGTH = 12,
    _m);
exports.Bytes13 = (_o = /** @class */ (function (_super) {
        __extends(Bytes13, _super);
        function Bytes13(uint8Array) {
            return _super.call(this, Bytes13.LENGTH, uint8Array) || this;
        }
        Bytes13.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes13, uint8Array);
        };
        Bytes13.fromArray = function (array) {
            return from.array(exports.Bytes13, array);
        };
        Bytes13.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes13, buffer);
        };
        Bytes13.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes13, hexish);
        };
        return Bytes13;
    }(BytesX_1.BytesX)),
    _o.LENGTH = 13,
    _o);
exports.Bytes14 = (_p = /** @class */ (function (_super) {
        __extends(Bytes14, _super);
        function Bytes14(uint8Array) {
            return _super.call(this, Bytes14.LENGTH, uint8Array) || this;
        }
        Bytes14.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes14, uint8Array);
        };
        Bytes14.fromArray = function (array) {
            return from.array(exports.Bytes14, array);
        };
        Bytes14.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes14, buffer);
        };
        Bytes14.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes14, hexish);
        };
        return Bytes14;
    }(BytesX_1.BytesX)),
    _p.LENGTH = 14,
    _p);
exports.Bytes15 = (_q = /** @class */ (function (_super) {
        __extends(Bytes15, _super);
        function Bytes15(uint8Array) {
            return _super.call(this, Bytes15.LENGTH, uint8Array) || this;
        }
        Bytes15.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes15, uint8Array);
        };
        Bytes15.fromArray = function (array) {
            return from.array(exports.Bytes15, array);
        };
        Bytes15.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes15, buffer);
        };
        Bytes15.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes15, hexish);
        };
        return Bytes15;
    }(BytesX_1.BytesX)),
    _q.LENGTH = 15,
    _q);
exports.Bytes16 = (_r = /** @class */ (function (_super) {
        __extends(Bytes16, _super);
        function Bytes16(uint8Array) {
            return _super.call(this, Bytes16.LENGTH, uint8Array) || this;
        }
        Bytes16.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes16, uint8Array);
        };
        Bytes16.fromArray = function (array) {
            return from.array(exports.Bytes16, array);
        };
        Bytes16.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes16, buffer);
        };
        Bytes16.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes16, hexish);
        };
        return Bytes16;
    }(BytesX_1.BytesX)),
    _r.LENGTH = 16,
    _r);
exports.Bytes17 = (_s = /** @class */ (function (_super) {
        __extends(Bytes17, _super);
        function Bytes17(uint8Array) {
            return _super.call(this, Bytes17.LENGTH, uint8Array) || this;
        }
        Bytes17.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes17, uint8Array);
        };
        Bytes17.fromArray = function (array) {
            return from.array(exports.Bytes17, array);
        };
        Bytes17.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes17, buffer);
        };
        Bytes17.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes17, hexish);
        };
        return Bytes17;
    }(BytesX_1.BytesX)),
    _s.LENGTH = 17,
    _s);
exports.Bytes18 = (_t = /** @class */ (function (_super) {
        __extends(Bytes18, _super);
        function Bytes18(uint8Array) {
            return _super.call(this, Bytes18.LENGTH, uint8Array) || this;
        }
        Bytes18.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes18, uint8Array);
        };
        Bytes18.fromArray = function (array) {
            return from.array(exports.Bytes18, array);
        };
        Bytes18.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes18, buffer);
        };
        Bytes18.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes18, hexish);
        };
        return Bytes18;
    }(BytesX_1.BytesX)),
    _t.LENGTH = 18,
    _t);
exports.Bytes19 = (_u = /** @class */ (function (_super) {
        __extends(Bytes19, _super);
        function Bytes19(uint8Array) {
            return _super.call(this, Bytes19.LENGTH, uint8Array) || this;
        }
        Bytes19.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes19, uint8Array);
        };
        Bytes19.fromArray = function (array) {
            return from.array(exports.Bytes19, array);
        };
        Bytes19.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes19, buffer);
        };
        Bytes19.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes19, hexish);
        };
        return Bytes19;
    }(BytesX_1.BytesX)),
    _u.LENGTH = 19,
    _u);
exports.Bytes20 = (_v = /** @class */ (function (_super) {
        __extends(Bytes20, _super);
        function Bytes20(uint8Array) {
            return _super.call(this, Bytes20.LENGTH, uint8Array) || this;
        }
        Bytes20.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes20, uint8Array);
        };
        Bytes20.fromArray = function (array) {
            return from.array(exports.Bytes20, array);
        };
        Bytes20.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes20, buffer);
        };
        Bytes20.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes20, hexish);
        };
        return Bytes20;
    }(BytesX_1.BytesX)),
    _v.LENGTH = 20,
    _v);
exports.Bytes21 = (_w = /** @class */ (function (_super) {
        __extends(Bytes21, _super);
        function Bytes21(uint8Array) {
            return _super.call(this, Bytes21.LENGTH, uint8Array) || this;
        }
        Bytes21.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes21, uint8Array);
        };
        Bytes21.fromArray = function (array) {
            return from.array(exports.Bytes21, array);
        };
        Bytes21.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes21, buffer);
        };
        Bytes21.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes21, hexish);
        };
        return Bytes21;
    }(BytesX_1.BytesX)),
    _w.LENGTH = 21,
    _w);
exports.Bytes22 = (_x = /** @class */ (function (_super) {
        __extends(Bytes22, _super);
        function Bytes22(uint8Array) {
            return _super.call(this, Bytes22.LENGTH, uint8Array) || this;
        }
        Bytes22.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes22, uint8Array);
        };
        Bytes22.fromArray = function (array) {
            return from.array(exports.Bytes22, array);
        };
        Bytes22.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes22, buffer);
        };
        Bytes22.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes22, hexish);
        };
        return Bytes22;
    }(BytesX_1.BytesX)),
    _x.LENGTH = 22,
    _x);
exports.Bytes23 = (_y = /** @class */ (function (_super) {
        __extends(Bytes23, _super);
        function Bytes23(uint8Array) {
            return _super.call(this, Bytes23.LENGTH, uint8Array) || this;
        }
        Bytes23.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes23, uint8Array);
        };
        Bytes23.fromArray = function (array) {
            return from.array(exports.Bytes23, array);
        };
        Bytes23.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes23, buffer);
        };
        Bytes23.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes23, hexish);
        };
        return Bytes23;
    }(BytesX_1.BytesX)),
    _y.LENGTH = 23,
    _y);
exports.Bytes24 = (_z = /** @class */ (function (_super) {
        __extends(Bytes24, _super);
        function Bytes24(uint8Array) {
            return _super.call(this, Bytes24.LENGTH, uint8Array) || this;
        }
        Bytes24.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes24, uint8Array);
        };
        Bytes24.fromArray = function (array) {
            return from.array(exports.Bytes24, array);
        };
        Bytes24.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes24, buffer);
        };
        Bytes24.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes24, hexish);
        };
        return Bytes24;
    }(BytesX_1.BytesX)),
    _z.LENGTH = 24,
    _z);
exports.Bytes25 = (_0 = /** @class */ (function (_super) {
        __extends(Bytes25, _super);
        function Bytes25(uint8Array) {
            return _super.call(this, Bytes25.LENGTH, uint8Array) || this;
        }
        Bytes25.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes25, uint8Array);
        };
        Bytes25.fromArray = function (array) {
            return from.array(exports.Bytes25, array);
        };
        Bytes25.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes25, buffer);
        };
        Bytes25.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes25, hexish);
        };
        return Bytes25;
    }(BytesX_1.BytesX)),
    _0.LENGTH = 25,
    _0);
exports.Bytes26 = (_1 = /** @class */ (function (_super) {
        __extends(Bytes26, _super);
        function Bytes26(uint8Array) {
            return _super.call(this, Bytes26.LENGTH, uint8Array) || this;
        }
        Bytes26.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes26, uint8Array);
        };
        Bytes26.fromArray = function (array) {
            return from.array(exports.Bytes26, array);
        };
        Bytes26.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes26, buffer);
        };
        Bytes26.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes26, hexish);
        };
        return Bytes26;
    }(BytesX_1.BytesX)),
    _1.LENGTH = 26,
    _1);
exports.Bytes27 = (_2 = /** @class */ (function (_super) {
        __extends(Bytes27, _super);
        function Bytes27(uint8Array) {
            return _super.call(this, Bytes27.LENGTH, uint8Array) || this;
        }
        Bytes27.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes27, uint8Array);
        };
        Bytes27.fromArray = function (array) {
            return from.array(exports.Bytes27, array);
        };
        Bytes27.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes27, buffer);
        };
        Bytes27.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes27, hexish);
        };
        return Bytes27;
    }(BytesX_1.BytesX)),
    _2.LENGTH = 27,
    _2);
exports.Bytes28 = (_3 = /** @class */ (function (_super) {
        __extends(Bytes28, _super);
        function Bytes28(uint8Array) {
            return _super.call(this, Bytes28.LENGTH, uint8Array) || this;
        }
        Bytes28.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes28, uint8Array);
        };
        Bytes28.fromArray = function (array) {
            return from.array(exports.Bytes28, array);
        };
        Bytes28.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes28, buffer);
        };
        Bytes28.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes28, hexish);
        };
        return Bytes28;
    }(BytesX_1.BytesX)),
    _3.LENGTH = 28,
    _3);
exports.Bytes29 = (_4 = /** @class */ (function (_super) {
        __extends(Bytes29, _super);
        function Bytes29(uint8Array) {
            return _super.call(this, Bytes29.LENGTH, uint8Array) || this;
        }
        Bytes29.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes29, uint8Array);
        };
        Bytes29.fromArray = function (array) {
            return from.array(exports.Bytes29, array);
        };
        Bytes29.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes29, buffer);
        };
        Bytes29.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes29, hexish);
        };
        return Bytes29;
    }(BytesX_1.BytesX)),
    _4.LENGTH = 29,
    _4);
exports.Bytes30 = (_5 = /** @class */ (function (_super) {
        __extends(Bytes30, _super);
        function Bytes30(uint8Array) {
            return _super.call(this, Bytes30.LENGTH, uint8Array) || this;
        }
        Bytes30.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes30, uint8Array);
        };
        Bytes30.fromArray = function (array) {
            return from.array(exports.Bytes30, array);
        };
        Bytes30.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes30, buffer);
        };
        Bytes30.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes30, hexish);
        };
        return Bytes30;
    }(BytesX_1.BytesX)),
    _5.LENGTH = 30,
    _5);
exports.Bytes31 = (_6 = /** @class */ (function (_super) {
        __extends(Bytes31, _super);
        function Bytes31(uint8Array) {
            return _super.call(this, Bytes31.LENGTH, uint8Array) || this;
        }
        Bytes31.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes31, uint8Array);
        };
        Bytes31.fromArray = function (array) {
            return from.array(exports.Bytes31, array);
        };
        Bytes31.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes31, buffer);
        };
        Bytes31.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes31, hexish);
        };
        return Bytes31;
    }(BytesX_1.BytesX)),
    _6.LENGTH = 31,
    _6);
exports.Bytes32 = (_7 = /** @class */ (function (_super) {
        __extends(Bytes32, _super);
        function Bytes32(uint8Array) {
            return _super.call(this, Bytes32.LENGTH, uint8Array) || this;
        }
        Bytes32.fromUint8Array = function (uint8Array) {
            return from.uint8Array(exports.Bytes32, uint8Array);
        };
        Bytes32.fromArray = function (array) {
            return from.array(exports.Bytes32, array);
        };
        Bytes32.fromBuffer = function (buffer) {
            return from.buffer(exports.Bytes32, buffer);
        };
        Bytes32.fromHexish = function (hexish) {
            return from.hexish(exports.Bytes32, hexish);
        };
        return Bytes32;
    }(BytesX_1.BytesX)),
    _7.LENGTH = 32,
    _7);
