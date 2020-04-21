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
var utils_1 = require("../utils");
var zeroBn = new bn_js_1["default"](0);
var oneBn = new bn_js_1["default"](1);
var Uint8 = /** @class */ (function (_super) {
    __extends(Uint8, _super);
    function Uint8(uintable) {
        return _super.call(this, 1, uintable) || this;
    }
    Uint8.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint8.fromBnish(bn);
    };
    Uint8.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint8.fromBnish(bn);
    };
    Uint8.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint8.fromBnish(bn);
    };
    Uint8.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint8.fromBnish(bn);
    };
    Uint8.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint8.fromBnish(bn);
    };
    Uint8.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint8.fromBnish(bn);
    };
    Uint8.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint8.fromBnish(bn);
    };
    Uint8.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint8.fromBnish(bn);
    };
    Uint8.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint8.fromBnish(bn);
    };
    Uint8.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 1) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint8(uint8Array);
    };
    Uint8.fromBignumberish = function (bignumberish) {
        return Uint8.fromNumberString(10, bignumberish.toString(10));
    };
    Uint8.LENGTH = 1;
    return Uint8;
}(UintX_1.UintX));
exports.Uint8 = Uint8;
var Uint16 = /** @class */ (function (_super) {
    __extends(Uint16, _super);
    function Uint16(uintable) {
        return _super.call(this, 2, uintable) || this;
    }
    Uint16.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint16.fromBnish(bn);
    };
    Uint16.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint16.fromBnish(bn);
    };
    Uint16.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint16.fromBnish(bn);
    };
    Uint16.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint16.fromBnish(bn);
    };
    Uint16.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint16.fromBnish(bn);
    };
    Uint16.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint16.fromBnish(bn);
    };
    Uint16.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint16.fromBnish(bn);
    };
    Uint16.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint16.fromBnish(bn);
    };
    Uint16.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint16.fromBnish(bn);
    };
    Uint16.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 2) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint16(uint8Array);
    };
    Uint16.fromBignumberish = function (bignumberish) {
        return Uint16.fromNumberString(10, bignumberish.toString(10));
    };
    Uint16.LENGTH = 2;
    return Uint16;
}(UintX_1.UintX));
exports.Uint16 = Uint16;
var Uint24 = /** @class */ (function (_super) {
    __extends(Uint24, _super);
    function Uint24(uintable) {
        return _super.call(this, 3, uintable) || this;
    }
    Uint24.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint24.fromBnish(bn);
    };
    Uint24.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint24.fromBnish(bn);
    };
    Uint24.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint24.fromBnish(bn);
    };
    Uint24.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint24.fromBnish(bn);
    };
    Uint24.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint24.fromBnish(bn);
    };
    Uint24.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint24.fromBnish(bn);
    };
    Uint24.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint24.fromBnish(bn);
    };
    Uint24.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint24.fromBnish(bn);
    };
    Uint24.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint24.fromBnish(bn);
    };
    Uint24.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 3) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint24(uint8Array);
    };
    Uint24.fromBignumberish = function (bignumberish) {
        return Uint24.fromNumberString(10, bignumberish.toString(10));
    };
    Uint24.LENGTH = 3;
    return Uint24;
}(UintX_1.UintX));
exports.Uint24 = Uint24;
var Uint32 = /** @class */ (function (_super) {
    __extends(Uint32, _super);
    function Uint32(uintable) {
        return _super.call(this, 4, uintable) || this;
    }
    Uint32.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint32.fromBnish(bn);
    };
    Uint32.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint32.fromBnish(bn);
    };
    Uint32.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint32.fromBnish(bn);
    };
    Uint32.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint32.fromBnish(bn);
    };
    Uint32.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint32.fromBnish(bn);
    };
    Uint32.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint32.fromBnish(bn);
    };
    Uint32.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint32.fromBnish(bn);
    };
    Uint32.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint32.fromBnish(bn);
    };
    Uint32.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint32.fromBnish(bn);
    };
    Uint32.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 4) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint32(uint8Array);
    };
    Uint32.fromBignumberish = function (bignumberish) {
        return Uint32.fromNumberString(10, bignumberish.toString(10));
    };
    Uint32.LENGTH = 4;
    return Uint32;
}(UintX_1.UintX));
exports.Uint32 = Uint32;
var Uint40 = /** @class */ (function (_super) {
    __extends(Uint40, _super);
    function Uint40(uintable) {
        return _super.call(this, 5, uintable) || this;
    }
    Uint40.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint40.fromBnish(bn);
    };
    Uint40.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint40.fromBnish(bn);
    };
    Uint40.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint40.fromBnish(bn);
    };
    Uint40.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint40.fromBnish(bn);
    };
    Uint40.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint40.fromBnish(bn);
    };
    Uint40.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint40.fromBnish(bn);
    };
    Uint40.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint40.fromBnish(bn);
    };
    Uint40.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint40.fromBnish(bn);
    };
    Uint40.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint40.fromBnish(bn);
    };
    Uint40.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 5) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint40(uint8Array);
    };
    Uint40.fromBignumberish = function (bignumberish) {
        return Uint40.fromNumberString(10, bignumberish.toString(10));
    };
    Uint40.LENGTH = 5;
    return Uint40;
}(UintX_1.UintX));
exports.Uint40 = Uint40;
var Uint48 = /** @class */ (function (_super) {
    __extends(Uint48, _super);
    function Uint48(uintable) {
        return _super.call(this, 6, uintable) || this;
    }
    Uint48.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint48.fromBnish(bn);
    };
    Uint48.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint48.fromBnish(bn);
    };
    Uint48.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint48.fromBnish(bn);
    };
    Uint48.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint48.fromBnish(bn);
    };
    Uint48.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint48.fromBnish(bn);
    };
    Uint48.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint48.fromBnish(bn);
    };
    Uint48.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint48.fromBnish(bn);
    };
    Uint48.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint48.fromBnish(bn);
    };
    Uint48.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint48.fromBnish(bn);
    };
    Uint48.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 6) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint48(uint8Array);
    };
    Uint48.fromBignumberish = function (bignumberish) {
        return Uint48.fromNumberString(10, bignumberish.toString(10));
    };
    Uint48.LENGTH = 6;
    return Uint48;
}(UintX_1.UintX));
exports.Uint48 = Uint48;
var Uint56 = /** @class */ (function (_super) {
    __extends(Uint56, _super);
    function Uint56(uintable) {
        return _super.call(this, 7, uintable) || this;
    }
    Uint56.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint56.fromBnish(bn);
    };
    Uint56.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint56.fromBnish(bn);
    };
    Uint56.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint56.fromBnish(bn);
    };
    Uint56.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint56.fromBnish(bn);
    };
    Uint56.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint56.fromBnish(bn);
    };
    Uint56.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint56.fromBnish(bn);
    };
    Uint56.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint56.fromBnish(bn);
    };
    Uint56.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint56.fromBnish(bn);
    };
    Uint56.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint56.fromBnish(bn);
    };
    Uint56.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 7) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint56(uint8Array);
    };
    Uint56.fromBignumberish = function (bignumberish) {
        return Uint56.fromNumberString(10, bignumberish.toString(10));
    };
    Uint56.LENGTH = 7;
    return Uint56;
}(UintX_1.UintX));
exports.Uint56 = Uint56;
var Uint64 = /** @class */ (function (_super) {
    __extends(Uint64, _super);
    function Uint64(uintable) {
        return _super.call(this, 8, uintable) || this;
    }
    Uint64.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint64.fromBnish(bn);
    };
    Uint64.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint64.fromBnish(bn);
    };
    Uint64.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint64.fromBnish(bn);
    };
    Uint64.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint64.fromBnish(bn);
    };
    Uint64.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint64.fromBnish(bn);
    };
    Uint64.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint64.fromBnish(bn);
    };
    Uint64.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint64.fromBnish(bn);
    };
    Uint64.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint64.fromBnish(bn);
    };
    Uint64.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint64.fromBnish(bn);
    };
    Uint64.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 8) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint64(uint8Array);
    };
    Uint64.fromBignumberish = function (bignumberish) {
        return Uint64.fromNumberString(10, bignumberish.toString(10));
    };
    Uint64.LENGTH = 8;
    return Uint64;
}(UintX_1.UintX));
exports.Uint64 = Uint64;
var Uint72 = /** @class */ (function (_super) {
    __extends(Uint72, _super);
    function Uint72(uintable) {
        return _super.call(this, 9, uintable) || this;
    }
    Uint72.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint72.fromBnish(bn);
    };
    Uint72.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint72.fromBnish(bn);
    };
    Uint72.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint72.fromBnish(bn);
    };
    Uint72.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint72.fromBnish(bn);
    };
    Uint72.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint72.fromBnish(bn);
    };
    Uint72.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint72.fromBnish(bn);
    };
    Uint72.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint72.fromBnish(bn);
    };
    Uint72.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint72.fromBnish(bn);
    };
    Uint72.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint72.fromBnish(bn);
    };
    Uint72.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 9) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint72(uint8Array);
    };
    Uint72.fromBignumberish = function (bignumberish) {
        return Uint72.fromNumberString(10, bignumberish.toString(10));
    };
    Uint72.LENGTH = 9;
    return Uint72;
}(UintX_1.UintX));
exports.Uint72 = Uint72;
var Uint80 = /** @class */ (function (_super) {
    __extends(Uint80, _super);
    function Uint80(uintable) {
        return _super.call(this, 10, uintable) || this;
    }
    Uint80.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint80.fromBnish(bn);
    };
    Uint80.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint80.fromBnish(bn);
    };
    Uint80.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint80.fromBnish(bn);
    };
    Uint80.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint80.fromBnish(bn);
    };
    Uint80.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint80.fromBnish(bn);
    };
    Uint80.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint80.fromBnish(bn);
    };
    Uint80.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint80.fromBnish(bn);
    };
    Uint80.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint80.fromBnish(bn);
    };
    Uint80.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint80.fromBnish(bn);
    };
    Uint80.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 10) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint80(uint8Array);
    };
    Uint80.fromBignumberish = function (bignumberish) {
        return Uint80.fromNumberString(10, bignumberish.toString(10));
    };
    Uint80.LENGTH = 10;
    return Uint80;
}(UintX_1.UintX));
exports.Uint80 = Uint80;
var Uint88 = /** @class */ (function (_super) {
    __extends(Uint88, _super);
    function Uint88(uintable) {
        return _super.call(this, 11, uintable) || this;
    }
    Uint88.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint88.fromBnish(bn);
    };
    Uint88.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint88.fromBnish(bn);
    };
    Uint88.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint88.fromBnish(bn);
    };
    Uint88.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint88.fromBnish(bn);
    };
    Uint88.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint88.fromBnish(bn);
    };
    Uint88.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint88.fromBnish(bn);
    };
    Uint88.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint88.fromBnish(bn);
    };
    Uint88.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint88.fromBnish(bn);
    };
    Uint88.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint88.fromBnish(bn);
    };
    Uint88.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 11) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint88(uint8Array);
    };
    Uint88.fromBignumberish = function (bignumberish) {
        return Uint88.fromNumberString(10, bignumberish.toString(10));
    };
    Uint88.LENGTH = 11;
    return Uint88;
}(UintX_1.UintX));
exports.Uint88 = Uint88;
var Uint96 = /** @class */ (function (_super) {
    __extends(Uint96, _super);
    function Uint96(uintable) {
        return _super.call(this, 12, uintable) || this;
    }
    Uint96.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint96.fromBnish(bn);
    };
    Uint96.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint96.fromBnish(bn);
    };
    Uint96.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint96.fromBnish(bn);
    };
    Uint96.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint96.fromBnish(bn);
    };
    Uint96.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint96.fromBnish(bn);
    };
    Uint96.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint96.fromBnish(bn);
    };
    Uint96.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint96.fromBnish(bn);
    };
    Uint96.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint96.fromBnish(bn);
    };
    Uint96.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint96.fromBnish(bn);
    };
    Uint96.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 12) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint96(uint8Array);
    };
    Uint96.fromBignumberish = function (bignumberish) {
        return Uint96.fromNumberString(10, bignumberish.toString(10));
    };
    Uint96.LENGTH = 12;
    return Uint96;
}(UintX_1.UintX));
exports.Uint96 = Uint96;
var Uint104 = /** @class */ (function (_super) {
    __extends(Uint104, _super);
    function Uint104(uintable) {
        return _super.call(this, 13, uintable) || this;
    }
    Uint104.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint104.fromBnish(bn);
    };
    Uint104.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint104.fromBnish(bn);
    };
    Uint104.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint104.fromBnish(bn);
    };
    Uint104.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint104.fromBnish(bn);
    };
    Uint104.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint104.fromBnish(bn);
    };
    Uint104.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint104.fromBnish(bn);
    };
    Uint104.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint104.fromBnish(bn);
    };
    Uint104.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint104.fromBnish(bn);
    };
    Uint104.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint104.fromBnish(bn);
    };
    Uint104.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 13) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint104(uint8Array);
    };
    Uint104.fromBignumberish = function (bignumberish) {
        return Uint104.fromNumberString(10, bignumberish.toString(10));
    };
    Uint104.LENGTH = 13;
    return Uint104;
}(UintX_1.UintX));
exports.Uint104 = Uint104;
var Uint112 = /** @class */ (function (_super) {
    __extends(Uint112, _super);
    function Uint112(uintable) {
        return _super.call(this, 14, uintable) || this;
    }
    Uint112.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint112.fromBnish(bn);
    };
    Uint112.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint112.fromBnish(bn);
    };
    Uint112.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint112.fromBnish(bn);
    };
    Uint112.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint112.fromBnish(bn);
    };
    Uint112.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint112.fromBnish(bn);
    };
    Uint112.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint112.fromBnish(bn);
    };
    Uint112.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint112.fromBnish(bn);
    };
    Uint112.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint112.fromBnish(bn);
    };
    Uint112.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint112.fromBnish(bn);
    };
    Uint112.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 14) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint112(uint8Array);
    };
    Uint112.fromBignumberish = function (bignumberish) {
        return Uint112.fromNumberString(10, bignumberish.toString(10));
    };
    Uint112.LENGTH = 14;
    return Uint112;
}(UintX_1.UintX));
exports.Uint112 = Uint112;
var Uint120 = /** @class */ (function (_super) {
    __extends(Uint120, _super);
    function Uint120(uintable) {
        return _super.call(this, 15, uintable) || this;
    }
    Uint120.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint120.fromBnish(bn);
    };
    Uint120.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint120.fromBnish(bn);
    };
    Uint120.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint120.fromBnish(bn);
    };
    Uint120.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint120.fromBnish(bn);
    };
    Uint120.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint120.fromBnish(bn);
    };
    Uint120.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint120.fromBnish(bn);
    };
    Uint120.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint120.fromBnish(bn);
    };
    Uint120.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint120.fromBnish(bn);
    };
    Uint120.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint120.fromBnish(bn);
    };
    Uint120.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 15) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint120(uint8Array);
    };
    Uint120.fromBignumberish = function (bignumberish) {
        return Uint120.fromNumberString(10, bignumberish.toString(10));
    };
    Uint120.LENGTH = 15;
    return Uint120;
}(UintX_1.UintX));
exports.Uint120 = Uint120;
var Uint128 = /** @class */ (function (_super) {
    __extends(Uint128, _super);
    function Uint128(uintable) {
        return _super.call(this, 16, uintable) || this;
    }
    Uint128.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint128.fromBnish(bn);
    };
    Uint128.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint128.fromBnish(bn);
    };
    Uint128.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint128.fromBnish(bn);
    };
    Uint128.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint128.fromBnish(bn);
    };
    Uint128.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint128.fromBnish(bn);
    };
    Uint128.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint128.fromBnish(bn);
    };
    Uint128.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint128.fromBnish(bn);
    };
    Uint128.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint128.fromBnish(bn);
    };
    Uint128.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint128.fromBnish(bn);
    };
    Uint128.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 16) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint128(uint8Array);
    };
    Uint128.fromBignumberish = function (bignumberish) {
        return Uint128.fromNumberString(10, bignumberish.toString(10));
    };
    Uint128.LENGTH = 16;
    return Uint128;
}(UintX_1.UintX));
exports.Uint128 = Uint128;
var Uint136 = /** @class */ (function (_super) {
    __extends(Uint136, _super);
    function Uint136(uintable) {
        return _super.call(this, 17, uintable) || this;
    }
    Uint136.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint136.fromBnish(bn);
    };
    Uint136.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint136.fromBnish(bn);
    };
    Uint136.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint136.fromBnish(bn);
    };
    Uint136.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint136.fromBnish(bn);
    };
    Uint136.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint136.fromBnish(bn);
    };
    Uint136.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint136.fromBnish(bn);
    };
    Uint136.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint136.fromBnish(bn);
    };
    Uint136.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint136.fromBnish(bn);
    };
    Uint136.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint136.fromBnish(bn);
    };
    Uint136.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 17) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint136(uint8Array);
    };
    Uint136.fromBignumberish = function (bignumberish) {
        return Uint136.fromNumberString(10, bignumberish.toString(10));
    };
    Uint136.LENGTH = 17;
    return Uint136;
}(UintX_1.UintX));
exports.Uint136 = Uint136;
var Uint144 = /** @class */ (function (_super) {
    __extends(Uint144, _super);
    function Uint144(uintable) {
        return _super.call(this, 18, uintable) || this;
    }
    Uint144.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint144.fromBnish(bn);
    };
    Uint144.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint144.fromBnish(bn);
    };
    Uint144.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint144.fromBnish(bn);
    };
    Uint144.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint144.fromBnish(bn);
    };
    Uint144.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint144.fromBnish(bn);
    };
    Uint144.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint144.fromBnish(bn);
    };
    Uint144.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint144.fromBnish(bn);
    };
    Uint144.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint144.fromBnish(bn);
    };
    Uint144.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint144.fromBnish(bn);
    };
    Uint144.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 18) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint144(uint8Array);
    };
    Uint144.fromBignumberish = function (bignumberish) {
        return Uint144.fromNumberString(10, bignumberish.toString(10));
    };
    Uint144.LENGTH = 18;
    return Uint144;
}(UintX_1.UintX));
exports.Uint144 = Uint144;
var Uint152 = /** @class */ (function (_super) {
    __extends(Uint152, _super);
    function Uint152(uintable) {
        return _super.call(this, 19, uintable) || this;
    }
    Uint152.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint152.fromBnish(bn);
    };
    Uint152.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint152.fromBnish(bn);
    };
    Uint152.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint152.fromBnish(bn);
    };
    Uint152.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint152.fromBnish(bn);
    };
    Uint152.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint152.fromBnish(bn);
    };
    Uint152.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint152.fromBnish(bn);
    };
    Uint152.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint152.fromBnish(bn);
    };
    Uint152.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint152.fromBnish(bn);
    };
    Uint152.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint152.fromBnish(bn);
    };
    Uint152.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 19) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint152(uint8Array);
    };
    Uint152.fromBignumberish = function (bignumberish) {
        return Uint152.fromNumberString(10, bignumberish.toString(10));
    };
    Uint152.LENGTH = 19;
    return Uint152;
}(UintX_1.UintX));
exports.Uint152 = Uint152;
var Uint160 = /** @class */ (function (_super) {
    __extends(Uint160, _super);
    function Uint160(uintable) {
        return _super.call(this, 20, uintable) || this;
    }
    Uint160.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint160.fromBnish(bn);
    };
    Uint160.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint160.fromBnish(bn);
    };
    Uint160.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint160.fromBnish(bn);
    };
    Uint160.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint160.fromBnish(bn);
    };
    Uint160.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint160.fromBnish(bn);
    };
    Uint160.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint160.fromBnish(bn);
    };
    Uint160.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint160.fromBnish(bn);
    };
    Uint160.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint160.fromBnish(bn);
    };
    Uint160.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint160.fromBnish(bn);
    };
    Uint160.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 20) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint160(uint8Array);
    };
    Uint160.fromBignumberish = function (bignumberish) {
        return Uint160.fromNumberString(10, bignumberish.toString(10));
    };
    Uint160.LENGTH = 20;
    return Uint160;
}(UintX_1.UintX));
exports.Uint160 = Uint160;
var Uint168 = /** @class */ (function (_super) {
    __extends(Uint168, _super);
    function Uint168(uintable) {
        return _super.call(this, 21, uintable) || this;
    }
    Uint168.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint168.fromBnish(bn);
    };
    Uint168.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint168.fromBnish(bn);
    };
    Uint168.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint168.fromBnish(bn);
    };
    Uint168.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint168.fromBnish(bn);
    };
    Uint168.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint168.fromBnish(bn);
    };
    Uint168.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint168.fromBnish(bn);
    };
    Uint168.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint168.fromBnish(bn);
    };
    Uint168.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint168.fromBnish(bn);
    };
    Uint168.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint168.fromBnish(bn);
    };
    Uint168.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 21) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint168(uint8Array);
    };
    Uint168.fromBignumberish = function (bignumberish) {
        return Uint168.fromNumberString(10, bignumberish.toString(10));
    };
    Uint168.LENGTH = 21;
    return Uint168;
}(UintX_1.UintX));
exports.Uint168 = Uint168;
var Uint176 = /** @class */ (function (_super) {
    __extends(Uint176, _super);
    function Uint176(uintable) {
        return _super.call(this, 22, uintable) || this;
    }
    Uint176.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint176.fromBnish(bn);
    };
    Uint176.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint176.fromBnish(bn);
    };
    Uint176.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint176.fromBnish(bn);
    };
    Uint176.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint176.fromBnish(bn);
    };
    Uint176.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint176.fromBnish(bn);
    };
    Uint176.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint176.fromBnish(bn);
    };
    Uint176.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint176.fromBnish(bn);
    };
    Uint176.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint176.fromBnish(bn);
    };
    Uint176.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint176.fromBnish(bn);
    };
    Uint176.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 22) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint176(uint8Array);
    };
    Uint176.fromBignumberish = function (bignumberish) {
        return Uint176.fromNumberString(10, bignumberish.toString(10));
    };
    Uint176.LENGTH = 22;
    return Uint176;
}(UintX_1.UintX));
exports.Uint176 = Uint176;
var Uint184 = /** @class */ (function (_super) {
    __extends(Uint184, _super);
    function Uint184(uintable) {
        return _super.call(this, 23, uintable) || this;
    }
    Uint184.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint184.fromBnish(bn);
    };
    Uint184.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint184.fromBnish(bn);
    };
    Uint184.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint184.fromBnish(bn);
    };
    Uint184.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint184.fromBnish(bn);
    };
    Uint184.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint184.fromBnish(bn);
    };
    Uint184.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint184.fromBnish(bn);
    };
    Uint184.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint184.fromBnish(bn);
    };
    Uint184.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint184.fromBnish(bn);
    };
    Uint184.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint184.fromBnish(bn);
    };
    Uint184.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 23) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint184(uint8Array);
    };
    Uint184.fromBignumberish = function (bignumberish) {
        return Uint184.fromNumberString(10, bignumberish.toString(10));
    };
    Uint184.LENGTH = 23;
    return Uint184;
}(UintX_1.UintX));
exports.Uint184 = Uint184;
var Uint192 = /** @class */ (function (_super) {
    __extends(Uint192, _super);
    function Uint192(uintable) {
        return _super.call(this, 24, uintable) || this;
    }
    Uint192.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint192.fromBnish(bn);
    };
    Uint192.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint192.fromBnish(bn);
    };
    Uint192.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint192.fromBnish(bn);
    };
    Uint192.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint192.fromBnish(bn);
    };
    Uint192.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint192.fromBnish(bn);
    };
    Uint192.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint192.fromBnish(bn);
    };
    Uint192.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint192.fromBnish(bn);
    };
    Uint192.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint192.fromBnish(bn);
    };
    Uint192.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint192.fromBnish(bn);
    };
    Uint192.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 24) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint192(uint8Array);
    };
    Uint192.fromBignumberish = function (bignumberish) {
        return Uint192.fromNumberString(10, bignumberish.toString(10));
    };
    Uint192.LENGTH = 24;
    return Uint192;
}(UintX_1.UintX));
exports.Uint192 = Uint192;
var Uint200 = /** @class */ (function (_super) {
    __extends(Uint200, _super);
    function Uint200(uintable) {
        return _super.call(this, 25, uintable) || this;
    }
    Uint200.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint200.fromBnish(bn);
    };
    Uint200.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint200.fromBnish(bn);
    };
    Uint200.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint200.fromBnish(bn);
    };
    Uint200.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint200.fromBnish(bn);
    };
    Uint200.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint200.fromBnish(bn);
    };
    Uint200.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint200.fromBnish(bn);
    };
    Uint200.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint200.fromBnish(bn);
    };
    Uint200.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint200.fromBnish(bn);
    };
    Uint200.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint200.fromBnish(bn);
    };
    Uint200.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 25) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint200(uint8Array);
    };
    Uint200.fromBignumberish = function (bignumberish) {
        return Uint200.fromNumberString(10, bignumberish.toString(10));
    };
    Uint200.LENGTH = 25;
    return Uint200;
}(UintX_1.UintX));
exports.Uint200 = Uint200;
var Uint208 = /** @class */ (function (_super) {
    __extends(Uint208, _super);
    function Uint208(uintable) {
        return _super.call(this, 26, uintable) || this;
    }
    Uint208.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint208.fromBnish(bn);
    };
    Uint208.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint208.fromBnish(bn);
    };
    Uint208.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint208.fromBnish(bn);
    };
    Uint208.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint208.fromBnish(bn);
    };
    Uint208.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint208.fromBnish(bn);
    };
    Uint208.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint208.fromBnish(bn);
    };
    Uint208.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint208.fromBnish(bn);
    };
    Uint208.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint208.fromBnish(bn);
    };
    Uint208.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint208.fromBnish(bn);
    };
    Uint208.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 26) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint208(uint8Array);
    };
    Uint208.fromBignumberish = function (bignumberish) {
        return Uint208.fromNumberString(10, bignumberish.toString(10));
    };
    Uint208.LENGTH = 26;
    return Uint208;
}(UintX_1.UintX));
exports.Uint208 = Uint208;
var Uint216 = /** @class */ (function (_super) {
    __extends(Uint216, _super);
    function Uint216(uintable) {
        return _super.call(this, 27, uintable) || this;
    }
    Uint216.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint216.fromBnish(bn);
    };
    Uint216.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint216.fromBnish(bn);
    };
    Uint216.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint216.fromBnish(bn);
    };
    Uint216.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint216.fromBnish(bn);
    };
    Uint216.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint216.fromBnish(bn);
    };
    Uint216.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint216.fromBnish(bn);
    };
    Uint216.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint216.fromBnish(bn);
    };
    Uint216.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint216.fromBnish(bn);
    };
    Uint216.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint216.fromBnish(bn);
    };
    Uint216.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 27) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint216(uint8Array);
    };
    Uint216.fromBignumberish = function (bignumberish) {
        return Uint216.fromNumberString(10, bignumberish.toString(10));
    };
    Uint216.LENGTH = 27;
    return Uint216;
}(UintX_1.UintX));
exports.Uint216 = Uint216;
var Uint224 = /** @class */ (function (_super) {
    __extends(Uint224, _super);
    function Uint224(uintable) {
        return _super.call(this, 28, uintable) || this;
    }
    Uint224.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint224.fromBnish(bn);
    };
    Uint224.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint224.fromBnish(bn);
    };
    Uint224.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint224.fromBnish(bn);
    };
    Uint224.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint224.fromBnish(bn);
    };
    Uint224.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint224.fromBnish(bn);
    };
    Uint224.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint224.fromBnish(bn);
    };
    Uint224.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint224.fromBnish(bn);
    };
    Uint224.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint224.fromBnish(bn);
    };
    Uint224.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint224.fromBnish(bn);
    };
    Uint224.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 28) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint224(uint8Array);
    };
    Uint224.fromBignumberish = function (bignumberish) {
        return Uint224.fromNumberString(10, bignumberish.toString(10));
    };
    Uint224.LENGTH = 28;
    return Uint224;
}(UintX_1.UintX));
exports.Uint224 = Uint224;
var Uint232 = /** @class */ (function (_super) {
    __extends(Uint232, _super);
    function Uint232(uintable) {
        return _super.call(this, 29, uintable) || this;
    }
    Uint232.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint232.fromBnish(bn);
    };
    Uint232.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint232.fromBnish(bn);
    };
    Uint232.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint232.fromBnish(bn);
    };
    Uint232.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint232.fromBnish(bn);
    };
    Uint232.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint232.fromBnish(bn);
    };
    Uint232.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint232.fromBnish(bn);
    };
    Uint232.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint232.fromBnish(bn);
    };
    Uint232.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint232.fromBnish(bn);
    };
    Uint232.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint232.fromBnish(bn);
    };
    Uint232.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 29) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint232(uint8Array);
    };
    Uint232.fromBignumberish = function (bignumberish) {
        return Uint232.fromNumberString(10, bignumberish.toString(10));
    };
    Uint232.LENGTH = 29;
    return Uint232;
}(UintX_1.UintX));
exports.Uint232 = Uint232;
var Uint240 = /** @class */ (function (_super) {
    __extends(Uint240, _super);
    function Uint240(uintable) {
        return _super.call(this, 30, uintable) || this;
    }
    Uint240.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint240.fromBnish(bn);
    };
    Uint240.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint240.fromBnish(bn);
    };
    Uint240.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint240.fromBnish(bn);
    };
    Uint240.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint240.fromBnish(bn);
    };
    Uint240.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint240.fromBnish(bn);
    };
    Uint240.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint240.fromBnish(bn);
    };
    Uint240.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint240.fromBnish(bn);
    };
    Uint240.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint240.fromBnish(bn);
    };
    Uint240.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint240.fromBnish(bn);
    };
    Uint240.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 30) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint240(uint8Array);
    };
    Uint240.fromBignumberish = function (bignumberish) {
        return Uint240.fromNumberString(10, bignumberish.toString(10));
    };
    Uint240.LENGTH = 30;
    return Uint240;
}(UintX_1.UintX));
exports.Uint240 = Uint240;
var Uint248 = /** @class */ (function (_super) {
    __extends(Uint248, _super);
    function Uint248(uintable) {
        return _super.call(this, 31, uintable) || this;
    }
    Uint248.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint248.fromBnish(bn);
    };
    Uint248.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint248.fromBnish(bn);
    };
    Uint248.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint248.fromBnish(bn);
    };
    Uint248.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint248.fromBnish(bn);
    };
    Uint248.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint248.fromBnish(bn);
    };
    Uint248.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint248.fromBnish(bn);
    };
    Uint248.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint248.fromBnish(bn);
    };
    Uint248.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint248.fromBnish(bn);
    };
    Uint248.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint248.fromBnish(bn);
    };
    Uint248.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 31) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint248(uint8Array);
    };
    Uint248.fromBignumberish = function (bignumberish) {
        return Uint248.fromNumberString(10, bignumberish.toString(10));
    };
    Uint248.LENGTH = 31;
    return Uint248;
}(UintX_1.UintX));
exports.Uint248 = Uint248;
var Uint256 = /** @class */ (function (_super) {
    __extends(Uint256, _super);
    function Uint256(uintable) {
        return _super.call(this, 32, uintable) || this;
    }
    Uint256.prototype.opAdd = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.add(valueBn);
        return Uint256.fromBnish(bn);
    };
    Uint256.prototype.opSub = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.sub(valueBn);
        return Uint256.fromBnish(bn);
    };
    Uint256.prototype.opMul = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mul(valueBn);
        return Uint256.fromBnish(bn);
    };
    Uint256.prototype.opDiv = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.div(valueBn);
        return Uint256.fromBnish(bn);
    };
    Uint256.prototype.opDivRound = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.divRound(valueBn);
        return Uint256.fromBnish(bn);
    };
    Uint256.prototype.opMod = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.mod(valueBn);
        return Uint256.fromBnish(bn);
    };
    Uint256.prototype.opPow = function (uintable) {
        var thisBn = utils_1.genBnFromUintable(this);
        var valueBn = utils_1.genBnFromUintable(uintable);
        var bn = thisBn.pow(valueBn);
        return Uint256.fromBnish(bn);
    };
    Uint256.fromNumber = function (number) {
        var bn = new bn_js_1["default"](number);
        return Uint256.fromBnish(bn);
    };
    Uint256.fromNumberString = function (base, numberString) {
        var bn = new bn_js_1["default"](numberString, base);
        return Uint256.fromBnish(bn);
    };
    Uint256.fromBnish = function (bnish) {
        if (bnish.isNeg()) {
            throw new UintX_1.UintUnderflowError;
        }
        var array = bnish.toArray('be');
        if (array.length > 32) {
            throw new UintX_1.UintOverflowError;
        }
        var uint8Array = new Uint8Array(array);
        return new Uint256(uint8Array);
    };
    Uint256.fromBignumberish = function (bignumberish) {
        return Uint256.fromNumberString(10, bignumberish.toString(10));
    };
    Uint256.LENGTH = 32;
    return Uint256;
}(UintX_1.UintX));
exports.Uint256 = Uint256;
