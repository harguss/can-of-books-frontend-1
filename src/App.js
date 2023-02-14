import React from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "./App.css";
import About from './About.js';

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
      console.log("error found: ", error.response.data);
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    console.log(this.state.books);
    let books = this.state.books.map((book) => (
      <Carousel.Item key={book._id}>
        <p>
          {book.title} is {book.description}
        </p>
      </Carousel.Item>
    ));
    return (
      <body>
        <header>
          <h1>Good Reads</h1>
        </header>
        <main>
          {this.state.books.length > 0 ? (
            <Carousel>{books}</Carousel>
          ) : (
            <p>The book collection is empty.</p>
          )}
        </main>
      </body>
  );
}
}



export default App;


