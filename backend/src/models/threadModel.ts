import { Schema, model, Document } from 'mongoose';

interface Comment {
   text: string;
   userId: number;
}

interface ThreadDocument extends Document {
   content: string;
   comments: Comment[];
   collapsed: boolean;
}

const CommentSchema = new Schema<Comment>({
   text: { type: String, required: true },
   userId: { type: Number, required: true },
});

const ThreadSchema = new Schema<ThreadDocument>({
   content: { type: String, required: true },
   comments: { type: [CommentSchema], default: [] },
   collapsed: { type: Boolean, default: true },
});

const Thread = model<ThreadDocument>('Thread', ThreadSchema);

export default Thread;
