import ChatTitle from '@/components/ChatTitle'
import NewChat from '@/components/NewChat'
import React from 'react'
import { data } from '../data/data'
import IconButton from '@/components/IconButton'

export default function LeftBar() {
  return (
<>

<NewChat/>
<ChatTitle/>
{/* <div className=""> */}
    {
        data.map((btnDetails,i)=><IconButton key={i} btnDetails={btnDetails}/>)
    }
{/* </div> */}
</>
)

}
