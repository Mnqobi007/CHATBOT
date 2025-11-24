import React, { useState } from 'react'
import { ArrowUp } from 'lucide-react';

const ChatInput = ({ onSend }) => {

  const [input, setInput] = useState("")

  function handleChange(e) {
    setInput(e.target.value)
  }  

  function handleSend() {
  if (!input.trim()) return
  onSend(input)
  setInput("")
}

 function handleKeyDown(e){
  if(e.key === 'Enter'){
    handleSend();
  }
 }


  return (
    <div className='flex justify-between items-center gap-2  w-100% border border-gray-300 px-4 mx-2 mb-2 py-2 bg-white rounded-full mt-10'>
        <input type="text" placeholder="Send message to Chatbot" value={input} onChange={handleChange} onKeyDown={handleKeyDown} size={30} className='rounded-[20px] outline-none px-4 py-2'/>
        <button className='bg-blue-500 px-1 py-1 rounded-full cursor-pointer text-white' onClick={handleSend}><ArrowUp /></button>
    </div>
  )
}

export default ChatInput