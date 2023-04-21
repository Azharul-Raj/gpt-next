import React from 'react'
import NewChat from '../NewChat'


function Sidebar() {
  return (
    <div className='p-2 flex flex-col h-screen bg-[#202123]'>
      <div className="flex-1">
        <NewChat/>
      </div>
    </div>
  )
}

export default Sidebar