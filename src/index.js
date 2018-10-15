// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';


import Routes from './Router/Router';

ReactDOM.render(
    <Routes history={browserHistory}/>,
    document.getElementById('root')
)
