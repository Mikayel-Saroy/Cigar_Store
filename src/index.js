import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";
import {addButton, subscribe} from './redux/state';

let rerenderEntireTree = (data) => {
    ReactDOM.render(<App state={data} addButton={addButton}/>, document.getElementById('root'));
};
rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
