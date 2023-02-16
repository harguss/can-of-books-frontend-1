import React from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
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


        {/* <BrowserRouter> */}
        <>
          <header><h1>Good Reads</h1> </header>
          <nav>
            <ul>
              {/* <li><link to="/about">About</link></li> */}
              <a href="./About" >About</a>
            </ul>
          </nav>


          {/* <Routes>
              <Route path="/About" element={<About/>} />
            </Routes> */}

          <main className="carousel-container">
            {this.state.books.length > 0 ? (
              <Carousel>{books}</Carousel>
            ) : (
              <p>The book collection is empty.</p>
            )}
          </main>
        </>
        {/* </BrowserRouter> */}

      </>
    );
  }
}



export default App;


