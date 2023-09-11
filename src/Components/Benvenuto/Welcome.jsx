import React from "react";
import Container from "react-bootstrap/Container";
import "./ciao.css";

const Welcome = () => {
  return (
    <Container className="my-5 bg-image">
      <div className="myDiv text-center">
        <h2>NasoBookStore</h2>
        <h5>Explore the latest book release</h5>
      </div>
    </Container>
  );
};

export default Welcome;
