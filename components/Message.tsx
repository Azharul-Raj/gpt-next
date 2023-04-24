"use client"
import { DocumentData } from 'firebase/firestore';
import React from 'react'
import { FiArrowDownCircle } from 'react-icons/fi';

interface Message{
    message:DocumentData;
}
function Message({message}:Message) {
    const isChatGPT=message.user.name=="ChatGPT"
  return (
    <div className='flex-1 overflow-y-auto overflow-x-hidden'>{
        message.empty &&
        
        <>(
        <p className="mt-10 text-center text-white">Get started with your first message</p>
        <FiArrowDownCircle className='h-8 animate-bounce'/>
        )
        </>
    }
    <div className={`py-5 text-white ${isChatGPT && 'bg-[#434654]'}`}>
        <div className="flex space-x-4 px-10 mx-auto">
            <img src={message.user.avatar} alt="" className='h-8 w-8' />
            <p className="pt-1 text-sm ">{message.text}</p>
        </div>
    </div>
    </div>
  )
}

export default Message;