import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import AppRouter from './Routers/AppRouter';
import './sass/style.css';

ReactDOM.render(<AppRouter/>, document.querySelector("#root"));