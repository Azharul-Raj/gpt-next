
import React from 'react'
import {FiPlus}  from 'react-icons/fi'

export default function NewChat() {
  return (
    <div className='h-12 border border-gray-500 cursor-pointer rounded-md flex items-center hover:bg-white/10'>
        <div className="text-gray-100 flex items-center text-sm">
            <FiPlus className='mx-[10px]'/> <h4>New Chat</h4>
        </div>
    </div>
  )
}
