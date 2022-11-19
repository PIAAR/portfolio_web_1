import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/index.css';
import App from './app/App_old';
import reportWebVitals from './reportWebVitals';

// //  Import needed libraries
// var React = require('react');
// var ReactDOM = require('react-dom');

// // Reference the home page
var Home = require('../src/js/components/home/HomePage.jsx');

// //  Render the app by id
// ReactDOM.render(<Home />, document.getElementById('app'));

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
