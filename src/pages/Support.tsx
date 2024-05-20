import React, { FC, useState } from "react";
import Dialog from "../components/Dialog";
import HelperList from "../components/HelperList";
import { IUser } from "../models/IUser";
import { IMessage } from "../models/IMessage";
import BreadCrumb from "../components/BreadCrumb";
import { PhoneIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"; // Import ArrowLeftIcon

const supportUsers: IUser[] = [
  { id: 1, username: "Elena", avatar: "https://via.placeholder.com/150" },
  { id: 2, username: "Alex", avatar: "https://via.placeholder.com/150" },
  { id: 3, username: "Dan", avatar: "https://via.placeholder.com/150" },
  { id: 4, username: "Angella", avatar: "https://via.placeholder.com/150" },
  { id: 5, username: "Jany", avatar: "https://via.placeholder.com/150" },
  { id: 6, username: "Karina", avatar: "https://via.placeholder.com/150" },
];

const messages: IMessage[] = [
  {
    id: 1,
    senderId: 1,
    text: "Hello, how can I help you?",
    timestamp: "2023-05-17T10:30:00Z",
  },
  {
    id: 2,
    senderId: 2,
    text: "Hi, I see you have an issue.",
    timestamp: "2023-05-17T10:31:00Z",
  },
  {
    id: 3,
    senderId: 1,
    text: "Do you need further assistance?",
    timestamp: "2023-05-17T10:32:00Z",
  },
];

const getLastMessages = (messages: IMessage[]) => {
  const lastMessages: { [key: number]: { text: string; timestamp: string } } = {};

  messages.forEach((message) => {
    if (
      !lastMessages[message.senderId] ||
      new Date(lastMessages[message.senderId].timestamp) < new Date(message.timestamp)
    ) {
      lastMessages[message.senderId] = { text: message.text, timestamp: message.timestamp };
    }
  });

  return lastMessages;
};

const Support: FC = () => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const userAvatar = supportUsers.find((user) => user.id === selectedUser);

  const unreadMessages = {
    1: 2,
    2: 1,
  };

  const filteredMessages = selectedUser
    ? messages.filter((message) => message.senderId === selectedUser)
    : [];

  const lastMessages = getLastMessages(messages);

  const supportUsersWithLastMessages = supportUsers.map((user) => ({
    ...user,
    lastMessage: lastMessages[user.id]
      ? { text: lastMessages[user.id].text, timestamp: new Date(lastMessages[user.id].timestamp).getTime() }
      : undefined,
  }));

  return (
    <div className="flex flex-col h-full">
      <div className="pl-8 pt-8">
        <BreadCrumb name="Служба поддержки" />
        <strong className="text-2xl font-medium sm:text-4xl">Служба поддержки</strong>
      </div>
      <div className="flex flex-grow overflow-hidden pt-20">
        <div className={`flex-shrink-0 w-full xl:w-1/4 px-7 md:p-0 ${selectedUser ? 'hidden xl:block' : 'block'}`}>
          <HelperList
            users={supportUsersWithLastMessages}
            onSelectUser={setSelectedUser}
            unreadMessages={unreadMessages}
          />
        </div>
        <div className={`flex-grow flex flex-col h-full shadow ${selectedUser ? 'block' : 'hidden xl:flex'}`}>
          {selectedUser ? (
            <div className="flex flex-col h-full">
              <div className="flex items-center px-5 py-5 shadow bg-white">
                <button
                  className="xl:hidden bg-blue-500 text-white px-4 py-2 rounded-lg mr-4"
                  onClick={() => setSelectedUser(null)}
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                </button>
                <div className="p-3 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
                  <PhoneIcon className="w-8 h-8" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-xl">{userAvatar?.username}</span>
                  <span className="text-gray-400">Служба тех. поддержки</span>
                </div>
              </div>
              <div className="flex-grow overflow-hidden">
                <Dialog
                  messages={filteredMessages}
                  users={supportUsers}
                  currentUserID={selectedUser}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center flex-grow">
              <span className="text-gray-500">Выберите агента поддержки для начала чата</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;
