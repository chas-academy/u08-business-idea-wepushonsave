import { Schema, model, Document } from 'mongoose';

interface Comment extends Document {
   text: string;
   userId: number;
}

const CommentSchema = new Schema<Comment>({
   text: { type: String, required: true },
   userId: { type: Number, required: true }
});

const CommentModel = model<Comment>('Comment', CommentSchema);
export default CommentModel;