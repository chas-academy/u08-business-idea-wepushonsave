import express, { Request, Response } from 'express';
import Thread from '../models/threadModel';
import Comment from '../models/commentModel';

const router = express.Router();

// Get all threads
router.get('/', async (req: Request, res: Response) => {
   try {
      const threads = await Thread.find().sort({ createdAt: -1 });
      res.json(threads);
   } catch (error) {
      console.error('Error fetching threads:', error);
      res.status(500).json({ message: 'Error fetching threads' });

   }
});

// Create thread
router.post('/', async (req: Request, res: Response) => {
   try {
      const { title, content } = req.body;
      const newThread = new Thread({ title, content });
      await newThread.save();
      res.status(201).json(newThread);
   } catch (error) {
      console.error('Error creating thread:', error);
      res.status(500).json({ message: 'Error creating thread' });

   }
});

// Add a comment 
router.post('/:threadId/comments', async (req: Request, res: Response) => {
   try {
      const { threadId } = req.params;
      const { text, userId } = req.body;

      const newComment = new Comment({ text, userId });
      await newComment.save();

      const thread = await Thread.findById(threadId);
      if (!thread) {
         return res.status(404).send('Thread not found');
      }

      thread.comments.push({ text, userId });
      thread.collapsed = false;

      const updatedThread = await thread.save();

      res.status(201).json(newComment);
   } catch (error) {
      console.error('Error adding comment:', error);
      res.status(500).json({ message: 'Error adding comment' });

   }
});

export default router;
