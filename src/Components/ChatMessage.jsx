import React, { useState } from 'react'

const ChatMessage = ({message, sender}) => {


  return (
    <div className={`flex items-center gap-2 p-4 ${sender === "user" ? 'justify-end' : 'justify-start '}`}>
        {sender === "bot" && <img src="src/assets/ai-chatting.png" className='w-[30px]' alt="bot-image" />}
        <p>{message}</p>
        {sender === "user" && <img src="src/assets/user-icon.webp" className='w-[30px]' alt="user-image" />}
    </div>
  )
}

export default ChatMessage