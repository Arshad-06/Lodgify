import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
const saltRounds = 10;

//REGISTER
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User Has Been Created!");
  } catch (error) {
    next(error);
  }
};

//LOGIN
export const login = async (req, res, next) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username });
    if (!foundUser) return next(createError(404, "User Not Found!"));

    const isCorrect = await bcrypt.compare(
      req.body.password,
      foundUser.password
    );
    if (!isCorrect)
      return next(createError(400, "Incorrect Password/Username!"));

    const token = jwt.sign(
      { id: foundUser._id, isAdmin: foundUser.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...otherDetails } = foundUser._doc;
    res
      .cookie("ACCESS_TOKEN", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};
