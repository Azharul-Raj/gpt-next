"use client"
import React from 'react';

import {FiPlus}  from 'react-icons/fi'

export default function NewChat() {
  console.log("from newChat")  
  return (
    <div className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-1 flex-shrink-0 border border-white/20'>
        
            <FiPlus className=''/> New Chat
    </div>
  )
}
