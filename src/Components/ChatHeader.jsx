import React from "react";

const ChatHeader = () => {
  return (
    <div className="flex items-center gap-3 bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-400 flex items-center justify-center">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      </div>
      <div>
        <h1 className="text-lg font-semibold">Chatbot</h1>
        <p className="text-xs text-blue-100">Online</p>
      </div>
    </div>
  );
};

export default ChatHeader;
