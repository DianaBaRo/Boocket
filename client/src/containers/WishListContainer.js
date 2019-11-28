import React, { PureComponent } from 'react';
import '../css/BookListContainer.css';
import { connect } from 'react-redux';
import { deleteBook } from '../actions/wishList';
import { getMyWishList } from '../actions/wishList';
import { Link } from 'react-router-dom';


class WishListContainer extends PureComponent {

    componentDidMount() {
        this.props.getMyWishList();
    };

    handleDeleteBook = (book) => {
        console.log(book)
        this.props.deleteBook(book);
    };

    handleLoading = () => {
        const books = this.props.books.length > 0 ? 
        this.props.books.map( book => (

            <div>
                <span>
                    <img
                        src={ book.image === "" || book.image === null ? '/download.jpeg' : book.image }
                        alt={ book.title }
                    />
                    {/*Passing props with Link react-router to `/wishlist/books/:id` that is connected to Book component*/}
                    <Link to={{
                        pathname: `/wishlist/books/${book.title}`,
                        state: book
                    }} ><h3>{ book.title }</h3></Link>
                    <p>by { book.author }</p>
                    
                    <p> <button onClick={ () =>  this.handleDeleteBook( book.id )}>Click here to delete from list</button></p>
                    
                </span>
            
            </div>
        ))
        : null
        return books
        
    };
    
    render () {
        return (
            <div className="BookListContainer">
                <h1>My wishlist</h1>
                 {this.handleLoading()}
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
    return { 
        getMyWishList: () => dispatch(getMyWishList()),
        deleteBook: book => dispatch(deleteBook(book)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(WishListContainer);