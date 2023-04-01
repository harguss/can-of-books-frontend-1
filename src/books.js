import React from "react";
import { Container, ListGroup } from "react-bootstrap";

class Books extends React.Component {

    render() {
        console.log(this.props.books);
        let books = this.props.books.map((book) => (
            <Book book={book} key={book._id} deleteBooks={this.props.deleteBooks} />
        ));

        return (
            <Container>
                <ListGroup>{books}</ListGroup>
            </Container>
        );
    }

}
class Book extends React.Component {

    render() {
        return (
            <>
            </>
            
        );
    }
}







export default Books;