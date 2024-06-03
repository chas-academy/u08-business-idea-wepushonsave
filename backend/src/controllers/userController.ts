import { Request, Response } from "express";
import User, { IUser } from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: {
    id: string;
  };
}

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    let user: IUser | null = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    user = new User({ username, email, password });
    await user.save();

    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    let user: IUser | null = await User.findOne({ email });
    if (!user) {
      console.log("Invalid email");
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid password");
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    console.log("Login successful");
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err: any) {
    console.error("Error during login:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getMe = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.user?.id).select("-password");
    res.json(user);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteAccount = async (req: AuthRequest, res: Response) => {
  try {
    await User.findByIdAndDelete(req.user?.id);
    res.json({ msg: "User account deleted" });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const changePassword = async (req: AuthRequest, res: Response) => {
  const { oldPassword, newPassword } = req.body;

  try {
    const user = await User.findById(req.user?.id);
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      console.log("Invalid current password");
      return res.status(400).json({ msg: "Invalid current password" });
    }

    console.log("Old password matches, updating to new password");
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    console.log("Password changed successfully");
    res.json({ msg: "Password changed successfully" });
  } catch (err: any) {
    console.error("Error changing password:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
