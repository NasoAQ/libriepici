/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { nanoid } from "nanoid";

export class MyNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar expand="lg" bg="warning" data-bs-theme="warning">
        <Container>
          <Navbar.Brand href="#home">LibriEpici</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {this.props.links.map(link => {
                return (
                  <Nav.Link key={nanoid()} href={link.href}>
                    {link.name}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyNav;
