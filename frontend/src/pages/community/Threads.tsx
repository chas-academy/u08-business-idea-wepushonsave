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
   userId: number; // _id for user who commented
}

const Threads: React.FC = () => {
   const [threads, setThreads] = useState<Thread[]>([]);
   const [newThreadContent, setNewThreadContent] = useState('');
   const [userData, setUserData] = useState<any>({});

   useEffect(() => {
      fetchUserData();
   }, []);

   // Fetch user's information from the server using the token and update the state
   const fetchUserData = async () => {
      try {
         const response = await fetch('https://mtg-tomb.onrender.com/api/profile-info', {
            credentials: 'include',
            headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json',
               credentials: 'include',
               mode: 'cors',
            },
         });

         if (!response.ok) {
            throw new Error('Failed to fetch user data');
         }

         const data = await response.json();
         setUserData(data);

      } catch (error) {
         console.error('Error fetching user data:', error);
      }
   };


   useEffect(() => {
      fetchThreads();
   }, []);

   const fetchThreads = async () => {
      try {
         const response = await fetch('https://mtg-tomb.onrender.com/threads/all'); // Adjust the endpoint as needed
         const data = await response.json();
         setThreads(data);
      } catch (error) {
         console.error('Error fetching threads:', error);
      }
   };
   const handleNewThreadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newThread: Omit<Thread, '_id'> = {
         content: newThreadContent,
         comments: [],
         collapsed: false, // Collapse comments for thread on init
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
            console.log(createdThread);
            setNewThreadContent('');
            console.log(threads);
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
         userId: 1, // Replace with actual user _id
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
      <div className="flex flex-col items-center p-2 ">
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
         <div className='threadSection  flex flex-col-reverse'>
            {threads.map(thread => (
               <div key={thread._id} className=" bg-white/30 w-full max-w-lg mb-4 rounded-md p-2 ">
                  <h3 className="text-xl font-bold text-white">
                     {userData.username || ''}
                  </h3>
                  <p className="min-h-20 text-white p-2">
                     {thread.content}
                  </p>

                  <button
                     className="text-white text-xs bg-nav-gradient w-3/7 px-4 py-2 cursor-pointer rounded hover:shadow-md"
                     onClick={() => toggleComments(thread._id)}>
                     {thread.collapsed ? 'Read comments' : 'Hide comments'}
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
                        handleCommentSubmit(e, thread._id, e.currentTarget.comment.value)
                     }
                     className="mt-2">
                     <input
                        type="text"
                        name="comment"
                        placeholder="Add a comment"
                        required
                        className="w-full bg-white/40 border border-white/30 rounded py-2 px-4 mb-2 focus:outline-periwinkle focus:bg-white text-white/80"
                     />
                     {/*                      <input type="text" placeholder={`${thread._id}`} name="threadId" value={thread._id}></input>
 */}                     <button
                        type="submit"
                        className="bg-btn-gradient hover:bg-plum text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:shadow-md">
                        Send
                     </button>
                  </form>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Threads;
