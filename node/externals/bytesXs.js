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
var from = __importStar(require("../utils/from"));
var Bytes1 = /** @class */ (function (_super) {
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
    Bytes1.LENGTH = 1;
    return Bytes1;
}(BytesX_1.BytesX));
exports.Bytes1 = Bytes1;
var Bytes2 = /** @class */ (function (_super) {
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
    Bytes2.LENGTH = 2;
    return Bytes2;
}(BytesX_1.BytesX));
exports.Bytes2 = Bytes2;
var Bytes3 = /** @class */ (function (_super) {
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
    Bytes3.LENGTH = 3;
    return Bytes3;
}(BytesX_1.BytesX));
exports.Bytes3 = Bytes3;
var Bytes4 = /** @class */ (function (_super) {
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
    Bytes4.LENGTH = 4;
    return Bytes4;
}(BytesX_1.BytesX));
exports.Bytes4 = Bytes4;
var Bytes5 = /** @class */ (function (_super) {
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
    Bytes5.LENGTH = 5;
    return Bytes5;
}(BytesX_1.BytesX));
exports.Bytes5 = Bytes5;
var Bytes6 = /** @class */ (function (_super) {
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
    Bytes6.LENGTH = 6;
    return Bytes6;
}(BytesX_1.BytesX));
exports.Bytes6 = Bytes6;
var Bytes7 = /** @class */ (function (_super) {
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
    Bytes7.LENGTH = 7;
    return Bytes7;
}(BytesX_1.BytesX));
exports.Bytes7 = Bytes7;
var Bytes8 = /** @class */ (function (_super) {
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
    Bytes8.LENGTH = 8;
    return Bytes8;
}(BytesX_1.BytesX));
exports.Bytes8 = Bytes8;
var Bytes9 = /** @class */ (function (_super) {
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
    Bytes9.LENGTH = 9;
    return Bytes9;
}(BytesX_1.BytesX));
exports.Bytes9 = Bytes9;
var Bytes10 = /** @class */ (function (_super) {
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
    Bytes10.LENGTH = 10;
    return Bytes10;
}(BytesX_1.BytesX));
exports.Bytes10 = Bytes10;
var Bytes11 = /** @class */ (function (_super) {
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
    Bytes11.LENGTH = 11;
    return Bytes11;
}(BytesX_1.BytesX));
exports.Bytes11 = Bytes11;
var Bytes12 = /** @class */ (function (_super) {
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
    Bytes12.LENGTH = 12;
    return Bytes12;
}(BytesX_1.BytesX));
exports.Bytes12 = Bytes12;
var Bytes13 = /** @class */ (function (_super) {
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
    Bytes13.LENGTH = 13;
    return Bytes13;
}(BytesX_1.BytesX));
exports.Bytes13 = Bytes13;
var Bytes14 = /** @class */ (function (_super) {
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
    Bytes14.LENGTH = 14;
    return Bytes14;
}(BytesX_1.BytesX));
exports.Bytes14 = Bytes14;
var Bytes15 = /** @class */ (function (_super) {
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
    Bytes15.LENGTH = 15;
    return Bytes15;
}(BytesX_1.BytesX));
exports.Bytes15 = Bytes15;
var Bytes16 = /** @class */ (function (_super) {
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
    Bytes16.LENGTH = 16;
    return Bytes16;
}(BytesX_1.BytesX));
exports.Bytes16 = Bytes16;
var Bytes17 = /** @class */ (function (_super) {
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
    Bytes17.LENGTH = 17;
    return Bytes17;
}(BytesX_1.BytesX));
exports.Bytes17 = Bytes17;
var Bytes18 = /** @class */ (function (_super) {
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
    Bytes18.LENGTH = 18;
    return Bytes18;
}(BytesX_1.BytesX));
exports.Bytes18 = Bytes18;
var Bytes19 = /** @class */ (function (_super) {
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
    Bytes19.LENGTH = 19;
    return Bytes19;
}(BytesX_1.BytesX));
exports.Bytes19 = Bytes19;
var Bytes20 = /** @class */ (function (_super) {
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
    Bytes20.LENGTH = 20;
    return Bytes20;
}(BytesX_1.BytesX));
exports.Bytes20 = Bytes20;
var Bytes21 = /** @class */ (function (_super) {
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
    Bytes21.LENGTH = 21;
    return Bytes21;
}(BytesX_1.BytesX));
exports.Bytes21 = Bytes21;
var Bytes22 = /** @class */ (function (_super) {
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
    Bytes22.LENGTH = 22;
    return Bytes22;
}(BytesX_1.BytesX));
exports.Bytes22 = Bytes22;
var Bytes23 = /** @class */ (function (_super) {
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
    Bytes23.LENGTH = 23;
    return Bytes23;
}(BytesX_1.BytesX));
exports.Bytes23 = Bytes23;
var Bytes24 = /** @class */ (function (_super) {
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
    Bytes24.LENGTH = 24;
    return Bytes24;
}(BytesX_1.BytesX));
exports.Bytes24 = Bytes24;
var Bytes25 = /** @class */ (function (_super) {
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
    Bytes25.LENGTH = 25;
    return Bytes25;
}(BytesX_1.BytesX));
exports.Bytes25 = Bytes25;
var Bytes26 = /** @class */ (function (_super) {
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
    Bytes26.LENGTH = 26;
    return Bytes26;
}(BytesX_1.BytesX));
exports.Bytes26 = Bytes26;
var Bytes27 = /** @class */ (function (_super) {
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
    Bytes27.LENGTH = 27;
    return Bytes27;
}(BytesX_1.BytesX));
exports.Bytes27 = Bytes27;
var Bytes28 = /** @class */ (function (_super) {
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
    Bytes28.LENGTH = 28;
    return Bytes28;
}(BytesX_1.BytesX));
exports.Bytes28 = Bytes28;
var Bytes29 = /** @class */ (function (_super) {
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
    Bytes29.LENGTH = 29;
    return Bytes29;
}(BytesX_1.BytesX));
exports.Bytes29 = Bytes29;
var Bytes30 = /** @class */ (function (_super) {
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
    Bytes30.LENGTH = 30;
    return Bytes30;
}(BytesX_1.BytesX));
exports.Bytes30 = Bytes30;
var Bytes31 = /** @class */ (function (_super) {
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
    Bytes31.LENGTH = 31;
    return Bytes31;
}(BytesX_1.BytesX));
exports.Bytes31 = Bytes31;
var Bytes32 = /** @class */ (function (_super) {
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
    Bytes32.LENGTH = 32;
    return Bytes32;
}(BytesX_1.BytesX));
exports.Bytes32 = Bytes32;
