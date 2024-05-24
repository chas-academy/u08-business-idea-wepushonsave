import { Schema, model, Document } from 'mongoose';
import { CommentDocument } from './commentModel';

export interface ThreadDocument extends Document {
   title: string;
   content: string;
   comments: CommentDocument[];
   collapsed: boolean;
}

const ThreadSchema = new Schema<ThreadDocument>({
   title: { type: String, required: true },
   content: { type: String, required: true },
   comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
   collapsed: { type: Boolean, default: true },
});

const Thread = model<ThreadDocument>('Thread', ThreadSchema);
export default Thread;
