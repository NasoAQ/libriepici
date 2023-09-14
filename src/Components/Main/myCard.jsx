import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { nanoid } from "nanoid";
import "../Main/border.css";
import CommentArea from "../Recensioni/CommentArea";

const MyCard = ({ book /* comments */ }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(prevState => !prevState);
  };

  return (
    <div key={nanoid()} className="col-6 col-md-4 col-lg-3 my-4">
      <Card border="warning" className="h-100">
        <Card.Img
          variant="top"
          src={book.img}
          className={`${selected ? "selected" : ""} myImg`}
          onClick={toggleSelected}
        />
        <Card.Body className="bg-success-subtle">
          <Card.Subtitle>{book.title}</Card.Subtitle>
          <Card.Text>
            <strong>Price:</strong>
            <span className="text-primary"> € {book.price}</span>
          </Card.Text>
          {selected && (
            /*  bookComments.lenght > 0 && */ <CommentArea asin={book.asin} />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;
