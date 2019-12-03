import React, { PureComponent } from 'react';
import '../css/index.css';
import { connect } from 'react-redux';
import { addBook } from '../actions/wishList';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateBook extends PureComponent {

    state = {
        title: '',
        author: '',
        info: ''
    };

    //instead of writing handleChange() as a class method, I declare it as a class property and assign an arrow function to it.
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addBook(this.state);
        //update the Redux store's state when the user hits the submit button
        this.setState({
            title: '',
            author: '',
            info: ''
        })
    }
    
    render () {
        
        return (
            
            <Container className="custom-container">
                <Col xs={6}>
                    <h1>Create a book</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>

                            <Form.Label><h6>Title</h6></Form.Label>
                            <Form.Control 
                                id='title' 
                                type='text' 
                                aria-label='Title' 
                                aria-required='true' 
                                name='title' 
                                onChange={ this.handleChange } 
                                value={ this.state.title }
                                placeholder="Add a title"
                            />

                            <Form.Label><h6>Author</h6></Form.Label>
                            <Form.Control 
                                id='author' 
                                type='text' 
                                aria-label='Author' 
                                aria-required='true' 
                                name='author' 
                                onChange={ this.handleChange } 
                                value={ this.state.author }
                                placeholder="Add an author"
                            />

                            <Form.Label><h6>More Info</h6></Form.Label>
                            <Form.Control 
                                id='info' 
                                type='text' 
                                aria-label='Info' 
                                aria-required='true' 
                                name='info' 
                                onChange={ this.handleChange } 
                                value={ this.state.info } 
                            />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Add to whislist
                        </Button>
                    </Form>
                </Col>
            </Container>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return { addBook: book => dispatch(addBook(book)) }
};

export default connect(null, mapDispatchToProps)(CreateBook);