"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileNamesInDirectory = exports.getDirectories = exports.objIsEmpty = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * Check if an object is empty or not
 * @param {*} obj Object to be checked
 * @returns Boolean
 */
let objIsEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};
exports.objIsEmpty = objIsEmpty;
const getDirectories = (source) => fs_1.default
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
exports.getDirectories = getDirectories;
let getFileNamesInDirectory = (folders, dirPath) => {
    let files = [];
    folders.forEach((folder) => {
        fs_1.default.readdirSync(path_1.default.join(dirPath, folder))
            .filter((file) => {
            return file.indexOf(".") !== 0 && file.slice(-3) === ".ts";
        })
            .forEach((file) => {
            files.push(path_1.default.join(folder, file));
        });
    });
    return files;
};
exports.getFileNamesInDirectory = getFileNamesInDirectory;
