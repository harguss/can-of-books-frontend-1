import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      available: false
    };
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const book = {
      title: this.state.title,
      description: this.state.description,
      available: this.state.available
    };
    this.props.onSubmit(book);
    this.setState({
      title: '',
      description: '',
      available: false
    });
    this.props.onHide();
  }
  render() {
    return (
      <Container className='mt-5'>
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.handleSubmit}>
              <Form.Group controlid="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlid="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlid="status">
                <Form.Check type="checkbox" label="Available" />
              </Form.Group>
              {/* <Button variant="outline-secondary" onClick={this.handleShowModal}>Add Book</Button> */}
              <Button variant="outline-secondary" onClick={this.handleButtonClick}>Add Books</Button>
              <BookFormModal show={this.state.showModal} onSubmit={this.handleSubmit} onHide={this.handleHideModal} />
            </Form>
          </Modal.Body>
        </Modal>
      </Container >
    )
  }
}

export default BookFormModal;