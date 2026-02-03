import React from "react";

const Comment = ({ comments }) => {
  return (
    <>
      {comments?.map((userComment, index) => (
        <>
          <div className=" p-2 border-l-2 border-gray-300" key={index}>
            <div className="flex gap-3">
              <img
                className="w-12 rounded-full"
                src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
                alt="user"
              />
              <div>
                <p className="font-bold">{userComment?.username}</p>
                <p>{userComment?.comment}</p>
              </div>
            </div>
          </div>
          {userComment?.replies && (
            <div className="px-10 ">
              <Comment comments={userComment?.replies} />
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default Comment;
