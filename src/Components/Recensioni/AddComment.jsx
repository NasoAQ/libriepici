import { React, useState } from "react";
import { PlusSquare } from "react-bootstrap-icons";
import { Tooltip } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "../Recensioni/badge.css";

const AddComment = ({
	onAddComment,
	selectedBookId,
	setReviews,
	reviews,
	commentTheme,
	title,
}) => {
	const [text, setText] = useState("");
	const [rating, setRating] = useState(1);
	const [author, setAuthor] = useState("");
	const [comments, setComments] = useState([]);
	const [error, setError] = useState(null);

	const myToken =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyZTNiZmI5ZDAwMTRkYTgzMjciLCJpYXQiOjE2OTUzMTYwMTUsImV4cCI6MTY5NjUyNTYxNX0.m5ekzogtUh0P4f8VZg55jmDRB5FjC2NseJGYpUuQqF8";

	const renderTooltip = props => (
		<Tooltip id="button-tooltip" {...props}>
			Add
		</Tooltip>
	);

	const handleTextChange = e => {
		setText(e.target.value);
	};

	const handleRatingChange = e => {
		setRating(parseInt(e.target.value, 10));
	};

	const handleAuthorChange = e => {
		setAuthor(e.target.value);
	};

	const handleSubmit = async () => {
		const newComment = {
			comment: text,
			rate: rating,
			author: author,
			elementId: selectedBookId,
		};

		const response = await fetch(
			"https://striveschool-api.herokuapp.com/api/comments/",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: myToken,
				},
				body: JSON.stringify(newComment),
			}
		);

		if (!response.ok) {
			setError(error, "Errore nell'invio recensione");
		} else {
			// Aggiungi il nuovo commento solo se la risposta è OK
			setComments([...comments, newComment]);
			setReviews([...reviews, newComment]);
		}

		setAuthor("");
		setText("");
		setRating(1);
	};

	return (
		<div className={`${commentTheme}`}>
			<h6>{`Add a Comment for ${selectedBookId}`}</h6>
			<form>
				<div className="mb-3">
					<label htmlFor="author" className="form-label">
						Author
					</label>
					<input
						type="text"
						className="form-control"
						id="author"
						value={author}
						onChange={handleAuthorChange}
					/>
				</div>
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
				<div className="d-flex justify-content-center">
					<OverlayTrigger
						placement="bottom"
						delay={{ show: 250, hide: 250 }}
						overlay={renderTooltip}
					>
						<button
							type="button"
							className="btn btn-primary"
							onClick={handleSubmit}
						>
							<PlusSquare />
						</button>
					</OverlayTrigger>
				</div>
			</form>
		</div>
	);
};

export default AddComment;
