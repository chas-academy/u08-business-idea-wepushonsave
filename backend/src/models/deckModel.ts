import { Schema, model } from "mongoose";
import { IDeck } from "../interfaces/IDeck";

const deckSchema = new Schema<IDeck>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
  },
  {
    timestamps: true,
  }
);

const Deck = model<IDeck>("Deck", deckSchema);
export default Deck;
