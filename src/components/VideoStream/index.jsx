import React from "react";

const VideoStream = () => {
  return (
    <div className="m-5">
      <iframe
        width="1100"
        height="600"
        src="https://www.youtube.com/embed/eVnG_Rqfgg4?si=ZRV3hP2_XzmGIMVV"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       ></iframe>
    </div>
  );
};

export default VideoStream;
