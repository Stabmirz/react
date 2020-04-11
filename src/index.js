import React from 'react';
import ReactDOM from 'react-dom';
import './Components/index.css';
// import App from './Components/App';
import BooksApp from './Components/BooksApp'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BooksApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
