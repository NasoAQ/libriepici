import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const SingleComment = ({ comment, onDeleteComment, onEditComment }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const handleDeleteClick = () => {
    setModalOpen(true);
  };

  const handleEditClick = () => {
    //onEditComment(comment);
    setModalOpen2(true);
  };

  const handleCancelEdit = () => {
    setModalOpen2(false);
  };

  const handleConfirmEdit = () => {
    onEditComment(comment);
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
        <button onClick={handleEditClick} className="btn btn-success btn-sm">
          Modifica
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
        <Modal.Body>Sei sicuro di voler modificare questo commento?</Modal.Body>
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
