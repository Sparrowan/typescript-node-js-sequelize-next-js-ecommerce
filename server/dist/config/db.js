"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const sequelize_1 = require("sequelize");
exports.connection = new sequelize_1.Sequelize(// DB connection
'node_ecommerce', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 100000,
        idle: 10000,
    },
    define: {
        timestamps: false,
    },
    logging: false
});
