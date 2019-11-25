import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// Newer way of setting up middleware
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
    //We pass our store as a prop to Provider and wrap our App component so all our components will have access to our Redux store and/or dispatch actions via the connect function.
    //Provider tells to our Redux app when there has been a change in state and has to re renders via the connect function. We have to specify which changes to the store's state should prompt a re-render of the application.
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

