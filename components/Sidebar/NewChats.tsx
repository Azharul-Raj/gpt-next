
import { addDoc, collection } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import {db} from '../../firebase'
import { serverTimestamp } from 'firebase/database'
import { useRouter } from 'next/navigation'

function OpenChat() {
  const router=useRouter()
  const {data:session}=useSession()
  const createNewChat=async()=>{
    const doc=await addDoc(collection(db,"users",session?.user?.email!,"chats"),{
      messages:[],
      userId:session?.user?.email!,
      createdAt:serverTimestamp()
    })
    router.push(`/chats/${doc.id}`)
  }
  return (
    <div onClick={createNewChat} className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-1 flex-shrink-0 border border-white/20'>
      <FiPlus className='' /> New Chat
    </div>
  )
}

export default OpenChat