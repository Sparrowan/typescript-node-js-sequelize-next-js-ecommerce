import { User } from "../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import createError from '../../utils/helpers/createError'
import { validationResult } from 'express-validator'


export const register = async (req:Request, res:Response, next:NextFunction) => {
  {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const hash = bcrypt.hashSync(req.body.password, 5);
      await User
            .create({
              ...req.body,
              password: hash,
            })
        .then((user) => {
            res.status(201).json({
            message: "user successful created",data: user,
            });
        });
      
    } catch (err) {
      next(err);
    }
  };
  }