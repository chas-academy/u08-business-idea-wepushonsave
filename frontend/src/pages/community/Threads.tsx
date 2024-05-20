import React, { useState } from 'react';

interface Thread {
   id: number;
   title: string;
   content: string;
   comments: Comment[];
}

interface Comment {
   id: number;
   text: string;
   userId: number; // Assuming user ID is used to identify who made the comment
}

const mockThreads: Thread[] = [
   {
      id: 1,
      title: 'Thread 1',
      content: 'Content of Thread 1',
      comments: [
         { id: 1, text: 'Comment 1 for Thread 1', userId: 1 },
         { id: 2, text: 'Comment 2 for Thread 1', userId: 2 },
      ],
   },
   {
      id: 2,
      title: 'Thread 2',
      content: 'Content of Thread 2',
      comments: [
         { id: 1, text: 'Comment 1 for Thread 2', userId: 1 },
         { id: 2, text: 'Comment 2 for Thread 2', userId: 2 },
      ],
   },
];

const Threads: React.FC = () => {
   const [threads, setThreads] = useState<Thread[]>(mockThreads);
   const [newThreadTitle, setNewThreadTitle] = useState('');
   const [newThreadContent, setNewThreadContent] = useState('');

   const handleNewThreadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newThread: Thread = {
         id: threads.length + 1,
         title: newThreadTitle,
         content: newThreadContent,
         comments: [],
      };
      setThreads([...threads, newThread]);
      setNewThreadTitle('');
      setNewThreadContent('');
   };

   const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>, threadId: number, commentText: string) => {
      e.preventDefault();
      const updatedThreads = threads.map(thread =>
         thread.id === threadId
            ? {
               ...thread,
               comments: [
                  ...thread.comments,
                  {
                     id: thread.comments.length + 1,
                     text: commentText,
                     userId: 1, // Assuming user ID for the current user
                  },
               ],
            }
            : thread
      );
      setThreads(updatedThreads);
   };

   return (
      <div>
         <h1>Community Threads</h1>
         <form onSubmit={handleNewThreadSubmit}>
            <input
               type="text"
               placeholder="Thread Title"
               value={newThreadTitle}
               onChange={e => setNewThreadTitle(e.target.value)}
               required
            />
            <textarea
               placeholder="Thread Content"
               value={newThreadContent}
               onChange={e => setNewThreadContent(e.target.value)}
               required
            ></textarea>
            <button type="submit">Create Thread</button>
         </form>

         {threads.map(thread => (
            <div key={thread.id}>
               <h2>{thread.title}</h2>
               <p>{thread.content}</p>

               <form onSubmit={(e) => handleCommentSubmit(e, thread.id, e.currentTarget.comment.value)}>
                  <input type="text" name="comment" placeholder="Add a comment" required />
                  <button type="submit">Post Comment</button>
               </form>

               {thread.comments.map(comment => (
                  <div key={comment.id}>
                     <p>{comment.text}</p>
                  </div>
               ))}
            </div>
         ))}
      </div>
   );
};

export default Threads;
