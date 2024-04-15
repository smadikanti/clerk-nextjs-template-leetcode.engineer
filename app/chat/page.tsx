'use client';

import { useChat } from 'ai/react';

export default function Page() {
 const { messages, input, handleInputChange, handleSubmit } = useChat();

 return (
   <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
     <form className="grid gap-4 md:gap-6" onSubmit={handleSubmit}>
       <input
         id="question"
         placeholder="Type your question here..."
         value={input}
         onChange={handleInputChange}
       />
       <button type="submit">Ask AI</button>
     </form>
     <div className="p-4">
       <ul>
         {messages.map((m, index) => (
           <li
             key={index}
             className="text-gray-500 dark:text-gray-400"
           >
             {m.role === 'user' ? 'User: ' : 'AI: '} {m.content}
           </li>
         ))}
       </ul>
     </div>
   </main>
 );
}