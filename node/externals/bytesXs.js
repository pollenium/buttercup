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
var BytesX_1 = require("../internals/BytesX");
var uvaursi = __importStar(require("pollenium-uvaursi"));
var Bytes1 = /** @class */ (function (_super) {
    __extends(Bytes1, _super);
    function Bytes1(uint8Array) {
        return _super.call(this, Bytes1.LENGTH, uint8Array) || this;
    }
    Bytes1.fromArray = function (array) {
        return new Bytes1(uvaursi.fromArray(array));
    };
    Bytes1.fromHexish = function (hexish) {
        return new Bytes1(uvaursi.fromHexish(hexish));
    };
    Bytes1.LENGTH = 1;
    return Bytes1;
}(BytesX_1.BytesX));
exports.Bytes1 = Bytes1;
var Bytes2 = /** @class */ (function (_super) {
    __extends(Bytes2, _super);
    function Bytes2(uint8Array) {
        return _super.call(this, Bytes2.LENGTH, uint8Array) || this;
    }
    Bytes2.fromArray = function (array) {
        return new Bytes2(uvaursi.fromArray(array));
    };
    Bytes2.fromHexish = function (hexish) {
        return new Bytes2(uvaursi.fromHexish(hexish));
    };
    Bytes2.LENGTH = 2;
    return Bytes2;
}(BytesX_1.BytesX));
exports.Bytes2 = Bytes2;
var Bytes3 = /** @class */ (function (_super) {
    __extends(Bytes3, _super);
    function Bytes3(uint8Array) {
        return _super.call(this, Bytes3.LENGTH, uint8Array) || this;
    }
    Bytes3.fromArray = function (array) {
        return new Bytes3(uvaursi.fromArray(array));
    };
    Bytes3.fromHexish = function (hexish) {
        return new Bytes3(uvaursi.fromHexish(hexish));
    };
    Bytes3.LENGTH = 3;
    return Bytes3;
}(BytesX_1.BytesX));
exports.Bytes3 = Bytes3;
var Bytes4 = /** @class */ (function (_super) {
    __extends(Bytes4, _super);
    function Bytes4(uint8Array) {
        return _super.call(this, Bytes4.LENGTH, uint8Array) || this;
    }
    Bytes4.fromArray = function (array) {
        return new Bytes4(uvaursi.fromArray(array));
    };
    Bytes4.fromHexish = function (hexish) {
        return new Bytes4(uvaursi.fromHexish(hexish));
    };
    Bytes4.LENGTH = 4;
    return Bytes4;
}(BytesX_1.BytesX));
exports.Bytes4 = Bytes4;
var Bytes5 = /** @class */ (function (_super) {
    __extends(Bytes5, _super);
    function Bytes5(uint8Array) {
        return _super.call(this, Bytes5.LENGTH, uint8Array) || this;
    }
    Bytes5.fromArray = function (array) {
        return new Bytes5(uvaursi.fromArray(array));
    };
    Bytes5.fromHexish = function (hexish) {
        return new Bytes5(uvaursi.fromHexish(hexish));
    };
    Bytes5.LENGTH = 5;
    return Bytes5;
}(BytesX_1.BytesX));
exports.Bytes5 = Bytes5;
var Bytes6 = /** @class */ (function (_super) {
    __extends(Bytes6, _super);
    function Bytes6(uint8Array) {
        return _super.call(this, Bytes6.LENGTH, uint8Array) || this;
    }
    Bytes6.fromArray = function (array) {
        return new Bytes6(uvaursi.fromArray(array));
    };
    Bytes6.fromHexish = function (hexish) {
        return new Bytes6(uvaursi.fromHexish(hexish));
    };
    Bytes6.LENGTH = 6;
    return Bytes6;
}(BytesX_1.BytesX));
exports.Bytes6 = Bytes6;
var Bytes7 = /** @class */ (function (_super) {
    __extends(Bytes7, _super);
    function Bytes7(uint8Array) {
        return _super.call(this, Bytes7.LENGTH, uint8Array) || this;
    }
    Bytes7.fromArray = function (array) {
        return new Bytes7(uvaursi.fromArray(array));
    };
    Bytes7.fromHexish = function (hexish) {
        return new Bytes7(uvaursi.fromHexish(hexish));
    };
    Bytes7.LENGTH = 7;
    return Bytes7;
}(BytesX_1.BytesX));
exports.Bytes7 = Bytes7;
var Bytes8 = /** @class */ (function (_super) {
    __extends(Bytes8, _super);
    function Bytes8(uint8Array) {
        return _super.call(this, Bytes8.LENGTH, uint8Array) || this;
    }
    Bytes8.fromArray = function (array) {
        return new Bytes8(uvaursi.fromArray(array));
    };
    Bytes8.fromHexish = function (hexish) {
        return new Bytes8(uvaursi.fromHexish(hexish));
    };
    Bytes8.LENGTH = 8;
    return Bytes8;
}(BytesX_1.BytesX));
exports.Bytes8 = Bytes8;
var Bytes9 = /** @class */ (function (_super) {
    __extends(Bytes9, _super);
    function Bytes9(uint8Array) {
        return _super.call(this, Bytes9.LENGTH, uint8Array) || this;
    }
    Bytes9.fromArray = function (array) {
        return new Bytes9(uvaursi.fromArray(array));
    };
    Bytes9.fromHexish = function (hexish) {
        return new Bytes9(uvaursi.fromHexish(hexish));
    };
    Bytes9.LENGTH = 9;
    return Bytes9;
}(BytesX_1.BytesX));
exports.Bytes9 = Bytes9;
var Bytes10 = /** @class */ (function (_super) {
    __extends(Bytes10, _super);
    function Bytes10(uint8Array) {
        return _super.call(this, Bytes10.LENGTH, uint8Array) || this;
    }
    Bytes10.fromArray = function (array) {
        return new Bytes10(uvaursi.fromArray(array));
    };
    Bytes10.fromHexish = function (hexish) {
        return new Bytes10(uvaursi.fromHexish(hexish));
    };
    Bytes10.LENGTH = 10;
    return Bytes10;
}(BytesX_1.BytesX));
exports.Bytes10 = Bytes10;
var Bytes11 = /** @class */ (function (_super) {
    __extends(Bytes11, _super);
    function Bytes11(uint8Array) {
        return _super.call(this, Bytes11.LENGTH, uint8Array) || this;
    }
    Bytes11.fromArray = function (array) {
        return new Bytes11(uvaursi.fromArray(array));
    };
    Bytes11.fromHexish = function (hexish) {
        return new Bytes11(uvaursi.fromHexish(hexish));
    };
    Bytes11.LENGTH = 11;
    return Bytes11;
}(BytesX_1.BytesX));
exports.Bytes11 = Bytes11;
var Bytes12 = /** @class */ (function (_super) {
    __extends(Bytes12, _super);
    function Bytes12(uint8Array) {
        return _super.call(this, Bytes12.LENGTH, uint8Array) || this;
    }
    Bytes12.fromArray = function (array) {
        return new Bytes12(uvaursi.fromArray(array));
    };
    Bytes12.fromHexish = function (hexish) {
        return new Bytes12(uvaursi.fromHexish(hexish));
    };
    Bytes12.LENGTH = 12;
    return Bytes12;
}(BytesX_1.BytesX));
exports.Bytes12 = Bytes12;
var Bytes13 = /** @class */ (function (_super) {
    __extends(Bytes13, _super);
    function Bytes13(uint8Array) {
        return _super.call(this, Bytes13.LENGTH, uint8Array) || this;
    }
    Bytes13.fromArray = function (array) {
        return new Bytes13(uvaursi.fromArray(array));
    };
    Bytes13.fromHexish = function (hexish) {
        return new Bytes13(uvaursi.fromHexish(hexish));
    };
    Bytes13.LENGTH = 13;
    return Bytes13;
}(BytesX_1.BytesX));
exports.Bytes13 = Bytes13;
var Bytes14 = /** @class */ (function (_super) {
    __extends(Bytes14, _super);
    function Bytes14(uint8Array) {
        return _super.call(this, Bytes14.LENGTH, uint8Array) || this;
    }
    Bytes14.fromArray = function (array) {
        return new Bytes14(uvaursi.fromArray(array));
    };
    Bytes14.fromHexish = function (hexish) {
        return new Bytes14(uvaursi.fromHexish(hexish));
    };
    Bytes14.LENGTH = 14;
    return Bytes14;
}(BytesX_1.BytesX));
exports.Bytes14 = Bytes14;
var Bytes15 = /** @class */ (function (_super) {
    __extends(Bytes15, _super);
    function Bytes15(uint8Array) {
        return _super.call(this, Bytes15.LENGTH, uint8Array) || this;
    }
    Bytes15.fromArray = function (array) {
        return new Bytes15(uvaursi.fromArray(array));
    };
    Bytes15.fromHexish = function (hexish) {
        return new Bytes15(uvaursi.fromHexish(hexish));
    };
    Bytes15.LENGTH = 15;
    return Bytes15;
}(BytesX_1.BytesX));
exports.Bytes15 = Bytes15;
var Bytes16 = /** @class */ (function (_super) {
    __extends(Bytes16, _super);
    function Bytes16(uint8Array) {
        return _super.call(this, Bytes16.LENGTH, uint8Array) || this;
    }
    Bytes16.fromArray = function (array) {
        return new Bytes16(uvaursi.fromArray(array));
    };
    Bytes16.fromHexish = function (hexish) {
        return new Bytes16(uvaursi.fromHexish(hexish));
    };
    Bytes16.LENGTH = 16;
    return Bytes16;
}(BytesX_1.BytesX));
exports.Bytes16 = Bytes16;
var Bytes17 = /** @class */ (function (_super) {
    __extends(Bytes17, _super);
    function Bytes17(uint8Array) {
        return _super.call(this, Bytes17.LENGTH, uint8Array) || this;
    }
    Bytes17.fromArray = function (array) {
        return new Bytes17(uvaursi.fromArray(array));
    };
    Bytes17.fromHexish = function (hexish) {
        return new Bytes17(uvaursi.fromHexish(hexish));
    };
    Bytes17.LENGTH = 17;
    return Bytes17;
}(BytesX_1.BytesX));
exports.Bytes17 = Bytes17;
var Bytes18 = /** @class */ (function (_super) {
    __extends(Bytes18, _super);
    function Bytes18(uint8Array) {
        return _super.call(this, Bytes18.LENGTH, uint8Array) || this;
    }
    Bytes18.fromArray = function (array) {
        return new Bytes18(uvaursi.fromArray(array));
    };
    Bytes18.fromHexish = function (hexish) {
        return new Bytes18(uvaursi.fromHexish(hexish));
    };
    Bytes18.LENGTH = 18;
    return Bytes18;
}(BytesX_1.BytesX));
exports.Bytes18 = Bytes18;
var Bytes19 = /** @class */ (function (_super) {
    __extends(Bytes19, _super);
    function Bytes19(uint8Array) {
        return _super.call(this, Bytes19.LENGTH, uint8Array) || this;
    }
    Bytes19.fromArray = function (array) {
        return new Bytes19(uvaursi.fromArray(array));
    };
    Bytes19.fromHexish = function (hexish) {
        return new Bytes19(uvaursi.fromHexish(hexish));
    };
    Bytes19.LENGTH = 19;
    return Bytes19;
}(BytesX_1.BytesX));
exports.Bytes19 = Bytes19;
var Bytes20 = /** @class */ (function (_super) {
    __extends(Bytes20, _super);
    function Bytes20(uint8Array) {
        return _super.call(this, Bytes20.LENGTH, uint8Array) || this;
    }
    Bytes20.fromArray = function (array) {
        return new Bytes20(uvaursi.fromArray(array));
    };
    Bytes20.fromHexish = function (hexish) {
        return new Bytes20(uvaursi.fromHexish(hexish));
    };
    Bytes20.LENGTH = 20;
    return Bytes20;
}(BytesX_1.BytesX));
exports.Bytes20 = Bytes20;
var Bytes21 = /** @class */ (function (_super) {
    __extends(Bytes21, _super);
    function Bytes21(uint8Array) {
        return _super.call(this, Bytes21.LENGTH, uint8Array) || this;
    }
    Bytes21.fromArray = function (array) {
        return new Bytes21(uvaursi.fromArray(array));
    };
    Bytes21.fromHexish = function (hexish) {
        return new Bytes21(uvaursi.fromHexish(hexish));
    };
    Bytes21.LENGTH = 21;
    return Bytes21;
}(BytesX_1.BytesX));
exports.Bytes21 = Bytes21;
var Bytes22 = /** @class */ (function (_super) {
    __extends(Bytes22, _super);
    function Bytes22(uint8Array) {
        return _super.call(this, Bytes22.LENGTH, uint8Array) || this;
    }
    Bytes22.fromArray = function (array) {
        return new Bytes22(uvaursi.fromArray(array));
    };
    Bytes22.fromHexish = function (hexish) {
        return new Bytes22(uvaursi.fromHexish(hexish));
    };
    Bytes22.LENGTH = 22;
    return Bytes22;
}(BytesX_1.BytesX));
exports.Bytes22 = Bytes22;
var Bytes23 = /** @class */ (function (_super) {
    __extends(Bytes23, _super);
    function Bytes23(uint8Array) {
        return _super.call(this, Bytes23.LENGTH, uint8Array) || this;
    }
    Bytes23.fromArray = function (array) {
        return new Bytes23(uvaursi.fromArray(array));
    };
    Bytes23.fromHexish = function (hexish) {
        return new Bytes23(uvaursi.fromHexish(hexish));
    };
    Bytes23.LENGTH = 23;
    return Bytes23;
}(BytesX_1.BytesX));
exports.Bytes23 = Bytes23;
var Bytes24 = /** @class */ (function (_super) {
    __extends(Bytes24, _super);
    function Bytes24(uint8Array) {
        return _super.call(this, Bytes24.LENGTH, uint8Array) || this;
    }
    Bytes24.fromArray = function (array) {
        return new Bytes24(uvaursi.fromArray(array));
    };
    Bytes24.fromHexish = function (hexish) {
        return new Bytes24(uvaursi.fromHexish(hexish));
    };
    Bytes24.LENGTH = 24;
    return Bytes24;
}(BytesX_1.BytesX));
exports.Bytes24 = Bytes24;
var Bytes25 = /** @class */ (function (_super) {
    __extends(Bytes25, _super);
    function Bytes25(uint8Array) {
        return _super.call(this, Bytes25.LENGTH, uint8Array) || this;
    }
    Bytes25.fromArray = function (array) {
        return new Bytes25(uvaursi.fromArray(array));
    };
    Bytes25.fromHexish = function (hexish) {
        return new Bytes25(uvaursi.fromHexish(hexish));
    };
    Bytes25.LENGTH = 25;
    return Bytes25;
}(BytesX_1.BytesX));
exports.Bytes25 = Bytes25;
var Bytes26 = /** @class */ (function (_super) {
    __extends(Bytes26, _super);
    function Bytes26(uint8Array) {
        return _super.call(this, Bytes26.LENGTH, uint8Array) || this;
    }
    Bytes26.fromArray = function (array) {
        return new Bytes26(uvaursi.fromArray(array));
    };
    Bytes26.fromHexish = function (hexish) {
        return new Bytes26(uvaursi.fromHexish(hexish));
    };
    Bytes26.LENGTH = 26;
    return Bytes26;
}(BytesX_1.BytesX));
exports.Bytes26 = Bytes26;
var Bytes27 = /** @class */ (function (_super) {
    __extends(Bytes27, _super);
    function Bytes27(uint8Array) {
        return _super.call(this, Bytes27.LENGTH, uint8Array) || this;
    }
    Bytes27.fromArray = function (array) {
        return new Bytes27(uvaursi.fromArray(array));
    };
    Bytes27.fromHexish = function (hexish) {
        return new Bytes27(uvaursi.fromHexish(hexish));
    };
    Bytes27.LENGTH = 27;
    return Bytes27;
}(BytesX_1.BytesX));
exports.Bytes27 = Bytes27;
var Bytes28 = /** @class */ (function (_super) {
    __extends(Bytes28, _super);
    function Bytes28(uint8Array) {
        return _super.call(this, Bytes28.LENGTH, uint8Array) || this;
    }
    Bytes28.fromArray = function (array) {
        return new Bytes28(uvaursi.fromArray(array));
    };
    Bytes28.fromHexish = function (hexish) {
        return new Bytes28(uvaursi.fromHexish(hexish));
    };
    Bytes28.LENGTH = 28;
    return Bytes28;
}(BytesX_1.BytesX));
exports.Bytes28 = Bytes28;
var Bytes29 = /** @class */ (function (_super) {
    __extends(Bytes29, _super);
    function Bytes29(uint8Array) {
        return _super.call(this, Bytes29.LENGTH, uint8Array) || this;
    }
    Bytes29.fromArray = function (array) {
        return new Bytes29(uvaursi.fromArray(array));
    };
    Bytes29.fromHexish = function (hexish) {
        return new Bytes29(uvaursi.fromHexish(hexish));
    };
    Bytes29.LENGTH = 29;
    return Bytes29;
}(BytesX_1.BytesX));
exports.Bytes29 = Bytes29;
var Bytes30 = /** @class */ (function (_super) {
    __extends(Bytes30, _super);
    function Bytes30(uint8Array) {
        return _super.call(this, Bytes30.LENGTH, uint8Array) || this;
    }
    Bytes30.fromArray = function (array) {
        return new Bytes30(uvaursi.fromArray(array));
    };
    Bytes30.fromHexish = function (hexish) {
        return new Bytes30(uvaursi.fromHexish(hexish));
    };
    Bytes30.LENGTH = 30;
    return Bytes30;
}(BytesX_1.BytesX));
exports.Bytes30 = Bytes30;
var Bytes31 = /** @class */ (function (_super) {
    __extends(Bytes31, _super);
    function Bytes31(uint8Array) {
        return _super.call(this, Bytes31.LENGTH, uint8Array) || this;
    }
    Bytes31.fromArray = function (array) {
        return new Bytes31(uvaursi.fromArray(array));
    };
    Bytes31.fromHexish = function (hexish) {
        return new Bytes31(uvaursi.fromHexish(hexish));
    };
    Bytes31.LENGTH = 31;
    return Bytes31;
}(BytesX_1.BytesX));
exports.Bytes31 = Bytes31;
var Bytes32 = /** @class */ (function (_super) {
    __extends(Bytes32, _super);
    function Bytes32(uint8Array) {
        return _super.call(this, Bytes32.LENGTH, uint8Array) || this;
    }
    Bytes32.fromArray = function (array) {
        return new Bytes32(uvaursi.fromArray(array));
    };
    Bytes32.fromHexish = function (hexish) {
        return new Bytes32(uvaursi.fromHexish(hexish));
    };
    Bytes32.LENGTH = 32;
    return Bytes32;
}(BytesX_1.BytesX));
exports.Bytes32 = Bytes32;
