import React from 'react'

const ChatMessage = (props) => {
  return (
    <div className='flex items-center gap-4 p-4 justify-end'>
        <p>{props.message}</p>
        <img src="src/assets/user-icon.webp" className='w-[30px]' alt="user-image" />
    </div>
  )
}

export default ChatMessage