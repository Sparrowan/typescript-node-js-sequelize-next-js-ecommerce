'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const intRepConverter_1 = require("../../utils/helpers/intRepConverter");
const table_columns_1 = require("./table_columns");
let fetchAllTables = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    let all_tables = [];
    yield sequelize.query('SHOW Tables', {
        type: sequelize.QueryTypes.SHOWTABLES
    }).then((result) => __awaiter(void 0, void 0, void 0, function* () {
        all_tables = result;
    }));
    return all_tables.filter((i) => !table_columns_1.tables.includes(i));
});
let generateModelNames = (table_names) => {
    table_names = table_names.map((table_name) => {
        let split_table_name = table_name.split("_");
        let model = split_table_name.map((word) => {
            return word[0].toUpperCase() + word.substring(1);
        }).join(" ").replace(" ", "");
        return { table_name, model };
    });
    return table_names;
};
let fetchDBRecords = (models) => __awaiter(void 0, void 0, void 0, function* () {
    let DB = {};
    yield Promise.all(models.map((model) => __awaiter(void 0, void 0, void 0, function* () {
        if (model) {
            let data = yield model.findAll();
            data.map((record) => {
                for (let key in record.dataValues) {
                    if (table_columns_1.columns.includes(key) && (!table_columns_1.exclude_table_column[model.tableName] || !table_columns_1.exclude_table_column[model.tableName][key])) {
                        DB[`${model.tableName}_${key}_${record.dataValues.id}`] = {
                            default: !intRepConverter_1.int_value_columns[key] ? record.dataValues[key] : intRepConverter_1.int_value_columns[key](record.dataValues[key]),
                        };
                    }
                }
            });
        }
    })));
    return DB;
});
let fetchDBTranslations = () => __awaiter(void 0, void 0, void 0, function* () {
    let db = require("../../models");
    let tables = yield fetchAllTables(sequelize);
    let models = generateModelNames(tables);
    let { sequelize, Sequelize } = db, all_models = __rest(db, ["sequelize", "Sequelize"]);
    return yield fetchDBRecords(models.map((i) => {
        if (i.table_name != "SequelizeMeta")
            return all_models[i.model];
    }));
});
let requireTranslation = (model) => {
    return !table_columns_1.tables.includes(model.tableName);
};
module.exports = {
    fetchDBTranslations,
    requireTranslation
};
