import React, { useEffect, useState } from "react";
import ChatMessage from "../ChatMessage";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const s = setInterval(fetchMessages, 1000);

    return () => clearInterval(s);
  }, []);

  const fetchMessages = () => {
    // Make an Api Call
    const data = [
      {
        name: "Ujjwal",
        photo:
          "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png",
        message: "ky haal bhai ke",
      },
      {
        name: "Raj",
        photo:
          "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png",
        message: "Bs badhiya bhai",
      },
    ];

    setMessages((message) => [...data, ...message].splice(0, 20));
  };

  return (
    <div className="flex m-5 w-full h-[600px] border border-black overflow-y-scroll flex-col-reverse">
      {messages?.map((message, i) => (
        <ChatMessage key={i} {...message} />
      ))}
    </div>
  );
};

export default ChatWindow;
