import React from "react";
import SingleComment from "./SingleComment";

const CommentList = ({ comments, onDeleteComment, onEditComment }) => {
  return (
    <div>
      {comments.map(comment => (
        <SingleComment
          key={comment._id}
          comment={comment}
          onDeleteComment={onDeleteComment}
          onEditComment={onEditComment}
        />
      ))}
    </div>
  );
};

export default CommentList;
