import React, { FC } from "react";
import { IChat } from "../models/IChat";
import { IUser } from "../models/IUser";
import { IMessage } from "../models/IMessage";

interface ChatListProps {
  chats: IChat[];
  users: IUser[];
  onChatSelect: (chatId: number) => void;
}

const ChatList: FC<ChatListProps> = ({ chats, users, onChatSelect }) => {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {chats.map((chat) => {
          const recipient = users.find((u) => u.id === chat.participants[1]);
          if (!recipient) return null;
          return (
            <li
              key={chat.id}
              onClick={() => onChatSelect(chat.id)}
              style={{ cursor: "pointer" }}
              className="flex justify-between gap-x-6 pl-7 py-2"
            >
              <div className="flex items-center min-w-0 gap-x-4">
                <img
                  className="h-16 w-16 flex-none rounded-full bg-gray-50"
                  src={recipient.avatar}
                  alt={recipient.username}
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-2xl font-medium leading-6 text-gray-900">
                    {recipient.username}
                  </p>
                  <p className="mt-1 truncate text-lg font-medium leading-5 text-gray-500">
                    {recipient.role}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChatList;
