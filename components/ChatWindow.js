import React, { useState, useEffect } from "react";

const ChatWindow = ({ isOpen, onClose, contact }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed right-[100px] bottom-[-10px] w-72 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="p-3 border-b flex justify-between">
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={contact.img}
            alt="User Avatar"
          />
          <span className="text-gray-700 font-bold">{contact.name}</span>
        </div>
        <button
          className="ml-2 text-gray-500 hover:text-gray-600"
          onClick={onClose}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      {/* Chat messages */}
      <div className="p-4 h-64 overflow-y-auto">
        <div className="flex items-start mb-4">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={contact.img}
            alt="User Avatar"
          />
          <div className="bg-gray-300 rounded-3xl p-2">
            <span className="text-gray-800 ml-1">Hello!</span>
          </div>
        </div>
        <div className="flex items-end mb-4 justify-end">
          <div className="bg-blue-500 text-white rounded-3xl rounded-xl p-2">
            <span className="ml-1">Hi {contact.name}!</span>
          </div>
        </div>
        {/* End of sample messages */}
      </div>

      {/* Chat input */}
      <div className="p-4 border-t">
        <input
          type="text"
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
        />
      </div>
    </div>
  );
};

export default ChatWindow;
