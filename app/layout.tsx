import '../styles/globals.css'
import { getServerSession } from "next-auth"
import SessionProvider from '@/components/SessionProvider'
import Sidebar from '@/components/Sidebar'
import Login from '@/components/Login'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export const metadata = {
  title: 'Chat GPT Next',
  description: 'Generated by Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session=await getServerSession(authOptions);
  if(!session){
    return (
      <html>
        <body>
          <Login/>
        </body>
      </html>
    )
  }
  
  
  return (
    <html lang="en">
      <body>
      <SessionProvider session={session}>
        <div className="grid grid-cols-12 h-[100%]">
          <div className="col-span-2">
            <Sidebar/>
          </div>
          <div className="col-span-10 bg-[#343541]">

        {children}
          </div>
        </div>
        </SessionProvider>
        </body>
    </html>
  )
}
