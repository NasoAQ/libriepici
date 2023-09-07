import React, { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

export class CommentArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  async getComment() {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5ODYyNTJkMDVjNTAwMTRkOTU1YTkiLCJpYXQiOjE2OTQwNzQ0MDUsImV4cCI6MTY5NTI4NDAwNX0.O_9ZbZOzkhCGd7xzsqUUd3qYkuW-BOjkD-g9buXAgTw",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Errore nella richiesta");
    }
    const data = await response.json();
    this.setState({ reviews: data });
  }
  catch(error) {
    console.log(error, "Errore nell'inserimento props");
  }
  componentDidMount() {
    this.getComment();
  }

  render() {
    return (
      <>
        <div>Reviews</div>
        <CommentList comments={this.state.reviews} />
        <AddComment />
      </>
    );
  }
}

export default CommentArea;
