import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './piza.jpg';
import App from './App';
import Header from './Header';
import FormElement from './FormElement';
import FoodItemList from './FoodItemList';
import Item from './Item';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
