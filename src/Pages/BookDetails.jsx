import React from "react";
import { useParams } from "react-router-dom";
import MyCard from "../Components/Main/myCard";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();

  return (
    <>
      <h1>Pagina del libro con id {bookId}</h1>
      <Button className="btn-warning">
        <Link to="/">HOME</Link>
      </Button>
    </>
  );
};

export default BookDetails;
