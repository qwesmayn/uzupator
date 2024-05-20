import React, { FC } from "react";
import { IUser } from "../models/IUser";

interface HelperListProps {
  users: IUser[];
  onSelectUser: (userId: number) => void;
  unreadMessages: { [key: number]: number };
}

const HelperList: FC<HelperListProps> = ({ users, onSelectUser, unreadMessages }) => {
  const totalUnreadMessages = Object.values(unreadMessages).reduce((acc, count) => acc + count, 0);

  return (
    <div className="h-full md:pl-8">
      <div className="flex justify-start py-4 shadow overflow-x-auto">
        {users.map(user => (
          <div
            key={user.id}
            className="mr-2 px-1 flex flex-col items-center justify-center last:m-0 cursor-pointer min-w-12"
            onClick={() => onSelectUser(user.id)}
          >
            <img src={user.avatar} alt={user.username} className="h-10 w-10 rounded-full" />
            <span className="font-medium">{user.username}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center pl-2 mb-5 pt-5">
        <span className="font-medium text-xl">Сообщения</span>
        {totalUnreadMessages > 0 && (
          <span className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center ml-2">
            {totalUnreadMessages}
          </span>
        )}
      </div>
      <ul>
        {users.map(user =>
          user.lastMessage ? (
            <li
              key={user.id}
              className="p-3 mb-5 first:bg-zinc-200 rounded-2xl last:m-0 hover:bg-gray-200 cursor-pointer"
              onClick={() => onSelectUser(user.id)}
            >
              <div className="flex items-center">
                <div className="flex flex-col w-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mb-3">
                      <img src={user.avatar} alt={user.username} className="h-10 w-10 rounded-full mr-2" />
                      <span className="font-medium text-lg">{user.username}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">
                        {new Date(user.lastMessage.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{user.lastMessage.text}</p>
                  </div>
                </div>
              </div>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default HelperList;
