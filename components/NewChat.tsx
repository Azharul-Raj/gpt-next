import {getDatabase} from 'firebase/database'

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import {FiPlus}  from 'react-icons/fi'
import { db } from '@/firebase';

export default function NewChat() {
  
  return (
    <div className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-1 flex-shrink-0 border border-white/20'>
        
            <FiPlus className=''/> New Chat
    </div>
  )
}
