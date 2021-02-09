import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import "./assets/scss/reset.css"
import "./assets/scss/style.scss";

import App from './App'

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)