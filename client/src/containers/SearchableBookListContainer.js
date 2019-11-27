import React, { PureComponent } from 'react';
import '../css/BookListContainer.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchBookList } from '../actions/searchBookList';
import { addBookFromSearch } from '../actions/wishList';

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
           
            <span>
                <p>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                    {/*Passing props with Link react-router to `/search/books/:id` that is connected to Book component*/}
                    <Link to={{
                        pathname: `/search/books/${book.volumeInfo.title}`,
                        data: {
                            title: book.volumeInfo.title,
                            author: book.volumeInfo.authors.join(''),
                            info: book.volumeInfo.infoLink,
                            image: book.volumeInfo.imageLinks.thumbnail,
                            description: book.volumeInfo.description
                        }

                    }} ><h3>{ book.volumeInfo.title }</h3></Link>
                
                    <button onClick={ () => this.handleAddBook(book) }>Add Book to Wishlist</button>
                </p> 
            </span>
        ));
        return renderBooks;
    };
    
    render () {
        return (
            <div className="BookListContainer">
                <form className='searchForm' onSubmit={this.handleSubmit}>
                    <label htmlFor='query'><h1>Search for Book</h1></label>
                    <input 
                      id='query' 
                      type='text' 
                      aria-label='Search for Book' 
                      aria-required='true' 
                      name='query' 
                      onChange={this.handleChange} 
                      value={this.state.query}/>
                    <button type='submit'>Search</button>
                </form>

                {typeof this.props.books === 'object' && this.props.books.length > 0 && <h2>Books By Search:</h2>}
                
                {this.handleLoading()}
            </div>
        );
    };

};

function mapDispatchToProps(dispatch) {
    return { 
        fetchSearchBookList: (query) => dispatch(fetchSearchBookList(query)),
        addBook: book => dispatch(addBookFromSearch(book))
    }
};

function mapStateToProps(state) {
    return { 
        books: state.searchBookList
     }
};

export default connect(mapStateToProps, mapDispatchToProps) (SearchableBookListContainer);