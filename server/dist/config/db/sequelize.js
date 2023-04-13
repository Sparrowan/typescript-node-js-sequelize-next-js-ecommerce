"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.sequelize = new sequelize_1.Sequelize(// DB connection
process.env.database, process.env.username, process.env.password, {
    host: process.env.host,
    dialect: "mysql",
    pool: {
        max: 10,
        min: 0,
        acquire: 100000,
        idle: 10000,
    },
    define: {
        timestamps: false,
    },
    logging: false,
});
exports.sequelize.authenticate();
