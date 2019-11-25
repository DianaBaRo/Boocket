import React, { PureComponent } from 'react';
import '../css/BookListContainer.css';
import { connect } from 'react-redux';
import WishList from '../components/WishList';
import { deleteBook } from '../actions/wishList';

class WishListContainer extends PureComponent {
    renderBooks = () => {
        return this.props.books.map( book => <WishList deleteBook={this.props.deleteBook} key={book.id} book={book} />)
    }
    render () {
        return (
            <div className="BookListContainer">
                <h1>My wishlist</h1>
                {this.renderBooks()}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        books: state.wishList
    };
};

const mapDispatchToProps = dispatch => {
    return { deleteBook: book => dispatch(deleteBook(book)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(WishListContainer);