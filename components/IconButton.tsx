"use client"
import React from 'react'

interface IconButtonProps{
    btnDetails:{
        icon:React.ReactNode;
        text:string;
    }
}
export default function IconButton({btnDetails}:IconButtonProps) {
    const {icon,text}=btnDetails;
  return (
    <>
    <div className='flex p-3 gap-3 items-center rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'>
        {icon} <h5 className='ml-2'>{text}</h5>
    </div>
    </>
  )
}
