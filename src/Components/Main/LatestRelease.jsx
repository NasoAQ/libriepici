import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import MyCard from "./myCard";
import Pippo from "../../data/booksCategory/romance.json";
import { nanoid } from "nanoid";
import ThemeContext from "../Contexts/ThemeContext";

const LatestRelease = ({ searchText }) => {
  const filteredBooks = Pippo.filter(book =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const { theme } = useContext(ThemeContext);
  const containerClasses = `${theme === "dark" ? "bg-dark" : ""}`;
  return (
    <Container className={containerClasses}>
      {filteredBooks.length === 0 ? (
        <p className="text-danger">'No matching books found.</p>
      ) : (
        <Row>
          {filteredBooks.map(book => (
            <MyCard key={nanoid()} book={book} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default LatestRelease;
