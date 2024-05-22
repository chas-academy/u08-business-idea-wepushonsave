import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User";
import { Request, Response } from "express";
import request from "superagent";


const router = express.Router();

// **SIGNUP** 
router.post("/signup", (req: Request, res: Response) => {
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
      .then((result: any[]) => {
        if (result && result.length > 0) {
          return res.status(400).json({ message: "User already exists!" });
        } else {

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
                .then((result: any) => {
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

// **SIGNIN**
router.post("/signin", (req: Request, res: Response) => {
  const { email, password } = req.body; 

    if (email == "" || password == "") {
      return res.status(400).json({ message: "Input email or password!" });
    } else {
      // Check if user exists
      User.find({ email })
      .then(data => {
        if (data.length) {
          //User exists

          const hashedPassword = data[0].password;
          bcrypt.compare(password, hashedPassword).then(result => {
            if (result) {
              return res.status(200).json({ message: "User signed in successfully!" });
            } else {
              return res.status(400).json({ message: "Invalid email or password!" });
            }
          })
          .catch(err => {
            return res.status(500).json({ message: "An error occurred while comparing passwords!" });
          });
        } else {
          return res.status(400).json({ message: "Invalid credentials entered!" });
        }
      })
      .catch(err => {
        return res.status(500).json({ message: "An error occurred while finding user!" });
      });
    }
  });

  export default router;
