import React from 'react';
import ReactDOM from 'react-dom';
import '../public/styles/index.scss';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
