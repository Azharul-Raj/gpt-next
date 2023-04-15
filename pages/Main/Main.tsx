import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import HomePage from '../HomePage/HomePage'

function Main() {
  return (
    <div className='flex justify-between'>
        <Sidebar/>
        <div className="bg-[#343541] ">

        <HomePage/>
        </div>
    </div>
  )
}

export default Main