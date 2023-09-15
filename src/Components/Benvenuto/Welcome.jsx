import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import "./ciao.css";
import { ThemeProvider } from "../Contexts/ThemeContext";

const Welcome = () => {
  const { theme } = useContext(ThemeProvider);

  const bgClasses = theme === "dark" ? "bg-image-dark" : "bg-image";

  return (
    <Container className={`my-5 ${bgClasses}`}>
      <div className="myDiv text-center">
        <h2>NasoBookStore</h2>
        <h5>Explore the latest romance book</h5>
      </div>
    </Container>
  );
};

export default Welcome;
