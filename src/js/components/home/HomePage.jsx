"use strict";

var React = require('react');
var ReactDOM = require("react-dom");

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <h1> This is the Home page</h1>
                <h2>This should display a splash intro</h2>
            </div>
        )
    }
});

export default Home;