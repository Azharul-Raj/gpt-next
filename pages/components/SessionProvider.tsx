import {Session} from 'next-auth';
import {SessionProvider as Provider} from 'next-auth/react';
import React from 'react'

interface SessionProviderProps{
    children:React.ReactNode;
    session:Session|null;
}
function SessionProvider({children,session}:SessionProviderProps) {
  return (
    <Provider>
        {
            children
        }
    </Provider>
  )
}

export default SessionProvider