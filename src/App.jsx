import React from "react";
import ChatInput from "./Components/ChatInput";
import ChatMessage from "./Components/ChatMessage";
import { useState } from "react";


const App = () => {

  const [messages, setMessages] = useState([]);

  return (
    <div className="flex flex-col border-2 border-black w-[400px] h-[600px] mx-auto mt-10">
      <ChatInput />
      <ChatMessage message="Hello world" sender="user"/>
    </div>
  );
}

export default App;