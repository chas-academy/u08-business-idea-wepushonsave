import { Schema, model, Document, Types } from "mongoose";

interface IList extends Document {
  userId: Types.ObjectId;
  title: string;
  cardIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface IListDocument extends IList, Document {
  addCard: (cardId: Types.ObjectId) => Promise<void>;
}

const listSchema = new Schema<IListDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    cardIds: [{ type: String, ref: "Card" }],
  },
  {
    timestamps: true,
  }
);

listSchema.methods.addCard = async function (
  this: IListDocument,
  cardId: string
) {
  this.cardIds.push(cardId);
  await this.save();
};

const List = model<IListDocument>("List", listSchema);

export default List;
export { IList };
