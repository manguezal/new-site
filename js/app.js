/*Hello World!*/
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import $ from 'jquery';
require('../scss/main.scss');

ReactDOM.render(<Home/>, document.getElementById('wrapper'));