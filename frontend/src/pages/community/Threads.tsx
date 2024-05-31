/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';

interface ThreadsProps {
   username: string;
}
interface Thread {
   _id: number;
   creatorUsername: string;
   content: string;
   comments: Comment[];
   createdAt: string;
   collapsed: boolean; // True on init, hides comments
}

interface Comment {
   _id: number;
   creatorUsername: string;
   text: string;
   createdAt: string;
   userId: number; // _id for user who commented
}

const Threads: React.FC<ThreadsProps> = ({ username }) => {
   const [threads, setThreads] = useState<Thread[]>([]);
   const [newThreadContent, setNewThreadContent] = useState('');

   useEffect(() => {
      fetchThreads();
   }, []);


   const fetchThreads = async () => {
      try {
         const response = await fetch('http://localhost:3000/threads/all'); // Adjust the endpoint as needed
         //https://mtg-tomb.onrender.com

         const data = await response.json();
         setThreads(data);
      } catch (error) {
         console.error('Error fetching threads:', error);
      }
   };
   const handleNewThreadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newThread: Omit<Thread, '_id' | 'createdAt'> = {
         content: newThreadContent,
         creatorUsername: username,
         comments: [],
         collapsed: false,
      };

      try {
         const response = await fetch('http://localhost:3000/threads/create', {
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

   //handling comment submit 
   const handleCommentSubmit = async (
      e: React.FormEvent<HTMLFormElement>,
      threadId: number,
   ) => {
      e.preventDefault();
      const commentInput = e.currentTarget.elements.namedItem('comment') as HTMLInputElement;
      const commentText = commentInput.value;
      console.log("Username:", username);


      const newComment: Omit<Comment, '_id' | 'createdAt'> = {
         text: commentText,
         creatorUsername: username,
         userId: 1,
      };

      try {
         const response = await fetch(`http://localhost:3000/threads/${threadId}/comments`, {
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
                     collapsed: true, // Set collapsed to false 
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
      <div className="flex flex-col items-center">
         <h1 className="text-3xl text-white/80 font-bold mb-4">Community Threads</h1>
         <form onSubmit={handleNewThreadSubmit} className=" w-[80%] bg-white/50 p-2 rounded-lg max-w-lg flex flex-col mb-4 items-center">
            <textarea
               placeholder="Thread Content"
               value={newThreadContent}
               wrap="soft"
               onDoubleClick={(e) => (e.target as HTMLTextAreaElement).select()} // Selects all text on double-click
               onChange={e => setNewThreadContent(e.target.value)}
               className="w-full h-24 text-black bg-white/50 border border-white/10 rounded py-2 px-4 focus:outline-periwinkle focus:bg-white/80 "
            />
            <button className="font-inter w-1/2 text-sm md:inline-block m-1 px-4 py-2 bg-btn-gradient text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:shadow-plum hover:bg-mint/60 relative overflow-hidden">
               <span className="absolute inset-0 border-2 border-transparent hover:border-white/30 rounded-lg"></span> Create Thread
            </button>

            {/*display threads*/}
         </form>
         <div className='threadSection  flex flex-col w-full items-center'>
            {threads.map(thread => (


               <div key={thread._id} className="eachThread flex flex-col bg-white/30 w-[80%] max-w-lg rounded-lg mb-4 p-2">
                  <p>Creator: {thread.creatorUsername}</p>

                  <p className="flex text-white/30 text-xs w-full justify-start">created at: {new Date(thread.createdAt).toLocaleString()}</p>

                  <p className="min-h-20 w-full  text-white p-2">
                     {thread.content}
                  </p>


                  {/*display submitted comments*/}
                  <button
                     className="text-white/80 text-sm cursor-pointer rounded w-fit hover:text-white"
                     onClick={() => toggleComments(thread._id)}>
                     {thread.collapsed ? 'Hide comments' : 'Read comments'}
                  </button>


                  {thread.collapsed && (
                     <div>
                        {thread.comments.map(comment => (
                           <div
                              key={comment._id}
                              className="border border-white/20 bg-white/10 rounded p-2 m-1">
                              <p className="text-white text-xs font-semibold ">Comment by: {comment.creatorUsername}</p>
                              <p className="text-white">{comment.text}</p>
                              <p className="text-white/50 text-xs">created at: {new Date(comment.createdAt).toLocaleString()}</p>

                           </div>
                        ))}
                     </div>
                  )}

                  {/*make comments*/}
                  <form
                     onSubmit={e => handleCommentSubmit(e, thread._id)}
                     className="mt-2"
                  >
                     <input
                        type="text"
                        name="comment"
                        onDoubleClick={(e) => (e.target as HTMLInputElement).select()}

                        placeholder="Add a comment"
                        required
                        className="w-2/3 text:white placeholder-white/80 bg-white/30 py-2 px-4 m-1 border border-white/30 rounded focus:outline-solid focus:outline-periwinkle/80 focus:bg-white/80 "
                     />
                     <button className="font-inter text-sm md:inline-block m-1 px-4 py-2 bg-btn-gradient text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:shadow-plum hover:bg-mint/60 relative overflow-hidden">
                        <span className="absolute inset-0 border-2 border-transparent hover:border-white/30 rounded-lg"></span>
                        SEND
                     </button>
                  </form>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Threads;
