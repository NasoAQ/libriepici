import React from "react";

const SingleComment = ({ comment }) => {
  return (
    <div>
      <p>Author: {comment.author}</p>
      <p>Comment: {comment.comment}</p>
    </div>
  );
};

export default SingleComment;
