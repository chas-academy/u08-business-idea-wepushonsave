import { Schema, model, Document, Types } from 'mongoose';

// Define Comment interface extending Document
export interface CommentDocument extends Document {
   text: string;
   userId: number;
   createdAt: Date;
}

// Define Thread interface extending Document
export interface ThreadDocument extends Document {
   content: string;
   comments: Types.DocumentArray<CommentDocument>;
   collapsed: boolean;
   createdAt: Date;
}

const CommentSchema = new Schema<CommentDocument>({
   text: { type: String, required: true },
   userId: { type: Number, required: true },
}, { timestamps: true });


const ThreadSchema = new Schema<ThreadDocument>({
   title: { type: String, required: true },
   content: { type: String, required: true },
   comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
   collapsed: { type: Boolean, default: true },
}, { timestamps: true });


const Thread = model<ThreadDocument>('Thread', ThreadSchema);
export default Thread;
