import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { nanoid } from "nanoid";
import "../Main/border.css";
import CommentArea from "../Recensioni/CommentArea";

class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  toggleSelected = () => {
    this.setState(prevState => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { book } = this.props;

    return (
      <div key={nanoid()} className="col-md-3 my-4">
        <Card border="warning" className="h-100">
          <Card.Img
            variant="top"
            src={book.img}
            className={`${this.state.selected ? "selected" : ""} myImg`}
            onClick={this.toggleSelected}
          />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Price: € {book.price}</Card.Text>
            {this.state.selected && !this.props.book.reviews && (
              <CommentArea book={book} />
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MyCard;
