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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var UintX_1 = require("../internals/UintX");
var bn_js_1 = __importDefault(require("bn.js"));
var zeroBn = new bn_js_1["default"](0);
var oneBn = new bn_js_1["default"](1);
var Uint8 = /** @class */ (function (_super) {
    __extends(Uint8, _super);
    function Uint8(uish) {
        return _super.call(this, Uint8.LENGTH, uish) || this;
    }
    Uint8.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint8(uint8Array);
    };
    Uint8.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint8(uint8Array);
    };
    Uint8.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint8(uint8Array);
    };
    Uint8.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint8(uint8Array);
    };
    Uint8.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint8(uint8Array);
    };
    Uint8.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint8(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint8.LENGTH = 1;
    return Uint8;
}(UintX_1.UintX));
exports.Uint8 = Uint8;
var Uint16 = /** @class */ (function (_super) {
    __extends(Uint16, _super);
    function Uint16(uish) {
        return _super.call(this, Uint16.LENGTH, uish) || this;
    }
    Uint16.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint16(uint8Array);
    };
    Uint16.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint16(uint8Array);
    };
    Uint16.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint16(uint8Array);
    };
    Uint16.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint16(uint8Array);
    };
    Uint16.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint16(uint8Array);
    };
    Uint16.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint16(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint16.LENGTH = 2;
    return Uint16;
}(UintX_1.UintX));
exports.Uint16 = Uint16;
var Uint24 = /** @class */ (function (_super) {
    __extends(Uint24, _super);
    function Uint24(uish) {
        return _super.call(this, Uint24.LENGTH, uish) || this;
    }
    Uint24.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint24(uint8Array);
    };
    Uint24.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint24(uint8Array);
    };
    Uint24.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint24(uint8Array);
    };
    Uint24.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint24(uint8Array);
    };
    Uint24.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint24(uint8Array);
    };
    Uint24.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint24(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint24.LENGTH = 3;
    return Uint24;
}(UintX_1.UintX));
exports.Uint24 = Uint24;
var Uint32 = /** @class */ (function (_super) {
    __extends(Uint32, _super);
    function Uint32(uish) {
        return _super.call(this, Uint32.LENGTH, uish) || this;
    }
    Uint32.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint32(uint8Array);
    };
    Uint32.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint32(uint8Array);
    };
    Uint32.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint32(uint8Array);
    };
    Uint32.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint32(uint8Array);
    };
    Uint32.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint32(uint8Array);
    };
    Uint32.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint32(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint32.LENGTH = 4;
    return Uint32;
}(UintX_1.UintX));
exports.Uint32 = Uint32;
var Uint40 = /** @class */ (function (_super) {
    __extends(Uint40, _super);
    function Uint40(uish) {
        return _super.call(this, Uint40.LENGTH, uish) || this;
    }
    Uint40.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint40(uint8Array);
    };
    Uint40.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint40(uint8Array);
    };
    Uint40.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint40(uint8Array);
    };
    Uint40.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint40(uint8Array);
    };
    Uint40.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint40(uint8Array);
    };
    Uint40.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint40(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint40.LENGTH = 5;
    return Uint40;
}(UintX_1.UintX));
exports.Uint40 = Uint40;
var Uint48 = /** @class */ (function (_super) {
    __extends(Uint48, _super);
    function Uint48(uish) {
        return _super.call(this, Uint48.LENGTH, uish) || this;
    }
    Uint48.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint48(uint8Array);
    };
    Uint48.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint48(uint8Array);
    };
    Uint48.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint48(uint8Array);
    };
    Uint48.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint48(uint8Array);
    };
    Uint48.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint48(uint8Array);
    };
    Uint48.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint48(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint48.LENGTH = 6;
    return Uint48;
}(UintX_1.UintX));
exports.Uint48 = Uint48;
var Uint56 = /** @class */ (function (_super) {
    __extends(Uint56, _super);
    function Uint56(uish) {
        return _super.call(this, Uint56.LENGTH, uish) || this;
    }
    Uint56.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint56(uint8Array);
    };
    Uint56.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint56(uint8Array);
    };
    Uint56.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint56(uint8Array);
    };
    Uint56.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint56(uint8Array);
    };
    Uint56.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint56(uint8Array);
    };
    Uint56.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint56(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint56.LENGTH = 7;
    return Uint56;
}(UintX_1.UintX));
exports.Uint56 = Uint56;
var Uint64 = /** @class */ (function (_super) {
    __extends(Uint64, _super);
    function Uint64(uish) {
        return _super.call(this, Uint64.LENGTH, uish) || this;
    }
    Uint64.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint64(uint8Array);
    };
    Uint64.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint64(uint8Array);
    };
    Uint64.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint64(uint8Array);
    };
    Uint64.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint64(uint8Array);
    };
    Uint64.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint64(uint8Array);
    };
    Uint64.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint64(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint64.LENGTH = 8;
    return Uint64;
}(UintX_1.UintX));
exports.Uint64 = Uint64;
var Uint72 = /** @class */ (function (_super) {
    __extends(Uint72, _super);
    function Uint72(uish) {
        return _super.call(this, Uint72.LENGTH, uish) || this;
    }
    Uint72.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint72(uint8Array);
    };
    Uint72.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint72(uint8Array);
    };
    Uint72.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint72(uint8Array);
    };
    Uint72.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint72(uint8Array);
    };
    Uint72.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint72(uint8Array);
    };
    Uint72.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint72(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint72.LENGTH = 9;
    return Uint72;
}(UintX_1.UintX));
exports.Uint72 = Uint72;
var Uint80 = /** @class */ (function (_super) {
    __extends(Uint80, _super);
    function Uint80(uish) {
        return _super.call(this, Uint80.LENGTH, uish) || this;
    }
    Uint80.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint80(uint8Array);
    };
    Uint80.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint80(uint8Array);
    };
    Uint80.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint80(uint8Array);
    };
    Uint80.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint80(uint8Array);
    };
    Uint80.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint80(uint8Array);
    };
    Uint80.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint80(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint80.LENGTH = 10;
    return Uint80;
}(UintX_1.UintX));
exports.Uint80 = Uint80;
var Uint88 = /** @class */ (function (_super) {
    __extends(Uint88, _super);
    function Uint88(uish) {
        return _super.call(this, Uint88.LENGTH, uish) || this;
    }
    Uint88.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint88(uint8Array);
    };
    Uint88.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint88(uint8Array);
    };
    Uint88.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint88(uint8Array);
    };
    Uint88.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint88(uint8Array);
    };
    Uint88.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint88(uint8Array);
    };
    Uint88.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint88(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint88.LENGTH = 11;
    return Uint88;
}(UintX_1.UintX));
exports.Uint88 = Uint88;
var Uint96 = /** @class */ (function (_super) {
    __extends(Uint96, _super);
    function Uint96(uish) {
        return _super.call(this, Uint96.LENGTH, uish) || this;
    }
    Uint96.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint96(uint8Array);
    };
    Uint96.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint96(uint8Array);
    };
    Uint96.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint96(uint8Array);
    };
    Uint96.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint96(uint8Array);
    };
    Uint96.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint96(uint8Array);
    };
    Uint96.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint96(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint96.LENGTH = 12;
    return Uint96;
}(UintX_1.UintX));
exports.Uint96 = Uint96;
var Uint104 = /** @class */ (function (_super) {
    __extends(Uint104, _super);
    function Uint104(uish) {
        return _super.call(this, Uint104.LENGTH, uish) || this;
    }
    Uint104.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint104(uint8Array);
    };
    Uint104.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint104(uint8Array);
    };
    Uint104.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint104(uint8Array);
    };
    Uint104.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint104(uint8Array);
    };
    Uint104.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint104(uint8Array);
    };
    Uint104.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint104(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint104.LENGTH = 13;
    return Uint104;
}(UintX_1.UintX));
exports.Uint104 = Uint104;
var Uint112 = /** @class */ (function (_super) {
    __extends(Uint112, _super);
    function Uint112(uish) {
        return _super.call(this, Uint112.LENGTH, uish) || this;
    }
    Uint112.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint112(uint8Array);
    };
    Uint112.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint112(uint8Array);
    };
    Uint112.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint112(uint8Array);
    };
    Uint112.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint112(uint8Array);
    };
    Uint112.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint112(uint8Array);
    };
    Uint112.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint112(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint112.LENGTH = 14;
    return Uint112;
}(UintX_1.UintX));
exports.Uint112 = Uint112;
var Uint120 = /** @class */ (function (_super) {
    __extends(Uint120, _super);
    function Uint120(uish) {
        return _super.call(this, Uint120.LENGTH, uish) || this;
    }
    Uint120.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint120(uint8Array);
    };
    Uint120.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint120(uint8Array);
    };
    Uint120.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint120(uint8Array);
    };
    Uint120.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint120(uint8Array);
    };
    Uint120.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint120(uint8Array);
    };
    Uint120.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint120(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint120.LENGTH = 15;
    return Uint120;
}(UintX_1.UintX));
exports.Uint120 = Uint120;
var Uint128 = /** @class */ (function (_super) {
    __extends(Uint128, _super);
    function Uint128(uish) {
        return _super.call(this, Uint128.LENGTH, uish) || this;
    }
    Uint128.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint128(uint8Array);
    };
    Uint128.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint128(uint8Array);
    };
    Uint128.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint128(uint8Array);
    };
    Uint128.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint128(uint8Array);
    };
    Uint128.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint128(uint8Array);
    };
    Uint128.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint128(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint128.LENGTH = 16;
    return Uint128;
}(UintX_1.UintX));
exports.Uint128 = Uint128;
var Uint136 = /** @class */ (function (_super) {
    __extends(Uint136, _super);
    function Uint136(uish) {
        return _super.call(this, Uint136.LENGTH, uish) || this;
    }
    Uint136.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint136(uint8Array);
    };
    Uint136.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint136(uint8Array);
    };
    Uint136.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint136(uint8Array);
    };
    Uint136.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint136(uint8Array);
    };
    Uint136.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint136(uint8Array);
    };
    Uint136.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint136(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint136.LENGTH = 17;
    return Uint136;
}(UintX_1.UintX));
exports.Uint136 = Uint136;
var Uint144 = /** @class */ (function (_super) {
    __extends(Uint144, _super);
    function Uint144(uish) {
        return _super.call(this, Uint144.LENGTH, uish) || this;
    }
    Uint144.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint144(uint8Array);
    };
    Uint144.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint144(uint8Array);
    };
    Uint144.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint144(uint8Array);
    };
    Uint144.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint144(uint8Array);
    };
    Uint144.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint144(uint8Array);
    };
    Uint144.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint144(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint144.LENGTH = 18;
    return Uint144;
}(UintX_1.UintX));
exports.Uint144 = Uint144;
var Uint152 = /** @class */ (function (_super) {
    __extends(Uint152, _super);
    function Uint152(uish) {
        return _super.call(this, Uint152.LENGTH, uish) || this;
    }
    Uint152.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint152(uint8Array);
    };
    Uint152.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint152(uint8Array);
    };
    Uint152.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint152(uint8Array);
    };
    Uint152.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint152(uint8Array);
    };
    Uint152.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint152(uint8Array);
    };
    Uint152.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint152(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint152.LENGTH = 19;
    return Uint152;
}(UintX_1.UintX));
exports.Uint152 = Uint152;
var Uint160 = /** @class */ (function (_super) {
    __extends(Uint160, _super);
    function Uint160(uish) {
        return _super.call(this, Uint160.LENGTH, uish) || this;
    }
    Uint160.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint160(uint8Array);
    };
    Uint160.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint160(uint8Array);
    };
    Uint160.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint160(uint8Array);
    };
    Uint160.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint160(uint8Array);
    };
    Uint160.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint160(uint8Array);
    };
    Uint160.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint160(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint160.LENGTH = 20;
    return Uint160;
}(UintX_1.UintX));
exports.Uint160 = Uint160;
var Uint168 = /** @class */ (function (_super) {
    __extends(Uint168, _super);
    function Uint168(uish) {
        return _super.call(this, Uint168.LENGTH, uish) || this;
    }
    Uint168.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint168(uint8Array);
    };
    Uint168.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint168(uint8Array);
    };
    Uint168.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint168(uint8Array);
    };
    Uint168.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint168(uint8Array);
    };
    Uint168.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint168(uint8Array);
    };
    Uint168.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint168(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint168.LENGTH = 21;
    return Uint168;
}(UintX_1.UintX));
exports.Uint168 = Uint168;
var Uint176 = /** @class */ (function (_super) {
    __extends(Uint176, _super);
    function Uint176(uish) {
        return _super.call(this, Uint176.LENGTH, uish) || this;
    }
    Uint176.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint176(uint8Array);
    };
    Uint176.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint176(uint8Array);
    };
    Uint176.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint176(uint8Array);
    };
    Uint176.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint176(uint8Array);
    };
    Uint176.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint176(uint8Array);
    };
    Uint176.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint176(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint176.LENGTH = 22;
    return Uint176;
}(UintX_1.UintX));
exports.Uint176 = Uint176;
var Uint184 = /** @class */ (function (_super) {
    __extends(Uint184, _super);
    function Uint184(uish) {
        return _super.call(this, Uint184.LENGTH, uish) || this;
    }
    Uint184.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint184(uint8Array);
    };
    Uint184.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint184(uint8Array);
    };
    Uint184.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint184(uint8Array);
    };
    Uint184.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint184(uint8Array);
    };
    Uint184.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint184(uint8Array);
    };
    Uint184.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint184(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint184.LENGTH = 23;
    return Uint184;
}(UintX_1.UintX));
exports.Uint184 = Uint184;
var Uint192 = /** @class */ (function (_super) {
    __extends(Uint192, _super);
    function Uint192(uish) {
        return _super.call(this, Uint192.LENGTH, uish) || this;
    }
    Uint192.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint192(uint8Array);
    };
    Uint192.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint192(uint8Array);
    };
    Uint192.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint192(uint8Array);
    };
    Uint192.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint192(uint8Array);
    };
    Uint192.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint192(uint8Array);
    };
    Uint192.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint192(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint192.LENGTH = 24;
    return Uint192;
}(UintX_1.UintX));
exports.Uint192 = Uint192;
var Uint200 = /** @class */ (function (_super) {
    __extends(Uint200, _super);
    function Uint200(uish) {
        return _super.call(this, Uint200.LENGTH, uish) || this;
    }
    Uint200.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint200(uint8Array);
    };
    Uint200.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint200(uint8Array);
    };
    Uint200.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint200(uint8Array);
    };
    Uint200.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint200(uint8Array);
    };
    Uint200.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint200(uint8Array);
    };
    Uint200.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint200(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint200.LENGTH = 25;
    return Uint200;
}(UintX_1.UintX));
exports.Uint200 = Uint200;
var Uint208 = /** @class */ (function (_super) {
    __extends(Uint208, _super);
    function Uint208(uish) {
        return _super.call(this, Uint208.LENGTH, uish) || this;
    }
    Uint208.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint208(uint8Array);
    };
    Uint208.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint208(uint8Array);
    };
    Uint208.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint208(uint8Array);
    };
    Uint208.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint208(uint8Array);
    };
    Uint208.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint208(uint8Array);
    };
    Uint208.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint208(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint208.LENGTH = 26;
    return Uint208;
}(UintX_1.UintX));
exports.Uint208 = Uint208;
var Uint216 = /** @class */ (function (_super) {
    __extends(Uint216, _super);
    function Uint216(uish) {
        return _super.call(this, Uint216.LENGTH, uish) || this;
    }
    Uint216.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint216(uint8Array);
    };
    Uint216.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint216(uint8Array);
    };
    Uint216.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint216(uint8Array);
    };
    Uint216.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint216(uint8Array);
    };
    Uint216.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint216(uint8Array);
    };
    Uint216.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint216(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint216.LENGTH = 27;
    return Uint216;
}(UintX_1.UintX));
exports.Uint216 = Uint216;
var Uint224 = /** @class */ (function (_super) {
    __extends(Uint224, _super);
    function Uint224(uish) {
        return _super.call(this, Uint224.LENGTH, uish) || this;
    }
    Uint224.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint224(uint8Array);
    };
    Uint224.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint224(uint8Array);
    };
    Uint224.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint224(uint8Array);
    };
    Uint224.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint224(uint8Array);
    };
    Uint224.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint224(uint8Array);
    };
    Uint224.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint224(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint224.LENGTH = 28;
    return Uint224;
}(UintX_1.UintX));
exports.Uint224 = Uint224;
var Uint232 = /** @class */ (function (_super) {
    __extends(Uint232, _super);
    function Uint232(uish) {
        return _super.call(this, Uint232.LENGTH, uish) || this;
    }
    Uint232.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint232(uint8Array);
    };
    Uint232.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint232(uint8Array);
    };
    Uint232.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint232(uint8Array);
    };
    Uint232.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint232(uint8Array);
    };
    Uint232.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint232(uint8Array);
    };
    Uint232.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint232(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint232.LENGTH = 29;
    return Uint232;
}(UintX_1.UintX));
exports.Uint232 = Uint232;
var Uint240 = /** @class */ (function (_super) {
    __extends(Uint240, _super);
    function Uint240(uish) {
        return _super.call(this, Uint240.LENGTH, uish) || this;
    }
    Uint240.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint240(uint8Array);
    };
    Uint240.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint240(uint8Array);
    };
    Uint240.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint240(uint8Array);
    };
    Uint240.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint240(uint8Array);
    };
    Uint240.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint240(uint8Array);
    };
    Uint240.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint240(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint240.LENGTH = 30;
    return Uint240;
}(UintX_1.UintX));
exports.Uint240 = Uint240;
var Uint248 = /** @class */ (function (_super) {
    __extends(Uint248, _super);
    function Uint248(uish) {
        return _super.call(this, Uint248.LENGTH, uish) || this;
    }
    Uint248.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint248(uint8Array);
    };
    Uint248.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint248(uint8Array);
    };
    Uint248.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint248(uint8Array);
    };
    Uint248.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint248(uint8Array);
    };
    Uint248.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint248(uint8Array);
    };
    Uint248.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint248(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint248.LENGTH = 31;
    return Uint248;
}(UintX_1.UintX));
exports.Uint248 = Uint248;
var Uint256 = /** @class */ (function (_super) {
    __extends(Uint256, _super);
    function Uint256(uish) {
        return _super.call(this, Uint256.LENGTH, uish) || this;
    }
    Uint256.prototype.opAdd = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.add(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint256(uint8Array);
    };
    Uint256.prototype.opSub = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.sub(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint256(uint8Array);
    };
    Uint256.prototype.opMul = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mul(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint256(uint8Array);
    };
    Uint256.prototype.opDiv = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.div(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint256(uint8Array);
    };
    Uint256.prototype.opMod = function (value) {
        var thisBn = new bn_js_1["default"](this.uu.u);
        var valueBn = new bn_js_1["default"](value.uu.u);
        var uint8Array = thisBn.mod(valueBn).toArrayLike(Uint8Array, 'be');
        return new Uint256(uint8Array);
    };
    Uint256.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return new Uint256(bn.toArrayLike(Uint8Array, 'be'));
    };
    Uint256.LENGTH = 32;
    return Uint256;
}(UintX_1.UintX));
exports.Uint256 = Uint256;
