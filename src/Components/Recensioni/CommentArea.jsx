import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";

const CommentArea = ({ asin }) => {
  const [reviews, setReviews] = useState([]);
  const [randomReview, setRandomReview] = useState(null);

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

        data = data.filter(item => item.elementId === asin);

        const randomIndex = Math.floor(Math.random() * data.lenght);
        const randomSelectedReview = data[randomIndex];

        setReviews(data);
        setRandomReview(randomSelectedReview);
      } catch (error) {
        console.log(error, "Errore nelle props");
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      <div>Random</div>
      {randomReview && <SingleComment comment={randomReview} />}
      <div>Reviews</div>
      <CommentList comments={reviews} />
      <AddComment />
    </>
  );
};

export default CommentArea;
