"use client"
import { db } from '@/firebase';
import { ChatIdProps } from '@/types/types';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './Message';
import { FiArrowDownCircle } from 'react-icons/fi';


function Chat({chatId}:ChatIdProps) {
  const {data:session}=useSession();
  const [messages]=useCollection(session && query(
    collection(db,"users",session?.user?.email!,"chats",chatId,"messages"),
    orderBy("createdAt","asc")
  ))
  return (
    <div className='flex-1 overflow-y-auto overflow-x-hidden'>{
        messages?.empty &&
        
        <>(
          <div className="flex justify-center items-center flex-col">
        <p className="mt-10 text-center text-white">Get started with your first message</p>
        <FiArrowDownCircle size={30} className='text-white text-center mt-2 animate-bounce'/>
        </div>
        )
        </>
    }
      {
        messages?.docs.map((message)=>(
          <Message key={message.id} message={message.data()}/>
        ))
      }
    </div>
  )
}

export default Chat;