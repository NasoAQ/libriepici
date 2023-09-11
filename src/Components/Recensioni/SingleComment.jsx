import React from "react";

const SingleComment = ({ comment, onDeleteComment }) => {
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
      <button
        onClick={() => onDeleteComment(comment._id)}
        className="btn btn-danger"
      >
        Cancella
      </button>
      <hr />
    </div>
  );
};

export default SingleComment;
