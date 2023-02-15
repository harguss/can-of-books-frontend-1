import React from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
// import About from './About.js';

let SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      console.log("results from API", results);
      this.setState({
        books: results.data,
      });
    } catch (error) {
      console.log("error found: ", error.message);
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    console.log(this.state.books);
    let books = this.state.books.map((book) => (
      <Carousel.Item key={book._id}>
        {/* <img src={book.cover} alt="Book cover" /> */}
        <h3>{book.title}</h3>
          <p>{book.description}</p>
          
        {/* <Carousel.Caption>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <img src={`http://placekitten.com/g/200/300`} alt={'cat'} />
        </Carousel.Caption> */}
      
      </Carousel.Item>
    ));
    return (
      <>
       
          <header>Good Reads</header>

          
       
        <main className="carousel-container">
          {this.state.books.length > 0 ? (
            <Carousel>{books}</Carousel>
          ) : (
            <p>The book collection is empty.</p>
          )}
       </main>
     
          
           {/* <About /> */}
     
      </>
    );
  }
}



export default App;


