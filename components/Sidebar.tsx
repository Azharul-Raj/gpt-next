"use client"
import React from 'react'
import NewChats from './Sidebar/NewChats'
import { useSession,signOut } from 'next-auth/react';
import IconButton from './IconButton'
import {FiLogOut} from 'react-icons/fi'

function Sidebar() {
  const {data:session}=useSession();
  return (
    <div className='p-2 flex flex-col h-screen bg-[#202123]'>
      <div className="flex-1">
        {/* <NewChat/> */}
        <NewChats/>
      </div>
      {
        session && <div onClick={()=>signOut()} className="flex text-white cursor-pointer"> <FiLogOut size={30} className=' '/></div>
      }
    </div>
  )
}

export default Sidebar;
