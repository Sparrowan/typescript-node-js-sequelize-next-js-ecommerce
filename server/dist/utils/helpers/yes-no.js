'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateYesNo = void 0;
/**
 * Converts integer representation of yes/no to string representation and vice versa
 * @param {*} arg - Integer yes/no
 * @param {*} reverse - Specifies the order of data representation
 * @returns - Depends on the reverse arg
 */
let translateYesNo = (arg, reverse = false) => {
    let _ = {
        0: 'No',
        1: 'Yes',
        2: 'N/A'
    };
    if (reverse) {
        _ = {
            No: 0,
            Yes: 1,
            'N/A': 2
        };
    }
    return _[arg];
};
exports.translateYesNo = translateYesNo;
