import React from "react";
import SingleComment from "./SingleComment";

const CommentList = ({
	comments,
	onDeleteComment,
	onEditComment,
	commentTheme,
}) => {
	return (
		<div>
			{comments.map(comment => (
				<SingleComment
					key={comment._id}
					comment={comment}
					onDeleteComment={onDeleteComment}
					onEditComment={onEditComment}
					commentTheme={`${commentTheme}`}
				/>
			))}
		</div>
	);
};

export default CommentList;
