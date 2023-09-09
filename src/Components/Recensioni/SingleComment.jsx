import React from "react";

const SingleComment = ({ comment }) => {
  return (
    <div>
      <p>
        <strong>Author:</strong> {comment.author}
      </p>
      <p>
        <strong>Comment:</strong> {comment.comment}
      </p>
      <p>
        <strong>Rate:</strong> {comment.rate}
      </p>
      <hr />
    </div>
  );
};

export default SingleComment;
