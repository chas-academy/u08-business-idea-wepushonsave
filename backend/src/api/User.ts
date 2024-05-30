import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "../interfaces/IUser";

const router = express.Router();

// Signup
router.post("/signup", (req: Request, res: Response) => {
  /*let {email, password} = req.body;
    email = email.trim();
    password = password.trim();*/

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
    // Check if user already exists
    User.find({ email })
      .then((result: IUser[]) => {
        console.log(result); //TEST
        // Handle the result
        if (result && result.length > 0) {
          // User already exists
          return res.status(400).json({ message: "User already exists!" });
        } else {
          // Try to create new user

          // password handling
          const saltRounds: number = 10;
          bcrypt
            .hash(password, saltRounds)
            .then((hashedPassword: string) => {
              const newUser = new User({
                username,
                email,
                password: hashedPassword,
              });

              newUser
                .save()
                .then((result: IUser) => {
                  return res.status(201).json({
                    message: "User created successfully!",
                    data: result,
                  });
                })
                .catch((err: Error) => {
                  console.log(err);
                  return res
                    .status(500)
                    .json({ message: "An error occurred while saving user!" });
                });
            })
            .catch((err: Error) => {
              console.log(err);
              return res
                .status(500)
                .json({ message: "An error occurred while hashing password!" });
            });
        }
      })
      .catch((err: Error) => {
        console.log(err);
        return res.status(500).json({ message: "Internal server error!" });
      });
  }
});

// Login
router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email, password); //TEST
  console.log(req.body); //TEST

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
            .catch((_err) => {
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
      .catch((_err) => {
        return res
          .status(500)
          .json({ message: "An error occurred while retrieving user data!" });
      });
  }
});

export default router;
