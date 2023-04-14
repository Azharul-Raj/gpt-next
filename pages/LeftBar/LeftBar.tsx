import React from 'react'
import NewChat from '../components/NewChat'
import IconButton from '../components/IconButton'
import { data } from '../data/data'
import ChatTitle from '../components/ChatTitle'

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
