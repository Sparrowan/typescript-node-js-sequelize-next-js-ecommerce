"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const AuthController_1 = require("../../controllers/account/AuthController");
const user_rules_1 = require("../../utils/rules/user.rules");
const basePath = "/api/auth/";
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/register", user_rules_1.userRules['forRegister'], AuthController_1.register);
exports.default = router;
const auth = (server) => {
    server.post(basePath + "register");
};
exports.auth = auth;
