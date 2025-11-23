import React from "react";
import ChatInput from "./Components/ChatInput";
import ChatMessage from "./Components/ChatMessage";


const App = () => {
  return (
    <div className="flex flex-col border-2 border-black w-[400px] h-[600px] mx-auto mt-10">
      <ChatInput />
      <ChatMessage message="Hello world"/>
    </div>
  );
}

export default App;