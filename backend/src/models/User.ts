import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";
import { Schema, model } from "mongoose";
//import { connect } from 'mongoose';

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
const User = model<IUser>("User", UserSchema);

export default User;
