import React from "react";
import { ChatWindow, VideoStream } from "../../components";

const LiveChat = () => {
  return (
    <div className="flex">
      <VideoStream />
      <ChatWindow />
    </div>
  );
};

export default LiveChat;
