import React from "react";
import Spinner from "react-bootstrap/Spinner";

const IsLoading = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="grow" variant="warning" />
      </div>
    );
  }
  return null;
};

export default IsLoading;
