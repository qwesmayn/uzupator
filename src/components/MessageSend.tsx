import { FaceSmileIcon, PaperClipIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";

interface MessageSendProps {
  onSendMessage: (message: string) => void;
}

const MessageSend: FC<MessageSendProps> = ({ onSendMessage }) => {
  const [message, setMessage] = React.useState("");

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center pt-4 pb-7 bg-white border-gray-300">
      <div className="relative flex-1">
        <input
          className="w-full bg-gray-200 border rounded-2xl text-xl py-4 px-5 pr-16"
          type="text"
          placeholder="Написать сообщение"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-1">
          <button className="p-1">
            <FaceSmileIcon className="w-5 h-5" />
          </button>
          <button className="p-1">
            <PaperClipIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <button
        className="ml-2 py-4 px-5 bg-blue-400 text-xl text-white rounded-xl"
        onClick={handleSendMessage}
      >
        Отправить
      </button>
    </div>
  );
};

export default MessageSend;
