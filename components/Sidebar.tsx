"use client"
import React from 'react'
import {useCollection} from 'react-firebase-hooks/firestore'
import NewChats from './Sidebar/NewChats'
import { useSession,signOut } from 'next-auth/react';
import IconButton from './IconButton'
import {FiLogOut} from 'react-icons/fi'
import { db } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import ChatTitle from './ChatTitle';

function Sidebar() {
  const {data:session}=useSession();
  const [chats,loading,error]=useCollection(
    session && query( collection(db,"users",session?.user?.email!,"chats"),orderBy("createdAt","asc"))
  );
  
  
  
  return (
    <div className='p-2 flex flex-col h-screen bg-[#202123]'>
      <div className="flex-1">
        {/* <NewChat/> */}
        <NewChats/>
        {
          chats?.docs.map(chat=><ChatTitle key={chat.id} id={chat.id}/>)
        }
      </div>
      {
        session && <div onClick={()=>signOut()} className="flex text-white cursor-pointer"> <FiLogOut size={30} className=' '/></div>
      }
    </div>
  )
}

export default Sidebar;
