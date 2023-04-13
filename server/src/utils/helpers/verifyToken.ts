import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

interface MyUserRequest extends Request {
  // Use `user?:` here instead of `user:`.
  user?: any;
}

export const verifyToken = (
  req: MyUserRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = (<string>authHeader).split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC!, (err: any, user: any) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

export const verifyTokenAndAuthorization = (
  req: MyUserRequest,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

export const verifyTokenAndAdmin = (
  req: MyUserRequest,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};
