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
      <button onClick={handleDeleteClick} className="btn btn-danger">
        Cancella
      </button>
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
