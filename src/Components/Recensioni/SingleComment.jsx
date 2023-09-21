import React, { useState } from "react";
import { Modal, Button, Badge } from "react-bootstrap";
import { Trash, PencilSquare } from "react-bootstrap-icons";

const SingleComment = ({
	comment,
	onDeleteComment,
	onEditComment,
	commentTheme,
}) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalOpen2, setModalOpen2] = useState(false);
	const [editedComment, setEditedComment] = useState({ ...comment });

	const handleDeleteClick = () => {
		setModalOpen(true);
	};

	const handleEditClick = () => {
		setModalOpen2(true);
	};

	const handleCancelEdit = () => {
		setModalOpen2(false);
	};

	const handleConfirmEdit = () => {
		onEditComment(editedComment);
		setModalOpen2(false);
	};

	const handleConfirmDelete = () => {
		onDeleteComment(comment._id);
		setModalOpen(false);
	};

	const handleCancelDelete = () => {
		setModalOpen(false);
	};

	const updatedDate = new Date(comment.updatedAt);
	const updatedDateStr = updatedDate.toLocaleString();

	return (
		<div>
			<p className={`${commentTheme}`}>
				<strong>Author:</strong> {comment.author}
			</p>
			<p className={`${commentTheme}`}>
				<strong>Comment:</strong> {comment.comment}
			</p>
			<p className={`${commentTheme}`}>
				<strong>Rate:</strong> {comment.rate}
			</p>
			<p className={`${commentTheme}`}>
				<span>Updated at:</span> {updatedDateStr}
			</p>
			<div className="d-flex justify-content-evenly">
				<button onClick={handleDeleteClick} className="btn btn-danger btn-sm">
					<Trash />
					<Badge bg="danger" className="badge">
						Delete
					</Badge>
				</button>
				<button onClick={handleEditClick} className="btn btn-success btn-sm">
					<PencilSquare />
					<Badge bg="success" className="badge">
						Edit
					</Badge>
				</button>
			</div>
			<hr />

			<Modal show={modalOpen} onHide={handleCancelDelete}>
				<Modal.Header closeButton>
					<Modal.Title>Conferma cancellazione</Modal.Title>
				</Modal.Header>
				<Modal.Body>Sei sicuro di voler cancellare questo commento?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCancelDelete}>
						Annulla
					</Button>
					<Button variant="danger" onClick={handleConfirmDelete}>
						Conferma
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal show={modalOpen2} onHide={handleCancelEdit}>
				<Modal.Header closeButton>
					<Modal.Title>Conferma modifica</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<div className="mb-3">
							<label htmlFor="editedAuthor" className="form-label">
								Author:
							</label>
							<input
								type="text"
								className="form-control"
								id="editedAuthor"
								value={editedComment.author}
								onChange={e =>
									setEditedComment({
										...editedComment,
										author: e.target.value,
									})
								}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="editedText" className="form-label">
								Comment:
							</label>
							<textarea
								className="form-control"
								id="editedText"
								value={editedComment.comment}
								onChange={e =>
									setEditedComment({
										...editedComment,
										comment: e.target.value,
									})
								}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="editedRating" className="form-label">
								Rate:
							</label>
							<input
								type="number"
								className="form-control"
								id="editedRating"
								value={editedComment.rate}
								min="1"
								max="5"
								onChange={e =>
									setEditedComment({
										...editedComment,
										rate: parseInt(e.target.value),
									})
								}
							/>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCancelEdit}>
						Annulla
					</Button>
					<Button variant="success" onClick={handleConfirmEdit}>
						Conferma
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default SingleComment;
