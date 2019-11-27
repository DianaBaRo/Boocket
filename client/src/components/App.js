import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import SearchableBookListContainer from '../containers/SearchableBookListContainer';
import Home from './Home';
import NotFound from './NotFound';
import Book from './Book';
import WishListContainer from '../containers/WishListContainer';
import CreateBook from '../containers/CreateBook';

const App = () => {
    return (
        <Router>
            <>
                <NavBar />
                <Switch>
                    <Route path='/search/books/:title' component={ Book } />
                    <Route path='/search' component={ SearchableBookListContainer } />
                    <Route path='/create-book' component={ CreateBook } />
                    <Route path='/wishlist/books/:title' component={ Book } />
                    <Route path='/wishlist' component={ WishListContainer } />
                    <Route exact path='/' component={ Home } />
                    <Route component={ NotFound } />
                </Switch>
            </>
        </Router>
    );
};

export default App;