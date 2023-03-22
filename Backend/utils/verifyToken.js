import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.ACCESS_TOKEN;
  if (!token) {
    return next(createError(401, "You Are Not Authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, foundUser) => {
    if (err) return next(createError(403, "Invalid Token!"));
    req.foundUser = foundUser;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.foundUser.id === req.params.id || req.foundUser.isAdmin) {
      next();
    } else {
      return next(createError(403, "You Are Not Authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.foundUser.isAdmin) {
      next();
    } else {
      return next(createError(403, "You Are Not An Admin!"));
    }
  });
};
