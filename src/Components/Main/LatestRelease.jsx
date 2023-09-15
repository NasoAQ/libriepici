import React, { useContext, useState } from "react";
import { Container, Row } from "react-bootstrap";
import MyCard from "./myCard";
import { nanoid } from "nanoid";
import { ThemeProvider } from "../Contexts/ThemeContext";
import { PostProvider } from "../Contexts/provaContext";

const LatestRelease = () => {
  const { libriFiltrati } = useContext(PostProvider);
  const { theme } = useContext(ThemeProvider);
  const containerClasses = `${theme === "dark" ? "bg-dark" : ""}`;

  const [selectedBook, setSelectedBook] = useState(null);

  const handleClickImg = bookId => {
    setSelectedBook(bookId);
  };
  return (
    <Container className={containerClasses}>
      {libriFiltrati.length === 0 ? (
        <p className="text-danger">'No matching books found.</p>
      ) : (
        <Row>
          {libriFiltrati.map(book => (
            <MyCard
              key={nanoid()}
              book={book}
              isSelected={book.asin === selectedBook}
              onImgClick={handleClickImg}
            />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default LatestRelease;
