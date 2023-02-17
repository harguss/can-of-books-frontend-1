import React from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "./App.css";
import CreateBook from './components/CreateBook';


import Button from 'react-bootstrap/Button';
// import About from './About.js';
// import Nav from "./Nav";

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
  handleButtonClick = () => {
    console.log("Button clicked");
  };

  handleBookSubmit = async (event) => {
    event.preventDefault();
    let newBook = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
    };
    console.log(newBook);
    this.postBook(newBook);
  };

  postBook = async (newBookObject) => {
    try {
      let url = `${SERVER}/books`;
      let createdBook = await axios.post(url, newBookObject);
      console.log('createdBook', createdBook);
      this.setState({
        books: [...this.state.books, createdBook.data],
      });
    } catch (error) {
      console.log('We have an error: ', error.response.data);
    }
  };

  deleteBook = async (id) => {
    try {
      let url = `${SERVER}/books/${id}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter((book) =>
        book._id !== id
      );
      this.setState({ books: updatedBooks })
    } catch (error) {
      console.log('We have an error: ', error.response.data);
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
      <>
        <section>
          <header>
            <h1>Good Reads</h1>
          </header>
          <main className="carousel-container">
            {this.state.books.length > 0 ? (
              <Carousel>{books}</Carousel>
            ) : (
              <p>The book collection is empty.</p>
            )}



          </main>

          <CreateBook />

          {/* <About /> */}
        </section>
      </>
    );
  }
}



export default App;


