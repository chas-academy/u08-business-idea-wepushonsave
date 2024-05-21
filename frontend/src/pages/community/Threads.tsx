import React, { useState } from 'react';

interface Thread {
   id: number;
   title: string;
   content: string;
   comments: Comment[];
   collapsed: boolean; //True on init, hides comments
}

interface Comment {
   id: number;
   text: string;
   userId: number; //Id for user who commented
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
      collapsed: true, // Initially collapse comments (same in every thread)
   },
   {
      id: 2,
      title: 'Thread 2',
      content: 'Content of Thread 2',
      comments: [
         { id: 1, text: 'Comment 1 for Thread 2', userId: 1 },
         { id: 2, text: 'Comment 2 for Thread 2', userId: 2 },
         { id: 3, text: 'Comment 3 for Thread 2', userId: 3 },
         { id: 4, text: 'Comment 4 for Thread 2', userId: 2 },
         { id: 5, text: 'Comment 5 for Thread 2', userId: 1 },
         { id: 6, text: 'Comment 6 for Thread 2', userId: 3 },
      ],
      collapsed: true,
   },
   {
      id: 3,
      title: 'Thread 3',
      content: 'Content of Thread 3',
      comments: [
         { id: 1, text: 'Comment 1 for Thread 3', userId: 1 },
         { id: 2, text: 'Comment 2 for Thread 3', userId: 2 },
         { id: 3, text: 'Comment 3 for Thread 3', userId: 3 },
         { id: 4, text: 'Comment 4 for Thread 3', userId: 2 },
         { id: 5, text: 'Comment 5 for Thread 3', userId: 1 },
         { id: 6, text: 'Comment 6 for Thread 3', userId: 3 },
      ],
      collapsed: true,
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
         collapsed: false, // collapse comments for thread on init
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
                     userId: 1, // Mockdata Id for user
                  },
               ],
               collapsed: false, // Set collapsed to false to display all comments
            }
            : thread
      );
      setThreads(updatedThreads);
      // Reset the value of the input field
      e.currentTarget.comment.value = '';
   };

   const toggleComments = (threadId: number) => {
      const updatedThreads = threads.map(thread =>
         thread.id === threadId
            ? { ...thread, collapsed: !thread.collapsed }
            : thread
      );
      setThreads(updatedThreads);
   };

   return (
      <div className="flex flex-col items-center">
         <h1 className="text-3xl font-bold mb-4">Community Threads</h1>
         <form onSubmit={handleNewThreadSubmit} className="w-full max-w-lg mb-4">
            <input
               type="text"
               placeholder="Thread Title"
               value={newThreadTitle}
               onChange={(e) => setNewThreadTitle(e.target.value)}
               className="w-full bg-gray-200 border border-gray-400 rounded py-2 px-4 mb-2 focus:outline-none focus:bg-white focus:border-blue-500"
            />
            <textarea
               placeholder="Thread Content"
               value={newThreadContent}
               onChange={(e) => setNewThreadContent(e.target.value)}
               className="w-full h-24 bg-gray-200 border border-gray-400 rounded py-2 px-4 mb-2 focus:outline-none focus:bg-white focus:border-blue-500"
            />
            <button
               type="submit"
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
               Create Thread
            </button>
         </form>

         {threads.map(thread => (
            <div key={thread.id} className="w-full max-w-lg mb-4">
               <h2 className="text-2xl font-bold cursor-pointer" onClick={() => toggleComments(thread.id)}>
                  {thread.title}
               </h2>
               <p className="text-gray-700">{thread.content}</p>

               {/*"show/hide comments" toggle*/}
               <p
                  className="text-blue-500 cursor-pointer"
                  onClick={() => toggleComments(thread.id)}
               >
                  {thread.collapsed ? 'See comments' : 'Hide comments'}
               </p>

               {/* Display comments */}
               {!thread.collapsed && (
                  <div>
                     {thread.comments.slice(0, 2).map(comment => (
                        <div key={comment.id} className="border border-gray-300 rounded p-2 mt-2">
                           <p className="text-gray-700">{comment.text}</p>
                        </div>
                     ))}
                     {thread.comments.slice(2).map(comment => (
                        <div key={comment.id} className="border border-gray-300 rounded p-2 mt-2" style={{ display: thread.collapsed ? 'none' : 'block' }}>
                           <p className="text-gray-700">{comment.text}</p>
                        </div>
                     ))}
                     {/* Display "See more" if comments < 2 */}
                     {thread.comments.length > 2 && (
                        <p className="text-blue-500 cursor-pointer mt-2" onClick={() => toggleComments(thread.id)}>
                           {thread.collapsed ? 'See more' : 'Hide comments'}
                        </p>
                     )}
                  </div>
               )}

               <form onSubmit={(e) => handleCommentSubmit(e, thread.id, e.currentTarget.comment.value)} className="mt-2">
                  <input
                     type="text"
                     name="comment"
                     placeholder="Add a comment"
                     required
                     className="w-full bg-gray-200 border border-gray-400 rounded py-2 px-4 mb-2 focus:outline-none focus:bg-white focus:border-blue-500"
                  />
                  <button
                     type="submit"
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                     Post Comment
                  </button>
               </form>
            </div>
         ))}
      </div>
   );
};

export default Threads;
