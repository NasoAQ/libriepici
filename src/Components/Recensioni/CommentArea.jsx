import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";

const CommentArea = ({ asin }) => {
  const [reviews, setReviews] = useState([]);
  const [randomReview, setRandomReview] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [comments, setComments] = useState([]);
  const [selectedComment, setSelectedComment] = useState(null);

  const handleDeleteComment = async commentId => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5ODYyNTJkMDVjNTAwMTRkOTU1YTkiLCJpYXQiOjE2OTQwNzQ0MDUsImV4cCI6MTY5NTI4NDAwNX0.O_9ZbZOzkhCGd7xzsqUUd3qYkuW-BOjkD-g9buXAgTw",
          },
        }
      );
      if (!response.ok) {
        throw new Error(Error, "Errore nella cancellazione");
      }
      const updatedComments = comments.filter(
        comment => comment._id !== commentId
      );
      setComments(updatedComments);
    } catch (error) {
      console.log(error, "Errore nella cancellazione");
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/`,
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

        let data = await response.json();

        /*         data = data.filter(item => item.elementId === asin);
         */ setReviews(data);

        const randomIndex = Math.floor(Math.random() * data.length);
        const randomSelectedReview = data[randomIndex];

        setRandomReview(randomSelectedReview);
      } catch (error) {
        console.log(error, "Errore nelle props");
      }
    };

    fetchReviews();
    setSelectedBookId(asin);
  }, [asin]);

  const filteredReviews = reviews.filter(item => item.elementId === asin);

  return (
    <>
      {filteredReviews.length === 0 && randomReview && (
        <>
          <h5 className="text-danger">Random reviews</h5>
          <SingleComment
            comment={randomReview}
            onDeleteComment={handleDeleteComment}
          />
        </>
      )}
      {filteredReviews.length > 0 && (
        <h5 className="text-success">Real reviews</h5>
      )}
      <CommentList
        comments={filteredReviews}
        onDeleteComment={handleDeleteComment}
      />
      <AddComment selectedBookId={selectedBookId} />
    </>
  );
};

export default CommentArea;
