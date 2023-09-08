import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import MyCard from "./myCard";
import Pippo from "../../data/booksCategory/romance.json";
import { nanoid } from "nanoid";

const LatestRelease = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = e => {
    setSearchText(e.target.value);
  };

  const filteredBooks = Pippo.filter(book =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchText}
        onChange={handleSearchChange}
        className="form-control my-3"
      />
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
