import React from "react";
import axios from "axios";
import "./App.css";

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
      <p key={book._id}>
        {book.title} is {book.description}
      </p>
    ));
    return (
      <>
        <header>
          <h1>Good Reads</h1>
        </header>
        <main>{this.state.books.length > 0 && <>{books}</>}</main>
      </>
    );
  }
}

export default App;
