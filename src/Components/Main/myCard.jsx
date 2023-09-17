import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import "../Main/border.css";
import CommentArea from "../Recensioni/CommentArea";
import { ThemeProvider } from "../Contexts/ThemeContext";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyCard = ({ book, onImgClick, isSelected }) => {
  const { theme } = useContext(ThemeProvider);

  const bordoRosso = isSelected && "selected";
  const borderClasses = theme === "dark" ? "border-success" : "border-warning";
  const cardBgClasses =
    theme === "dark" ? "bg-body-tertiary" : "bg-success-subtle";

  const handleClickImg = () => {
    if (isSelected) {
      onImgClick(null);
    } else {
      onImgClick(book.asin);
    }
  };

  return (
    <div key={nanoid()} className="col-6 col-md-4 col-lg-3 my-4">
      <Card className={`h-100 ${borderClasses}`}>
        <Card.Img
          variant="top"
          src={book.img}
          className={`${bordoRosso} myImg`}
          onClick={handleClickImg}
        />
        <Card.Body className={cardBgClasses}>
          <Card.Subtitle>{book.title}</Card.Subtitle>
          <Card.Text>
            <strong>Price:</strong>
            <span className="text-primary"> € {book.price}</span>
            <Button className="btn-warning btn-sm mx-2">
              <Link to={`/book/${book.asin}`}>Details</Link>
            </Button>
          </Card.Text>
          {isSelected && <CommentArea asin={book.asin} />}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;
