import { Types } from "mongoose";

export interface IDeck extends Document {
  userId: Types.ObjectId;
  name: string;
  cards: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}
