import React from "react";
import SingleComment from "./SingleComment";

const CommentList = ({ comments, onDeleteComment }) => {
  return (
    <div>
      {comments.map(comment => (
        <SingleComment
          key={comment._id}
          comment={comment}
          onDeleteComment={onDeleteComment}
        />
      ))}
    </div>
  );
};

export default CommentList;
