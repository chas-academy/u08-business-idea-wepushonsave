import { Schema, model, Document, Types, Model } from "mongoose";

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

interface IListModel extends Model<IListDocument> {
  findListWithCards: (
    listId: Types.ObjectId,
    userId: Types.ObjectId
  ) => Promise<IListDocument | null>;
}

// CREATE A LIST
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

// ADD CARD IN LIST
listSchema.methods.addCard = async function (
  this: IListDocument,
  cardId: string
) {
  this.cardIds.push(cardId);
  await this.save();
};

// GET A SPECIFIC LIST
listSchema.statics.getListById = async function (
  this: Model<IListDocument>,
  listId: Types.ObjectId
) {
  return this.findOne({ _id: listId });
};

const List = model<IListDocument, IListModel>("List", listSchema);

export default List;
export { IList, IListDocument, IListModel };
