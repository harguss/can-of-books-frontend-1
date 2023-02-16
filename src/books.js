import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";

class Books extends React.Component {

    render(){
        console.log(this.props.books);
        let books = this.props.books.map((book) => (
            <Book book={book} key={book._id} deleteBooks={this.props.deleteBooks}/>
        ));

    return(
        <Container>
            <ListGroup>{Books}</ListGroup>
        </Container>
    );    
    }

}
class Book extends Books {

    render(){
        this.return(
            <ListGroup.Item>
            {this.props.book.title} is {this.props.book.description}
            <Button 
            variant= "success"
            click={()=> {
                this.props.deleteBooks(this.props.book._id)
            }}>deleteBook</Button>
            </ListGroup.Item>
        );

        }



    }




export default Books;