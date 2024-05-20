import React, { FC, useState } from "react";
import { IUser } from "../models/IUser";
import { IMessage } from "../models/IMessage";
import { IChat } from "../models/IChat";
import ChatList from "../components/ChatList";
import Dialog from "../components/Dialog";
import BreadCrumb from "../components/BreadCrumb";

const currentUserID = 1;

const users: IUser[] = [
  {
    id: 1,
    username: "user1",
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    role: "User",
  },
  {
    id: 2,
    username: "user2",
    avatar:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "Admin",
  },
  {
    id: 3,
    username: "user3",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "User",
  },
];

const messages: IMessage[] = [
  {
    id: 1,
    text: "Hey Alex! How are you?",
    senderId: 1,
    receiverId: 2,
    timestamp: "10:30",
  },
  {
    id: 2,
    text: "What about 2:00 PM? Works for you?",
    senderId: 2,
    receiverId: 1,
    timestamp: "10:35",
  },
  {
    id: 3,
    text: "Yea",
    senderId: 1,
    receiverId: 2,
    timestamp: "10:45",
  },
  {
    id: 4,
    text: "Yea",
    senderId: 2,
    receiverId: 1,
    timestamp: "10:55",
  },
  {
    id: 5,
    text: "Yea",
    senderId: 1,
    receiverId: 2,
    timestamp: "11:45",
  },
  {
    id: 6,
    text: "Yea",
    senderId: 2,
    receiverId: 1,
    timestamp: "12:45",
  },
  {
    id: 7,
    text: "Yea",
    senderId: 1,
    receiverId: 2,
    timestamp: "13:45",
  },
];

const chats: IChat[] = [
  {
    id: 1,
    participants: [1, 2],
    messages: [1, 2, 3, 4, 5, 6, 7, 7,7],
  },
  {
    id: 2,
    participants: [1, 3],
    messages: [3, 2],
  },
  {
    id: 3,
    participants: [2, 1],
    messages: [2, 1],
  },
  {
    id: 4,
    participants: [1, 2],
    messages: [1, 2],
  },
  {
    id: 5,
    participants: [1, 3],
    messages: [3, 2],
  },
  {
    id: 6,
    participants: [2, 1],
    messages: [2, 1],
  },
  {
    id: 7,
    participants: [2, 1],
    messages: [2, 1],
  },
  {
    id: 8,
    participants: [1, 2],
    messages: [1, 2],
  },
  {
    id: 9,
    participants: [1, 3],
    messages: [3, 2],
  },
  {
    id: 10,
    participants: [2, 1],
    messages: [2, 1],
  },
];

const ChatPage: FC = () => {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

  const handleChatSelect = (chatId: number) => {
    setSelectedChatId(chatId);
  };

  const filteredChats = chats.filter((chat) => chat.participants.includes(currentUserID));

  return (
    <div className="pl-8 pt-8 pr-6 h-full flex flex-col">
      <BreadCrumb name="Чат" />
      <div className="mb-14">
        <h2 className="text-4xl font-medium">Чат</h2>
      </div>
      <div className="flex-grow">
        {selectedChatId === null ? (
          <ChatList chats={filteredChats} users={users} onChatSelect={handleChatSelect} />
        ) : (
          <Dialog
            messages={(
              chats.find((chat) => chat.id === selectedChatId)?.messages || []
            )
              .map((messageId) => messages.find((msg) => msg.id === messageId))
              .filter((message): message is IMessage => message !== undefined)}
            users={users}
            currentUserID={currentUserID}
          />
        )}
      </div>
    </div>
  );
};

export default ChatPage;
