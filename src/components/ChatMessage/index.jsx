import React from "react";

const ChatMessage = ({ name, photo, message }) => {
  return (
    <div className="flex p-2">
      <img className="h-8 w-8 m-2 rounded-full" alt={name} src={photo} />
      <div>
        <p className="font-bold">{name}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
