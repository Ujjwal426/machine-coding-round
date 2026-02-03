import React from "react";
import { Comment } from "../../components";

// Nested Comments Dummy Data
const comments = [
  {
    username: "Ujjwal T",
    comment: "Hello",
    replies: [
      {
        username: "Raj S",
        comment: "Hi",
        replies: [
          { username: "Raj S", comment: "Hi" },
          { username: "Siltaz", comment: "Ky Hall Chaal" },
        ],
      },
      { username: "Siltaz", comment: "Ky Hall Chaal" },
    ],
  },
  { username: "Raj S", comment: "Hi" },
  { username: "Siltaz", comment: "Ky Hall Chaal" },
];

const NestedComments = () => {
  return (
    <div className="p-5">
      <Comment comments={comments}/>
    </div>
  );
};

export default NestedComments;
