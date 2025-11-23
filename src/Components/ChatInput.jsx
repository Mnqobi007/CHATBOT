import React from 'react'

const ChatInput = () => {

  return (
    <div className='flex justify-center items-center gap-2 p-4'>
        <input type="text" placeholder="Send message to Chatbot" size={30} className='rounded-[20px] outline-none border border-gray-400 px-4 py-2'/>
        <button className='bg-blue-500 px-5 py-2 rounded-[10px]'>Send</button>
    </div>
  )
}

export default ChatInput