import React from 'react';

const WishList = props => {
    return (
        <div>
            <span>
                <img
                    src='/download.jpeg'
                    alt={ props.book.title }
                />
                <p>{ props.book.title }</p> 
                <p>by { props.book.author }</p>
                <p>More Info: { props.book.moreInfo } </p>
                <p> <button onClick={ () => props.deleteBook(props.book.id)}>Click here to delete from list</button></p>
            </span>
            
        </div>
    );
};

export default WishList;


