'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const shared_1 = require("../utils/helpers/shared");
const basename = path_1.default.basename(__filename);
const routes = (server) => {
    let folders = (0, shared_1.getDirectories)(path_1.default.join(__dirname));
    folders.forEach((folder) => {
        fs_1.default
            .readdirSync(path_1.default.join(__dirname, folder))
            .filter((file) => {
            console.log("folders", folders);
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
            .forEach((file) => {
            require(path_1.default.join(__dirname, folder, file))(server);
        });
    });
};
exports.routes = routes;
