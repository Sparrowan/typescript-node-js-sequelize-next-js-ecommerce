'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.int_value_columns = void 0;
const yes_no_1 = require("./yes-no");
/**
 * Sets helper functions that convert integer representations to string
 */
exports.int_value_columns = {
    custom: yes_no_1.translateYesNo,
    co_pay: yes_no_1.translateYesNo,
};
