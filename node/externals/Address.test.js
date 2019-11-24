"use strict";
exports.__esModule = true;
var Address_1 = require("./Address");
test('nullAddress', function () {
    expect(Address_1.Address.genNull().getIsNull()).toBe(true);
});
