import { Schema, model } from "mongoose";
import { ICard } from "../interfaces/ICard";

/* const cardSchema = new Schema<any>({});
 */
const cardSchema = new Schema<ICard>({
  name: { type: String, required: true },
});
const Card = model<ICard>("Card", cardSchema);

export default Card;
