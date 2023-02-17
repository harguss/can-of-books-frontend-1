import React from 'react';
import Form from 'react-bootstrao/Form';
import Button from 'react-bootstrap/Button';
import {Container} from 'react-bootstrap';

class CreateBook extends React.Component {

    render() {
        return (
            <Container className='mt-5'>
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Group controlid="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group controlid="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group controlid="status">
                        <Form.Check type="checkbox" label="Available" />
                    </Form.Group>
                    <Button type="submit">Add Book</Button>
                </Form>
            </Container>
        )
    }
}

export default CreateBook;