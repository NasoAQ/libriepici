import React, { useState } from "react";

const AddComment = ({ onAddComment, selectedBookId }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);

  const handleTextChange = e => {
    setText(e.target.value);
  };

  const handleRatingChange = e => {
    setRating(parseInt(e.target.value, 10));
  };

  const handleSubmit = async () => {
    const newComment = {
      comment: text,
      rate: rating,
      elementId: selectedBookId,
    };

    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5ODYyNTJkMDVjNTAwMTRkOTU1YTkiLCJpYXQiOjE2OTQwNzQ0MDUsImV4cCI6MTY5NTI4NDAwNX0.O_9ZbZOzkhCGd7xzsqUUd3qYkuW-BOjkD-g9buXAgTw",
        },
        body: JSON.stringify(newComment),
      }
    );

    if (!response.ok) {
      throw new Error("Errore nell'invio recensione");
    }

    // onAddComment(newComment);

    setText("");
    setRating(1);
  };

  return (
    <div>
      <h6>Add a Comment</h6>
      <form>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Comment Text
          </label>
          <textarea
            className="form-control"
            id="text"
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating (1-5)
          </label>
          <input
            type="number"
            className="form-control"
            id="rating"
            value={rating}
            min="1"
            max="5"
            onChange={handleRatingChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddComment;
