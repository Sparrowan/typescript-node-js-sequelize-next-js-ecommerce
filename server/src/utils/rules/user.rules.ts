import * as bcrypt from "bcrypt";
import { check } from "express-validator";
import { User } from "../../models/user";

export const userRules = {
  forRegister: [
    check("email")
      .isEmail()
      .isLength({ min: 1 }).withMessage("Email is required")
      .withMessage("Invalid email format")
      .custom((email:string) => User.findOne({ where: { email } }).then((u) => !!!u))
      .withMessage("Email exists"),
    check("password").isLength({ min: 8 }).withMessage("Invalid password"),
    check("first_name").isLength({ min: 1 }).withMessage("First name is required"),
    check("last_name").isLength({ min: 1 }).withMessage("Last name is required"),
  ],
  forLogin: [
    check("email")
      .isEmail()
      .withMessage("Invalid email format")
      .custom((email:string) => User.findOne({ where: { email } }).then((u) => !!u))
      .withMessage("Invalid email or password"),
    check("password")
      .custom((password, { req }) => {
        return User.findOne({ where: { email: req.body.email } }).then((u) =>
          bcrypt.compare(password, u!.password)
        );
      })
      .withMessage("Invalid email or password"),
  ],
};
