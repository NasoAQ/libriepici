import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import FootLinks from "./FootLinks";
import { myLinksFoot } from "../../data/navlinks";

export class MyFooter extends Component {
  render() {
    return (
      <footer class="bg-dark text-light text-lg-start">
        <Container>
          <Row>
            <FootLinks links={myLinksFoot} title="Quando" />
            <FootLinks links={myLinksFoot} title="Come" />
            <FootLinks links={myLinksFoot} title="Perchè" />
          </Row>
        </Container>
      </footer>
    );
  }
}

export default MyFooter;
