import React from 'react'
import NewChat from '../components/NewChat'
import IconButton from '../components/IconButton'
import { data } from '../data/data'

export default function LeftBar() {
  return (
    <div className='bg-[#202123] h-[100vh] p-[2%] flex flex-col'>

        <NewChat/>
        <div className="h-[60vh]">
            hey
        </div>
        <div className="items-end justify-end">
            {
                data.map((btnDetails,i)=><IconButton key={i} btnDetails={btnDetails}/>)
            }
        </div>
    </div>
  )
}
