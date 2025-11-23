import React from "react";
import ChatInput from "./Components/ChatInput";
import ChatMessage from "./Components/ChatMessage";
import { useState } from "react";


const App = () => {

  const [messages, setMessages] = useState([]);

  function handleSend(message){
    const newMessage = { message, sender: "bot" };
    setMessages([...messages, newMessage]);
  }

  return (
    <div className="flex flex-col border-2 border-black w-[400px] h-[600px] mx-auto mt-10">
      <ChatInput onSend={handleSend}/>
      <div>
        {messages.map((msg, index) =>{
          return <ChatMessage key={index} message={msg.message} sender={msg.sender} />
        })}
      </div>
    </div>
  );
}

export default App;