import { Router } from 'express';
import Thread from '../models/threadModel';

const router = Router();

// Get all threads
router.get('/all', async (req, res) => {
   try {
      const threads = await Thread.find().sort({ createdAt: -1 });
      res.json(threads);
   } catch (error) {
      console.error('Error fetching threads:', error);
      res.status(500).json({ message: 'Error fetching threads' });
   }
});

// Create a new thread
router.post('/create', async (req, res) => {
   try {
      const { content } = req.body;
      const newThread = new Thread({ content, comments: [], collapsed: false });
      const savedThread = await newThread.save();
      res.status(201).json(savedThread);
   } catch (error) {
      console.error('Error creating thread:', error);
      res.status(500).json({ message: 'Error creating thread' });
   }
});

// Add a comment to a thread
router.post('/:threadId/comments', async (req, res) => {
   try {
      const { threadId } = req.params;
      const { text, userId } = req.body;

      const thread = await Thread.findById(threadId);
      if (!thread) {
         return res.status(404).json({ message: 'Thread not found' });
      }

      thread.comments.push({ text, userId });
      thread.collapsed = false;
      const updatedThread = await thread.save();

      res.status(201).json(updatedThread.comments[updatedThread.comments.length - 1]);
   } catch (error) {
      console.error('Error adding comment:', error);
      res.status(500).json({ message: 'Error adding comment' });
   }
});

export default router;
