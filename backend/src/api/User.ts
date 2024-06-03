/* eslint-disable react/react-in-jsx-scope */
import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "../interfaces/IUser";
import List from "../models/listModel";

const router = express.Router();

// Register
router.post("/register", async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  console.log(email, password, username); // TEST

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
        { userId: savedUser._id, title: "My card collection", cardIds: "" },
        { userId: savedUser._id, title: "Binder - Rares", cardIds: "" },
        { userId: savedUser._id, title: "Binder - Commons", cardIds: "" },
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

// Login
router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email == "" || password == "") {
    return res.status(400).json({ message: "Input email or password!" });
  } else {
    // Check if user exists
    User.find({ email })
      .then((data) => {
        if (data.length) {
          // User exists
          const userId = data[0]._id; // Access the userId from the user data
          const hashedPassword = data[0].password;
          const userEmail = data[0].email; // Access the email property of the user data

          bcrypt
            .compare(password, hashedPassword)
            .then((result) => {
              if (result) {
                // Create token
                const token = jwt.sign(
                  { email: userEmail, userId: userId },
                  "jwt-secret-key",
                  {
                    expiresIn: "1d",
                  }
                ); // Include the userId in the token payload
                res.cookie("token", token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production", // Ensure the cookie is only sent over HTTPS in production
                  sameSite: false, // Allows cross-site cookies
                });
                return res
                  .status(200)
                  .json({ message: "User signed in successfully!" });
              } else {
                return res
                  .status(400)
                  .json({ message: "Invalid email or password!" });
              }
            })
            .catch((err: Error) => {
              console.log(err);
              return res.status(500).json({
                message: "An error occurred while comparing passwords!",
              });
            });
        } else {
          return res
            .status(400)
            .json({ message: "Invalid credentials entered!" });
        }
      })
      .catch((err: Error) => {
        console.log(err);
        return res
          .status(500)
          .json({ message: "An error occurred while retrieving user data!" });
      });
  }
});

export default router;
