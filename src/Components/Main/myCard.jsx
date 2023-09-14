import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import { nanoid } from "nanoid";
import "../Main/border.css";
import CommentArea from "../Recensioni/CommentArea";
import ThemeContext from "../Contexts/ThemeContext";

const MyCard = ({ book, onImgClick /* comments */ }) => {
  const [selected, setSelected] = useState(false);
  const { theme } = useContext(ThemeContext);

  const toggleSelected = () => {
    setSelected(prevState => !prevState);
  };

  const borderClasses = theme === "dark" ? "border-success" : "border-warning";
  const cardBgClasses =
    theme === "dark" ? "bg-body-tertiary" : "bg-success-subtle";

  const handleClickImg = () => {
    toggleSelected();
    onImgClick(book.asin);
  };

  return (
    <div key={nanoid()} className="col-6 col-md-4 col-lg-3 my-4">
      <Card className={`h-100 ${borderClasses}`}>
        <Card.Img
          variant="top"
          src={book.img}
          className={`${selected ? "selected" : ""} myImg`}
          onClick={handleClickImg}
        />
        <Card.Body className={cardBgClasses}>
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
