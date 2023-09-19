import React, { useState, useEffect, useContext } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";
import IsLoading from "../Spinner/isLoading";
import { ThemeProvider } from "../Contexts/ThemeContext";

const CommentArea = ({ asin }) => {
	const [reviews, setReviews] = useState([]);
	const [randomReview, setRandomReview] = useState(null);
	const [selectedBookId, setSelectedBookId] = useState(null);
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const { theme } = useContext(ThemeProvider);

	const commentTheme = theme === "dark" ? "text-white" : "";

	const fetchReviews = async () => {
		setIsLoading(true);
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
			setReviews(data);

			const randomIndex = Math.floor(Math.random() * data.length);
			const randomSelectedReview = data[randomIndex];

			setRandomReview(randomSelectedReview);
		} catch (error) {
			console.log(error, "Errore nelle props");
		} finally {
			setIsLoading(false);
		}
	};

	const handleAddComment = async newComment => {
		try {
			setComments([...comments, newComment]);
			setNewComment(newComment);
		} catch (error) {
			setError(error, "Errore nell'inserimento");
		}
	};

	const handleEditComment = async editedComment => {
		try {
			const response = await fetch(
				`https://striveschool-api.herokuapp.com/api/comments/${editedComment._id}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5ODYyNTJkMDVjNTAwMTRkOTU1YTkiLCJpYXQiOjE2OTQwNzQ0MDUsImV4cCI6MTY5NTI4NDAwNX0.O_9ZbZOzkhCGd7xzsqUUd3qYkuW-BOjkD-g9buXAgTw",
					},
					body: JSON.stringify(editedComment),
				}
			);
			if (!response.ok) {
				throw new Error("Errore nell'invio del commento modificato");
			}

			const updatedReviews = reviews.map(review =>
				review._id === editedComment._id ? editedComment : review
			);
			setReviews(updatedReviews);
			fetchReviews();
		} catch (error) {}
	};

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
			fetchReviews();
		} catch (error) {
			console.log(error, "Errore nella cancellazione");
		}
	};

	useEffect(() => {
		fetchReviews();
		setSelectedBookId(asin);
		//setIsLoading(false);
	}, [asin]);

	const filteredReviews = reviews.filter(item => item.elementId === asin);

	return (
		<>
			<IsLoading isLoading={isLoading} />
			{filteredReviews.length === 0 && randomReview && (
				<>
					<h5 className="text-danger mt-3">Random reviews</h5>
					<SingleComment
						comment={randomReview}
						onDeleteComment={handleDeleteComment}
						onEditComment={handleEditComment}
						commentTheme={`${commentTheme}`}
					/>
				</>
			)}
			{filteredReviews.length > 0 && (
				<>
					<h5 className="text-success mt-3">Real reviews</h5>

					<CommentList
						comments={filteredReviews}
						onDeleteComment={handleDeleteComment}
						onEditComment={handleEditComment}
						commentTheme={`${commentTheme}`}
					/>
				</>
			)}
			<AddComment
				selectedBookId={selectedBookId}
				onAddComment={handleAddComment}
				setReviews={setReviews}
				reviews={reviews}
				commentTheme={`${commentTheme}`}
			/>
		</>
	);
};

export default CommentArea;
