import React from 'react'
import NewChats from './Sidebar/NewChats'

function Sidebar() {
  return (
    <div className='p-2 flex flex-col h-screen bg-[#202123]'>
      <div className="flex-1">
        {/* <NewChat/> */}
        <NewChats/>
      </div>
    </div>
  )
}

export default Sidebar;
