import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";

let rerenderEntireTree = (data) => {
    ReactDOM.render(<App state={data}
                         dispatch={store.dispatch.bind(store)}
                         // plusButton={store.plusButton.bind(store)}
                         // minusButton={store.minusButton.bind(store)}
                         // addToCart={store.addToCart.bind(store)}
                         // removeFromCart={store.removeFromCart.bind(store)}
    />, document.getElementById('root'));
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
