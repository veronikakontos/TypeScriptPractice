"use strict";
var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map