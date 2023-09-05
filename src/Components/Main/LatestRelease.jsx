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
  render() {
    return (
      <Container>
        <input
          type="text"
          placeholder="Search by title..."
          value={this.state.searchText}
          onChange={this.handleSearchChange}
          className='form-control my-3'
        />
        <Row>
          {Pippo.filter((book) => 
          book.title.toLowerCase().includes(this.state.searchText.toLowerCase())).map((book) => (
          <MyCard key={nanoid()} book={book} />
          ))}
        </Row>        
      </Container>
    );
  }

  handleSearchChange = (e) => {
    this.setState((prevState) => ({
      searchText: e.target.value
    }));

  }
}

export default LatestRelease
