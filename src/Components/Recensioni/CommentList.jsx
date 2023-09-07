import React, { Component } from "react";
import MyCard from "../Main/myCard";

export class CommentList extends Component {
  render() {
    const { comments } = this.props;

    return (
      <div>
        {/* {comments.map(comment => (
          <MyCard key={comment._id} book={comment.book} />
        ))} */}
      </div>
    );
  }
}

export default CommentList;
