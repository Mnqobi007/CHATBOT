import React, { useState, useEffect, useRef } from "react";
import ChatInput from "./Components/ChatInput.jsx";
import ChatMessage from "./Components/ChatMessage.jsx";
import TypingIndicator from "./Components/TypingIndicator.jsx";
import ChatHeader from "./Components/ChatHeader.jsx";

const App = () => {
  const [messages, setMessages] = useState([
    { message: "Hi! How can I help you today?", sender: "bot" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  }, [messages, isTyping]);

  const handleSend = (message) => {
    const userMessage = { message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    setTimeout(() => {
      const botReply = { message: "Hi how can I help you?", sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="flex flex-col w-full max-w-sm lg:max-w-md h-[600px] md:h-[500px] bg-gray-100 border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <ChatHeader />
        <div className="flex-1 overflow-y-auto scrollbar-none px-3 py-4 space-y-3 bg-gray-50">
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} message={msg.message} sender={msg.sender} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
        <ChatInput onSend={handleSend} disabled={isTyping} />
      </div>
    </div>
  );
};

export default App;
