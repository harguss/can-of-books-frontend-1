import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import BookFormModal from '../components/BookFormModel';

class CreateBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    handleShowModal = () => {
        this.setState({ showModal: true });
    }

    handleHideModal = () => {
        this.setState({ showModal: false });
    }

    handleSubmit = (book) => {
        // Call the parent component's onSubmit function with the book object
        this.props.onSubmit(book);
    }

    render() {
        return (
            <Container className="mt-5">
                <Button variant="outline-secondary" onClick={
                    () => this.handleShowModal()}>Add Book</Button>
                <BookFormModal
                    show={this.state.showModal}
                    onSubmit={this.handleSubmit}
                    onHide={this.handleHideModal}
                />
            </Container>
        );
    }
}

export default CreateBook;