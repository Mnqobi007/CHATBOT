import React, { useState } from 'react'

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


  return (
    <div className='flex justify-center items-center gap-2 p-4'>
        <input type="text" placeholder="Send message to Chatbot" value={input} onChange={handleChange} size={30} className='rounded-[20px] outline-none border border-gray-400 px-4 py-2'/>
        <button className='bg-blue-500 px-5 py-2 rounded-[10px] cursor-pointer' onClick={handleSend}>Send</button>
    </div>
  )
}

export default ChatInput