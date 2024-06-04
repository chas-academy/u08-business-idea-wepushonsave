/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';

interface Thread {
   _id: number;
   content: string;
   comments: Comment[];
   collapsed: boolean; // True on init, hides comments
}

interface Comment {
   _id: number;
   text: string;

}

const Threads: React.FC = () => {
   const [threads, setThreads] = useState<Thread[]>([]);
   const [newThreadContent, setNewThreadContent] = useState('');

   useEffect(() => {
      fetchThreads();
   }, []);

   const fetchThreads = async () => {
      try {
         const response = await fetch('https://mtg-tomb.onrender.com/threads/all'); // Adjust the endpoint as needed
         const data = await response.json();
         // Initialize collapsed to true for all threads
         const initializedThreads = data.map((thread: Thread) => ({ ...thread, collapsed: true }));
         setThreads(initializedThreads);
      } catch (error) {
         console.error('Error fetching threads:', error);
      }
   };

   const handleNewThreadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newThread: Omit<Thread, '_id'> = {
         content: newThreadContent,
         comments: [],
         collapsed: true, // Collapse comments for thread on init
      };

      try {
         const response = await fetch('https://mtg-tomb.onrender.com/threads/create', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(newThread),
         });

         if (response.ok) {
            const createdThread = await response.json();
            setNewThreadContent('');
            fetchThreads();
         } else {
            console.error('Error creating thread');
         }
      } catch (error) {
         console.error('Error creating thread:', error);
      }
   };


   const handleCommentSubmit = async (
      e: React.FormEvent<HTMLFormElement>,
      threadId: number,
      commentText: string
   ) => {
      e.preventDefault();
      const newComment: Omit<Comment, '_id'> = {
         text: commentText,
      };

      try {
         const response = await fetch(`https://mtg-tomb.onrender.com/threads/${threadId}/comments`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComment),
         });


         if (response.ok) {
            const createdComment = await response.json();
            const updatedThreads = threads.map(thread =>
               thread._id === threadId
                  ? {
                     ...thread,
                     comments: [...thread.comments, createdComment],
                     collapsed: false, // Set collapsed to false to display all comments
                  }
                  : thread
            );
            setThreads(updatedThreads);
            // Reset the input field
            e.currentTarget.comment.value = '';
         } else {
            console.error('Error adding comment');
         }
      } catch (error) {
         console.error('Error adding comment:', error);
      }
   };

   const toggleComments = (threadId: number) => {
      const updatedThreads = threads.map(thread =>
         thread._id === threadId
            ? { ...thread, collapsed: !thread.collapsed }
            : thread
      );
      setThreads(updatedThreads);
   };

   return (
      <div className="flex flex-col items-center p-2">
         <h1 className="text-3xl text-white/80 font-bold mb-4">Community Threads</h1>

         <form onSubmit={handleNewThreadSubmit} className="w-full max-w-lg mb-4">
            <textarea
               placeholder="Thread Content"
               value={newThreadContent}
               onChange={e => setNewThreadContent(e.target.value)}
               className="w-full h-24 bg-gray-200 border border-gray-400 rounded py-2 px-4 mb-2 focus:outline-none focus:bg-white focus:border-blue-500"
            />
            <button
               type="submit"
               className="bg-btn-gradient text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
               Create Thread
            </button>
         </form>
         <div className="threadSection  flex flex-col-reverse">
            {threads.map(thread => (
               <div key={thread._id} className="bg-white/40 w-full max-w-lg mb-4">

                  <p className="min-h-20 text-white p-2">{thread.content}</p>

                  <button
                     className="text-white text-sm bg-nav-gradient w-3/7 px-4 py-2 cursor-pointer rounded"
                     onClick={() => toggleComments(thread._id)}>
                     {thread.collapsed ? 'Show comments' : 'Hide comments'}
     </button>

                  {!thread.collapsed && (
                     <div>
                        {thread.comments.map(comment => (
                           <div
                              key={comment._id}
                              className="border border-white rounded p-2 m-2">
                              <p className="text-white">{comment.text}</p>
                           </div>
                        ))}
                     </div>
                  )}

                  <form
                     onSubmit={e =>
                        handleCommentSubmit(
                           e,
                           thread._id,
                           e.currentTarget.comment.value
                        )
                     }
                     className="mt-2">
                     <input
                        type="text"
                        name="comment"
                        placeholder="Add a comment"
                        required
                        className="w-full bg-white/30 border border-white/30 rounded py-2 px-4 mb-2 focus:outline-none focus:bg-white focus:border-blue-500"
                     />
                     <button
                        type="submit"
                        className="bg-btn-gradient hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">

                        Post Comment
                     </button>
                  </form>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Threads;
