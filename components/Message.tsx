"use client"
import { DocumentData } from 'firebase/firestore';
import React from 'react'
import { FiArrowDownCircle } from 'react-icons/fi';

interface Message{
    message:DocumentData;
}
function Message({message}:Message) {
    const isChatGPT=message?.user?.name=="ChatGPT";
    console.log(message);
    
  return (
    
    <div className={`py-5 text-white ${isChatGPT && 'bg-[#434654]'}`}>
        <div className="flex space-x-4 px-10 mx-auto">
            <img src={message?.user?.avatar} alt="" className='h-8 w-8' />
            <p className="pt-1 text-sm ">{message?.text}</p>
        </div>
    </div>
  )
}

export default Message;