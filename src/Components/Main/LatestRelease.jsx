import React, { Component } from 'react'
import {Container, Row} from 'react-bootstrap';
import MyCard from './myCard';
import Pippo from '../../data/booksCategory/romance.json'


export class LatestRelease extends Component {
  render() {
    return (
      <Container>
        <Row>
          {Pippo.map((book) => (<MyCard book={book} />))}
        </Row>        
      </Container>
    )
  }
}

export default LatestRelease
