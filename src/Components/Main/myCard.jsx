import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { nanoid } from 'nanoid';


class MyCard extends Component {
  render() {
    const { book } = this.props;

    return (
      <div key={nanoid()} className="col-md-3 mb-4">
            
      <Card border="warning" className="h-100">
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            Price: € {book.price}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default MyCard;
