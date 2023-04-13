"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRoutes = void 0;
const auth_1 = __importDefault(require("./routes/account/auth"));
function loadRoutes(app) {
    app.use("/api/auth", auth_1.default);
    app.use((error, req, res, next) => {
        res.status(error.status || 500).json({
            error: {
                message: error.message,
            },
        });
    });
    return app;
}
exports.loadRoutes = loadRoutes;
