import { register } from "../../controllers/account/AuthController";
import {verifyToken} from "../../utils/helpers/verifyToken"
import { userRules } from "../../utils/rules/user.rules";

const basePath = "/api/auth/";
import express from "express";

const router = express.Router();

router.post("/register", userRules['forRegister'],register)


export default router;
export const auth = (server: any) => {
  server.post(basePath + "register");
};