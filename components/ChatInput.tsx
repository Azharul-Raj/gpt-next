"use client"
import React,{useState} from 'react'
import { ChatIdProps, MessageProps } from '@/types/types';
import { FiSend } from 'react-icons/fi';
import { serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';

function ChatInput({chatId}:ChatIdProps) {
    const [prompt,setPrompt]=useState("");
    const {data:session}=useSession()
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!prompt) return;
        
        const input=prompt.trim();
        setPrompt("")
        const message:MessageProps={
          text:input,
          createdAt:serverTimestamp(),
          user:{
            _id:session?.user?.email!,
            name:session?.user?.email!,
            avatar:session?.user?.image! || session?.user?.name!
          }
        }
    }
  return (
    <div className="w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2">
          <form onSubmit={handleSubmit}  action="" className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
            <div className="relative flex h-full flex-1 md:flex-col">
              <div className="flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"></div>
              {/* textarea div */}
              <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
                  <textarea onChange={(e)=>setPrompt(e.target.value)} style={{maxHeight:"200px",height:"24px",overflowY:"hidden"}} className='m-0 w-full resize-none border-0 bg-transparent outline-none p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0' name="data" id="" rows={1}></textarea>
                  <button disabled={!prompt} className='absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40'>
                    <FiSend/>
                  </button>
              </div>
            </div>
          </form>
          </div>
  )
}

export default ChatInput;