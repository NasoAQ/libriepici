import React, { useState, useEffect, useContext } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";
import IsLoading from "../Spinner/isLoading";
import { ThemeProvider } from "../Contexts/ThemeContext";

const CommentArea = ({ selectedBookId }) => {
	const [reviews, setReviews] = useState([]);
	const [randomReview, setRandomReview] = useState(null);
	//const [selectedBookId, setSelectedBookId] = useState(null);
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const { theme } = useContext(ThemeProvider);

	const myToken =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyZTNiZmI5ZDAwMTRkYTgzMjciLCJpYXQiOjE2OTUzMTYwMTUsImV4cCI6MTY5NjUyNTYxNX0.m5ekzogtUh0P4f8VZg55jmDRB5FjC2NseJGYpUuQqF8";

	const commentTheme = theme === "dark" ? "text-white" : "";

	const fetchReviews = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(
				`https://striveschool-api.herokuapp.com/api/comments/`,
				{
					headers: {
						Authorization: myToken,
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
			setError(error);
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
						Authorization: myToken,
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
		} catch (error) {
			setError(error);
		}
	};

	const handleDeleteComment = async commentId => {
		try {
			const response = await fetch(
				`https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
				{
					method: "DELETE",
					headers: {
						Authorization: myToken,
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
			setError(error);
			console.log(error, "Errore nella cancellazione");
		}
	};

	useEffect(() => {
		fetchReviews();
		//setSelectedBookId(selectedBookId);
		//setIsLoading(false);
	}, [selectedBookId]);

	const filteredReviews = reviews.filter(
		item => item.elementId === selectedBookId
	);

	return (
		<>
			<IsLoading isLoading={isLoading} />
			{filteredReviews.length === 0 && randomReview && selectedBookId && (
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
