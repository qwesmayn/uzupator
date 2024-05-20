import React, { FC } from 'react';
import { IMessage } from '../models/IMessage';
import { IUser } from '../models/IUser';
import MessageSend from './MessageSend';
import 'tailwindcss/tailwind.css';  // Импортируйте стили Tailwind

interface ChatProps {
  messages: IMessage[];
  users: IUser[];
  currentUserID: number;
}

const Dialog: FC<ChatProps> = ({ messages, users, currentUserID }) => {
  const handleSendMessage = (message: string) => {
    console.log(message);
  };

  return (
    <div className="flex flex-col h-full md:px-7">
      <div className="flex flex-col flex-grow overflow-y-auto h-96 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        {messages.map((message) => {
          const user = users.find((u) => u.id === message.senderId);
          const isCurrentUserMessage = message.senderId === currentUserID;
          return (
            <div
              key={message.id}
              className={`flex ${isCurrentUserMessage ? 'justify-end' : ''}`}
            >
              {!isCurrentUserMessage && (
                <img
                  className="h-12 w-12 rounded-full mt-2 mr-2"
                  src={user?.avatar}
                  alt={user?.username}
                />
              )}
              <div className="flex flex-col">
                <div
                  className={`flex items-center p-4 rounded-xl max-w-xl mb-3 border-1 ${
                    isCurrentUserMessage
                      ? 'bg-blue-400 font-me text-white text-xl mr-4'
                      : 'bg-gray-200 text-gray-500 text-xl'
                  }`}
                >
                  <div>
                    <span>{message.text}</span>
                  </div>
                </div>
                <div
                  className={`text-sm text-gray-400 ${
                    isCurrentUserMessage ? 'flex justify-end mr-4' : ''
                  }`}
                >
                  <span>{message.timestamp}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <MessageSend onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Dialog;
