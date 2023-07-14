const express = require("express");
const { UserModel } = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  const { first, last, email, department, salary, password } = req.body;
  const registeredUser = await UserModel.findOne({ email });

  if (registeredUser) {
    res.status(200).json({ msg: "User already exist, please login" });
  } else {
    bcrypt.hash(password, 5, async (err, hash) => {
      // Store hash in your password DB.
      if (err) {
        res.status(402).json({ msg: err.message });
      } else {
        const user = new UserModel({
          first,
          last,
          email,
          department,
          salary,
          password: hash,
        });
        await user.save();
        res.status(201).json({ msg: "user is registered", user: req.body });
      }
    });
  }
});

userRouter.post("/login", async (req, res) => {
  // res.send(req.body);
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        // result == true
        if (result) {
          let token = jwt.sign(
            {
              email,
              password,
            },
            "fullstack",
            { expiresIn: "7d" }
          );
          res.status(200).json({ msg: "logged In", token });
        } else {
          res.status(502).json({ msg: "enter valid password" });
        }
      });
    } else {
      res.status(200).json({ msg: "user does not exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

userRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = {
  userRouter,
};
