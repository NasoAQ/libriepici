import React, { Component } from 'react'
import {Container, Row} from 'react-bootstrap';
import MyCard from './myCard';
import Pippo from '../../data/booksCategory/romance.json'
import { nanoid } from 'nanoid';


export class LatestRelease extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: "",
    }
  }

  handleSearchChange = (e) => {
    this.setState({
      searchText: e.target.value
    });

  }

  render() {
    const filteredBooks = Pippo.filter((book) =>
      book.title.toLowerCase().includes(this.state.searchText.toLowerCase()));

    return (
      <Container>
        <input
          type="text"
          placeholder="Search by title..."
          value={this.state.searchText}
          onChange={this.handleSearchChange}
          className='form-control my-3'
        />
        {filteredBooks.length === 0 ? (
          <p className='text-danger'>'No matching books found.</p>
        ) : (
          <Row>  
            {filteredBooks.map((book) => (
              <MyCard key={nanoid()} book={book} />
            ))}
          </Row>
        )}        
      </Container>
    );
  }
}

export default LatestRelease
