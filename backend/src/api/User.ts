/* eslint-disable react/react-in-jsx-scope */
import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import List from "../models/listModel";
import { authMiddleware } from "../middleware/auth";
const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Input email or password!" });
  } else if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters!" });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Invalid email!" });
  } else {
    try {
      console.log("Checking if user already exists...");
      const existingUser = await User.findOne({ email });
      console.log("Existing user:", existingUser);
      if (existingUser) {
        console.log("User already exists!");
        return res.status(400).json({ message: "User already exists!" });
      }

      // password handling
      const saltRounds: number = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();

      // Create default lists for the user
      const lists = [
        { userId: savedUser._id, title: "My card collection", cardIds: [] },
        { userId: savedUser._id, title: "Binder - Rares", cardIds: [] },
        { userId: savedUser._id, title: "Binder - Commons", cardIds: [] },
      ];

      await List.insertMany(lists);
      console.log("Lists created successfully!");

      return res.status(201).json({
        message: "User created successfully!",
        data: savedUser,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: "An error occurred during registration!" });
    }
  }
});

router.get("/logout", async (req: Request, res: Response) => {
  try {
    res.clearCookie("token");

    const hasCookie = req.cookies.token !== undefined;

    return res.status(200).json({
      message: "Cookie cleared successfully!",
      cookieExists: !hasCookie,
    });
  } catch (error) {
    console.error("Error clearing cookie:", error);
    res
      .status(500)
      .json({ message: "An error occurred while clearing the cookie." });
  }
});

router.get("/login", authMiddleware, async (req: Request, res: Response) => {
  res.send({ isLoggedIn: true });
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ message: "Please provide both email and password." });
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign({ userId: user._id }, "jwt-secret-key", {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res.status(200).json({ message: "User signed in successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred during login." });
  }
});

export default router;
