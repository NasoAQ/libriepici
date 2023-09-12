import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const SingleComment = ({ comment, onDeleteComment }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setModalOpen(true);
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
      <p>
        <strong>Author:</strong> {comment.author}
      </p>
      <p>
        <strong>Comment:</strong> {comment.comment}
      </p>
      <p>
        <strong>Rate:</strong> {comment.rate}
      </p>
      <p>
        <span>Updated at:</span> {updatedDateStr}
      </p>
      <div className="d-flex justify-content-evenly">
        <button onClick={handleDeleteClick} className="btn btn-danger btn-sm">
          Cancella
        </button>
        <button className="btn btn-success btn-sm">Modifica</button>
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
    </div>
  );
};

export default SingleComment;
