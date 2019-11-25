import uuid from 'uuid';

function wishListReducer ( state = [], action) {
    switch (action.type) {
        case 'ADD_BOOK':
            const book = {
                id: uuid(),
                title: action.book.title,
                author: action.book.author,
                image: action.book.image,
                moreInfo: action.book.moreInfo
            };

            return state.concat(book);

        case 'DELETE_BOOK':
            return state.filter( book => book.id !== action.book );

        default:
            return state;
    };
};

export default wishListReducer;