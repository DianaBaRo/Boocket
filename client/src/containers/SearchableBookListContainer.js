import React, { PureComponent } from 'react';
import '../css/index.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchBookList } from '../actions/searchBookList';
import { addBookFromSearch } from '../actions/wishList';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';


class SearchableBookListContainer extends PureComponent {

    state = {
        query: ''
    };

    handleChange = event =>
        this.setState({ query: event.target.value });

    handleSubmit = event => {  
        event.preventDefault();
        this.props.fetchSearchBookList(this.state.query);
    };

    handleAddBook = (book) => {
        this.props.addBook(book);
    };

    handleLoading = () => {
      
        const renderBooks = this.props.books.map(book => (
            
                <Card>
                    <Card.Img variant="top" src={ book.volumeInfo.imageLinks === undefined ? '/download.jpeg' : book.volumeInfo.imageLinks.thumbnail } alt={book.volumeInfo.title} />
                    <Card.Body>
                        
                        <Card.Text>
                            <button type="button" class="close" aria-label="Close" onClick={ () => {this.handleAddBook(book)} } ><span aria-hidden="true">+</span></button>
                            <Link to={{
                                pathname: `/search/books/${book.volumeInfo.title}`,
                                state: {
                                    title: book.volumeInfo.title,
                                    image: book.volumeInfo.imageLinks,
                                    author: book.volumeInfo.authors,
                                    infoLink: book.volumeInfo.infoLink,
                                    info: book.volumeInfo.description
                                }
                            }} ><h4>{ book.volumeInfo.title }</h4></Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
                
        ));
        return renderBooks;
    };
    
    render () {
        return (
            <Container className="custom-container">
                <Col xs={6}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label><h1>Search</h1></Form.Label>
                            <Form.Control 
                                id='query' 
                                type='text' 
                                aria-label='Search' 
                                aria-required='true' 
                                name='query' 
                                onChange={this.handleChange} 
                                value={this.state.query} 
                                placeholder="Enter keyword" 
                            />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Search
                        </Button>
                    </Form>
                    
                </Col>
                <Col xs={6}>
                    <p></p>
                    {typeof this.props.books === 'object' && this.props.books.length > 0 && <h3>Results for { this.state.query }:</h3>}
                </Col>
                <CardColumns>
                        {this.handleLoading()}
                </CardColumns>
            </Container>
        
        );
    };

};

const mapStateToProps = state => {
    return { 
        books: state.searchBookList
     }
};

const mapDispatchToProps = dispatch => {
    return { 
        fetchSearchBookList: (query) => dispatch(fetchSearchBookList(query)),
        addBook: book => dispatch(addBookFromSearch(book))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (SearchableBookListContainer);