import { db } from '@/firebase';
import { ChatIdProps } from '@/types/types';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './Message';


function Chat({chatId}:ChatIdProps) {
  const {data:session}=useSession();
  const [message]=useCollection(session && query(
    collection(db,"users",session?.user?.email!,"chats",chatId,"message"),
    orderBy("createdAt","asc")
  ))
  return (
    <div className='flex-1'>
      {
        message?.docs.map((message)=>(
          <Message key={message.id}/>
        ))
      }
    </div>
  )
}

export default Chat;