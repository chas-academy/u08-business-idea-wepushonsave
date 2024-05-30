import { Router } from 'express';
import Thread from '../models/threadModel';

const router = Router();

// Get all threads
router.get('/all', async (req, res) => {
   try {
      const threads = await Thread.find();
      res.json(threads);
   } catch (error) {
      res.status(500).json({ message: 'Server error' });
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
      res.status(500).json({ message: 'Server error' });
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
      thread.collapsed = false; // Set collapsed to false to display all comments
      const updatedThread = await thread.save();

      res.status(201).json(updatedThread.comments[updatedThread.comments.length - 1]);
   } catch (error) {
      res.status(500).json({ message: 'Server error' });
   }
});

export default router;
