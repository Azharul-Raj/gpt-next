import Chat from '@/components/Chat';
import ChatInput from '@/components/ChatInput';
import React from 'react'

type Props={
  params:{
    id:string;
  }
}
function ChatPage({params:{id}}:Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Chats */}
      <Chat chatId={id}/>
      {/* chat input */}
      <ChatInput chatId={id}/>
    </div>
  )
}

export default ChatPage;