import React, { PureComponent } from 'react';
import '../css/BookListContainer.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLatestBookList } from '../actions/latestBookList';
import { addBook } from '../actions/wishList';

class LatestBookListContainer extends PureComponent {

    handleAddBook = (book) => {
        this.props.addBook(book);
    };

    componentDidMount() {
        this.props.fetchLatestBookList();
    };

    handleLoading = () => {
        const renderBooks = this.props.books.map(book => (
            <span>
                <p>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                    <Link to={{
                        pathname: `/new-releases/books/${book.volumeInfo.title}`,
                        state: book
                    }} ><h3>{ book.volumeInfo.title }</h3></Link>
                
                </p>
                
                <button onClick={ () => this.handleAddBook({ author: book.volumeInfo.authors.concat(' '), title: book.volumeInfo.title , image: book.volumeInfo.imageLinks.thumbnail, moreInfo: book.volumeInfo.infoLink }) }>Add Book to Wishlist</button>
            </span>  
        ));

        return renderBooks;
    };

    render () {
        return (
            <div className="BookListContainer">
                {this.handleLoading()}
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return { 
        fetchLatestBookList: () => dispatch(fetchLatestBookList()),
        addBook: book => dispatch(addBook(book))
    }
};

function mapStateToProps(state) {
    return { 
        books: state.latestBookList
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (LatestBookListContainer);