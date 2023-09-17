import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <h1>OOOOPS LA PAGINA NON ESISTE!</h1>
      <Button className="btn-warning">
        <Link to="/">HOME</Link>
      </Button>
    </div>
  );
};

export default Errorpage;
