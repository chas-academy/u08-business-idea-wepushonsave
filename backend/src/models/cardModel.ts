import { Schema, model } from "mongoose";
import { ICard } from "../interfaces/ICard";

const cardSchema = new Schema<ICard>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  type_line: { type: String, required: true },
});

const Card = model<ICard>("Card", cardSchema);

export default Card;
