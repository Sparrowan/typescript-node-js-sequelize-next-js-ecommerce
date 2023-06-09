"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenGuard = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const user_1 = require("./../models/user");
function getTokenFromHeaders(headers) {
    const header = headers.authorization;
    if (!header)
        return header;
    return header.split(' ')[1];
}
exports.tokenGuard = (() => (req, res, next) => {
    const token = getTokenFromHeaders(req.headers) || req.query.token || req.body.token || '';
    const hasAccess = (token) => {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this._jwtSecret, (err, decoded) => {
                if (err) {
                    resolve(false);
                    return;
                }
                UserService._user = user_1.User.findById(decoded['id']);
                resolve(true);
                return;
            });
        });
    };
    hasAccess.then((a) => {
        if (!a)
            return res.status(403).send({ message: 'No access' });
        next();
    });
});
