import express, { Request, Response } from 'express';
import Thread from '../models/threadModel';
import Comment from '../models/commentModel';

const router = express.Router();

// Get all threads
router.get('/', async (req: Request, res: Response) => {
   try {
      const threads = await Thread.find().populate('comments');
      res.json(threads);
   } catch (error) {
      res.status(500).send(error);
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
      res.status(500).send(error);
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

      thread.comments.push(newComment);
      await thread.save();

      res.status(201).json(newComment);
   } catch (error) {
      res.status(500).send(error);
   }
});

export default router;
