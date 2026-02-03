import React from "react";

const MemeCard = ({ meme }) => {
  console.log(meme);
  const { url, title, author } = meme;
  return (
    <div className="p-5 m-5 border border-black">
      <img className="w-64 h-64" src={url} alt="meme" />
      <p className="mt-3">{author}</p>
    </div>
  );
};

export default MemeCard;
