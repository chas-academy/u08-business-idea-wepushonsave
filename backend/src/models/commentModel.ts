import { Schema, model, Document } from 'mongoose';

export interface CommentDocument extends Document {
   text: string;
   userId: number;
}

const CommentSchema = new Schema<CommentDocument>({
   text: { type: String, required: true },
   userId: { type: Number, required: true },
});

const Comment = model<CommentDocument>('Comment', CommentSchema);
export default Comment;
