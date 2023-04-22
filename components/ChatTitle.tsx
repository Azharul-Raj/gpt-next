import React, { useState,useEffect } from 'react'
import { db } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCollection } from 'react-firebase-hooks/firestore';
import { FiMessageSquare } from 'react-icons/fi';

type Props = {
    id: string;
}

export default function ChatTitle({ id }: Props) {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = useSession();
    const [active, setActive] = useState(false);
    const [message] = useCollection(
        query(
            collection(db, "users", session?.user?.email!, "chats", id, "messages"),
            orderBy("createdAt", "asc")
        )
    )
    useEffect(()=>{
        if(!pathname) return;
        setActive(pathname.includes(id))
    },[])
    return (
        <Link href={`/chats/${id}`} className="flex-col flex-1 overflow-y-auto border-b border-white/20 -mr-2">
            <div className="flex flex-col gap-2 pb-2 text-gray-100 text-sm">
                <div className={`flex py-3 px-3 items-center gap-3 relative rounded-md cursor-pointer break-all pr-14 ${active && "bg-gray-800"} group`}>
                    {/*icon div will be here */}
                    <FiMessageSquare />
                    <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                        {/* this is text div */}
                    </div>
                    <div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-800">
                        {/* empty div */}
                    </div>
                    {/* right icon div below */}
                    <div className="absolute flex right-1 z-10 text-gray-300 visible">
                        <div className="p-1 hover:text-white">
                            {/* first icon */}
                        </div>
                        <div className="p-1 hover:text-white">
                            {/* second icon */}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
