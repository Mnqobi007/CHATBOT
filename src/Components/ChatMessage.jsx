import React from "react";

const ChatMessage = ({ message, sender }) => {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl ${
          isUser
            ? "bg-blue-600 text-white rounded-br-sm"
            : "bg-white text-gray-800 rounded-bl-sm shadow-sm"
        }`}
      >
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
