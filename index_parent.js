$ = jQuery = require('jquery');
import { React } from 'react';
import { ReactDOM } from 'react-dom/client';

//  Import needed libraries
var React = require('react');
var ReactDOM = require('react-dom');

// Reference the home page
var Home = require('./src/js/components/home/HomePage.jsx');

//  Render the app by id
ReactDOM.render(<Home />, document.getElementById('app'));