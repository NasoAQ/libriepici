import React, { Component } from 'react'
import {Nav, Col} from 'react-bootstrap';
import { nanoid } from 'nanoid';


export class FootLinks extends Component {
  render() {
    return (
        <Col>
        <h5 class="text-uppercase">{this.props.title}</h5>
        <Nav className="me-auto">
              {this.props.links.map((link)=>{
                  return (
                      <Nav.Link key={nanoid()} href={link.href}>{link.name}</Nav.Link>
                  )
              })}
          </Nav>
      </Col>
    )
  }
}

export default FootLinks
