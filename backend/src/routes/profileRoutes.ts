import express, { Request, Response } from "express";
import { authMiddleware } from "../middleware/auth";
import User from "../models/User";
import bcrypt from "bcrypt";

const router = express.Router();

// GET profile info
router.get(
  "/profile-info",
  authMiddleware,
  async (req: Request, res: Response) => {
    const email = req.email;
    try {
      const user = await User.findOne({ email }).exec();
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const userName = user.username;
      const userEmail = user.email;
      res.send({ username: userName, email: userEmail });
    } catch (error) {
      console.error("Error finding user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// PUT /profile-info
router.put(
  "/profile-info",
  authMiddleware,
  async (req: Request, res: Response) => {
    const email = req.email;
    const { username, newEmail, password } = req.body;

    try {
      let updateData: any = { username, email: newEmail };

      if (password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        updateData.password = hashedPassword;
      }

      const user = await User.findOneAndUpdate({ email }, updateData, {
        new: true,
      }).exec();

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.send({ message: "Profile updated successfully", user });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

export default router;
