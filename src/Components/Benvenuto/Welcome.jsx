import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import "./ciao.css";

export class Welcome extends Component {
  render() {
    return (
      <Container className='my-5 bg-image'>
        <div className="myDiv">
        <h2>Welcome to the NasoBookStore</h2>
        <h5>Explore the latest book release and find your next read</h5>
        </div>
      </Container>
    )
  }
}

export default Welcome
