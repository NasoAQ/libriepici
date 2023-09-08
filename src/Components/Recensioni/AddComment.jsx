import React, { useState } from "react";

const AddComment = ({ onAddComment }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);

  const handleTextChange = e => {
    setText(e.target.value);
  };

  const handleRatingChange = e => {
    setRating(parseInt(e.target.value, 10));
  };

  const handleSubmit = () => {
    const newComment = {
      text: text,
      rating: rating,
    };

    onAddComment(newComment);

    setText("");
    setRating(1);
  };

  return (
    <div>
      <h3>Add a Comment</h3>
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
